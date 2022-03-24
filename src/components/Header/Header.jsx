import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const data = [
    { id: 1, title: "Existing Inventory" },
    { id: 2, title: "Used Inventory" },
    { id: 3, title: "Trade-In" },
    { id: 4, title: "Test Drive" },
    { id: 5, title: "Cybertruck" },
    { id: 6, title: "Roadster" },
    { id: 7, title: "Semi" },
    { id: 8, title: "Charging" },
    { id: 9, title: "Powerwall" },
    { id: 10, title: "commercial Energy" },
    { id: 11, title: "Utilities" },
    { id: 12, title: "Energy" },
    { id: 13, title: "Find Us" },
    { id: 14, title: "Support" },
    { id: 15, title: "Investor Relation" },
  ];
  return (
    <>
      <div className="min-h-[60px] flex items-center justify-between px-[50px] z-10 fixed top-0 right-0 left-0">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            className="object-contain w-[90px] mr-[100px] flex-1"
            alt="tesla logo"
          />
        </Link>
        <div className="flex items-center justify-center text-[#393C41] ">
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Model S
          </Link>
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Model 3
          </Link>
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Model X
          </Link>
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Model Y
          </Link>
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Solar Roof
          </Link>
          <Link
            className="font-medium px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-gray-200/50"
            to="/"
          >
            Solar Panels
          </Link>
        </div>
        <div className="flex items-center font-medium ">
          <Link
            className="px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-[#e4e4e462]"
            to="/"
          >
            Shop
          </Link>
          <Link
            className="px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-[#e4e4e462]"
            to="/login"
          >
            Account
          </Link>
          <Link
            className="px-3 py-[4px] transition ease-in-out duration-500 rounded-xl hover:bg-[#e4e4e462]"
            to="/"
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </Link>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen === true ? "translate-x-0" : "translate-x-full"
        } fixed top-0 transition ease-in-out duration-500 right-0 bottom-0 bg-white overflow-y-scroll w-[310px] z-50 px-[30px] py-6`}
      >
        <div className="flex justify-end mr-[25px] mb-7">
          <Close
            className="cursor-pointer rounded-full "
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        {data.map((item) => (
          <li
            key={item.id}
            className="py-1 mb-2 px-2 transition ease-in-out duration-500 rounded-xl hover:bg-gray-100"
          >
            <Link to="/" className="text-sm text-[#46494E]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
