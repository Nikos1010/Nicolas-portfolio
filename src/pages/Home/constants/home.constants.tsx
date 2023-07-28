import {
  BiLogoAngular,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoNodejs,
  BiLogoReact,
} from "react-icons/bi";
import { ModelTag } from "../../../models";
import fundation from "../../../assets/img-fundacion.png";

export const TAGSHOME: ModelTag[] = [
  {
    key: 1,
    name: "GITHUB",
    icon: <BiLogoGithub />,
    link: "https://github.com/Nikos1010",
  },
  {
    key: 2,
    name: "EMAIL",
    icon: <BiLogoGmail />,
    link: "mailto:nimoba101@gmail.com",
  },
  {
    key: 3,
    name: "LINKEDIN",
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/in/nicolas-montealegre/",
  },
];

export const TAGSABOUT: ModelTag[] = [
  { key: 4, name: "React", icon: <BiLogoReact /> },
  { key: 5, name: "Angular", icon: <BiLogoAngular /> },
  { key: 6, name: "NodeJS", icon: <BiLogoNodejs /> },
];

export const PROJECTS = [
  {
    key: 1,
    name: "Fundación Cultipva-T",
    github: "",
    demo: "https://prueba-01-eta.vercel.app/",
    img: fundation,
  },
];
