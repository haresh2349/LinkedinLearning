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

let carouselData = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH9lfnAkEjynw/learning-public-crop_675_1200/0/1591384349423?e=1648641600&v=beta&t=GmxoSCtNxCilxn_zuwZZlGgvZghKsYQ606Qtto3zFwg",
    type: "LEARNING PATH",
    domain: "Become a Data Analyst",
    date: "May 20, 2020",
    descreption:
      "Data analysts examine information using data analysis tools and help their teams develop insights and business strategies. You’ll need skills in math, statistics, communications, and working with tools designed to do data analytics and data visualization. Explore this high-demand career.",
    duration: " 38h 24m 28s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEIMip0GxCS_A/learning-public-crop_675_1200/0/1602706004811?e=1648641600&v=beta&t=7tRPjKPFI8e2b7OvmtJoOYMQJphZWnuV97gqVJo4MTw",
    type: "LEARNING PATH",
    domain: "Advance Your Skills in Python",
    date: "Apr 4, 2019",
    descreption:
      "Now that you've learned the basics of Python programming, it's time to dive into the next steps to prepare for a career as a Python developer. This learning path takes you through the practical need of programmers, such as learning about design patterns, testing, and even interview preparation.",
    duration: " 14h 34m 42s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEmpu7qTqI_TA/learning-public-crop_675_1200/0/1591384497665?e=1648641600&v=beta&t=GzyjB04oyZ4G6WK_dNtHLwM8meuYmzpAZQVOaGDbzEE",
    type: "LEARNING PATH",
    domain: "Become a Software Developer",
    date: "May 12, 2022",
    descreption:
      "Get an introduction to the programming skills needed for a career as a software developer. This learning path provides a broad perspective on core technologies for web development, software development, and databases. It introduces common tools and the bigger picture of how development careers work.",
    duration: " 30h 26m 11s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFaMtqNK7v5tg/learning-public-crop_675_1200/0/1582672205551?e=1648641600&v=beta&t=Dw8UI4qTxuuJJGWK83L7Iaazom7NFCSijDQW4KFT3MI",
    type: "LEARNING PATH",
    domain: "Become a Data Scientist",
    date: "Apr 4, 2019",
    descreption:
      "Whether you're working in IT or simply have an interest in entering the exciting field, this learning path will support you in developing a career in data science. Learn about the fundamental stages of data science work, from Statistics and Systems Engineering to Data Mining and Machine Learning.",
    duration: " 20h 6m 9s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQEXTlzXiLSoQg/learning-public-crop_675_1200/0/1582672203087?e=1648641600&v=beta&t=2hD6QsWN2jb4JBEoArzndiiL2E6CjARp4lWWnGUyRDM",
    type: "LEARNING PATH",
    domain: "Become a Java Programmer",
    date: "June 24, 2019",
    descreption:
      "Java is the core language for Android and many enterprise web applications. Begin your path toward becoming a professional developer by building a solid foundation in the Java language.",
    duration: " 21h 23m 39s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQE-d1y1iFScrw/learning-public-crop_288_512/0/1582672211940?e=1648641600&v=beta&t=UqK-6XcFufjov_P-9KD3ohX3WStT6uMgN08Ni-avUBE",
    type: "LEARNING PATH",
    domain: "Advance Your Python Skills for Data Science",
    date: "June 14, 2019",
    descreption:
      "Quickly learn the general programming principles and methods for Python, and then begin applying that knowledge to using Python in data science-related development.",
    duration: " 16h 39m 24s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFLAheIrgZu5g/learning-public-crop_675_1200/0/1582672203259?e=1648641600&v=beta&t=QzzgwKQ0Ow2R4CsbaXdqPxCvjDI3FAEuFQAyAebAU0Y",
    type: "LEARNING PATH",
    domain: "Become a Front-End Web Developer",
    date: "June 28, 2019",
    descreption:
      "Get the skills to build engaging, interactive user experiences on the web as a front-end web developer. Learn everything you need to design and develop user-facing code, and discover how to bring concepts to life on the browser canvas by combining essential graphic design and coding principles.",
    duration: " 24h 36m 8s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQH-P8v3VpIk2Q/learning-public-crop_675_1200/0/1582685398420?e=1648641600&v=beta&t=YGAIShj-G3L4v_mw2gc39p0cCfyd4zZ5nA1JpC_u2uY",
    type: "LEARNING PATH",
    domain: "Become a Full-Stack Web Developer",
    date: "Apr 4, 2019",
    descreption:
      "Get the skills to work with both back-end and front-end technologies as a full-stack developer. You'll develop a solid foundation for working with servers and host configurations, performing database integrations, and creating dynamic, data-driven websites.",
    duration: " 29h 13m 48s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQFmCnWl2OvovA/learning-public-crop_675_1200/0/1582672203928?e=1648641600&v=beta&t=yqDZiKSlLmLxiUEaUJWFzkm3TWayiYdwIcpCiJcv0Tw",
    type: "LEARNING PATH",
    domain: "Become a User Experience Designer",
    date: "June 14, 2019",
    descreption:
      "A modern user experience designer understands modern design concepts. They also have the research and analysis skills to design effective, compelling digital experiences across different mobile platforms, the web, and the Internet of things. This path will help you build the foundation for a solid career in UX design.",
    duration: " 8h 30m 44s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQG8ZuM1yBxsYg/learning-public-crop_675_1200/0/1582672211209?e=1648641600&v=beta&t=tc_V1VtHHMxYnta6lDvOzLoGTaG82RB73mla6w_K7ls",
    type: "LEARNING PATH",
    domain: "Become a Programmer: Foundations",
    date: "May 1, 2019",
    descreption:
      "Programmers are in higher demand today than ever before. Get the essential skills and tools to become a successful software engineer, and learn the fundamental concepts and practices that are critical to the task of coding—no matter what language you choose.",
    duration: " 25h 47m 48s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQGIXpDPOSAuXA/learning-public-crop_288_512/0/1582672212060?e=1648641600&v=beta&t=Y5LZ1Ytchz_UEGR3oKBCMXqO5AHw8an-srW93qng_jU",
    type: "LEARNING PATH",
    domain: "Prepare for the Microsoft Azure Fundamentals (AZ-900) Exam",
    date: "sept 25, 2019",
    descreption:
      "Intended for those without a technical background, the Azure Fundamentals exam serves as an ideal launchpad for furthering your understanding of cloud computing as well as foundational Azure services. With these courses, you can build your expertise as you prepare for the AZ-900 certification exam.",
    duration: " 5h 59m 40s left",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E0DAQHINJHXLa-Gnw/learning-public-crop_675_1200/0/1582672209994?e=1648641600&v=beta&t=GqkQB_5XlxfKhEWTnmNzITkjdoPAXSfbczWYl-uJIIQ",
    type: "LEARNING PATH",
    domain: "Become an Ethical Hacker",
    date: "Apr 19, 2019",
    descreption:
      "Ethical hacking is the ability to identify vulnerabilities in an organization's network or infrastructure, and then address the issues to prevent incidents or attacks. Learn how to perform penetration testing and gain the knowledge and skills you need for a career in information security.",
    duration: " 30h 9m 23s left",
  },
];
