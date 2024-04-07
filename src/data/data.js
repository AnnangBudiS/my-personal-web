import projectV1 from "../assets/projectV1.png";
import projectV2 from "../assets/projectV2.png";

export const SIDEBAR_DATA = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "My Projects",
    link: "/my-projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const BOTTOM_NAV = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "My Projects",
    link: "/my-projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const SKILL_TREE = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Java Scripts",
  },
  {
    title: "Type Script",
  },
  {
    title: "ReactJs",
  },
  {
    title: "Next Js",
  },
];

export const MY_PROJECT = [
  {
    id: 1,
    title: "Responsive Website",
    description:
      "Responsive web portofolio with HTLM and tailwindcss, this project chalange from Harisenin botcamp",
    image: projectV1,
    link: "https://responsive-webv2.netlify.app/",
  },
  {
    id: 2,
    title: "React Ecommerce",
    description: "Build demo project with React + Vite, tailwindcss",
    image: projectV2,
    link: "https://react-ecommerce-weld-sigma.vercel.app/",
  },
];
