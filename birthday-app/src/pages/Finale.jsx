import { useState } from "react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";

export default function Finale() {
  const [celebrate, setCelebrate] = useState(false);
  return <section className="content-page finale-page"><div className="finale-glow" /><div className="finale-spark">✳</div><PageIntro number="10" eyebrow="THE LAST PAGE (FOR NOW)" title="Happy birthday," accent="my love." description="I hope this little corner of the internet made you feel as loved as you are. That's all I ever wanted." icon={Heart} /><div className="finale-card"><span className="finale-heart"><Heart size={28} fill="currentColor" /></span><p>My favorite part of every year<br />is getting to spend it with you.</p><span className="finale-sign">All my love, always <b>♡</b></span><span className="finale-date">30 · 10 · 2026</span></div><button className="celebrate-button" onClick={() => setCelebrate(true)}>{celebrate ? <><Sparkles size={16} /> Wish sent straight to the stars</> : <>Send one more wish to the stars <ArrowRight size={16} /></>}</button>{celebrate && <div className="celebration">✦ ✧ ⋆ ♡ ✦</div>}</section>;
}
