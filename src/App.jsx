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
            <button onClick={() => setPage("projects")} style={styles.primaryBtn}>Explore Projects →</button>
            <button onClick={() => setPage("projectL")} style={styles.secondaryBtn}>The Project L Archives</button>
          </div>
        </section>
      )}

      {page === "projects" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>PUBLIC FILES</p>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <p style={styles.sectionText}>
            A growing collection of products, experiments, and ideas I&apos;m bringing to life.
          </p>
        </section>
      )}

      {page === "focus" && (
        <section style={styles.section}>
          <p style={styles.eyebrow}>CURRENT OPERATING SYSTEM</p>
          <h2 style={styles.sectionTitle}>Focus</h2>
        </section>
      )}

      {page === "projectL" && !access && (
        <section style={styles.archiveLogin}>
          <p style={styles.projectEyebrow}>LEVEL 4 ACCESS</p>
          <h2 style={styles.archiveTitle}>The Project L Archives</h2>
          <p style={styles.archiveText}>
            Private files, GS records, Sunday options, and highly unnecessary documentation.
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

          <p style={styles.hint}>Hint: 19xxxxxx98</p>
        </section>
      )}

      {page === "projectL" && access && <ProjectLArchives setPage={setPage} />}
      {page === "sunday" && <SundayOptions setPage={setPage} />}
      {page === "achievements" && <AchievementsPage setPage={setPage} />}
    </main>
  );
}

function ProjectLArchives({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <div style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>ACCESS GRANTED</p>
        <h1 style={styles.projectTitle}>The Project L Archives</h1>
        <p style={styles.projectSub}>
          Mission updates, GS balance, weekly music, and ongoing classified files.
        </p>
        <div style={styles.status}>
          <span style={styles.statusDot}></span>
          ACTIVE
        </div>
      </div>

      <Newspaper />

      <div style={styles.statsGrid}>
        <Stat number="1 GS" label="LAMi Balance" />
        <Stat number="1 GS" label="Yolanda Balance" />
        <Stat number="03" label="Dates Completed" />
      </div>

      <div style={styles.archiveGrid}>
        <ArchiveCard
          title="GS Wallet"
          subtitle="Gold Star Economy"
          body={"LAMi — 1 GS ⭐\nYolanda — 1 GS ⭐"}
          purple
        />

        <ArchiveCard
          title="Mission Board"
          subtitle="Possible Expeditions"
          body="Tapas mission, Asian food expedition, theatre night, and other pending suggestions."
        />

        <ArchiveCard
          title="Restaurant Shortlist"
          subtitle="Sunday Date"
          body=""
          buttonText="View Sunday Options"
          onClick={() => setPage("sunday")}
        />

        <ArchiveCard
          title="Achievement"
          subtitle="Recently Unlocked"
          body=""
          buttonText="View Achievement"
          onClick={() => setPage("achievements")}
        />

        <ArchiveCard
          title="Weekly Music"
          subtitle="Transmission 001"
          body="Spotify playlist link coming soon."
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

function Newspaper() {
  return (
    <div style={styles.newspaper}>
      <div style={styles.paperTop}>
        <h2>The Project L Times</h2>
        <span>LEVEL 4 CLEARANCE</span>
      </div>

      <div style={styles.paperLine}></div>

      <div style={styles.paperMeta}>
        <span>EDITION 001</span>
        <span>SUNDAY FILE</span>
        <span>CONFIDENTIAL</span>
      </div>

      <div style={styles.paperContent}>
        <div>
          <h1>LOCAL WOMAN DECLARES NEW MORTAL ENEMY.</h1>
          <p>
            In a stunning turn of events, sources close to her confirm a new rival
            has emerged. Details remain classified.
          </p>
        </div>

        <div style={styles.paperImage}></div>
      </div>
    </div>
  );
}

function SundayOptions({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <button onClick={() => setPage("projectL")} style={styles.backBtn}>
        ← Back to Archives
      </button>

      <p style={styles.projectEyebrow}>RESTAURANT SHORTLIST</p>
      <h1 style={styles.projectTitle}>Sunday Options</h1>

      <div style={styles.archiveGrid}>
        <ArchiveCard title="Option 01" subtitle="Restaurant" body="Restaurant option will go here." />
        <ArchiveCard title="Option 02" subtitle="Restaurant" body="Restaurant option will go here." />
        <ArchiveCard title="Option 03" subtitle="Restaurant" body="Restaurant option will go here." purple />
      </div>
    </section>
  );
}

function AchievementsPage({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <button onClick={() => setPage("projectL")} style={styles.backBtn}>
        ← Back to Archives
      </button>

      <p style={styles.projectEyebrow}>ACHIEVEMENT FILE</p>
      <h1 style={styles.projectTitle}>Achievements</h1>

      <div style={styles.momentsGrid}>
        <div style={styles.momentCard}>
          <div style={styles.bottleImage}></div>
          <div>
            <p style={styles.archiveSubtitle}>YOLANDA</p>

            <h3>Water Bottle Resourcefulness</h3>
            <p>Turned a simple water bottle into a possible cocktail shaker. Innovation under pressure.</p>

            <h3>6 Hour Stats Exam</h3>
            <p>Locked in for six hours and survived the statistics battlefield.</p>

            <h3>Trust Factor: Streatham Level 100</h3>
            <p>Leaves her bike anywhere. Any time. No fear. Unmatched trust in the neighbourhood.</p>
          </div>
        </div>

        <div style={styles.momentCard}>
          <div>
            <p style={styles.archiveSubtitle}>PETER</p>

            <h3>New Fan</h3>
            <p>The newest addition to the setup. Keeping things cool while building everything.</p>
          </div>

          <div style={styles.fanImage}></div>
        </div>
      </div>
    </section>
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

function ArchiveCard({ title, subtitle, body, purple, buttonText, onClick }) {
  return (
    <div style={purple ? styles.archiveCardPurple : styles.archiveCard}>
      <p style={styles.archiveSubtitle}>{subtitle}</p>
      <h3 style={styles.archiveCardTitle}>{title}</h3>
      {body && <p style={styles.archiveBody}>{body}</p>}

      {buttonText && (
        <button onClick={onClick} style={styles.cardButton}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#030208",
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
  },

  nav: {
    height: "72px",
    padding: "0 4%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(3,2,8,0.92)",
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(14px)",
  },

  logo: {
    background: "none",
    border: "none",
    color: "#fff",
    letterSpacing: "8px",
    fontWeight: 800,
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: "26px",
  },

  navLink: {
    background: "none",
    border: "none",
    color: "#ddd",
    fontSize: "16px",
    cursor: "pointer",
  },

  hero: {
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "24px",
    background:
      "radial-gradient(circle at 70% 20%, rgba(168,85,247,.25), transparent 35%), #050505",
  },

  eyebrow: {
    letterSpacing: "12px",
    color: "#888",
    fontSize: "13px",
  },

  heroTitle: {
    fontSize: "clamp(54px, 9vw, 100px)",
    lineHeight: 0.95,
    letterSpacing: "-5px",
    margin: "28px 0",
  },

  heroText: {
    color: "#aaa",
    fontSize: "clamp(20px, 3vw, 30px)",
    maxWidth: "760px",
    lineHeight: 1.4,
  },

  buttonRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "36px",
  },

  primaryBtn: {
    padding: "18px 36px",
    borderRadius: "999px",
    border: "none",
    fontWeight: 800,
  },

  secondaryBtn: {
    padding: "18px 36px",
    borderRadius: "999px",
    border: "1px solid #a855f7",
    background: "rgba(168,85,247,.15)",
    color: "#fff",
    fontWeight: 800,
  },

  section: {
    padding: "110px 9%",
    minHeight: "100vh",
  },

  sectionTitle: {
    fontSize: "clamp(54px, 8vw, 90px)",
    letterSpacing: "-4px",
  },

  sectionText: {
    color: "#aaa",
    fontSize: "24px",
    maxWidth: "760px",
  },

  archiveLogin: {
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "24px",
    background:
      "radial-gradient(circle at 50% 30%, rgba(168,85,247,.35), transparent 35%), #050505",
  },

  archiveTitle: {
    fontSize: "clamp(50px, 8vw, 90px)",
    margin: "12px 0",
    letterSpacing: "-4px",
  },

  archiveText: {
    color: "#bbb",
    fontSize: "21px",
    maxWidth: "700px",
  },

  loginBox: {
    marginTop: "36px",
    width: "min(480px, 100%)",
    padding: "28px",
    borderRadius: "28px",
    border: "1px solid rgba(168,85,247,.5)",
    background: "rgba(255,255,255,.07)",
  },

  label: {
    display: "block",
    textAlign: "left",
    color: "#ccc",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "18px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,.2)",
    background: "#050505",
    color: "#fff",
    fontSize: "18px",
    marginBottom: "16px",
    boxSizing: "border-box",
  },

  purpleBtn: {
    width: "100%",
    padding: "18px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg,#7c3aed,#c084fc)",
    color: "#fff",
    fontWeight: 800,
    fontSize: "17px",
  },

  hint: {
    color: "#777",
  },

  projectPage: {
    minHeight: "100vh",
    padding: "36px 4% 80px",
    background:
      "radial-gradient(circle at 60% 8%, rgba(168,85,247,.45), transparent 30%), linear-gradient(180deg,#07030f,#030208)",
  },

  projectHeader: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 34px",
  },

  projectEyebrow: {
    color: "#c084fc",
    letterSpacing: "9px",
    fontSize: "13px",
  },

  projectTitle: {
    fontSize: "clamp(44px, 7vw, 72px)",
    margin: "8px 0",
    letterSpacing: "-3px",
  },

  projectSub: {
    color: "#ddd",
    fontSize: "20px",
  },

  status: {
    margin: "20px auto 0",
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 28px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(255,255,255,.08)",
    fontWeight: 800,
  },

  statusDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 18px #22c55e",
  },

  newspaper: {
    maxWidth: "1180px",
    margin: "0 auto 22px",
    padding: "38px",
    borderRadius: "14px",
    color: "#111",
    background: "linear-gradient(135deg,#f3eadc,#d8d0c3)",
    boxShadow: "0 0 50px rgba(168,85,247,.2)",
  },

  paperTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  paperLine: {
    height: "2px",
    background: "#111",
    margin: "8px 0",
  },

  paperMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    fontWeight: 800,
    borderBottom: "1px solid #111",
    paddingBottom: "8px",
  },

  paperContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    marginTop: "18px",
  },

  paperImage: {
    minHeight: "210px",
    borderRadius: "4px",
    background: "linear-gradient(135deg,#111,#555)",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    maxWidth: "1180px",
    margin: "0 auto 20px",
  },

  stat: {
    padding: "30px",
    borderRadius: "18px",
    textAlign: "center",
    border: "1px solid rgba(168,85,247,.25)",
    background: "rgba(255,255,255,.04)",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  archiveGrid: {
    maxWidth: "1180px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  },

  archiveCard: {
    minHeight: "230px",
    padding: "26px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.04)",
  },

  archiveCardPurple: {
    minHeight: "230px",
    padding: "26px",
    borderRadius: "18px",
    border: "1px solid rgba(168,85,247,.55)",
    background: "linear-gradient(135deg,rgba(168,85,247,.35),rgba(255,255,255,.04))",
  },

  archiveSubtitle: {
    color: "#c084fc",
    letterSpacing: "5px",
    fontSize: "12px",
    textTransform: "uppercase",
  },

  archiveCardTitle: {
    color: "#c084fc",
    fontSize: "26px",
    margin: "10px 0",
  },

  archiveBody: {
    whiteSpace: "pre-line",
    color: "#eee",
    lineHeight: 1.6,
  },

  cardButton: {
    marginTop: "20px",
    padding: "12px 22px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg,#6d28d9,#a855f7)",
    color: "#fff",
    fontWeight: 800,
  },

  backBtn: {
    marginBottom: "30px",
    padding: "12px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
  },

  momentsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    maxWidth: "1180px",
    margin: "40px auto",
  },

  momentCard: {
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    gap: "26px",
    padding: "28px",
    borderRadius: "22px",
    border: "1px solid rgba(168,85,247,.35)",
    background: "rgba(255,255,255,.04)",
  },

  bottleImage: {
    minHeight: "280px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#5b21b6,#111)",
  },

  fanImage: {
    minHeight: "280px",
    borderRadius: "18px",
    background: "radial-gradient(circle,#333,#050505)",
  },
};

export default App;