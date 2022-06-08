interface AnonymousFunc {
  (a: number, b: number): number;
}

/**
 * WARNING: this is not forcing specific function implementation
 *          as we can see below
 */
const func: AnonymousFunc = () => {
  return null;
};

// yet it can help avoid defining wrong types for functions like below
// now we do have an error below
// because a: string is not complatible with interface delacartion
//   const func1: AnonymousFunc = (a: string, b: number) => {}

func(1, 1);
