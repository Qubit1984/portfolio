import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Vue" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Tailwind CSS" },
  { skill: "MongoDB" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Linux" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <p>
              {""}
              Hi, my name is Zhang Boliang and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Frontend engineer
              based in Hubei,China.
            </p>
            <br />
            <p>
              I graduated from Huazhong University of Science and Technology in
              2018 with a BS degree in Physics. After that, I pursued a doctoral
              degree in Condensed Matter Physics at the same university.
              However, I have recently transitioned to become a programmer.
            </p>
            <br />
            <p>
              I realized that my true passion lies in programming. I started
              learning and I found myself drawn to the challenges and
              problem-solving opportunities that programming offers. I am always
              seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/about-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:top-40 md:mt-4 md:ml-20 md:block md:relative md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
