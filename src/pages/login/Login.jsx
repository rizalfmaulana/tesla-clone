import { Language, Password } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import ButtonSecondary from "../../components/button/ButtonSecondary";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between px-9 py-4">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            className="object-contain w-[90px] mr-[100px] flex-1"
            alt="tesla logo"
          />
        </Link>
        <div className="flex items-center gap-1 cursor-pointer py-1 px-3 rounded-full hover:bg-[#8080801f]">
          <Language />
          <span className="font-medium">en-US</span>
        </div>
      </div>
      <div className="flex flex-col max-w-[330px] m-auto">
        <h1 className="font-medium text-[34px] pt-2">Sign In</h1>
        <form className="flex flex-col mt-7">
          <label
            htmlFor="email"
            className="text-[#5c5d61] text-base font-medium pl-5"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#F5F5F5] mb-8 px-4 py-2 mt-2 transition duration-150 ease-in-out rounded-full border-[1px] border-[#f5f5f5] text-[#393c41] focus:outline-none focus:ring-[1px] focus:ring-[#d6d6d6]"
          />
          <label
            htmlFor="password"
            className="text-[#5c5d61] text-base font-medium pl-5"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#F5F5F5] mb-8 px-4 py-2 mt-2 transition duration-150 ease-in-out rounded-full border-[1px] border-[#f5f5f5] text-[#393c41] focus:outline-none focus:ring-[1px] focus:ring-[#d6d6d6]"
          />
          <ButtonPrimary type="submit" name="SIGN IN" onClick={signIn} />
        </form>
        <div className="m-auto gap-2 flex mt-7">
          <Link className="text-xs underline " to="/">
            Forgot email?
          </Link>
          <span className="text-xs">|</span>
          <Link className="text-xs underline " to="/">
            {" "}
            Forgot password{" "}
          </Link>
        </div>
        <div className="flex justify-between mb-7 items-center mt-7">
          <hr className="w-5/12 h-0 border-[1px]" />{" "}
          <span className="font-medium text-sm">OR</span>{" "}
          <hr className="w-5/12 h-0 border-[1px]" />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="CREATE ACCOUNT" />
        </Link>
        <div className=" flex items-center text-sm text-[#5C5E62] justify-evenly mt-9 ">
          <Link to="/">Tesla &copy; 2022</Link>
          <Link to="/">Privacy & Legal</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
