interface PhaseItem {
  text: string
}

interface Phase {
  label: string
  year: string
  name: string
  items: PhaseItem[]
  isLast?: boolean
}

const Timeline = () => {
  const phases: Phase[] = [
    {
      label: 'P1',
      year: '2026–27',
      name: 'Pilot · Proof of Scale',
      items: [
        { text: '3 demonstration sites (Chennai, Jodhpur, Bangalore)' },
        { text: '20 MW coastal seawater DC — WUE <0.2' },
        { text: '10 MW hot-dry immersion DC — zero freshwater' },
        { text: 'Policy framework finalized with MeitY & Jal Shakti' },
        { text: 'WUE certification system launched (BEE)' },
      ],
    },
    {
      label: 'P2',
      year: '2028–30',
      name: 'City Clusters · ESG Scale',
      items: [
        { text: '15 Tier-1 cities mandating hybrid closed-loop' },
        { text: 'Water-Neutral Zones: Gurgaon, Pune, Hyderabad' },
        { text: '₹500 Cr MNRE subsidy fund deployed' },
        { text: 'Shared STP/desalination infrastructure clusters' },
        { text: '40% cost reduction via economies of scale' },
      ],
    },
    {
      label: 'P3',
      year: '2031–35',
      name: 'National Grid · World Standard',
      items: [
        { text: '80% of national DC capacity water-neutral' },
        { text: 'All DCs >1 MW under WUE certification' },
        { text: 'Climate-resilient corridors: Himachal, Vizag, Rajasthan' },
        { text: 'India = global benchmark WUE <0.3 L/kWh' },
        { text: '₹500 Cr/yr carbon credit revenue stream' },
      ],
      isLast: true,
    },
  ]

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-header">
        <div className="section-label reveal">Deployment Roadmap</div>
        <h2 className="section-title reveal reveal-delay-1">
          Pilot to <em>National Grid</em>
          <br />
          in Three Phases
        </h2>
      </div>

      <div className="timeline-track">
        {phases.map((phase, index) => (
          <div key={index} className={`phase-block reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
            <div
              className="phase-dot"
              style={
                phase.isLast
                  ? { borderColor: 'var(--gold)', color: 'var(--gold)' }
                  : undefined
              }
            >
              {phase.label}
            </div>
            <div className="phase-year">{phase.year}</div>
            <div
              className="phase-name"
              style={phase.isLast ? { color: 'var(--gold-light)' } : undefined}
            >
              {phase.name}
            </div>
            <ul className="phase-items">
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
