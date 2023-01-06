
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