



let images = [{
  url: "./Rostov_Admiral.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don <br>LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"

}, {
  url: "./Sochi.png",
  title: "Sochi Thieves",
  city: "Sochi <br> Thieves" ,
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "./Rostov_Patriotic.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don <br>Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"

}];

function initSlider(options) {
if (!images || !images.length) return;

options = options || {
  titles: true,
  dots: true,
};


let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".slider__arrows");
let sliderDots = document.querySelector(".slider__dots");
let sliderTitles = document.querySelector(".slider__titles");
let sliderCity = document.querySelector(".info-city");
let sliderArea = document.querySelector(".info-area");
let sliderTime = document.querySelector(".info-time");
let sliderCost = document.querySelector(".info-cost");

initImages();
initArrows();
initDots();
initTitles();
initCity();
initArea();
initTime();
initCost();



function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
      sliderDots.querySelector(".active").classList.remove(".active");
      this.classList.add("active");
    })
  })
}


function initTitles() {

  images.forEach((image, index) => {
    let titleDiv = `<div class="slider__titles-item n${index} ${index === 0? "active" : ""}"data-index="${index}">${images[index].title}</div>`;
    sliderTitles.innerHTML += titleDiv;
    });

    sliderTitles.querySelectorAll(".slider__titles-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderTitles.querySelector(".active").classList.remove(".active");
        this.classList.add("active");
      })
    })
  };

function initCity() {

  images.forEach((image,index) => {
    let cityDiv =`<div class="info-city ">${images[0].city}</div>`;
    sliderCity.innerHTML=cityDiv;
  })
}

function changeCity(num) {
  sliderCity.innerHTML=images[num].city ;
}

function initArea() {

  images.forEach((image,index) => {
    let areaDiv =`<div class="info-area ">${images[0].area}</div>`;
    sliderArea.innerHTML=areaDiv;
  })
}

function changeArea(num) {
  sliderArea.innerHTML=images[num].area ;
}

function initTime() {

  images.forEach((image,index) => {
    let timeDiv =`<div class="info-time ">${images[0].time}</div>`;
    sliderTime.innerHTML=timeDiv;
  })
}

function changeTime(num) {
  sliderTime.innerHTML=images[num].time ;
}

function initCost() {

  images.forEach((image,index) => {
    let costDiv =`<div class="info-cost ">${images[0].cost}</div>`;
    sliderCost.innerHTML=costDiv;
  })
}

function changeCost(num) {
  sliderCost.innerHTML=images[num].cost ;
}


function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.titles) {
    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + num).classList.add("active");
  }
  changeCity(num);
  changeArea(num);
  changeTime(num);
  changeCost(num);
}
}

let sliderOptions = {
dots: true,
titles: true,
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});