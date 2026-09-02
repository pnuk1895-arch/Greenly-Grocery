import './SideBar.css'

export default function SideBar()
{
    return(
        //  <!-- Sidebar -->
        <aside className="sidebar">
        <div className="category-box">
            <div className="category-header">☰ SHOP BY CATEGORY</div>
            <ul className="category-list">
                <li>Fruits &amp; Vegetables</li>
                <li>Dairy &amp; Eggs</li>
                <li>Beverages</li>
                <li>Snacks &amp; Munchies</li>
                <li>Bakery &amp; Biscuits</li>
                <li>Staples</li>
                <li>Personal Care</li>
                <li>Home Care</li>
                <li>Baby Care</li>
                <li>Pet Care</li>
                <li>Offers &amp; Deals</li>
            </ul>
        </div>

        <div className="promo-box">
            <div className="promo-title">Get Flat 25% OFF</div>
            <div className="promo-sub">on your first order</div>
            <div className="promo-code">GREEN25</div>
        </div>
        </aside>
    )
}