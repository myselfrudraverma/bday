import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";

const qualities = [
  { word: "Kind", detail: "You make people feel seen, even in the smallest moments.", color: "#f2a9b8", mark: "01" },
  { word: "Brave", detail: "You keep showing up as yourself. That takes a kind of courage I admire.", color: "#e7bb8a", mark: "02" },
  { word: "Thoughtful", detail: "You remember the things that matter to the people you love.", color: "#baa7e4", mark: "03" },
  { word: "Funny", detail: "You can turn a long day around with one perfectly timed comment.", color: "#99c9b1", mark: "04" },
  { word: "Curious", detail: "The way you find wonder in ordinary things makes me see them differently.", color: "#9eb9e2", mark: "05" },
  { word: "Incredible", detail: "Not because you have to be perfect. Because you are so completely you.", color: "#edb4d0", mark: "06" },
];

export default function Qualities() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return undefined;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % qualities.length), 3600);
    return () => window.clearInterval(timer);
  }, [playing]);

  const move = (direction) => setActive((index) => (index + direction + qualities.length) % qualities.length);
  const quality = qualities[active];

  return <section className="content-page qualities-page">
    <PageIntro number="09" eyebrow="THE THINGS I ADORE ABOUT YOU" title="You are" accent="so many things." description="A few of the qualities that make you unmistakably, wonderfully you." icon={Sparkles} />
    <div className="qualities-stage" style={{ "--quality-color": quality.color }}>
      <div className="quality-orbit orbit-a" /><div className="quality-orbit orbit-b" />
      <motion.div className="quality-sun" animate={{ rotate: 360 }} transition={{ duration: 46, repeat: Infinity, ease: "linear" }}><span /><span /><span /><span /><span /><span /></motion.div>
      <AnimatePresence mode="wait"><motion.div key={quality.word} className="quality-note" initial={{ opacity: 0, y: 14, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: .98 }} transition={{ duration: .42 }}>
        <span className="quality-index">{quality.mark} <i /> A THING I LOVE ABOUT YOU</span>
        <h2>{quality.word}<span>.</span></h2><p>{quality.detail}</p><Heart className="quality-heart" size={19} fill="currentColor" />
      </motion.div></AnimatePresence>
      <span className="quality-caption caption-left">SIX THINGS<br />AND A MILLION MORE</span><span className="quality-caption caption-right">MADE OF<br />YOUR OWN KIND OF MAGIC</span>
    </div>
    <div className="quality-controls"><button aria-label="Previous quality" onClick={() => move(-1)}><ArrowLeft size={16} /></button><div className="quality-dots">{qualities.map((item, index) => <button key={item.word} className={index === active ? "selected" : ""} aria-label={`Show quality ${index + 1}: ${item.word}`} aria-current={index === active ? "step" : undefined} onClick={() => setActive(index)} />)}</div><button aria-label="Next quality" onClick={() => move(1)}><ArrowRight size={16} /></button><button className="quality-pause" onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"} <span>{playing ? "Ⅱ" : "▶"}</span></button></div>
    <p className="handwritten">All of them. Even the ones you haven't noticed yet. <span>♡</span></p>
  </section>;
}
