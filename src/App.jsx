import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { achievements, chronicle, hackathons, profile, projects, skills } from './data/portfolio';

const Arrow = () => <span aria-hidden="true">↗</span>;

function ExternalLink({ href, children, className = '' }) {
  return href ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a> : null;
}

function Header() {
  return <header className="site-header">
    <Link className="wordmark" to="/">RPS <span>/</span> THE COLLECTION</Link>
    <nav aria-label="Primary navigation">
      <a href="/#collection">Collection</a><a href="/#vault">Vault</a><a href="/#about">About</a><a href="/#achievements">Proof</a><a href={profile.resume} download>Resume <Arrow /></a><a className="header-contact" href="/#contact">Get in touch <Arrow /></a>
    </nav>
  </header>;
}

function PageTitle() {
  const location = useLocation();
  useEffect(() => {
    const project = projects.find((item) => `/projects/${item.slug}` === location.pathname);
    document.title = project ? `${project.title} | Rudra Pratap Singh` : 'Rudra Pratap Singh | The Collection';
  }, [location.pathname]);
  return null;
}

function SectionIntro({ index, eyebrow, title, children }) {
  return <div className="section-intro"><div className="eyebrow"><span>{index}</span>{eyebrow}</div><h2>{title}</h2>{children}</div>;
}

function ProjectVisual({ project, large = false }) {
  return <div className={`project-visual ${large ? 'project-visual-large' : ''} visual-${project.slug}`} aria-label={`${project.title} preview`}>
    <div className="visual-number">{project.number}</div><div className="visual-orbit" /><div className="visual-label">{project.category}</div><div className="visual-title">{project.title}</div>
  </div>;
}

function Collection({ limit = projects.length }) {
  return <div className="collection-list">{projects.slice(0, limit).map((project) => <article className={`collection-item reveal ${project.featured ? 'featured-item' : ''}`} key={project.slug}>
    <div className="collection-meta"><span>{project.number}</span><span>{project.year}</span><span>{project.category}</span></div>
    <div className="collection-copy"><h3>{project.title}</h3><p>{project.shortDescription}</p><div className="tag-row">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><Link className="text-link" to={`/projects/${project.slug}`}>View piece <Arrow /></Link></div>
    <Link to={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}><ProjectVisual project={project} large={project.featured} /></Link>
  </article>)}</div>;
}

function Vault() {
  const [selected, setSelected] = useState(projects[0]);
  return <section className="vault section-shell" id="vault"><SectionIntro index="03" eyebrow="The archive" title={<>Enter <i>The Vault</i></>}><p>A visual index of the collection. Select a piece to see where it leads.</p></SectionIntro>
    <div className="vault-layout"><div className="vault-list" role="listbox" aria-label="Project archive">{projects.map((project) => <button type="button" role="option" aria-selected={selected.slug === project.slug} className={selected.slug === project.slug ? 'selected' : ''} key={project.slug} onMouseEnter={() => setSelected(project)} onFocus={() => setSelected(project)} onClick={() => setSelected(project)}><span>{project.number}</span><strong>{project.title}</strong><small>{project.year}</small></button>)}</div><div className="vault-preview"><ProjectVisual project={selected} large /><div><span className="eyebrow">Currently viewing</span><h3>{selected.title}</h3><p>{selected.shortDescription}</p><Link className="text-link" to={`/projects/${selected.slug}`}>Open project <Arrow /></Link></div></div></div>
  </section>;
}

function Contact() {
  const [status, setStatus] = useState('');
  function submit(event) { event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get('name')).trim(); const email = String(form.get('email')).trim(); const message = String(form.get('message')).trim(); if (!name || !email.includes('@') || message.length < 10) { setStatus('Please add your name, a valid email, and a message of at least 10 characters.'); return; } setStatus('Your email draft is ready.'); window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`; }
  return <section className="contact section-shell" id="contact"><div><div className="eyebrow"><span>08</span> Start a conversation</div><h2>Have a good<br /><i>problem?</i></h2><p>Open to software engineering, full stack, AI/ML, startup internships, hackathon teams, and collaborations.</p><div className="contact-direct"><a href={profile.resume} download>Resume <Arrow /></a><ExternalLink href={profile.github}>GitHub <Arrow /></ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn <Arrow /></ExternalLink><a href={`mailto:${profile.email}`}>Email <Arrow /></a><a href={`tel:${profile.phone.replaceAll(' ', '')}`}>Call <Arrow /></a></div></div><form onSubmit={submit} noValidate><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Message<textarea name="message" required minLength="10" placeholder="What are you building?" /></label><button className="button button-dark" type="submit">Send an enquiry <Arrow /></button>{status && <p className="form-status" role="status">{status}</p>}</form></section>;
}

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Header /><main>
    <section className="hero section-shell"><div className="hero-index">RPS / 2026<br />THE COLLECTION</div><div className="hero-copy"><div className="eyebrow"><span>01</span>{profile.status} · {profile.school}</div><h1>Rudra<br /><i>Pratap</i><br />Singh</h1><img src="/portrait.jpg" alt="Rudra Pratap Singh" className="hero-portrait-mobile" /><p>{profile.intro}</p><div className="hero-actions"><a className="button button-dark" href="#collection">Explore the collection <Arrow /></a><ExternalLink className="quiet-link" href={profile.linkedin}>LinkedIn <Arrow /></ExternalLink></div></div><div className="hero-aside"><img src="/portrait.jpg" alt="Rudra Pratap Singh" className="hero-portrait" /><div className="aside-rule" /><span>Currently open to</span><strong>Internships<br />Collaborations<br />Hackathon teams</strong><small>Chennai / India</small></div><div className="scroll-note">Scroll to explore <span>↓</span></div></section>
    <section className="statement section-shell"><p>“I enjoy building things that actually work — from software products to hardware experiments like radar systems.”</p></section>
    <section className="section-shell collection-section" id="collection"><SectionIntro index="02" eyebrow="Selected work" title={<>A collection of<br /><i>real things</i></>}><p>Every project is a piece of work with a story, not just another stack.</p></SectionIntro><Collection /></section>
    <section className="proof-band"><div><strong>19+</strong><span>hackathons</span></div><div><strong>1st</strong><span>CryptoSolve win</span></div><div><strong>6+</strong><span>projects shipped</span></div><div><strong>14+</strong><span>Taekwondo medals</span></div></section>
    <Vault />
    <section className="capabilities section-shell" id="capabilities"><SectionIntro index="04" eyebrow="Index of capabilities" title={<>Proof over<br /><i>claims</i></>}><p>Skills are connected to the work where they were used.</p></SectionIntro><div className="skills-index">{skills.map((group) => <div className="skill-group" key={group.group}><h3>{group.group}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
    <section className="chronicle section-shell" id="chronicle"><SectionIntro index="05" eyebrow="Chronicle" title={<>The story<br /><i>so far</i></>} /><div className="chronicle-list">{chronicle.map((item) => <article key={`${item.year}-${item.title}`}><time>{item.year}</time><div><h3>{item.title}</h3><span>{item.org}</span><p>{item.detail}</p></div></article>)}</div></section>
    <section className="achievements section-shell" id="achievements"><SectionIntro index="06" eyebrow="Proof of work" title={<>The numbers<br /><i>with evidence</i></>} /><div className="achievement-grid">{achievements.map((item) => <article className={item.tone} key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div><div className="hackathon-list"><span>Partial record / 19+</span>{hackathons.map((item) => <b key={item}>{item}</b>)}</div></section>
    <section className="about section-shell" id="about"><SectionIntro index="07" eyebrow="About" title={<>Built with<br /><i>discipline</i></>} /><div className="about-grid"><div><img className="portrait" src="/portrait.jpg" alt="Rudra Pratap Singh" /></div><div><p>{profile.about}</p><p>My strongest interests are <strong>fintech and health-tech</strong>, where good software can directly change lives.</p><p>Outside code, Taekwondo has given me a Black Belt and 14+ medals. The same structured practice shapes how I approach code.</p></div></div></section>
    <Contact />
  </main><Footer /></>;
}

function ProjectPage() { const { pathname } = useLocation(); const project = projects.find((item) => `/projects/${item.slug}` === pathname) || projects[0]; const index = projects.findIndex((item) => item.slug === project.slug); const next = projects[(index + 1) % projects.length]; const previous = projects[(index - 1 + projects.length) % projects.length]; return <><Header /><main className="case-study"><section className="case-hero section-shell"><Link className="back-link" to="/#collection">← Back to collection</Link><div className="case-kicker">{project.number} / {project.year} / {project.category}</div><h1>{project.title}</h1><p>{project.shortDescription}</p><ProjectVisual project={project} large /></section><section className="case-content section-shell"><div className="case-main"><CaseBlock title="Overview"><p>{project.fullDescription}</p></CaseBlock><CaseBlock title="The problem"><p>{project.problem}</p></CaseBlock><CaseBlock title="The approach"><p>{project.approach}</p></CaseBlock><CaseBlock title="Key features"><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></CaseBlock><CaseBlock title="What I learned"><p>{project.learning}</p></CaseBlock></div><aside className="case-aside"><span className="eyebrow">Built with</span><div className="case-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="case-links">{project.liveUrl && <ExternalLink href={project.liveUrl}>Live project <Arrow /></ExternalLink>}<ExternalLink href={project.githubUrl}>GitHub <Arrow /></ExternalLink></div></aside></section><div className="case-nav section-shell"><Link to={`/projects/${previous.slug}`}>← {previous.title}</Link><Link to={`/projects/${next.slug}`}>{next.title} →</Link></div></main><Footer /></>; }
function CaseBlock({ title, children }) { return <section className="case-block"><h2>{title}</h2>{children}</section>; }
function Footer() { return <footer className="site-footer"><span>© 2026 Rudra Pratap Singh</span><span>THE COLLECTION / SRM IST '29</span><a href="#top">Back to top ↑</a></footer>; }
function App() { return <><PageTitle /><Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectPage />} /></Routes></>; }
export default App;
