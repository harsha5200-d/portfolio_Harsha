export const personalInfo = {
  name: "Harsha Vardhan Reshavena",
  role: "B.Tech 4th Year Student | Full Stack Developer | AI Enthusiast",
  email: "hreshavena@gmail.com",
  phone: "+91 7396149172",
  location: "Hyderabad, Telangana, IN",
  summary: "B.Tech 4th-year Computer Science student skilled in web development using React.js, JavaScript, Express, Node.js, and MongoDB. Strong understanding of Data Structures and Algorithms with hands-on project experience. Passionate about learning new technologies and building real-world applications.",
  socials: {
    github: "https://github.com/hreshavena", // sample/placeholder links that can be replaced
    linkedin: "https://linkedin.com/in/hreshavena",
    leetcode: "https://leetcode.com/u/hreshavena",
    geeksforgeeks: "https://geeksforgeeks.org/user/hreshavena",
    hackerrank: "https://hackerrank.com/profile/hreshavena",
    codechef: "https://codechef.com/users/hreshavena"
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 70 },
      { name: "Django", level: 65 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "SQLAlchemy", level: 70 },
      { name: "Mongoose", level: 80 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code / IntelliJ", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Jupyter Notebook", level: 75 }
    ]
  }
];

export const projectsData = [
  {
    id: "postgram",
    title: "Postgram",
    description: "Full-stack social media platform with authentication, feed, and image sharing.",
    tech: ["Flask", "MongoDB", "JavaScript", "Cloudinary"],
    features: [
      "User authentication and secure session management",
      "Dynamic global activity feed with real-time post updates",
      "Robust image uploading integration using Cloudinary CDN",
      "Modern responsive user interface with interaction states"
    ],
    github: "https://github.com/harsha5200-d/postgram",
    demo: "https://postgram-lac-omega.vercel.app/feed-postgram",
    image: "./images/postgram.png"
  },
  {
    id: "studyq-ai-learning",
    title: "StudyQ AI Learning",
    description: "AI-powered platform for quizzes, notes, and personalized learning assistance.",
    tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    features: [
      "AI-powered dynamically generated quizzes and grading",
      "Centralized smart notes organizer with AI explanation assistants",
      "Interactive personalized learning path tracking",
      "Integrated Google Gemini LLM API client"
    ],
    github: "https://github.com/harsha5200-d/Ai-powered-learning",
    demo: "https://ai-powered-learning-tau.vercel.app/",
    image: "./images/ai-learning.png"
  },
  {
    id: "backend-ledger",
    title: "Backend Ledger",
    description: "Expense tracker with secure APIs and financial analytics system.",
    tech: ["Node.js", "Express", "MongoDB"],
    features: [
      "Secure expense tracking with custom ledger groups",
      "Robust financial analytics and metrics visualization",
      "Restricted routes guarded by JWT-based user authentication",
      "High performance MongoDB query design"
    ],
    github: "https://github.com/harsha5200-d/BACKEND-LEDGER",
    demo: "https://backend-ledger-94h2.onrender.com",
    image: "./images/backend-ledger.png"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    institution: "Sreyas Institute of Engineering and Technology",
    cgpa: "8.8",
    period: "08/2023 – Present",
    location: "Hyderabad, Telangana"
  },
  {
    degree: "Intermediate (MPC - Maths, Physics, Chemistry)",
    major: "MPC",
    institution: "Keshav Memorial Junior College",
    cgpa: "9.4",
    period: "2021 – 2022",
    location: "Hyderabad, Telangana"
  }
];

export const certificationsData = [
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    description: "Awarded for successfully completing the HackerRank Python (Basic) certification challenge, testing core control flow, data types, and script building."
  },
  {
    title: "Java Programming Certification",
    issuer: "CodeChef",
    description: "Achieved a certificate for demonstrating proficiency in Java programming fundamentals, OOP concepts, exception handling, and collections."
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    description: "Certified for writing relational database queries, subqueries, complex joins, aggregation, and structure definition."
  },
  {
    title: "Python Bootcamp – 100 Days of Code",
    issuer: "Udemy",
    description: "Comprehensive development course covering object-oriented programming, file systems, API consumption, data analysis, web scraping, and app deployment."
  },
  {
    title: "Problem Solving in C",
    issuer: "CodeChef",
    description: "Demonstrated algorithms design, array manipulation, and memory management using C programming."
  }
];
