const slider =(box,l,r,h1)=>{

  return `
  
  <div class="main">
  <div id="cont">
      <h1 id=${h1}> Top Pics For You</h1>
      <div id="scrolling_btns">
      
          <div id=${l}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  >
                  <path d="M7 8l4 5.9L9.5 15 5.3 8.8a1.22 1.22 0 010-1.6L9.5 1 11 2.1z"></path>
                </svg>
          </div>
          <div id=${r}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="right">
                  <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"></path>
                </svg>
          </div>
      </div>
      <div class="item_div" id=${box}>
  </div>
 
  
</div>
 
</div>
  `
}
const scrolling =(x,l,r)=>{

  let left = document.getElementById(`${l}`);
  let right = document.getElementById(`${r}`);

  let product_boxes = [...document.querySelectorAll(`#${x}>div>div>div:nth-of-type(2)`)];

  product_boxes.forEach((item,i)=>{

     let box_dimension = item.getBoundingClientRect();
     let box_width = box_dimension.width;

     left.addEventListener("click",()=>{
         item.scrollLeft -= box_width;
        

     })
     right.addEventListener("click",()=>{
         item.scrollLeft += box_width;
        
        
     })
  })

}

function get(x){
  return document.createElement(`${x}`);
}
let append_data_top = (data,z)=>{
  let boxes = document.querySelector(`#${z}`);
  console.log(boxes);
  boxes.innerHTML = "";
    data.map(el=>{
       let data_div = document.createElement("div");
       let tag_div = document.createElement("div");
       tag_div.setAttribute("class","tag_div")
       tag_div.innerHTML = "<h5>POPULAR</h5>"
       let thumb_img = document.createElement("img");
       thumb_img.src = el.image_url;
       let title = document.createElement("p");
       title.innerText = el.name;
      let course = document.createElement("h4");
      course.innerText = "course";
      let created_by = document.createElement("h4");
      created_by.innerText = el.created;
      let des = document.createElement("p");
      des.innerText = el.description;
     

       data_div.append(tag_div,thumb_img,course,title,created_by,des);
       data_div.addEventListener("click",function(){
           localStorage.setItem("course_overview",JSON.stringify(el));
           window.location.href="./over_view.html"
       })
       boxes.append(data_div);
    });


}



let append_community_data=(data)=>{
  let boxes = document.querySelector("#community_box");
  boxes.innerHTML = ""

data.map(({name,heading,author_photo,article,working_in})=>{
  let main_div = get("div");
  let header_div = get("div")
  let author_profile = get("div");
  author_profile.setAttribute("class","author_profile_div")
  let des = get("p");

  let headline = get("p");
  headline.innerText= heading;
  header_div.append(headline);
  let author_img = get("img");
  author_img.src =author_photo
  let author_name = get("p");
  author_name.innerText = name
  let div = get("div");
 
   
 
  des.innerText = article;
   let company_name = document.createElement("p");
   company_name.innerText = working_in;
   div.append(author_name,company_name)
   author_profile.append(author_img,div);


  main_div.append(header_div,author_profile,des)
  boxes.append(main_div)





 


})

}


let fixed_bar = ()=>{

  return `
  <div id="fixed">
  <div id="subscription_box">
    <h1>grow your skills and advance your carrrier with linkdin learning</h1>
    <div><h3>Start my free month</h3></div>
    <h3>Need to train your team? learn more</h3>
    
  </div>
  <div class="round_img">
     <img src="https://static-exp1.licdn.com/sc/h/cch95u9n3wpbme2zzh5n4uwg0" alt="">
  </div>
</div>
  `
}

let skills_div = ()=>{

  return `
  <div id="skills">
 <div>
    <h1>Identfy the skills you need to advance your carrier</h1>
    <div id="search_skills_box">
       <p>Search for the most popular skills for a</p>
       <div><p>The manager</p></div>
    </div>
 </div>
 <div id="skills_box">
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 <div>
    <h4>1 Product Management</h4>
    <h5>explore--</h5>
 </div>
 </div>
</div>
  `
}


let overview_box =()=>{
  return `
  <div id="overview_box">
  <div>
      <h1>learrn this courese to increase your skills </h1>
      <h6>Biginner .1h22min . Released: June 12</h6>
      <h6>27,897 Learners</h6>
      <div>
          <div><h4>Start my month</h4></div>
          <div><h4>Buy this course</h4></div>
      </div>
  </div>

</div>
  `
}
export {slider,scrolling,get,append_data_top,append_community_data,fixed_bar,skills_div,overview_box};