import "./BestSellingProduct.css"

export default function BestSellingProduct()
{
    return(
        //  <!-- Best selling -->
      <section className="section">
        <div className="section-header">
          <div className="section-title">Best Selling Products</div>
          <div className="view-all">View All</div>
        </div>
        <div className="product-grid">

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">Red Apple</div>
            <div className="product-qty">1 kg</div>
            <div className="product-price">
              <span className="price">₹179</span>
              <span className="mrp">₹199</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">Banana</div>
            <div className="product-qty">1 kg</div>
            <div className="product-price">
              <span className="price">₹49</span>
              <span className="mrp">₹60</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">Amul Taaza Milk</div>
            <div className="product-qty">1 L</div>
            <div className="product-price">
              <span className="price">₹61</span>
              <span className="mrp">₹67</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">Fortune Sunflower Oil</div>
            <div className="product-qty">1 L</div>
            <div className="product-price">
              <span className="price">₹135</span>
              <span className="mrp">₹165</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">Aashirvaad Atta</div>
            <div className="product-qty">5 kg</div>
            <div className="product-price">
              <span className="price">₹219</span>
              <span className="mrp">₹260</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">product image</div>
            <div className="product-name">India Gate Basmati Rice</div>
            <div className="product-qty">1 kg</div>
            <div className="product-price">
              <span className="price">₹119</span>
              <span className="mrp">₹140</span>
            </div>
            <button className="add-btn">🛒 Add to Cart</button>
          </div>

        </div>
      </section>
    )
}