import {
  Mail,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Truck,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import SideImage from '../../asset/basket_image.png'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react'
import { successToast, errorToast } from "../../toast/toast";
import { useAuth } from "../../Auth/Auth";

export default function Signup() {

  const [showPassword, setshowPassword] = useState(true)
  const [showPasswordS, setshowPasswordS ] = useState(true)
  const {UserEntered, setUserEntered} = useAuth()
  
  const Navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const formData = new FormData(e.target);
      const formObj = Object.fromEntries(formData.entries())

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/Signup`,
        {
          formObj: formObj
        },
        {
          withCredentials:true
        }
      )
      const data = response.data
      console.log(data?.message)
      if(data?.success)
      {
        setUserEntered(data?.success)
        successToast(data?.message)
        
        Navigate("/")
      }

    } catch (error) {
      console.log(`error while signup: ${error.code}, error: ${error.message}, message ${error.response?.data?.message}`)
      errorToast(error.response?.data?.message)

    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-orange-50 font-sans">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-8 lg:px-16">

        {/* Background Decorations */}
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-orange-100 opacity-70 md:h-80 md:w-80" />

        <img src={SideImage} alt="" className="absolute top-[64%] right-[85%] h-75 w-100" />

        <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-orange-100 opacity-60 md:h-80 md:w-80" />

        {/* Decorative Leaves */}
        <Leaf className="absolute left-1/4 top-1/3 hidden text-green-600 md:block" />
        <Leaf className="absolute left-1/4 bottom-1/4 hidden rotate-45 text-green-600 md:block" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">

          {/* Left Content - Desktop Only */}
          <section className="hidden flex-1 lg:block">
            <div className="max-w-sm">
              <h1 className="text-5xl font-bold leading-tight text-[#1F3A5F]">
                Fresh
                <br />
                Groceries
                <br />
                <span className="text-orange-500">
                  Happier You
                </span>
              </h1>

              <div className="mt-5 h-1 w-16 rounded-full bg-orange-500" />

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Quality products, great prices
                <br />
                and a healthier tomorrow.
              </p>
            </div>
          </section>

          {/* Signup Form */}
          <section className="w-full max-w-xl rounded-3xl border border-white bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">

            {/* Heading */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-[#1F3A5F]">
                Create Your{" "}
                <span className="text-orange-500">
                  Account
                </span>
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join Greenly and start your fresh shopping journey
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Email */}
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3A5F]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Username */}
              <div className="relative">
                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3A5F]"
                />

                <input
                  type="text"
                  name="userName"
                  placeholder="Username"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3A5F]"
                />

                <input
                  type="tel"
                  name="PhoneNumber"
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3A5F]"
                />

                <input
                  type={showPassword ? "text" : "password" }
                  name="Password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
                {
                  showPassword ? <Eye
                    onClick={() => { setshowPassword(!showPassword) }}
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
                  /> :
                    <EyeOff
                      onClick={() => { setshowPassword(!showPassword) }}
                      size={19}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
                    />
                }


              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3A5F]"
                />

                <input
                  type={ showPasswordS ? "text": "password"}
                  name="ComfirmPassword"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />

                {
                  showPasswordS ? <Eye
                    onClick={() => { setshowPasswordS(!showPasswordS) }}
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
                  /> :
                    <EyeOff
                      onClick={() => { setshowPasswordS(!showPasswordS) }}
                      size={19}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
                    />
                }
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Sign Up
                <ArrowRight size={19} />
              </button>
            </form>

            {/* Terms */}
            <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
              By creating an account, you agree to our
              <br />

              <button className="text-orange-500 hover:underline">
                Terms of Service
              </button>

              {" and "}

              <button className="text-orange-500 hover:underline">
                Privacy Policy
              </button>
            </p>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-sm text-slate-500">
                Or sign up with
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="flex h-11 w-20 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-red-500 transition hover:bg-orange-50"
              >
                G
              </button>

              <button
                type="button"
                className="flex h-11 w-20 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-blue-600 transition hover:bg-orange-50"
              >
                f
              </button>

              <button
                type="button"
                className="flex h-11 w-20 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl font-bold text-black transition hover:bg-orange-50"
              >
                ●
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-5 text-center text-sm text-slate-600">
              Already have an account?{" "}

              <button onClick={() => Navigate('/login', { state: { backgroundLocation: { pathname: "/" } } })} className="font-semibold text-orange-500 hover:underline">
                Login
              </button>
            </p>
          </section>

          {/* Right Content - Desktop Only */}
          <section className="hidden flex-1 lg:block">
            <div className="text-center">
              <p className="text-4xl italic leading-tight text-orange-500 xl:text-5xl">
                Good Food
                <br />
                Good Mood!
              </p>

              <div className="mx-auto mt-4 h-1 w-40 -rotate-12 rounded-full bg-orange-500" />
            </div>
          </section>
        </div>

        {/* Services - Desktop and Laptop Only */}
        <section className="relative z-10 mx-auto mt-8 hidden w-full max-w-4xl items-center justify-between gap-8 lg:flex">

          {/* Free Delivery */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Truck size={24} className="text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-[#1F3A5F]">
                Free Delivery
              </h3>

              <p className="text-sm text-slate-500">
                On orders above ₹499
              </p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <ShieldCheck size={24} className="text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-[#1F3A5F]">
                Secure Payment
              </h3>

              <p className="text-sm text-slate-500">
                100% safe & secure
              </p>
            </div>
          </div>

          {/* Fresh Products */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Leaf size={24} className="text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-[#1F3A5F]">
                Fresh Products
              </h3>

              <p className="text-sm text-slate-500">
                Sourced from trusted farms
              </p>
            </div>
          </div>
        </section>

        {/* Mobile / Tablet Decoration */}
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-tl-full bg-orange-100 opacity-60 lg:hidden" />
      </div>
    </main>
  );
}