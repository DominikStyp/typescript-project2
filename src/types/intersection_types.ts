type Loggable = {
  username: string,
  password: string,
}

type Mailable = {
  email: string
}
// combines types
type User = Loggable & Mailable;

const u : User = {
  username: 'john',
  password: '123',
  email: 'at@at.com'
}

 //// intersetion 
 type Identity = string | number;
 type Num = number | number[]
 type Common = Identity & Num;
 
 // error because string is not common for both
 //const abc: Common = '123';
const abc: Common = 1; //ok number is common for both
