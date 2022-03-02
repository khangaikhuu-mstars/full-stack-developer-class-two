// arrayDiff([3],[4, 5])

// function arrayDiff(a, b) {
//     var c = []
//     var str = ''
//     if (b.length == 0) {
//         return a
//     }
//     else if(a.length == 0){
//         return a
//     }

//     if(a.length > 0 && b.length > 0){

//         for (let i = 0; i < a.length; i++) {
//             for (let j = 0; j < b.length; j++) {
//                 if (a[i] !== b[j]) {
//                     str += ` ${a[i]} `
//                     // c.push(a[i])
//                 }
                
//             }
            
//         }
//         console.log(`[${str}]`); 
            
//     }
// }


// 2
// const arr = [-10, 0, 10, 20, 30];

// var variance = function (numbers){
//     var total = 0;
//     var innt = 0;
//     var min = 0;
//     var sda = 0;
//     for (let h= 0; h < numbers.length; h++) {
//         sda += numbers[h]
        
//     }
//     min = sda / numbers.length 


//     for (let i = 0; i < numbers.length; i++) {
       
        
        
//         innt = (numbers[i]-min)**2
//         total += innt
//         console.log(total);

//     }
//     total = total / numbers.length
//     console.log(total);
// }
// variance(arr)


// 3

// digital_root(654472)

// function digital_root(n) {
//     var str = ""
//     str += n
//     var s = 0;
//     var total = 0;
//     for (let i = 0; i < str.length; i++) {
//         s += parseInt(str[i]) 
//     }
//     if (s<10) {
//         console.log(s); 
//     }
//     else {
//         str =''
//         while(s>9){
//             str += s
//             console.log(str);
//             s = 0
//             console.log('rest');
//             for (let i = 0; i < str.length; i++) {
//                 s +=parseInt(str[i])
//                 console.log(s);
//             }
//         }

//       console.log(s);
//     }
    


//   }




// const player  ={
//     name: 'Ashley',
//     color: 'purple',
//     isTurn: true,
//     play: function(){
        
//             player.name = `${player.name} is playing now`
        
//     }
// }
// player.isTurn = false;
// if (player.isTurn) {
    
//     player.play()
// }
// player["color"] = 'brown';

// console.log(player.name, player.color);
const arrName = ['Anuujin', 'Naraa', 'Urnaa', 'Bymba', 'Angarag']
const arrGpa = ['3', '2', '4', '3.4', '3.2']




class Student{
    constructor(name, gpa, credit){
        this.name = name;
        this.gpa = gpa;
        this.credit = credit;
    }
    stringGPA(){
        return this.gpa+=""
    }

    get level(){
        if (this.credit > 90 && this.credit <= 100) {
            return `Senior`
        }
        else if(this.credit >=61 && this.credit <90){
            return `Junior`
        }
        else if(this.credit >=31 && this.credit <60){
            return `Sophomore`
        }
        else if(this.credit < 30){
            return `Freshman`
        }
    }   
}


// console.log(Hatnaa, Andy);

// arrName.map(e=>{
//     for (let i = 0; i < arrGpa.length; i++) {
        
//         `${e}` = new Student(`${e}`, `${i}`)
//     }
// })

Hatnaa = new Student("Hatnaa", 123, 99)
sda = new Student("sda", 123)
console.log( sda.stringGPA());
console.log(Hatnaa.level);
