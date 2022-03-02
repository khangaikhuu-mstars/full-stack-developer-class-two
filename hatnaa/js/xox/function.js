var str = "";
const btn = document.querySelector("input");
var p1 = []
var p2 = []
var c = [];
var test = ["hi", 'ho']
function p1w(){
    // setInterval(() => {
    //     alert("Player 1 WON")
        
    // }, 100);
}
function p2w(){
    // const a = setInterval(() => {
    //     alert("Player 2 WON")
        
    //     clearInterval(a)
    // }, 100);

}

if (c = test.includes("hi" && "ho")) {
    console.log(test);
    console.log('hi');
}
function P2(p2){
    if(c = p2.includes("1" && "2" && "3")) {
        console.log(p2);
        p2w()
    }
    else if (c = p2.includes("4" && "5" && "6")) {
        p2w()
    }
    else if (c = p2.includes("7" && "8" && "9")) {
        p2w()
    }
    else if (c = p2.includes("1" && "4" && "7")) {
        p2w()
        console.log("sda");
    }
    else if (c = p2.includes("2" && "5" && "8")) {
        p2w()
    }
    else if (c = p2.includes("3" && "6" && "9")) {
        p2w()
    }
    else if (c = p2.includes("1" && "5" && "9")) {
        p2w()
    }
    else if (c = p2.includes("3" && "5" && "7")) {
        p2w()
    }
}
function P1(p1){
    if(c = p1.includes("1" && "2" && "3")) {
        p1w()
    }
    else if (c = p1.includes("1" && "2" && "3")) {
        p1w()
    }
    else if (c = p1.includes("4" && "5" && "6")) {
        p1w()
    }
    else if (c = p1.includes("7" && "8" && "9")) {
        p1w()
    }
    else if (c = p1.includes("1" && "4" && "7")) {
        p1w()
    }
    else if (c = p1.includes("2" && "5" && "8")) {
        p1w()
    }
    else if (c = p1.includes("3" && "6" && "9")) {
        p1w()
    }
    else if (c = p1.includes("1" && "5" && "9")) {
        p1w()
    }
    else if (c = p1.includes("3" && "5" && "7")) {
        p1w()
    }
}


// for (let index = 0; index < 10; index++) {
//     if(i/2 == 0){

//     }
//     else{

//     }
    
// }

for (let i = 1; i < 10; i++) {
    document.querySelector(`#btn${i}`).addEventListener("click", ()=>{
         str += i
        if(i % 2 == 0){

            document.querySelector(`#btn${i}`).setAttribute("value", "X");
          
            p1= " "  + i + p1
            P1(p1)
            console.log(`p1 ${p1}`); 
        }
        else{
            document.querySelector(`#btn${i}`).setAttribute("value", "O");
            p2.push(i)
            console.log(p2);
            // if(c = p2.includes("1" && "2" && "3")) {
            //     console.log(p2);
            //     p2w()
            // }
            console.log( `p2 ${ typeof p2}`);
        }
    })
    
    // if(str.length / 2 == 0){

    // }
}   

