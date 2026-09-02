import './HeroSection.css'

export default function HeroSection(){
    return(
        // <!-- Hero -->Name
      <section className="hero">
        <div className="hero-text">
          <div className="hero-line1">Fresh Groceries</div>
          <div className="hero-line2">Straight to Your Doorstep</div>
          <p className="hero-desc">Best quality products at lowest prices</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>

        <div className="discount-circle">
          <div className="discount-top">UP TO</div>
          <div className="discount-value">30%</div>
          <div className="discount-bottom">OFF</div>
        </div>

        <div className="hero-image">basket of fresh produce image</div>
      </section>
    )
}