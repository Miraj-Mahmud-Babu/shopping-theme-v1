

// new function

document.querySelectorAll(".filter_icon").forEach(function (el) {
  el.addEventListener("click", function () {
      console.log("miraj")
    var element = el.closest(".filter_bar");
    element.classList.add("filter-visible");
  });
});

document.querySelectorAll(".cross-btn").forEach(function (el) {
  el.addEventListener("click", function () {
    var element = el.closest(".filter_bar");
    element.classList.remove("filter-visible");
  });
});

// search bar design

document.querySelectorAll(".search_icon").forEach(function (ev) {
  ev.addEventListener("click", function (ev) {
      console.log("miraj")
    var ele = ev.closest(".search-input-box-design");
    ele.classList.add("filter-visible");
  });
});

// document.querySelector(".icon").addEventListener("click", function(){
//   document.querySelector(".search-input").classList.toggle("active");
// })


document.querySelectorAll(".search-icon").forEach(function(el){
  el.addEventListener("click", function(){
   el.closest(".main-search-icon").classList.toggle("search-active");
  })
})


document.querySelectorAll(".search-icon-header").forEach(function(ev){
  ev.addEventListener("click", function(){
   ev.closest(".main-search-icon-header").classList.toggle("search-active-header");
  })
})



// moduls item 


const modalsListItems = document.querySelector(".search-input-header");
console.log(modalsListItems);
const mainParent = document.querySelector(".main-search-icon-header");

document.addEventListener("click", function (event) {
    if (!event.target.closest(".main-search-icon-header")) {
        modalsListItems.style.visibility = "hidden";
    }
    else {
      modalsListItems.style.visibility = "visible"; 
    }


});
