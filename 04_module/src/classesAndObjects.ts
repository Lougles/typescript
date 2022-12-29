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
  private street:string;
  private tenants:string[] = [];

  constructor (n: string) {
    this.street = n;
  }

  public showAddress (this: House) {
    console.log('Address: ' + this.street);
  }

  public addTenant (tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants () {
    console.log(this.tenants);
  }
}

const house = new House('Middle-earth');

house.addTenant('Anton');
house.addTenant('Nikita');

house.showTenants();

house.showAddress();


class A {
  // private someProperty = 'str';  //if you use private you will get a mistake
  protected someProperty = 'str';
}

class B extends A {
  showProperty () {
    console.log(this.someProperty);
  }
}



