import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiFillBell, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable website using <b> HTML</b>, <b>CSS</b>, <b>WordPress</b> and <b>Next.js</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, api using <b>SQL</b>, <b>Node.js, </b><b>Prisma, </b> <b>Strapi</b> & other popular frameworks",
  },
  {
    Icon: HiOutlinePhotograph,
    title: "Graphics Designing",
    about:
      "I can create attractive design content with <b>illustrater</b>, <b>photoshop</b>, <b>after effects</b>, <b>canva</b> etc.</b>",
  },
  {
    Icon: AiFillBell,
    title: "Digital Marketing",
    about: "I can handle your social media marketing with best strategy and support.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Best frameworks",
    about:
      "Best frameworks and library expertise. Build unique contents for your business.",
  },
  {
    Icon: RiComputerLine,
    title: "Total IT solution",
    about:
      "Get total IT solution for your business in affordable price.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "php",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "WordPress",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React Js/Next Js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "SQL/Prisma/Strapi",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap/jQuery",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "After Effects",
    level: "65",
  },
];

export const projects: IProject[] = [
{
    name: "Total IT Solutions",
    image_path: "/images/ad.png",

    category: ["practise"],
    description:
      "Website/Graphics Design/Multimedia/Marketing all in one place...",
    key_techs: [
      "Next",
      "WordPress",
      "Marketing",
      "Graphics",
      "IT",
    ],
  },
  { 
    name: "WordPress Website",
    description:
      "This website is also customizable and full theme customization service is also available.",
    image_path: "/images/lms.png",

    category: ["practise"],
    key_techs: ["WordPress", "Divi", "Stack"],
  },
  {
    name: "Next JS Website",
    image_path: "/images/nextjs.png",

    category: ["practise"],
    description:
      "A portfolio with next js.",
    key_techs: ["Next", "NextAuth", "prisma"],
  },

  {
    name: "Static Website",
    image_path: "/images/portfolio.png",

    category: ["practise"],
    description:
      "Static portfolio inspired by React.",
    key_techs: [
      "Static",
      "Bootstrap",
      "jQuery",
    ],
  },

  {
    name: "Graphics Design",
    image_path: "/images/mask.png",
    category: ["practise"],
    description:
      "Premium graphics designing with Illustrater, Figma, Photoshop etc.",
    key_techs: ["Illustrater", "Photoshop", "Canva", "Figma", "Premiere Pro"],
  },
  {
    name: "Digital Marketing",
    image_path: "/images/digital-markting.jpg",
    category: ["practise"],
    description:
      "Social Media marketing and SEO services are available.",
    key_techs: ["Pixels", "AHrefs", "Keywords", "Content"],
  },
];
