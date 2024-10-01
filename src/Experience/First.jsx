// import React from "react";
// import codeclause from '../assets/codeclaus_logo.jpg'

// const First = () => {
//   return (
//     <div className="pt-3">
//       <div className="items-center flex justify-center font-semibold">
//         <h1 className="p-2 border border-2 rounded-xl bg-slate-200 w-[115px] h-[28px] justify-center items-center flex size-3 size-2 md:w-[200px] md:h-[50px] md:text-2xl rounded-full">
//           Experience
//         </h1>
//       </div>

//       <div className="text-lg font-semibold text-gray-600 pt-4 ">
//         <p>Here is quick summary of my most </p>
//         <p className="flex items-center justify-center ">recent experiences :</p>
//       </div>

//       <div className="pt-8 ">
//   <div className="border border-3  p-6 rounded shadow-xl max-w-[1440px] h-[200px] md:scale-150 md:mt-10">

//     <div className='w-[100px] h-[100px]'>
//       <img src={codeclause} alt="CodeClause Logo"/>
//     </div>

//     <div className="pt-2">
//       <h1>Jun 2024 - Aug 2024</h1>
//     </div>

//     <div className="text-2xl">
//       <h3>Web Developer Intern</h3>
//     </div>

//   </div>
// </div>

// </div>
//   );
// };

// export default First;

import React from "react";
import companyLogo from "../assets/codeclaus_logo.jpg";
const First = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-white to-gray-100 p-6 rounded-lg shadow-md  justify-between items-start md:flex md:flex-row">
      {/* Left Section - Company Logo */}
      <div className="flex items-center space-x-4">
        <img src={companyLogo} alt="Upwork Logo" className="w-16" />
      </div>

      {/* Middle Section - Job Title and Description */}
      <div className="flex-1 space-y-2 md:flex md:items-center md:justify-center md:flex-col">
        <h2 className="text-xl font-semibold text-gray-900">
          Web Developer Intern
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Full-Stack Development</li>
          <li>API Integration</li>
          <li>Collaborative Projects</li>
          <li>Technical Learning</li>
        </ul>
      </div>

      {/* Right Section - Dates */}
      <div className="text-gray-500 text-sm pt-3">
        <span>Jun 2024 - Aug 2024</span>
      </div>
    </div>
  );
};

export default First;
