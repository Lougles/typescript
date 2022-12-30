console.group();

interface IPilot {
  flyMessage(): void;
}

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Pilot implements IPerson, IPilot {
  constructor (public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error('Pilot too young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name );
  };

  flyMessage(): void {
    console.log('Самолет набрал высоту, всем приятного полета!');
  };
}

//Abstract classes
abstract class Plane {
  protected pilot?: IPilot

  public sitInPlane (pilot: IPilot):void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if(!this.pilot){
      throw new Error('No pilot in cabin')
    }
    console.log('Start turbins')
    this.pilot.flyMessage();
    return true
  }
}

class Terrorist implements  IPilot  {
  bluff(phrase: string): void {
    console.log(phrase);
  };

  flyMessage(): void {
    console.log('Наши требования 9 мильяйонов иначе мы убить всех заложника');
  };
}

const boeing = new Boeing();
const pilot = new Pilot('Anthony', 32);
// Капитан приветствует пассажиров на трапе 
pilot.greet('Вас приветствует капитан корабля');
// Занимает место пилота
boeing.sitInPlane(pilot);
// Запускаем двигатели
boeing.startEngine();




const boeing777 = new Boeing();
const pilotTerrorist = new Terrorist();

pilotTerrorist.bluff('We want to crash this plane ')

boeing777.sitInPlane(pilotTerrorist)
boeing777.startEngine();

console.groupEnd();
