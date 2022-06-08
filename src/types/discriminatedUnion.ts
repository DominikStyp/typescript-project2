interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

// this can also help with recognizing proper arguments
// here we get error because type bird has no runningSpeed
//moveAnimal({type: 'bird', runningSpeed: 10});
moveAnimal({ type: "bird", flyingSpeed: 10 });
