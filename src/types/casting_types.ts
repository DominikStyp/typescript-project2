const num = 99.99;

function outputStr(str: string) {
  console.log(str);
}

// error, because function accepts only strings
// outputStr(num);

// FIRST style of casting
// this is needed because TS will complain
// about typecasting number -> string due to the possible bugs
outputStr((num as unknown) as string);

// SECOND style of casting
// WARNING! This will not work in React due to the <>
// which are part of JSX syntax
// number -> unknown -> string
outputStr(<string>(<unknown>num));
