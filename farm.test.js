const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop } = require("./farm.js");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
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
expect(getProfitForCrop({crops})).toEqual([230, 150, 150, 300]);
    });
});