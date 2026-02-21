interface Metric {
  icon: string
  value: string
  sup?: string
  unit: string
  description: string
  trend: string
}

interface WueBar {
  name: string
  value: string
  width: string
  delay: string
  background?: string
}

const Metrics = () => {
  const metrics: Metric[] = [
    {
      icon: '💧',
      value: '54.3',
      sup: 'B',
      unit: 'Litres / Year Saved',
      description: 'Equivalent annual water supply for 10 million people — preserved from freshwater aquifers by 2030.',
      trend: 'On track from 3 pilot sites',
    },
    {
      icon: '⚡',
      value: '40',
      sup: '%',
      unit: 'Energy Reduction',
      description: 'Immersion cooling eliminates traditional CRAC units and cooling towers, slashing total energy draw by 40–50%.',
      trend: 'Proven at CtrlS Hyderabad pilot',
    },
    {
      icon: '🌍',
      value: '4.9',
      sup: 'M',
      unit: 'Tons CO₂ Avoided / Yr',
      description: 'Equivalent to 220 million trees planted. Eligible for voluntary carbon market credits.',
      trend: 'Verified by BEE carbon accounting',
    },
    {
      icon: '📈',
      value: '4–5',
      unit: 'Year Payback Period',
      description: 'With 40% capex subsidy under MNRE scheme, effective payback compresses to 2–3 years on a 15–20 year asset.',
      trend: '₹7 Cr net opex savings/yr per 10 MW',
    },
  ]

  const wueBars: WueBar[] = [
    {
      name: 'Industry Baseline (Today)',
      value: '3.5 L/kWh',
      width: '100%',
      delay: '0.2s',
      background: 'rgba(201,100,80,0.6)',
    },
    {
      name: 'Target 2027',
      value: '1.0 L/kWh',
      width: '28.5%',
      delay: '0.5s',
    },
    {
      name: 'Target 2030',
      value: '0.5 L/kWh',
      width: '14.3%',
      delay: '0.8s',
    },
    {
      name: 'Target 2035 (World-Leading)',
      value: '0.3 L/kWh',
      width: '8.6%',
      delay: '1.1s',
      background: 'linear-gradient(90deg,var(--teal),var(--gold))',
    },
  ]

  const waterSourceBars: WueBar[] = [
    {
      name: 'Municipal STP Recycled',
      value: '65%',
      width: '65%',
      delay: '0.3s',
    },
    {
      name: 'Rainwater Harvesting',
      value: '18%',
      width: '18%',
      delay: '0.6s',
    },
    {
      name: 'Industrial Wastewater',
      value: '12%',
      width: '12%',
      delay: '0.9s',
    },
    {
      name: 'Freshwater (Human Use Only)',
      value: '≤2%',
      width: '2%',
      delay: '1.2s',
      background: 'rgba(201,168,76,0.5)',
    },
  ]

  return (
    <section className="metrics-section" id="metrics">
      <div className="metrics-header">
        <div>
          <div className="section-label reveal">Measurable Impact</div>
          <h2 className="section-title reveal reveal-delay-1">
            Numbers that<br />move <em>capital</em>
          </h2>
        </div>
        <p className="metrics-intro reveal reveal-delay-2">
          India's data centers currently consume 3–5 litres of freshwater per kilowatt-hour. By 2030, unchecked growth will drain 61.3 billion litres annually — a resource competing directly with 1.4 billion people. Our ecosystem targets 80–90% reduction through verified, auditable infrastructure.
        </p>
      </div>

      <div className="metrics-grid reveal">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <span className="metric-icon">{metric.icon}</span>
            <span className="metric-val">
              {metric.value}
              {metric.sup && <sup>{metric.sup}</sup>}
            </span>
            <span className="metric-unit">{metric.unit}</span>
            <p className="metric-desc">{metric.description}</p>
            <div className="metric-trend">{metric.trend}</div>
          </div>
        ))}
      </div>

      <div className="wue-bar-section reveal reveal-delay-2">
        <div>
          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '24px',
            }}
          >
            WUE Trajectory (L/kWh)
          </p>
          {wueBars.map((bar, index) => (
            <div key={index} className="wue-bar-block" style={{ marginBottom: '18px' }}>
              <div className="wue-bar-label">
                <span className="wue-bar-name">{bar.name}</span>
                <span className="wue-bar-val">{bar.value}</span>
              </div>
              <div className="wue-bar-track">
                <div
                  className="wue-bar-fill"
                  style={{
                    width: bar.width,
                    animationDelay: bar.delay,
                    background: bar.background || undefined,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '24px',
            }}
          >
            Water Source Mix (2030 Target)
          </p>
          {waterSourceBars.map((bar, index) => (
            <div key={index} className="wue-bar-block" style={{ marginBottom: '18px' }}>
              <div className="wue-bar-label">
                <span className="wue-bar-name">{bar.name}</span>
                <span className="wue-bar-val">{bar.value}</span>
              </div>
              <div className="wue-bar-track">
                <div
                  className="wue-bar-fill"
                  style={{
                    width: bar.width,
                    animationDelay: bar.delay,
                    background: bar.background || undefined,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics
