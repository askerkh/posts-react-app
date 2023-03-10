import AppRouter from "./Components/AppRouter";
import { useState, useEffect } from "react";
import { AuthContext } from "./context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        burgerOpened,
        setBurgerOpened,
      }}
    >
      <div className="flex min-h-screen w-full max-w-7xl flex-col">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
