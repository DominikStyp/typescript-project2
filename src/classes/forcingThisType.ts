class Cat {
  // class property initializer can be done in constructor
  constructor(private name: string, private readonly race: string) {
    this.name = name;
  }
  // this can force this type to always be a Cat
  sayHello(this: Cat) {
    console.log(`Hello ${this.name}`);
  }
}

const c = new Cat("Noel", "Shorthair");
const catCopy = { sayHello: c.sayHello };

c.sayHello();

// because in sayHello(this: Cat) this is type Cat
// we cannot just copy method to the other dummy object and use it
// becase this inside it must be of type Cat

// //catCopy.sayHello(); //error
