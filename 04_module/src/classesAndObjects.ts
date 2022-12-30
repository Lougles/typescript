console.group();

class Zhiguli_8 {
  private needRepair = false;
  private maxEngineLoad = 3;

  /**
   * Заводит двигатель машины если это возможно
   */
  private checkEngine () {
    // Проверяем не сломан ли двигатель
    if (this.needRepair) {
      throw new Error('Engine not work');
    }

    // Пробуем его завести
    const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
    if (this.maxEngineLoad === engineLoad) {
      this.needRepair = true;
      throw new Error('Engine broken again');
    }
  }

  /**
   * Завести двигатель
   */
  public startEngine () {
    this.checkEngine();

    console.log('Ta-ta-ta-ta');
  }

  /**
   * Ремонт двигателя
   */
  public repairEngine () {
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
} catch (e) {
  console.log(e);
  auto.repairEngine();
  auto.startEngine();
}
console.groupEnd();
console.group();

//encapsulation (private and public, access modificator)
class myClass {
  private protectedMethod () {
    return 'Something';
  }

  public myPublicMethod() {
    return this.protectedMethod();
  }
}

//inheritance   (use parent's class functions)
class classA {
  myMethod () {
    return "I'm a class A";
  }
}

class classB extends classA {
  
}

//polymorphism  (you can change return value of parent's class functions)
class Animal {
  public say() {
    console.log("Nothing to say"); 
  }
}
  
class Cat extends Animal {
  public say() { 
    console.log("Meow");
  }
}
  
class Dog extends Animal {
  public say() {
    console.log("Woof");
  }
}

const cat = new Cat();
cat.say(); // Meow

const dog = new Dog();
dog.say(); // Woof

//abstraction (you have to use like that: one function do one thing, and finally last abstraction function use previous functions)
class classAbstraction {
  private process1 () {
    return 1;
  }
  private process2 () {
    return 2;
  }
  private process3 () {
    return 3;
  }

  public superProcess () {
    return this.process1() + this.process2() + this.process3();
  }
}
//SOLID

//Liskov Barbara
class Vehicle {
 
  public startEngine() {
      // Default engine start functionality
  }

  public accelerate() {
      // Default acceleration functionality
  }
}
class Car extends Vehicle {
  public startEngine() {
      this.engageIgnition();
      super.startEngine();
  }

  private engageIgnition() {
      // Ignition procedure
  }

}

class ElectricBus extends Vehicle {
  public accelerate() {
      this.increaseVoltage();
      this.connectIndividualEngines();
  }

  private increaseVoltage() {
      // Electric logic
  }

  private connectIndividualEngines() {
      // Connection logic
  }
}
console.groupEnd();
console.group();


class Driver {
  go(v: Vehicle) {
      v.startEngine();
      v.accelerate();
  }
}

//Interface sugregation principle
interface JsonInterface {
  jsonParse(): string;
}

interface HtmlInterface {
  htmlParse(): string;
}

class Parser implements JsonInterface, HtmlInterface {
  public jsonParse(): string {
      return 'Json';
  }

  public htmlParse(): string {
      return 'Html';
  }
}

//Dependency inversion principle 

// DON'T DO LIKE THIS
class AnimalOne {
  eat () {
    const feeder = new Feeder();
    feeder.getFood();
    // eat
  }
}

// Correctly
class Feeder {
  getFood() {
    return 'eat'
  }
}
class Animals {
  private foodProvider: Feeder;

  constructor (feeder: Feeder) {
    this.foodProvider = feeder;
  }
  eat () {
    this.foodProvider.getFood();
    // eat
  }
}

//Constructor and Methods

class House {
  private tenants:string[] = [];

  constructor (private readonly type: string, private street: string) {}

  public showAddress (this: House) {
    console.log('Address: ' + this.street);
  }

  public showType (this: House) {
    console.log('House Type: ' + this.type);
  }

  public addTenant (tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants () {
    console.log(this.tenants);
  }
}

class StoneHouse extends House  {
  private chargeOfTheHouse: string; // Главный в доме

  constructor (street: string, generalTenant: string) {
    super('stone', street); // Вызов родительского конструктора

    // Добавляем владельца квартиры
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  }

  public showTenants () {
    console.log('General: ' + this.chargeOfTheHouse);

    // Запускаем родительский метод showTenants();
    super.showTenants();
  }
}

const stoneHouse = new StoneHouse('Stone-world', 'Max');

stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');

stoneHouse.showTenants();
stoneHouse.showType();

class A {
  // private someProperty = 'str';  //if you use private you will get a mistake
  protected someProperty = 'str';
}

class B extends A {
  showProperty () {
    console.log(this.someProperty);
  }
}

// GETTER - SETTER

type PersonInformation = {
  firstName?: string;
  lastName?:  string;
}

class Person {
  private personInfo: PersonInformation = {};

  set firstName (value: string) {
    console.log('firstName added');
    this.personInfo.firstName = value;
  }

  set lastName (value: string) {
    console.log('lastName added');
    this.personInfo.lastName = value;
  }

  get info () {
    const { personInfo } = this;
    return `${personInfo.lastName} ${personInfo.firstName}`;
  }
}

const person = new Person();

person.lastName = 'Pupkin';
person.firstName = 'Petha';

console.log(person.info);

// Static methods and properties

class UseStatic {
  private static count = 0;

  constructor () {
    UseStatic.count += 1;
  }

  public static itStaticMethod () {
    console.log('Run static method');
  }

  public showCount () {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.itStaticMethod();

// Readonly

interface ITest {
  readonly name: string;
}

const pers:ITest = {
  name: 'Person Name',
}

// pers.name = 'Person name';    <-- Cannot assign to 'name' because it is a read-only property

// extending interfaces 

interface IPersonOther {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilotOther extends IPersonOther {
  flyMessage(): void;
}

// interfaces like type of functions 

type AddFunc = (n1: number, n2: number) => number;

let add: AddFunc;

add = (n1:number, n2: number) => {
  return n1 + n2;
}

//type AddNewFunc = (n1: number, n2: number) => number;
interface AddNewFunc {
  (n1: number, n2: number): number;
}

let addNew: AddNewFunc;

add = (n1:number, n2: number) => {
  return n1 + n2;
}

//Optional parametres

interface IPersonOptional {
  name?: string;
  age: number;
}

class PersonOptional implements IPersonOptional {
  name?: string;
  
  constructor (public age: number) {}

  setName (n:string) {
    this.name = n;
  }
}

// extension example

type ItemType = {
  name: string;
}

class Catalog {
  showCatalog (items: ItemType[]) {
    items.forEach((item) => {
      console.log(item.name);
    });
  }
}

class Items {
  private items: ItemType[] = [];
  setItem (name: string) {
    this.items.push({name});
  }

  getItems (): ItemType[] {
    return this.items;
  }
}

const items = new Items();
const catalog = new Catalog();

items.setItem('Catalog 1');
items.setItem('Catalog 2');
items.setItem('Catalog 3');

catalog.showCatalog(items.getItems());



//Assosiation exampple

class DB {
  connection () {
    console.log('Db connected');
  }
}

class Server {
  constructor (private database: DB) {}

  init () {
    this.database.connection();
  }
}

const db = new DB();
const server = new Server(db);

server.init();

console.groupEnd();
//===================================================================================================



console.group('Aggregation')
console.log('Агрегация — это специализированная разновидность ассоциации, которая описывает отношения один-ко-многим, многие-ко-многим, часть-целое между несколькими объектами, тогда как ассоциация устанавливает связь только между двумя объектами.')

class MyPerson {
  constructor (public name: string) {}
}

class Home {
  private guests: MyPerson[] = [];

  addGuest (guest: MyPerson) {
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
console.log(home)
console.groupEnd();
//===================================================================================================

console.group('Композиція')

class PersonComposition {
  constructor (public name: string) {}
}

class HomeComposition {
  private tenants: PersonComposition[] = [];

  addTenant (name: string) {
    const tenant = new PersonComposition(name);
    this.tenants.push(tenant);
  }
}

const homeComposition = new HomeComposition();

homeComposition.addTenant('Max');
homeComposition.addTenant('Anton');
homeComposition.addTenant('Nikita');

console.log(homeComposition)

console.groupEnd();
//===================================================================================================
console.group('singleton')

class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }

      return Singleton.instance;
  }

  public someBusinessLogic() {
      // ...
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
    console.log('Тот же объект');
} else {
    console.log('Че-то не так, получили разные объекты');
}

console.log('----------')

class SingletonTwo {
  private static instance: SingletonTwo;

  constructor() {
    if (SingletonTwo.instance) {
      return SingletonTwo.instance;
    }

    SingletonTwo.instance = this;

    return SingletonTwo.instance;
  }

  public someBusinessLogic() {
      // ...
  }
}

const s1Two = new SingletonTwo();
const s2Two = new SingletonTwo();

if (s1Two === s2Two) {
    console.log('Тот же объект');
} else {
    console.log('Че-то не так, получили разные объекты');
}

console.groupEnd();


console.group('Фабрика');
console.log('Используется, когда нам нужно много однотипных объектов общим интерфейсом.')

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
      // Вызываем фабричный метод, чтобы получить объект-продукт.
      const product = this.factoryMethod();
      // Далее, работаем с этим продуктом.
      return `Creator: I'm starting ${product.operation()}`;
  }
}

console.log('первый подход (ПЛОХОЙ)')
interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
      return 'ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
      return 'ConcreteProduct2';
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
      return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
      return new ConcreteProduct2();
  }
}

const concrete1 = new ConcreteCreator1();
const concrete2 = new ConcreteCreator2();

console.log(concrete1.someOperation());
console.log(concrete2.someOperation());



console.log('Second (Correct)')

interface IProduct {
  getInfo(): void;
}

class Small implements IProduct{
  getInfo(): void {
    console.log("I'm small");
  }
}
class Big implements IProduct{
  getInfo(): void {
    console.log("I'm big");
  }
}

class Factory {
  private objects = {
    small: Small,
    big: Big,
  } as any;

  create (type:string): IProduct {
    const { objects } = this;

    type = type.toLowerCase();
    if (!objects[type]) {
      throw new Error('No classes to create');
    }

    return new objects[type]();
  }
}

const factory = new Factory();

const small = factory.create('small');
const big = factory.create('big');

small.getInfo();
big.getInfo();

console.groupEnd();