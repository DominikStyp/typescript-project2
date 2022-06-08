type CommonUser = {
  email: string;
  password: string;
};

type AdminUser = {
  email: string;
  privileges: string[];
};

type Someone = CommonUser | AdminUser;

function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}

function parseInfo(usr: Someone) {
  // we cannot use privileges unless we are checking for it in runtime
  //console.log(usr.privileges);

  // we cannot also do the property check like this
  //if(usr.privileges){}

  // we can do it like this however
  if ("privileges" in usr) {
    console.log(usr.privileges);
  }
  // or like that with custom helper
  if (hasOwnProperty(usr, "privileges")) {
    console.log(usr.privileges);
  }
}
