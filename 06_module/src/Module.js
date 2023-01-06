"use strict";
//======================================== Classes Decorations  ================================================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Декоратор - це просто функція, давайте створимо функцію
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
//І тепер додамо декоратор для класу, просто задаємо ім'я функції після @;
let Controller = class Controller {
    constructor() {
        this.id = 1;
    }
};
Controller = __decorate([
    Logger
], Controller);
//Він спрацював ще до створення об'єкта, відбувається декорація самого класу.
//Ми також можемо робити так звані фабрики декоратора - це коли якась функція повертає функцію декоратор.
// /Модифікуємо наш декоратор.
function LoggerFunc(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
//І тепер ми можемо передавати налаштування для декоратора.
let Controller = class Controller {
    constructor() {
        this.id = 1;
    }
};
Controller = __decorate([
    Logger('LOGGING - CONTROLLER')
], Controller);
//# sourceMappingURL=Module.js.map