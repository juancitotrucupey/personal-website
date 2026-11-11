/**
 * Site-wide settings: the single place for name, URL and profile links.
 * TODO: replace `url` with the real domain once it is registered on Namecheap.
 */
export const SITE = {
  url: "https://example.com",
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
