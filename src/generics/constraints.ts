type UserX = {
  username: string;
  password: string;
};

function something<T extends object, U extends UserX>(obj: T, user: U) {
  const str = JSON.stringify(obj);
  const usr = JSON.stringify(user);
}

something({ x: 1 }, { username: "123", password: "xx", something: 2 });

// this will not compile since it lacks username form UserX type
//something({ x: 1 }, { password: "xx", something: 2 });
