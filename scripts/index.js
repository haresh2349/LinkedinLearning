//  //     onscroll function  //////////////////////////////////////////////////////
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        let header = document.querySelector("#header");
        console.log();
        header.style.boxShadow = "0px 3px 5px -1px rgba(50, 50, 93, 0.25)";
        // box-shadow: rgba(50, 50, 93, 0.25) , rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        // box-shadow:  , rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
       
    } else {
        document.querySelector("#header").style.boxShadow = "none";
    }
    }
//  //      onscroll function  end //////////////////////////////////////////////////


function header() {
    let header = document.getElementById("hcon");
    header.innerHTML = `<div id="header">
    <div id="nav">
        <div>
            <a id="logo" href="./index.html">
                <svg viewBox="0 0 28 28" data-supported-dps="28x28" width="28" height="28" focusable="false">
                    <g transform="scale(.5833)" fill="none" fill-rule="evenodd">
                        <path
                            d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                            class="background" fill="#0077B5"></path>
                    </g>
                </svg>
                <div>
                    <span aria-hidden="true">
                        LEARNING
                    </span>
                </div>

            </a>
        </div>
        <div id="searchbox">
            <button> Learning ⯆</button>
            <input type="search" placeholder="Search for skills, subjects or software">
            <button>
                <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
                    <path
                        d="M21 19.67l-5.44-5.44a7 7 0 10-1.33 1.33L19.67 21zm-11-4.54A5.13 5.13 0 1115.13 10 5.13 5.13 0 0110 15.13z">
                    </path>
                </svg>
            </button>
        </div>
        <div id="sups"><a href="./trial.html">Start free trial</a></div>
        <div id="signbtn"><a href="./signin.html">Sign In</a></div>
    </div>
</div>`
  }

  function footer() {
    let footer = document.getElementById("fullfooter");
    footer.innerHTML = `<div id="footerdiv">
    <div id="foot1">
        <div>
            <div><b>Explore Business Topics</b></div>
            <p><a href="">Business Analysis and Strategy</a></p>
            <p><a href="">Business Software and Tools</a></p>
            <p><a href="">Career Development</a></p>
            <p><a href="">Customer Service</a></p>
            <p><a href="">Finance and Accounting</a></p>
            <p><a href="">Human Resources</a></p>
            <p><a href="">Leadership and Management</a></p>
            <p><a href="">Marketing</a></p>
            <p><a href="">Professional Development</a></p>
            <p><a href="">Project Management</a></p>
            <p><a href="">Sales</a></p>
            <p><a href="">Small Business and Entrepreneurship</a></p>
            <p><a href="">Training and Education</a></p>
            <div><a href=""><b>See all</b></a></div>
        </div>
        <div>
            <div><b>Explore Creative Topics</b></div>
            <p><a href="">AEC</a></p>
            <p><a href="">Animation and Illustration</a></p>
            <p><a href="">Audio and Music</a></p>
            <p><a href="">Graphic Design</a></p>
            <p><a href="">Motion Graphics and VFX</a></p>
            <p><a href="">Photography</a></p>
            <p><a href="">Product and Manufacturing</a></p>
            <p><a href="">User Experience</a></p>
            <p><a href="">Video</a></p>
            <p><a href="">Visualization and Real-Time</a></p>
            <p><a href="">Web Design</a></p>
            <div><a href=""><b>See all</b></a></div>
        </div>
        <div>
            <div><b>Explore Technology Topics</b></div>
            <p><a href="">Cloud Computing</a></p>
            <p><a href="">Data Science</a></p>
            <p><a href="">Database Management</a></p>
            <p><a href="">DevOps</a></p>
            <p><a href="">IT Help Desk</a></p>
            <p><a href="">Mobile Development</a></p>
            <p><a href="">Network and System Administration</a></p>
            <p><a href="">Security</a></p>
            <p><a href="">Software Development</a></p>
            <p><a href="">Web Development</a></p>
            <div><a href=""><b>See all</b></a></div>
        </div>
        
    </div>
</div>
<div id="footerdiv2">
    <div id="foot1">
        <div>
            <div>
                <svg viewBox="0 0 84 21"  width="84" height="21" focusable="false">
                    <g  fill="none" fill-rule="evenodd">
                        <path
                            d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0"
                            fill="#FFF"></path>
                        <path
                            d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0zM70.875 7.875h2.844v1.429c.41-.822 1.46-1.56 3.038-1.56 3.025 0 3.743 1.635 3.743 4.636v5.557h-3.063v-4.874c0-1.709-.41-2.672-1.452-2.672-1.446 0-2.048 1.039-2.048 2.672v4.874h-3.062V7.876zm-5.25 10.063h3.063V7.874h-3.063v10.063zm3.5-13.344a1.969 1.969 0 11-3.938 0 1.969 1.969 0 013.938 0z"
                            fill="#0073B0"></path>
                    </g>
                    <g fill="#0073B0">
                        <path
                            d="M59.5 17.938h-2.625v-1.532c-.478.727-1.87 1.663-3.281 1.663-2.99 0-4.944-1.892-4.944-4.944 0-2.803 1.641-5.381 4.506-5.381 1.287 0 2.576.25 3.282 1.225V3.063H59.5v14.874zm-5.578-7.482c-1.557 0-2.34.935-2.34 2.45 0 1.516.783 2.494 2.34 2.494s2.56-.978 2.56-2.494c0-1.515-1.003-2.45-2.56-2.45zM47.25 16.242c-.997 1.267-2.994 1.827-4.922 1.827-3.114 0-5.053-2.164-5.053-5.381 0-3.218 2.319-4.944 5.49-4.944 2.626 0 4.835 1.845 4.835 5.381 0 .547-.088.875-.088.875H40.25l.049.293c.174.964 1.208 1.457 2.412 1.457 1.017 0 1.778-.443 2.297-1.148l2.242 1.64zm-2.734-4.43c.02-1.038-.814-1.88-1.935-1.88-1.37 0-2.248.905-2.331 1.88h4.266z">
                        </path>
                        <path
                            d="M27.563 3.063h3.062v8.75l3.5-3.938h3.828l-4.266 4.594 4.102 5.469h-3.664l-3.5-4.813v4.813h-3.063zM16.188 7.875h2.625v1.477c.414-.79 1.766-1.608 3.28-1.608 3.156 0 3.72 1.862 3.72 4.56v5.633H22.75v-4.976c0-1.162.067-2.548-1.531-2.548-1.619 0-1.969 1.24-1.969 2.548v4.976h-3.063V7.876zM12.906 2.68c1.012 0 1.914.903 1.914 1.914 0 1.01-.902 1.914-1.914 1.914-1.01 0-1.914-.903-1.914-1.914s.904-1.914 1.914-1.914zm-1.531 15.258h3.063V7.874h-3.063v10.063zM0 3.063h3.063v11.812h6.562v3.063H0z">
                        </path>
                    </g>
                </svg>
            </div>

        </div>
        <div>
            <div><b>General</b></div>
            <p><a href="">Sign Up</a></p>
            <p><a href="">Help Center</a></p>
            <p><a href="">About</a></p>
            <p><a href="">Press</a></p>
            <p><a href="">Blog</a></p>
            <p><a href="">Careers</a></p>
            <p><a href="">Developers</a></p>
        </div>
        <div>
            <div><b>Browse LinkedIn</b></div>
            <p><a href="">Learning</a></p>
            <p><a href="">Jobs</a></p>
            <p><a href="">Salary</a></p>
            <p><a href="">Mobile</a></p>
            <p><a href="">Services</a></p>
            <p><a href="">Products</a></p>
        </div>
        <div>
            <div><b>Business Solutions</b></div>
            <p><a href="">Talent</a></p>
            <p><a href="">Marketing</a></p>
            <p><a href="">Sales</a></p>
            <p><a href="">Learning</a></p>
        </div>
        <div>
            <div><b>Directories</b></div>
            <p><a href="">Members</a></p>
            <p><a href="">Jobs</a></p>
            <p><a href="">Companies</a></p>
            <p><a href="">Salaries</a></p>
            <p><a href="">Featured</a></p>
            <p><a href="">Learning</a></p>
            <p><a href="">Schools</a></p>
            <p><a href="">News</a></p>
            <p><a href="">News Letters</a></p>
            <p><a href="">Services</a></p>
            <p><a href="">Interview Prep</a></p>
            <p><a href="">Products</a></p>
            <p><a href="">Content Topics</a></p>
        </div>
       
    </div>
</div>
<div id="footerdiv3">
    <div>
        <span>
            <svg viewBox="0 0 56 14"  version="1.1" fill="CurrentColor" focusable="false" class="lazy-loaded">
                <g class="inbug" fill-rule="evenodd">
                    <path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25" class="bug-text-color" fill="#FFFFFF" transform="translate(42.000000, 0.000000)"></path>
                    <path d="M56,1.25 L56,12.75 C56,13.44 55.44,14 54.75,14 L43.25,14 C42.56,14 42,13.44 42,12.75 L42,1.25 C42,0.56 42.56,0 43.25,0 L54.75,0 C55.44,0 56,0.56 56,1.25 Z M47,5 L48.85,5 L48.85,6.016 L48.893,6.016 C49.259,5.541 50.018,4.938 51.25,4.938 C53.125,4.938 54,5.808 54,8 L54,12 L52,12 L52,8.75 C52,7.313 51.672,6.875 50.632,6.875 C49.5,6.875 49,7.75 49,9 L49,12 L47,12 L47,5 Z M44,12 L46,12 L46,5 L44,5 L44,12 Z M46.335,3 C46.335,3.737 45.737,4.335 45,4.335 C44.263,4.335 43.665,3.737 43.665,3 C43.665,2.263 44.263,1.665 45,1.665 C45.737,1.665 46.335,2.263 46.335,3 Z" class="background"></path>
                </g>
                <g class="linkedin-text">
                    <path d="M40,12 L38.107,12 L38.107,11.1 L38.077,11.1 C37.847,11.518 37.125,12.062 36.167,12.062 C34.174,12.062 33,10.521 33,8.5 C33,6.479 34.291,4.938 36.2,4.938 C36.971,4.938 37.687,5.332 37.97,5.698 L38,5.698 L38,2 L40,2 L40,12 Z M36.475,6.75 C35.517,6.75 34.875,7.49 34.875,8.5 C34.875,9.51 35.529,10.25 36.475,10.25 C37.422,10.25 38.125,9.609 38.125,8.5 C38.125,7.406 37.433,6.75 36.475,6.75 L36.475,6.75 Z"></path>
                    <path d="M31.7628,10.8217 C31.0968,11.5887 29.9308,12.0627 28.4998,12.0627 C26.3388,12.0627 24.9998,10.6867 24.9998,8.4477 C24.9998,6.3937 26.4328,4.9377 28.6578,4.9377 C30.6758,4.9377 31.9998,6.3497 31.9998,8.6527 C31.9998,8.8457 31.9708,8.9997 31.9708,8.9997 L26.8228,8.9997 L26.8348,9.1487 C26.9538,9.8197 27.6008,10.5797 28.6358,10.5797 C29.6528,10.5797 30.2068,10.1567 30.4718,9.8587 L31.7628,10.8217 Z M30.2268,7.9047 C30.2268,7.0627 29.5848,6.4297 28.6508,6.4297 C27.6058,6.4297 26.9368,7.0597 26.8728,7.9047 L30.2268,7.9047 Z"></path>
                    <polygon points="18 2 20 2 20 7.882 22.546 5 25 5 21.9 8.199 24.889 12 22.546 12 20 8.515 20 12 18 12"></polygon>
                    <path d="M10,5 L11.85,5 L11.85,5.906 L11.893,5.906 C12.283,5.434 13.031,4.938 14.14,4.938 C16.266,4.938 17,6.094 17,8.285 L17,12 L15,12 L15,8.73 C15,7.943 14.821,6.75 13.659,6.75 C12.482,6.75 12,7.844 12,8.73 L12,12 L10,12 L10,5 Z"></path>
                    <path d="M7,12 L9,12 L9,5 L7,5 L7,12 Z M8,1.75 C8.659,1.75 9.25,2.341 9.25,3 C9.25,3.659 8.659,4.25 8,4.25 C7.34,4.25 6.75,3.659 6.75,3 C6.75,2.341 7.34,1.75 8,1.75 L8,1.75 Z"></path>
                    <polygon points="0 2 2 2 2 10 6 10 6 12 0 12"></polygon>
                </g>
            </svg>
            <div>© 2022</div>
        </span>
        <div><a href="">About</a></div>
        <div><a href="">Accessibility</a></div>
        <div><a href="">User Agreement</a></div>
        <div><a href="">Privacy Policy</a></div>
        <div><a href="">Cookie Policy</a></div>
        <div><a href="">Copyright Policy</a></div>
        <div><a href="">Brand Policy</a></div>
        <div><a href="">Guest Controls</a></div>
        <div><a href="">Community Guidelines</a></div>
        <div><a href="">Language⯆</a></div>
    </div>
</div>`
  }
  export {header,footer} ;