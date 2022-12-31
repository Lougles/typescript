console.group('Practice')

class Key {
  private signature: number
  constructor() {
    this.signature = Math.floor(Math.random() * (10 - 1 + 1)) + 1
  }
  getSignature(): number {
    return this.signature;
  }
}

class HomePerson {
  constructor(private key: Key){}
  getKey(): Key {
    return this.key;
  }
}

abstract class AbstractHouse{
  public door = false;
  public tenants: HomePerson[] = [];
  constructor(protected key: Key) {}
  comeIn(person: HomePerson): void {
    if(!this.door){
      throw new Error('Door is close');
    }
    this.tenants.push(person);
    console.log('Person inside')
  }
  abstract openDoor(key: Key): boolean
}

class MyHouse extends AbstractHouse {
  openDoor(key: Key) {
    if(key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door')
    }
    return this.door = true;
  }
}

const key = new Key();
const house = new MyHouse(key);
const newPerson = new HomePerson(key);

house.openDoor(newPerson.getKey())
house.comeIn(newPerson);



console.groupEnd();