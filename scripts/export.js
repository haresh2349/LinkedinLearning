const appendBrowseData = (data, container) => {
  container.innerHTML = null;
  data.map((el) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let a1 = document.createElement("a");
    a1.href = "#";
    a1.innerText = el.head;
    h3.append(a1);
    let ul = document.createElement("ul");
    ul.className = "ulTag";
    for (let i = 0; i < el.list.length; i++) {
      let li = document.createElement("li");
      let a2 = document.createElement("a");
      a2.href = "#";
      a2.innerText = el.list[i];
      li.append(a2);
      ul.append(li);
    }
    let last = document.createElement("h3");
    let a3 = document.createElement("a");
    a3.href = "#";
    a3.innerText = "Show All";
    last.append(a3);
    div.append(h3, ul, last);
    container.append(div);
  });
};

const lrArrows = () => {
  return `<div id="scrolling_btns">
        
    <div id="leftArrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  >
          <path d="M7 8l4 5.9L9.5 15 5.3 8.8a1.22 1.22 0 010-1.6L9.5 1 11 2.1z"></path>
        </svg>
    </div>
    <div id="rightArrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="right">
          <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"></path>
        </svg>
    </div>
</div>`;
};
const appendSlidData = (data, container) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    // div.id = i + 1 + "d";
    let imgDiv = document.createElement("div");
    imgDiv.className = "slidImg";
    let img = document.createElement("img");
    img.src = el.url;
    imgDiv.append(img);
    let p = document.createElement("p");
    p.className = "type";
    p.innerText = el.type;
    let h3 = document.createElement("h3");
    h3.innerText = el.domain;
    h3.className = "domain";
    let d = document.createElement("p");
    d.innerText = el.date;
    d.className = "date";
    let desc = document.createElement("p");
    desc.innerText = el.descreption;
    desc.className = "desc";
    let durr = document.createElement("p");
    durr.className = "durr";
    durr.innerText = el.duration;
    div.append(imgDiv, p, h3, d, desc, durr);
    container.append(div);
  });
};

const scrolling = (x, l, r) => {
  let left = document.getElementById(l);
  let right = document.getElementById(r);
  console.log(left);
  let id = `#${x}>div`;
  console.log(id);
  console.log(document.querySelectorAll("#slidCont > div"));
  let product_boxes = [...document.querySelectorAll(id)];
  console.log(product_boxes);

  product_boxes.forEach((item, i) => {
    let box_dimension = item.getBoundingClientRect();
    let box_width = box_dimension.width;

    left.addEventListener("click", () => {
      item.scrollLeft += box_width;
      console.log(left);
    });
    right.addEventListener("click", () => {
      item.scrollLeft -= box_width;
    });
  });
};

export { appendBrowseData, lrArrows, appendSlidData, scrolling };
