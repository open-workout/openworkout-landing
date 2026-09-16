import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-content">
          <img src="/logo.png" alt="openworkout logo" className="hero-logo" />
          <h1 className="hero-title">Train without<br /><span className="gradient-text">limits.</span></h1>
          <p className="hero-sub">
            The open source workout tracker built for athletes who value
            their&nbsp;<strong>privacy</strong>, their&nbsp;<strong>data</strong>, and their&nbsp;<strong>progress</strong>.
          </p>
          <div className="hero-actions">
            <a href="#" className="store-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <span className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.freeopenworkout.app" className="store-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon"><path d="M8 5.14v14l11-7-11-7z" /></svg>
              <span className="store-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
          <div className="hero-badges">
            <span className="badge">100% Free</span>
            <span className="badge">No account needed</span>
            <span className="badge">Your data stays yours</span>
          </div>
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="stat">
          <span className="stat-num">0</span>
          <span className="stat-label">Servers with your data</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">100%</span>
          <span className="stat-label">Offline capable</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">&#8734;</span>
          <span className="stat-label">Custom exercises</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-num">MIT</span>
          <span className="stat-label">Licensed &amp; free forever</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2>Everything you need.<br />Nothing you don't.</h2>
        </div>
        <div className="features-grid">

          <div className="feature-card feature-card--large">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Privacy First</h3>
            <p>No account. No cloud. No tracking. Your workouts live entirely on your device — encrypted and fully under your control. We don't even know you exist.</p>
            <ul className="feature-list">
              <li>Local-only data storage</li>
              <li>Zero telemetry or analytics</li>
              <li>No login or email required</li>
              <li>Encrypted on-device backup</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /><line x1="12" y1="11" x2="12" y2="8" /><polyline points="9 11 12 8 15 11" /></svg>
            </div>
            <h3>Works Offline</h3>
            <p>No signal in the gym? No problem. openworkout works 100% offline. Your data syncs when you want, not when a server demands it.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <h3>Detailed Analytics</h3>
            <p>Volume, PRs, muscle group balance — every metric charted beautifully so you can see exactly what's working.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M19.07 19.07A10 10 0 0 0 4.93 4.93" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></svg>
            </div>
            <h3>Fully Customizable</h3>
            <p>Build your own exercises, create custom routines. openworkout adapts to your training style — not the other way around.</p>
          </div>

          <div className="feature-card feature-card--large feature-card--right">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <h3>Open Source</h3>
            <p>Every line of code is public. Audit it, fork it, contribute to it, or self-host it. Community-driven development means features that athletes actually want.</p>
            <ul className="feature-list">
              <li>MIT licensed — free forever</li>
              <li>Community-contributed exercises</li>
              <li>No vendor lock-in</li>
              <li>Transparent roadmap</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY OPEN SOURCE */}
      <section className="why-section" id="why">
        <div className="why-inner">
          <span className="section-tag">Open Source</span>
          <h2>Software you can trust<br />because you can see it.</h2>
          <p className="why-sub">Most fitness apps monetize your data. openworkout monetizes nothing — it's free, open, and auditable by anyone.</p>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-num">01</span>
              <h4>Audit the code</h4>
              <p>Every line is on GitHub. See exactly how your data is stored, how analytics are computed, and what happens when you press delete.</p>
            </div>
            <div className="why-card">
              <span className="why-num">02</span>
              <h4>Shape the roadmap</h4>
              <p>Feature missing? Open an issue or submit a PR. The community decides what gets built next — not a product team chasing engagement metrics.</p>
            </div>
            <div className="why-card">
              <span className="why-num">03</span>
              <h4>Run it forever</h4>
              <p>Apps shut down. Open source doesn't. Fork it, self-host it, or maintain it yourself — your workout history is never held hostage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="github">
        <div className="cta-inner">
          <img src="/logo.png" alt="openworkout" className="cta-logo" />
          <h2>Start tracking.<br />No strings attached.</h2>
          <p>Free. Open source. Built for athletes who own their data.</p>
          <div className="cta-actions cta-store-row">
            <a href="#" className="store-badge store-badge--lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <span className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#" className="store-badge store-badge--lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon"><path d="M8 5.14v14l11-7-11-7z" /></svg>
              <span className="store-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
          <span className="cta-license">MIT License &nbsp;&#9670;&nbsp; Free forever</span>
        </div>
      </section>

      <Footer />
    </>
  )
}
