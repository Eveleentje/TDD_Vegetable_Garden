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

module.exports = {getYieldForPlant, getYieldForCrop, getTotalYield}