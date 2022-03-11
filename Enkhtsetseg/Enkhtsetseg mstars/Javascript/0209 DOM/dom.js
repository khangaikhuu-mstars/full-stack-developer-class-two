function formpara() {
    
    let x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Enter name");
    x.setAttribute("id", "name");

    document.querySelector("#div1").appendChild(x); 

    let y = document.createElement("input");
    y.setAttribute("type", "password");
    y.setAttribute("placeholder", "Enter password");
    y.setAttribute("id", "pass");
    
    document.querySelector("#div1").appendChild(y);


    
        let btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Login");
        btn.setAttribute("id", "btnbtn");
        
        document.querySelector("#div1").appendChild(btn);

        document.querySelector("#btnbtn").addEventListener('click', ()=>{
            alert(x.value + '\n' + y.value);
            
        });
      
    
}
document.getElementById("button").addEventListener('click', formpara);

