// map шинэ array үүсгээд түүнийгээ буцаадаг
// array элемент болгон дээр ажилладааг
// хоосон array ажиллахгүй
// ориг array өөрчилдөггүй
// Бүх элементийг буцаадаг
const number = [65, 78, 89, 47];
const newArr = number.map(myFunction);

function myFunction(num) {
  return num * 20;
}
