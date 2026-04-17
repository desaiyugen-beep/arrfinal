const features = [
  {
    title: 'Curated Private Deals',
    text: 'Access carefully screened real estate and private market opportunities built for long-term value, disciplined risk, and investor clarity.',
  },
  {
    title: 'Transparent Structure',
    text: 'Straightforward investment summaries, sponsor details, expected timelines, and a cleaner way to understand each opportunity before you commit.',
  },
  {
    title: 'Relationship-First Approach',
    text: 'We focus on trust, communication, and thoughtful capital placement instead of flashy promises or overly complex language.',
  },
]

const steps = [
  'Create your investor profile and tell us your interests.',
  'Review curated opportunities with clear deal highlights.',
  'Connect with our team and move forward with confidence.',
]

const deals = [
  {
    name: 'Hospitality Growth',
    type: 'Select Hotel Redevelopment',
    desc: 'Value-add hospitality projects in strong travel corridors with repositioning potential and active asset management.',
  },
  {
    name: 'Urban Mixed-Use',
    type: 'Retail + Residential',
    desc: 'Balanced mixed-use developments designed for cash flow resilience and long-term neighborhood demand.',
  },
  {
    name: 'Boutique Commercial',
    type: 'Small Format Assets',
    desc: 'Targeted commercial opportunities with room for operational improvement and stronger lease performance.',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-glow hero-glow-right" />
        <div className="hero-glow hero-glow-left" />

        <div className="container nav-wrap">
          <header className="top-nav card glass">
            <div>
              <div className="eyebrow brand-name">Arambhi Investments</div>
              <div className="subtle-text">Private capital. Real opportunities. Clear decisions.</div>
            </div>
            <nav className="nav-links">
              <a href="#about">About</a>
              <a href="#opportunities">Opportunities</a>
              <a href="#process">How It Works</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
        </div>

        <div className="container hero-grid">
          <div>
            <div className="pill">Built for modern private investors</div>
            <h1>
              A modern investment platform for people who want{' '}
              <span>clarity, access, and confidence</span>.
            </h1>
            <p className="hero-copy">
              Arambhi Investments connects qualified investors with thoughtfully selected private opportunities across real estate and growth-focused asset classes. Our approach is simple: fewer gimmicks, better communication, and smarter presentation.
            </p>
            <div className="button-row">
              <a href="#contact" className="btn btn-primary">Request Access</a>
              <a href="#opportunities" className="btn btn-secondary">Explore Opportunities</a>
            </div>

            <div className="stats-grid">
              <div className="card stat-card">
                <h3>Investor-First</h3>
                <p>Simple presentation, thoughtful due diligence, cleaner communication.</p>
              </div>
              <div className="card stat-card">
                <h3>Selective</h3>
                <p>Focused deal pipeline instead of overwhelming volume.</p>
              </div>
              <div className="card stat-card">
                <h3>Professional</h3>
                <p>A premium brand presence that feels credible and modern.</p>
              </div>
            </div>
          </div>

          <div className="hero-panel-wrap">
            <div className="hero-panel-shadow" />
            <div className="card hero-panel">
              <div className="card panel-inner">
                <div className="panel-header">
                  <div>
                    <div className="label-text">Featured Opportunity</div>
                    <div className="panel-title">Select Hospitality Fund</div>
                  </div>
                  <div className="status-badge">Open for Review</div>
                </div>

                <div className="panel-grid">
                  <div className="metric-box">
                    <div className="label-text">Asset Focus</div>
                    <div className="metric-value">Hospitality / Value Add</div>
                  </div>
                  <div className="metric-box">
                    <div className="label-text">Investment Horizon</div>
                    <div className="metric-value">Medium to Long Term</div>
                  </div>
                  <div className="metric-box">
                    <div className="label-text">Approach</div>
                    <div className="metric-value">Active Management</div>
                  </div>
                  <div className="metric-box">
                    <div className="label-text">Investor Experience</div>
                    <div className="metric-value">Clear & Guided</div>
                  </div>
                </div>

                <div className="card note-box">
                  This sample panel gives the homepage a premium investment feel without copying the reference site. You can later replace this with real deal metrics, legal disclaimers, and your investor onboarding flow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">About us</div>
            <h2>A stronger digital identity for a serious investment brand.</h2>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <div key={item.title} className="card feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section-pad section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Opportunities</div>
              <h2>Investment themes we can highlight on your platform</h2>
            </div>
            <p>
              These sections are placeholders with smart positioning. Once you have final deal details, we can turn this into a live investor-facing website with real offerings, FAQs, and compliance language.
            </p>
          </div>

          <div className="deal-grid">
            {deals.map((deal) => (
              <div key={deal.name} className="card deal-card">
                <div className="deal-type">{deal.type}</div>
                <h3>{deal.name}</h3>
                <p>{deal.desc}</p>
                <div className="deal-link">View sample overview →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="container process-grid">
          <div>
            <div className="eyebrow">How it works</div>
            <h2>A smoother path from interest to investment.</h2>
            <p className="section-copy">
              Your site should not just look premium. It should also help users understand what to do next. This flow makes your company feel organized and trustworthy.
            </p>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={step} className="card step-card">
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-accent">
        <div className="container">
          <div className="card why-grid">
            <div>
              <div className="eyebrow">Why this version works</div>
              <h2>Premium look, original structure, and easier to adapt for your company.</h2>
              <p className="section-copy">
                I designed this with a strong investment-industry feel, but not as a copy. The layout is cleaner, the messaging is more flexible, and it can be expanded into a full site with About, Opportunities, Investor Login, FAQ, and Contact pages.
              </p>
            </div>
            <div className="card add-ons-card">
              <div className="subtle-text">Suggested next additions</div>
              <ul>
                <li>Investor sign-up / qualification form</li>
                <li>Real project gallery or portfolio page</li>
                <li>Legal disclaimer and risk disclosure section</li>
                <li>Team or founder credibility section</li>
                <li>Contact form with calendar booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad contact-pad">
        <div className="container">
          <div className="card contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Let’s build Arambhi Investments into a polished digital brand.</h2>
              <p className="section-copy">
                Replace the text below with your real company details, lead form, and investor intake flow when you’re ready to launch.
              </p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Investment interest" />
              <textarea placeholder="Tell us a little about what you're looking for" rows="5" />
              <button type="submit" className="btn btn-primary btn-full">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
