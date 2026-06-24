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
    id: "ai-learning-platform",
    title: "AI-Powered Learning Platform",
    description: "Developed a full-stack AI study platform using React, Node.js, Express, MongoDB, and LLMs, enabling PDF-based question answering, concept explanation, document processing, and personalized learning support.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI / LLMs"],
    features: [
      "PDF-based question answering with vector embedding search",
      "Dynamic concept explanations with multiple difficulty levels",
      "Personalized learning suggestions based on user progress",
      "Secure document upload and chunk-based processing"
    ],
    github: "https://github.com/hreshavena/ai-learning-platform",
    demo: "https://ai-learning-demo.example.com"
  },
  {
    id: "interview-report-genai",
    title: "Interview Report GenAI",
    description: "Developed a full-stack AI interview assistant using React, Node.js, Express, MongoDB, and Google Gemini AI. Enabled resume parsing, interview plan generation, PDF export, user authentication, and cloud deployment using Vercel and Render.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    features: [
      "Automated resume parsing to match candidate profiles",
      "Dynamic interview plan and question generation using Gemini AI",
      "Downloadable and shareable PDF reports of candidate performance",
      "Full authentication flow (sign up, sign in, protected history)"
    ],
    github: "https://github.com/hreshavena/interview-report-genai",
    demo: "https://interview-report-genai.example.com"
  },
  {
    id: "backend-ledger-system",
    title: "Backend Ledger System",
    description: "Secure backend system built with Node.js, Express, and MongoDB featuring user authentication using JWT, bcrypt, and dotenv. It includes login/register APIs with protected routes and scalable architecture for ledger or transaction-based applications.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Dotenv"],
    features: [
      "JWT-based user authentication and route protection middleware",
      "Secure password hashing utilizing bcrypt with configurable salt rounds",
      "Scalable database architecture for ledger and transactions",
      "Comprehensive API documentation and unit-test configuration"
    ],
    github: "https://github.com/hreshavena/backend-ledger",
    demo: "https://backend-ledger-demo.example.com"
  },
  {
    id: "image-editor-web-app",
    title: "Image Editor Web Application",
    description: "Developed a client-side image editor using HTML5 Canvas and vanilla JavaScript, enabling real-time image filtering (brightness, contrast, saturation, blur, grayscale, sepia, etc.), preset effects, image reset, and export functionality.",
    tech: ["HTML5 Canvas", "CSS3", "JavaScript (ES6)"],
    features: [
      "High-performance real-time pixel editing using HTML5 Canvas context",
      "Rich adjustments: brightness, contrast, saturation, blur, sepia, grayscale",
      "One-click preset filter effects (vintage, cool, dramatic warmth)",
      "Secure local file save/export of the modified canvas image"
    ],
    github: "https://github.com/hreshavena/image-editor-js",
    demo: "https://image-editor-demo.example.com"
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
