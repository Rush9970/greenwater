interface PillarStat {
  value: string
  label: string
}

interface Pillar {
  num: string
  icon: string
  title: string
  description: string
  tags: string[]
  stats: PillarStat[]
}

const Pillars = () => {
  const pillars: Pillar[] = [
    {
      num: '01',
      icon: '🧊',
      title: 'Closed-Loop Cooling',
      description:
        'Two-phase immersion tanks submerge servers in dielectric fluid that boils at 49°C, capturing 100% of heat in a sealed cycle. Zero atmospheric evaporation. Zero freshwater draw. Handles 200 kW/rack — 15× air-cooled density.',
      tags: ['Two-Phase Immersion', 'Direct-to-Chip', 'Adiabatic Assist', 'Dry Coolers'],
      stats: [
        { value: '0.2', label: 'L/kWh WUE' },
        { value: '95%', label: 'Water reduction' },
        { value: '15%', label: 'Server energy saved' },
      ],
    },
    {
      num: '02',
      icon: '🤖',
      title: 'AI-Driven Scheduling',
      description:
        'The Jal-AI Scheduler redistributes compute temporally and geographically — pushing batch AI training to cool monsoon nights, routing workloads to coastal clusters with seawater access, reserving water-scarce regions for edge inference only.',
      tags: ['Kubernetes Integration', 'WUE Optimization', 'Temporal Shifting', 'Open Source'],
      stats: [
        { value: '30%', label: 'Cooling energy saved' },
        { value: '24/7', label: 'Real-time IoT inputs' },
      ],
    },
    {
      num: '03',
      icon: '♻️',
      title: 'Waste Heat Recovery',
      description:
        'Server waste heat (60–90°C) becomes an asset: powering seawater desalination via Multi-Effect Distillation, supplying district heating to residential townships, and driving absorption chillers — turning a liability into revenue of ₹2–3/kWh thermal.',
      tags: ['MED Desalination', 'District Heating', 'Absorption Chillers', 'Net Water Positive'],
      stats: [
        { value: '15%', label: 'Opex offset' },
        { value: '10–15L', label: 'Per ton heat → water' },
      ],
    },
  ]

  return (
    <section className="pillars-section" id="pillars">
      <div className="pillars-header">
        <div>
          <div className="section-label reveal">Technology</div>
          <h2 className="section-title reveal reveal-delay-1">
            Four Pillars.<br />
            <em>One</em> Ecosystem.
          </h2>
        </div>
        <p className="metrics-intro reveal reveal-delay-2">
          No single technology solves India's water-compute crisis. Our integrated stack layers closed-loop hardware, intelligent scheduling, thermal reuse, and regulatory infrastructure — each pillar reinforcing the others.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className={`pillar-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
            <div className="pillar-num">{pillar.num}</div>
            <div className="pillar-icon-wrap">{pillar.icon}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-desc">{pillar.description}</p>
            <div className="pillar-tags">
              {pillar.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="pillar-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pillar-stat-row">
              {pillar.stats.map((stat, statIndex) => (
                <div key={statIndex} className="pillar-mini-stat">
                  <span className="pillar-mini-val">{stat.value}</span>
                  <span className="pillar-mini-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pillars
