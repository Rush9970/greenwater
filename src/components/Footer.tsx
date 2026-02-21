const Footer = () => {
  const links = [
    { href: '#', text: 'Technology' },
    { href: '#', text: 'Policy Framework' },
    { href: '#', text: 'Pilot Sites' },
    { href: '#', text: 'ESG Reports' },
    { href: '#', text: 'Contact' },
  ]

  return (
    <footer>
      <div className="footer-logo">
        Jal<span>·</span>AI
      </div>
      <div className="footer-links">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
      <div className="footer-copy">© 2026 Jal-AI Initiative</div>
    </footer>
  )
}

export default Footer
