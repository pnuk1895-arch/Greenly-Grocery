// import './TopBar.css'
import logo from '/Favicon.png'
import { Link, useLocation } from 'react-router-dom'
import { Truck, Heart, User, ShoppingCart } from 'lucide-react';

export default function TopBar() {

    // reuseable css class for one this html file
    let link = "font-medium text-[#1F3A5F] drop-shadow-[0_0_0.5px] pb-1.5 relative whitespace-nowrap transition-colors duration-200 ease-linear hover:text-[#F4A261] hover:drop-shadow-[0_0_0.5px] ";
    let active = "text-[#1e8e3e] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[#1e8e3e] after:rounded-sm";
    let actionLink = 'flex items-center gap-1.5 drop-shadow-[0_0_0.5px] font-medium text-[#1F3A5F] whitespace-nowrap transition-colors duration-200 ease-linear hover:text-[#1e8e3e] hover:drop-shadow-[0_0_0.5px] '
    let toggleSpan = "block h-0.5 w-full bg-[#1e8e3e] rounded-xs"

    // program

    const location = useLocation()

    return (
        <header className="w-full bg-white border-b border-[#FFE0C2] sticky top-0 z-50 font-custom">

            <div className="mx-auto px-10 py-4 flex justify-between items-center gap-6">

                {/* Mobile menu toggle */}
                <button
                    className="hidden max-[1444px]:flex flex-col justify-center gap-1.5 w-8 h-8 bg-transparent border-none cursor-pointer shrink-0"
                    aria-label="Open menu"
                >
                    <span className={toggleSpan}></span>
                    <span className={toggleSpan}></span>
                    <span className={toggleSpan}></span>
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2 shrink-0">

                    <img
                        src={logo}
                        alt="Greenly Grocery Logo"
                        className="w-10 h-10 rounded-2xl"
                    />

                    <span className="flex flex-col">
                        <span className="text-2xl font-bold text-[#1F3A5F] drop-shadow-[0_0_0.5px] ">
                            Greenly
                        </span>

                        <span className="text-sm font-medium leading-2.5 text-[#F4A261] tracking-[0.2px]">
                            Grocery
                        </span>
                    </span>

                </div>

                {/* Navigation */}
                <nav
                    className="flex flex-1 justify-center max-[1444px]:hidden text-base"
                    aria-label="Primary"
                >
                    <ul className="flex items-center gap-8">

                        <li>
                            <Link
                                to="#"
                                className={`${link} ${active}`}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                Categories
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                Deals
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                New Arrivals
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                Best Selling
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                Offers
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className={link}>
                                About Us
                            </Link>
                        </li>

                    </ul>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-6 shrink-0 text-sm">

                    {/* Track Order */}
                    <Link to="#" className={`${actionLink} max-md:hidden`}>
                        <span className="text-[#1F3A5F] shrink-0 hover:text-[#F4A261] hover:drop-shadow-[0_0_0.5px]">
                            <Truck />
                        </span>

                        <span>Track Order</span>
                    </Link>

                    {/* Wishlist */}
                    <Link to="#" className={`${actionLink} max-md:hidden`}>
                        <span className="text-[#1F3A5F] shrink-0 hover:text-[#F4A261] hover:drop-shadow-[0_0_0.5px]">
                            <Heart />
                        </span>

                        <span>Wishlist</span>
                    </Link>

                    {/* Login / Signup */}
                    <div className={`${actionLink} max-xl:hidden flex items-center`}>

                        <span className="text-[#1F3A5F] shrink-0">
                            <User />
                        </span>

                        <Link
                            to="/Login"
                            className="hover:text-[#F4A261]"
                            state={{backgroundLocation:location}}
                        >
                            Login
                        </Link>

                        <span className="mx-1 text-[#F4A261]">/</span>

                        <Link
                            to="/Signup"
                            className="hover:text-[#F4A261]"
                        >
                            Signup
                        </Link>

                    </div>

                    {/* Cart */}
                    <Link
                        to="#"
                        className="
                    relative
                    flex
                    items-center
                    gap-2.5
                    md:bg-[#F4A261]
                    md:text-white
                    px-4.5
                    py-2.5
                    rounded-lg
                    text-base
                    font-semibold
                    transition-colors
                    duration-200
                    hover:bg-[#E89150]
                    sm:max-md:text-[#F4A261]
                    max-sm:text-[#1F3A5F]
                "
                    >

                        <span className="relative flex items-center">
                            <ShoppingCart
                                className="
                            md:text-white
                            sm:max-md:text-[#F4A261]
                            max-sm:text-[#1F3A5F]
                        "
                            />
                        </span>

                        {/* Cart quantity */}
                        <span
                            className="
                        absolute
                        left-8
                        top-0.5
                        max-md:bg-[#F4A261]
                        max-md:text-white
                        text-[10px]
                        font-bold
                        w-4
                        h-4
                        rounded-full
                        flex
                        items-center
                        justify-center
                        sm:hidden
                        drop-shadow-[0_0_0.5px]
                    "
                        >
                            0
                        </span>

                        <span className="cart-total max-sm:hidden drop-shadow-[0_0_0.5px]">
                            ₹1,248
                        </span>

                    </Link>

                </div>
            </div>
        </header>

    )
}