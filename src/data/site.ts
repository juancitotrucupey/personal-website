/**
 * Site-wide settings: the single place for name, URL and profile links.
 * TODO: switch `url` to the custom domain once it is connected in Firebase Hosting.
 */
export const SITE = {
  url: "https://personal-website-juan-florez.web.app",
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
