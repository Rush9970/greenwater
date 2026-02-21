interface InvestCell {
  value: string
  label: string
}

const CTA = () => {
  const investCells: InvestCell[] = [
    { value: '₹500 Cr', label: 'Target Fund Size (Series A)' },
    { value: '2–3 Yr', label: 'Capex Payback w/ Subsidies' },
    { value: '15–20 Yr', label: 'Asset Lifecycle Duration' },
  ]

  return (
    <section className="cta-section" id="invest">
      <span className="cta-label reveal">Investment Opportunity</span>
      <h2 className="cta-title reveal reveal-delay-1">
        Back the Infrastructure
        <br />
        India <em>Cannot</em> Build Without
      </h2>
      <p className="cta-sub reveal reveal-delay-2">
        A once-in-a-generation convergence of digital demand, water scarcity, and policy momentum. The capital deployed today establishes the dominant water-neutral DC platform across the world's most populous nation.
      </p>

      <div className="cta-invest-grid reveal reveal-delay-2">
        {investCells.map((cell, index) => (
          <div key={index} className="invest-cell">
            <span className="invest-val">{cell.value}</span>
            <span className="invest-lbl">{cell.label}</span>
          </div>
        ))}
      </div>

      <div className="cta-actions reveal reveal-delay-3">
        {/* <button className="btn-gold">Request Investor Deck</button>
        <button className="btn-secondary">Schedule a Briefing</button> */}
      </div>
    </section>
  )
}

export default CTA
