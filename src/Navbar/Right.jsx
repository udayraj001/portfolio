// import React, { useEffect, useState } from "react";

// const Right = () => {
//   const [show, setShow] = useState(false);
//   const [light, setLight] = useState("day");

//   const changeTheme = (theme) => {
//     localStorage.setItem("theme", theme);
//     document.body.classList = [theme];
//     if (light === "night") {
//       setLight("day");
//     } else {
//       setLight("night");
//     }
//   };

//   useEffect(() => {
//     const selectedTheme = localStorage.getItem("theme");
//     if (selectedTheme) {
//       document.body.classList.add(selectedTheme);
//     } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//       document.body.classList.add("night");
//     } else {
//       document.body.classList.add("day");
//     }
//   }, []);

//   return (
//     <div className="">
//       <div className="w-auto hidden sm:flex ">
//         <a
//           href="#about"
//           className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
//         >
//           About
//         </a>
//         <a
//           href="#testimonials"
//           className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
//         >
//           Testimonials
//         </a>
//         <a
//           href="#work"
//           className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
//         >
//           Work
//         </a>
//         <a
//           href="#skills"
//           className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
//         >
//           Skills
//         </a>
//         <a
//           href="#contact"
//           className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
//         >
//           Contact
//         </a>

//         <div
//           className="h-9 w-9 aspect-square flex justify-center items-center mr-4"
//           onClick={() => {
//             changeTheme(light=="day"?"night":"day")
//           }}
//         >
//           {light == "day" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-7"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
//               />
//             </svg>
//           )}
//         </div>

//         <a className="text-white hover:text-gray-300 px-5 border  rounded-xl bg-gray-800 p-1 font-semibold">
//           Download CV
//         </a>
//       </div>

//       <div
//         onClick={() => setShow((prev) => !prev)}
//         className="sm:hidden relative "
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-8 text-gray-800 mr-4 bold"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//         {show && (
//           <div className="absolute flex flex-col bg-slate-700/70 p-2 rounded-lg top-8 right-2 ">
//             <a href="#about" className="text-white hover:text-gray-300">
//               About
//             </a>
//             <a href="#testimonials" className="text-white hover:text-gray-300">
//               Testimonials
//             </a>
//             <a href="#work" className="text-white hover:text-gray-300">
//               Work
//             </a>
//             <a href="#skills" className="text-white hover:text-gray-300">
//               Skills
//             </a>
//             <a href="#contact" className="text-white hover:text-gray-300">
//               Contact
//             </a>
//             <a href="#download" className="text-white hover:text-gray-300">
//               Download CV
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Right;

import React, { useEffect, useState } from "react";

const Right = () => {
  const [show, setShow] = useState(false);
  const [light, setLight] = useState("day");

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
    if (light === "night") {
      setLight("day");
    } else {
      setLight("night");
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      document.body.classList.add("night");
    } else {
      document.body.classList.add("day");
    }
  }, []);

  return (
    <div className="">
      <div className="w-auto hidden sm:flex md:pr-16">
        <a
          href="#about"
          className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
        >
          Skills
        </a>
        <a
          href="#work"
          className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
        >
          Work
        </a>
        <a
          href="#experience"
          className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
        >
          Contact
        </a>

        <div
          className="h-9 w-9 aspect-square flex justify-center items-center mr-4"
          onClick={() => {
            changeTheme(light == "day" ? "night" : "day");
          }}
        >
          {light == "day" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </div>

        <a
          className="text-white hover:text-gray-300 px-5 border rounded-xl bg-gray-800 p-1 font-semibold"
          href="https://drive.google.com/drive/folders/1GLFGK45zfXvmDqmMW_b0Tz7nNytNDeQt?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>

      <div
        onClick={() => setShow((prev) => !prev)}
        className="sm:hidden relative "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-gray-800 mr-4 bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {show && (
          <div className="absolute flex flex-col bg-slate-700/70 p-2 rounded-lg top-8 right-2 z-20 gap-2 font-semibold">
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#skills" className="text-white hover:text-gray-300">
              Skills
            </a>
            <a href="#work" className="text-white hover:text-gray-300">
              Work
            </a>
            <a href="#experience" className="text-white hover:text-gray-300">
              Experience
            </a>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
            <a
              className="text-white hover:text-gray-300 w-28 flex items-center justify-center border rounded-2xl bg-gray-800 font-semibold"
              href="https://drive.google.com/drive/folders/1GLFGK45zfXvmDqmMW_b0Tz7nNytNDeQt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Right;
