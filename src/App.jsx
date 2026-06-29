import { useState } from "react";

const PROJECT_XL_CODE = "19021998";

const spotifyLink =
  "https://open.spotify.com/playlist/18zI7kOaxYoWCaPSfe6jKh?si=zU-c-mjSReyuQ0N3QZD92g&pi=E1UXCJ_CTk6ED";

const restaurants = [
  ["Tirak", "Thai", "Clapham High Street", "4.5", "£10–50", "Modern Thai option", "Warm, relaxed, and probably the safest strong Sunday pick.", "https://www.google.com/search?q=Tirak+Clapham+High+Street"],
  ["Rosa’s Thai Clapham", "Thai", "Northcote Road", "4.7", "£10–30", "Safe pretty reliable", "Easy, cute, dependable. Good if we want relaxed Thai without overthinking.", "https://www.google.com/search?q=Rosa%27s+Thai+Clapham+Northcote+Road"],
  ["Mulan Noodle", "Chinese", "Acre Lane", "4.7", "£20–30", "Cosy Chinese dinner", "Chilled, warm and good for a food mission with proper comfort energy.", "https://www.google.com/search?q=Mulan+Noodle+Acre+Lane"],
  ["Banana Tree Battersea", "Pan-Asian", "Battersea Rise", "4.6", "£20–30", "Cocktails + food", "Best if we want a livelier option with drinks and sharing plates.", "https://www.google.com/search?q=Banana+Tree+Battersea+Rise"],
  ["Rosa’s Thai Tower Bridge", "Thai", "Tower Bridge", "4.6+", "£10–30", "Food + scenic walk", "Best if we want Thai food plus a river walk after.", "https://rosasthai.com/locations/tower-bridge-restaurant?utm_campaign=gmb&utm_medium=organic&utm_source=local"],
];

function App() {
  const [page, setPage] = useState("home");
  const [access, setAccess] = useState(false);
  const [code, setCode] = useState("");

  const enterArchives = () => {
    if (code.trim() === PROJECT_XL_CODE) {
      setAccess(true);
      setPage("projectXL");
    } else {
      alert("Access denied. Archive code not recognised.");
    }
  };

  return (
    <main style={styles.app}>
      <nav style={styles.nav}>
        <button onClick={() => setPage("home")} style={styles.logo}>PETER OLAMIDE</button>
        <div style={styles.navLinks}>
          <button onClick={() => setPage("projects")} style={styles.navLink}>Projects</button>
          <button onClick={() => setPage("focus")} style={styles.navLink}>Focus</button>
          <button onClick={() => setPage("projectXL")} style={styles.navLink}>Archives</button>
        </div>
      </nav>

      {page === "home" && <Home setPage={setPage} />}
      {page === "projects" && <SimplePage title="Projects" eyebrow="PUBLIC FILES" />}
      {page === "focus" && <SimplePage title="Focus" eyebrow="CURRENT OPERATING SYSTEM" />}
      {page === "projectXL" && !access && <AccessPage code={code} setCode={setCode} enterArchives={enterArchives} />}
      {page === "projectXL" && access && <Archives setPage={setPage} />}
      {page === "restaurants" && <Restaurants setPage={setPage} />}
      {page === "moments" && <Moments setPage={setPage} />}
    </main>
  );
}

function Home({ setPage }) {
  return (
    <section style={styles.hero}>
      <p style={styles.eyebrow}>PETER OLAMIDE</p>
      <h1 style={styles.heroTitle}>Building products.<br />Building experiences.</h1>
      <p style={styles.heroText}>A collection of products, experiments, and ideas I&apos;m bringing to life.</p>
      <div style={styles.buttonRow}>
        <button onClick={() => setPage("projects")} style={styles.primaryBtn}>Explore Projects →</button>
        <button onClick={() => setPage("projectXL")} style={styles.secondaryBtn}>The Project XL Archives</button>
      </div>
    </section>
  );
}

function SimplePage({ title, eyebrow }) {
  const projects = [
    ["RARLEY", "Brokerage, rare opportunities, luxury assets and high-value deal sourcing.", "Active Development"],
    ["Project XL", "Private operating system for missions, archives, experiments and classified notes.", "Classified"],
    ["Customer Intelligence Dashboard", "Power BI + SQL analytics exploring customer behaviour and business performance.", "Prototype"],
    ["Hospitality AI", "Restaurant operations, customer experience and automation experiments.", "Research"],
    ["Data Analytics Portfolio", "Business intelligence projects using SQL, Power BI, Python and commercial thinking.", "Growing"],
    ["Personal Brand", "Photography, storytelling, lifestyle, music taste and digital experiences.", "Ongoing"],
  ];

  const focus = ["SQL", "Power BI", "Python", "Bioinformatics", "Project Management", "Rarley", "Gym", "Reading", "Project XL"];

  if (title === "Projects") {
    return (
      <section style={styles.section}>
        <p style={styles.eyebrow}>{eyebrow}</p>
        <h1 style={styles.sectionTitle}>Projects</h1>
        <p style={styles.sectionText}>
          A few public-facing signals from the things currently being built.
          Some files remain classified until release.
        </p>

        <div style={styles.portfolioGrid}>
          {projects.map((project) => (
            <div key={project[0]} style={styles.portfolioCard}>
              <p style={styles.archiveSubtitle}>{project[2]}</p>
              <h3 style={styles.archiveCardTitle}>{project[0]}</h3>
              <p style={styles.archiveBody}>{project[1]}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <p style={styles.eyebrow}>{eyebrow}</p>
      <h1 style={styles.sectionTitle}>Current Objectives</h1>
      <p style={styles.sectionText}>
        Current operating system: career growth, product building, discipline,
        health, and quietly ambitious experiments.
      </p>

      <div style={styles.focusBox}>
        <div style={styles.focusGrid}>
          {focus.map((item) => (
            <span key={item} style={styles.focusPill}>✓ {item}</span>
          ))}
        </div>

        <div style={styles.systemHealth}>
          <span>Current System Health</span>
          <strong>████████░░ 81%</strong>
        </div>
      </div>
    </section>
  );
}

function AccessPage({ code, setCode, enterArchives }) {
  return (
    <section style={styles.accessPage}>
      <p style={styles.projectEyebrow}>LEVEL 4 ACCESS</p>
      <h1 style={styles.archiveTitle}>The Project XL Archives</h1>
      <p style={styles.archiveText}>Private files, GS records, Sunday options, and highly unnecessary documentation.</p>

      <div style={styles.loginBox}>
        <label style={styles.label}>Archive Access Code</label>
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter access code" style={styles.input} />
        <button onClick={enterArchives} style={styles.purpleBtn}>Unlock Archives</button>
      </div>

      <p style={styles.hint}>Hint: 19xxxxxx98</p>
    </section>
  );
}

function Archives({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <header style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>ACCESS GRANTED</p>
        <h1 style={styles.projectTitle}>The Project XL Archives</h1>
        <p style={styles.projectSub}>Mission updates, GS balance, weekly music, and ongoing classified files.</p>
        <div style={styles.status}><span style={styles.statusDot}></span>ACTIVE</div>
      </header>

      <Newspaper />

      <div style={styles.statsGrid}>
        <Stat number="2 GS" label="LAMi Balance" />
        <Stat number="-1 GS" label="Yolanda Balance" />
        <Stat number="03" label="Dates Completed" />
      </div>

      <div style={styles.archiveGrid}>
        <ArchiveCard title="GS Wallet" subtitle="Gold Star Economy" purple custom={
          <div style={styles.wallet}>
            <div style={styles.walletRow}><span>LAMi</span><strong>2 GS ⭐</strong></div>
            <div style={styles.walletRow}><span>Yolanda</span><strong>-1 GS ⭐</strong></div>
            <small style={styles.walletSmall}>Live balance ledger</small>
          </div>
        } />

        <ArchiveCard title="Mission Board" subtitle="Possible Expeditions" body="Tapas mission, Asian food expedition, theatre night, Uber Boat sunset, pup yoga, and other pending suggestions." />
        <ArchiveCard title="Restaurant Shortlist" subtitle="" buttonText="Options" onClick={() => setPage("restaurants")} />
        <ArchiveCard title="Achievement" subtitle="Recently Unlocked" buttonText="Open File" onClick={() => setPage("moments")} />
        <ArchiveCard title="Weekly Music" subtitle="Transmission 001" body="Spotify playlist link is now active." buttonText="Open Spotify" link={spotifyLink} purple />
        <ArchiveCard title="Archive Notes" subtitle="Classified Recipient" body="Further files may appear without warning. Continued curiosity is advised." />
      </div>
    </section>
  );
}

function Newspaper() {
  return (
    <div style={styles.newspaper}>
      <div style={styles.paperTop}>
        <h2 style={styles.paperName}>The Project XL Times</h2>
        <span style={styles.paperStamp}>LEVEL 4 CLEARANCE</span>
      </div>

      <div style={styles.paperLine}></div>

      <div style={styles.paperMeta}>
        <span>EDITION 002</span>
        <span>CLASSIFIED FILE</span>
        <span>LEVEL 4 CLEARANCE</span>
      </div>

      <div style={styles.paperContent}>
        <div style={styles.paperTextColumn}>
          <h1 style={styles.paperHeadline}>
            PROJECT XL EXECUTIVE CALLS FOR MORE COMPETITIVE GOLD STAR DONATIONS.
          </h1>

          <p style={styles.paperStory}>
            Following an extensive forensic review, Project XL auditors confirmed that the latest contribution from Yolanda Enterprises consisted of precisely one (1) Gold Star. Headquarters remains grateful for the continued support while quietly expressing optimism that future contributions may better reflect the organisation&apos;s rapidly expanding operational costs.
          </p>
        </div>

        <figure style={styles.paperFigure}>
          <img
            src="/investigator.jpg"
            alt="Project XL Investigation"
            style={styles.paperImage}
          />
          <figcaption style={styles.paperCaption}>
            Above: Project XL auditors verifying the full extent of the latest contribution.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function Restaurants({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <button onClick={() => setPage("projectXL")} style={styles.backBtn}>← Back to Archives</button>
      <header style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>RESTAURANT SHORTLIST</p>
        <h1 style={styles.projectTitle}>Sunday Options</h1>
        <p style={styles.projectSub}>Five possible food missions. Final decision pending.</p>
      </header>

      <div style={styles.restaurantGrid}>
        {restaurants.map((r, i) => (
          <a key={r[0]} href={r[7]} target="_blank" rel="noreferrer" style={styles.restaurantCard}>
            <div style={styles.restaurantNumber}>{i + 1}</div>
            <div style={styles.restaurantContent}>
              <p style={styles.archiveSubtitle}>OPTION {i + 1}</p>
              <h2 style={styles.restaurantName}>{r[0]}</h2>
              <div style={styles.tags}>
                <span>{r[1]}</span><span>{r[2]}</span><span>⭐ {r[3]}</span><span>{r[4]}</span>
              </div>
              <h3 style={styles.restaurantVibe}>{r[5]}</h3>
              <p style={styles.archiveBody}>{r[6]}</p>
              <button style={styles.cardButton}>View Details</button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Moments({ setPage }) {
  return (
    <section style={styles.projectPage}>
      <button onClick={() => setPage("projectXL")} style={styles.backBtn}>← Back to Archives</button>
      <header style={styles.projectHeader}>
        <p style={styles.projectEyebrow}>WALL OF MOMENTS</p>
        <h1 style={styles.projectTitle}>Achievement File</h1>
        <p style={styles.projectSub}>Small moments, officially over-documented.</p>
      </header>

      <div style={styles.momentsGrid}>
        <div style={styles.momentCard}>
          <div style={styles.bottleImage}></div>
          <div>
            <p style={styles.archiveSubtitle}>YOLANDA</p>
            <h3>Water Bottle Resourcefulness</h3>
            <p style={styles.archiveBody}>Turned a simple water bottle into a possible cocktail shaker. Innovation under pressure.</p>
            <h3>6 Hour Stats Exam</h3>
            <p style={styles.archiveBody}>Locked in for six hours and survived the statistics battlefield.</p>
            <h3>Trust Factor: Streatham Level 100</h3>
            <p style={styles.archiveBody}>No fear. Any time. Unmatched trust in the neighbourhood.</p>
          </div>
        </div>

        <div style={styles.momentCard}>
          <div>
            <p style={styles.archiveSubtitle}>PETER</p>
            <h3>Emergency Climate-Control Investment</h3>
            <p style={styles.archiveBody}>A new fan has entered the group chat. The oven room has officially met its match.</p>
          </div>
          <div style={styles.fanImage}></div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return <div style={styles.stat}><strong>{number}</strong><span>{label}</span></div>;
}

function ArchiveCard({ title, subtitle, body, purple, buttonText, onClick, link, custom }) {
  return (
    <div style={purple ? styles.archiveCardPurple : styles.archiveCard}>
      {subtitle && <p style={styles.archiveSubtitle}>{subtitle}</p>}
      <h3 style={styles.archiveCardTitle}>{title}</h3>
      {custom}
      {body && <p style={styles.archiveBody}>{body}</p>}
      {buttonText && !link && <button onClick={onClick} style={styles.cardButton}>{buttonText}</button>}
      {buttonText && link && <a href={link} target="_blank" rel="noreferrer" style={{ ...styles.cardButton, textDecoration: "none" }}>{buttonText}</a>}
    </div>
  );
}

const grid = "repeat(auto-fit, minmax(260px, 1fr))";

const styles = {
  app: { minHeight: "100vh", background: "#030208", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif", overflowX: "hidden" },
  nav: { minHeight: "72px", padding: "14px 4%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "18px", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,.1)", background: "rgba(3,2,8,.92)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(14px)" },
  logo: { background: "none", border: "none", color: "#fff", letterSpacing: "7px", fontWeight: 800, cursor: "pointer" },
  navLinks: { display: "flex", gap: "18px", overflowX: "auto" },
  navLink: { background: "none", border: "none", color: "#ddd", fontSize: "15px", cursor: "pointer", whiteSpace: "nowrap" },

  hero: { minHeight: "calc(100vh - 72px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 18px", background: "radial-gradient(circle at 70% 20%, rgba(168,85,247,.25), transparent 35%), #050505" },
  eyebrow: { letterSpacing: "10px", color: "#888", fontSize: "12px" },
  heroTitle: { fontSize: "clamp(46px, 9vw, 100px)", lineHeight: .95, letterSpacing: "-4px", margin: "28px 0" },
  heroText: { color: "#aaa", fontSize: "clamp(20px, 3vw, 30px)", maxWidth: "760px", lineHeight: 1.4 },
  buttonRow: { display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "36px" },
  primaryBtn: { padding: "18px 36px", borderRadius: "999px", border: "none", fontWeight: 800 },
  secondaryBtn: { padding: "18px 36px", borderRadius: "999px", border: "1px solid #a855f7", background: "rgba(168,85,247,.15)", color: "#fff", fontWeight: 800 },

  section: { padding: "110px 9%", minHeight: "100vh", background: "radial-gradient(circle at 70% 10%, rgba(168,85,247,.18), transparent 35%), #030208" },
  sectionTitle: { fontSize: "clamp(54px, 8vw, 90px)", letterSpacing: "-4px", margin: "16px 0" },
  sectionText: { color: "#aaa", fontSize: "24px", maxWidth: "760px", lineHeight: 1.45 },

  portfolioGrid: { marginTop: "40px", display: "grid", gridTemplateColumns: grid, gap: "20px", maxWidth: "1180px" },
  portfolioCard: { padding: "28px", borderRadius: "22px", border: "1px solid rgba(168,85,247,.25)", background: "rgba(255,255,255,.045)", boxShadow: "inset 0 0 45px rgba(168,85,247,.04)" },
  focusBox: { marginTop: "40px", maxWidth: "900px", padding: "30px", borderRadius: "24px", border: "1px solid rgba(168,85,247,.25)", background: "rgba(255,255,255,.045)" },
  focusGrid: { display: "flex", flexWrap: "wrap", gap: "12px" },
  focusPill: { padding: "12px 16px", borderRadius: "999px", background: "rgba(168,85,247,.13)", border: "1px solid rgba(168,85,247,.25)", color: "#fff", fontWeight: 700 },
  systemHealth: { marginTop: "28px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", justifyContent: "space-between", gap: "18px", flexWrap: "wrap", color: "#c084fc", fontWeight: 800 },

  accessPage: { minHeight: "calc(100vh - 72px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 18px", background: "radial-gradient(circle at 50% 30%, rgba(168,85,247,.35), transparent 35%), #050505" },
  projectEyebrow: { color: "#c084fc", letterSpacing: "8px", fontSize: "12px" },
  archiveTitle: { fontSize: "clamp(48px, 8vw, 88px)", margin: "12px 0", letterSpacing: "-4px" },
  archiveText: { color: "#bbb", fontSize: "21px", maxWidth: "700px" },
  loginBox: { marginTop: "36px", width: "min(480px, 100%)", padding: "28px", borderRadius: "28px", border: "1px solid rgba(168,85,247,.5)", background: "rgba(255,255,255,.07)" },
  label: { display: "block", textAlign: "left", color: "#ccc", marginBottom: "10px" },
  input: { width: "100%", padding: "18px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.2)", background: "#050505", color: "#fff", fontSize: "18px", marginBottom: "16px", boxSizing: "border-box" },
  purpleBtn: { width: "100%", padding: "18px", borderRadius: "999px", border: "none", background: "linear-gradient(135deg,#7c3aed,#c084fc)", color: "#fff", fontWeight: 800, fontSize: "17px" },
  hint: { color: "#777" },

  projectPage: { minHeight: "100vh", padding: "36px min(4vw, 42px) 80px", background: "radial-gradient(circle at 60% 8%, rgba(168,85,247,.45), transparent 30%), linear-gradient(180deg,#07030f,#030208)", overflowX: "hidden" },
  projectHeader: { textAlign: "center", maxWidth: "900px", margin: "0 auto 34px" },
  projectTitle: { fontSize: "clamp(42px, 7vw, 72px)", margin: "8px 0", letterSpacing: "-3px" },
  projectSub: { color: "#ddd", fontSize: "20px" },
  status: { margin: "20px auto 0", display: "inline-flex", alignItems: "center", gap: "12px", padding: "12px 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.08)", fontWeight: 800 },
  statusDot: { width: "14px", height: "14px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 18px #22c55e" },

  newspaper: { width: "min(1180px, 100%)", margin: "0 auto 22px", padding: "clamp(20px, 4vw, 38px)", borderRadius: "18px", color: "#111", background: "linear-gradient(135deg,#f3eadc,#d8d0c3)", boxShadow: "0 0 50px rgba(168,85,247,.2)", boxSizing: "border-box" },
  paperTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" },
  paperName: { fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", margin: 0 },
  paperStamp: { fontWeight: 900, fontSize: "12px" },
  paperLine: { height: "2px", background: "#111", margin: "12px 0 8px" },
  paperMeta: { display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "11px", fontWeight: 900, borderBottom: "1px solid #111", paddingBottom: "8px", flexWrap: "wrap" },
  paperContent: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "28px", marginTop: "18px", alignItems: "center" },
  paperTextColumn: { minWidth: 0 },
  paperHeadline: { fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: .95, letterSpacing: "-1.5px", margin: "12px 0 18px" },
  paperStory: { fontSize: "clamp(15px, 1.7vw, 19px)", lineHeight: 1.45, margin: 0 },
  paperFigure: { margin: 0, width: "100%" },
  paperImage: { width: "100%", height: "clamp(230px, 32vw, 360px)", borderRadius: "18px", objectFit: "cover", objectPosition: "72% center", background: "#9d998f", display: "block" },
  paperCaption: { fontSize: "13px", lineHeight: 1.35, marginTop: "10px", fontStyle: "italic", color: "#333" },

  statsGrid: { display: "grid", gridTemplateColumns: grid, gap: "20px", maxWidth: "1180px", margin: "0 auto 20px" },
  stat: { padding: "30px", borderRadius: "18px", textAlign: "center", border: "1px solid rgba(168,85,247,.25)", background: "rgba(255,255,255,.04)", display: "flex", flexDirection: "column", gap: "6px" },
  archiveGrid: { maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: grid, gap: "20px" },
  archiveCard: { minHeight: "230px", padding: "26px", borderRadius: "18px", border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.04)", display: "flex", flexDirection: "column", alignItems: "flex-start", boxSizing: "border-box" },
  archiveCardPurple: { minHeight: "230px", padding: "26px", borderRadius: "18px", border: "1px solid rgba(168,85,247,.55)", background: "linear-gradient(135deg,rgba(168,85,247,.35),rgba(255,255,255,.04))", display: "flex", flexDirection: "column", alignItems: "flex-start", boxSizing: "border-box" },
  archiveSubtitle: { color: "#c084fc", letterSpacing: "5px", fontSize: "12px", textTransform: "uppercase" },
  archiveCardTitle: { color: "#c084fc", fontSize: "26px", margin: "10px 0" },
  archiveBody: { whiteSpace: "pre-line", color: "#eee", lineHeight: 1.6 },
  cardButton: { marginTop: "auto", padding: "12px 22px", borderRadius: "999px", border: "none", background: "linear-gradient(135deg,#6d28d9,#a855f7)", color: "#fff", fontWeight: 800 },
  wallet: { width: "100%", padding: "18px", borderRadius: "18px", background: "rgba(0,0,0,.22)", border: "1px solid rgba(255,215,130,.22)" },
  walletRow: { display: "flex", justifyContent: "space-between", padding: "9px 0", color: "#ffd56a" },
  walletSmall: { color: "#bda8ff", letterSpacing: "2px", textTransform: "uppercase", fontSize: "11px" },

  backBtn: { marginBottom: "30px", padding: "12px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.05)", color: "#fff" },
  restaurantGrid: { maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" },
  restaurantCard: { color: "white", textDecoration: "none", overflow: "hidden", display: "grid", gridTemplateColumns: grid, minHeight: "260px", border: "1px solid rgba(255,255,255,.14)", borderRadius: "22px", background: "rgba(255,255,255,.04)" },
  restaurantNumber: { minHeight: "170px", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at 30% 30%, rgba(168,85,247,.7), transparent 36%), linear-gradient(135deg,#1b0b2d,#080312)", color: "#c084fc", fontSize: "54px", fontWeight: 900 },
  restaurantContent: { padding: "24px" },
  restaurantName: { fontSize: "30px", margin: "6px 0" },
  tags: { display: "flex", flexWrap: "wrap", gap: "8px", margin: "14px 0" },
  restaurantVibe: { color: "#c084fc" },

  momentsGrid: { display: "grid", gridTemplateColumns: grid, gap: "20px", maxWidth: "1180px", margin: "40px auto" },
  momentCard: { display: "grid", gridTemplateColumns: grid, gap: "26px", padding: "28px", borderRadius: "22px", border: "1px solid rgba(168,85,247,.35)", background: "rgba(255,255,255,.04)" },
  bottleImage: { minHeight: "280px", borderRadius: "18px", background: "linear-gradient(135deg,#5b21b6,#111)" },
  fanImage: { minHeight: "280px", borderRadius: "18px", background: "radial-gradient(circle,#333,#050505)" },
};

export default App;