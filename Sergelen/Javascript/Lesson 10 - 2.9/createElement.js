document.getElementById('btn').addEventListener('click',login);

function login(){
let username = document.createElement('input');
username.setAttribute('type','text');
username.setAttribute('placeholder','Enter username');
document.querySelector('.loginArea').appendChild(username);

let pass = document.createElement('input');
pass.setAttribute('type','password');
pass.setAttribute('placeholder','Enter password');
document.querySelector('.loginArea').appendChild(pass);
 
let btn = document.createElement('button');
btn.setAttribute('id','login');
let text = document.createTextNode('Login');
btn.appendChild(text);
document.querySelector('.loginArea').appendChild(btn);

document.querySelector('#login').addEventListener('click',()=>{
    alert(username.value + ' ' + pass.value);
})


}