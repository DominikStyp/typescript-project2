function Logger(logIt: string) {
  return function (constructor: Function) {
    console.log(logIt);
    console.log(constructor);
  };
}

@Logger("Running decorator at compile time...")
class Person {
  private name = "Joe";

  constructor() {
    console.log("from Person.constructor()");
  }
}

const _ = new Person();
