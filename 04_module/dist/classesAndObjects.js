"use strict";
class Zhiguli_8 {
    constructor() {
        this.needRepair = false;
        this.maxEngineLoad = 3;
    }
    checkEngine() {
        if (this.needRepair) {
            throw new Error('Engine not work');
        }
        const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
        if (this.maxEngineLoad === engineLoad) {
            this.needRepair = true;
            throw new Error('Engine broken again');
        }
    }
    startEngine() {
        this.checkEngine();
        console.log('Ta-ta-ta-ta');
    }
    repairEngine() {
        this.needRepair = false;
        console.log('Engine rebuilt');
    }
}
const auto = new Zhiguli_8();
try {
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
}
catch (e) {
    console.log(e);
    auto.repairEngine();
    auto.startEngine();
}
class myClass {
    protectedMethod() {
        return 'Something';
    }
    myPublicMethod() {
        return this.protectedMethod();
    }
}
class classA {
    myMethod() {
        return "I'm a class A";
    }
}
class classB extends classA {
}
class Animal {
    say() {
        console.log("Nothing to say");
    }
}
class Cat extends Animal {
    say() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    say() {
        console.log("Woof");
    }
}
const cat = new Cat();
cat.say();
const dog = new Dog();
dog.say();
class classAbstraction {
    process1() {
        return 1;
    }
    process2() {
        return 2;
    }
    process3() {
        return 3;
    }
    superProcess() {
        return this.process1() + this.process2() + this.process3();
    }
}
class Vehicle {
    startEngine() {
    }
    accelerate() {
    }
}
class Car extends Vehicle {
    startEngine() {
        this.engageIgnition();
        super.startEngine();
    }
    engageIgnition() {
    }
}
class ElectricBus extends Vehicle {
    accelerate() {
        this.increaseVoltage();
        this.connectIndividualEngines();
    }
    increaseVoltage() {
    }
    connectIndividualEngines() {
    }
}
class Driver {
    go(v) {
        v.startEngine();
        v.accelerate();
    }
}
class Parser {
    jsonParse() {
        return 'Json';
    }
    htmlParse() {
        return 'Html';
    }
}
class AnimalOne {
    eat() {
        const feeder = new Feeder();
        feeder.getFood();
    }
}
class Feeder {
    getFood() {
        return 'eat';
    }
}
class Animals {
    constructor(feeder) {
        this.foodProvider = feeder;
    }
    eat() {
        this.foodProvider.getFood();
    }
}
class House {
    constructor(n) {
        this.tenants = [];
        this.street = n;
    }
    showAddress() {
        console.log('Address: ' + this.street);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
const house = new House('Middle-earth');
house.addTenant('Anton');
house.addTenant('Nikita');
house.showTenants();
house.showAddress();
class A {
    constructor() {
        this.someProperty = 'str';
    }
}
class B extends A {
    showProperty() {
        console.log(this.someProperty);
    }
}
//# sourceMappingURL=classesAndObjects.js.map