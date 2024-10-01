import React from "react";

const Text = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="text-4xl font-bold">Hi,I'm Udayraj</div>

      <div className="pt-4  tracking-wide text-gray-800">
        I am an enthusiastic Full Stack Developer with a rich expertise in
        <spn className="font-semibold">
          {" "}
          React.js,Node.js, Django, REST framework,{" "}
        </spn>{" "}
        and <span className="font-semibold">Java</span>. My passion lies in
        crafting extraordinary digital experiences that are not only fast and
        accessible but also visually stunning and responsive.
      </div>
      <div className="pt-4 tracking-wide text-gray-800">
        I also have a strong foundation in
        <span className="font-semibold">Python</span> libraries,
        <span className="font-semibold"> AI/ML</span> , and <span className="font-semibold">DBMS</span>  (Database
        Management Systems), allowing me to build intelligent applications that
        effectively manage and analyze data. This diverse skill set empowers me
        to tackle complex challenges and create solutions that resonate with
        users.
      </div>

      <div className="flex pt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <div className="pl-3 font-semibold text-gray-600">Pune, Maharashtra.</div>
      </div>

      <div className="flex">
        🔹
        <div className="pl-3 font-semibold text-gray-600">Available for new projects</div>
      </div>
      <div></div>
    </div>
  );
};

export default Text;
