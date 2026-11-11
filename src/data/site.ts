/**
 * Site-wide settings: the single place for name, URL and profile links.
 * Canonical URL of the site (custom domain served by Firebase Hosting).
 */
export const SITE = {
  url: "https://trucupey.dev",
  name: "Juan Sebastián Flórez Jiménez",
  shortName: "Juan Flórez",
  email: "jsflorezj@gmail.com",
  links: {
    github: "https://github.com/juancitotrucupey",
    gitlab: "https://gitlab.com/trucupey",
    linkedin: "https://www.linkedin.com/in/juan-florez-mad-scientist/",
    x: "https://twitter.com/mongosorongo",
  },
} as const;
