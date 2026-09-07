import { ArrowRight, Percent } from "lucide-react";
import basket from "../../asset/basket_image.png";

export default function HeroSection() {
  return (
    <section className="w-[95%] mx-auto overflow-hidden rounded-2xl bg-linear-to-r from-[#eef3e9] via-[#f8f6ed] to-[#e8f0e5] flex flex-col min-h-105 md:flex-row md:min-h-112.5 lg:min-h-115 sm:whitespace-nowrap">

      {/* Left Content */}
      <div className="w-full flex flex-col justify-center items-start gap-5 px-6 py-10 font-custom sm:px-10 md:w-[46%] md:px-12 md:py-8 lg:px-16 xl:px-20">

        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-green-800 sm:text-5xl lg:text-6xl">
            Fresh Groceries,
          </h1>

          <h3 className="text-2xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl">
            Delivered to Your Doorstep
          </h3>
        </div>

        <div className="flex flex-col gap-1 text-base font-normal text-gray-600 sm:text-lg">
          <p>Best quality products at</p>
          <p>lowest prices</p>
        </div>

        <div className="flex flex-col gap-5">
          <button className="flex items-center justify-center gap-3 rounded-lg bg-green-800 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-900 sm:px-8 sm:py-3.5">
            <span>Shop Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Slider Dots */}
          <div className="flex items-center gap-2 px-1">
            <span className="h-2.5 w-5 rounded-full bg-green-700"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-200"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-200"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-200"></span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex w-full items-end justify-center md:w-[54%]">

        {/* Basket Image */}
        <img
          src={basket}
          alt="Fresh groceries basket"
          className="relative z-10 w-[90%] max-w-200 object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.20)] sm:w-[85%] md:w-full md:translate-y-3 lg:w-full lg:translate-y-5"
        />

        {/* Discount Circle */}
        <div className="absolute right-[5%] top-[8%] z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white/80 shadow-xl backdrop-blur-sm sm:h-28 sm:w-28 md:right-[5%] md:top-[10%] lg:h-32 lg:w-32 xl:right-[8%]">

          <p className="text-xs font-bold text-[#333333] sm:text-sm">
            UP TO
          </p>

          <div className="flex items-center justify-center text-green-800">
            <span className="text-3xl font-bold leading-none sm:text-4xl lg:text-5xl">
              30
            </span>

            <Percent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
          </div>

          <p className="text-sm font-bold text-green-800 sm:text-base">
            OFF
          </p>
        </div>

      </div>
    </section>
  );
}