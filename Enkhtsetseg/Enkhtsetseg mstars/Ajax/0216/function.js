let btn = new XMLHttpRequest();
btn.onreadystatechange = function() {

    if(btn.readyState == 4) {
        const aa = JSON.parse(btn.responseText)
        console.log(aa);
        function myButton(el){
            let a = document.createElement("input");
            a.setAttribute("type", "button");
            a.setAttribute("id", "buttonE");
            a.setAttribute("value", el.name);
            let elm = document.getElementById("btn20");
            elm.appendChild(a);
            
        }

        for (let i = 0; i <20; i++) {
            myButton(aa[i]);
        }

       // console.log(btn.responseText);

    }
}
btn.open("GET", "/data.json");
btn.send();



    
