"use strict";
console.group();
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
console.groupEnd();
console.group();
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
console.groupEnd();
console.group();
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
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log('Address: ' + this.street);
    }
    showType() {
        console.log('House Type: ' + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super('stone', street);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    showTenants() {
        console.log('General: ' + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
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
class Person {
    constructor() {
        this.personInfo = {};
    }
    set firstName(value) {
        console.log('firstName added');
        this.personInfo.firstName = value;
    }
    set lastName(value) {
        console.log('lastName added');
        this.personInfo.lastName = value;
    }
    get info() {
        const { personInfo } = this;
        return `${personInfo.lastName} ${personInfo.firstName}`;
    }
}
const person = new Person();
person.lastName = 'Pupkin';
person.firstName = 'Petha';
console.log(person.info);
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    static itStaticMethod() {
        console.log('Run static method');
    }
    showCount() {
        console.log(UseStatic.count);
    }
}
UseStatic.count = 0;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.itStaticMethod();
const pers = {
    name: 'Person Name',
};
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let addNew;
add = (n1, n2) => {
    return n1 + n2;
};
class PersonOptional {
    constructor(age) {
        this.age = age;
    }
    setName(n) {
        this.name = n;
    }
}
class Catalog {
    showCatalog(items) {
        items.forEach((item) => {
            console.log(item.name);
        });
    }
}
class Items {
    constructor() {
        this.items = [];
    }
    setItem(name) {
        this.items.push({ name });
    }
    getItems() {
        return this.items;
    }
}
const items = new Items();
const catalog = new Catalog();
items.setItem('Catalog 1');
items.setItem('Catalog 2');
items.setItem('Catalog 3');
catalog.showCatalog(items.getItems());
class DB {
    connection() {
        console.log('Db connected');
    }
}
class Server {
    constructor(database) {
        this.database = database;
    }
    init() {
        this.database.connection();
    }
}
const db = new DB();
const server = new Server(db);
server.init();
console.groupEnd();
console.group();
class MyPerson {
    constructor(name) {
        this.name = name;
    }
}
class Home {
    constructor() {
        this.guests = [];
    }
    addGuest(guest) {
        this.guests.push(guest);
    }
}
const home = new Home();
const guest1 = new MyPerson('Max');
const guest2 = new MyPerson('Anton');
const guest3 = new MyPerson('Nikita');
home.addGuest(guest1);
home.addGuest(guest2);
home.addGuest(guest3);
console.log(home);
console.groupEnd();
console.group();
class PersonComposition {
    constructor(name) {
        this.name = name;
    }
}
class HomeComposition {
    constructor() {
        this.tenants = [];
    }
    addTenant(name) {
        const tenant = new PersonComposition(name);
        this.tenants.push(tenant);
    }
}
const homeComposition = new HomeComposition();
homeComposition.addTenant('Max');
homeComposition.addTenant('Anton');
homeComposition.addTenant('Nikita');
console.log(homeComposition);
console.groupEnd();
//# sourceMappingURL=classesAndObjects.js.map