
let a = prompt('enter 1 number:');
let b = prompt('enter 1 number:');
function max(maxa, maxb) {

    if(maxa>maxb) {
        return `${a=maxa} is larger`
    } else {
        return `${b=maxb} is larder`
    }
}
console.log(max(a,b));