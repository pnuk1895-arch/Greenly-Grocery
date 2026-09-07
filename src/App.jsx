import { BrowserRouter , Routes, Route } from "react-router-dom"
import  HomePage  from './pages/HomePage/HomePage.jsx'
import './App.css'
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx"

export default function App()
{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

