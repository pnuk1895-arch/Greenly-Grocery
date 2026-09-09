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
    <footer className="mt-10 w-full bg-[#07324d] text-white">
      {/* Main Footer */}
      <div className="mx-auto w-[95%] max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="
        grid
        grid-cols-1
        gap-10

        sm:grid-cols-2

        md:grid-cols-3

        lg:grid-cols-4

        lg:gap-8
      "
        >
          {/* ================= BRAND SECTION ================= */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff6b00]">
                <FaLeaf className="h-5 w-5 text-white" />
              </div>

              <h2 className="text-2xl font-bold">Greenly</h2>
            </div>

            <p className="mt-5 max-w-65 text-sm leading-6  text-white/65">
              Freshness Delivered Daily. Your one-stop destination for fresh,
              healthy and quality groceries.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="transition duration-200 hover:text-[#ff6b00]"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#ff6b00]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#ff6b00]"
              >
                <FaTwitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-[#ff6b00]"
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
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Deals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
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
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
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
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Track Order
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#ff6b00]"
                >
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 bg-[#05283d]">
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
            <a href="#" className="transition hover:text-[#ff6b00]">
              Privacy Policy
            </a>

            <span className="hidden text-white/25 sm:block">|</span>

            <a href="#" className="transition hover:text-[#ff6b00]">
              Terms of Service
            </a>

            <span className="hidden text-white/25 sm:block">|</span>

            <a href="#" className="transition hover:text-[#ff6b00]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}