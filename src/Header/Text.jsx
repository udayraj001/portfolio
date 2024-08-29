import React from "react";

const Text = () => {
  return (
    <div className='p-4 sm:p-6'>
      <div className='text-4xl font-bold'>Hi,I'm Udayraj</div>

      <div className="pt-4  ">
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
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
        <div className="pl-3">
        Pune, Maharashtra.
        </div>
      </div>

      <div className="flex"> 
        🔹
        <div className="pl-3">Available for new projects</div>
        
        </div>
      <div>

      </div>
    </div>
  );
};

export default Text;
