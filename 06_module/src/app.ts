interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration (config: IDecoration) {
  return function<T extends {new(...args: any[]): {content: string}}>(originalConstructor: T) {

    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;
      constructor (...arg: any[]) {
        super(...arg);
        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;

        this.parent.appendChild(this.element);
      }
    }
  };
}

@ControllerDecoration({
  parent: 'app',
  template: 'H1',
})
class ControllerApp {
  public content = 'My custom controller';
}

const controllerApp = new ControllerApp();
const controllerApp2 = new ControllerApp();
const controllerApp3 = new ControllerApp();