// primitives
let person: {
  name: string;
  age: number;
  isMarried: boolean;
  sex: sexType;
  dateOfBirth: Date;
  // literal type is like enum but is a "string" option
  favAlcohol: "beer" | "wine" | "vodka";
  // union type
  childrenAmount: number | boolean | "many";
};

// enums
enum sexType {
  MALE,
  FEMALE,
  OTHER
}

person = {
  name: "Jake",
  age: 22,
  isMarried: true,
  sex: sexType.MALE,
  dateOfBirth: new Date("01-01-2000"),
  favAlcohol: "wine",
  childrenAmount: false
  //childrenAmount: 1,
  //childrenAmount: 'many',
};

export { person };
