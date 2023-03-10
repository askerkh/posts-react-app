import { Link } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../../context";
import { useContext } from "react";

const Burger = () => {
  const { setIsAuth, burgerOpened, setBurgerOpened } = useContext(AuthContext);

  const rootStyles = [
    "px-4 py-2 fixed top-0 left-0 right-0 bottom-0 bg-white w-screen h-screen flex flex-col gap-4 justify-center items-center",
  ];

  if (!burgerOpened) {
    rootStyles.push("hidden");
  }

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div
      onClick={() => setBurgerOpened(false)}
      className={rootStyles.join(" ")}
    >
      <Button className="absolute right-2 top-2 flex h-16 w-16 cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-4xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-full w-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Link
        to="/posts"
        className="flex h-12 w-full cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-4xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500"
      >
        Posts
      </Link>
      <Link
        to="/about"
        className="flex h-12 w-full cursor-pointer items-center justify-center rounded border-2 border-green-400 bg-green-400 px-4 py-2 text-4xl text-white shadow-xl transition-all duration-300 hover:rounded-xl hover:border-blue-500 hover:bg-blue-500"
      >
        About
      </Link>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
};

export default Burger;
