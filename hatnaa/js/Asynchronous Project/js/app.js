function generateHTML(data, data1){


    if (data1.type === "standard") {
        const section = document.createElement("section");
        const section1 = document.createElement("div");
        section.innerHTML = `<a href="#" class="${data1.wikibase_item}"><img src="${data1.thumbnail.source}"></img>
        <h2>${data1.title}</h2>
        <p>${data1.description}</p>
        <p>${data1.extract}</p></a>`
        console.log('hi');
        peopleList.appendChild(section);
        console.log(data1.wikibase_item);
        
        document.querySelector(`.${data1.wikibase_item}`).addEventListener("click", (e)=>{
            document.body.appendChild(section1)
            console.log('hi');
            section1.appendChild(document.querySelector("main"))
            const modal = `
            <div class="bg-gray">
              <div class="section1" >
                
              </div>
            </div>`;
            // document.body.innerHTML = modal;
            section1.innerHTML = modal;
            
            
        })
    } else {
        peopleList.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${data.title}</h2>
        <p>Results unavailable for ${data.title}</p>
        ${data.extract_html} `;
    }

}

    const peopleList = document.getElementById("people");

    function AJAX(ner, callback){
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
            const data = data1.thumbnail;

            console.log(data.source);
            console.log(data1.type);

            callback(data, data1)

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
                    AJAX(e.name, generateHTML)
                }):console.log("no data")
        
        
                card += `</card>`


                // document.querySelector("a").addEventListener("click", (e)=>{
                //     console.log('hi');
                    
                // })
            }
        document.getElementById("btnn").style.display = "none"
            
        }
        var b = "https://en.wikipedia.org/api/rest_v1/page/summary/";
        xhr.open("GET", "http://api.open-notify.org/astros.json")
        xhr.send()
    })


 