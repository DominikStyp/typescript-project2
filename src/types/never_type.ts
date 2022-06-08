// this made it clear that function will NEVER RETURN ANYTHING
function throwError(): never {
  const obj = { message: "error occured", errorCode: 500 };
  throw obj;
}

throwError();
