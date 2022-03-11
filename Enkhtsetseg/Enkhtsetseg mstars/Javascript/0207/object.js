let cars = [
    {
        color: "purple",
        type: "minivan",
        price: "110000",

    },
    {
        color: "red",
        type: "tupepe",
        price: "202020",
    },
    {
        color: "blue",
        type: "sdcsdc",
        price: "333333",
    },
    {
        color: "blue",
        type: "sdcsdc",
        price: "500",
    },
    {
        color: "blue",
        type: "sdcsdc",
        price: "300",
    },
];
//let total = 0;
let priceCars = cars.filter(biggerThan10000);
function biggerThan10000(value) {
    return value.price >10000;
}
console.log(priceCars);