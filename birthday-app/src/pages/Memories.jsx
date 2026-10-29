import { Heart } from "lucide-react";
import PageIntro from "../components/PageIntro";

const moments = [
  { n: "01", date: "THE LITTLE THINGS", title: "The way you laugh", text: "The full, unfiltered laugh that makes everyone else start laughing too. I hope I get to hear it a million more times.", icon: "☼", tone: "rose" },
  { n: "02", date: "A FAVORITE FEELING", title: "Anywhere, with you", text: "Somehow the ordinary bits turn into the best bits when you're beside me. Even doing absolutely nothing feels like a plan.", icon: "✳", tone: "lilac" },
  { n: "03", date: "STILL THINKING ABOUT IT", title: "Our tiny traditions", text: "The little jokes, familiar places, and things only we understand. I love that we have a world that belongs to us.", icon: "♡", tone: "gold" },
  { n: "04", date: "A PROMISE FOR LATER", title: "More stories to come", text: "This is just a small collection. My favorite memories with you are the ones we haven't made yet.", icon: "✦", tone: "blue" },
];

export default function Memories() {
  return <section className="content-page"><PageIntro number="04" eyebrow="OUR LITTLE WORLD" title="A few of my" accent="favorite things." description="The little moments I carry with me, long after they're over." icon={Heart} /><div className="memory-grid">{moments.map(m => <article className={`memory-card ${m.tone}`} key={m.n}><div className="memory-top"><span>{m.n} / 04</span><span>{m.icon}</span></div><div className="memory-copy"><small>{m.date}</small><h2>{m.title}</h2><p>{m.text}</p></div><span className="memory-watermark">{m.n}</span></article>)}</div><p className="handwritten">I wish we could bottle these little moments. <span>♡</span></p></section>;
}
