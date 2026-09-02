 import './CategoriesSection.css'

 export default function CategoriesSection()
 {
    return(
        // <!-- Categories -->Name
      <section className="Categories-section">
        <div className="section-header">
          <div className="section-title">Shop by Categories</div>
          <div className="view-all">View All</div>
        </div>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon">🥕</div>
            <div className="category-label">Fruits &amp; Vegetables</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🥛</div>
            <div className="category-label">Dairy &amp; Eggs</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🥤</div>
            <div className="category-label">Beverages</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🍪</div>
            <div className="category-label">Snacks &amp; Munchies</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🍞</div>
            <div className="category-label">Bakery &amp; Biscuits</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🌾</div>
            <div className="category-label">Staples</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🧴</div>
            <div className="category-label">Personal Care</div>
          </div>
          <div className="category-card">
            <div className="category-icon">🏠</div>
            <div className="category-label">Home Care</div>
          </div>
        </div>
      </section>
    )
 }