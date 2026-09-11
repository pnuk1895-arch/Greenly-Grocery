import { useLocation, Routes, Route, useNavigate } from "react-router-dom"
import  HomePage  from './pages/HomePage/HomePage.jsx'
import  Login  from "./pages/LoginPage/LoginPage.jsx"
import  SignUp from "./pages/SignupPage/SignupPage.jsx"
import { Toaster } from "react-hot-toast"

export default function App()
{
  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  return( 
    <>
    <Toaster/>
      <Routes location={ backgroundLocation || location } >
        <Route path='/' element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      )}
    </>
  )
}

