import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
const projects = [
  {
    name: "Japanese grammar website, ",
    description:
      "This is a Japanese learning website aimed at English native speakers.",
    image: "/jp.png",
    github: "https://github.com/Qubit1984/jpstudy",
    link: "https://www.japanesegrammar.tokyo",
    skills: ["Next.js", "supabase", "contentlayer"],
  },
  {
    name: "AI voice chat, ",
    description:
      "A full-featured, AI voice chatbot built by Vercel，supabase，deepgram，asw polly.",
    image: "/aispeak.png",
    github: "https://github.com/Qubit1984/speak-with-ai",
    link: "https://ai.japanesegrammar.tokyo",
    skills: [
      "Next.js",
      "supabase",
      "zusland",
      "AWS polly",
      "openai",
      "deepgram",
    ],
  },
  {
    name: "Realtime Chat App",
    description: "Freechat is a app that built using the MERN stack.",
    image: "/freeapp.png",
    github: "https://github.com/Qubit1984/freechat-client",
    link: "http://chat.boliang.fun",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    name: "Weather App",
    description:
      "Weather App is a project that can display real-time weather of any city around the world through search.",
    image: "/weather.jpg",
    github: "https://github.com/Qubit1984/WeatherApp",
    link: "https://weather.boliang.fun",
    skills: ["Next.js"],
  },
  {
    name: "spotify clone",
    description: "clone for spotify that can play musics.",
    image: "/spotify.png",
    github: "https://github.com/Qubit1984/spotifyclone",
    link: "https://spotify.boliang.lol/",
    skills: ["Vue.js"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start ">
                      {project.skills.map((item, idx) => {
                        return (
                          <p
                            key={idx}
                            className="bg-gray-200 px-3 py-2 mr-2 mt-3 text-gray-500 rounded font-semibold"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
