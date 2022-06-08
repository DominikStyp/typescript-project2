let x: unknown;
let a: any;
let y: string;

a = 1;
x = 5;
y = "123";

//y = x; // this causes error, because x is unknown
// unfortunately this is OK becasue typescript does not care about 'any'
// so 'safer' is unknown
y = a;

// but this is OK
if (typeof x === "string") {
  y = x;
}

console.log(y);
