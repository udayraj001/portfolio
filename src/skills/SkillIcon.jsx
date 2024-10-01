import React from "react";
import reactIcon from "../assets/icon-react.svg";
import expressIcon from "../assets/icon-express.svg";
import NodejsIcon from "../assets/icon-nodejs.svg";
import gitIcon from "../assets/icon-git.svg";
import javaScriptIcon from "../assets/javscript.svg";
import mongodbIcon from "../assets/icon-mongodb.svg";
import figmaIcon from "../assets/icon-figma.svg";
import postIcon from "../assets/icon-postgresql.svg";
import tailwindIcon from "../assets/icon-tailwindcss.svg";
import socketIcon from "../assets/icon-socket.svg";
import typescriptIcon from "../assets/icon-typescript.svg";
import javaIcon from "../assets/java.png";
import pythonIcon from "../assets/python.png";
import cppIcon from "../assets/cpp.png";
import awsIcon from "../assets/aws.png";
import githubIcon from "../assets/github.png";
import djangoIcon from "../assets/django.png";
import cIcon from "../assets/c.png";
import cockroachIcon from "../assets/cockroach.png";
import bootstrapIcon from "../assets/bootstrap.png";

const SkillIcon = () => {
  return (
    <div class="pt-10">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-3 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:max-w-[1440px] text-gray-500 font-semibold">
        <div className="flex flex-col items-center">
          <img src={reactIcon} alt="React Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">React.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={djangoIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Django</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={expressIcon} alt="Second Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={NodejsIcon} alt="Third Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={gitIcon} alt="Fourth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={javaScriptIcon}
            alt="Fifth Icon"
            className="w-auto h-auto"
          />
          <p className="mt-2 text-center">Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={mongodbIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={figmaIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={postIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={tailwindIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={socketIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Socket.io</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={typescriptIcon}
            alt="Fifth Icon"
            className="w-auto h-auto"
          />
          <p className="mt-2 text-center">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={javaIcon} alt="Fifth Icon" className="w-[74px] h-[66px]" />
          <p className="mt-2 text-center">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={pythonIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={cppIcon} alt="Fifth Icon" className="w-[74px] h-[66px]" />
          <p className="mt-2 text-center">C++</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={cIcon} alt="Fifth Icon" className="w-[74px] h-[66px]" />
          <p className="mt-2 text-center">C</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={awsIcon} alt="Fifth Icon" className="w-[74px] h-[66px]" />
          <p className="mt-2 text-center">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={githubIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Github</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={cockroachIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">CockroachDB</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={bootstrapIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
