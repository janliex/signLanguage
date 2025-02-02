import React from "react";
import { useNavigate } from "react-router-dom";
import { ImHome, ImFilm } from "react-icons/im";
import { MdAccessibilityNew } from "react-icons/md";
import { SiHandshake } from "react-icons/si";
const NavComponents = ({ needIcon }) => {
  // console.log("needIcon", needIcon);
  const go = useNavigate();
  return (
    <header className="bg-[#20639E] sticky top-0 z-50 font-bold text-2xl px-[1rem] py-[1rem] hover:drop-shadow-xl text-white ">
      <div className="flex flex-col items-center justify-center max-w-full h-[4.5rem] md:flex md:flex-row md:justify-between md:max-w-[1022px] md:mx-[auto]">
        {" "}
        <div className="cursor-pointer">
          <span className="flex"
            onClick={() => {
              go("/");
            }}
          >
            {" "}
            <SiHandshake/> AI手語助學網站
          </span>
        </div>{" "}
        <div className="flex w-[300px] justify-evenly mt-2 md:my-0 cursor-pointer ">
          {" "}
          {needIcon && (
            <>
              {" "}
              <ImHome
                // className=" hover:drop-shadow-md "
                onClick={() => {
                  go("/");
                }}
              />
              <ImFilm
                className=" hover:drop-shadow-md"
                onClick={() => {
                  go("/learning");
                }}
              />
              <MdAccessibilityNew
                className=" hover:drop-shadow-md"
                onClick={() => {
                  go("/practice");
                }}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavComponents;
