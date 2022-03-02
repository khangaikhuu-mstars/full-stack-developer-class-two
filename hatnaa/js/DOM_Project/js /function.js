const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e) =>{
    console.log(e)
    if(xhr.readyState == 4){
        const data = JSON.parse(xhr.responseText)
        console.log(data[1].name);

        const div = document.querySelector("#bari");
        const br = document.createElement("br");


        function lol(e){
            const br = document.createElement("br");
            const inp = document.createElement("input");
            inp.setAttribute("type", "button")
            inp.setAttribute('value', e.name);
            inp.style.width = e.value;
            console.log(e.value);
            div.appendChild(inp);
            div.appendChild(br);

        }
        data.forEach(e => lol(e));
    }
}
xhr.open("GET", "../data/data.json");
xhr.send()


