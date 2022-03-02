let number = 0;
let names=[];
let limit = 10;
while(number < limit){
    let ner = prompt('Ner oruul');
    names.push(ner);
    number++;
}
// alert(names);

let i=0;
let strName="";
while(i <limit){
    if(names[i].length>5){
        strName = strName +" " + names[i];
    }
    i++;
}

alert(strName);
