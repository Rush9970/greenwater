const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-left">
        <div className="hero-eyebrow">India Water-Neutral Initiative · 2026–2035</div>
        <h1 className="hero-headline">
          The Data Center<br />
          that <em>Creates</em><br />
          More Water<br />
          Than It Consumes
        </h1>
        <p className="hero-sub">
          India's digital economy demands 2,000+ MW of compute by 2030. We're building the closed-loop, AI-optimized infrastructure to power it — without draining a single freshwater aquifer.
        </p>
        <div className="hero-actions">
          {/* <button className="btn-primary">View Investment Thesis</button>
          <button className="btn-secondary">Explore Technology</button> */}
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-circle"></div>
          <div className="hero-circle"></div>
          <div className="hero-circle"></div>
          <div className="hero-center-stat">
            <span className="hero-center-num">85<sup>%</sup></span>
            <span className="hero-center-label">Freshwater Reduction</span>
            <span className="hero-center-sub">vs. conventional cooling towers</span>
          </div>
          <div className="float-stat">
            <span className="float-stat-val">54.3B</span>
            <span className="float-stat-lbl">Litres/yr saved</span>
          </div>
          <div className="float-stat">
            <span className="float-stat-val">₹7 Cr</span>
            <span className="float-stat-lbl">Opex savings/yr</span>
          </div>
          <div className="float-stat">
            <span className="float-stat-val">0.3</span>
            <span className="float-stat-lbl">WUE Target 2035</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
