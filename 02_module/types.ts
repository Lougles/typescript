// Correctly typescript types
let age: number = 50;
let myName: string = 'Vova';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };

// variable which can save any value
let anything: any = -20;
anything = 'Text';
anything = {};

//change unknow type to string
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

//array type
let person: [string, number]
person = ['Max', 21];

// types for variables and functions
enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}

let stringOrNumber : string | number = 10;
let literal: 'enable' | 'disable';

function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError():never {
  throw new Error('Error');
}

//custom types
type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open'| 'close',
  details?: {
    createAt: string,
    updateAt: string,
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}