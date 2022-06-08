function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  // without @autobind we'll get an error
  // "TypeError: Cannot read properties of undefined (reading 'message')"
  // because function changes THIS context when it's called from other object
  // autobind fixes that
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

class BindToMe {
  private message = "hello from BindToMe";
  public passCallback(callback: Function) {
    callback();
  }
}

const p = new Printer();
p.showMessage();

const b = new BindToMe();
b.passCallback(p.showMessage);
