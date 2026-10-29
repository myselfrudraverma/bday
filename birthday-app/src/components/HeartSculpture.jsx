const outline = 'M120 215 C100 195 20 145 20 80 C20 25 90 10 120 57 C150 10 220 25 220 80 C220 145 140 195 120 215 Z';

export default function HeartSculpture() {
  return <div className="heart-volume">
    {Array.from({ length: 14 }, (_, index) => <svg className="heart-slice" key={index} viewBox="0 0 240 240" style={{ transform: `translateZ(${index * 2 - 14}px)` }}><path d={outline} fill={index % 2 ? '#ac567d' : '#b8668c'} /></svg>)}
    <svg className="heart-slice heart-face" viewBox="0 0 240 240"><defs><linearGradient id="heart-satin" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe7ec" /><stop offset=".3" stopColor="#f4b9d0" /><stop offset=".66" stopColor="#cf7aa3" /><stop offset="1" stopColor="#7d365e" /></linearGradient><radialGradient id="heart-light" cx=".3" cy=".25" r=".65"><stop stopColor="#fff" stopOpacity=".6" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient></defs><path d={outline} fill="url(#heart-satin)" /><path d={outline} fill="url(#heart-light)" /><path d="M36 81 C33 45 76 29 98 55" stroke="#fff2f5" strokeOpacity=".6" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
  </div>;
}
