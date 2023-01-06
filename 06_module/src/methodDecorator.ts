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

class Person {
  @Validation
  setEmail (@CheckEmail email: string) {
    console.log(email);
  }
}

const person = new Person();

// person.setEmail('testgmail.com');

//Ми передали неправильний email, подивимося на результат.

//А тепер давайте передамо правильний.

person.setEmail('test@gmail.com');


//=================================================== Декоратори властивостей ===========================================================

//Як і з декораторами на параметри, ми можемо побудувати на них логіку перевірки безпосередньо у декораторі.

//Погляньмо, що вони приймають.

function Required(target: any, propertyName: string | Symbol) {
  console.log('Required');
  console.log(target, propertyName);
}

function PositiveNumber(target: any, propertyName: string | Symbol) {
  console.log('PositiveNumber');
  console.log(target, propertyName);
}

class PersonDecorator {
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}