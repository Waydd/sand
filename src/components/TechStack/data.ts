import react from "../../assets/TechStackLogo/react.svg";
import python from "../../assets/TechStackLogo/python.svg";
import html from "../../assets/TechStackLogo/html.svg";
import typescript from "../../assets/TechStackLogo/typescript.svg";
import javascript from "../../assets/TechStackLogo/javascript.svg";
import redis from "../../assets/TechStackLogo/redis.svg";
import css from "../../assets/TechStackLogo/css.svg";
import nextjs from "../../assets/TechStackLogo/nextjs.svg";
import git from "../../assets/TechStackLogo/git.svg";
import kafka from "../../assets/TechStackLogo/kafka.svg";
import postgresql from "../../assets/TechStackLogo/postgresql.svg";
import rabbitmq from "../../assets/TechStackLogo/rabbitmq.svg";
import docker from "../../assets/TechStackLogo/docker.svg";

export interface TechStackData {
  id: number;
  logo: string;
  text: string;
}

export const Data: TechStackData[] = [
  {
    id: 1,
    logo: react,
    text: "React",
  },

  {
    id: 2,
    logo: python,
    text: "Python",
  },
  {
    id: 3,
    logo: html,
    text: "HTML",
  },
  {
    id: 4,
    logo: typescript,
    text: "TypeScript",
  },
  {
    id: 5,
    logo: javascript,
    text: "JavaScript",
  },
  {
    id: 6,
    logo: redis,
    text: "Redis",
  },
  {
    id: 7,
    logo: css,
    text: "CSS",
  },
  {
    id: 8,
    logo: nextjs,
    text: "Next.js",
  },
  {
    id: 9,
    logo: git,
    text: "Git",
  },
  {
    id: 10,
    logo: kafka,
    text: "Kafka",
  },
  {
    id: 11,
    logo: postgresql,
    text: "PostgreSQL",
  },
  {
    id: 12,
    logo: rabbitmq,
    text: "RabbitMQ",
  },
  {
    id: 13,
    logo: docker,
    text: "Docker",
  },
];
