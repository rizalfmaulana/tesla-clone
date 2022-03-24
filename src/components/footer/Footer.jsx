import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[60px] flex items-center text-xs text-[#5C5E62] justify-center px-6 ">
      <Link className="font-medium px-3" to="/">
        Tesla &copy; 2022
      </Link>
      <Link className="font-medium px-3" to="/">
        Privacy & Legal
      </Link>
      <Link className="font-medium px-3" to="/">
        Contact
      </Link>
      <Link className="font-medium px-3" to="/">
        Careers
      </Link>
      <Link className="font-medium px-3" to="/">
        News
      </Link>
      <Link className="font-medium px-3" to="/">
        Engage
      </Link>
      <Link className="font-medium px-3" to="/">
        Locations
      </Link>
    </div>
  );
};

export default Footer;
