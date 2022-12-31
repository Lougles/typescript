"use strict";
console.group('Practice');
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    getSignature() {
        return this.signature;
    }
}
class HomePerson {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class AbstractHouse {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    }
}
class MyHouse extends AbstractHouse {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
const key = new Key();
const house = new MyHouse(key);
const newPerson = new HomePerson(key);
house.openDoor(newPerson.getKey());
house.comeIn(newPerson);
console.groupEnd();
//# sourceMappingURL=practice.js.map