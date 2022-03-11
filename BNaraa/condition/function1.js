// let age = prompt("enter your age");

// if (age >= 21) {
//   console.log("Welcome to my club");
// } else {
//   console.log("Bye bye");
// }

// let number= prompt("Enter number between 1 and 7")

// if (number == 1) {
//     console.log("It's Monday");
// }else if(number==2){
//     console.log("it's Tuesday");
// }else if(number==3){
//     console.log("it's Wednesday");
// }else if(number==4){
//     console.log("it's Thursday");
// }else if(number==5){
//     console.log("it's Friday");
// }else if(number==6) {
//     console.log("it's Saturday")
// }else if(number==7){
//     console.log("it's Sunday")
// }else{
//     console.log("it's not weekdays")
// }

let number = prompt("Enter your number");

if (number % 2 == 0) {
  if (number > 0) {
    console.log("the number is even and positive");
  } else {
    console.log("the number is even but negative");
  }
} else {
  if (number < 0) {
    console.log("the number odd and negative");
  } else {
    console.log("the number odd and positive");
  }
}
