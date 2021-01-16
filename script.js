'use strict';

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

// Functions

function objCopy(mainObject) {
    let newObject = {};

    for (let key in mainObject) {
        newObject[key] = mainObject[key];
    }
    return newObject;
}