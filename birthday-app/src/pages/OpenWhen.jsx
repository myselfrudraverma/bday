import { useState } from "react";
import { ChevronDown, Heart, Mail } from "lucide-react";
import PageIntro from "../components/PageIntro";

const letters = [{ icon: "☁", title: "you need a little reminder", text: "You are doing better than you think. You bring so much light into the lives around you, especially mine. Take a breath. I'm in your corner, always." }, { icon: "☼", title: "you need a reason to smile", text: "Remember that you are my favorite notification, my favorite hello, and the person I want to tell every tiny thing to. There. That's three reasons already." }, { icon: "✳", title: "you want to feel celebrated", text: "This whole day is yours. Take up space, ask for the extra dessert, play your favorite song twice, and let people love on you. You deserve every bit." }];

export default function OpenWhen() {
  const [opened, setOpened] = useState(null);
  return <section className="content-page"><PageIntro number="07" eyebrow="A LITTLE COMFORT, FOR LATER" title="Open when" accent="you need me." description="Three tiny notes. Pick the one that feels right today." icon={Mail} /><div className="envelope-grid">{letters.map((letter, i) => <button key={letter.title} onClick={() => setOpened(opened === i ? null : i)} className={`envelope ${opened === i ? "opened" : ""}`}><span className="envelope-icon">{opened === i ? <Heart size={24} /> : letter.icon}</span><small>OPEN WHEN…</small><strong>{letter.title}</strong><ChevronDown size={17} className="envelope-chevron" />{opened === i && <p>{letter.text}</p>}</button>)}</div><p className="handwritten">No matter what the day looks like, I'm on your team. <span>♡</span></p></section>;
}
