let bussinessData = [
  {
    head: "Business Analysis and Strategy",
    list: [
      "Data Analysis",
      "Business Strategy",
      "Business Intelligence",
      "Data Visualization",
      "Operations Management",
    ],
  },
  {
    head: "Business Software and Tools",
    list: [
      "Data Analysis",
      "Data Visualization",
      "Spreadsheets",
      "Computer Skills",
      "Personal Productivity Software",
    ],
  },
  {
    head: "Career Development",
    list: ["Career Management", "Job Searching", "Personal Branding"],
  },
  {
    head: "Customer Service",
    list: [
      "CRM Software",
      "Customer Service Skills",
      "Customer Service Management",
      "Contact Centers",
      "Service Metrics",
    ],
  },
  {
    head: "Finance and Accounting",
    list: [
      "Small Business Finance",
      "Corporate Finance",
      "Accounting Skills",
      "Personal Finance",
      "Accounting Software",
    ],
  },
  {
    head: "Human Resources",
    list: [
      "LinkedIn Talent Insights Certifications",
      "Talent Management",
      "Diversity and Inclusion",
      "HR Strategy",
      "Hiring and Interviewing",
    ],
  },
  {
    head: "Leadership and Management",
    list: [
      "Communication",
      "Leadership Skills",
      "Business Strategy",
      "Teams and Collaboration",
      "Talent Management",
    ],
  },
  {
    head: "Marketing",
    list: [
      "LinkedIn Marketing Certifications",
      "Meta Certifications",
      "Social Media Marketing",
      "Advertising and Promotion",
      "Small Business Marketing",
    ],
  },
  {
    head: "Professional Development",
    list: [
      "Well-Being and Self-Care",
      "Communication",
      "Personal Effectiveness",
      "Teams and Collaboration",
      "Diversity and Inclusion",
    ],
  },
  {
    head: "Project Management",
    list: [
      "Operations Management",
      "Project Management Skills",
      "Project Management Software",
      "Business Analysis",
      "Agile Project Management",
    ],
  },
  {
    head: "Sales",
    list: [
      "CRM Software",
      "Sales Skills",
      "Social Selling",
      "Sales Management",
      "Sales Metrics",
    ],
  },
  {
    head: "Small Business and Entrepreneurship",
    list: [
      "Small Business Marketing",
      "Small Business Managemen",
      "Small Business Finance",
      "Entrepreneurship",
      "Design Business",
    ],
  },
  {
    head: "Training and Education",
    list: [
      "E-Learning Software",
      "Instructional Design",
      "Teaching",
      "Educational Technology",
      "Corporate Training",
    ],
  },
];
let creativeData = [
  {
    head: "AEC",
    list: [
      "Rendering",
      "3D Modeling",
      "2D Drafting And Drawing",
      "Real-Time",
      "BIM",
    ],
  },
  {
    head: "Animation and Illustration",
    list: [
      "Rendering",
      "3D Modeling",
      "3D Animation",
      "Drawing",
      "Illustration",
    ],
  },
  {
    head: "Audio and Music",
    list: [
      "Digital Audio Workstations",
      "Music Production",
      "Audio Engineering",
      "Sound Design",
      "Audio Recording",
    ],
  },
  {
    head: "Graphic Design",
    list: [
      "Asset Management",
      "Drawing",
      "Typography",
      "Digital Publishing",
      "Design Thinking",
    ],
  },
  {
    head: "Motion Graphics and VFX",
    list: [
      "Rendering",
      "Motion Graphics",
      "Typography",
      "Compositing",
      "Visual Effects",
    ],
  },
  {
    head: "Photography",
    list: [
      "Image Editing",
      "Asset Management",
      "Analog Photography",
      "Photo Compositing",
      "Portrait Photography",
    ],
  },
  {
    head: "Product and Manufacturing",
    list: [
      "Rendering",
      "3D Modeling",
      "2D Drafting And Drawing",
      "Real-Time",
      "Product and Industrial Design",
    ],
  },
  {
    head: "User Experience",
    list: [
      "Design Thinking",
      "UX Design",
      "Content Strategy",
      "Interaction Design",
      "User Interface Prototyping",
    ],
  },
  {
    head: "Video",
    list: [
      "Video Editing",
      "Video Post-Production",
      "Shooting Video",
      "Video Production",
      "Video Color Grading",
    ],
  },
  {
    head: "Visualization and Real-Time",
    list: [
      "Rendering",
      "3D Modeling",
      "2D Drafting And Drawing",
      "Real-Time",
      "Architectural Visualization",
    ],
  },
  {
    head: "Web Design",
    list: [
      "Web Standards",
      "Interactive Web Content",
      "Web Graphics",
      "Responsive Web Design",
      "Mobile Web Design",
    ],
  },
];
let techData = [
  {
    head: "Cloud Computing",
    list: [
      "Cloud Platforms",
      "Cloud Services",
      "Cloud Foundations",
      "Cloud Development",
      "Cloud Administration",
    ],
  },
  {
    head: "Data Science",
    list: [
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization",
      "Big Data",
      "Machine Learning",
    ],
  },
  {
    head: "Database Management",
    list: [
      "Database Development",
      "Database Administration",
      "Data Resource Management",
      "Data Centers",
    ],
  },
  {
    head: "DevOps",
    list: ["DevOps Tools", "DevOps Foundations", "Agile Software Development"],
  },
  {
    head: "IT Help Desk",
    list: [
      "Client Operating Systems",
      "Help Desk Skills",
      "Operating System Distribution",
      "Upgrade and Maintenance",
      "Software Support",
    ],
  },
  {
    head: "Mobile Development",
    list: [
      "Cross-Platform Development",
      "iOS Development",
      "Android Development",
      "Mobile Game Development",
    ],
  },
  {
    head: "Network and System Administration",
    list: [
      "Network Administration",
      "Server Administration",
      "Virtualization",
      "Internet of Things",
      "Enterprise Content Management",
    ],
  },
  {
    head: "Security",
    list: [
      "Network Security",
      "Security Management and Policy",
      "Vulnerability Management",
      "Identity and Access Management",
      "Security Awareness",
    ],
  },
  {
    head: "Software Development",
    list: [
      "Programming Languages",
      "Software Development Tools",
      "Database Development",
      "Game Development",
      "Programming Foundations",
    ],
  },
  {
    head: "Web Development",
    list: [
      "Front-End Web Development",
      "Back-End Web Development",
      "Web Development Tools",
      "Full-Stack Web Development",
      "Content Management Systems (CMS)",
    ],
  },
];

localStorage.setItem("bussinessData", JSON.stringify(bussinessData));
localStorage.setItem("creativeData", JSON.stringify(creativeData));
localStorage.setItem("techData", JSON.stringify(techData));

let bussCarousel = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH9lfnAkEjynw/learning-public-crop_675_1200/0/1591384349423?e=1648803600&v=beta&t=hyV4Kfid2dlIUxG6JtANnLJNqSuVd5iTsWI_Qc30VFg",
    type: "LEARNING PATH",
    domain: "Become a Data Analyst",
    date: "May 20, 2020",
    descreption:
      "Data analysts examine information using data analysis tools and help their teams develop insights and business strategies. You’ll need skills in math, statistics, communications, and working with tools designed to do data analytics and data visualization. Explore this high-demand career.",
    duration: " 38h 24m 28s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEIMip0GxCS_A/learning-public-crop_675_1200/0/1602706004811?e=1648803600&v=beta&t=6EYUWVTg7b2SOMRT9F9gAhCZ3JLC7fqGqU3pemLmOEs",
    type: "LEARNING PATH",
    domain: "Advance Your Skills in Python",
    date: "Apr 4, 2019",
    descreption:
      "Now that you've learned the basics of Python programming, it's time to dive into the next steps to prepare for a career as a Python developer. This learning path takes you through the practical need of programmers, such as learning about design patterns, testing, and even interview preparation.",
    duration: " 14h 34m 42s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEmpu7qTqI_TA/learning-public-crop_675_1200/0/1591384497665?e=1648803600&v=beta&t=YVKa-uk4c-Iy0q_PJzIho9hXuxxMRv0kJAXxoPRHD5g",
    type: "LEARNING PATH",
    domain: "Become a Software Developer",
    date: "May 12, 2022",
    descreption:
      "Get an introduction to the programming skills needed for a career as a software developer. This learning path provides a broad perspective on core technologies for web development, software development, and databases. It introduces common tools and the bigger picture of how development careers work.",
    duration: " 30h 26m 11s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFaMtqNK7v5tg/learning-public-crop_675_1200/0/1582672205551?e=1648803600&v=beta&t=1h_ZI4mN4K3LIRzrSLvqT_4wVlBWH3L0I4jsWwO2AJE",
    type: "LEARNING PATH",
    domain: "Become a Data Scientist",
    date: "Apr 4, 2019",
    descreption:
      "Whether you're working in IT or simply have an interest in entering the exciting field, this learning path will support you in developing a career in data science. Learn about the fundamental stages of data science work, from Statistics and Systems Engineering to Data Mining and Machine Learning.",
    duration: " 20h 6m 9s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEXTlzXiLSoQg/learning-public-crop_675_1200/0/1582672203087?e=1648803600&v=beta&t=jm61NsXJjmTAhS-mbOEdlxlgtZl1lswUjqb8sO-08Zk",
    type: "LEARNING PATH",
    domain: "Become a Java Programmer",
    date: "June 24, 2019",
    descreption:
      "Java is the core language for Android and many enterprise web applications. Begin your path toward becoming a professional developer by building a solid foundation in the Java language.",
    duration: " 21h 23m 39s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE-d1y1iFScrw/learning-public-crop_288_512/0/1582672211940?e=1648803600&v=beta&t=LPTW3bSzrNHW3jDPEqf45CrCwMHoSq4pOuExaoRWHtk",
    type: "LEARNING PATH",
    domain: "Advance Your Python Skills for Data Science",
    date: "June 14, 2019",
    descreption:
      "Quickly learn the general programming principles and methods for Python, and then begin applying that knowledge to using Python in data science-related development.",
    duration: " 16h 39m 24s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFLAheIrgZu5g/learning-public-crop_675_1200/0/1582672203259?e=1648803600&v=beta&t=d4GryUBpS1k76jJGKRTdPkgpdTSsn0xRRRNB1vxVBuM",
    type: "LEARNING PATH",
    domain: "Become a Front-End Web Developer",
    date: "June 28, 2019",
    descreption:
      "Get the skills to build engaging, interactive user experiences on the web as a front-end web developer. Learn everything you need to design and develop user-facing code, and discover how to bring concepts to life on the browser canvas by combining essential graphic design and coding principles.",
    duration: " 24h 36m 8s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH-P8v3VpIk2Q/learning-public-crop_675_1200/0/1582685398420?e=2147483647&v=beta&t=gGIDWv-OyjfQry6nOC4jKtVO1jJDwv2c-79uHotZLao",
    type: "LEARNING PATH",
    domain: "Become a Full-Stack Web Developer",
    date: "Apr 4, 2019",
    descreption:
      "Get the skills to work with both back-end and front-end technologies as a full-stack developer. You'll develop a solid foundation for working with servers and host configurations, performing database integrations, and creating dynamic, data-driven websites.",
    duration: " 29h 13m 48s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFmCnWl2OvovA/learning-public-crop_675_1200/0/1582672203928?e=1648803600&v=beta&t=A_tPB5tHupggPOhwQllGPXnqpmDLm6QV8Kg7YV8ZZpM",
    type: "LEARNING PATH",
    domain: "Become a User Experience Designer",
    date: "June 14, 2019",
    descreption:
      "A modern user experience designer understands modern design concepts. They also have the research and analysis skills to design effective, compelling digital experiences across different mobile platforms, the web, and the Internet of things. This path will help you build the foundation for a solid career in UX design.",
    duration: " 8h 30m 44s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQG8ZuM1yBxsYg/learning-public-crop_675_1200/0/1582672211209?e=1648803600&v=beta&t=zB9L04fbuf0YufpCanF6Brw7adP7__zF1_5TS_OVzWo",
    type: "LEARNING PATH",
    domain: "Become a Programmer: Foundations",
    date: "May 1, 2019",
    descreption:
      "Programmers are in higher demand today than ever before. Get the essential skills and tools to become a successful software engineer, and learn the fundamental concepts and practices that are critical to the task of coding—no matter what language you choose.",
    duration: " 25h 47m 48s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGIXpDPOSAuXA/learning-public-crop_288_512/0/1582672212060?e=1648803600&v=beta&t=FZMv9h7Bv4xJFLzMJV3x8evBrbG1STjmt4rNecfdWNI",
    type: "LEARNING PATH",
    domain: "Prepare for the Microsoft Azure Fundamentals (AZ-900) Exam",
    date: "sept 25, 2019",
    descreption:
      "Intended for those without a technical background, the Azure Fundamentals exam serves as an ideal launchpad for furthering your understanding of cloud computing as well as foundational Azure services. With these courses, you can build your expertise as you prepare for the AZ-900 certification exam.",
    duration: " 5h 59m 40s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHINJHXLa-Gnw/learning-public-crop_675_1200/0/1582672209994?e=1648803600&v=beta&t=5GzQhXNUeIqjRiSgCbKFOtV2f3dIVXV8-x5evIUx8I8",
    type: "LEARNING PATH",
    domain: "Become an Ethical Hacker",
    date: "Apr 19, 2019",
    descreption:
      "Ethical hacking is the ability to identify vulnerabilities in an organization's network or infrastructure, and then address the issues to prevent incidents or attacks. Learn how to perform penetration testing and gain the knowledge and skills you need for a career in information security.",
    duration: " 30h 9m 23s left",
  },
];

let creativeCarousel = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGsh7O8h13hxw/learning-public-crop_675_1200/0/1582672213498?e=1648638000&v=beta&t=nBnH0o1z8VdkCZy488BrvVuVrSNn3vlGcBbphADTNjI",
    type: "LEARNING PATH",
    domain: "Become a Graphic Designer",
    date: "Apr 4, 2019",
    descreption:
      "Graphic designers create visual concepts that inspire, inform, and transform. Use industry-leading tools to build innovative design projects and discover the skills needed to become an in-demand visual thinker and communicator.",
    duration: " 26h 53m 25s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGeE6jEv8b15w/learning-public-crop_675_1200/0/1582672199097?e=1648659600&v=beta&t=JaJJcspK8Nf-21szXVxGfqxYfKu4psozwIaHb6NMhm0",
    type: "LEARNING PATH",
    domain: "Become a Photographer",
    date: "Apr 4, 2019",
    descreption:
      "Whether you're a hobbyist, enthusiast, or an aspiring pro, discover the tools and best practices you need to take professional, high-quality photographs. This learning path teaches the basics of photography, including composition, lighting, and exposure.",
    duration: " 18h 30m 1s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFZ0pkx0OijlQ/learning-public-crop_675_1200/0/1582672198250?e=1648659600&v=beta&t=HmOQRj875TVqDO4RSdT0P2T6BYxF2VtFz-4ly5gY4SQ",
    type: "LEARNING PATH",
    domain: "Become a Web Designer",
    date: "July 13, 2019",
    descreption:
      "Today's web designer balances clear, concise design skills alongside a strong foundational background in the technology of the web. Our tutorials cover the skills you need to design rich, engaging websites and applications that look beautiful on both desktop and mobile devices.",
    duration: " 28h 47m 10s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGOLqud1AXI7A/learning-public-crop_675_1200/0/1582671698804?e=1648659600&v=beta&t=XAK99qEMwExUhVMD15bHozFfMek19VNHeA_8XKrq2NU",
    type: "LEARNING PATH",
    domain: "Become a Bookkeeper",
    date: "July 8, 2019",
    descreption:
      "Ready to begin a career in finance? Bookkeepers are essential to the success of small businesses. This path will help you build a strong foundation in accounting and small business finance as well as QuickBooks, and the best practices of bookkeeping.",
    duration: " 14h 26m left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEbC5o4lNfwng/learning-public-crop_675_1200/0/1582672211735?e=1648659600&v=beta&t=KoV_0Ctz26SboNf7ud5NHZXZmLygeuXaXPZjBbO9yR8",
    type: "LEARNING PATH",
    domain: "Become a Video Editor",
    date: "July 9, 2019",
    descreption:
      "Get the skills you need to become a professional video editor. Using today's best digital tools, you'll get a solid foundation in everything from story structure and editing techniques to video compression and color correction.",
    duration: " 22h 34m 26s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQF3KmP-J_mE2w/learning-public-crop_675_1200/0/1582672209688?e=1648659600&v=beta&t=3fyRETRZSOvXDDLEeLwmDTpOyJVo-xoRzo5mXCq-HfU",
    type: "LEARNING PATH",
    domain: "Become a Digital Illustrator",
    date: "Apr 4, 2019",
    descreption:
      "Bring your illustration talent into the digital realm and discover how to create art for advertising agencies, design studios, and the entertainment industry. In this path, you'll learn to create logos and illustrations using today's best design software for digital illustrators.",
    duration: " 35h 22m 4s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFLPkesLSTkGw/learning-public-crop_675_1200/0/1582672203636?e=1648659600&v=beta&t=B9zXJ2z3KSe6JMgoEuwk_W56svV9y2IOH7ldLIxvg_w",
    type: "LEARNING PATH",
    domain: "Stay Competitive Using Design Thinking",
    date: "Apr 4, 2019",
    descreption:
      "Design thinking involves strategies and systems that improve and refine the design process. It drives innovation across industries—from hospitals to oil companies, from non-profits to schools. Get ready to explore the basic tenets of design thinking and learn how to benefit from it.",
    duration: " 11h 38m 5s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE-Rq-C6WMcnA/learning-public-crop_675_1200/0/1582672198505?e=1648659600&v=beta&t=6frv5_IxQCF4CCskQcRXi4tSi4Mm_3po92UvcYq95wM",
    type: "LEARNING PATH",
    domain: "Improve Your Drawing Skills",
    date: "Apr 4, 2019",
    descreption:
      "Drawing is an essential skill for working in a creative role. This learning path demonstrates ways you can refine, enhance, and enrich what you illustrate. Explore additional sketching techniques, working with perspective, factoring for light, rendering shadows, and more.",
    duration: " 28h 53m 52s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFttkvHQHBDwQ/learning-public-crop_675_1200/0/1582672212575?e=1648659600&v=beta&t=BEYpOx7Hx6cufsRokmM4vQgH8WjfdGNXTQMsNzsxp9U",
    type: "LEARNING PATH",
    domain: "Become a Certified CAD Designer with SOLIDWORKS",
    date: "July 9, 2019",
    descreption:
      "Master the basics of SOLIDWORKS, the industry-leading CAD software. This path includes essential training, project-based courses, and certification prep that will help advance your manufacturing career.",
    duration: " 15h 38m 51s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQELrhVzn2lhFQ/learning-public-crop_675_1200/0/1582672205390?e=1648659600&v=beta&t=rMm9RIF-UoLIVXXNszhlkiza453RoRq9Ui4kr56JCCk",
    type: "LEARNING PATH",
    domain: "Become a Motion Graphics Artist",
    date: "Apr 4, 2019",
    descreption:
      "Take graphic design to the next level using motion. Learn how to use visual effects, animation, and cinematic techniques to bring designs to life. Discover how to develop innovative ideas for moving content and make products engaging and exciting as a motion graphics artist.",
    duration: " 20h 15m 58s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHQLIBu004KBg/learning-public-crop_675_1200/0/1582672202281?e=1648659600&v=beta&t=5xnM1hhrZcr9YQZ4LlCOszbEPJjsHNdgAqPcfX2T-ds",
    type: "LEARNING PATH",
    domain: "Play Piano and Keyboards",
    date: "July 9, 2019",
    descreption:
      "If you've ever wanted to pick up the piano or keyboard as an instrument, this is the path for you! You begin with the basics of keyboard-based instruments and then expand your knowledge with courses in jazz improvisation and songwriting techniques.",
    duration: " 15h 47m 52s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQG_c8YxuZFsbQ/learning-public-crop_675_1200/0/1582672206259?e=1648659600&v=beta&t=_ZT215bLhTZRfx9V6ONuZKwXjsB1wa6MmiQ0cmCsahg",
    type: "LEARNING PATH",
    domain: "Play the Guitar",
    date: "July 9, 2019",
    descreption:
      "If you've ever thought of picking up the guitar, this learning path can help get you started on the path to guitar mastery. Learn the basics of acoustic and electric guitar, then expand your musical knowledge by concentrating on specific musical styles and intermediate lessons to build skill and confidence.",
    duration: " 23h 59m 5s left",
  },
];

localStorage.setItem("bussCarousel", JSON.stringify(bussCarousel));
localStorage.setItem("creativeCarousel", JSON.stringify(creativeCarousel));
