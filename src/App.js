import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import GlobalStyled from "./globalStyled/GlobalStyled"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  )
}

