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

//Abstract classes

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane () {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize extends Plane {
  public startEngine () {
    // Запускаем винты двигателя
    return true;
  }
}

class Boeing extends Plane {
  public startEngine () {
    // Разогреваем реактивные турбины
    return true;
  }
}

//interface of objects
// Interface we can use only for objects, and not for classes

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   }
// };

// user.greet('Всем привет я');

//type can use for classes and for object
type IPerson = {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: 'Anthony',
  age: 21,

  greet(phrase) {
    console.log(phrase + ' ' + this.name );
  },
};


