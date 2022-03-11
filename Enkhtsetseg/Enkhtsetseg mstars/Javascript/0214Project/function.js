const news = [
    {
      title: "Хавар эхлэх бүтээн байгуулалтууд",
      date: "02.02.2022",
      type: "улс төр",
      pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
    },
    {
      title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
      date: "01.02.2022",
      type: "улс төр",
      pic_url:
        "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
    },
    {
      title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
      date: "31.01.2022",
      type: "спорт",
      pic_url:
        "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
    },
    {
      title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
      date: "06.02.2022",
      type: "улс төр",
      pic_url:
        "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
    },
    {
      title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
      date: "06.01.2022",
      type: "спорт",
      pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
    },
    {
      title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
      date: "16.01.2022",
      type: "улс төр",
      pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
    },
    {
      title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
      date: "17.01.2022",
      type: "спорт",
      pic_url:
        "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
    },
    {
      title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
      date: "13.01.2022",
      type: "улс төр",
      pic_url:
        "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
    },
    {
      title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
      date: "27.01.2022",
      type: "спорт",
      pic_url:
        "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
    },
  ];
  //энд generateHtmlElement() фүнкцийг бич!
    function generateHtmlElement() {

         
        news.forEach((a)=> {
          myNews(a);
        });
  }
    function myNews(a){
      let allnews = document.createElement("div");
        allnews.setAttribute("class", "singleNews");
        let image = document.createElement("img");
        image.setAttribute("src", a.pic_url);
        let titles = document.createElement("h2");
        let text = document.createTextNode(a.title);
        titles.appendChild(text);
        allnews.appendChild(titles);
        allnews.appendChild(image);
        document.getElementById("mainNews").appendChild(allnews);
     }
     document.getElementById("button1").addEventListener('click', () => {
      const up =news.sort((a1,a2) => {
        if(a1.date < a2.date) {return 1;} else {return -1} 
      
       });
       up.forEach(e => {
         myNews(e)
       });
     });
     document.getElementById("button2").addEventListener('click', () => {
      const down =news.sort((b1,b2) => {
        if(b1.date > b2.date) {return 1;} else {return -1} 
      
       });
       down.forEach(c => {
         myNews(c)
       });
     });
     document.getElementById("button4").addEventListener('click', () => {
      const pol =news.filter((p) => {
        if(p.type === 'улс төр') {
          return p.type;
        }
      });
       pol.forEach(d => {
         myNews(d)
       });
     });
     document.getElementById("button5").addEventListener('click', () => {
      const sport =news.filter((s) => {
        if(s.type === 'спорт') {
          return s.type;
        }
      });
       sport.forEach(f => {
        removeHtmlElement()
         myNews(f)
         
       });
     });

    document.getElementById("button3").addEventListener('click', generateHtmlElement);

  //энд removeHtmlElement() фүнкцийг бич!
function removeHtmlElement() {
  let removeElm = document.getElementById("mainNews");
  removeElm.forEach(elm => {
    remove()
  })
}
  /*
  энд 5н button-оо барьж аваад addEventListener хииж 
  removeHtmlElement() фүнкцийг дуудаж index.html доторох
  <div id="mainNews"> элементийг цэвэрлсний дараа
  зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул
  */

