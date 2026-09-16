import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Nav />

      <section className="legal">
        <div className="legal-inner">
          <span className="section-tag">Privacy Policy</span>
          <h1>Your data never leaves your device.</h1>
          <p className="legal-updated">Last updated: July 28, 2026</p>

          <p>openworkout is a workout tracking app built around a simple principle: your training data belongs to you, not to us. This policy explains exactly what that means.</p>

          <h2>Summary</h2>
          <ul className="legal-list">
            <li>No account or sign-up is required to use openworkout.</li>
            <li>We do not collect, transmit, or have access to any of your personal or workout data.</li>
            <li>All data — workouts, routines, exercises, progress history — is stored locally on your device only.</li>
            <li>We do not use analytics, trackers, or advertising SDKs.</li>
            <li>We do not share data with third parties, because we never receive any in the first place.</li>
          </ul>

          <h2>Data collection</h2>
          <p>openworkout does not collect any personal data. There are no user accounts, no sign-in flows, and no servers that your data is sent to. Everything you enter into the app — exercises, sets, reps, weights, routines, and history — is written to local storage on your device and stays there.</p>

          <h2>Data storage</h2>
          <p>All app data is stored locally on your device using standard on-device storage. If you back up your device through your operating system's own backup mechanism (e.g. Google's device backup), that backup is managed entirely by the operating system, not by openworkout.</p>

          <h2>Data sharing</h2>
          <p>We do not share, sell, or transmit any data to third parties, advertisers, or analytics providers, because openworkout has no backend server and collects nothing to share.</p>

          <h2>Permissions</h2>
          <p>Any device permissions requested by the app are used solely to provide app functionality (for example, local storage access to save your workouts) and are never used to collect or transmit data off your device.</p>

          <h2>Children's privacy</h2>
          <p>openworkout does not knowingly collect any data from anyone, including children, since it does not collect data at all.</p>

          <h2>Open source</h2>
          <p>openworkout is open source. You can review the full source code at any time to verify these claims yourself.</p>

          <h2>Changes to this policy</h2>
          <p>If this policy ever changes — for example, if a future version of the app introduces optional cloud sync — this page will be updated and the "Last updated" date above will reflect the change.</p>

          <h2>Contact</h2>
          <p>Questions about this policy or the app can be raised via <a href="https://github.com/open-workout/openworkout-mobile/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> on the openworkout-mobile repository.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
