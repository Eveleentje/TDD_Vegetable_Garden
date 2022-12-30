const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm.js");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("Get Yield for plant with external factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
            wind: {
                low: 0,
                medium: -30,
                high: -60
            },
            rain: {
                low: -20,
                medium: 0,
                high: 20
            },
            soil: {
                sand: 0,
                clay: 30,
                loam: 10
            }
        },
        };
        
        const environmentFactors = {
        sun: "low",
        wind: "high",
        rain: "low",
        soil: "clay",
        };
    test("Get yield for plant with environmental factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBeCloseTo(6.24, 2);
    });

});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});


describe("Get yield for crop with external factors", () => {
    test("Get yield for crop, with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                    low: 0,
                    medium: -30,
                    high: -60
                },
                rain: {
                    low: -20,
                    medium: 0,
                    high: 20
                },
                soil: {
                    sand: 0,
                    clay: 30,
                    loam: 10
                }
            }
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            wind: "high",
            rain: "low",
            soil: "clay",
            };
            expect(getYieldForCrop(input, environmentFactors)).toBeCloseTo(6.24, 2);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
           
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

    test("Get total yield with external factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                    low: 0,
                    medium: -30,
                    high: -60
                },
                rain: {
                    low: -20,
                    medium: 0,
                    high: 20
                },
                soil: {
                    sand: 0,
                    clay: 30,
                    loam: 10
                }
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -30
                },
                rain: {
                    low: -40,
                    medium: 0,
                    high: 40
                },
                soil: {
                    sand: 30,
                    clay: 0,
                    loam: -10
                }
            }
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            wind: "high",
            rain: "low",
            soil: "clay",
            };
    });
    expect(getTotalYield({ crops }, environmentFactors)).toBe(0);
});

describe("Get cost for crop", () => {
    test("Calculate cost per crop", () => {
        const maize = {
            name: "maize",
            numCrops: 230
        };
        const avocado = {
            name: "avocado",
            numCrops: 150
        };
        const corn = {
            name: "corn",
            numCrops: 200
        };
        const pumpkin = {
            name: "pumpkin",
            numCrops: 100
        };
const crops = [{crop: maize, costs: 1},
{crop: avocado, costs: 2},
{crop: corn, costs: 1.5},
{crop: pumpkin, costs: 2}];

        expect(getCostsForCrop({crops})).toEqual([230, 300, 300, 200]);
    });
});

describe("Get revenue per crop", () => {
    test("Calculate the revenue per crop", () => {
        const maize = {
            name: "maize",
            numCrops: 230
        };
        const avocado = {
            name: "avocado",
            numCrops: 150
        };
        const corn = {
            name: "corn",
            numCrops: 200
        };
        const pumpkin = {
            name: "pumpkin",
            numCrops: 100
        };
const crops = [{crop: maize, costs: 1, revenue: 2},
{crop: avocado, costs: 2, revenue: 4},
{crop: corn, costs: 1.5, revenue: 3},
{crop: pumpkin, costs: 2, revenue: 5}];
        expect(getRevenueForCrop({crops})).toEqual([460, 600, 600, 500]);
    });
});

describe("Get profit per crop", () => {
    test("Calculate profit per crop", () => {
        const maize = {
            name: "maize",
            numCrops: 230
        };
        const avocado = {
            name: "avocado",
            numCrops: 150
        };
        const corn = {
            name: "corn",
            numCrops: 200
        };
        const pumpkin = {
            name: "pumpkin",
            numCrops: 100
        };
const crops = [{crop: maize, costs: 1, revenue: 2},
{crop: avocado, costs: 2, revenue: 4},
{crop: corn, costs: 1.5, revenue: 3},
{crop: pumpkin, costs: 2, revenue: 5}];
expect(getProfitForCrop({crops})).toEqual([230, 300, 300, 300]);
    });
});

describe("Get total profit", () => {
    test("Calculate total profit", () => {
        const maize = {
            name: "maize",
            numCrops: 230
        };
        const avocado = {
            name: "avocado",
            numCrops: 150
        };
        const corn = {
            name: "corn",
            numCrops: 200
        };
        const pumpkin = {
            name: "pumpkin",
            numCrops: 100
        };
const crops = [{crop: maize, costs: 1, revenue: 2},
{crop: avocado, costs: 2, revenue: 4},
{crop: corn, costs: 1.5, revenue: 3},
{crop: pumpkin, costs: 2, revenue: 5}];
        expect(getTotalProfit({crops})).toBe(1130);
    });
});