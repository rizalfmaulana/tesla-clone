const ButtonSecondary = ({ name, type, onClick }) => {
  return (
    <button
      className="border-[3px] transition duration-700 ease-in-out border-black w-full text-black rounded-full py-2 font-medium text-sm hover:bg-black hover:text-white"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonSecondary;
