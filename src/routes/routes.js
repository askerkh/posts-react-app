import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: 'posts', component: Posts, index: true },
  { path: 'about', component: About, index: false },
  { path: 'posts/:id', component: PostIdPage, index: false },
  { path: '*', component: Error, index: false }
]

export const publicRoutes = [
  { path: 'login', component: Login, index: false },
  { path: '*', component: Login, index: false },
]
