type ValidatorDef = {
  attribute: string;
  regex: RegExp;
};

function Validator<T>(definitions: ValidatorDef[]) {
  return function (constructor: any) {
    const instance: T = new constructor();

    for (var key in definitions) {
      const validator = definitions[key];
      const objectAttr = validator.attribute as keyof T;

      if (objectAttr in instance) {
        const objAttrValue = (instance[objectAttr] as unknown) as string;

        if (!validator.regex.test(objAttrValue)) {
          throw new Error(
            validator.attribute + " don't match " + validator.regex.toString()
          );
        }
      }
    }
  };
}

@Validator<TestMyAttributes>([
  { attribute: "name", regex: /^[a-z]+$/ },
  { attribute: "number", regex: /^[0-9]+$/ }
])
class TestMyAttributes {
  // MOST IMPORTANTLY: This works with private variables
  // becasue decorators seem not to care about the scope of object vars
  private name: string;
  private number: number;

  constructor() {
    this.name = "something";
    this.number = 123;
  }
}
