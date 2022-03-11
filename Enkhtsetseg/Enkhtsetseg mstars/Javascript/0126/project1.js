// 1s ugugdsun too hurtelh buh tegsh toonuudiin niilberiig oloh function
function project1() {
    let num = parseInt(prompt("Enter function number:"));
    switch(num) {
        case 1: 
            findSumOfEven();
            break;
        case 2: 
            findPower();
            break;
        case 3: 
            divisibility();
            break;
        case 4: 
            numberIntoString();
            break;
        
    }
}
project1();

function findSumOfEven () {
    let n = parseInt(prompt("Enter number:"));
    let total = 0;
    for(i=1;i<=n;i++) {
        if(i % 2 == 0) {
            total = total +i;
        }
        
    }
    document.getElementById("text").innerHTML = total;
}


//2 too ogno, ehnii toonii 2doh zergiig ol 5,3 gevel 5iin 3 zeregt 


function findPower() {
    let a = parseInt(prompt("Enter number:"));
    let b = parseInt(prompt("Enter number:"));
    let zereg = 1;
    for (i = 1; i<=b; i++) {
        zereg = a*zereg;
    }
    document.getElementById("text").innerHTML = zereg;
}


//hereglegch 2 too oruulna. Ehnii too n 2dohdoo huvaagdaj bgaa esehiig shalgana.
// 10; 5 = yes, 10; 3 = no
function divisibility() {
    let a = parseInt(prompt("Enter number:"));
    let b = parseInt(prompt("Enter number:"));

    if(a%b==0) {
        document.getElementById("text").innerHTML = "Yes"
    } else {
        document.getElementById("text").innerHTML = "No"
    }
}


// 1234 = one two three four
function numberIntoString() {
    let num = parseInt(prompt("Enter number:"));
    for (let i = 0; i<num.lenght; i++) {
        switch(num) {
            case 1: 
                document.getElementById("text").innerText = "One";
                break;
            
        }
    }
}





