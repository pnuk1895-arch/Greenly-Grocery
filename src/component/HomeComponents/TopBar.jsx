import './TopBar.css'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'

export default function TopBar() {
    return (
        <header className="site-header">
            <div className="header-inner">

                {/* <!-- Logo -->Name */}
                <Link to="#" className="logo">
                    <img src={logo} className="logo-icon" >
                        
                    </img>
                    <span className="logo-text">
                        <span className="logo-title">Greenly</span>
                        <span className="logo-subtitle">Grocery</span>
                    </span>
                </Link>

                {/* <!-- Nav --> */}
                <nav className="main-nav" aria-label="Primary">
                    <ul>
                        <li><Link to="#" class="active">Home</Link></li>
                        <li><Link to="#">Categories</Link></li>
                        <li><Link to="#">Deals</Link></li>
                        <li><Link to="#">New Arrivals</Link></li>
                        <li><Link to="#">Best Selling</Link></li>
                        <li><Link to="#">Offers</Link></li>
                        <li><Link to="#">About Us</Link></li>
                    </ul>
                </nav>

                {/* <!-- Right actions --> */}
                <div className="header-actions">

                    <Link to="#" className="action-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"></rect><path d="M16 10h3l3 3v6h-6"></path><circle cx="6.5" cy="21.5" r="1.5"></circle><circle cx="17.5" cy="21.5" r="1.5"></circle></svg>
                        <span>Track Order</span>
                    </Link>

                    <Link to="#" className="action-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9l-2.3-2.3c-1.8-1.8-4.7-1.8-6.5 0-1.8 1.8-1.8 4.7 0 6.5L12 20.4l8.8-9.3c1.8-1.8 1.8-4.7 0-6.5z"></path></svg>
                        <span>Wishlist</span>
                    </Link>

                    <Link to="#" className="action-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span>Login / Signup</span>
                    </Link>

                    <Link to="#" className="cart-btn">
                        <span className="cart-icon-wrap">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path></svg>
                            <span className="cart-count">0</span>
                        </span>
                        <span className="cart-total">₹1,248</span>
                    </Link>

                </div>

                {/* <!-- Mobile menu toggle --> */}
                <button className="menu-toggle" aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>

            </div>
        </header>

    )
}