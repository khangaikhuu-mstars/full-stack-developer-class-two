const btn = document.querySelector(".form__btn");

// function wait() {
//   console.log("starting...");
//   let start = new Date().getTime();
//   // while ((new Date().getTime() - start) < 9000);
//   setTimeout(() => {
//     console.log("finished!");
    
//   }, 1000);
// }
// setTimeout(wait, 100)
// btn.addEventListener("click", () =>{
  

//   setTimeout(() => {
//     console.log("finished");
//   }, 1000);
// });
const div  = document.querySelector(".hisda");
const stop  = document.querySelector("#stop");
var txt = ` `
var i = 0;
const aa = setInterval(() => {
  txt = `${i++} `
  div.innerHTML = txt;
}, 1000);
stop.addEventListener("click", ()=>{
  var b = Math.floor(i--)
  console.log(b);
  clearInterval(aa)

})

