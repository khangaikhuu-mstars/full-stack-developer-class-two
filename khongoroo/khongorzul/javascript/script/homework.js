//Гурван тооны хамгийн их тоог олох
// let number = prompt("number1");
// let number1 = prompt("number2");
// let number2 = prompt("number3");
// document.getElementById("number").innerHTML =
//     alert(Math.max(number, number1, number2));

//Тоо сөрөг, эерэг эсвэл тэг эсэхийг шалгах програм бич
// let number = prompt("check");

// if (number < 0) {
//     alert("сөрөг")
// }
// else if (number > 0) {
//     alert("эерэг")
// }
// else {
//     alert("0")
// }
 
//Тоо 7 ба 19-д хуваагдах эсэхийг шалгах програм бич

// let number = prompt("check")
 
// if (number % 7 ==0) {
//     if (number % 19 ==0) {
//         alert("yes")
//     }
//     else {
//         alert("no")
//     }
// }
// else {
//     alert("false")
// }

// Тоо тэгш эсвэл сондгой эсэхийг шалгах програм бич

// let number = prompt("tegsh sondgoi")

// if (number % 2 == 0) {
//     alert("tegsh")
// }
// else {
//     alert("sondgoi")
// }

// Жилийг үсрэнгүй жил мөн эсэхийг шалга.
// let year = prompt("leap")

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert("leap year")
//         }
//         else {
//             alert("false")
//         }
//     }
    
//     else {
//         alert("leap year")
//     }
// }
// else {
//     alert("false")
// }

//Тэмдэгт нь цагаан толгойн үсэг мөн эсэхийг шалгах програм бич.
//?
// let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
//     "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
//     "s", "t", "u", "v", "w", "x", "y", "z"];

//  let a = prompt("enter letter")
//    if(a == letters.find((str) => str == a))
//      {
//        alert("true");
//      }
//    else
//      {
//      alert("false");
//      }

//Ямар ч цагаан толгой оруулах програм бичээд эгшиг, гийгүүлэгч эсэхийг шалгаарай

// if(letter === "a"){
//   document.getElementById("answer").innerHTML = "egshig"
// }

//   else if(letter === "o"){
//     document.getElementById("answer").innerHTML = "egchig"
//   }
//   else if(letter === "i"){
//     document.getElementById("answer").innerHTML = "egchig"
//   }
//   else if(letter === "u"){
//     document.getElementById("answer").innerHTML = "egchig"
//   }
//   else if(letter === "e"){
//     document.getElementById("answer").innerHTML = "egchig"
//   }
//   else{
    
//   }

     
//Аливаа тэмдэгт оруулах програм бичээд цагаан толгой, цифр эсвэл тусгай тэмдэгт эсэхийг шалгана уу


//  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
//     "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
//     "s", "t", "u", "v", "w", "x", "y", "z"];

//  let a = prompt("enter letter")
//    if(a == letters.find((str) => str == a))
//      {
//        alert("tsagaan tolgoin useg");
//      }
//    else
//      {
//      alert("busad temdegt");
//      }
     
//Тэмдэгтийг том эсвэл жижиг цагаан толгойн үсэгтэй эсэхийг шалгах програм бич.

// let large = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
//     "S", "T", "U", "V", "W", "X", "Y", "Z"]
// let small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
// "s", "t", "u", "v", "w", "x", "y", "z"]

//  let a = prompt("enter letter")
//    if(a == large.find((str) => str == a))
//      {
//        alert("large");
//      }
//    else if(a == small.find((str) => str == a))
//      {
//      alert("small");
// }
//    else {
//        alert("useg bish")
// }

//Долоо хоногийн дугаарыг оруулах, долоо хоногийн өдрийг хэвлэх програм бич.

// let day = prompt("day")

// if (day == 1) {
//     alert("Monday")
// }
// else if (day == 2) {
//     alert("Tuesday")
// }
// else if (day == 3) {
//     alert("Wednesday")
// }
// else if (day == 4) {
//     alert("Thursday")
// }
// else if (day == 5) {
//     alert("Friday")
// }
// else if (day == 6) {
//     alert("Saturday")
// }
// else if (day == 7) {
//     alert("Sunday")
// }
// else {
//     alert("This is not day")
// }

 //Сарын дугаарыг оруулах, тухайн сард байх өдрийн тоог хэвлэх програм бич.
 
// let day = new Date();
// let month = prompt("enter your month");
// let year = day.getFullYear();
// daysInMonth = new Date(year, month, 0).getDate();
// alert(daysInMonth);


 //Худалдагч хариулт мөнгө хэрхэн тооцож өгөхийг тооцоолох програм бич. (10,50,100,500,1000,5000,10000,20000)

 //Гурвалжны 3 өнцгийг оруулахад гурвалжин зөв эсэхийг шалгаарай.

 //Гурвалжны бүх талыг оруулах програм бичээд гурвалжин зөв эсэхийг шалгаарай.

 //Гурвалжин нь тэгш талт, тэгш өнцөгт эсвэл масштабтай гурвалжин эсэхийг шалгах програм бич.

 //Ашиг, алдагдлыг тооцоолох С програм бич.

 //Хичээлийн оноог тооцох програм бичнэ үү. 
// Хувь >= 90% : А зэрэг
// Хувь >= 80% : В зэрэг
// Хувь >= 70% : C зэрэг
// Хувь >= 60% : D зэрэг
// Хувь >= 40% : E зэрэг
// Хувь < 40% : F зэрэг

//Цахилгаан эрчим хүчний нэгжийн төлбөрийг тооцоолох програмыг бичиж, өгөгдсөн нөхцлийн дагуу нийт цахилгааны төлбөрийг тооцно.
// Эхний 50 нэгжийн хувьд Rs. 50/нэгж
// Дараагийн 100 нэгжийн хувьд Rs. 75 / нэгж
// Дараагийн 100 нэгжийн хувьд Rs. 120/нэгж
// 250 рубльээс дээш үнэтэй нэгжийн хувьд. 150/нэгж
// Төлбөр дээр 20% -ийн нэмэгдэл шимтгэл тооц

// let energy = parseInt(prompt('energy amount'))

// energy =456
// 50*50 =250 
// 100 *75 = 7500
// 100 * 120 = 12000
// 456-250 = 206
// 150 *206 = 30900
// hariu = 52900

// let total = 0;
// if(energy > 50){
//   energy = energy - 50;
//   total = total + 50*50;
// }
// else{
//   total = 50 * energy;
// }
// if(energy > 100){
//   energy = energy - 100;
//   total = total + 100 * 75;
// }
// else{
//   total = total + energy * 75;
// }
// if(energy > 100){
//   energy = energy - 100;
//   total = total + 100 * 120;
// }
// else{
//   total = total + energy *120;
// }

// total = total + energy *150
// document.getElementById("answer").innerHTML = "Answer = " + total;


// үсэг эсэхийг шалгах програм

// let x = prompt("alphabet")


// if(("a" <= x && x <= "z") || ("A" <= x && x <= "Z")){
//     document.getElementById("answer").innerHTML = "useg"
// }
// else{
//   document.getElementById("answer").innerHTML = "temdegt"
// }
// өгөгдсөн 4 тооны 80 аас их тоонуудын нийлбэрийг ол

let a = parseInt(prompt("number"))
let b = parseInt(prompt("number"))
let c = parseInt(prompt("number"))
let d = parseInt(prompt("number"))

let see = a + b + c + d;

if (a >= 80 && b >= 80 && c >= 80 && d >= 80 ){
  
  document.getElementById("answer").innerHTML = "total"
}
else{
  document.getElementById("answer").innerHTML = "false"
}