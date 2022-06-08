// this means that B must be one of the A keys
function objVal<A, B extends keyof A>(obj: A, key: B) {
  return obj[key];
}

const user = {
  name: "Johnny"
};

objVal(user, "name");

// error because 'namee' key does not exist in user
objVal(user, "namee");
