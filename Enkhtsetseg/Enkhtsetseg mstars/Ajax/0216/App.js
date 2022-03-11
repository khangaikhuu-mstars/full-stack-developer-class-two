let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if(request.readyState === ) {
        const text = JSON.parse(request.responseText);
        const ul = document.createElement("ul");

        function func(e){
            const li = document.createElement("li")
            const a = document.querySelector("#employeeList");
             const b = document.createTextNode(e.name);
             const c = document.createTextNode(" " + e.inoffice);
             li.appendChild(b)
             ul.appendChild(li)
             a.appendChild(ul)
             li.appendChild(c)

        }
        text.forEach((e) => {
            func(e);
        });
        //document.getElementById("employeeList").innerHTML = request.responseText
        console.log(request.responseText);
        
    }
    
}
request.open("GET", "data/employees.json");
request.send();