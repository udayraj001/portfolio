import React from "react";
import Text from "./Text";
import Image from "./Image";

const Header = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto pl-12 md:px-32 flex justify-center pt-20 flex-col md:flex-row">
      <Image />

      <Text />
    </div>
  );
};

export default Header;
