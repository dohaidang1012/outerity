const data = [
    {
        id: 1,
        name: "Nike Zoom KD 12",
        price: 99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274617661_429747302240633_5877239222522023381_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=aJ4dY430shgAX84YgJx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKuLLkifNZotQZT4xntM2w_vyEz3cISpgPjEa4tF9NQwg&oe=6254D3A7"
    },
    {
        id: 2,
        name: "Nike Air Force 1 '07 LXX",
        price: 89,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272486755_535948341079895_358183618748100165_n.png?stp=dst-png_p160x160&_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=LCGSnMqX5NMAX_sHqt5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJSyt_KN1RrYlqLP1koHlDpTzmZCoyJloBtJcaV6Mss9Q&oe=6245F9AE"
    },
    {
        id: 3,
        name: "KD14 EP",
        price: 109,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273975414_689661662187012_122618358847164077_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=86vhBLijiJMAX8Y2iNO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIYhaj5QnsPc-ineUaoL4VlBufl_2teZlL4iizbbdYoAw&oe=624986D8"
    },
    {
        id: 4,
        name: "Air Jordan 6 Retro",
        price: 250,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274730986_644067913564485_4443105648161086843_n.png?stp=dst-png_p160x160&_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=oKuyoIB1AjcAX9ZOm6q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK7spIJ2bu9TMf9GxyDIFf-L3qBLQD_8DerfPc3kMFrOw&oe=62496E47"
    },
    {
        id: 5,
        name: "Nike Air More Uptempo '96",
        price: 200,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274352966_347944520591555_6980970143197460058_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mEApOxW8GI0AX9SgDGi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIO0ngVYq1mHwwB4F6NFfB9kfqzzlKgBI93njff-gZn4g&oe=62534561"
    },
    {
        id: 6,
        name: "Nike Air Max 90",
        price: 160,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274619326_272525501729497_5891504294132712557_n.png?stp=dst-png_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uLjwFpJ-f50AX_n4Jmn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJBWkb6AxC4E7jzJQIu_zQ4YDPMeiG9w6Himao9jGbvOQ&oe=62567E5F"
    },
    {
        id: 7,
        name: "Nike Air Max Dawn",
        price: 160,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/275304076_495698118887899_7781229171699343702_n.png?stp=dst-png_p160x160&_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uotMk9rfyH8AX9UiU9t&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJL9V4C2eSvlTtbl1vnvqQzP23s-MsoQ0MwM_Is2XM-YA&oe=6254C92A"
    },
    {
        id: 8,
        name: "Nike Offline 2.0 PRM",
        price: 140,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/275254729_1123331031763435_7969882316119745079_n.png?stp=dst-png_p160x160&_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=qKFSFoAHkfkAX-LcI96&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLB5D2l3-xvm46gBqY2zLlZOswEJa81gTVqkC85TWMrqg&oe=625565A8"
    },
    {
        id: 9,
        name: "Nike Air Force 1 '07",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/275626055_664284758130701_3385763822886385527_n.png?stp=dst-png_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=kG3fMgIJt8UAX9fph9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLaKgCMMEWWlsOKAoJjs6kKZ5dZRovvvpFPhutGJ3gqsQ&oe=62577C6D"
    },
    {
        id: 10,
        name: "Air Jordan 1 Retro High OG",
        price: 210,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274961409_2832652776880789_8883885266429728948_n.png?stp=dst-png_p160x160&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=5mE1ckPfkiAAX-zvIMT&_nc_oc=AQlPjYB28zdziOk6dlcoaNj1xedr1KalztxUQmKTb27hmKj3rZrYv2U2wMRuZBczA43qmpD01tj_zaBmlY3TwT3G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL9ShohHCj17-6ZERlSS_1dCy_WBSEICAV-d-60VwLxWA&oe=6254D669"
    },
    {
        id: 11,
        name: "Kyrie Infinity By You",
        price: 260,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274617661_429747302240633_5877239222522023381_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=aJ4dY430shgAX84YgJx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKuLLkifNZotQZT4xntM2w_vyEz3cISpgPjEa4tF9NQwg&oe=6254D3A7"
    },
    {
        id: 12,
        name: "Nike Air Force 1 Low By You",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273213364_1273514719839740_1604355525249726091_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=1ae8kyB8gSMAX-WswfR&_nc_oc=AQkDyJ0H-QwSV7k5vDpgLmge8NbRnEy49oOo3_Q4chcXfDbKAASd6aEhTQd0o4cKXhrVvmxt8Z6DOg4cr8mCVDhJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWOwQrwZoyTSsMka9UGrgMQuPoY9a9G7wFHpzHuR_VLw&oe=62563462"
    },
    {
        id: 13,
        name: "Nike Air Force 1 Low By You",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273213364_1273514719839740_1604355525249726091_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=1ae8kyB8gSMAX-WswfR&_nc_oc=AQkDyJ0H-QwSV7k5vDpgLmge8NbRnEy49oOo3_Q4chcXfDbKAASd6aEhTQd0o4cKXhrVvmxt8Z6DOg4cr8mCVDhJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWOwQrwZoyTSsMka9UGrgMQuPoY9a9G7wFHpzHuR_VLw&oe=62563462"
    },
    {
        id: 14,
        name: "Nike Air Force 1 Low By You",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273213364_1273514719839740_1604355525249726091_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=1ae8kyB8gSMAX-WswfR&_nc_oc=AQkDyJ0H-QwSV7k5vDpgLmge8NbRnEy49oOo3_Q4chcXfDbKAASd6aEhTQd0o4cKXhrVvmxt8Z6DOg4cr8mCVDhJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWOwQrwZoyTSsMka9UGrgMQuPoY9a9G7wFHpzHuR_VLw&oe=62563462"
    },
    {
        id: 15,
        name: "Nike Air Force 1 Low By You",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273213364_1273514719839740_1604355525249726091_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=1ae8kyB8gSMAX-WswfR&_nc_oc=AQkDyJ0H-QwSV7k5vDpgLmge8NbRnEy49oOo3_Q4chcXfDbKAASd6aEhTQd0o4cKXhrVvmxt8Z6DOg4cr8mCVDhJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWOwQrwZoyTSsMka9UGrgMQuPoY9a9G7wFHpzHuR_VLw&oe=62563462"
    },
    {
        id: 16,
        name: "Nike Air Force 1 Low By You",
        price: 150,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273213364_1273514719839740_1604355525249726091_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=1ae8kyB8gSMAX-WswfR&_nc_oc=AQkDyJ0H-QwSV7k5vDpgLmge8NbRnEy49oOo3_Q4chcXfDbKAASd6aEhTQd0o4cKXhrVvmxt8Z6DOg4cr8mCVDhJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWOwQrwZoyTSsMka9UGrgMQuPoY9a9G7wFHpzHuR_VLw&oe=62563462"
    },
  ];
  
  const list = document.querySelector(".product__list");    
  
  const renderList = () => {
    data.map((product) => renderItem(product));
  };
  
  const renderItem = (product) => {
    const productItem = document.createElement("div");
    productItem.className = "card";
    productItem.innerHTML = `
    <div class="card_heart">
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="card_cart">
      <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div class="card_img">
      <img
        src="${product.image}"
        alt="${product.name}"
      />
    </div>
    <div class="card_title">${product.name}</div>
    <div class="card_price">${product.price.toLocaleString()}</div>
    <div class="card_size">
      <h3>Size:</h3>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
    <div class="card_color">
      <h3>Color:</h3>
      <span class="card_color--green"></span>
      <span class="card_color--red"></span>
      <span class="card_color--black"></span>
      <span class="card_color--yellow"></span>
    </div>
  `;
    list.appendChild(productItem);
  };
  
  renderList();


  // Swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Co dinh
  window.onscroll = function() {myFunction()};

var nav = document.getElementById("myNav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


// Auto play
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Back Top
const backtop = document.querySelector(".back-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100){
    backtop.classList.add("active");
  }else{
    backtop.classList.remove("active");
  }
})







