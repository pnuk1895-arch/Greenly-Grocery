import {
    FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-[#033d22] text-white">
      {/* Main Footer */}
      <div className="mx-auto w-[95%] max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            md:grid-cols-3

            lg:grid-cols-5

            lg:gap-8
          "
        >
          {/* ================= BRAND SECTION ================= */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b6b39]">
                <FaLeaf className="h-5 w-5 text-white" />
              </div>

              <h2 className="text-2xl font-bold">Greenly</h2>
            </div>

            <p className="mt-5 max-w-65 text-sm leading-6 text-white/65">
              Freshness Delivered Daily. Your one-stop destination for fresh,
              healthy and quality groceries.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="transition duration-200 hover:text-[#69b77d]"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#69b77d]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#69b77d]"
              >
                <FaTwitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#69b77d]"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Deals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-base font-semibold">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CUSTOMER SUPPORT ================= */}
          <div>
            <h3 className="text-base font-semibold">Customer Support</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Track Order
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>

          {/* ================= DOWNLOAD APP ================= */}
          <div>
            <h3 className="text-base font-semibold">Download App</h3>

            <p className="mt-5 text-sm leading-6 text-white/65">
              Get the Greenly app for a better shopping experience.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {/* App Store */}
              <button
                className="
                  flex
                  w-full
                  max-w-45
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-white/20
                  bg-black
                  px-4
                  py-2.5
                  text-left
                  transition
                  hover:bg-black/70
                "
              >
                <FaApple className="h-6 w-6" />

                <div>
                  <p className="text-[10px] text-white/70">Download on the</p>

                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>

              {/* Google Play */}
              <button
                className="
                  flex
                  w-full
                  max-w-45
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-white/20
                  bg-black
                  px-4
                  py-2.5
                  text-left
                  transition
                  hover:bg-black/70
                "
              >
                <div className="text-xl">▶</div>

                <div>
                  <p className="text-[10px] text-white/70">GET IT ON</p>

                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            w-[95%]
            max-w-[1600px]
            flex-col
            items-center
            justify-between
            gap-4
            px-4
            py-5
            text-center

            md:flex-row
            md:text-left
          "
        >
          <p className="text-xs text-white/55">
            © 2026 Greenly. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              text-xs
              text-white/55

              md:justify-end
            "
          >
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <span className="hidden text-white/25 sm:block">|</span>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>

            <span className="hidden text-white/25 sm:block">|</span>

            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}