import { useRef, useState } from 'react';
import site from '../data/siteContent';
import categories from '../data/categories';
import Navigation from '../components/Navigation';
import CategoryGrid from '../components/CategoryGrid';
export default function Home() {
 const audio = useRef(); const [playing, setPlaying] = useState(false);
 const toggle = () => { if (!audio.current) return; if (playing) { audio.current.pause(); setPlaying(false); } else audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); };
 const startAgain = event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
 return <><audio ref={audio} src={site.music} onEnded={() => setPlaying(false)} preload="none" /><Navigation onMusic={toggle} isPlaying={playing} /><main id="top">
 <section className="hero"><div className="hero-copy"><p className="eyebrow">A BIRTHDAY EDITION</p><h1>THE MANY<br /><i>SIDES OF YOU</i></h1><p>{site.heroSubtitle}</p><a href="#sides" className="explore">Explore the sides <span>↓</span></a></div><div className="hero-image"><img src={site.heroImage} alt={`Portrait of ${site.herName}`} /><small>01 — 08</small></div><div className="scroll">SCROLL TO BEGIN <span>↓</span></div></section>
 <section className="intro section"><p className="eyebrow">A SMALL COLLECTION</p><h2>{site.introTitle}</h2><p>{site.introText}</p></section><CategoryGrid categories={categories} />
 <section className="us-tease section" id="us"><div><p className="eyebrow">08 — HER &amp; ME</p><h2>Somewhere along the way, I became part of your year too.</h2><a href="/side/us" className="text-link">See our chapter →</a></div><img src="/images/categories/placeholder-cover.svg" alt="A shared memory" /></section>
 <section className="final-message section"><p className="eyebrow">ONE MORE THING</p><h2>And those are just some of the many sides of you.</h2><p>There's the girl your friends know. The girl your family knows. The girl the world sees.<br /><br />And then there's the girl I know.<br /><br />I'm grateful I got to see all these different sides of you this year.<br /><br /><strong>Happy Birthday, {site.herName}.</strong></p></section>
 <section className="letter section" id="letter"><p className="eyebrow">FOR YOUR EYES ONLY</p><h2>A Letter <i>For You</i></h2><article>{site.letter.split('\n').map((paragraph, index) => <p key={index}>{paragraph || ' '}</p>)}</article></section>
 <section className="end"><img src={site.heroImage} alt="" /><div><p className="eyebrow">WITH LOVE</p><h2>HAPPY BIRTHDAY,<br /><i>{site.herName}</i></h2><p>Here's to another year of you.</p><a href="#top" onClick={startAgain}>Start Again ↻</a></div></section>
 </main></>;
}
