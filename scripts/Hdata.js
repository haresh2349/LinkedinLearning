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
    url: "https://media-exp1.licdn.com/dms/image/C560DAQHUINJj0slRwA/learning-public-crop_675_1200/0/1590183709981?e=1648969200&v=beta&t=F1A8UJOcUYGycgs56QTbEu0XoauyBk82T0u2OPexsbs",
    type: "LEARNING PATH",
    domain: "Become a Digital Marketing Specialist",
    date: "May 1, 2019",
    descreption:
      "Use your analytical and tactical skills to help grow and develop new opportunities for businesses as a digital marketing specialist. From marketing plans and content strategy to SEO and analytics, this path guides you through the best practices and principles of digital marketing.",
    duration: " 19h 59m left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGjOIhc_dSnTQ/learning-public-crop_675_1200/0/1591384433527?e=2147483647&v=beta&t=G7Nm0izQc0D_zn31RamOJ6zW7EqfN4FLE8-adKKrhg8",
    type: "LEARNING PATH",
    domain: "Become a Project Manager",
    date: "July 15, 2019",
    descreption:
      "Project managers are catalysts for change. Learn how to manage projects from beginning to end using proven project management techniques. After completing this learning path, you'll have the skills and knowledge to manage simple projects as well as complex, enterprise-wide initiatives.",
    duration: " 11h 55m 33s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEMDv9pIwiN9Q/learning-public-crop_288_512/0/1582672207421?e=1648969200&v=beta&t=VmbLyixVFFJ_l4f35XAMAm_NoJ0CVkZnuQz1plIxoUo",
    type: "LEARNING PATH",
    domain: "Master Microsoft Excel",
    date: "Apr 4, 2019",
    descreption:
      "Employers around the world cite Microsoft Excel as one of the most sought-after skills for any new hire. This learning path helps you become an Excel power user—covering everything from functions and formatting to PivotTables and dashboards.",
    duration: " 25h 7m 11s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE6f0kX4soSCA/learning-public-crop_675_1200/0/1583859288006?e=1648893600&v=beta&t=R6PUsztRztYtPfw26rIztWwOtHMNcKX0EF8UNMRRlEs",
    type: "LEARNING PATH",
    domain: "Remote Working: Setting Yourself and Your Teams Up for Success",
    date: "May 10, 2020",
    descreption:
      "Optimize working remotely in this set of online courses—whether you’re new to remote work or not, and whether you’re leading a team or part of a team involving distributed team members. Discover how to be productive and stay connected when working from home or other remote environments.",
    duration: " 14h 34m 17s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQHtKNYfD5dUUQ/learning-public-crop_675_1200/0/1588781054645?e=1648969200&v=beta&t=MtlnU-V2k1ddVKXcxduh5fHl1Ue6SlHFQTmccmuSgtk",
    type: "LEARNING PATH",
    domain: "Become a Financial Analyst",
    date: "May 10, 2020",
    descreption:
      "A financial analyst evaluates current and historical economic and business data to identify trends that influence business decisions. Gain the skills that make a successful financial analyst, including understanding financial statements, working with economic data, and analytical analysis skills.",
    duration: " 17h 10m 25s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFRTOWwmB183g/learning-public-crop_675_1200/0/1582685402706?e=1648969200&v=beta&t=QDXUFDJk7Rqt1yeY4UVfYaWiyo9ND15catvRNsgm96g",
    type: "LEARNING PATH",
    domain: "Master In-Demand Professional Soft Skills",
    date: "July 8, 2019",
    descreption:
      "What does every hiring manager look for in an employee? Set yourself apart from the pack by getting the essential soft skills--abilities that help people interact effectively with others--that employers value most, from communication fundamentals and being a team player to advancing your critical thinking skills.",
    duration: " 9h 13m 49s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C510DAQE1OBUMka5FaA/learning-public-crop_675_1200/0/1585255734294?e=1648969200&v=beta&t=qoar6RjTj9fxMV3m0A8APOUhikUJoU76Ww0JuI00qUw",
    type: "LEARNING PATH",
    domain: "Finding a Job during Challenging Economic Times",
    date: "March 30, 2018",
    descreption:
      "Whether you've been laid off or had your hours reduced, learn strategies for finding a job during challenging economic times. Discover how to create a recovery plan, cultivate resilience, explore career options, update your resume, network virtually, and improve your job search and interview skills.",
    duration: " 11h 23m 44s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGI36lLhOqDCQ/learning-public-crop_675_1200/0/1582672201655?e=1648969200&v=beta&t=Nd9Yf3pOY6zQCnWkB-cMquXg1nEekkb0bteZPyXfK_w",
    type: "LEARNING PATH",
    domain: "Become a Manager",
    date: "July 8, 2019",
    descreption:
      "As a manager, success is predicated on your ability to achieve goals working with your team. The good news is that management is a skill that can be learned. This path is designed to provide you with the key considerations, skills and competencies to help you become and succeed as a manager.",
    duration: "9h 13m 49s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH6eDV0YjxuFA/learning-public-crop_675_1200/0/1582672212650?e=1648969200&v=beta&t=Lrbxs0ZhsybyLvjknEjkDn3A3fqnmVBwOX3UxO5oJ5k",
    type: "LEARNING PATH",
    domain: "Become a Digital Marketing Specialist",
    date: "May 1, 2019",
    descreption:
      "Use your analytical and tactical skills to help grow and develop new opportunities for businesses as a digital marketing specialist. From marketing plans and content strategy to SEO and analytics, this path guides you through the best practices and principles of digital marketing.",
    duration: " 19h 59m left",
  },
];

let techCarousel = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH9lfnAkEjynw/learning-public-crop_675_1200/0/1591384349423?e=2147483647&v=beta&t=LXSCK1Dq24y-hkVvzMXpYh7GQsjcOInJqzPIxAMgTgI",
    type: "LEARNING PATH",
    domain: "Become a Data Analyst",
    date: "May 20, 2020",
    descreption:
      "Data analysts examine information using data analysis tools and help their teams develop insights and business strategies. You’ll need skills in math, statistics, communications, and working with tools designed to do data analytics and data visualization. Explore this high-demand career.",
    duration: " 38h 24m 28s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEIMip0GxCS_A/learning-public-crop_675_1200/0/1602706004811?e=1648972800&v=beta&t=Jaslgm7iLxjQk_b5cPeSX7Rfh2N8kFTATd9GWc5Pqug",
    type: "LEARNING PATH",
    domain: "Advance Your Skills in Python",
    date: "Apr 4, 2019",
    descreption:
      "Now that you've learned the basics of Python programming, it's time to dive into the next steps to prepare for a career as a Python developer. This learning path takes you through the practical need of programmers, such as learning about design patterns, testing, and even interview preparation.",
    duration: " 14h 34m 42s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEmpu7qTqI_TA/learning-public-crop_675_1200/0/1591384497665?e=1648972800&v=beta&t=LJ5KYapGUeMMkK4SNY3C5805gUYVvy4XhCBIQigiRNY",
    type: "LEARNING PATH",
    domain: "Become a Software Developer",
    date: "May 12, 2022",
    descreption:
      "Get an introduction to the programming skills needed for a career as a software developer. This learning path provides a broad perspective on core technologies for web development, software development, and databases. It introduces common tools and the bigger picture of how development careers work.",
    duration: " 30h 26m 11s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFaMtqNK7v5tg/learning-public-crop_675_1200/0/1582672205551?e=1648972800&v=beta&t=L8gOmS7IUbPc4eTefU-ybG_2lPjiypaUJr8zLIEBk5A",
    type: "LEARNING PATH",
    domain: "Become a Data Scientist",
    date: "Apr 4, 2019",
    descreption:
      "Whether you're working in IT or simply have an interest in entering the exciting field, this learning path will support you in developing a career in data science. Learn about the fundamental stages of data science work, from Statistics and Systems Engineering to Data Mining and Machine Learning.",
    duration: " 20h 6m 9s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEXTlzXiLSoQg/learning-public-crop_675_1200/0/1582672203087?e=1648972800&v=beta&t=Kobj9HrF5AqXPGc6uPi-99mPFyMWd8r8xgab6AvqF9U",
    type: "LEARNING PATH",
    domain: "Become a Java Programmer",
    date: "June 24, 2019",
    descreption:
      "Java is the core language for Android and many enterprise web applications. Begin your path toward becoming a professional developer by building a solid foundation in the Java language.",
    duration: " 21h 23m 39s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE-d1y1iFScrw/learning-public-crop_288_512/0/1582672211940?e=1648972800&v=beta&t=duKLMbdLwyihtLJMu918jEZuMblFfWx0O-_p3V4RpHM",
    type: "LEARNING PATH",
    domain: "Advance Your Python Skills for Data Science",
    date: "June 14, 2019",
    descreption:
      "Quickly learn the general programming principles and methods for Python, and then begin applying that knowledge to using Python in data science-related development.",
    duration: " 16h 39m 24s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFLAheIrgZu5g/learning-public-crop_675_1200/0/1582672203259?e=2147483647&v=beta&t=R6LjTdHoVQRGM3KG8C7wnxMANfaWvkk1w9R0skbXdq4",
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
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFmCnWl2OvovA/learning-public-crop_675_1200/0/1582672203928?e=1648972800&v=beta&t=WddIvYWxZ_D4cU6rIMYUjh0TL2-KOW3bI3q2Rx7DakY",
    type: "LEARNING PATH",
    domain: "Become a User Experience Designer",
    date: "June 14, 2019",
    descreption:
      "A modern user experience designer understands modern design concepts. They also have the research and analysis skills to design effective, compelling digital experiences across different mobile platforms, the web, and the Internet of things. This path will help you build the foundation for a solid career in UX design.",
    duration: " 8h 30m 44s left",
  },
];

let creativeCarousel = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGsh7O8h13hxw/learning-public-crop_675_1200/0/1582672213498?e=1648980000&v=beta&t=7cSWLywVWBAQyJ1ptpOmFdqrqlRfbbatVMEJMWeaeqM",
    type: "LEARNING PATH",
    domain: "Become a Graphic Designer",
    date: "Apr 4, 2019",
    descreption:
      "Graphic designers create visual concepts that inspire, inform, and transform. Use industry-leading tools to build innovative design projects and discover the skills needed to become an in-demand visual thinker and communicator.",
    duration: " 26h 53m 25s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGeE6jEv8b15w/learning-public-crop_675_1200/0/1582672199097?e=1648980000&v=beta&t=shjnPU8WWJ_7lNXcGP9BmLHSAW0oJRhJyfqzBiygLTM",
    type: "LEARNING PATH",
    domain: "Become a Photographer",
    date: "Apr 4, 2019",
    descreption:
      "Whether you're a hobbyist, enthusiast, or an aspiring pro, discover the tools and best practices you need to take professional, high-quality photographs. This learning path teaches the basics of photography, including composition, lighting, and exposure.",
    duration: " 18h 30m 1s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFZ0pkx0OijlQ/learning-public-crop_675_1200/0/1582672198250?e=1648980000&v=beta&t=rVj_npAYQY5TbIzHwFtvBASXlxAWa5j84vaSEVo170U",
    type: "LEARNING PATH",
    domain: "Become a Web Designer",
    date: "July 13, 2019",
    descreption:
      "Today's web designer balances clear, concise design skills alongside a strong foundational background in the technology of the web. Our tutorials cover the skills you need to design rich, engaging websites and applications that look beautiful on both desktop and mobile devices.",
    duration: " 28h 47m 10s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGOLqud1AXI7A/learning-public-crop_675_1200/0/1582671698804?e=1648983600&v=beta&t=b-UswndI6G_7KPb8tUz_CmlnTezYpGwm5JezI69xfpk",
    type: "LEARNING PATH",
    domain: "Become a Bookkeeper",
    date: "July 8, 2019",
    descreption:
      "Ready to begin a career in finance? Bookkeepers are essential to the success of small businesses. This path will help you build a strong foundation in accounting and small business finance as well as QuickBooks, and the best practices of bookkeeping.",
    duration: " 14h 26m left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEbC5o4lNfwng/learning-public-crop_675_1200/0/1582672211735?e=2147483647&v=beta&t=w78-nDCLmp_SS7pfrtQg78k81-FwjDgwAbjhaqXQa_o",
    type: "LEARNING PATH",
    domain: "Become a Video Editor",
    date: "July 9, 2019",
    descreption:
      "Get the skills you need to become a professional video editor. Using today's best digital tools, you'll get a solid foundation in everything from story structure and editing techniques to video compression and color correction.",
    duration: " 22h 34m 26s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQF3KmP-J_mE2w/learning-public-crop_675_1200/0/1582672209688?e=2147483647&v=beta&t=oltAIdKz2Zg1zIo9A1riic4KN2vWJBIdhpTmyO-qATY",
    type: "LEARNING PATH",
    domain: "Become a Digital Illustrator",
    date: "Apr 4, 2019",
    descreption:
      "Bring your illustration talent into the digital realm and discover how to create art for advertising agencies, design studios, and the entertainment industry. In this path, you'll learn to create logos and illustrations using today's best design software for digital illustrators.",
    duration: " 35h 22m 4s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFLPkesLSTkGw/learning-public-crop_675_1200/0/1582672203636?e=1648983600&v=beta&t=gcV3cV4fEBDUyyJkcNI6R7nJ_AGgKHxddsQLiyp-2UA",
    type: "LEARNING PATH",
    domain: "Stay Competitive Using Design Thinking",
    date: "Apr 4, 2019",
    descreption:
      "Design thinking involves strategies and systems that improve and refine the design process. It drives innovation across industries—from hospitals to oil companies, from non-profits to schools. Get ready to explore the basic tenets of design thinking and learn how to benefit from it.",
    duration: " 11h 38m 5s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE-Rq-C6WMcnA/learning-public-crop_675_1200/0/1582672198505?e=2147483647&v=beta&t=PilwemgmqOlgLdMNmhgTIgElMaa6ZuJm83GI1QGz00g",
    type: "LEARNING PATH",
    domain: "Improve Your Drawing Skills",
    date: "Apr 4, 2019",
    descreption:
      "Drawing is an essential skill for working in a creative role. This learning path demonstrates ways you can refine, enhance, and enrich what you illustrate. Explore additional sketching techniques, working with perspective, factoring for light, rendering shadows, and more.",
    duration: " 28h 53m 52s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFttkvHQHBDwQ/learning-public-crop_675_1200/0/1582672212575?e=1648983600&v=beta&t=ofxaZARvvz2mNIQnqvSiQVLI4f4Ks0scVSAStuONXZY",
    type: "LEARNING PATH",
    domain: "Become a Certified CAD Designer with SOLIDWORKS",
    date: "July 9, 2019",
    descreption:
      "Master the basics of SOLIDWORKS, the industry-leading CAD software. This path includes essential training, project-based courses, and certification prep that will help advance your manufacturing career.",
    duration: " 15h 38m 51s left",
  },
];

localStorage.setItem("bussCarousel", JSON.stringify(bussCarousel));
localStorage.setItem("techCarousel", JSON.stringify(techCarousel));
localStorage.setItem("creativeCarousel", JSON.stringify(creativeCarousel));

let allCoursesData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1648987200&v=beta&t=_5aZY039EvOs51SXwo2GD8deBCrA-6FK376c4Bwed7c",
    type: "COURSE",
    title: "The Six Morning Habits of High Performers",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQEUTuB4edN85g/learning-public-crop_144_256/0/1599688438696?e=1648987200&v=beta&t=Gz_nJElBFG-LwkpVLjJhnLjAqXM_UR2_PgG6UbL-7xA",
    type: "COURSE",
    title: "Excel: Lookup Functions in Depth",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=2147483647&v=beta&t=jpduF_BDsS2wXLFyWacCuP169IkEC8UwTp5SwmULp_w",
    type: "COURSE",
    title: "After Effects 2020 New Features",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFCn7Wo7bm_ow/learning-public-crop_144_256/0/1578683904474?e=1648987200&v=beta&t=eTWLtk81ankimxxs5x5VWvCDXeuktMsEhDxbFwuk0I0",
    type: "COURSE",
    title: "Delivering an Authentic Elevator Pitch",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C510DAQG8FfAwdtdSSg/learning-public-crop_144_256/0/1573756534792?e=2147483647&v=beta&t=SPF-JPwAfyI_Dm548oBCc5nGs-ZYMfp9JMwHcHpbhTs",
    type: "COURSE",
    title: "Apple Watch Tips and Tricks",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHbCh-IbN-ngA/learning-public-crop_144_256/0/1567116230457?e=1648987200&v=beta&t=BarrONKVXWnyLd6fFCE9ndGOVIHXnOTHBKc0Y7mbhqA",
    type: "COURSE",
    title: "Electronics Foundations: Basic Circuits",
    viewers: "6,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1648987200&v=beta&t=rLq_RNoVc9ycoorbb6eHmAONw9wpRtgmIiGLEDVoptE",
    type: "COURSE",
    title: "Understanding the Impact of Deepfake Videos",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFU4LTXLPJaIA/learning-public-crop_144_256/0/1592866069779?e=1648987200&v=beta&t=34F9LJ2fn_5E3csalwQMCV963O51Ako8St3Q0vGjlcE",
    type: "COURSE",
    title: "Python Essential Training",
    viewers: "5,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHQIQJYDybHYA/learning-public-crop_144_256/0/1568067883418?e=1648987200&v=beta&t=78bKo4KgVwERY_an8qE-kY8IYMXKDreM__AfuMMpbiU",
    type: "COURSE",
    title: "Construction Management: Managing Risk",
    viewers: "5,102,985 viewers",
  },
];

let bussCourseData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1648987200&v=beta&t=_5aZY039EvOs51SXwo2GD8deBCrA-6FK376c4Bwed7c",
    type: "COURSE",
    title: "The Six Morning Habits of High Performers",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFCn7Wo7bm_ow/learning-public-crop_144_256/0/1578683904474?e=1648987200&v=beta&t=eTWLtk81ankimxxs5x5VWvCDXeuktMsEhDxbFwuk0I0",
    type: "COURSE",
    title: "Delivering an Authentic Elevator Pitch",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1648987200&v=beta&t=rLq_RNoVc9ycoorbb6eHmAONw9wpRtgmIiGLEDVoptE",
    type: "COURSE",
    title: "Understanding the Impact of Deepfake Videos",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGDyKYkqI0T4w/learning-public-crop_144_256/0/1568668819111?e=1648987200&v=beta&t=rFWJJ9xBg1vp-WcbM5ZVvTmNMLCu1dRvFm-s36vYecg",
    type: "COURSE",
    title: "Learning Personal Branding",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHyknNpgPirMA/learning-public-crop_144_256/0/1580838680039?e=1648987200&v=beta&t=Jb4JiDvxxNyybAi1eCM--yp4b7Z2b8-tZAYxIsuQX8Q",
    type: "COURSE",
    title: "Guy Kawasaki on Turning Life Wisdom into Business Success",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFemdVUP-TXdg/learning-public-crop_144_256/0/1567117865450?e=1648987200&v=beta&t=WQl2JFlmRCjR31KwLRx1GmV3S878843Ya1l7iyY0n14",
    type: "COURSE",
    title: "Career Advice from Some of the Biggest Names in Business",
    viewers: "2,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHQIQJYDybHYA/learning-public-crop_144_256/0/1568067883418?e=1648987200&v=beta&t=78bKo4KgVwERY_an8qE-kY8IYMXKDreM__AfuMMpbiU",
    type: "COURSE",
    title: "Construction Management: Managing Risk",
    viewers: "5,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1648987200&v=beta&t=rLq_RNoVc9ycoorbb6eHmAONw9wpRtgmIiGLEDVoptE",
    type: "COURSE",
    title: "Understanding the Impact of Deepfake Videos",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHbCh-IbN-ngA/learning-public-crop_144_256/0/1567116230457?e=1648987200&v=beta&t=BarrONKVXWnyLd6fFCE9ndGOVIHXnOTHBKc0Y7mbhqA",
    type: "COURSE",
    title: "Electronics Foundations: Basic Circuits",
    viewers: "6,102,985 viewers",
  },
];

let techCourseData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQEUTuB4edN85g/learning-public-crop_144_256/0/1599688438696?e=1648987200&v=beta&t=Gz_nJElBFG-LwkpVLjJhnLjAqXM_UR2_PgG6UbL-7xA",
    type: "COURSE",
    title: "Excel: Lookup Functions in Depth",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C510DAQG8FfAwdtdSSg/learning-public-crop_144_256/0/1573756534792?e=2147483647&v=beta&t=SPF-JPwAfyI_Dm548oBCc5nGs-ZYMfp9JMwHcHpbhTs",
    type: "COURSE",
    title: "Apple Watch Tips and Tricks",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFU4LTXLPJaIA/learning-public-crop_144_256/0/1592866069779?e=1648987200&v=beta&t=34F9LJ2fn_5E3csalwQMCV963O51Ako8St3Q0vGjlcE",
    type: "COURSE",
    title: "Python Essential Training",
    viewers: "5,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHtKscjddJ3Xg/learning-public-crop_144_256/0/1568066281564?e=1648987200&v=beta&t=fCKKNdz07nHecKLiFC6YhEBFi8DswlyHhmDGHn0MNNo",
    type: "COURSE",
    title: "Excel Data Visualization: Mastering 20+ Charts and Graphs",
    viewers: "57,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFfhs2EuPDcuA/learning-public-crop_144_256/0/1592866667823?e=1648987200&v=beta&t=C_APe7q6LozAjmKiQW9uNf0v7nFwC6YOEuaeTAT0PKs",
    type: "COURSE",
    title: "SQL Essential Training",
    viewers: "547,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQF6hpUZw33tHA/learning-public-crop_144_256/0/1647638602513?e=2147483647&v=beta&t=Mpq0YCtwkU_Lv26Cd-Lpaq3NSfuU9W0MeoA8gmNvbjQ",
    type: "COURSE",
    title: "Power BI Essential Training",
    viewers: "457,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFmv0LvXJFLMw/learning-public-crop_144_256/0/1568669324892?e=1648987200&v=beta&t=iWUAV-hnf-wlHq-xpIKBidWhSyRGeY5D8Is2bOaYYcs",
    type: "COURSE",
    title: "Excel 2013: Pivot Tables",
    viewers: "5,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE36TRRFU6eEw/learning-public-crop_144_256/0/1568665814956?e=1648987200&v=beta&t=RtmSD4CHSYN1KebYNCHtRNrL7-CR1oK0ELkHZdnMyEs",
    type: "COURSE",
    title: "Programming Foundations: Fundamentals",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQF2DX4_GzNtiw/learning-public-crop_144_256/0/1567115269108?e=1648987200&v=beta&t=b0h5NHlScWQjOKbK2GyEgKXpnV8hTotnPOjBf_ebdCg",
    type: "COURSE",
    title: "Programming Foundations: Object-Oriented Design",
    viewers: "547,985 viewers",
  },
];

let creativeCourseData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C510DAQG8FfAwdtdSSg/learning-public-crop_144_256/0/1573756534792?e=2147483647&v=beta&t=SPF-JPwAfyI_Dm548oBCc5nGs-ZYMfp9JMwHcHpbhTs",
    type: "COURSE",
    title: "Apple Watch Tips and Tricks",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQEUTuB4edN85g/learning-public-crop_144_256/0/1599688438696?e=1648987200&v=beta&t=Gz_nJElBFG-LwkpVLjJhnLjAqXM_UR2_PgG6UbL-7xA",
    type: "COURSE",
    title: "Excel: Lookup Functions in Depth",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFCn7Wo7bm_ow/learning-public-crop_144_256/0/1578683904474?e=1648987200&v=beta&t=eTWLtk81ankimxxs5x5VWvCDXeuktMsEhDxbFwuk0I0",
    type: "COURSE",
    title: "Delivering an Authentic Elevator Pitch",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1648987200&v=beta&t=_5aZY039EvOs51SXwo2GD8deBCrA-6FK376c4Bwed7c",
    type: "COURSE",
    title: "The Six Morning Habits of High Performers",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFrdsfDMqzeDg/learning-public-crop_144_256/0/1572553557977?e=2147483647&v=beta&t=jpduF_BDsS2wXLFyWacCuP169IkEC8UwTp5SwmULp_w",
    type: "COURSE",
    title: "After Effects 2020 New Features",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHbCh-IbN-ngA/learning-public-crop_144_256/0/1567116230457?e=1648987200&v=beta&t=BarrONKVXWnyLd6fFCE9ndGOVIHXnOTHBKc0Y7mbhqA",
    type: "COURSE",
    title: "Electronics Foundations: Basic Circuits",
    viewers: "6,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFU4LTXLPJaIA/learning-public-crop_144_256/0/1592866069779?e=1648987200&v=beta&t=34F9LJ2fn_5E3csalwQMCV963O51Ako8St3Q0vGjlcE",
    type: "COURSE",
    title: "Python Essential Training",
    viewers: "5,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGGAcW7mCmqAA/learning-public-crop_144_256/0/1597172745910?e=1648987200&v=beta&t=rLq_RNoVc9ycoorbb6eHmAONw9wpRtgmIiGLEDVoptE",
    type: "COURSE",
    title: "Understanding the Impact of Deepfake Videos",
    viewers: "4,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHQIQJYDybHYA/learning-public-crop_144_256/0/1568067883418?e=1648987200&v=beta&t=78bKo4KgVwERY_an8qE-kY8IYMXKDreM__AfuMMpbiU",
    type: "COURSE",
    title: "Construction Management: Managing Risk",
    viewers: "5,102,985 viewers",
  },
];

let tmCoursesData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1648987200&v=beta&t=_5aZY039EvOs51SXwo2GD8deBCrA-6FK376c4Bwed7c",
    type: "COURSE",
    title: "The Six Morning Habits of High Performers",
    viewers: "3,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQHxmOOZwI27OA/learning-public-crop_144_256/0/1574712363091?e=1648987200&v=beta&t=rpttGqyNksbMZ3JNr8tXqN1xZkDWRx4aqf5tdff9iQA",
    type: "COURSE",
    title: "Time Management: Working from Home",
    viewers: "1,029,531 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEKXjcXz7-0PA/learning-public-crop_144_256/0/1593539204093?e=1648987200&v=beta&t=0ABVzH-KO2pPkUyXXF-yl-ndnXqGIdkRZunSPyqk26A",
    type: "COURSE",
    title: "Organizing Your Remote Office for Maximum Productivity",
    viewers: "561,430 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGkF6GsOASfjg/learning-public-crop_144_256/0/1601593204358?e=1648987200&v=beta&t=T8WYqSDxmDMIEZpooO3Eiv6fQhPaeXdkYGZnihkoZV8",
    type: "COURSE",
    title:
      "How to Work Smarter, Not Harder: Save Time and Money and Increase Productivity",
    viewers: "526,311 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH5HCoJ9Bx2cw/learning-public-crop_144_256/0/1568669442593?e=2147483647&v=beta&t=WMtlfsJWKp9OddtC6d_9FlUr9xdrUvjwLrI6kV7YT6U",
    type: "COURSE",
    title: "Managing Your Time",
    viewers: "455,668 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFakfFwvqJYHg/learning-public-crop_144_256/0/1567631443373?e=1648987200&v=beta&t=uxkhJuRSNjS3ZJn746Wft9bnSQhz8C8MYWT5bfoQDag",
    type: "COURSE",
    title: "Time Management Tips",
    viewers: "439,035 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHhhIIr03eUtw/learning-public-crop_144_256/0/1568666412211?e=1648987200&v=beta&t=7QogjA_cW4n6DvtOF2dQV0el7y6RUaVCpFjN-MYq3xo",
    type: "COURSE",
    title: "Getting Things Done",
    viewers: "385,923 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQEWXovobHiZfw/learning-public-crop_144_256/0/1574444240356?e=1648987200&v=beta&t=udGgE8qxgTdJZCNxIC_jldf27ySBxYKQtDHvF8srA8E",
    type: "COURSE",
    title:
      "15 Secrets Successful People Know about Time Management (getAbstract Summary)",
    viewers: "526,311 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFwLkS79tMcEA/learning-public-crop_144_256/0/1567526919099?e=2147483647&v=beta&t=qo_zbs9zA5fvYBGxTLUyCfkkSKc7g6eRMjTWwasLbdo",
    type: "COURSE",
    title: "Managing Career Burnout",
    viewers: "309,879 viewers",
  },
];

let ssCoursesData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=2147483647&v=beta&t=Y6GzoSqeYQftg2uhoMZKemIJ0WK4GOLspQyqED6lVyw",
    type: "COURSE",
    title: "Excel Tips Weekly",
    viewers: "1,771,035 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1648897200&v=beta&t=W7dr4VADs4HcHQN1IR6EdQ7CdQUFvLANPynzzfu_y2s",
    type: "COURSE",
    title: "Excel: Advanced Formulas and Functions",
    viewers: "1,676,585 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFMO5vAS8F9mQ/learning-public-crop_144_256/0/1594667104594?e=1648897200&v=beta&t=GHTJlAH1Vm6gzj-jjmy_VQ_uYVLJ9dVYByHENE80xx8",
    type: "COURSE",
    title: "Excel Essential Training (Office 365/Microsoft 365)",
    viewers: "1,390,870 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHp7WlReeM5Pg/learning-public-crop_144_256/0/1568667546749?e=1648897200&v=beta&t=RtJStLgI0U31ivyUHT1pmslCcGfZQ1zelb-k_Mp_7Cc",
    type: "COURSE",
    title: "Excel: You Can Do This",
    viewers: "1,264,781 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQEUTuB4edN85g/learning-public-crop_144_256/0/1599688438696?e=1648879200&v=beta&t=tozzDRliXLCS38Gsg89diwXPF9VPjIcUMpkE812gcGM",
    type: "COURSE",
    title: "Excel: Lookup Functions in Depth",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE0WwgEYNrb8g/learning-public-crop_144_256/0/1568661624905?e=1648897200&v=beta&t=OLgfPeIqQquvLLe263h6GObZHyq2Eh_5GNmfTz8fJjE",
    type: "COURSE",
    title: "Excel 2016 Essential Training",
    viewers: "814,872 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560DAQH4lycjLIibMw/learning-public-crop_144_256/0/1627584100061?e=1648900800&v=beta&t=3hZSaJgD59nvH2ydxEmSQMggQoEoLHYLdrlnMDB_ssk",
    type: "COURSE",
    title: "Excel: VLOOKUP and XLOOKUP for Beginners",
    viewers: "1,102,985 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFGdlinA0bzqQ/learning-public-crop_144_256/0/1594667152909?e=1648900800&v=beta&t=NXu2lZ6dL07G_uZy1cHU_7PXxJXyTJFc5gd4OjdPdHQ",
    type: "COURSE",
    title: "Excel: Introduction to VBA",
    viewers: "672,872 viewers",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0DAQFGFyqT_KlBWA/learning-public-crop_144_256/0/1567196089758?e=1648904400&v=beta&t=DbvYDrNEWhZMOsvTB7d0HVz6FJ1LCqcoG3fGmgFuurk",
    type: "COURSE",
    title: "Excel 2016: Pivot Tables in Depth",
    viewers: "1,390,870 viewers",
  },
];

localStorage.setItem("allCoursesData", JSON.stringify(allCoursesData));
localStorage.setItem("bussCourseData", JSON.stringify(bussCourseData));
localStorage.setItem("techCourseData", JSON.stringify(techCourseData));
localStorage.setItem("creativeCourseData", JSON.stringify(creativeCourseData));
localStorage.setItem("tmCoursesData", JSON.stringify(tmCoursesData));
localStorage.setItem("ssCoursesData", JSON.stringify(ssCoursesData));
