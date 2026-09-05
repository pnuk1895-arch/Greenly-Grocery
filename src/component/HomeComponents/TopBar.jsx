// import './TopBar.css'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'
import { Truck, Heart, User, ShoppingCart } from 'lucide-react';

export default function TopBar() {

    // reuseable css class for one this html file
    const link=  "font-medium text-[#333333] pb-1.5 relative whitespace-nowrap transition-colors duration-200 ease-linear hover:text-[#1e8e3e]  ";
    const active ="text-[#1e8e3e] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[#1e8e3e] after:rounded-sm";
    let actionLink = 'flex items-center gap-1.5 font-medium text-[#333333] whitespace-nowrap transition-colors duration-200 ease-linear hover:text-[#1e8e3e]'
    let toggleSpan="block h-0.5 w-full bg-[#1e8e3e] rounded-xs"

    return (
        <header className=" w-screen bg-[#ffffff] border-b border-[#eef1ee] sticky top-0 z-50 font-custom overflow-hidden  " >
            <div className=" mx-auto px-10 py-4 flex justify-between items-center gap-6  ">

                {/* <!-- Logo -->Name */}
                <div className="flex items-center gap-2 shrink-0 max-[1444px]:absolute left-26 ">
                    <img src={logo} className="w-10 h-10 flex justify-center items-center rounded-2xl " >
                    </img>
                    <span className="flex flex-col ">
                        <span className="text-2xl font-bold text-[#1e8e3e] ">Greenly</span>
                        <span className="text-sm font-medium leading-2.5 text-[#2f2f2f] tracking-[0.2px]  ">Grocery</span>
                    </span>
                </div>

                {/* <!-- Nav --> */}
                <nav className="flex flex-1 justify-center max-[1444px]:hidden text-base " aria-label="Primary ">
                    <ul className='flex items-center gap-7'>
                        <li><Link to="#" className={ ` ${ link } ${ active } `} >Home</Link></li>
                        <li><Link to="#" className={` ${ link }`}  >Categories</Link></li>
                        <li><Link to="#" className={` ${ link }`} >Deals</Link></li>
                        <li><Link to="#" className={` ${ link }`} >New Arrivals</Link></li>
                        <li><Link to="#" className={` ${ link }`} >Best Selling</Link></li>
                        <li><Link to="#" className={` ${ link }`} >Offers</Link></li>
                        <li><Link to="#" className={` ${ link }`} >About Us</Link></li>
                    </ul>
                </nav>

                {/* <!-- Right actions --> */}
                <div className="flex items-center gap-6 shrink-0 text-sm">

                    <Link to="#" className={`${ actionLink } max-md:hidden `}>
                        <span className='text-[#333333] shrink-0 text-sm hover:text-[#1e8e3e] ' ><Truck/></span>
                        <span>Track Order</span>
                    </Link>

                    <Link to="#" className={`${ actionLink } max-md:hidden `}>
                        <span className='text-[#333333] shrink-0  hover:text-[#1e8e3e] max-md:hidden'><Heart/></span>
                        <span>Wishlist</span>
                    </Link>

                    <Link to="#" className={`${ actionLink} max-xl:hidden`}>
                        <span className='text-[#333333] shrink-0  hover:text-[#1e8e3e] '><User/></span>
                        <span>Login / Signup</span>
                    </Link>

                    <Link to="#" className="relative flex items-center gap-2.5 md:bg-[#1e8e3e] md:text-[#ffffff] px-4.5 py-2.5 rounded-lg text-4 font-semibold transition-background duration-200 ease-linear hover:bg-[#17722f] sm:max-md:text-[#1e8e3e] max-sm:text-black ">
                        <span className="relative flex items-center">
                            <ShoppingCart className='md:text-[#ffffff] sm:max:md:text-[#1e8e3e] max-sm:text-black '/>
                        </span>
                        <span className='absolute left-8 top-0.5 max-md:bg-[#1e8e3e] max-md:text-[#ffffff] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center sm:hidden  '>0</span>
                        <span className="cart-total max-sm:hidden ">₹1,248</span>
                    </Link>
                </div>

                {/* <!-- Mobile menu toggle --> */}
                <button className="hidden max-[1444px]:flex max-[1444px]:-order-1 flex-col justify-center gap-1.5 w-8 h-8  bg-none border-none cursor-pointer shrink-0 " aria-label="Open menu">
                    <span className={toggleSpan}></span>
                    <span className={toggleSpan}></span>
                    <span className={toggleSpan}></span>
                </button>

            </div>
        </header>

    )
}