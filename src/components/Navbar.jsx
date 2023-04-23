import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

import logo from "../images/Logo_Cryptoverse.png";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer text-white ${classProps}`}>{title}</li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Link className={"text-white"} to="/">
          <img
            src={logo}
            alt="cryptoverseWeb logo"
            className={"w-48 cursor-pointer"}
          />
        </Link>
      </div>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul
          className={
            "navbar-text text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-white-600 hover:text-blue-800 visited:text-white-600"
          }
        >
          {[
            <Link className={"text-white"} to="/cryptocurrencies">
              Cryptocurrencies
            </Link>,
            <Link className={"text-white"} to="/news">
              News
            </Link>,
            <Link className={"text-white"} to="/wallet">
              Wallet
            </Link>,

            <Link className={"text-white"} to={"/forum"}>
              Forum
            </Link>,
            <Link className={"text-white"} to={"/Feedback"}>
              Feedback
            </Link>,
          ].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
          <div />
        </ul>
      </nav>

      <div className={"flex relative"}>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className={"hidden text-white md:hidden sm:hidden cursor-pointer"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className={"text-white md:hidden cursor-pointer"}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className={
              "z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            }
          >
            <li className={"text-xl w-full my-2"}>
              <AiOutlineClose
                className={"bg-gray-800 m-5 text-3xl"}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {[
              <Link className={"text-white"} to="/">
                Home
              </Link>,
              <Link className={"text-white"} to="/cryptocurrencies">
                Cryptocurrencies
              </Link>,
              <Link className={"text-white"} to="/news">
                News
              </Link>,
              <Link className={"text-white"} to={"/feedback"}>
                Feedback
              </Link>,
              <Link className={"text-white"} to={"/forum"}>
                Forum
              </Link>,
            ]}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
