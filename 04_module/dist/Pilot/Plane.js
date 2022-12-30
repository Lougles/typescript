"use strict";
console.group();
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.age < 28) {
            throw new Error('Pilot too young');
        }
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    ;
    flyMessage() {
        console.log('Самолет набрал высоту, всем приятного полета!');
    }
    ;
}
class Plane {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boeing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error('No pilot in cabin');
        }
        console.log('Start turbins');
        this.pilot.flyMessage();
        return true;
    }
}
class Terrorist {
    bluff(phrase) {
        console.log(phrase);
    }
    ;
    flyMessage() {
        console.log('Наши требования 9 мильяйонов иначе мы убить всех заложника');
    }
    ;
}
const boeing = new Boeing();
const pilot = new Pilot('Anthony', 32);
pilot.greet('Вас приветствует капитан корабля');
boeing.sitInPlane(pilot);
boeing.startEngine();
const boeing777 = new Boeing();
const pilotTerrorist = new Terrorist();
pilotTerrorist.bluff('We want to crash this plane ');
boeing777.sitInPlane(pilotTerrorist);
boeing777.startEngine();
console.groupEnd();
//# sourceMappingURL=Plane.js.map