import postgramImg from '../assets/postgram.png';
import aiLearningImg from '../assets/ai-learning.png';
import backendLedgerImg from '../assets/backend-ledger.png';
import kanbanImg from '../assets/kanban.png';
import imageEditorImg from '../assets/image-editor.png';
import snakeGameImg from '../assets/snake-game.png';

export const personalInfo = {
  name: "Harsha Vardhan Reshavena",
  role: "B.Tech 4th Year Student | Full Stack Developer | AI Enthusiast",
  email: "hreshavena@gmail.com",
  phone: "+91 7396149172",
  location: "Hyderabad, Telangana, IN",
  summary: "B.Tech 4th-year Computer Science student skilled in web development using React.js, JavaScript, Express, Node.js, and MongoDB. Strong understanding of Data Structures and Algorithms with hands-on project experience. Passionate about learning new technologies and building real-world applications.",
  socials: {
    github: "https://github.com/harsha5200-d",
    linkedin: "https://linkedin.com/in/harsha-vardhan-reshavena-0a4b13376/",
    leetcode: "https://leetcode.com/u/rharshavardhan205/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/hresha4yj1",
    hackerrank: "https://www.hackerrank.com/profile/hreshavena",
    codechef: "https://www.codechef.com/users/hreshavena2345"
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
    image: postgramImg
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
    image: aiLearningImg
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
    image: backendLedgerImg
  },
  {
    id: "kanban-board",
    title: "Kanban Board",
    description: "Drag-and-drop task management system for productivity tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Dynamic drag-and-drop interface for managing task lifecycle states",
      "Robust user workspace modeling and task assignment",
      "Automatic real-time workspace persistence via MongoDB",
      "Optimized rendering using functional React components"
    ],
    github: "https://github.com/harsha5200-d/kannban1",
    demo: "https://harsha5200-d.github.io/kannban1/",
    image: kanbanImg
  },
  {
    id: "image-editor",
    title: "Image Editor",
    description: "Browser-based image editor with filters and transformations.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time filter applications (brightness, contrast, saturation, blur, grayscale, sepia)",
      "Interactive image canvas cropping, resizing, and rotation transformations",
      "Dynamic file import and secure client-side download/export",
      "Clean vanilla JavaScript custom UI implementation"
    ],
    github: "https://github.com/harsha5200-d/Image_Editor",
    demo: "https://harsha5200-d.github.io/Image_Editor/",
    image: imageEditorImg
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Classic snake game with score tracking and smooth gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Classic grid-based collision mechanics and game loop controls",
      "Dynamic score tracking system using local storage",
      "Smooth control responsiveness using keyboard event handlers",
      "Clean visual interface design and responsive layouts"
    ],
    github: "https://github.com/harsha5200-d/SnakeGame1010",
    demo: "https://harsha5200-d.github.io/SnakeGame1010/",
    image: snakeGameImg
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
    description: "Awarded for successfully completing the HackerRank Python (Basic) certification challenge, testing core control flow, data types, and script building.",
    url: "https://www.hackerrank.com/certificates/a007ec0ab5e6"
  },
  {
    title: "Java Programming Certification",
    issuer: "CodeChef",
    description: "Achieved a certificate for demonstrating proficiency in Java programming fundamentals, OOP concepts, exception handling, and collections.",
    url: "https://www.codechef.com/certificates/preview/8c0a2af"
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    description: "Certified for writing relational database queries, subqueries, complex joins, aggregation, and structure definition.",
    url: "https://www.hackerrank.com/profile/hreshavena"
  },
  {
    title: "Python Bootcamp – 100 Days of Code",
    issuer: "Udemy",
    description: "Comprehensive development course covering object-oriented programming, file systems, API consumption, data analysis, web scraping, and app deployment.",
    url: "https://www.udemy.com/course/100-days-of-code/learn/lecture/21730030?start=0#overview"
  },
  {
    title: "Problem Solving in C",
    issuer: "CodeChef",
    description: "Demonstrated algorithms design, array manipulation, and memory management using C programming.",
    url: "https://www.codechef.com/users/hreshavena2345"
  }
];
