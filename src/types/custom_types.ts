// https://stackoverflow.com/questions/39328700/typescript-negative-type-check

// Subtracts T from U
type Subtract<T, U> = T & Exclude<T, U>;

type Empty = null | "0" | "" | Array<undefined> | false;

type NotEmpty<T> = Subtract<T, Empty>;

function passNonEmpty<T>(arg: NotEmpty<T>) {
  console.log(arg);
}

passNonEmpty<any>(22);

passNonEmpty(null); // error
passNonEmpty(""); // error
passNonEmpty(false); // error
passNonEmpty([]); // error

passNonEmpty(" "); // ok
passNonEmpty(true); // ok
passNonEmpty(["str"]); // ok
passNonEmpty({}); // ok
