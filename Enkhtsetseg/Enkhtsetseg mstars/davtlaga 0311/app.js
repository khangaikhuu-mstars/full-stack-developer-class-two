
//Step 1 create object XML Http request
let xhr = new XMLHttpRequest();
//Step 2 callback function
xhr.onload = function () {
    if(xhr.status ===200){
        console.log("data is received");
        console.log(xhr.responseText) //json dotor bga zuiliig harahdaa ingej harna.
        const data = JSON.parse(xhr.responseText);
        console.log(data)
        let table = "<table>";
        let col = "";
        let header = `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
    <tr>`
        data.forEach(e => {
            col += `<tr>
                <th>${e.name}</th>
                <th>${e.age}</th>
                <th>${e.job}</th>
            <tr>`
        });
        table +=header;
        table += col;
        table += '</table>';
        document.getElementById('data').innerHTML = table 
    }
    
}


//Step 3 open request
xhr.open("GET", "test.json");
//Step 4 send request
xhr.send();

fetch('test.json')
.then((e)=>e.text()) //promise
.then((e) => console.log(e)); //

