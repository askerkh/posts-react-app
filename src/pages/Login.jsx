import Button from "../Components/UI/Button";
import Input from "../Components/UI/Input";
import { AuthContext } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const login = (e) => {
    e.preventDefault;
    setIsAuth(true);
    router("/posts");
    localStorage.setItem("auth", "true");
  };

  return (
    <div className="mt-2 flex h-max w-96 flex-col items-center gap-4 self-center justify-self-center rounded border-2 border-gray-200 py-2 px-4 shadow-xl">
      <h1 className="text-2xl">Login Page</h1>
      <form className="flex w-full flex-col gap-4" onSubmit={login}>
        <Input placeholder="Login" />
        <Input placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
