//======================================== Classes Decorations  ================================================


//Декоратор - це просто функція, давайте створимо функцію


// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

//І тепер додамо декоратор для класу, просто задаємо ім'я функції після @;

// @Logger
// class Controller {
//   public id = 1;
// }

//Він спрацював ще до створення об'єкта, відбувається декорація самого класу.

//Ми також можемо робити так звані фабрики декоратора - це коли якась функція повертає функцію декоратор.

// /Модифікуємо наш декоратор.


// function LoggerFunc(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

//І тепер ми можемо передавати налаштування для декоратора.

// @Logger('LOGGING - CONTROLLER')
// class newController {
//   public id = 1;
// }



function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AddProperty () {
  return function(constructor: Function) {
    console.log('Modify');
    constructor.prototype.modify = true;
  };
}

@Logger('LOGGING - CONTROLLER')
@AddProperty()
class Controller {
  public id = 1;
  public modify?: boolean;
}

const controller = new Controller();

console.log('Modified classes', controller.modify);