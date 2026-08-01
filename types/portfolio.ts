export interface PersonalInfo {
  name: string;
  logoInitial: string;
  logoText: string;
  titles: string[];
  bio: string;
  aboutLeft: {
    intro: string;
    objective: string;
    passion: string;
    interests: string[];
  };
  resumeUrl: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    codeforces: string;
    email: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  scoreLabel: string;
  details?: string;
  coursework: string[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency?: number;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  designation: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  counterValue?: number;
  counterSuffix?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  rating?: string;
  ranking?: string;
  solvedCount?: number;
  badge?: string;
  profileUrl: string;
  color: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionMeta {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

export interface HeroContent {
  greeting: string;
  preTypewriter: string;
  statusBadge: string;
  resumeButtonLabel: string;
  projectsButtonLabel: string;
  socialLabel: string;
}

export interface IllustrationContent {
  terminalTitle: string;
  codeLines: string[];
  statusLeft: string;
  statusRight: string;
  floatingBadges: { label: string }[];
}

export interface NavbarContent {
  ctaLabel: string;
  ctaHref: string;
  mobileMenuAriaLabel: string;
}

export interface FooterContent {
  bio: string;
  builtWith: string;
  copyright: string;
  backToTop: string;
}

export interface ContactContent {
  availabilityTitle: string;
  availabilitySubtitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  formLabels: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  submitLabel: string;
  loadingLabel: string;
  successTitle: string;
  successMessage: string;
  successButtonLabel: string;
}

export interface AboutContent {
  overviewTitle: string;
  objectiveTitle: string;
  passionTitle: string;
  interestsTitle: string;
  educationTitle: string;
  educationSubtitle: string;
  courseworkLabel: string;
}

export interface SkillsContent {
  allLabel: string;
}

export interface ExperienceContent {
  // empty for now — all text comes from section meta + data items
}

export interface ProjectsContent {
  featuredLabel: string;
  openSourceLabel: string;
  highlightsLabel: string;
  sourceLabel: string;
  demoLabel: string;
}

export interface AchievementsContent {
  // empty — text from items
}

export interface ProfilesContent {
  ratingLabel: string;
  rankLabel: string;
  solvedLabel: string;
  solvedSuffix: string;
  visitLabel: string;
}

export interface SiteContent {
  hero: HeroContent;
  illustration: IllustrationContent;
  navbar: NavbarContent;
  footer: FooterContent;
  contact: ContactContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  profiles: ProfilesContent;
  sectionMeta: {
    about: SectionMeta;
    skills: SectionMeta;
    experience: SectionMeta;
    projects: SectionMeta;
    achievements: SectionMeta;
    profiles: SectionMeta;
    contact: SectionMeta;
  };
}
