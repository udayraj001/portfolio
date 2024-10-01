import React from "react";
import second from "../../assets/second.png";
const SecondProject = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-gray-100 p-8 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8 ">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={second}
          alt="Fiskil product"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-black tracking-wider">
          AnimalX{" "}
          <span className="text-sm text-gray-700">
            {"{"}Full Stack{"}"}
          </span>
        </h2>
        <p className="text-gray-600 text-sm tracking-wide">
          AnimalX is a subscription-based platform designed for managing pet
          vaccination records and connecting pet owners. Built with React and
          Express.js, the platform ensures secure data storage and retrieval,
          allowing users to easily track vaccination schedules. With a
          user-friendly interface, AnimalX simplifies pet care for owners while
          promoting responsible pet health management.{" "}
        </p>

        {/* Link Icon */}
        <div>
          <a
            href="https://animal-x.vercel.app/homepage"
            className="inline-flex items-center text-blue-800 text-lg hover:underline"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
            AnimalX-PetCare
          </a>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Express Js",
            "Node Js",
            "MongoDB",
            "Vercel",
            "TailwindCSS",
            "Figma",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondProject;
