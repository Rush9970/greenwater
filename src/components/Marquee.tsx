const Marquee = () => {
  const marqueeItems = [
    'Two-Phase Immersion Cooling',
    'AI Workload Scheduling',
    'Waste Heat Recovery',
    'Greywater Recycling',
    'Seawater Desalination',
    'WUE Certification Framework',
    '4.9M Tons CO₂ Avoided',
  ]

  // Duplicate items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>→</span> {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
