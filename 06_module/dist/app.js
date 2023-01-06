"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ControllerDecoration(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...arg) {
                super(...arg);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        };
    };
}
let ControllerApp = class ControllerApp {
    constructor() {
        this.content = 'My custom controller';
    }
};
ControllerApp = __decorate([
    ControllerDecoration({
        parent: 'app',
        template: 'H1',
    })
], ControllerApp);
const controllerApp = new ControllerApp();
const controllerApp2 = new ControllerApp();
const controllerApp3 = new ControllerApp();
//# sourceMappingURL=app.js.map