getYieldForPlant = (corn, environmentFactors) => {

  if (!environmentFactors) {
    return corn.yield;
  }

  const sunAmount = environmentFactors.sun;
  const sunFactor = (100 + corn.factor.sun[sunAmount]) /100;

  const windAmount = environmentFactors.wind;
  const windFactor = (100 + corn.factor.wind[windAmount]) /100;

  const rainAmount = environmentFactors.rain;
  const rainFactor = (100 + corn.factor.rain[rainAmount]) /100;

  const soilType = environmentFactors.soil;
  const soilFactor = (100 + corn.factor.soil[soilType]) /100;

  return (corn.yield * sunFactor * windFactor * rainFactor * soilFactor);
};

getYieldForCrop = (input, environmentFactors) => {

    if (!environmentFactors) {
    return input.crop.yield * input.numCrops;
    }

    const sunAmount = environmentFactors.sun;
    const sunFactor = (100 + input.crop.factor.sun[sunAmount]) /100;
  
    const windAmount = environmentFactors.wind;
    const windFactor = (100 + input.crop.factor.wind[windAmount]) /100;
  
    const rainAmount = environmentFactors.rain;
    const rainFactor = (100 + input.crop.factor.rain[rainAmount]) /100;
  
    const soilType = environmentFactors.soil;
    const soilFactor = (100 + input.crop.factor.soil[soilType]) /100;

    return input.crop.yield * input.numCrops * sunFactor * windFactor * rainFactor * soilFactor;

};

getTotalYield = ({crops}) => {

const cropYield = crops.map(({crop, numCrops}) => crop.yield * numCrops);
const initialVal = 0;
const sumTotalYieldArr = cropYield.reduce(
    (nextVal, currentVal) => nextVal + currentVal, initialVal
);
return sumTotalYieldArr;
};

getCostsForCrop = ({crops}) => {
return crops.map(({crop, costs}) => crop.numCrops * costs);
};

getRevenueForCrop = ({crops}) => {
    return crops.map(({crop, revenue}) => crop.numCrops * revenue);
};

getProfitForCrop = ({crops}) => {
    return crops.map(({crop, costs, revenue}) => crop.numCrops * revenue - crop.numCrops * costs);
};

getTotalProfit = ({crops}) => {
const profit = getProfitForCrop({crops});
const initialVal = 0;
const totalProfit = profit.reduce(
    (nextVal, currentVal) => nextVal + currentVal, initialVal
);
return totalProfit;
};


module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop,
getProfitForCrop,
getTotalProfit}