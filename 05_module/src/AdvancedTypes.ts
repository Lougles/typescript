
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

const user: Person = {
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

console.groupEnd();



console.group('')
console.groupEnd();
