import {
  PersonalInfo,
  Education,
  SkillCategory,
  Experience,
  Project,
  Achievement,
  CodingProfile,
  NavItem,
  SiteContent,
} from "@/types/portfolio";

// ─── Navigation ─────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

// ─── Personal Information ───────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Deeya Meena",
  logoInitial: "D",
  logoText: "Deeya",
  titles: [
    "Software Developer",
    "Full Stack Developer",
    "AI & Cloud Enthusiast",
    "ECE Student @ IIIT Bhopal",
  ],
  bio: "Driven B.Tech ECE undergraduate at IIIT Bhopal passionate about full-stack web applications, AI-powered tools, real-time messaging architectures, and cloud technology.",
  aboutLeft: {
    intro:
      "Hello! I'm Deeya Meena, a B.Tech Electronics & Communication Engineering student at Indian Institute of Information Technology, Bhopal (IIIT Bhopal). I specialize in software development, modern web stacks, and artificial intelligence.",
    objective:
      "My objective is to build intelligent, scalable, and high-performance software products by combining responsive user interfaces with resilient backend microservices.",
    passion:
      "I love engineering full-stack productivity platforms, exploring Google Cloud tools, participating in competitive coding contests, and contributing to open-source communities.",
    interests: [
      "Full-Stack Web Development (React, Next.js, Node.js)",
      "Real-Time APIs & AI Integration (SSE, Gmail API, Vertex AI)",
      "Data Structures & Algorithms in C++",
      "Cloud Infrastructure & DevOps (GKE, Cloud Run, BigQuery)",
      "Open Source Software & Hackathons",
    ],
  },
  resumeUrl: "#contact",
  location: "Bhopal, India",
  email: "deeyadiga2833@gmail.com",
  phone: "+91 9462933113",
  socials: {
    github: "https://github.com/prem-k-r/MaterialYouNewTab",
    linkedin: "https://www.linkedin.com/in/deeya-meena-933406292",
    leetcode: "https://github.com/prem-k-r/MaterialYouNewTab",
    codeforces: "https://www.codechef.com/users/dumb_player_24",
    email: "mailto:deeyadiga2833@gmail.com",
  },
};

// ─── All UI Text & Labels ───────────────────────────────────

export const siteContent: SiteContent = {
  hero: {
    greeting: "Hi, I'm",
    preTypewriter: "I am a",
    statusBadge: "ECE @ IIIT Bhopal | Open for Opportunities",
    resumeButtonLabel: "Contact Me",
    projectsButtonLabel: "View Projects",
    socialLabel: "Connect:",
  },
  illustration: {
    terminalTitle: "deeya_meena.ts",
    codeLines: [
      "import { Developer } from '@iiitbhopal/ece';",
      "// Building AI Agents & Real-time Web Apps",
      "export const profile = new Developer({",
      "  name: 'Deeya Meena',",
      "  college: 'IIIT Bhopal (ECE 2023-2027)',",
      "  stack: ['Next.js', 'React.js', 'Node.js', 'C++'],",
      "  achievements: ['ATF 2024 Top 4k', 'GSSoC 2024']",
      "});",
    ],
    statusLeft: "Ready for Roles",
    statusRight: "IIIT Bhopal",
    floatingBadges: [
      { label: "GSSoC '24 Contributor" },
      { label: "ATF '24 Fellow" },
    ],
  },
  navbar: {
    ctaLabel: "Get In Touch",
    ctaHref: "#contact",
    mobileMenuAriaLabel: "Toggle Navigation Menu",
  },
  footer: {
    bio: "Software Developer & B.Tech ECE Student at IIIT Bhopal specializing in full-stack web applications, real-time API integrations, and cloud technology.",
    builtWith: "Built with ❤ using Next.js 15 & Framer Motion",
    copyright: `© ${new Date().getFullYear()} Deeya Meena. All rights reserved.`,
    backToTop: "Back to top",
  },
  contact: {
    availabilityTitle: "Open for Software Engineering Opportunities",
    availabilitySubtitle: "Internships, full-time engineering roles & collaborative open-source projects",
    emailLabel: "Direct Email",
    phoneLabel: "Phone Number",
    locationLabel: "Institute / Location",
    formLabels: {
      name: "Your Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
    },
    formPlaceholders: {
      name: "John Doe",
      email: "john@example.com",
      subject: "Software Engineering Opportunity / Project Discussion",
      message: "Hi Deeya, I'd like to connect regarding...",
    },
    submitLabel: "Send Message",
    loadingLabel: "Sending Message...",
    successTitle: "Message Sent Successfully!",
    successMessage: "Thank you for reaching out! I will get back to you as soon as possible.",
    successButtonLabel: "Send Another Message",
  },
  about: {
    overviewTitle: "Academic & Personal Profile",
    objectiveTitle: "Career Objective",
    passionTitle: "My Engineering Passion",
    interestsTitle: "Core Technical Focus",
    educationTitle: "Education History",
    educationSubtitle: "Undergraduate degree and core coursework at IIIT Bhopal",
    courseworkLabel: "Relevant Coursework:",
  },
  skills: {
    allLabel: "All Skills",
  },
  projects: {
    featuredLabel: "Academic Project",
    openSourceLabel: "Featured Build",
    highlightsLabel: "Key Features & Architecture",
    sourceLabel: "Source Code",
    demoLabel: "Live Demo",
  },
  profiles: {
    ratingLabel: "Platform:",
    rankLabel: "Activity:",
    solvedLabel: "Contests:",
    solvedSuffix: "+ Solved",
    visitLabel: "View Profile",
  },
  sectionMeta: {
    about: {
      badge: "Background & University",
      title: "About",
      titleAccent: "Me",
      subtitle: "Electronics & Communication student at IIIT Bhopal with a passion for software development.",
    },
    skills: {
      badge: "Tech Stack & Capabilities",
      title: "Skills &",
      titleAccent: "Tools",
      subtitle: "Languages, web frameworks, Google Cloud skills, developer tools, and soft skills.",
    },
    experience: {
      badge: "Leadership & Community",
      title: "Leadership &",
      titleAccent: "Activities",
      subtitle: "Volunteering, hosting major university events, and competitive programming participation.",
    },
    projects: {
      badge: "Featured Build",
      title: "Academic",
      titleAccent: "Projects",
      subtitle: "Real-world web applications and AI-powered productivity platforms.",
    },
    achievements: {
      badge: "Fellowships & Recognition",
      title: "Key",
      titleAccent: "Achievements",
      subtitle: "National technology fellowships, open-source programs, and cloud skill badges.",
    },
    profiles: {
      badge: "Coding Footprint",
      title: "Coding &",
      titleAccent: "Profiles",
      subtitle: "Developer profiles on GitHub, LinkedIn, and CodeChef.",
    },
    contact: {
      badge: "Get In Touch",
      title: "Contact",
      titleAccent: "Me",
      subtitle: "Looking for an enthusiastic software developer or intern? Let's connect!",
    },
  },
};

// ─── Education ──────────────────────────────────────────────

export const educationList: Education[] = [
  {
    institution: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
    degree: "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
    duration: "Sep 2023 - Jun 2027",
    score: "Pursuing",
    scoreLabel: "Status",
    details: "Focusing on Software Development, Data Structures, and Communication Engineering.",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Digital Electronics",
      "Signals and Systems",
    ],
  },
];

// ─── Skills ─────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core programming and markup languages",
    skills: [
      { name: "C++", icon: "cpp", proficiency: 90, featured: true },
      { name: "C", icon: "c", proficiency: 85, featured: true },
      { name: "JavaScript", icon: "javascript", proficiency: 90, featured: true },
      { name: "HTML5", icon: "html", proficiency: 95, featured: true },
      { name: "CSS3", icon: "css", proficiency: 90, featured: true },
    ],
  },
  {
    category: "Technologies & Frameworks",
    description: "Frontend & backend web technologies",
    skills: [
      { name: "React.js", icon: "react", proficiency: 92, featured: true },
      { name: "Next.js", icon: "nextjs", proficiency: 90, featured: true },
      { name: "Node.js", icon: "nodejs", proficiency: 85, featured: true },
      { name: "Tailwind CSS", icon: "tailwind", proficiency: 92, featured: true },
      { name: "TypeScript", icon: "typescript", proficiency: 88, featured: true },
    ],
  },
  {
    category: "Cloud & Certifications",
    description: "Google Cloud Badges & Infrastructure",
    skills: [
      { name: "Google Cloud Platform", icon: "gcp", proficiency: 85, featured: true },
      { name: "Vertex AI", icon: "ai", proficiency: 80 },
      { name: "Google Kubernetes Engine (GKE)", icon: "kubernetes", proficiency: 80 },
      { name: "Cloud Run", icon: "cloud", proficiency: 85 },
      { name: "BigQuery", icon: "data", proficiency: 82 },
      { name: "Cloud Storage & IAM", icon: "shield", proficiency: 85 },
    ],
  },
  {
    category: "Developer Tools",
    description: "Version control, IDEs & developer workflow",
    skills: [
      { name: "Git", icon: "git", proficiency: 90, featured: true },
      { name: "GitHub", icon: "github", proficiency: 92, featured: true },
      { name: "VS Code", icon: "vscode", proficiency: 95 },
      { name: "Antigravity IDE", icon: "terminal", proficiency: 90 },
    ],
  },
  {
    category: "Soft Skills & Core Competencies",
    description: "Professional mindset & collaboration skills",
    skills: [
      { name: "Analytical Thinking", icon: "brain", proficiency: 95 },
      { name: "Team Collaboration", icon: "users", proficiency: 95 },
      { name: "Communication", icon: "message", proficiency: 90 },
      { name: "Quick Learner", icon: "zap", proficiency: 98 },
    ],
  },
];

// ─── Experience / Leadership ─────────────────────────────────

export const experienceList: Experience[] = [
  {
    company: "IIIT Bhopal",
    designation: "Volunteering & Student Participation",
    duration: "2023 - Present",
    location: "Bhopal, India",
    description:
      "Active participant and volunteer in college technical events, cultural festivals, and competitive coding contests.",
    bullets: [
      "Participated and aided in hosting 3 major cultural events at IIIT Bhopal, including Republic Day, Ethnic Day, and NIIMACK '24.",
      "Participated in 10+ competitive coding contests and events organized by college clubs.",
      "Collaborated with cross-functional student teams to organize campus activities and tech workshops.",
    ],
    technologies: ["C++", "Data Structures", "Event Management", "Team Collaboration"],
  },
];

// ─── Projects ───────────────────────────────────────────────

export const projectList: Project[] = [
  {
    id: "ai-personal-agent",
    title: "AI Personal Agent",
    description:
      "An AI-powered productivity assistant integrating Gmail and WhatsApp into a unified dashboard with real-time updates and AI-generated message summaries.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Gmail API",
      "Server-Sent Events",
    ],
    githubUrl: "https://github.com/prem-k-r/MaterialYouNewTab",
    liveUrl: "https://ai-personal-assistant-taupe.vercel.app",
    features: [
      "Built an AI-powered productivity assistant integrating Gmail and WhatsApp into a unified dashboard.",
      "Developed a responsive frontend using React, Next.js, Tailwind CSS, and TypeScript.",
      "Implemented Gmail API and WhatsApp integration with real-time updates using Server-Sent Events (SSE).",
      "Designed backend APIs for authentication, message synchronisation, and AI-generated summaries.",
      "Improved user productivity by consolidating notifications, emails, and conversations into a single intelligent interface.",
    ],
    metrics: [
      { label: "Integrations", value: "Gmail & WhatsApp" },
      { label: "Real-Time Updates", value: "SSE Protocol" },
    ],
    featured: true,
  },
];

// ─── Achievements ───────────────────────────────────────────

export const achievementList: Achievement[] = [
  {
    id: "ach-1",
    title: "AlgoUniversity Technology Fellowship (ATF) 2024",
    description:
      "Qualified Stage 1 among 20,000+ applicants nationwide, securing a place in the Top 4,000 candidates and advancing to Stage 2.",
    date: "2024",
    icon: "trophy",
    counterValue: 4000,
    counterSuffix: " Top Rank",
  },
  {
    id: "ach-2",
    title: "GirlScript Summer of Code (GSSoC) 2024",
    description:
      "Selected as an Open Source Contributor for the prestigious national open-source program, contributing to community repositories.",
    date: "2024",
    icon: "award",
    counterValue: 1,
    counterSuffix: " Contributor",
  },
  {
    id: "ach-3",
    title: "Google Cloud Skill Badges (Google Arcade 2026)",
    description:
      "Earned official cloud skill badges in BigQuery, Google Kubernetes Engine (GKE), Cloud Run, Vertex AI, IAM, Cloud Storage, and Networking.",
    date: "2026",
    icon: "file-text",
    counterValue: 7,
    counterSuffix: "+ Badges",
  },
  {
    id: "ach-4",
    title: "10+ Coding Contests Completed",
    description:
      "Active participant in competitive programming contests and coding hackathons organized by IIIT Bhopal clubs.",
    date: "2023 - Present",
    icon: "code",
    counterValue: 10,
    counterSuffix: "+ Contests",
  },
];

// ─── Coding Profiles ────────────────────────────────────────

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "@prem-k-r",
    rating: "Active Developer",
    ranking: "Open Source Contributor",
    solvedCount: 15,
    badge: "GSSoC '24",
    profileUrl: "https://github.com/prem-k-r/MaterialYouNewTab",
    color: "#2DBA4E",
    iconName: "github",
  },
  {
    platform: "LinkedIn",
    username: "Deeya Meena",
    rating: "Student @ IIIT Bhopal",
    ranking: "ECE Department",
    profileUrl: "https://www.linkedin.com/in/deeya-meena-933406292",
    color: "#0A66C2",
    iconName: "linkedin",
  },
  {
    platform: "CodeChef",
    username: "dumb_player_24",
    rating: "10+ Contests",
    ranking: "Competitive Programmer",
    solvedCount: 50,
    badge: "Contestant",
    profileUrl: "https://www.codechef.com/users/dumb_player_24",
    color: "#5B4638",
    iconName: "code",
  },
];
