
import {
  X,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Headphones,
  CircleHelp,
} from "lucide-react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "/Favicon.png"
import axios from 'axios'
import { successToast, errorToast } from "../../toast/toast";
import { useAuth } from "../../Auth/Auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate()
  const { setUserEntered } = useAuth()
  

  function onClose() {
    Navigate('/')
  }


  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())
    try {

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          formObj: formObj
        },
        {
          withCredentials: true
        }
      )

      const data = response.data
      setUserEntered(data?.success)
      successToast(data?.message)
      onClose()

    } catch (error) {
      console.log(`error while login ${error.code} ${error.response.data.message}`)
      errorToast( error.response?.data?.message)
    }

  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F3A5F]/50 p-4 backdrop-blur-sm">

      {/* Login Modal */}
      <div className="relative w-full max-w-105 rounded-3xl bg-white p-5 shadow-2xl sm:p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close login"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9F5] text-[#1F3A5F] transition hover:bg-[#FFE0C2]"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE0C2] text-[#F4A261] ">
            <img src={logo} alt="" className="w-12 h-12" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1F3A5F] sm:text-2xl">
              Greenly
            </h2>

            <p className="text-xs text-slate-500">
              Fresh groceries for you
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1F3A5F] sm:text-3xl">
            Welcome Back!
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Login to continue shopping for your favorite groceries.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#1F3A5F]"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4A261]"
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#FFE0C2] bg-[#FFF9F5] py-3 pl-11 pr-4 text-sm text-[#1F3A5F] outline-none transition focus:border-[#F4A261] focus:ring-2 focus:ring-[#FFE0C2]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#1F3A5F]"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4A261]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-[#FFE0C2] bg-[#FFF9F5] py-3 pl-11 pr-12 text-sm text-[#1F3A5F] outline-none transition focus:border-[#F4A261] focus:ring-2 focus:ring-[#FFE0C2]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Show password"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F3A5F] hover:text-[#F4A261]"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-5 flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-[#F4A261] transition hover:text-[#1F3A5F]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4A261] py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#e8904e]"
          >
            Login
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#FFE0C2]"></div>

          <span className="text-xs text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-[#FFE0C2]"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-bold text-[#F4A261] transition hover:text-[#1F3A5F]"
          >
            Create Account
          </Link>
        </p>

        {/* Support & Help */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 border-t border-[#FFE0C2] pt-5 sm:flex-row sm:gap-6">

          <Link
            to="/support"
            className="flex items-center gap-2 text-sm font-medium text-[#1F3A5F] transition hover:text-[#F4A261]"
          >
            <Headphones size={18} />
            Support
          </Link>

          <Link
            to="/help"
            className="flex items-center gap-2 text-sm font-medium text-[#1F3A5F] transition hover:text-[#F4A261]"
          >
            <CircleHelp size={18} />
            Help Center
          </Link>

        </div>

      </div>
    </div>
  );
}