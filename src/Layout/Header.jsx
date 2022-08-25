import { faSearch, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Header() {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <div className="flex justify-center items-center px-5 w-full">
      <div className="h-[130px] flex justify-between items-center w-full max-w-[1500px] ">
        {/* overlay -------------------------------- */}
        <div
          className={`lg:hidden bg-black opacity-50 ${
            openHeader ? "block" : "hidden"
          } fixed w-screen h-screen z-0 left-0 top-0`}
          onClick={() => setOpenHeader(false)}
        ></div>{" "}
        {/* overlay - ends -------------------------------- */}
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-[40px]">Entrada</h1>
          <div
            className={`transition-all z-30 bg-white flex justify-start max-w-[400px] w-screen lg:w-auto py-32 px-10 lg:p-0 lg:justify-center items-start h-screen lg:h-auto lg:items-center ml-[60px] gap-4 lg:static fixed top-0 ${
              openHeader ? "right-0" : "-right-[600px]"
            } lg:flex-row flex-col`}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="block lg:hidden absolute top-5 right-10 text-2xl"
              onClick={() => setOpenHeader(false)}
            />
            <a className="font-medium text-xl no-underline text-black" href="#">
              Destination
            </a>
            <p className="text-xl">.</p>
            <a className="font-medium text-xl no-underline text-black" href="#">
              Bookings
            </a>
            <p className="text-xl">.</p>
            <a className="font-medium text-xl no-underline text-black" href="#">
              Activities
            </a>{" "}
            <div className="flex justify-center flex-col items-start mt-5 gap-6 lg:hidden">
              <a
                className="font-normal text-xl no-underline text-black"
                href="#"
              >
                Log in
              </a>
              <button className="rounded-full bg-lightGreen py-2 px-4 cursor-pointer text-lg text-white font-normal">
                Sign up
              </button>
            </div>
            <FontAwesomeIcon
              className="ml-3 text-xl hidden lg:block"
              icon={faSearch}
            />
          </div>
        </div>{" "}
        <FontAwesomeIcon
          icon={faBars}
          className="block lg:hidden  text-2xl"
          onClick={() => setOpenHeader(true)}
        />
        <div className="lg:flex hidden justify-center items-center gap-3">
          <a className="font-normal text-xl no-underline text-black" href="#">
            Log in
          </a>
          <button className="rounded-full bg-lightGreen py-2 px-4 cursor-pointer text-lg text-white font-normal">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
