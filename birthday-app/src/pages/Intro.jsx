import HeartSculpture from "../components/HeartSculpture";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
export default function Intro() {
  return <section className="birthday-cover"><div className="cover-copy"><p className="cover-kicker">✦ A LITTLE UNIVERSE, JUST FOR YOU</p><h1>Some people<br />make the world<br /><em>more beautiful.</em></h1><p className="cover-dedication">You’re my favorite one.</p><p className="cover-description">Ten little chapters. A few things I’ve wanted to say.<br />And a whole lot of love, wrapped up in this little corner of the internet.</p><Link className="cover-button" to="/birthday">Open your birthday story <ArrowUpRight size={18} /></Link><span className="cover-footnote"><Heart size={12} /> Made with love. Meant only for you.</span></div><div className="heart-scene" aria-hidden="true"><span className="scene-orbit" /><span className="scene-orbit orbit-inner" /><span className="scene-star">✧</span><HeartSculpture /><div className="scene-shadow" /><span className="scene-note">a little piece<br /><em>of my heart.</em></span><div className="birthday-stamp"><Sparkles size={15} /><span>OCTOBER</span><strong>30</strong><span>YOUR DAY ♡</span></div></div><div className="cover-bottom"><span>THE BIRTHDAY EDITION</span><span>A STORY IN TEN CHAPTERS</span><span>01 — 10</span></div></section>;
}

