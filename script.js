'use strict';

// Object Copy

let mainObj = {
    inGoodResolution: true,
    sizeX: 1920,
    sizeY: 1080,
    type: "jpg"
};

const newObject = objCopy(mainObj);

newObject.inGoodResolution = true;
newObject.sizeX = 1000;
newObject.sizeY = 1000;
newObject.type = "png";

console.log(mainObj);
console.log(newObject);

// Massive Copy

let arr = [1, 3, 4, 5, 8, 9, "Error"];

const newMassive = arrClone(arr);
newMassive[0] = true;

console.log(arr);
console.log(newMassive);

// Functions

function arrClone(mainArr) {
    let arrCopy = [];

    for(let key in mainArr){
        arrCopy[key] = mainArr[key];
    }

    return arrCopy;
}

function objCopy(mainObject) {
    let newObject = {};

    for (let key in mainObject) {
        newObject[key] = mainObject[key];
    }
    return newObject;
}