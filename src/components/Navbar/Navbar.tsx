import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8">
      <Link
        to={"/"}
        className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-white bg-clip-text text-transparent"
      >
        {"<{"} <span className="bi-cup-hot-fill mx-1"></span>
        {"}>"}
      </Link>

      <div className="flex gap-x-10">
        <Link
          to={"/v1"}
          className="font-bold text-zinc-400 hover:text-white transition-colors"
        >
          v1
        </Link>
        <Link
          to={"/v1"}
          className="font-bold text-zinc-400 hover:text-white transition-colors"
        >
          v2
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
