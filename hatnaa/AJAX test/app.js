const xhr = new XMLHttpRequest();
xhr.open("GET", './test.json')
xhr.onload = ()=>{
    if(xhr.status == 200){
        let data = JSON.parse(xhr.responseText);
        console.log(data);

        generateHTML(data)
    }
}
xhr.send()
console.log('hi');



function generateHTML(data){
let txt =''
let aash = `
<div class="col-3 tabl"></div>
<div class="col-3 tabl"><h1>Name</h1></div>
<div class="col-3 tabl"><h1>Age</h1></div>
<div class="col-3 tabl"><h1>Job</h1></div>
`
const row = document.createElement('div')
row.setAttribute('class','row')
    let i = 1
    data.map(e=>{
        txt += `
        <div class="col-3 tabl"> <p>${i++}</p></div>
        <div class="col-3 tabl"> <p> ${e.name}</p></div>
        <div class="col-3 tabl"> <p> ${e.age}</p></div>
        <div class="col-3 tabl"> <p> ${e.job}</p></div>
        `



    })

row.innerHTML = aash + txt
document.getElementById("root").appendChild(row)
}