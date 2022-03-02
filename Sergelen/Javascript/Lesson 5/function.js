function findSumOfEven(){
    let q = parseInt(prompt('Enter your number'));
    let sum = 0;
    for (let i=1; i<=q; i++){
        if (i%2 === 0){
            sum = sum +i;
        }
    }
    return sum;
}
function findPower(){
    let x = parseInt(prompt('Enter your 1st number'));
    let y = parseInt(prompt('Enter your 2nd number'));
    let zereg = 1;
    for (let i=1; i<=y; i++){
       zereg = zereg * x;
    }
    return zereg;
}
function divisibility(){
    let x = parseInt(prompt('Enter your 1st number'));
    let y = parseInt(prompt('Enter your 2nd number'));
    if (x%y === 0){
        alert('Yes');
    } else {
        alert('No');
    }
}
function numberIntoString(){
    let x = parseInt(prompt('Enter your number'));
    
    let n1 = (x - x%1000); let m1 = n1/1000; let l1 = (x- m1*1000);
    let n2 = (l1 - l1%100); let m2 = n2/100; let l2 = (l1- m2*100);
    let n3 = (l2 - l2%10); let m3 = n3/10; let l3 = (l2- m3*10);
    let m4 = l3; 

    let a;
    switch (m1) {
        case 1: a = 'one'; break;
        case 2: a = 'two'; break;
        case 3: a = 'three'; break;
        case 4: a = 'four'; break;
        case 5: a = 'five'; break;
        case 6: a = 'six'; break;
        case 7: a = 'seven'; break;
        case 8: a = 'eight'; break;
        case 9: a = 'nine';break;
    }
    let b;
    switch (m2) {
        case 1: b = 'one'; break;
        case 2: b = 'two'; break;
        case 3: b = 'three'; break;
        case 4: b = 'four'; break;
        case 5: b = 'five'; break;
        case 6: b = 'six'; break;
        case 7: b = 'seven'; break;
        case 8: b = 'eight'; break;
        case 9: b = 'nine';break;
    }
    let c;
    switch (m3) {
        case 1: c = 'one'; break;
        case 2: c = 'two'; break;
        case 3: c = 'three'; break;
        case 4: c = 'four'; break;
        case 5: c = 'five'; break;
        case 6: c = 'six'; break;
        case 7: c = 'seven'; break;
        case 8: c = 'eight'; break;
        case 9: c = 'nine';break;
    }
    let d;
    switch (m4) {
        case 1: d = 'one'; break;
        case 2: d = 'two'; break;
        case 3: d = 'three'; break;
        case 4: d = 'four'; break;
        case 5: d = 'five'; break;
        case 6: d = 'six'; break;
        case 7: d = 'seven'; break;
        case 8: d = 'eight'; break;
        case 9: d = 'nine';break;
    }
    alert (a + ' ' + b + ' ' + c + ' ' + d);
}















function bodlogo(){
let uildel = prompt('Uildliin dugaar oruulna uu');
let answer;
switch (uildel){
    case "1": 
    answer= findSumOfEven();
    alert(answer);
    break;
    case "2":
    answer = findPower();
    alert(answer);
    break;
    case "3":
    answer = divisibility();
    alert(answer);
    break;
    case "4":
    answer = numberIntoString();
    alert(answer);
    break;



}
}

bodlogo();

