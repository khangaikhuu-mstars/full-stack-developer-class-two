var num = document.querySelector(".btn");
var str = "";
var arr = ["minus", 'percent', 'div', 'x', 'hasah', 'plus', 'equal', 'dot']
const zero = 0;
var hariu = 0;
const divresult = document.querySelector("#result")


function calcMain(value, e){
    if (value === '') {
        console.log('error');
    }
    var parsedvalue = parseInt(value)
    if (e == '+') {
        // console.log(`+`);
        divresult.innerHTML = `+`
        hariu = parsedvalue + hariu
        console.log(hariu);
        equal(hariu, parsedvalue)
        str = ''
        // debugger;
    }else if(e == '-'){
        console.log(`-`);
         hariu = parsedvalue - hariu
        equal(hariu, parsedvalue)
    }
    
}
function equal(result, parsedvalue){

    document.querySelector("#btnequal").addEventListener("click", ()=>{
        // var finalresult = result + parsedvalue
        console.log(` Etssin hariu : ${result}`);
        divresult.innerHTML = `${result}`
        // calcMain(finalresult)    
    })
}

function numbers(){
    for (let i = 0; i < 10; i++) {
        var test =document.querySelector(`#btn${i}`)

        test.addEventListener("click", ()=>{
            str+=i
            console.log(str);
            // divresult.appendChild(str) 
            divresult.innerHTML = `${str}`
            arr.map(e =>{
                document.querySelector(`#btn${e}`).addEventListener('click', ()=>{
                    
                    calcMain(str, document.querySelector(`#btn${e}`).value)
                    
                })
                
            })
            
        })
    }
  
    
    // document.querySelector('#btnx').addEventListener("click", ()=>{
    //     console.log(str);
    //     calcMain(str)
        
    // })

}
numbers()