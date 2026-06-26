function App() {
  const path = window.location.pathname;

  if (path === "/yolanda") {
    return <YolandaPage />;
  }

  return <HomePage />;
}

function HomePage() {
  return (
    <main style={styles.homePage}>
      <nav style={styles.nav}>
        <a href="/" style={styles.logo}>PETER OLAMIDE</a>
        <div style={styles.navLinks}>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#focus" style={styles.navLink}>Focus</a>
          <a href="/yolanda" style={styles.navLink}>Project L</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <p style={styles.kicker}>PETER OLAMIDE</p>

        <h1 style={styles.homeTitle}>
          Building businesses.
          <br />
          Building products.
          <br />
          Building experiences.
        </h1>

        <p style={styles.homeSub}>
          A digital home for my projects, ventures, experiments and ideas.
        </p>

        <div style={styles.heroButtons}>
          <a href="#projects" style={styles.homeButton}>
            Explore Projects →
          </a>
          <a href="/yolanda" style={styles.secondaryButton}>
            Enter Project L
          </a>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <p style={styles.sectionKicker}>CURRENT PROJECTS</p>
        <h2 style={styles.sectionTitle}>What I’m building</h2>

        <div style={styles.homeGrid}>
          <HomeCard
            title="Rarley"
            label="Venture"
            text="Brokerage, rare finds and creator-led commerce."
          />
          <HomeCard
            title="Analytics"
            label="Portfolio"
            text="SQL, Power BI and business intelligence projects."
          />
          <HomeCard
            title="AI Experiments"
            label="Lab"
            text="Small tools, automation ideas and product experiments."
          />
          <HomeCard
            title="Project L"
            label="Private Research"
            text="A classified internal portal built for one very specific collaborator."
            link="/yolanda"
          />
        </div>
      </section>

      <section id="focus" style={styles.focusSection}>
        <p style={styles.sectionKicker}>CURRENT FOCUS</p>

        <div style={styles.focusGrid}>
          <FocusItem title="Career" text="Data, analytics, business intelligence and product-facing roles." />
          <FocusItem title="Business" text="Building Rarley from idea to first real deals." />
          <FocusItem title="Creative" text="Music, weekly playlists, writing and digital experiments." />
        </div>
      </section>

      <footer style={styles.homeFooter}>
        peterolamide.com — built from scratch.
      </footer>
    </main>
  );
}

function HomeCard({ title, label, text, link }) {
  return (
    <a href={link || "#"} style={styles.homeCard}>
      <p style={styles.cardLabel}>{label}</p>
      <h3 style={styles.homeCardTitle}>{title}</h3>
      <p style={styles.homeCardText}>{text}</p>
      <span style={styles.cardArrow}>View →</span>
    </a>
  );
}

function FocusItem({ title, text }) {
  return (
    <div style={styles.focusItem}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function YolandaPage() {
  return (
    <main style={styles.yPage}>
      <section style={styles.yHero}>
        <p style={styles.access}>LEVEL 4 ACCESS GRANTED</p>

        <h1 style={styles.projectTitle}>Project L</h1>

        <p style={styles.projectSub}>
          Internal Research Portal: LAMi × Yolanda
        </p>

        <div style={styles.statusPill}>
          <span style={styles.greenDot}></span>
          ACTIVE — Phase II: Food Research
        </div>
      </section>

      <section style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statNumber}>03</p>
          <p style={styles.statLabel}>Dates Completed</p>
        </div>

        <div style={styles.statCard}>
          <p style={styles.statNumber}>98%</p>
          <p style={styles.statLabel}>Banter Accuracy</p>
        </div>

        <div style={styles.statCard}>
          <p style={styles.statNumber}>High</p>
          <p style={styles.statLabel}>Supportive Bullying Risk</p>
        </div>
      </section>

      <section style={styles.cardGrid}>
        <PortalCard
          accent="#9BE7C0"
          title="Weekly Brief"
          label="Transmission 001"
          text="Updated weekly. Music selected using questionable but confident methodology."
          button="Open Playlist →"
        />

        <PortalCard
          accent="#FFD166"
          title="Current Mission"
          label="Food Research"
          text="Locate strong Asian food candidates. Order too much. Pretend it was research."
          button="View Mission →"
        />

        <PortalCard
          accent="#8EC5FF"
          title="Performance Review"
          label="Quarterly Assessment"
          text="Humour: 98%. Food compatibility: promising. Calling me “mum”: under investigation."
          button="Review File →"
        />

        <PortalCard
          accent="#FF8FA3"
          title="Incident Log"
          label="Case Notes"
          text="Accused LAMi of sunbathing. Survived statistics. Made WhatsApp useful again."
          button="Open Log →"
        />
      </section>

      <section style={styles.timeline}>
        <p style={styles.sectionKicker}>CURRENT TIMELINE</p>

        <div style={styles.timelineRow}>
          <span>🌸</span>
          <p>Flowers delivered successfully</p>
        </div>

        <div style={styles.timelineRow}>
          <span>📚</span>
          <p>Book recommendations exchanged</p>
        </div>

        <div style={styles.timelineRow}>
          <span>🍜</span>
          <p>Asian food research pending</p>
        </div>
      </section>

      <footer style={styles.footer}>
        Prepared by LAMi • Department of Extremely Unnecessary Reports
      </footer>
    </main>
  );
}

function PortalCard({ accent, title, label, text, button }) {
  return (
    <div style={styles.portalCard}>
      <div style={{ ...styles.accentLine, background: accent }}></div>
      <p style={styles.cardLabel}>{label}</p>
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardText}>{text}</p>
      <button style={styles.cardButton}>{button}</button>
    </div>
  );
}

const styles = {
  homePage: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    fontFamily: "Inter, Arial, sans-serif",
  },

  nav: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 42px",
    background: "rgba(5,5,5,0.72)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  logo: {
    color: "white",
    textDecoration: "none",
    letterSpacing: "4px",
    fontSize: "12px",
    fontWeight: "700",
  },

  navLinks: {
    display: "flex",
    gap: "22px",
  },

  navLink: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "14px",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "100px 40px 40px",
  },

  kicker: {
    letterSpacing: "8px",
    fontSize: "12px",
    color: "#888",
    marginBottom: "26px",
  },

  homeTitle: {
    fontSize: "clamp(38px, 8vw, 86px)",
    lineHeight: "1.02",
    margin: "0",
    letterSpacing: "-3px",
  },

  homeSub: {
    maxWidth: "620px",
    color: "#aaa",
    fontSize: "18px",
    lineHeight: "1.7",
    marginTop: "28px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    marginTop: "42px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  homeButton: {
    padding: "15px 34px",
    border: "1px solid white",
    borderRadius: "999px",
    color: "black",
    background: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "700",
  },

  secondaryButton: {
    padding: "15px 34px",
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: "999px",
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
  },

  section: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "70px 40px",
  },

  sectionKicker: {
    letterSpacing: "4px",
    color: "#888",
    fontSize: "12px",
    marginBottom: "18px",
  },

  sectionTitle: {
    fontSize: "clamp(34px, 5vw, 58px)",
    margin: "0 0 28px",
    letterSpacing: "-2px",
  },

  homeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px",
  },

  homeCard: {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    padding: "28px",
    minHeight: "250px",
    color: "white",
    textDecoration: "none",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
  },

  homeCardTitle: {
    fontSize: "28px",
    margin: "16px 0",
  },

  homeCardText: {
    color: "#aaa",
    lineHeight: "1.6",
  },

  cardArrow: {
    display: "inline-block",
    marginTop: "20px",
    color: "#fff",
    fontWeight: "700",
  },

  focusSection: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "30px 40px 90px",
  },

  focusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },

  focusItem: {
    borderTop: "1px solid rgba(255,255,255,0.16)",
    paddingTop: "20px",
  },

  homeFooter: {
    textAlign: "center",
    color: "#777",
    padding: "40px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  yPage: {
    minHeight: "100vh",
    background: "#f7f3ea",
    color: "#111",
    fontFamily: "Inter, Arial, sans-serif",
    padding: "42px",
  },

  yHero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
  },

  access: {
    letterSpacing: "8px",
    fontSize: "11px",
    color: "#999",
    marginBottom: "18px",
    textTransform: "uppercase",
  },

  projectTitle: {
    fontSize: "clamp(56px, 8vw, 88px)",
    fontWeight: "800",
    lineHeight: "0.95",
    letterSpacing: "-4px",
    margin: "0",
  },

  projectSub: {
    fontSize: "18px",
    color: "#666",
    marginTop: "16px",
    marginBottom: "28px",
    fontWeight: "500",
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 22px",
    borderRadius: "999px",
    background: "#111",
    color: "white",
    fontWeight: "700",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },

  greenDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 18px #4ade80",
  },

  statsGrid: {
    maxWidth: "1000px",
    margin: "24px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  statCard: {
    background: "white",
    border: "1px solid #e5e0d5",
    borderRadius: "24px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
  },

  statNumber: {
    fontSize: "34px",
    fontWeight: "800",
    margin: "0",
  },

  statLabel: {
    color: "#666",
    marginBottom: "0",
  },

  cardGrid: {
    maxWidth: "1100px",
    margin: "28px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },

  portalCard: {
    position: "relative",
    background: "#151515",
    color: "white",
    borderRadius: "28px",
    padding: "28px",
    minHeight: "260px",
    overflow: "hidden",
    boxShadow: "0 22px 50px rgba(0,0,0,0.2)",
  },

  accentLine: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "6px",
  },

  cardLabel: {
    color: "#aaa",
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginTop: "8px",
  },

  cardTitle: {
    fontSize: "28px",
    margin: "14px 0",
  },

  cardText: {
    color: "#d7d7d7",
    lineHeight: "1.6",
  },

  cardButton: {
    marginTop: "18px",
    padding: "11px 18px",
    borderRadius: "999px",
    border: "1px solid #444",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },

  timeline: {
    maxWidth: "900px",
    margin: "46px auto 0",
    background: "white",
    borderRadius: "28px",
    padding: "30px",
    border: "1px solid #e5e0d5",
  },

  timelineRow: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    borderTop: "1px solid #eee",
    padding: "14px 0",
  },

  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#888",
    fontSize: "13px",
  },
};

export default App;