type BikeAccesories = {
  frontLamp: string;
  rearLamp: string;
  lock: string;
};

// this can have only some of the BikeAccessories properties
const accesories: Partial<BikeAccesories> = {
  lock: "metal"
};

function getBikeAccessories(
  accesories: Partial<BikeAccesories>
): BikeAccesories {
  accesories.frontLamp = accesories.frontLamp || "";
  accesories.rearLamp = accesories.frontLamp || "";
  accesories.lock = accesories.lock || "";
  // we can return the full type once we're sure it's full
  return accesories as BikeAccesories;
}

console.log(Object.keys(getBikeAccessories(accesories)));
