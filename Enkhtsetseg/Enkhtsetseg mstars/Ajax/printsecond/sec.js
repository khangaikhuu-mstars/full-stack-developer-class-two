function startInterval(){
    let time = 1;
    let p = document.createElement("p");
    document.querySelector("#div1").appendChild(p);
    
    let countUp = setInterval(()=>{ 
        p.innerText = time;
        time ++; 
}, 1000);
        document.getElementById("button2").addEventListener('click', () => {
        clearInterval(countUp)
});
}
document.getElementById("button1").addEventListener('click', startInterval);
