"use strict";
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
const user = {
    name: 'Alex',
    gender: 'MAN',
    country: 'Ukraine',
};
console.groupEnd();
console.group('');
console.groupEnd();
console.group('');
console.groupEnd();
//# sourceMappingURL=AdvancedTypes.js.map