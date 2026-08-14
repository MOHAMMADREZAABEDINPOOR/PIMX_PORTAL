/**
 * PIMX PLAYGROUND INDEX — bilingual poster catalogue.
 * English leads by default; Persian mirrors the reading direction while preserving the print-poster system.
 */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Heart, Languages, MoveUpRight, Sparkles } from "lucide-react";

type Language = "en" | "fa";
type Role = "portfolio" | "satellite" | "converter" | "archive" | "dns" | "textArt" | "vault" | "transfer" | "secure";

type Project = {
  name: string;
  href: string;
  no: string;
  role: Role;
  className: string;
  icon: "circle" | "grid" | "star" | "ring" | "check" | "bars" | "wave" | "node" | "wide";
};

const projects: Project[] = [
  { name: "PIMX", href: "https://pimx.pages.dev", no: "01", role: "portfolio", className: "poster--blue", icon: "circle" },
  { name: "PIMX SATS", href: "https://pimxsats.pages.dev", no: "02", role: "satellite", className: "poster--lime", icon: "ring" },
  { name: "PIMX MORPH", href: "https://pimxmorph.pages.dev", no: "03", role: "converter", className: "poster--red", icon: "grid" },
  { name: "PIMX FAIL", href: "https://pimxfail.pages.dev", no: "04", role: "archive", className: "poster--purple", icon: "star" },
  { name: "PIMX PASS DNS", href: "https://pimxpassdns.pages.dev", no: "05", role: "dns", className: "poster--orange", icon: "check" },
  { name: "PIMX MOJI", href: "https://pimxmoji.pages.dev", no: "06", role: "textArt", className: "poster--pink", icon: "bars" },
  { name: "PIMX VEIL", href: "https://pimxveil.pages.dev", no: "07", role: "vault", className: "poster--mint", icon: "wave" },
  { name: "PIMX NODE", href: "https://pimxnode.pages.dev", no: "08", role: "transfer", className: "poster--yellow", icon: "node" },
  { name: "PIMX WIDE", href: "https://pimxwide.pages.dev", no: "09", role: "secure", className: "poster--ink", icon: "wide" },
];

const dictionary = {
  en: {
    lang: "en", dir: "ltr", switchTo: "Switch to فارسی", brandIndex: "PIMX INDEX", projects: "PROJECTS", support: "SUPPORT", openPimx: "OPEN PIMX",
    heroLabel: "AN INDEPENDENT CORNER OF THE WEB", heroKicker: <>A digital shelf for<br />the things I make.</>, heroTitle: <>Every path,<br /><span>one</span> PIMX.</>, heroLink: "Browse the index", heroScroll: "SCROLL TO PICK A PATH",
    destinations: "independent destinations", projectTitle: <>Pick one,<br />then <i>go.</i></>, projectIntro: "This is not a plain directory; each piece is an independent experience in the PIMX world.", projectAside: <>SELECT A POSTER<br />TO OPEN A NEW ROUTE<br /><span>↘ ALL LINKS OPEN SEPARATELY</span></>,
    open: "OPEN", roles: { portfolio: "MAIN PORTFOLIO", satellite: "ORBIT TRACKER", converter: "FILE CONVERTER", archive: "LESSON ARCHIVE", dns: "DNS TOOL", textArt: "TEXT ART LAB", vault: "PRIVATE VAULT", transfer: "P2P TRANSFER", secure: "SECURE SPACE" },
    supportStamp: "ONE SMALL SIGNAL", supportLabel: "PIMX SUPPORT DESK", supportTitle: <>If a tool<br />helped you, <i>back it.</i></>, supportCopy: "Your support gives the next PIMX routes more time and energy to be built.", supportAction: "OPEN SUPPORT PAGE", ticket: "SUPPORT\nTICKET", thankYou: "THANK YOU", footer: "PIMX PLAYGROUND INDEX / 2026", backTop: "BACK TO THE TOP ↑",
  },
  fa: {
    lang: "fa", dir: "rtl", switchTo: "Switch to English", brandIndex: "فهرست PIMX", projects: "پروژه‌ها", support: "حمایت", openPimx: "باز کردن PIMX",
    heroLabel: "یک گوشهٔ مستقل از وب", heroKicker: <>یک قفسهٔ دیجیتال برای<br />چیزهایی که ساخته‌ام.</>, heroTitle: <>هر راه،<br /><span>یک</span> Pimx.</>, heroLink: "رفتن به فهرست", heroScroll: "برای انتخاب مسیر اسکرول کن",
    destinations: "مقصد مستقل", projectTitle: <>هر کدام را<br />بردار و <i>برو.</i></>, projectIntro: "این‌جا یک منوی ساده نیست؛ هر قطعه یک تجربهٔ مستقل در جهان Pimx است.", projectAside: <>یک پوستر را انتخاب کن<br />تا مسیر تازه باز شود<br /><span>↘ همهٔ لینک‌ها جداگانه باز می‌شوند</span></>,
    open: "باز کن", roles: { portfolio: "پورتفولیوی اصلی", satellite: "ره‌گیر مدار", converter: "تبدیل‌گر فایل", archive: "آرشیو تجربه‌ها", dns: "ابزار DNS", textArt: "آزمایشگاه متن", vault: "گاوصندوق خصوصی", transfer: "انتقال P2P", secure: "فضای امن" },
    supportStamp: "یک سیگنال کوچک", supportLabel: "میز حمایت PIMX", supportTitle: <>اگر یک ابزار<br />به کارت آمد، <i>دستش را بگیر.</i></>, supportCopy: "حمایت تو، زمان و انرژی بیشتری برای ساختن مسیرهای تازه در Pimx می‌سازد.", supportAction: "باز کردن صفحهٔ حمایت", ticket: "بلیت\nحمایت", thankYou: "سپاس از تو", footer: "فهرست PIMX PLAYGROUND / ۲۰۲۶", backTop: "بازگشت به بالا ↑",
  },
} as const;

type Copy = (typeof dictionary)[Language];

function Logo({ compact = false }: { compact?: boolean }) {
  return <span className={`play-logo ${compact ? "play-logo--compact" : ""}`} aria-label="PIMX"><span className="play-logo__word">PIMX</span><i /></span>;
}

function PosterGlyph({ type }: { type: Project["icon"] }) {
  return <span className={`poster-glyph poster-glyph--${type}`} aria-hidden="true"><i /><b /><em /><strong /></span>;
}

function Poster({ project, copy }: { project: Project; copy: Copy }) {
  return (
    <a className={`project-poster ${project.className}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`${copy.open} ${project.name}`}>
      <span className="project-poster__wash" aria-hidden="true" />
      <span className="project-poster__top"><b>NO. {project.no}</b><span>{copy.open} <ArrowUpRight size={13} /></span></span>
      <span className="project-poster__body"><PosterGlyph type={project.icon} /><strong>{project.name}</strong></span>
      <span className="project-poster__bottom"><i /> {copy.roles[project.role]}</span>
      <span className="project-poster__tape" aria-hidden="true">PIMX / {copy.open}</span>
    </a>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("pimx-language") === "fa" ? "fa" : "en";
  });
  const copy = dictionary[language];

  useEffect(() => {
    document.documentElement.lang = copy.lang;
    document.documentElement.dir = copy.dir;
    window.localStorage.setItem("pimx-language", language);
  }, [copy.dir, copy.lang, language]);

  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "fa" : "en"));

  return (
    <main className={`playground playground--${language}`} dir={copy.dir}>
      <div className="paper-texture" aria-hidden="true" />
      <div className="side-stamp side-stamp--one" aria-hidden="true">WEB INDEX — 2026 — WEB INDEX — 2026 —</div>
      <div className="side-stamp side-stamp--two" aria-hidden="true">MAKE A TURN / TAKE A TOOL / MAKE A TURN / TAKE A TOOL /</div>

      <header className="play-header">
        <a href="#top" className="header-logo"><Logo compact /><span>{copy.brandIndex}</span></a>
        <nav><a href="#projects">{copy.projects}</a><a href="#support">{copy.support}</a></nav>
        <div className="header-actions">
          <button type="button" className="language-switch" onClick={toggleLanguage} aria-label={copy.switchTo} title={copy.switchTo}><Languages size={13} /><span>{language === "en" ? "FA" : "EN"}</span></button>
          <a className="header-chip" href="https://pimx.pages.dev" target="_blank" rel="noreferrer">{copy.openPimx} <MoveUpRight size={13} /></a>
        </div>
      </header>

      <section className="play-hero" id="top">
        <div className="hero-label hero-label--top"><i /> {copy.heroLabel}</div>
        <div className="hero-sun" aria-hidden="true"><span /><i /><b /></div>
        <div className="hero-copy" dir={copy.dir}>
          <p className="hero-kicker">{copy.heroKicker}</p>
          <h1>{copy.heroTitle}</h1>
          <a href="#projects" className="hero-link">{copy.heroLink} <ArrowDownRight size={20} /></a>
        </div>
        <div className="hero-mass" aria-hidden="true"><Logo /><div>PIMX<br />PLAY<br />GROUND</div></div>
        <div className="hero-label hero-label--bottom">{copy.heroScroll} <span>↓</span></div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-intro" dir={copy.dir}>
          <div className="section-token"><span>09</span> {copy.destinations}</div>
          <h2>{copy.projectTitle}</h2>
          <p>{copy.projectIntro}</p>
        </div>
        <p className="projects-aside">{copy.projectAside}</p>
        <div className="poster-field">
          <div className="poster-field__arrow poster-field__arrow--one" aria-hidden="true">↙</div>
          <div className="poster-field__arrow poster-field__arrow--two" aria-hidden="true">↗</div>
          {projects.map((project) => <Poster key={project.no} project={project} copy={copy} />)}
        </div>
      </section>

      <section className="marquee-band" aria-label="Pimx project index"><div className="marquee-track" aria-hidden="true"><span className="marquee-sequence">/ PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX</span><span className="marquee-sequence">/ PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX / PIMX</span></div></section>

      <section className="support-ticket" id="support">
        <div className="ticket-side ticket-side--left"><span>{copy.supportStamp}</span><span>•</span><span>{copy.supportStamp}</span></div>
        <div className="ticket-main" dir={copy.dir}>
          <p className="ticket-eyebrow"><Sparkles size={14} /> {copy.supportLabel}</p>
          <h2>{copy.supportTitle}</h2>
          <p>{copy.supportCopy}</p>
          <a href="https://pimxsupport.pages.dev" target="_blank" rel="noreferrer" className="ticket-action"><Heart size={18} fill="currentColor" /> {copy.supportAction} <ArrowUpRight size={18} /></a>
        </div>
        <div className="ticket-number" aria-hidden="true"><b>10</b><span>{copy.ticket}</span></div>
        <div className="ticket-side ticket-side--right"><span>{copy.thankYou}</span><span>•</span><span>{copy.thankYou}</span></div>
      </section>

      <footer className="play-footer"><Logo compact /><p>{copy.footer}</p><a href="#top">{copy.backTop}</a></footer>
    </main>
  );
}
