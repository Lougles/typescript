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

//================ If we want to save to interface, short way is below ========================

interface MyElevatedEmployee extends Employee, Admin {}

console.groupEnd();

console.group('')
console.groupEnd();
console.group('')
console.groupEnd();
console.group('')
console.groupEnd();
console.group('')
console.groupEnd();
console.group('')
console.groupEnd();
