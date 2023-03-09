import { Route, Routes } from "react-router-dom"
import Posts from "./pages/Posts"
import About from "./pages/About"
import Header from "./Components/UI/Header"

const App = () => {
  return (
    <div className="max-w-7xl realtive w-full min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
