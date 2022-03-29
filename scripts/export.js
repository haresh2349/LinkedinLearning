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

export default appendBrowseData;
