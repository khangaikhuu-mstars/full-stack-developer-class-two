const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e) =>{
    if(xhr.readyState == 4){
        const data = JSON.parse(xhr.responseText);
        const datas = data.dataseries
        console.log(datas); 
        const div = document.querySelector("#bari");
        var ul = `<ul>`
        
       


        datas.forEach(e => {
            ul += `<li> ${e.seeing} </li>`
        });
        ul+=   `</ul>`
        div.innerHTML = ul;
    }
}

xhr.open("GET", "data/data.json");
xhr.send()