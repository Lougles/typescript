//=================================================== Декоратори методів ===========================================================

function ShowMeParams (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('target',target);
  console.log('name', name);
  console.log('descriptor', descriptor);
}

class Notifier {
  @ShowMeParams
  showMessage () {
    console.log('Show message');
  }
}


function AutoBind (_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    }
  }
}

class NotifierNew {
  @AutoBind
  showMessage () {
    console.log('Show message');
  }
}

const notifier = new Notifier();

const showMessage = notifier.showMessage;

showMessage();



function AddTax (taxPercent: number) {
  return (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value as Function;
  
    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);

          return result + (result / 100 * taxPercent)
        } 
        
      }
    }
  };
}

class Payment {
  @AddTax(20)
  pay (money: number):number {
    return money;
  }
}

const payment = new Payment();

console.log('Amount with tax: ', payment.pay(100));

//=================================================== Декоратори параметрів ===========================================================

//Подивимося, що він приймає

function CheckEmailTest (target: any, name: string, position: number) {
  console.log('target',target);
  console.log('position', position);
  console.log('name', name);
}

class PersonTest {
  setEmail (@CheckEmail email: string) {
    console.log(email);
  }
}

//Не густо, якщо ми хочемо якось провалідувати це поле, нам цього не вистачить. 
//Давайте ще додамо декоратор на метод і спробуємо якось це зробити.


function CheckEmail (target: any, name: string, position: number) {
  if (!target[name].validation) {
    target[name].validation = {};
  }
  Object.assign( target[name].validation, {
    [position]: (value:string) => {
      if (value.includes('@')) {
        return value;
      }
      throw new Error('No valid field');
    }
  });
}

function Validation (_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
        if (method.validation) {
          args.forEach((item, index) => {
            if (method.validation[index]) {
              args[index] = method.validation[index](item);
            }
          });
        }
        return method.apply(this, args);
      } 
      
    }
  }
}

class PersonParametres {
  @Validation
  setEmail (@CheckEmail email: string) {
    console.log(email);
  }
}

const person = new PersonParametres();

// person.setEmail('testgmail.com');

//Ми передали неправильний email, подивимося на результат.

//А тепер давайте передамо правильний.

person.setEmail('test@gmail.com');


//=================================================== Декоратори властивостей ===========================================================

//Як і з декораторами на параметри, ми можемо побудувати на них логіку перевірки безпосередньо у декораторі.

//Погляньмо, що вони приймають.

function RequiredProperties(target: any, propertyName: string | Symbol) {
  console.log('Required');
  console.log(target, propertyName);
}

function PositiveNumberProperties(target: any, propertyName: string | Symbol) {
  console.log('PositiveNumber');
  console.log(target, propertyName);
}

class PersonDecorator {
  @RequiredProperties
  name: string;
  @PositiveNumberProperties
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

//Але тут, як у минулому прикладі, ми вже не зможемо прив'язатися до методу, давайте спробуємо написати логіку валідації.

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Person {
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const personWrong = new Person('', -1);

if (!validate(personWrong)) {
  console.log('Validation error!');
} else {
  console.log('Validation ok!');
}

const personSecond = new Person('Alex', 30);

if (!validate(personSecond)) {
  console.log('Validation error!');
} else {
  console.log('Validation ok!');
}