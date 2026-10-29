import { useEffect, useRef, useState } from "react";
import { AudioLines, Heart, Music2 } from "lucide-react";
import PageIntro from "../components/PageIntro";

const songs = [["01", "Golden hour kind of feeling", "The one that sounds like us", "03:42", "♫"], ["02", "A little closer", "For the long way home", "04:08", "♡"], ["03", "Dancing in the kitchen", "No choreography required", "02:56", "✳"], ["04", "Our next song", "To be picked together", "∞", "＋"]];

export default function Playlist() {
  const [playing, setPlaying] = useState(null);
  const contextRef = useRef(null);
  const timerRef = useRef(null);
  const requestRef = useRef(0);

  const stop = () => {
    requestRef.current += 1;
    window.clearInterval(timerRef.current);
    timerRef.current = null;
    if (contextRef.current) {
      contextRef.current.close();
      contextRef.current = null;
    }
    setPlaying(null);
  };

  useEffect(() => () => {
    requestRef.current += 1;
    window.clearInterval(timerRef.current);
    contextRef.current?.close();
  }, []);

  const play = async (trackIndex) => {
    if (playing === trackIndex) { stop(); return; }
    stop();
    const request = requestRef.current;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    contextRef.current = context;
    try { await context.resume(); } catch { if (request === requestRef.current) stop(); return; }
    if (request !== requestRef.current) return;
    setPlaying(trackIndex);

    // A small original melody synthesized in the browser, so every card has real playback
    // even before personal song links have been added.
    const melody = [261.63, 329.63, 392, 329.63, 293.66, 349.23, 440, 392, 261.63, 329.63, 392, 523.25, 440, 392, 329.63, 293.66];
    const bass = [130.81, 110, 174.61, 196];
    let step = 0;
    const note = (frequency, time, length, volume, wave = "sine") => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = wave;
      oscillator.frequency.setValueAtTime(frequency, time);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(volume, time + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + length);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time + length + 0.03);
    };
    timerRef.current = window.setInterval(() => {
      if (context.state !== "running") return;
      const time = context.currentTime + 0.02;
      note(melody[(step + trackIndex * 2) % melody.length], time, 0.32, 0.065);
      if (step % 4 === 0) note(bass[(Math.floor(step / 4) + trackIndex) % bass.length], time, 1.65, 0.035, "triangle");
      if (step % 2 === 0) note(melody[(step + 4 + trackIndex * 2) % melody.length] * 2, time, 0.55, 0.018);
      step += 1;
    }, 420);
  };

  return <section className="content-page"><PageIntro number="06" eyebrow="SIDE A: YOU & ME" title="Some songs just" accent="feel like us." description="A little soundtrack for the moments that are ours." icon={Music2} /><div className="playlist-shell"><div className="record-art"><div className={`vinyl ${playing !== null ? "vinyl-playing" : ""}`}><div className="vinyl-center"><Heart size={21} fill="currentColor" /></div></div><div className="record-caption"><span>THE MIXTAPE</span><strong>for you, always</strong><small>AN ORIGINAL TINY TUNE · 2026</small></div></div><div className="track-list">{songs.map((song, i) => <button key={song[0]} onClick={() => play(i)} className={`track ${playing === i ? "is-playing" : ""}`} aria-pressed={playing === i}><span className="track-num">{playing === i ? <AudioLines size={16} /> : song[0]}</span><span className="track-icon">{song[4]}</span><span className="track-info"><b>{song[1]}</b><small>{song[2]}</small></span><span className="track-time">{playing === i ? "Pause" : "Play"}</span></button>)}<div className="playlist-note"><span className="sound-wave">♫</span><span>{playing === null ? "Tap a track to hear a little original melody." : `Playing your tiny tune · track ${String(playing + 1).padStart(2, "0")}`}</span></div><button className="stop-playback" onClick={stop} disabled={playing === null}>Stop playback</button></div></div><div className="music-disclaimer"><Music2 size={14} /> These are original browser-made melodies. Add audio links to hear your favorite real songs.</div></section>;
}

