function mathOp() {
  function nemeh(x, y) {
    let niilber = x + y;
    return niilber;
  }
  function hasah() {
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    let yalgavar = a - b;
    return yalgavar;
  }
  let choice = prompt(
    //choice = '+'
    "Enter + to plus operation \nEnter - to subtract\nEnter your choice: "
  );
  if (choice === "+") {
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    let sum = nemeh(a, b);
    document.getElementById("answer").innerText = sum;
  } else if (choice === "-") {
    let sub = hasah();
    document.getElementById("answer").innerText = sub;
  } else {
    console.log("wrong choice");
  }
  //   switch (choice) {
  //     case "+":
  //       console.log("nemeh uildel hiine");
  //       break;
  //     case "-":
  //       console.log("hasah uildel hiine");
  //       break;
  //     default:
  //       console.log("Wrong choice");
  //       break;
  //   }
}
mathOp();
