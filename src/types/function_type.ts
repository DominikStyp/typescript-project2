// works like abstract method in class
let add: (a: number, b: number) => number;

add = function (x: number, y: number) {
  return x + y;
  //return ""; // error, function must return number
  // return x + y + "";  // error, function must return number
};

console.log(add(1, 2));

// we can also specify the callback type
function sumWIthCallback(
  x: number,
  y: number,
  callback: (z: number) => number
): number {
  const sum = x + y;
  return callback(sum);
}

// WARNING! the void type of the callback does not cause compilation error
function sumWIthCallback2(x: number, y: number, callback: (z: number) => void) {
  const sum = x + y;
  // despite we have void callback return type it doesn't complain
  const something = callback(sum);
  return something;
}

console.log(sumWIthCallback(1, 2, (x: number) => Math.pow(x, 2)));
