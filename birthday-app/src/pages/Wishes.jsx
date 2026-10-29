import { Sparkles, Sun } from "lucide-react";
import PageIntro from "../components/PageIntro";

const wishes = [{ icon: "✹", title: "More wonder", text: "New places, new ideas, and little things that make you stop and say wow." }, { icon: "♡", title: "More joy", text: "The kind that sneaks up on you in a sunny afternoon or a really good meal." }, { icon: "✳", title: "More of you", text: "Room to grow into every version of yourself you haven't met yet." }];

export default function Wishes() {
  return <section className="content-page"><PageIntro number="08" eyebrow="THINGS I'M WISHING FOR YOU" title="A whole new year" accent="of your magic." description="May the next trip around the sun be kind to you." icon={Sun} /><div className="wish-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-center"><span>✦</span><strong>365</strong><small>new little<br />possibilities</small></div>{wishes.map((wish, i) => <article key={wish.title} className={`wish-card wish-${i}`}><span>{wish.icon}</span><h2>{wish.title}</h2><p>{wish.text}</p></article>)}</div><div className="wish-footnote"><Sparkles size={15} /> And plenty of reasons to celebrate along the way.</div></section>;
}
