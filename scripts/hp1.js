let tabs = document.querySelectorAll(".courseTabs > div");
console.log(tabs);
tabs.forEach((el) => {
  el.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    el.classList.add("active");
  });
});

let showmore = document.querySelector(".more");
let showLess = document.querySelector(".less");
let moreDiv = document.querySelectorAll(".extra");
// console.log(moreDiv);
showmore.addEventListener("click", () => {
  moreDiv.forEach((el) => {
    el.classList.remove("cont");
  });
  showLess.classList.remove("cont");
  showmore.classList.add("cont");
});
showLess.addEventListener("click", () => {
  moreDiv.forEach((el) => {
    el.classList.add("cont");
  });
  showLess.classList.add("cont");
  showmore.classList.remove("cont");
});
