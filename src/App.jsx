import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [access, setAccess] = useState(false);
  const [code, setCode] = useState("");

  const PROJECT_L_CODE = "19021998";

  const enterArchives = () => {
    if (code.trim() === PROJECT_L_CODE) {
      setAccess(true);
    } else {
      alert("Access denied. Archive code not recognised.");
    }
  };

  return (
    <main style={styles.app}>
      <nav style={styles.nav}>
        <button onClick={() => setPage("home")} style={styles.logo}>
          PETER OLAMIDE
        </button>

        <div style={styles.navLinks}>
          <button onClick={() => setPage("projects")} style={styles.navLink}>Projects</button>
          <button onClick={() => setPage("focus")} style={styles.navLink}>Focus</button>
          <button onClick={() => setPage("projectL")} style={styles.navLink}>Archives</button>
        </div>
      </nav>

      {page === "home" && (
        <section style={styles.hero}>
          <p style={styles.eyebrow}>PETER OLAMIDE</p>
          <h1 style={styles.heroTitle}>
            Building products.<br />Building experiences.
          </h1>
          <p style={styles.heroText}>
            A collection of products, experiments, and ideas I&apos;m bringing to life.
          </p>

          <div style={styles.buttonRow}>
            <button onClick={() => setPage("projects")} style={styles.primaryBtn}>
              Explore Projects →
            </button>
            <button onClick={() => setPage("projectL")} style={styles.secondaryBtn}>
              The Project L Archives
            </button>
          </div>
        </section>
      )}

      {page === "projects" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>PUBLIC FILES</p>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <p style={styles.sectionText}>
            A growing collection of ventures, experiments, AI ideas, digital products, and concepts currently being built.
          </p>
        </section>
      )}

      {page === "focus" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>CURRENT OPERATING SYSTEM</p>
          <h2 style={styles.sectionTitle}>Focus</h2>
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
            Private files, weekly uploads, GS records, mission notes, and highly unnecessary documentation.
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

          <p style={styles.hint}>Hint: 19xxxx98.</p>
        </section>
      )}

      {page === "projectL" && access && <ProjectLArchives />}
    </main>
  );
}

function ProjectLArchives() {
  const spotifyLink = "https://open.spotify.com/";

  return (
    <section style={styles.projectPage}>
      <div style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>ACCESS GRANTED</p>
        <h1 style={styles.projectTitle}>The Project L Archives</h1>

        <p style={styles.projectSub}>
          Mission updates, GS balance, weekly music, and ongoing classified nonsense.
        </p>

        <div style={styles.status}>
          <span style={styles.statusDot}></span>
          ACTIVE
        </div>
      </div>

      <div style={styles.quoteBox}>
        <p>
          “I may not be able to give you the world, but I can promise you an interesting life.”
        </p>
      </div>

      <div style={styles.statsGrid}>
        <Stat number="03" label="Dates Completed" />
        <Stat number="1 GS" label="LAMi Balance" />
        <Stat number="1 GS" label="Yolanda Balance" />
      </div>

      <div style={styles.archiveGrid}>
        <ArchiveCard
          title="GS Wallet"
          subtitle="Gold Star Economy"
          body="LAMi — 1 GS ⭐ | Yolanda — 1 GS ⭐"
          purple
        />

        <ArchiveCard
          title="Mission Board"
          subtitle="Possible Expeditions"
          body="Tapas mission, Asian food expedition, theatre night, and other pending suggestions."
        />

        <ArchiveCard
          title="Sunday Date"
          subtitle="Restaurant Shortlist"
          body="A list of possible restaurants will be uploaded here before Sunday."
          buttonText="View Sunday Options"
        />

        <ArchiveCard
          title="Achievements"
          subtitle="Recently Unlocked"
          body="Heatwave Survivor, Water Bottle Shaker Prototype, and Pub Classification Dispute."
        />

        <ArchiveCard
          title="Weekly Music"
          subtitle="Transmission 001"
          body="A weekly playlist link lives here."
          link={spotifyLink}
          buttonText="Open Spotify"
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

function ArchiveCard({ title, subtitle, body, purple, link, buttonText }) {
  return (
    <div style={purple ? styles.archiveCardPurple : styles.archiveCard}>
      <p style={styles.archiveSubtitle}>{subtitle}</p>
      <h3 style={styles.archiveCardTitle}>{title}</h3>
      <p style={styles.archiveBody}>{body}</p>

      {buttonText && (
        <a
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          rel="noreferrer"
          style={styles.cardButton}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#050505",
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
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
    gap: "24px",
  },

  navLink: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "16px",
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
    background:
      "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.16), transparent 30%), radial-gradient(circle at 80% 80%, rgba(255,196,87,0.12), transparent 30%), #050505",
  },

  eyebrow: {
    letterSpacing: "12px",
    color: "#888",
    fontSize: "13px",
    marginBottom: "32px",
  },

  heroTitle: {
    fontSize: "clamp(48px, 9vw, 104px)",
    lineHeight: "0.95",
    margin: 0,
    fontWeight: 800,
    letterSpacing: "-5px",
  },

  heroText: {
    maxWidth: "720px",
    color: "#aaa",
    fontSize: "clamp(19px, 3vw, 30px)",
    lineHeight: "1.45",
    marginTop: "38px",
  },

  buttonRow: {
    display: "flex",
    gap: "16px",
    marginTop: "42px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryBtn: {
    padding: "18px 36px",
    borderRadius: "999px",
    border: "none",
    background: "#fff",
    color: "#000",
    fontWeight: 800,
    fontSize: "16px",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "18px 36px",
    borderRadius: "999px",
    border: "1px solid rgba(168,85,247,0.55)",
    background: "rgba(168,85,247,0.12)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
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
    background:
      "radial-gradient(circle at 50% 30%, rgba(168,85,247,0.32), transparent 35%), #050505",
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
    background:
      "radial-gradient(circle at 20% 15%, rgba(168,85,247,0.35), transparent 35%), radial-gradient(circle at 85% 30%, rgba(255,196,87,0.12), transparent 30%), linear-gradient(180deg, #12041f, #050505 46%)",
    minHeight: "100vh",
    padding: "90px 9%",
  },

  projectHeader: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 50px",
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
    padding: "18px 34px",
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

  quoteBox: {
    maxWidth: "850px",
    margin: "0 auto 46px",
    padding: "34px",
    borderRadius: "30px",
    textAlign: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#eee",
    fontSize: "clamp(22px, 4vw, 36px)",
    lineHeight: 1.35,
    fontFamily: "Georgia, serif",
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
    minHeight: "230px",
    padding: "30px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(16px)",
  },

  archiveCardPurple: {
    minHeight: "230px",
    padding: "30px",
    borderRadius: "30px",
    background: "linear-gradient(145deg, rgba(168,85,247,0.34), rgba(255,255,255,0.06))",
    border: "1px solid rgba(168,85,247,0.55)",
    backdropFilter: "blur(16px)",
  },

  archiveSubtitle: {
    color: "#c084fc",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "12px",
  },

  archiveCardTitle: {
    fontSize: "30px",
    margin: "12px 0",
  },

  archiveBody: {
    color: "#ddd",
    lineHeight: 1.6,
    fontSize: "17px",
  },

  cardButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "13px 20px",
    borderRadius: "999px",
    background: "#fff",
    color: "#000",
    fontWeight: 800,
    textDecoration: "none",
  },
};

export default App;