import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="openworkout" />
        <span className="nav-wordmark"><span>open</span><strong>workout</strong></span>
      </Link>
      <ul className="nav-links">
        <li><a href="/#features">Features</a></li>
        <li><a href="/#why">Why open source</a></li>
        <li>
          <a
            href="https://github.com/open-workout/openworkout-mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            GitHub <span className="star-icon">&#9670;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
