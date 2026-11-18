export const portfolioSections = [
  { id: "about", number: "01", label: "About" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "hackathons", number: "03", label: "Hackathons" },
  { id: "projects", number: "04", label: "Projects" },
] as const;

export type PortfolioSectionId = (typeof portfolioSections)[number]["id"];

export const experiences = [
  { company: "PayPal", role: "Role to be added", date: "Dates to be added", technologies: "Technologies to be added" },
  { company: "Kalshi", role: "Role to be added", date: "Dates to be added", technologies: "Technologies to be added" },
  { company: "Duke University", role: "Role to be added", date: "Dates to be added", technologies: "Technologies to be added" },
] as const;

export const hackathonPlaceholders = ["Hackathon entry 01", "Hackathon entry 02"] as const;

export const projectPlaceholders = ["Project entry 01", "Project entry 02"] as const;
