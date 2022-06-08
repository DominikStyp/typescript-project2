type ReplaceMeType = {
  new (...args: any[]);
};

function debugConstructorArgs() {
  // 1) extend the original class
  // 2) replace the original constructor by the new constr.
  // 3) calling the original by super() from the new constr.
  return function <T extends ReplaceMeType>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        args.forEach((v, i) => {
          console.log(`arg[${i}] is ${v}`);
        });

        super(...args);
      }
    };
  };
}

@debugConstructorArgs()
class ReplaceMe {
  constructor(protected name: string, protected age: number) {}
  getName() {
    return this.name;
  }
}

const r = new ReplaceMe("Frank", 33);
r.getName();
