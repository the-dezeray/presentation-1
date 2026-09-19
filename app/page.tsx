'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Code2, Database, BrainCircuit, Network, Shield, LayoutTemplate, BarChart3, Users, Coffee, Lightbulb, Wrench, FlaskConical, Handshake, GraduationCap, Cloud, Globe, Rocket, Presentation, Search, Crown, HeartHandshake } from 'lucide-react';

const TOTAL_SECTIONS = 14;

// ─── types ────────────────────────────────────────────────────────────────────
interface SectionProps {
  active: boolean;
}

// ─── tiny helpers ─────────────────────────────────────────────────────────────
function useTypingEffect(text: string, active: boolean, delay = 30) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (!active) { setDisplayed(''); return; }
    let i = 0;
    setDisplayed('');
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, delay);
    return () => clearInterval(id);
  }, [active, text, delay]);
  return displayed;
}

// ─── Section 0 : Opening ──────────────────────────────────────────────────────
function SectionOpening({ active }: SectionProps) {
  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Logo */}
        <div className={`transition-all duration-300 mb-12 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}>
          <Image src="/logos/biust logo2.png" alt="BIUST Innovation Club" width={800} height={800}
            style={{ objectFit: 'contain' }} />
        </div>

     

        {/* Divider */}
        <div className={`my-8 h-px w-24 bg-white/30 transition-all duration-300 ${active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{ transitionDelay: '500ms', transformOrigin: 'left' }} />

        {/* Tagline */}
        <p className={`geist-pixel text-white/50 text-sm tracking-widest transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '650ms' }}>
          LEARN · BUILD · RESEARCH · SHIP
        </p>

        {/* Bottom prompt */}
        <div className={`absolute bottom-10 flex flex-col items-center gap-2 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '900ms' }}>
          <span className="text-white/30 text-xs tracking-widest">PRESS ↓ TO EXPLORE</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>

      </div>
    </div>
  );
}

// ─── Subject Icons ─────────────────────────────────────────────────────────────
const SubjectIcons: Record<string, React.FC<any>> = {
  Programming: Code2,
  Databases: Database,
  'AI / ML': BrainCircuit,
  Networking: Network,
  Cybersecurity: Shield,
  'UI/UX': LayoutTemplate,
  Data: BarChart3,
};

// ─── Section 1 : The Gap ──────────────────────────────────────────────────────
function SectionGap({ active }: SectionProps) {
  const subjects = ['Programming', 'Databases', 'AI / ML', 'Networking', 'Cybersecurity', 'UI/UX', 'Data'];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        {/* Chapter label */}
        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', transitionDelay: '0ms' }}>01 / THE GAP</span>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 mt-6">

          {/* Left: the tension */}
          <div className={`flex-1 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '150ms' }}>
            <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
              YOU LEARN<br />
              <span style={{ color: '#c0392b' }}>THE CONCEPT.</span>
            </h2>
            <div className="my-6 h-px bg-black/15 w-full" />
            <h2 className="geist-pixel text-black/40" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
              CAN YOU USE<br />IT?
            </h2>
          </div>

          {/* Right: icon cards + gap message */}
          <div className={`flex-1 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '300ms' }}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 mb-12">
              {subjects.map((s, i) => {
                const Icon = SubjectIcons[s];
                return (
                  <div key={s}
                    className={`flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:scale-110 cursor-default ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    style={{ transitionDelay: `${400 + i * 60}ms` }}>
                    {Icon && <Icon size={80} className="text-black/70" strokeWidth={1.2} />}
                    <span className="font-bold text-base text-center text-black/80" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{s}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-black/60" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1.05rem', lineHeight: 1.6, textTransform: 'none', maxWidth: '30ch' }}>
              The Innovation Club exists partly to close the distance between understanding and doing.
            </p>
          </div>
        </div>

        {/* Big background word */}
        <div className="absolute bottom-0 right-0 pointer-events-none select-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', lineHeight: 1, color: 'rgba(0,0,0,0.03)', fontFamily: 'GeistPixel, monospace', fontWeight: 900 }}>
          GAP
        </div>

      </div>
    </div>
  );
}

// ─── Section 2 : About The Club ───────────────────────────────────────────────
const ABOUT_PHOTOS = [
  { src: '/club-photo.jpeg', alt: 'BIUST Innovation Club Members', label: 'THE CLUB' },
  { src: '/coding-session.jpg', alt: 'Members building together', label: 'BUILDING TOGETHER' },
  { src: '/club-innovation-group.jpg', alt: 'Club members at BIUST Innovation session', label: 'INNOVATION SESSION' },
];

function SectionAboutClub({ active }: SectionProps) {
  const [idx, setIdx] = useState(0);

  // Auto-cycle photos while this section is active
  useEffect(() => {
    if (!active) return;
    setIdx(0);
    const id = setInterval(() => setIdx((i) => (i + 1) % ABOUT_PHOTOS.length), 2500);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="section-frame" style={{ background: '#ffffff' }}>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl">

        {/* Animated photo stack — crossfade + slow Ken Burns zoom */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '150ms' }}>
          <div className="relative w-full h-full overflow-hidden rounded-3xl bg-black">
            {ABOUT_PHOTOS.map((photo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: idx === i ? 1 : 0,
                  transform: idx === i ? 'scale(1.08)' : 'scale(1)',
                  transition: 'opacity 0.6s ease-in-out, transform 3s ease-out',
                  zIndex: idx === i ? 1 : 0,
                }}
              />
            ))}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-[2]" />

            {/* White text on top of the photo - bottom left */}
            <div className="absolute bottom-10 left-10 flex flex-col items-start text-left px-12 py-12 z-10">
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-white/80" size={64} />
                <span className="chapter-label" style={{ color: '#555' }}>02 / ABOUT US</span>
              </div>
              <h2 className="geist-pixel text-white mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 1.1 }}>
                WHO WE ARE
              </h2>
              <p className="text-white/80 leading-relaxed text-2xl max-w-2xl"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: 1.8 }}>
                We are a research and development-based student community focused on applying classroom knowledge to real-world problems, building practical projects, and developing the people behind them.
              </p>
              <div className="mt-8 h-px bg-white/20 w-1/2" />
            </div>
            <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 z-10">
              <span className="text-white/50 text-sm tracking-widest" style={{ fontFamily: 'Arial', textTransform: 'uppercase' }}>
                Research · Development · Community
              </span>
            </div>

            {/* Slideshow controls — bottom right */}
            <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-3">
              <span key={idx} className="geist-pixel text-white/70 text-xs tracking-widest">
                {ABOUT_PHOTOS[idx].label}
              </span>
              <div className="flex items-center gap-2">
                {ABOUT_PHOTOS.map((photo, i) => (
                  <button
                    key={photo.src}
                    onClick={() => setIdx(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className="rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                    style={{
                      width: i === idx ? 24 : 8,
                      height: 8,
                      background: i === idx ? '#fff' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 3 : The Club ─────────────────────────────────────────────────────
function SectionClub({ active }: SectionProps) {
  const lines = [
    { text: 'Not a coding club.', icon: Coffee },
    { text: 'A place to explore ideas.', icon: Lightbulb },
    { text: 'Form teams.', icon: Users },
    { text: 'Build prototypes.', icon: Wrench },
    { text: 'Do research.', icon: FlaskConical },
    { text: 'Work with organisations.', icon: Handshake },
    { text: 'Learn from one another.', icon: GraduationCap },
  ];

  const photos = [
    '/images-real/1749915510998.jpg',
    '/images-real/53b1b853-ec32-4ddb-baa6-ce7234f62075.jpg',
    '/images-real/ab6ea2d3-23b3-40aa-ba53-533daa1d43ce.jpg',
    '/images-real/es.webp',
    '/images-real/IMG-20260724-WA0009.jpg',
    '/images-real/karabo.webp',
    '/images-real/lum.webp',
    '/images-real/oga.webp',
    '/images-real/p.webp',
    '/images-real/pk.webp',
    '/images-real/pol.webp',
    '/images-real/ross.webp',
    '/images-real/s.webp',
    '/images-real/images%20(7).jpg',
    '/images-real/IMG_3197%20-%20Sandile%20Siakayuwa.jpg',
    '/images-real/IMG_3705%20-%20Tlotlang%20Morebodi.jpg',
    '/images-real/IMG_8793%20-%20Theo%20Mothuti.jpg',
    '/images-real/20260321_185720%20-%20Karl.webp',
    '/images-real/20260916_140458%20-%20Shezzane%20Zendanemako.webp',
    '/images-real/IMG_20260228_175745_171%20-%20Oarabile%20Koore.webp',
    '/images-real/IMG-20260501-WA0014%20-%20Simeon%20Uden.webp',
  ];

  return (
    <div className="section-frame" style={{ background: '#111' }}>
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-12 md:px-24 overflow-hidden">

        {/* Text on the left */}
        <div className={`flex-1 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: '150ms' }}>
          <div className="space-y-1">
            {lines.map((line, i) => (
              <p key={i}
                className="geist-pixel"
                style={{
                  fontSize: i === 0 ? 'clamp(1.6rem, 4.5vw, 4rem)' : 'clamp(1rem, 3vw, 2.5rem)',
                  color: i === 0 ? '#fff' : 'rgba(255,255,255,0.25)',
                  lineHeight: 1.1,
                }}>
                <line.icon size={32} className="inline-block mr-3 align-middle" style={{ color: i === 0 ? '#fff' : 'rgba(255,255,255,0.3)' }} strokeWidth={1.2} />
                {line.text}
              </p>
            ))}
          </div>
        </div>

        {/* Photo staircase on the right — real photos from /public/images-real */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ transitionDelay: '300ms' }}>
          {[6, 5, 4, 3, 2, 1].map((count, rowIdx) => {
            const offset = [0, 6, 11, 15, 18, 20][rowIdx];
            return (
              <div key={count} className="flex gap-3">
                {Array.from({ length: count }).map((_, colIdx) => {
                  const src = photos[offset + colIdx];
                  return (
                    <div key={colIdx}
                      className={`overflow-hidden rounded-xl border border-white/15 bg-white/5 transition-all duration-300 hover:scale-105 hover:border-white/30 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                      style={{ width: 72, height: 72, transitionDelay: `${350 + (offset + colIdx) * 40}ms` }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Club member"
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '700ms' }}>
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-white/40 text-sm tracking-wider" style={{ fontFamily: 'Arial', textTransform: 'uppercase' }}>
            Student-led · Research-driven · Practical
          </span>
        </div>

      </div>
    </div>
  );
}

// ─── Section 4 : The Build Loop ───────────────────────────────────────────────
function SectionBuildLoop({ active }: SectionProps) {
  const steps = ['LEARN', 'EXPLORE', 'BUILD', 'TEST', 'DEPLOY', 'SHARE'];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!active) { setTick(0); return; }
    const id = setInterval(() => setTick(t => (t + 1) % steps.length), 700);
    return () => clearInterval(id);
  }, [active, steps.length]);

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center items-center px-8 overflow-hidden">

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', marginBottom: '2rem' }}>04 / THE BUILD LOOP</span>

        {/* Active word — big */}
        <div className="relative flex items-center justify-center" style={{ height: '14rem' }}>
          {steps.map((step, i) => (
            <h2 key={step}
              className="geist-pixel absolute text-center transition-all duration-300"
              style={{
                fontSize: 'clamp(3rem, 10vw, 9rem)',
                lineHeight: 1,
                color: tick === i ? '#000' : 'transparent',
                opacity: tick === i ? 1 : 0,
                transform: tick === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                WebkitTextStroke: tick === i ? '0px' : '1px rgba(0,0,0,0.15)',
              }}>
              {step}
            </h2>
          ))}
        </div>

        {/* Step indicators */}
        <div className={`flex items-center gap-3 mt-4 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '200ms' }}>
          {steps.map((step, i) => (
            <button key={step} onClick={() => setTick(i)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer border-none bg-transparent p-0">
              <div className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ background: tick === i ? '#000' : 'rgba(0,0,0,0.2)', transform: tick === i ? 'scale(1.5)' : 'scale(1)' }} />
              <span className="text-xs tracking-widest transition-colors"
                style={{ fontFamily: 'Arial', color: tick === i ? '#000' : 'rgba(0,0,0,0.3)', textTransform: 'uppercase', fontSize: '0.6rem' }}>
                {step}
              </span>
            </button>
          ))}
        </div>

        {/* Connecting line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

        {/* Back-to-start arrow */}
        <div className={`mt-8 text-black/30 text-sm transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms', fontFamily: 'Arial', textTransform: 'none' }}>
          ↩ then you learn something new
        </div>

        {/* Ghost letters in background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {steps.map((step, i) => (
            <span key={step}
              className="absolute geist-pixel"
              style={{
                fontSize: 'clamp(8rem, 22vw, 22rem)',
                color: 'rgba(0,0,0,0.03)',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(${i % 2 === 0 ? 40 : -40}%)`,
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}>
              {step}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

// ─── Section 5 : Learn → Explore → Build → Share ──────────────────────────────
function SectionWhatWeBuild({ active }: SectionProps) {
  const stages = [
    {
      num: '01',
      title: 'Learn',
      icon: GraduationCap,
      items: ['Technical courses', 'Workshops', 'Research discussions', 'Internal knowledge sharing'],
    },
    {
      num: '02',
      title: 'Explore',
      icon: Search,
      items: ['Ideas', 'Technologies', 'Research problems', 'Experiments'],
    },
    {
      num: '03',
      title: 'Build',
      icon: Wrench,
      items: ['Student projects', 'Software', 'AI/ML models', 'Websites', 'Games', 'Infrastructure/tools'],
    },
    {
      num: '04',
      title: 'Share',
      icon: Handshake,
      items: ['Events', 'Demonstrations', 'Collaborations', 'Open-source work', 'Research'],
    },
  ];

  return (
    <div className="section-frame" style={{ background: '#ffffff' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-20 py-10 overflow-hidden overflow-y-auto">

        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: '#999' }}>05 / WHAT WE DO</span>

          <p className={`mt-4 text-lg max-w-xl transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Arial', textTransform: 'none', lineHeight: 1.6, transitionDelay: '150ms' }}>
            How the club moves — from picking up skills to putting work out into the world.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">

            {/* Left: group photo */}
            <div className={`relative overflow-hidden transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ borderRadius: 20, border: '1px solid rgba(0,0,0,0.1)', aspectRatio: '4/3.4', background: '#f0f0f0', transitionDelay: '200ms' }}>
              <img src="/what-we-do-group.jpg" alt="BIUST Innovation Club members"
                className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right: stages stacked vertically, large type */}
            <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
              {stages.map((stage, i) => (
                <div key={stage.title}
                  className={`flex items-start gap-5 py-5 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${250 + i * 100}ms` }}>
                  <span className="geist-pixel shrink-0 pt-2"
                    style={{ color: 'rgba(0,0,0,0.3)', fontSize: '0.95rem', letterSpacing: '0.08em' }}>
                    {stage.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="geist-pixel text-black"
                      style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1 }}>
                      {stage.title.toUpperCase()}
                    </h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-center gap-3"
                          style={{ fontFamily: 'Arial', fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)', color: 'rgba(0,0,0,0.65)', lineHeight: 1.4 }}>
                          <span className="shrink-0 rounded-full" style={{ width: 7, height: 7, background: 'rgba(0,0,0,0.3)' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < stages.length - 1 ? null : null}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 6 : Real-World Collaboration ─────────────────────────────────────
function SectionCollaboration({ active }: SectionProps) {
  const orgs = [
    { name: 'PVS', type: 'Website' },
    { name: 'UFP', type: 'Website' },
    { name: 'Growth Beyond Books', type: 'Website' },
    { name: 'Mining Society', type: 'Collaboration' },
    { name: 'SRC', type: 'Notice Board System' },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999' }}>06 / REAL-WORLD IMPACT</span>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mt-8">

          {/* Left: statement */}
          <div className={`md:w-2/5 transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9 }}>
              WE BUILD FOR<br />PEOPLE<br />AROUND US.
            </h2>
            <p className="mt-6 text-black/50" style={{ fontFamily: 'Arial', fontSize: '0.95rem', lineHeight: 1.65, textTransform: 'none', maxWidth: '28ch' }}>
              Technical skills are more meaningful when they solve problems that people actually experience.
            </p>
          </div>

          {/* Right: org evidence */}
          <div className="md:w-3/5 space-y-0">
            {orgs.map((org, i) => (
              <div key={org.name}
                className={`flex items-center justify-between border-b py-4 transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ borderColor: 'rgba(0,0,0,0.1)', transitionDelay: `${200 + i * 80}ms` }}>
                <div className="flex items-center gap-4">
                  {/* Logo placeholder */}
                  <div className="w-10 h-10 border border-black/15 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <span className="geist-pixel text-xs text-black/40">{org.name[0]}</span>
                  </div>
                  <span className="font-bold text-black" style={{ fontFamily: 'Arial', textTransform: 'none' }}>{org.name}</span>
                </div>
                <span className="text-xs text-black/40 tracking-wider" style={{ fontFamily: 'Arial', textTransform: 'uppercase' }}>
                  {org.type}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

// ─── Section 7 : Active Projects (press N to cycle) ───────────────────────────
function SectionResearch({ active }: SectionProps) {
  const projects = [
    {
      name: 'BIUST NOTICE BOARD',
      tag: 'In association with the SRC',
      desc: 'Campus notices, events and announcements — built for the SRC to close the communication gap with students.',
      src: '/biust-notice-board.png',
      type: 'image' as const,
      status: 'Deployed',
    },
    {
      name: 'PROJECT YAPPER',
      tag: 'Whisper-based Setswana speech recognition',
      desc: 'Ongoing research applying modern AI models to Setswana, a Bantu language with limited NLP resources.',
      src: '/whisper-model.png',
      type: 'image' as const,
      status: 'Ongoing research',
    },
    {
      name: 'SMARTSTUDY',
      tag: 'Never miss a deadline again',
      desc: 'Turns module guides into a real study schedule — built for BIUST students.',
      src: '/smart-study.png',
      type: 'image' as const,
      status: 'In development',
    },
    {
      name: 'FALL — FACE ID',
      tag: 'Face recognition project',
      desc: 'Live demo — press N to reach this project, video plays automatically.',
      src: '/face%20id.mp4',
      type: 'video' as const,
      status: 'Demo',
    },
  ];

  const [idx, setIdx] = useState(0);
  const project = projects[idx];

  const nextProject = useCallback(() => {
    setIdx((p) => (p + 1) % projects.length);
  }, [projects.length]);

  // Press N while on this section → next project
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        e.stopPropagation();
        nextProject();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, nextProject]);

  // Reset to first project when leaving the section
  useEffect(() => {
    if (!active) setIdx(0);
  }, [active]);

  return (
    <div className="section-frame" style={{ background: '#0f0f0f' }}>
      <div className="relative w-full h-full flex flex-col px-12 md:px-20 py-10 overflow-hidden">

        {/* Top bar */}
        <div className={`flex items-center justify-between transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <span className="chapter-label" style={{ color: '#333' }}>07 / PROJECTS WE'RE WORKING ON</span>
          <span className="geist-pixel text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}>
            {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* Upper zone: detail left, media top-right */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12 min-h-0 mt-6">

          {/* Left: project identity */}
          <div className={`md:w-[30%] shrink-0 flex flex-col justify-center transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs tracking-widest" style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
                {project.tag}
              </span>
            </div>
            <h2 key={`title-${idx}`} className="geist-pixel text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)', lineHeight: 0.95 }}>
              {project.name}
            </h2>
            <p className="mt-4 text-green-400/70 text-xs"
              style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
              ● {project.status}
            </p>
          </div>

          {/* Right: large media, never overlapping the text */}
          <div className={`flex-1 min-h-0 flex items-stretch justify-end transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '200ms' }}>
            <div key={idx} className="relative w-full overflow-hidden rounded-xl border"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: '#000', minHeight: '300px' }}>
              {project.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.src} alt={project.name}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'contain' }} />
              ) : (
                <video src={project.src} autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'contain' }} />
              )}
            </div>
          </div>
        </div>

        {/* Lower zone: detail strip, separated by a divider */}
        <div className={`mt-6 pt-5 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', transitionDelay: '300ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p style={{ fontFamily: 'Arial', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'none', lineHeight: 1.65, maxWidth: '62ch' }}>
              {project.desc}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                {projects.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`Go to project ${i + 1}`}
                    className="rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                    style={{
                      width: i === idx ? 20 : 6, height: 6,
                      background: i === idx ? '#fff' : 'rgba(255,255,255,0.2)',
                    }} />
                ))}
              </div>
              <button onClick={nextProject}
                className="geist-pixel text-xs px-4 py-2 rounded-full cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', background: 'transparent', letterSpacing: '0.1em' }}>
                PRESS N →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 8 : Builder's Infrastructure ─────────────────────────────────────
function SectionInfrastructure({ active }: SectionProps) {
  const stack = [
    { label: 'IDEA', desc: 'You bring the concept', color: '#fff', bg: '#111', icon: Lightbulb },
    { label: 'CODE', desc: 'GitHub Pro + Student Pack', color: '#000', bg: '#f5f0e8', icon: Code2 },
    { label: 'DATABASE', desc: 'Firebase / Supabase', color: '#000', bg: '#f5f0e8', icon: Database },
    { label: 'STORAGE', desc: 'Cloudflare R2 / DigitalOcean', color: '#000', bg: '#f5f0e8', icon: Cloud },
    { label: 'DOMAIN', desc: 'Club domain + project subdomains', color: '#000', bg: '#f5f0e8', icon: Globe },
    { label: 'DEPLOYED', desc: 'Live & running', color: '#fff', bg: '#111', icon: Rocket },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-20 overflow-hidden">

        {/* Laptop ↔ Server animation */}
        <div className={`absolute top-8 right-12 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}>
          <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
            {/* Laptop */}
            <rect x="10" y="30" width="70" height="45" rx="3" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="rgba(0,0,0,0.04)" />
            <rect x="14" y="34" width="62" height="32" rx="1" fill="rgba(0,0,0,0.06)" />
            <path d="M5 75 L15 75 L15 78 L75 78 L75 75 L85 75" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="none" />
            {/* Screen content dots */}
            <circle cx="30" cy="48" r="2" fill="rgba(0,0,0,0.15)" />
            <circle cx="42" cy="48" r="2" fill="rgba(0,0,0,0.15)" />
            <circle cx="54" cy="48" r="2" fill="rgba(0,0,0,0.15)" />
            <circle cx="30" cy="56" r="2" fill="rgba(0,0,0,0.1)" />
            <circle cx="42" cy="56" r="2" fill="rgba(0,0,0,0.1)" />
            {/* Label */}
            <text x="45" y="95" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="8" fontFamily="Arial">LOCAL</text>

            {/* Server */}
            <rect x="140" y="28" width="70" height="14" rx="2" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="rgba(0,0,0,0.04)" />
            <rect x="140" y="46" width="70" height="14" rx="2" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="rgba(0,0,0,0.04)" />
            <rect x="140" y="64" width="70" height="14" rx="2" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="rgba(0,0,0,0.04)" />
            {/* Server lights */}
            <circle cx="198" cy="35" r="2" fill="rgba(0,0,0,0.2)" />
            <circle cx="198" cy="53" r="2" fill="rgba(0,0,0,0.2)" />
            <circle cx="198" cy="71" r="2" fill="rgba(0,0,0,0.2)" />
            {/* Label */}
            <text x="175" y="95" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="8" fontFamily="Arial">SERVER</text>

            {/* Connection lines */}
            <line x1="80" y1="52" x2="140" y2="42" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="80" y1="58" x2="140" y2="58" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="80" y1="64" x2="140" y2="72" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="4 3" />

            {/* Animated data dots - going right (upload) */}
            <circle r="3" fill="rgba(0,0,0,0.35)">
              <animateMotion dur="2s" repeatCount="indefinite" path="M80,50 L140,42" />
            </circle>
            <circle r="3" fill="rgba(0,0,0,0.35)">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M80,58 L140,58" begin="0.6s" />
            </circle>
            <circle r="3" fill="rgba(0,0,0,0.35)">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M80,66 L140,72" begin="1.2s" />
            </circle>

            {/* Animated data dots - going left (download) */}
            <circle r="2.5" fill="rgba(0,0,0,0.2)">
              <animateMotion dur="2.6s" repeatCount="indefinite" path="M140,48 L80,54" begin="0.4s" />
            </circle>
            <circle r="2.5" fill="rgba(0,0,0,0.2)">
              <animateMotion dur="2.1s" repeatCount="indefinite" path="M140,62 L80,62" begin="1s" />
            </circle>
          </svg>
        </div>

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', fontSize: '0.85rem' }}>08 / BUILDER'S TOOLBOX</span>

        <div className={`mt-6 mb-10 transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}>
          <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
            YOU BRING THE IDEA.<br />
            <span className="text-black/30">WE REMOVE SOME<br />OF THE BARRIERS.</span>
          </h2>
        </div>

        {/* Pipeline */}
        <div className={`flex items-stretch gap-0 max-w-5xl transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '300ms' }}>
          {stack.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label}
                className={`flex-1 transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}>
                <div className="flex flex-col h-full border-r last:border-r-0"
                  style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                  {/* Top bar */}
                  <div className="h-2" style={{ background: step.bg === '#111' ? '#000' : 'transparent', borderBottom: step.bg !== '#111' ? '1px solid rgba(0,0,0,0.1)' : 'none' }} />

                  <div className="flex-1 p-8 flex flex-col items-center text-center min-h-[220px]"
                    style={{ background: step.bg === '#111' ? '#111' : 'transparent' }}>
                    {/* Step number */}
                    <span className="geist-pixel text-sm self-start"
                      style={{ color: step.bg === '#111' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}>
                      0{i + 1}
                    </span>

                    {/* Icon centered */}
                    <div className="flex-1 flex items-center justify-center">
                      <Icon size={56} strokeWidth={1.2}
                        style={{ color: step.bg === '#111' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)' }} />
                    </div>

                    {/* Label + description */}
                    <div className="w-full">
                      <p className="geist-pixel text-2xl font-bold mb-3"
                        style={{ color: step.bg === '#111' ? '#fff' : '#000' }}>{step.label}</p>
                      <p className="text-base"
                        style={{ fontFamily: 'Arial', color: step.bg === '#111' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)', textTransform: 'none', lineHeight: 1.5 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow connector */}
        <div className={`mt-6 flex items-center gap-2 text-black/40 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: 'Arial', transitionDelay: '800ms', textTransform: 'none' }}>
          <Rocket size={20} strokeWidth={1.2} className="text-black/30" />
          <span className="text-lg">Deployment assistance and technical guidance also available</span>
        </div>

      </div>
    </div>
  );
}

// ─── Section 9 : We Build People ─────────────────────────────────────────────
// Mirrors 08 / Builder's Toolbox cream canvas. Left side is visual hero:
// large rounded 2×2 photo grid. Skills 01–08 anchored bottom-right.
function SectionPeople({ active }: SectionProps) {
  const skills = [
    { label: 'TEAM UP', desc: 'Work with others', icon: Users, dark: true },
    { label: 'BUILD', desc: 'Idea → shipped', icon: Rocket, dark: false },
    { label: 'CONNECT', desc: 'Beyond your course', icon: Globe, dark: false },
    { label: 'PRESENT', desc: "Show what you've made", icon: Presentation, dark: false },
    { label: 'DEBUG', desc: 'Fix it when it breaks', icon: Wrench, dark: false },
    { label: 'RESEARCH', desc: "Learn the unknown", icon: Search, dark: false },
    { label: 'LEAD', desc: 'Lead a team', icon: Crown, dark: false },
    { label: 'MENTOR', desc: 'Lift others up', icon: HeartHandshake, dark: true },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-10 overflow-hidden">

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', fontSize: '0.85rem' }}>09 / WE BUILD PEOPLE</span>

        <div className="mt-4 flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl">

          {/* LEFT — visual hero: rounded 2×2 grid, lowered + taller so faces aren't clipped */}
          <div className="flex-[1.1] flex flex-col justify-end pb-1">
            <div className="grid grid-cols-2 gap-3 mt-10">
              {['/1.jpeg', '/2.jpg'].map((src, i) => (
                <div key={src}
                  className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ borderRadius: 20, border: '1px solid rgba(0,0,0,0.12)', height: 'clamp(210px, 30vh, 360px)', transitionDelay: `${250 + i * 100}ms` }}>
                  <img src={src} alt="BIUST graduate" className="w-full h-full object-cover" style={{ objectPosition: '50% 12%' }} />
                </div>
              ))}
              <div
                className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ borderRadius: 20, border: '1px solid rgba(0,0,0,0.12)', height: 'clamp(210px, 30vh, 360px)', transitionDelay: '450ms' }}>
                <img src="/3.jpeg" alt="BIUST graduate" className="w-full h-full object-cover" style={{ objectPosition: '50% 12%' }} />
              </div>
              {/* 4th tile completes the 2×2 */}
             
            </div>
          </div>

          {/* RIGHT — message */}
          <div className={`flex-[0.6] flex flex-col justify-center transition-all duration-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
            style={{ transitionDelay: '200ms' }}>
            <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', lineHeight: 0.9 }}>
              THE GOAL IS SIMPLE<br />PICK UP NEW SKILLS.<br />
              <span className="text-black/30">GROW <br />TRY NEW THINGS.</span>
            </h2>
            <p className="mt-4 text-black/55" style={{ fontFamily: 'Arial', fontSize: '0.92rem', lineHeight: 1.65 }}>
            At the end of the day you&apos;ll have something to show for it  an edge as a job candidate.
            </p>
           </div>

        </div>



      </div>
    </div>
  );
}

// ─── Section 10 : We Are Nerds ─────────────────────────────────────────────────
function SectionNerds({ active }: SectionProps) {
  const mediaItems = [
    { type: 'video', src: '/minecraft.mp4', label: 'Minecraft' },
    { type: 'video', src: '/eating.mp4', label: 'Eating' },
    { type: 'image', src: '/club-photo.jpeg', label: 'Club Photo' },
    { type: 'image', src: '/among us.jpg', label: 'Among Us' },
    { type: 'image', src: '/dnd-game.jpg', label: 'D&D Game' },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-between items-center px-8 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999' }}>10 / WE'RE NERDS</span>

        {/* Text block */}
        <div className={`text-center transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '100ms' }}>
          <h2 className="geist-pixel text-black mb-4"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)', lineHeight: 0.9, letterSpacing: '0.03em' }}>
            WHAT&apos;S THE POINT IF WE&apos;RE NOT HAVING FUN?
          </h2>
          <p className="text-black/50" style={{ fontFamily: 'Arial', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: '55ch', margin: '0 auto' }}>
            We build, research, experiment, host events, play games, and occasionally remember to eat.
          </p>
        </div>

        {/* Media grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6 flex-1 w-full justify-center transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms', minHeight: 0 }}>

          {mediaItems.map((item, i) => (
            <div key={item.label}
              className="rounded-3xl overflow-hidden border border-black/10 shadow-lg"
              style={{ background: '#fff', aspectRatio: '16/9', minHeight: '180px' }}>
              {item.type === 'video' ? (
                <video autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                  src={item.src} />
              ) : (
                <img src={item.src} alt={item.label}
                  className="w-full h-full object-cover" />
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

// ─── Section 11 : Who Is This For ─────────────────────────────────────────────
function SectionWhoIsThisFor({ active }: SectionProps) {
  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#333' }}>11 / WHO IS THIS FOR?</span>

        <div className="flex flex-col md:flex-row items-start gap-16 mt-8">

          {/* Left */}
          <div className={`md:w-2/5 transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <h2 className="geist-pixel text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9 }}>
              YOU DON&apos;T NEED<br />TO KNOW<br />EVERYTHING.
            </h2>
            <div className="mt-6 mb-10 h-px bg-white/10" />
            <div className="h-16" />
            <p className="text-white/40" style={{ fontFamily: 'Arial', fontSize: '1.2rem', textTransform: 'none', lineHeight: 1.65 }}>
              We welcome everyone — from complete beginners to seasoned pros. Building great things takes both <strong style={{ color: 'rgba(255,255,255,0.7)' }}>fresh energy and deep experience</strong>. As long as you’re ready to collaborate, do your part, and learn with us, you’ll fit right in.
            </p>
          </div>

          {/* Right: student image */}
          <div className={`md:w-3/5 flex items-center justify-center transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}>
            <img src="/STUDENT.svg" alt="Student"
              className="w-full max-w-md h-auto" />
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 12 : Finale (merged Final + Thank You) ────────────────────────────
function SectionFinale({ active }: SectionProps) {
  const line1 = useTypingEffect("We don't just teach students how to build.", active, 18);
  const line2 = useTypingEffect('We give them a place to build.', line1.length > 30, 18);
  const showLogo = active && line2.length > 20;

  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8 overflow-hidden">

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Typewriter quote */}
        <div className={`text-center max-w-2xl transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/40 text-lg mb-2 min-h-[1.8rem]"
            style={{ fontFamily: 'Arial', textTransform: 'none', fontStyle: 'italic' }}>
            {line1}<span className={line1.length > 0 && line1.length < 44 ? 'animate-blink' : 'hidden'}>|</span>
          </p>
          <p className="text-white text-xl font-bold min-h-[2rem]"
            style={{ fontFamily: 'Arial', textTransform: 'none' }}>
            {line2}<span className={line2.length > 0 && line2.length < 31 ? 'animate-blink' : 'hidden'}>|</span>
          </p>
        </div>

        {/* Logo + website block — appears once the quote finishes typing */}
        <div className={`mt-8 flex flex-col items-center text-center transition-all duration-300 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col items-center">
            <Image src="/logos/biust logo2.png" alt="BIUST Innovation Club" width={260} height={260}
              style={{ objectFit: 'contain', marginBottom: '1rem' }} />
            <p className="geist-pixel text-white/40 text-xs tracking-widest">
              LEARN · BUILD · RESEARCH · SHIP
            </p>
            <p className="mt-6 text-white text-center"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.02em', wordBreak: 'break-all' }}>
              biustinnovation.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 13 : Thank You ───────────────────────────────────────────────────
function SectionThankYou({ active }: SectionProps) {
  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8 overflow-hidden">

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <div className={`flex flex-col items-center text-center transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '150ms' }}>
          <h2 className="geist-pixel text-white"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 0.9 }}>
            THANK YOU.
          </h2>

          <p className="geist-pixel mt-4"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>
            ANY QUESTIONS?
          </p>
        </div>

      </div>
    </div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-white/5">
      <div className="h-full bg-white/40 transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }} />
    </div>
  );
}

// ─── Section Counter ──────────────────────────────────────────────────────────
function SectionCounter({ current, total, onPrev, onNext }: {
  current: number; total: number;
  onPrev: () => void; onNext: () => void;
}) {
  const isDark = [0, 2, 7, 10, 11, 12, 13].includes(current);
  const color = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)';
  const hoverBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 z-50">
      <button onClick={onPrev} disabled={current === 0}
        className="nav-pill-btn"
        style={{
          color, border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
          background: 'transparent', opacity: current === 0 ? 0.3 : 1,
        }}
        aria-label="Previous section">
        ←
      </button>

      <span className="geist-pixel text-xs"
        style={{ color, letterSpacing: '0.12em' }}>
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      <button onClick={onNext} disabled={current === total - 1}
        className="nav-pill-btn"
        style={{
          color, border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
          background: 'transparent', opacity: current === total - 1 ? 0.3 : 1,
        }}
        aria-label="Next section">
        →
      </button>
    </div>
  );
}

// ─── Dot Nav ──────────────────────────────────────────────────────────────────
function DotNav({ current, total, onChange, dark }: {
  current: number; total: number; onChange: (i: number) => void; dark: boolean;
}) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onChange(i)}
          className="w-1.5 h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer p-0"
          style={{
            background: i === current
              ? (dark ? '#fff' : '#000')
              : (dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'),
            transform: i === current ? 'scale(1.5)' : 'scale(1)',
          }}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDark = [0, 2, 3, 6, 8, 10, 11, 12, 13].includes(current);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= TOTAL_SECTIONS || animating) return;
    setAnimating(true);
    setCurrent(idx);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAnimating(false), 450);
  }, [animating]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    let lastY = 0;
    let debounce = false;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (debounce) return;
      if (e.deltaY > 30) next();
      else if (e.deltaY < -30) prev();
      debounce = true;
      setTimeout(() => { debounce = false; }, 550);
      lastY = e.deltaY;
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  // Touch swipe
  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (diff > 50) next();
      else if (diff < -50) prev();
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  const sections = [
    <SectionOpening key={0} active={current === 0} />,
    <SectionGap key={1} active={current === 1} />,
    <SectionAboutClub key={2} active={current === 2} />,
    <SectionClub key={3} active={current === 3} />,
    <SectionBuildLoop key={4} active={current === 4} />,
    <SectionWhatWeBuild key={5} active={current === 5} />,
    <SectionCollaboration key={6} active={current === 6} />,
    <SectionResearch key={7} active={current === 7} />,
    <SectionInfrastructure key={8} active={current === 8} />,
    <SectionPeople key={9} active={current === 9} />,
    <SectionNerds key={10} active={current === 10} />,
    <SectionWhoIsThisFor key={11} active={current === 11} />,
    <SectionFinale key={12} active={current === 12} />,
    <SectionThankYou key={13} active={current === 13} />,
  ];

  return (
    <>
      <ProgressBar current={current} total={TOTAL_SECTIONS} />
      <DotNav current={current} total={TOTAL_SECTIONS} onChange={goTo} dark={isDark} />
      <SectionCounter current={current} total={TOTAL_SECTIONS} onPrev={prev} onNext={next} />

      {/* Section stack */}
      <div className="fixed inset-4 md:inset-2 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 bg-black">
        {sections.map((section, i) => (
          <div key={i}
            className="absolute inset-0 transition-all"
            style={{
              transform: i < current ? 'translateY(-100%)' : i > current ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
              zIndex: i === current ? 10 : i === current - 1 ? 9 : 1,
            }}>
            {section}
          </div>
        ))}
      </div>
    </>
  );
}
