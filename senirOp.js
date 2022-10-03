function senirOp() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Senir Op");
    } else if (i % 3 == 0) {
      console.log("Senir");
    } else if (i % 5 == 0) {
      console.log("Op");
    } else {
      console.log(i);
    }
  }
}

senirOp();
