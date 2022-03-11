const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "2022.02.02",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "2022.02.01",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "2022.01.31",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "2022.02.06",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "2022.01.06",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "2022.01.16",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "2022.01.17",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "2022.01.13",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "2022.01.27",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];
//энд generateHtmlElement() фүнкцийг бич!
function allNews() {
  removeHtmlElement();
  news.forEach((e) => {
    let par = document.createElement("p");
    let text = document.createTextNode(e.title);
    par.appendChild(text);

    let pic = document.createElement("img");
    pic.setAttribute("src", e.pic_url);

    let card = document.createElement("div");
    card.appendChild(par);
    card.appendChild(pic);

    card.setAttribute("class", "singleNews");

    document.querySelector("#mainNews").appendChild(card);
  });
}
document.querySelector("#allnews").addEventListener("click", allNews);

function politics() {
  removeHtmlElement();
  news.forEach((e) => {
    if (e.type === "улс төр") {
      function filtered() {
        let par = document.createElement("p");
        let text = document.createTextNode(e.title);
        par.appendChild(text);

        let pic = document.createElement("img");
        pic.setAttribute("src", e.pic_url);

        let card = document.createElement("div");
        card.appendChild(par);
        card.appendChild(pic);

        card.setAttribute("class", "singleNews");

        document.querySelector("#mainNews").appendChild(card);
      }
      filtered();
    }
  });
}
document.querySelector("#politics").addEventListener("click", politics);

function sport() {
  removeHtmlElement();
  news.forEach((e) => {
    if (e.type === "спорт") {
      function filtered() {
        let par = document.createElement("p");
        let text = document.createTextNode(e.title);
        par.appendChild(text);

        let pic = document.createElement("img");
        pic.setAttribute("src", e.pic_url);

        let card = document.createElement("div");
        card.appendChild(par);
        card.appendChild(pic);

        card.setAttribute("class", "singleNews");

        document.querySelector("#mainNews").appendChild(card);
      }
      filtered();
    }
  });
}
document.querySelector("#sport").addEventListener("click", sport);

//энд removeHtmlElement() фүнкцийг бич!

function removeHtmlElement() {
  const remAll = document.querySelectorAll(".singleNews");
  remAll.forEach((e) => {
    e.remove();
  });
}

/*
  энд 5н button-оо барьж аваад addEventListener хииж 
  removeHtmlElement() фүнкцийг дуудаж index.html доторох
  <div id="mainNews"> элементийг цэвэрлсний дараа
  зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул
  
  */
