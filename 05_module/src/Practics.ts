//======================================== Promise Func  ================================================
//Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.

function getPromise (): Promise<[string,number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data: [string, number]) => {
  console.log(data);
});

//У вас є наступний тип даних

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

//Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. 
//Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

//Вкажіть дженерики для функції об'єднання об'єктів.

function mergePrac<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//У вас є наступні класи

class Component {
  constructor (public props: { title: string; }) {
    
  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

