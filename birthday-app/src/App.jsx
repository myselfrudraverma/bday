import SpatialEffects from "./components/SpatialEffects";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Menu } from "lucide-react";
import Intro from "./pages/Intro";
import Birthday from "./pages/Birthday";
import Message from "./pages/Message";
import Memories from "./pages/Memories";
import Reasons from "./pages/Reasons";
import Playlist from "./pages/Playlist";
import OpenWhen from "./pages/OpenWhen";
import Wishes from "./pages/Wishes";
import Qualities from "./pages/Qualities";
import Finale from "./pages/Finale";

const chapters = [
  ["/", "The beginning", "01"], ["/birthday", "Make a wish", "02"], ["/message", "A little letter", "03"],
  ["/memories", "Our little world", "04"], ["/reasons", "A hundred reasons", "05"], ["/playlist", "Our soundtrack", "06"],
  ["/letter", "Open when…", "07"], ["/wishes", "Your year ahead", "08"], ["/qualities", "Things I love", "09"], ["/finale", "One last thing", "10"],
];

function SiteShell() {
  const location = useLocation();
  const { pathname } = location;
  const menuRef = useRef(null);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); if (menuRef.current) menuRef.current.open = false; }, [pathname]);
  const current = Math.max(0, chapters.findIndex(([path]) => path === pathname));
  return <>
    <div className="ambient" aria-hidden="true"><span /><span /><span /><div className="grain" /></div>
    <SpatialEffects />
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Back to the beginning"><span className="brand-mark"><Heart size={15} fill="currentColor" /></span><span>for my favorite person</span></Link>
      <span className="chapter-progress"><span>{chapters[current][2]}</span><i />10</span>
      <details ref={menuRef} className="chapter-menu"><summary><Menu size={15} /><span>Chapters</span></summary><nav aria-label="Birthday chapters">{chapters.map(([path, title, num]) => <Link key={path} to={path} aria-current={pathname === path ? "page" : undefined}><span>{num}</span>{title}<ArrowRight size={13} /></Link>)}</nav></details>
      <span className="header-date">OCT 30 <span>✳</span></span>
    </header>
    <main className="site-main"><AnimatePresence mode="wait"><motion.div key={pathname} className="route-stage" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35 }}><Routes location={location}>
      <Route path="/" element={<Intro />} /><Route path="/birthday" element={<Birthday />} /><Route path="/message" element={<Message />} />
      <Route path="/memories" element={<Memories />} /><Route path="/reasons" element={<Reasons />} /><Route path="/playlist" element={<Playlist />} />
      <Route path="/letter" element={<OpenWhen />} /><Route path="/wishes" element={<Wishes />} /><Route path="/qualities" element={<Qualities />} /><Route path="/finale" element={<Finale />} />
      <Route path="*" element={<Intro />} />
    </Routes></motion.div></AnimatePresence></main>
    {current > 0 && <div className="chapter-footer"><Link to={chapters[current - 1][0]} className="quiet-link"><ArrowLeft size={15} /> Previous</Link>{current < chapters.length - 1 && <Link to={chapters[current + 1][0]} className="next-link">Next chapter <ArrowRight size={15} /></Link>}</div>}
  </>;
}

export default function App() { return <MotionConfig reducedMotion="user"><BrowserRouter><SiteShell /></BrowserRouter></MotionConfig>; }


