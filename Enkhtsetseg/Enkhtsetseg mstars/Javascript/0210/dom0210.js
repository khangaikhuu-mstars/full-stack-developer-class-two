const characters = [
    {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
    },
    {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
    },
    {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
    },
    {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
    },
];







characters.forEach((e) => {

    let btnall = document.createElement("input");
    btnall.setAttribute("type", "button");
    btnall.setAttribute("value", "All");
    btnall.setAttribute("id", "button1");
    document.querySelector(".btndiv").appendChild(btnall);

    let div = document.createElement("div");
    div.setAttribute("class", "inBlock");
    div.style.backgroundColor = "grey";

    let pName = document.createElement("p");
    let textName = document.createTextNode("name: " + e.name);
    pName.appendChild(textName);
    div.appendChild(pName);

    let pheight = document.createElement("p");
    let textheigth = document.createTextNode("height: " + e.height);
    pheight.appendChild(textheigth);
    div.appendChild(pheight);

    let pMass = document.createElement("p");
    let textMass = document.createTextNode("mass: " + e.mass);
    pMass.appendChild(textMass);
    div.appendChild(pMass);

    let pEye = document.createElement("p");
    let textEye = document.createTextNode("eye_color: " + e.eye_color);
    pEye.appendChild(textEye);
    div.appendChild(pEye);

    let pGender = document.createElement("p");
    let textGender = document.createTextNode("gender: " + e.gender);
    pGender.appendChild(textGender);
    div.appendChild(pGender);

    let indexElement = document.querySelector(".block");
    indexElement.style = "display: flex";
    
    indexElement.style.backgroundColor = "yellow";
    indexElement.appendChild(div);

    

});

