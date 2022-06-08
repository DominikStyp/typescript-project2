interface Regular {
  // public keyword cannot be added here
  readonly optionalProp?: string;
  readonly regularProp: string;
  someProp: number;

  hello(str: string): void;
}

class A implements Regular {
  // if you implement interface you must also add 'readonly'
  // if you don't typescript won't respect it in class
  // it only respects the property type, so it cannot be 'number'
  readonly regularProp: string;

  constructor(
    public someProp: number,
    // warning readonly has to be assigned AGAIN
    // if we promote those to the object properties
    public readonly optionalProp?: string
  ) {}

  hello(str: string): void {
    this.regularProp = "readonly from interface blocks it";
    console.log(`Hello ${str}`);
  }
}

const aInstance: A = new A(999, "a", "b");
aInstance.regularProp = "ok to write here";
aInstance.optionalProp = "ok to write here";
console.log(aInstance.optionalProp);
aInstance.hello("hi");
