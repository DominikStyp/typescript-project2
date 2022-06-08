class CacheMem<T extends object, U extends number> {
  // explanation "What the heck is this?"
  // 1) use constructor attribute promotion to create private variable
  // 2) use index signature which forces to use key of certain type:
  //    https://basarat.gitbook.io/typescript/type-system/index-signatures

  constructor(
    private objectsArr: {
      [key: number]: T;
      // unfortunately we CAN'T do that, despite it extends only number
      // [key: U]: T;
    }
  ) {}

  // we can use the key of type "U" ONLY because it restricts the type to string or number
  // unfortunately it cannot be any type
  public set(objToCache: T, key: U) {
    this.objectsArr[key] = objToCache;
  }

  public get(key: U): T | null {
    if (key in this.objectsArr) {
      return this.objectsArr[key];
    }
    return null;
  }
}

type SomeProduct = {
  id: number;
  desc: string;
};

const p1: SomeProduct = {
  id: 1,
  desc: "one"
};

const p2: SomeProduct = {
  id: 2,
  desc: "two"
};

const someProducts: SomeProduct[] = [p1, p2];
const mem = new CacheMem<SomeProduct, number>(someProducts);

const p11 = mem.get(0);
