import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-logo">
          <img src="/logo.png" alt="openworkout" />
          <span><span>open</span><strong>workout</strong></span>
        </Link>
        <p className="footer-copy">Open source workout tracking. Built by the community, for athletes.</p>
        <p className="footer-license">MIT License &nbsp;&#9670;&nbsp; No warranties &nbsp;&#9670;&nbsp; Your data, your device</p>
        <p className="footer-license"><Link to="/privacy">Privacy Policy</Link></p>
      </div>
    </footer>
  )
}
