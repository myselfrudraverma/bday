import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";

const reasons = ["You make kindness look effortless.", "You notice the little things other people miss.", "You make every room feel a little warmer.", "You believe in me on the days I forget how.", "You can make an ordinary Tuesday feel special.", "You are entirely, wonderfully yourself."];

export default function Reasons() {
  const [open, setOpen] = useState(0);
  return <section className="content-page"><PageIntro number="05" eyebrow="A VERY SHORT LIST (NOT REALLY)" title="A hundred reasons" accent="and counting." description="Tap one. I could keep going all day." icon={Sparkles} /><div className="reasons-layout"><div className="reason-count"><span className="count-number">{String(open + 1).padStart(2, "0")}</span><span className="count-rule" /><span className="count-label">of many,<br />many reasons</span><div className="count-heart">♡</div></div><div className="reason-list">{reasons.map((reason, i) => <button key={reason} onClick={() => setOpen(i)} className={`reason-row ${open === i ? "selected" : ""}`}><span className="reason-num">{String(i + 1).padStart(2, "0")}</span><span>{reason}</span><ArrowRight size={16} /></button>)}<div className="reason-note">♡ &nbsp; And these are just the ones I can fit on this page.</div></div></div></section>;
}
