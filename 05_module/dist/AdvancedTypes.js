"use strict";
var _a;
console.group('Intersaction Types');
console.log('and now join it together');
const e1 = {
    name: 'Anton',
    privileges: ['drop-all'],
    startDate: new Date()
};
console.log('the same with interface');
;
;
console.groupEnd();
console.group('Type Guards');
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function showFields(e1) {
    console.log(e1.name);
    if ('privileges' in e1) {
        console.log(e1.privileges);
    }
    if ('startDate' in e1) {
        console.log(e1.startDate);
    }
}
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
console.groupEnd();
console.group('Type Casting');
const input = document.getElementById('inputEmail');
input.value = 'test@test.ts';
const inputTwo = document.getElementById('inputEmail');
inputTwo.value = 'test@test.ts';
const inputThird = document.getElementById('inputEmail');
if (inputThird) {
    inputThird.value = 'test@test.ts';
}
console.groupEnd();
console.group('Index Properties');
const userProperties = {
    name: 'Alex',
    gender: 'MAN',
    country: 'Ukraine',
};
console.groupEnd();
console.group('Optional Chaining');
const userChaining = {
    name: 'Alex'
};
console.log((_a = userChaining === null || userChaining === void 0 ? void 0 : userChaining.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo);
console.log(userChaining.additionInfo && userChaining.additionInfo.someInfo);
console.groupEnd();
console.group('Nullish Coalescing');
const userInputCoalescing = '';
const storeCoalescing = userInputCoalescing || 'DEFAULT';
console.log(storeCoalescing);
const userInput = '';
const store = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(store);
console.groupEnd();
console.group('Function Overload');
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function checkUser(name, type) {
    if (type === 'admin') {
        return {
            name,
            type: 'admin'
        };
    }
    else {
        return {
            name,
            type: 'user'
        };
    }
}
const user = checkUser('Nikita', 'user');
const admin = checkUser('Tonya', 'admin');
console.groupEnd();
console.group('Generics');
let arrGenerics = [];
let arr = [];
const promise = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!');
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
console.groupEnd();
console.group('Generic function/method');
function mergeGen(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedGeneric = mergeGen({ name: 'Alisa' }, { age: 28 });
const mergedBad = mergeGen({ name: 'Alisa' }, { age: 28 });
console.groupEnd();
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alisa' }, { age: 20 });
merged.name;
function getLength(str) {
    return str.length;
}
getLength('text');
//# sourceMappingURL=AdvancedTypes.js.map