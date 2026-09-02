import "./PerkSection.css"

export default function PerkSection()
{
    return(
    // <!-- Perks -->
      <section className="perks">
        <div className="perk">
          <span className="perk-icon">🚚</span>
          <div>
            <div className="perk-title">Free Delivery</div>
            <div className="perk-sub">on orders above ₹499</div>
          </div>
        </div>
        <div className="perk">
          <span className="perk-icon">↩️</span>
          <div>
            <div className="perk-title">Easy Returns</div>
            <div className="perk-sub">No questions asked</div>
          </div>
        </div>
        <div className="perk">
          <span className="perk-icon">🏅</span>Name
          <div>
            <div className="perk-title">Best Quality</div>
            <div className="perk-sub">100% Original</div>
          </div>
        </div>
        <div className="perk">
          <span className="perk-icon">🛡️</span>
          <div>
            <div className="perk-title">Secure Payment</div>
            <div className="perk-sub">100% Protected</div>
          </div>
        </div>
      </section>
    )
}