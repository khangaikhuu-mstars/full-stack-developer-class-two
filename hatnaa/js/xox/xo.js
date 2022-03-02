let boxes = [['1','2','3'],['4','5','6'],['7','8','9']]
var str = ''
//x o haruulah
//function winning check

function checkWin(){
    for(let i=0;i<3;i++){
        if(boxes[i][0]===boxes[i][1] && boxes[i][0]===boxes[i][2]){
            var c = setInterval(() => {
                alert("Player 1 WON")
                clearInterval(c)
            }, 200);
            return true
        }
    }
    for(let i=0;i<3;i++){
        if(boxes[0][i]===boxes[1][i] && boxes[1][i]===boxes[2][i]){
            var c = setInterval(() => {
                alert("Player 2 WON")
                clearInterval(c)
            }, 200);
            return true
        }
    }
    return false
}

for (let i = 1; i < 10; i++) {
    const btn = document.querySelector(`#btn${i}`);
    btn.setAttribute("onMouseOver","this.style.backgroundcolor='white'")
    

    document.querySelector(`#btn${i}`).addEventListener("click", ()=>{
        str += i

        
        if(str.length%2==0){
            document.querySelector(`#btn${i}`).setAttribute("value", "X");
            boxes[Math.floor(i/3.1)][i%3===0?2:i%3-1] = 'X'
            checkWin(boxes)
            console.log(boxes);
            document.querySelector(`#btn${i}`).addEventListener("click", ()=>{
                alert("error 666")
            })
        }
        else{
            document.querySelector(`#btn${i}`).setAttribute("value", "O");
            boxes[Math.floor(i/3.1)][i%3===0?2:i%3-1] = 'O'
            console.log(boxes);
            checkWin(boxes)
            document.querySelector(`#btn${i}`).addEventListener("click", ()=>{
                alert("error 666");
                
            })
        }
    })
    
    // if(str.length / 2 == 0){

    // }
}   
