import React from "react";

const ButtonPrimary = ({ type, name, onClick }) => {
  return (
    <button
      className="bg-[#3D69E1] transition duration-700 ease-in-out text-white rounded-full py-2 font-medium text-sm hover:bg-[#3457b1]"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonPrimary;
