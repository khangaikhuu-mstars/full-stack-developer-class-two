
    const peopleList = document.getElementById("people");

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
            // function generateHTML(){


            // }
            const data = data1.thumbnail;

            console.log(data.source);
            console.log(data1.type);

            if (data1.type === "standard") {
                const section = document.createElement("section");
                section.innerHTML = `<img src="${data1.thumbnail.source}"></img>
                <h2>${data1.title}</h2>
                <p>${data1.description}</p>
                <p>${data1.extract}</p>`
                console.log('hi');
                peopleList.appendChild(section)
            } else {
                peopleList.innerHTML = `
                <img src="img/profile.jpg" alt="ocean clouds seen from space">
                <h2>${data.title}</h2>
                <p>Results unavailable for ${data.title}</p>
                ${data.extract_html}
                `;
            }

        }
    }
        var b = "https://en.wikipedia.org/api/rest_v1/page/summary/";
        b = b+ner;
        xhr1.open("GET", b)
        xhr1.send()
        console.log(b);
        }


    document.getElementById("btnn").addEventListener("click",()=>{
        
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
        document.getElementById("btnn").style.display = "none"
            
        }
        var b = "https://en.wikipedia.org/api/rest_v1/page/summary/";
        xhr.open("GET", "http://api.open-notify.org/astros.json")
        xhr.send()
    })


