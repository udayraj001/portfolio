import React from "react";
import FirstProjectImage from "./First-p/FirstProjectImage";
import FirstProject from "./First-p/FirstProject";
import SecondProjectImage from "./Second-p/SecondProjectImage";
import SecondProject from "./Second-p/SecondProject";
const Work = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-10  ">
        <div className="items-center flex justify-center font-semibold">
          <h1 className="p-2 border border-2 rounded-xl bg-slate-200 w-[115px] h-[28px] justify-center items-center flex size-3 size-2 md:w-[200px] md:h-[50px] md:text-2xl rounded-full">
            Work
          </h1>
        </div>
      <div>
        <div className="md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12 ">
          <FirstProjectImage />
          <FirstProject />
        </div>
          <div className="md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12 ">
            <SecondProjectImage />
            <SecondProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
