function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("invalid arguments");
  }
}

sum(1, 2);
