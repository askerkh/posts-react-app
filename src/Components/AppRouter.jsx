import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../routes/routes";
import Loader from "./UI/Loader/Loader";
import Header from "./UI/Header";
import Burger from "./UI/Burger";

const AppRouter = () => {
  const { isAuth, isLoading, burgerOpened } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {burgerOpened ? (
        <Burger />
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/">
              {isAuth
                ? privateRoutes.map((el, index) => (
                    <Route
                      path={el.path}
                      key={index}
                      index={el.index}
                      element={<el.component />}
                    />
                  ))
                : publicRoutes.map((el, index) => (
                    <Route
                      path={el.path}
                      key={index}
                      index={el.index}
                      element={<el.component />}
                    />
                  ))}
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default AppRouter;
