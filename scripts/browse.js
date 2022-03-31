let slidDiv = document.querySelectorAll("#slidCont > div");
let div = document.querySelector("#slidCont > div:nth-child(1)");
console.log(div, "div");
console.log(slidDiv, "hover");
let desc = document.querySelector(".desc");
let durr = document.querySelector(".durr");
slidDiv.forEach((el) => {
  el.addEventListener("mouseover", () => {
    desc.classList.toggle("hover");
    durr.classList.toggle("hover");
  });
});
