const getAllFood = async () => {
  let res = await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let resp = await res.json();
  let food = await resp.data;
  return food;
};

class Food {
  constructor(category, category_id, image, discount, price, name, stock, _id) {
    this.category = category;
    this.category_id = category_id;
    this.image = image;
    this.discount = discount;
    this.price = price;
    this.name = name;
    this.stock = stock;
    this._id = _id;
  }
  addProduct() {
    this.stock++;

    return true;
  }
  removeProduct(value) {
    this.stock--;
    return true;
  }
}
//Food class that has properties: category, category_id, image, discount, price, name, stock
//and methods: addProduct, removeProduct

//create an array foods
let foods = [];

//call getAllFoods() then create Food objects and push every Food objects to foods array
getAllFood().then((value) => {
  // console.log(value);
  let utga = value.map((e) => {
    // console.log(e);
    return new Food(
      e.category,
      e.category_id,
      e.image,
      e.discount,
      e.price,
      e.name,
      e.stock,
      e._id
    );
  });
  generateHTML(utga);
});

//Generate HMTL function

function generateHTML(value) {
  console.log(value);
  const foods = document.querySelector(".foods");

  value.map((e) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    foods.appendChild(card);

    // console.log(e.category);

    let text = `<img src="https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${
      e.image
    }" alt="" class="mainTag"/>
      <div class="badge">${e.discount}%</div>
      <h2>${e.name}</h2>
      
      <div class="price">
      <p class="activePrice">${
        e.discount > 0 ? e.price * (1 - e.discount / 100) : e.price
      }</p>
      <p class="FinalPrice">${e.price}</p>
      </div>
      <div id="${e.name}2">stock: ${e.stock}</div>
      <div class="btns">
      
      <button id="${e.name}">+</button>
      <button id="${e.name}1">-</button>
      </div>

      `;
    card.innerHTML = text;
    console.log(e._id);

    console.log(`#${e.name}`);
    // debugger
    document.getElementById(`${e.name}`).addEventListener("click", (a) => {
      if(e.addProduct()){
        document.getElementById(`${e.name}2`).innerHTML = e.stock;
      }
      
    });
    document.getElementById(`${e.name}1`).addEventListener("click", (a) => {
      if(e.removeProduct()){
        
        document.getElementById(`${e.name}2`).innerHTML = e.stock;
      }
    });
  });

  //   value.map(e=>{
  // console.log(`#${e.name}`);
  // // debugger
  //     document.getElementById(`${e.name}`).addEventListener('click', a=>{
  //       console.log('hi');
  //       console.log(e.addProduct());
  //     })
  //     document.getElementById(`${e.name}1`).addEventListener('click', a=>{
  //     console.log('hi');
  //     addProduct(e.removeProduct())
  //     })

  //   })
}

// async function funcimg(value){
//   console.log(value.image);
//   const res = await fetch(`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${value.image}`);
//   return res;
// }
