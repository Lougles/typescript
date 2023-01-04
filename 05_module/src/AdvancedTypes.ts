
//======================================== Intersaction Types ================================================

console.group('Intersaction Types')

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

console.log('and now join it together')

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Anton',
  privileges: ['drop-all'],
  startDate: new Date()
};

console.log('the same with interface')

interface IAdmin  {
  name: string;
  privileges: string[];
};

interface IEmployee  {
  name: string;
  startDate: Date;
};

type IElevatedEmployee = Admin & Employee;

//If we want to save to interface, short way is below 

interface MyElevatedEmployee extends Employee, Admin {}

console.groupEnd();
//======================================== Type Guards ================================================

console.group('Type Guards')

type ComplexType = string | number;

function combine (a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// When we have mixed type from objects!
type GuardsAdmin = {
  name: string;
  privileges: string[];
};

type GuardsEmployee = {
  name: string;
  startDate: Date;
};

type GuardsUnknownObject = GuardsEmployee | GuardsAdmin;

function showFields (e1: GuardsUnknownObject) {
  console.log(e1.name);
  if ('privileges' in e1) {
    console.log(e1.privileges);
  }
  if ('startDate' in e1) {
    console.log(e1.startDate);
  }
}


// Operator in allow to check if there is a field in object
// And now if is it a classes
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// instanceof - what class does the object belong to

console.groupEnd();


//======================================== Type Casting ================================================

console.group('Type Casting')
//first variant
const input = <HTMLInputElement>document.getElementById('inputEmail');

input.value = 'test@test.ts';

//second variant
const inputTwo = document.getElementById('inputEmail') as HTMLInputElement;

inputTwo.value = 'test@test.ts';
//third variant
const inputThird = document.getElementById('inputEmail');

if (inputThird) {
  (inputThird as HTMLInputElement).value = 'test@test.ts';
}
console.groupEnd();

//======================================== Index Properties ================================================

console.group('Index Properties')

interface Person {
  name: string;
  [x: string]: string;
}

const userProperties: Person = {
  name: 'Alex',
  gender: 'MAN',
  country: 'Ukraine',
}
console.groupEnd();

//======================================== Optional Chaining ================================================


console.group('Optional Chaining')


interface ChainingPerson {
  name: string;
  additionInfo?: {
    someInfo: string;
  }
}

const userChaining: ChainingPerson = {
  name: 'Alex'
}

console.log(userChaining?.additionInfo?.someInfo);

//Ми поставили ? перед викликом властивості, в якій ми не впевнені, тим самим уникнули помилки.

//В JS нам довелося б писати ось так.
console.log(userChaining.additionInfo && userChaining.additionInfo.someInfo);

console.groupEnd();

//======================================== Nullish Coalescing ================================================

console.group('Nullish Coalescing')

//There is such code
const userInputCoalescing = '';

const storeCoalescing = userInputCoalescing || 'DEFAULT';

console.log(storeCoalescing);

// This code return "DEFAULT"

//Але можливо нам би хотілося повернути DEFAULT тільки у тому випадку, 
//якщо там реально null або undefined. Для цього є оператор ??.

const userInput = '';

const store = userInput ?? 'DEFAULT';

console.log(store);

//І тепер DEFAULT буде тільки тоді, коли userInput дорівнюватиме null або undefined.
console.groupEnd();

//======================================== Function Overload ================================================

console.group('Function Overload')

//Зазвичай, в суворо типізованих мовах є перевантаження операторів, 
//це коли залежно від типу (або кількості) вхідних параметрів повертається різний результат і різні типи.
//Але якщо в цих мовах це явно функції з різною реалізацією, але з тим самим ім'ям, то в TypeScript це більше як костиль, 
//який дозволяє повернути інший тип даних, залежно від вхідних параметрів.

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

//Просто зверху функції ми робимо дублі з її ім'ям, вказуючи вхідні типи аргументів і тип, що повертається.
//Зрозуміліший приклад з кастомними типами, ми перевіряємо користувача та створюємо об'єкт різних типів, 
//залежно від типу користувача, адмін це чи звичайний користувач.

type AdminType = {
  type: 'admin';
  name: string;
}

type UserType = {
  type: 'user';
  name: string;
}

function checkUser (name: string, type: 'admin'): AdminType;
function checkUser (name: string, type: 'user'): UserType;
function checkUser (name: string, type: 'admin' | 'user') {
  if (type === 'admin') {
    return {
      name,
      type: 'admin'
    }
  } else {
    return {
      name,
      type: 'user'
    }
  }
}

const user = checkUser('Nikita', 'user');
const admin = checkUser('Tonya', 'admin');

//Nikita буде в об'єкті з типом AdminType, а Tonya із типом UserType. 
//Залежно від вхідних параметрів, ми повернули результат різних типів.

console.groupEnd();

//======================================== Generics ================================================
console.group('Generics')

let arrGenerics: any[] = [];

let arr: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

console.groupEnd();

//======================================== Generic function/method  ================================================
console.group('Generic function/method')

function mergeGen (objA: object, objB: object) {
  return Object.assign(objA, objB);
}
const mergedGeneric = mergeGen({name: 'Alisa'}, {age: 28});

// mergedGeneric.name;  <---  mistake

const mergedBad = mergeGen({name: 'Alisa'}, {age: 28}) as {name: string, age: number}; //Bad code

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);    incorrect example in lection. Extends works better, example below
// }

// const merged = merge({name: 'Alisa'}, {age: 28});

// merged.name; <--- mistake

type PersonGeneric = {
  name: string;
}

type AdditionFields = {
  age: number;
}

// const mergedPerson = merge<PersonGeneric, AdditionFields>({name: 'Alisa'}, {age: 28});

console.groupEnd();


//======================================== Extends  ================================================
console.group('Extends')

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({name: 'Alisa'}, { age: 20 });

merged.name;


interface ILength {
  length: number;
}

function getLength<T extends ILength>(str:T) {
  return str.length;
}

getLength('text');
console.groupEnd();

//======================================== keyof  ================================================


function extractValue<T extends object, U extends keyof T> (obj:T, key:U) {
  return obj[key];
}

extractValue({name: 'Sergei'}, 'name');

//======================================== Generic Classes  ================================================

class StoreClass<T> {
  private data: T[] = [];

  addItem (item:T):void {
    this.data.push(item);
  }

  getItems (): T[] {
    return this.data;
  }
}

const storeClasses = new StoreClass<string>();

storeClasses.addItem('test');