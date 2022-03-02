let cars = [
{
       color:"purple",
       type:"van",
       price:10000
} ,
{
    color:"orange",
    type:"van",
    price:500
}, 
{
color:"green",
type:"van",
price:400
},
{
color:"red",
type:"van",
price:800
} 
]


let cheapCars = cars.filter(lessThan1000);
function lessThan1000(value){
    return value.price<1000;
}
console.log(cheapCars);

