import { Link } from "react-router-dom";

const Header = () => {
  return (<div className="w-full h-max flex justify-between items-center py-1">
    <h1 className="text-3xl">Posts <span className="text-sky-400">React-App</span></h1>
    <nav className="flex items-center gap-4">
      <Link to="/posts"
        className="px-4 py-2 w-max h-12 bg-green-400 transition-all border-2 border-green-400 cursor-pointer text-xl shadow-xl rounded text-white flex justify-center items-center"
      >
        Posts
      </Link>
      <Link to="/about"
        className="px-4 py-2 w-max h-12 bg-green-400 transition-all border-2 border-green-400 cursor-pointer text-xl shadow-xl rounded text-white flex justify-center items-center"
      >
        About
      </Link>
    </nav>
  </div>)
}

export default Header;
