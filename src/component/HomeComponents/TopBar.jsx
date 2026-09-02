import './TopBar.css'
import logo from '../../asset/logo.png'

export default function TopBar()
{
    return(
        //   <!-- Header -->
        <header className="header">
            <div className="logo">
            <img src={logo} alt="" className="logo-icon"/>
            <div className="logo-text">
                <div className="logo-title">Greenly</div>
                <div className="logo-sub">Grocery</div>
            </div>
            </div>

            <div className="deliver">
            <span className="pin">📍</span>
            <div>
                <div className="deliver-label">Deliver to</div>
                <div className="deliver-value">Noida, 201301</div>
            </div>
            </div>

            <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button className="search-btn">🔍</button>
            </div>

            <div className="header-right">
            <div className="login">
                <span>👤</span>
                Login / Signup
            </div>
            <div className="cart">
                <span>🛒</span>
                <span className="cart-badge">3</span>
                <span className="cart-total">₹1,248</span>
            </div>
            </div>
        </header>
    )
}