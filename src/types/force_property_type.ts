// this is called 'index properties'
// key name is not important can be any name
interface StringsOnly {
  [anyProp: string]: string;
}

const obj: StringsOnly = {
  email: "a@a.com",
  password: "123"
  // here we get an error because id is number
  // id: 123,
};
