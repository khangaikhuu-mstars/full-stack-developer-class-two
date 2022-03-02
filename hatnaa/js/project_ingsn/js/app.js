function AJAX(ner){
    const xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = e =>{
    if(xhr1.readyState == 4){
        // console.log(xhr1.responseText);
        const data1 = JSON.parse(xhr1.responseText);
        // console.log(data1);
        // var img = ` <div class="img">
        // <img src="${e.source}" alt="">
        // </div>`
        // console.log("hi");
        const dataa = data1.thumbnail;

        console.log(dataa.source);
    }
}
    var b = "https://en.wikipedia.org/api/rest_v1/page/summary/";
    b = b+ner;
    xhr1.open("GET", b)
    xhr1.send()
    console.log(b);
    }


document.getElementById("start").addEventListener("click",()=>{
    
})
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = e =>{
    if(xhr.readyState == 4){
        const datas= JSON.parse(xhr.responseText)
        const data =  datas.people;
        var card = `<div class="card">`
        console.log(data);
        
        data? data.forEach(e => {
            console.log(e.name);
            AJAX(e.name)
        }):console.log("no data")


        card += `</card>`
    }
}
var b = "https://en.wikipedia.org/api/rest_v1/page/summary/";
xhr.open("GET", "http://api.open-notify.org/astros.json")
xhr.send()


