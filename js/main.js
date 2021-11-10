//Burger menu manipulations 
let burgerMenu = $(".burger__menu");
let menuCanvas = $(".header__menu-wrapper");
let headerMenu = $(".header__menu");
let headerInner = $(".header__inner");
let body = $("body");

$(document).ready(function() {
  burgerMenu.click(function() {
    menuCanvas.toggleClass("active");
    headerInner.toggleClass("active");
    
    if (menuCanvas.hasClass("active")) {
      body.addClass("lock");
    } else {
      body.removeClass("lock");
    };
  });

  /* menuItem.click(function(){
    let e = $(this);

    menuItem.removeClass("active");
    e.addClass("active");
  }); */

  menuLink.click(function() {
    
    menuCanvas.toggleClass("active");
    headerInner.toggleClass("active");
    body.removeClass("lock");

    if ($(window).innerWidth >= "768") {
      headerInner.removeClass("active");
      menuCanvas.removeClass("active");
    };
  });

  
})

//**** SLider ****//
var url;
var img = $('img')[0];

if ($(img).attr('src').indexOf('cdn') !== -1) {
  url = $(img).attr('src').split('/').slice(0, 3).join('/') + '/';
} else {
  url = '';
}
let introSlider = document.querySelector("#intro-slider");
let introArrowPrev = document.querySelector("#intro-arrow-prev");
let introArrowNext = document.querySelector("#intro-arrow-next");
let bcg = document.querySelector(".intro__image");
let dots = document.querySelectorAll(".intro__dot");

const bcgArr = ["" + url + "/img/intro/bg-1.jpg", "" + url + "/img/intro/bg-2.jpg", "" + url + "/img/intro/bg-3.png"];
let currentInd = 0;

function changeIndex(ind) {
  currentInd = ind;

  slide(currentInd);
}

function nextIndex(direction) {
  currentInd += direction;
  
  if (currentInd >= bcgArr.length) {
    currentInd = 0;
  } else if (currentInd < 0) {
    currentInd = bcgArr.length - 1;
  }

  slide(currentInd);
}

function slide(index) {
  bcg.style.display="none";
  setTimeout(function() {
    bcg.style.display="block";
  }, 0);

  bcg.src = bcgArr[index];

  updateDots(index);
  updateItem(index);
}

function updateDots(index) {
  for (let dot of dots) {
    dot.classList.remove("active");
  }

  dots[index].classList.add("active");
}

//**** Slide items with text  ****//
let introItems = document.querySelectorAll(".intro__box");

function updateItem(index) {
  for (let item of introItems) {
    item.classList.remove("active");
  }

  introItems[index].classList.add("active");
}

//**** Change active-color of navbar menu items ****//

//Blocks
let introBlock = $(".intro").offset().top;
let serviceBlock = $(".services").offset().top;
let aboutBlock = $(".about").offset().top;
let portfolioBlock = $(".portfolio").offset().top;
let contactBlock = $(".contact").offset().top;

//Active Menus
let blueBcg = $(".header__list-blue");
let redBcg = $(".header__list-red");
let violetBcg = $(".header__list-violet");
let greenBcg = $(".header__list-green");
let darkBlueBcg = $(".header__list-dark-blue");

//Menus Collection
let menuItem = $(".header__menu > li");
let menuLink = $(".header__menu > li > a");

//Change active class of header menus on scroll
function changeActive() {
  $(document).scroll(function() {
    let scrollPos = $(document).scrollTop();

    if (scrollPos <= serviceBlock) {
      menuItem.removeClass("active");
      blueBcg.addClass("active");
    } else if (scrollPos < aboutBlock) {
      menuItem.removeClass("active");
      redBcg.addClass("active");
    } else if (scrollPos < portfolioBlock) {
      menuItem.removeClass("active");
      violetBcg.addClass("active");
    } else if (scrollPos < contactBlock) {
      menuItem.removeClass("active");
      greenBcg.addClass("active");
    } else if (scrollPos > contactBlock) {
      menuItem.removeClass("active");
      darkBlueBcg.addClass("active");
    }
  });
}

changeActive();



//**** Portfolio filter ****/

$(document).ready(function(){
  let filter = $("[data-filter]");

  filter.on("click", function(event){
    event.preventDefault();
    
    let ctg = $(this).data("filter");

    if (ctg == "all") {
      $("[data-ctg]").removeClass("hide");
    } else {
      $("[data-ctg]").each(function(){
        let workCtg = $(this).data("ctg");
        
        if (workCtg != ctg) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
});  
