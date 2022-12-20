getYieldForPlant = (x) => {

   return x.yield;
};

getYieldForCrop = (i) => {
    return i.crop.yield * i.numCrops;
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


module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop}