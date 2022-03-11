let array = [prompt('No.1'),prompt('No.2'),prompt('No.3'),prompt('No.4'),prompt('No.5'),prompt('No.6'),prompt('No.7'),prompt('No.8'),prompt('No.9'),prompt('No.10')];
array.pop();
array.pop();
array.push('z');
console.log(array);

for (let i=0; i<array.length; i++){
    console.log((i+1) + '-' + array[i]);
}
