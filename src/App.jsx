import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [access, setAccess] = useState(false);
  const [code, setCode] = useState("");

  const PROJECT_L_CODE = "HER_BIRTHDAY_HERE"; // example: "220897"

  const enterArchives = () => {
    if (code.trim() === PROJECT_L_CODE) {
      setAccess(true);
    } else {
      alert("Access denied. Incorrect archive code.");
    }
  };

  return (
    <main style={styles.app}>
      <nav style={styles.nav}>
        <button onClick={() => setPage("home")} style={styles.logo}>
          PETER OLAMIDE
        </button>

        <div style={styles.navLinks}>
          <button onClick={() => setPage("projects")} style={styles.navLink}>
            Projects
          </button>
          <button onClick={() => setPage("focus")} style={styles.navLink}>
            Focus
          </button>
          <button onClick={() => setPage("projectL")} style={styles.navLink}>
            Project L
          </button>
        </div>
      </nav>

      {page === "home" && (
        <section style={styles.hero}>
          <div style={styles.glowOne}></div>
          <div style={styles.glowTwo}></div>

          <p style={styles.eyebrow}>PETER OLAMIDE</p>

          <h1 style={styles.heroTitle}>
            Building products.
            <br />
            Building experiences.
          </h1>

          <p style={styles.heroText}>
            A collection of products, experiments, and ideas I&apos;m bringing
            to life.
          </p>

          <div style={styles.buttonRow}>
            <button onClick={() => setPage("projects")} style={styles.primaryBtn}>
              Explore Projects →
            </button>
            <button onClick={() => setPage("projectL")} style={styles.secondaryBtn}>
              Enter Project L
            </button>
          </div>
        </section>
      )}

      {page === "projects" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>PUBLIC FILES</p>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <p style={styles.sectionText}>
            A growing collection of ventures, experiments, AI ideas, digital
            products, and concepts currently being built.
          </p>

          <div style={styles.grid}>
            <Card
              title="Rarley"
              text="A future marketplace and brokerage ecosystem for rare items, creator-owned pieces, and meaningful resale."
              tag="Venture"
            />
            <Card
              title="AI Experiments"
              text="Small practical tools, chatbots, workflows, and automation ideas designed to solve real problems."
              tag="Lab"
            />
            <Card
              title="Hospitality Concepts"
              text="Ideas around food, drinks, events, service, Nigerian-inspired cocktails, and social experiences."
              tag="Experience"
            />
            <Card
              title="Project L"
              text="A private evolving experience hidden inside the website."
              tag="Classified"
            />
          </div>
        </section>
      )}

      {page === "focus" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>CURRENT OPERATING SYSTEM</p>
          <h2 style={styles.sectionTitle}>Focus</h2>
          <p style={styles.sectionText}>
            The areas I&apos;m actively building around right now.
          </p>

          <div style={styles.focusBox}>
            <FocusItem label="Career & Analytics" value="80%" />
            <FocusItem label="Rarley" value="55%" />
            <FocusItem label="Website Ecosystem" value="70%" />
            <FocusItem label="Health & Discipline" value="45%" />
            <FocusItem label="Project L" value="Active" purple />
          </div>
        </section>
      )}

      {page === "projectL" && !access && (
        <section style={styles.archiveLogin}>
          <div style={styles.purpleGlow}></div>

          <p style={styles.projectEyebrow}>LEVEL 4 ACCESS</p>
          <h2 style={styles.archiveTitle}>The Project L Archives</h2>

          <p style={styles.archiveText}>
            This area contains classified files, weekly uploads, GS records,
            mission notes, and highly unnecessary documentation.
          </p>

          <div style={styles.loginBox}>
            <label style={styles.label}>Archive Access Code</label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter access code"
              style={styles.input}
            />
            <button onClick={enterArchives} style={styles.purpleBtn}>
              Unlock Archives
            </button>
          </div>

          <p style={styles.hint}>
            Hint: the code is personal, not technical.
          </p>
        </section>
      )}

      {page === "projectL" && access && (
        <ProjectLArchives />
      )}
    </main>
  );
}

function ProjectLArchives() {
  return (
    <section style={styles.projectPage}>
      <div style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>ACCESS GRANTED</p>
        <h1 style={styles.projectTitle}>The Project L Archives</h1>
        <p style={styles.projectSub}>
          Internal files, mission updates, GS balance, and ongoing classified
          nonsense.
        </p>

        <div style={styles.status}>
          <span style={styles.statusDot}></span>
          ACTIVE — Phase II: Food Research
        </div>
      </div>

      <div style={styles.statsGrid}>
        <Stat number="03" label="Dates Completed" />
        <Stat number="98%" label="Banter Accuracy" />
        <Stat number="High" label="Supportive Bullying Risk" />
      </div>

      <div style={styles.archiveGrid}>
        <ArchiveCard
          title="GS Wallet"
          subtitle="Gold Star Economy"
          body="LAMi: 1 GS ⭐  |  Yolanda: 1 GS ⭐"
          purple
        />

        <ArchiveCard
          title="Mission Board"
          subtitle="Potential Expeditions"
          body="Tapas mission, Asian food expedition, book exchange, theatre night, and other pending suggestions."
        />

        <ArchiveCard
          title="Achievements"
          subtitle="Recently Unlocked"
          body="Heatwave Survivor, Water Bottle Shaker Prototype, Breaking News, and Pub Classification Dispute."
        />

        <ArchiveCard
          title="Weekly Brief"
          subtitle="Transmission 001"
          body="Updated weekly. Music, notes, missions, GS updates, and suspiciously accurate observations."
        />

        <ArchiveCard
          title="Breaking News"
          subtitle="The Project L Times"
          body="Local woman declares new mortal enemy. Wine confirmed as official response."
          purple
        />

        <ArchiveCard
          title="Archive Notes"
          subtitle="Classified Recipient"
          body="Further files may appear without warning. Continued curiosity is advised."
        />
      </div>
    </section>
  );
}

function Card({ title, text, tag }) {
  return (
    <div style={styles.card}>
      <span style={styles.tag}>{tag}</span>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

function FocusItem({ label, value, purple }) {
  return (
    <div style={styles.focusItem}>
      <span>{label}</span>
      <strong style={purple ? styles.purpleText : null}>{value}</strong>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div style={styles.stat}>
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function ArchiveCard({ title, subtitle, body, purple }) {
  return (
    <div style={purple ? styles.archiveCardPurple : styles.archiveCard}>
      <p style={styles.archiveSubtitle}>{subtitle}</p>
      <h3 style={styles.archiveCardTitle}>{title}</h3>
      <p style={styles.archiveBody}>{body}</p>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#050505",
    color: "#fff",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
  },

  nav: {
    height: "86px",
    padding: "0 9%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.09)",
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(5,5,5,0.86)",
    backdropFilter: "blur(16px)",
  },

  logo: {
    background: "none",
    border: "none",
    color: "#fff",
    fontWeight: 800,
    letterSpacing: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: "28px",
  },

  navLink: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "17px",
    cursor: "pointer",
  },

  hero: {
    minHeight: "calc(100vh - 86px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "80px 24px",
    position: "relative",
    overflow: "hidden",
  },

  glowOne: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(139,92,246,0.22)",
    filter: "blur(90px)",
    top: "18%",
    left: "12%",
  },

  glowTwo: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "rgba(255,196,87,0.11)",
    filter: "blur(90px)",
    bottom: "20%",
    right: "14%",
  },

  eyebrow: {
    letterSpacing: "14px",
    color: "#888",
    fontSize: "14px",
    marginBottom: "32px",
    position: "relative",
    zIndex: 2,
  },

  heroTitle: {
    fontSize: "clamp(54px, 9vw, 104px)",
    lineHeight: "0.95",
    margin: 0,
    fontWeight: 800,
    letterSpacing: "-6px",
    position: "relative",
    zIndex: 2,
  },

  heroText: {
    maxWidth: "720px",
    color: "#aaa",
    fontSize: "clamp(20px, 3vw, 31px)",
    lineHeight: "1.45",
    marginTop: "38px",
    position: "relative",
    zIndex: 2,
  },

  buttonRow: {
    display: "flex",
    gap: "18px",
    marginTop: "42px",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },

  primaryBtn: {
    padding: "22px 42px",
    borderRadius: "999px",
    border: "none",
    background: "#fff",
    color: "#000",
    fontWeight: 800,
    fontSize: "18px",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "22px 42px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.03)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "18px",
    cursor: "pointer",
  },

  section: {
    padding: "110px 9%",
    minHeight: "100vh",
  },

  sectionTitle: {
    fontSize: "clamp(48px, 8vw, 92px)",
    margin: "0 0 20px",
    letterSpacing: "-4px",
  },

  sectionText: {
    color: "#aaa",
    fontSize: "24px",
    maxWidth: "780px",
    lineHeight: 1.5,
  },

  grid: {
    marginTop: "60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "22px",
  },

  card: {
    border: "1px solid rgba(255,255,255,0.12)",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    borderRadius: "28px",
    padding: "30px",
  },

  tag: {
    color: "#d6b35a",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "3px",
  },

  cardTitle: {
    fontSize: "30px",
    marginBottom: "14px",
  },

  cardText: {
    color: "#aaa",
    lineHeight: 1.6,
    fontSize: "16px",
  },

  focusBox: {
    marginTop: "50px",
    maxWidth: "720px",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    overflow: "hidden",
  },

  focusItem: {
    padding: "24px 28px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: "18px",
  },

  purpleText: {
    color: "#a855f7",
  },

  archiveLogin: {
    minHeight: "calc(100vh - 86px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "70px 24px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  purpleGlow: {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "rgba(168,85,247,0.28)",
    filter: "blur(120px)",
  },

  projectEyebrow: {
    letterSpacing: "10px",
    color: "#a855f7",
    fontSize: "13px",
    position: "relative",
    zIndex: 2,
  },

  archiveTitle: {
    fontSize: "clamp(48px, 8vw, 92px)",
    margin: "10px 0 20px",
    letterSpacing: "-4px",
    position: "relative",
    zIndex: 2,
  },

  archiveText: {
    maxWidth: "680px",
    color: "#aaa",
    fontSize: "21px",
    lineHeight: 1.5,
    position: "relative",
    zIndex: 2,
  },

  loginBox: {
    marginTop: "38px",
    width: "min(460px, 100%)",
    padding: "28px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(168,85,247,0.4)",
    position: "relative",
    zIndex: 2,
  },

  label: {
    display: "block",
    textAlign: "left",
    color: "#bbb",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "18px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#080808",
    color: "#fff",
    fontSize: "18px",
    marginBottom: "16px",
  },

  purpleBtn: {
    width: "100%",
    padding: "18px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #8b5cf6, #c084fc)",
    color: "#fff",
    fontWeight: 800,
    fontSize: "17px",
    cursor: "pointer",
  },

  hint: {
    marginTop: "18px",
    color: "#777",
    position: "relative",
    zIndex: 2,
  },

  projectPage: {
    background: "linear-gradient(180deg, #10031d, #050505 45%)",
    minHeight: "100vh",
    padding: "90px 9%",
  },

  projectHeader: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 60px",
  },

  projectTitle: {
    fontSize: "clamp(48px, 8vw, 92px)",
    margin: "10px 0",
    letterSpacing: "-4px",
  },

  projectSub: {
    color: "#aaa",
    fontSize: "22px",
    lineHeight: 1.5,
  },

  status: {
    margin: "32px auto 0",
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "18px 28px",
    borderRadius: "999px",
    background: "#111",
    border: "1px solid rgba(168,85,247,0.45)",
    fontWeight: 800,
  },

  statusDot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 22px #4ade80",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },

  stat: {
    background: "#fff",
    color: "#070707",
    padding: "32px",
    borderRadius: "28px",
    textAlign: "center",
  },

  stat: {
    background: "#fff",
    color: "#070707",
    padding: "32px",
    borderRadius: "28px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  archiveGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },

  archiveCard: {
    minHeight: "210px",
    padding: "30px",
    borderRadius: "30px",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.11)",
  },

  archiveCardPurple: {
    minHeight: "210px",
    padding: "30px",
    borderRadius: "30px",
    background:
      "linear-gradient(145deg, rgba(168,85,247,0.28), rgba(255,255,255,0.05))",
    border: "1px solid rgba(168,85,247,0.5)",
  },

  archiveSubtitle: {
    color: "#a855f7",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "12px",
  },

  archiveCardTitle: {
    fontSize: "30px",
    margin: "12px 0",
  },

  archiveBody: {
    color: "#bbb",
    lineHeight: 1.6,
  },
};

export default App;
