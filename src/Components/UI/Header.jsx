import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import Button from "./Button";

const Header = () => {
  const { isAuth, setIsAuth, setBurgerOpened } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="flex h-max w-full items-center justify-between rounded border-2 border-gray-200 py-1 px-4 shadow-xl">
      <Link
        to="/posts"
        className="cursor-pointer select-none border-2 border-transparent text-3xl transition-all duration-200 active:border-b-2 active:border-b-green-400"
      >
        Posts <span className="text-sky-400">React-App</span>
      </Link>
      <nav className="flex items-center gap-4">
        {!isAuth ? (
          <Link
            to="login"
            className="flex h-12 w-max cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500"
          >
            Login
          </Link>
        ) : (
          <>
            <div className="hidden gap-4 md:flex">
              <Button onClick={logout}>Log out</Button>
              <Link
                to="/posts"
                className="flex h-12 w-max cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500"
              >
                Posts
              </Link>
              <Link
                to="/about"
                className="flex h-12 w-max cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500"
              >
                About
              </Link>
            </div>
            <div
              className="cursor-pointer md:hidden"
              onClick={() => setBurgerOpened(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
