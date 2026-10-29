import { useEffect, useRef } from "react";

const targets = '.heart-scene, .memory-card, .reason-count, .envelope, .playlist-shell, .finale-card, .quality-note';

export default function SpatialEffects() {
  const space = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let active = null;
    const reset = () => {
      if (active) {
        active.style.removeProperty('--tilt-x');
        active.style.removeProperty('--tilt-y');
        active = null;
      }
      space.current?.style.setProperty('--space-x', '0deg');
      space.current?.style.setProperty('--space-y', '0deg');
    };
    const move = (event) => {
      if (preference.matches || !finePointer.matches) return;
      cancelAnimationFrame(frame);
      const { clientX, clientY, target } = event;
      frame = requestAnimationFrame(() => {
        space.current?.style.setProperty('--space-x', `${(clientY / innerHeight - .5) * -5}deg`);
        space.current?.style.setProperty('--space-y', `${(clientX / innerWidth - .5) * 7}deg`);
        const card = target instanceof Element ? target.closest(targets) : null;
        if (active !== card) {
          if (active) {
            active.style.removeProperty('--tilt-x');
            active.style.removeProperty('--tilt-y');
          }
          active = card;
        }
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--tilt-x', `${((clientY - rect.top) / rect.height - .5) * -10}deg`);
        card.style.setProperty('--tilt-y', `${((clientX - rect.left) / rect.width - .5) * 12}deg`);
      });
    };
    const leave = () => { cancelAnimationFrame(frame); reset(); };
    document.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('blur', leave);
    preference.addEventListener('change', leave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('blur', leave);
      preference.removeEventListener('change', leave);
      reset();
    };
  }, []);

  return <div className="spatial-world" aria-hidden="true"><div className="spatial-depth" ref={space}>
    <div className="celestial-ring ring-far" /><div className="celestial-ring ring-near" />
    {Array.from({ length: 22 }, (_, index) => <span key={index} className={`space-mote mote-${index % 3}`} style={{ left: `${(index * 37 + 7) % 100}%`, top: `${(index * 53 + 9) % 100}%`, '--depth': `${(index % 5) * 45 - 100}px`, '--delay': `${index * -1.7}s`, '--duration': `${14 + index % 6 * 3}s` }}>{index % 6 === 0 ? '✧' : ''}</span>)}
  </div></div>;
}
