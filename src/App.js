import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Questions from "./pages/Questions/Questions.jsx"
import GlobalStyled from "./globalStyled/GlobalStyled"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  )
}

