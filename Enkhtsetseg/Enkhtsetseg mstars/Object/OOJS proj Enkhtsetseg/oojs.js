const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
    
  })
}

class Food {
  constructor(category, category_id, image, discount, price, name, stock){
    this.category = category;
    this.category_id = category_id;
    this.image = "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + image;
    this.discount = discount;
    this.price = price;
    this.name = name;
    this.stock = stock
  }
  addProduct(){
    this.stock += 1;
    return true;
  }
  removeProduct(){
    this.stock -= 1;
    return true;
  }
}

let btn = document.querySelector("#start")
btn.addEventListener("click", () => {
  getAllFood()
  .then(res => res.json())
  .then(res => 
    {
    let arrOfFoods = [];
    res.data.forEach(e=> {
      arrOfFoods.push(new Food(e.category, e.category_id, e.image, e.discount, e.price, e.name, e.stock))
    });
    let str = "";
    arrOfFoods.map(food => {

      
      str += `<div class = "card">
                       <img
                         src = ${food.image}
                         class = "mainImg"
                       />
                       <div class = "badge">${food.discount}%</div>
                       <h2>${food.name}</h2>
                       
                       <div class = "price">
                         <p class = "activePrice">
                           ${new Intl.NumberFormat().format(
                             food.price = (food.price * food.discount) / 100
                           )}
                           ₮${" "}
                         </p>
                         <strike class = "strike-dark">
                           ${new Intl.NumberFormat().format(food.price)}₮
                         </strike>
                         <p id = "${food.name}id">Stock: ${food.stock}</p>
                         <div class = 'btns'>
                           <button id = "${food.name}+">+</button>
                           <button id = "${food.name}-">-</button>
                         </div>
                       </div>
                       </div>`;

                       setTimeout(()=>{
                         let buttonadd =   document.getElementById(`${food.name}+`);
                         let buttonsub =   document.getElementById(`${food.name}-`);
                         console.log(buttonadd)

                         buttonadd.addEventListener('click', () => {
                           food.addProduct();
                           console.log('click')
                           document.getElementById(`${food.name}id`).innerText=`Stock: ${food.stock}`})

                         buttonsub.addEventListener('click', () => {
                            food.removeProduct();
                            console.log('click')
                            document.getElementById(`${food.name}id`).innerText=`Stock: ${food.stock}`})
                       }, 100)
                       
   })  
   document.querySelector(".foods").innerHTML = str;


})
})












//Food class that has properties: category, category_id, image, discount, price, name, stock
//and methods: addProduct, removeProduct

//create an array foods

//call getAllFoods() then create Food objects and push every Food objects to foods array

//Generate HMTL function
