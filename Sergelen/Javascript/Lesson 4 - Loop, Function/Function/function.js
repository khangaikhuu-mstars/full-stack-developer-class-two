/*rest menu

function menu(){
    console.log('Welcome to our restaurant!')
    console.log('Our menu: \n Tsuivan 8900MNT \n Huushuur 1200MNT')
    let food = document.getElementById("menu").innerHTML = "So Delicious";
    console.log(food);
}

menu();
*/

/*check eligibility for alcohol 

function check(age){
    if (age>18){
        alert('allowed for alcohol');
    } else {
        alert('not allowed for alcohol');
    }
}

*/

/* Duriin toonii kubiig oloh program bich 

function kub(a) {
    alert(a**3) ;
}
alert(kub(parseInt(prompt('Too oruul'))));
*/

/* Duriin toonii zereg oloh program bich */

function bodlogo(a,n){
    let urjver = 1;
    for (let i = 1 ; i <=n ; i++) {
        urjver = urjver * a;
    }
    return urjver;
}

let number = parseInt(prompt('Too oruul'));
let zereg = parseInt(prompt('Zereg oruul'));
let answer = bodlogo(number,zereg);
alert(answer);