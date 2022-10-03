class BicycleLock {
  constructor(dials) {
    this.dials = dials;
  }

  makeDistinct(dials) {
    let amountOfDigits = dials.length;
    let moves = "";
    let auxDials = [];
    let comparationArray = [];
    let isMuatuallyDistinct = true;

    //check if dials are mutually distinct already

    for (let i of dials) {
      if (comparationArray.indexOf(i) === -1) {
        comparationArray.push(i);
      } else {
        isMuatuallyDistinct = false;
      }
    }

    console.log("Is M D: ", isMuatuallyDistinct);

    // if the array is not mutually distinct:

    if (!isMuatuallyDistinct) {
      // generate array with all digits mutually distinct
      while (auxDials.length < amountOfDigits) {
        var r = Math.floor(Math.random() * 10);
        if (auxDials.indexOf(r) === -1) auxDials.push(r);
      }

      console.log("Aux Dials: ", auxDials);
      console.log("Original Dials", dials);

      for (let i = 0; i < amountOfDigits; i++) {
        if (auxDials[i] == dials[i]) {
          if (i < amountOfDigits - 1) {
            moves += ">";
          }
        } else {
          let dif = Math.abs(dials[i] - auxDials[i]);
          if (dials[i] - auxDials[i] < 0) {
            dials[i] += dif;
            moves += "+".repeat(dif);
            if (i < amountOfDigits - 1) {
              moves += ">";
            }
          } else {
            dials[i] -= Math.abs(dials[i] - auxDials[i]);
            moves += "-".repeat(dif);
            if (i < amountOfDigits - 1) {
              moves += ">";
            }
          }
        }
      }
    }

    console.log("Movements: ", moves);
    console.log("Amount of movements: ", moves.length);
    console.log("New Dials", dials);
  }
}

let dials = [1, 1, 2, 3];
makeDistinct(dials);
