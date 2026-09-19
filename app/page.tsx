'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const TOTAL_SECTIONS = 11;

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
        <div className={`transition-all duration-700 mb-12 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}>
          <Image src="/logos/trans-logo.png" alt="BIUST Innovation Club" width={700} height={700}
            style={{ filter: 'invert(1) brightness(2)', objectFit: 'contain' }} />
        </div>

        {/* Club name */}
        <h1
          className={`geist-pixel text-center text-white transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 6.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            transitionDelay: '200ms',
          }}
        >
          BIUST<br />INNOVATION<br />CLUB
        </h1>

        {/* Divider */}
        <div className={`my-8 h-px w-24 bg-white/30 transition-all duration-700 ${active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{ transitionDelay: '500ms', transformOrigin: 'left' }} />

        {/* Tagline */}
        <p className={`geist-pixel text-white/50 text-sm tracking-widest transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '650ms' }}>
          LEARN · BUILD · RESEARCH · SHIP
        </p>

        {/* Bottom prompt */}
        <div className={`absolute bottom-10 flex flex-col items-center gap-2 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '900ms' }}>
          <span className="text-white/30 text-xs tracking-widest">PRESS ↓ TO EXPLORE</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>

      </div>
    </div>
  );
}

// ─── Section 1 : The Gap ──────────────────────────────────────────────────────
function SectionGap({ active }: SectionProps) {
  const subjects = ['Programming', 'Databases', 'AI / ML', 'Networking', 'Cybersecurity', 'UI/UX', 'Data'];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        {/* Chapter label */}
        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', transitionDelay: '0ms' }}>01 / THE GAP</span>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 mt-6">

          {/* Left: the tension */}
          <div className={`flex-1 transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
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

          {/* Right: subject chips + gap message */}
          <div className={`flex-1 transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-wrap gap-2 mb-8">
              {subjects.map((s, i) => (
                <span key={s}
                  className={`subject-chip transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${400 + i * 60}ms` }}>
                  {s}
                </span>
              ))}
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

// ─── Section 2 : The Club ─────────────────────────────────────────────────────
function SectionClub({ active }: SectionProps) {
  const lines = [
    { text: 'Not a coding club.', muted: false },
    { text: 'A place to explore ideas.', muted: true },
    { text: 'Form teams.', muted: true },
    { text: 'Build prototypes.', muted: true },
    { text: 'Do research.', muted: true },
    { text: 'Work with organisations.', muted: true },
    { text: 'Learn from one another.', muted: true },
  ];

  return (
    <div className="section-frame" style={{ background: '#111' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#444' }}>02 / THE CLUB</span>

        <div className="mt-6 space-y-1">
          {lines.map((line, i) => (
            <div key={i}
              className={`transition-all duration-600 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="geist-pixel"
                style={{
                  fontSize: i === 0 ? 'clamp(1.6rem, 4.5vw, 4rem)' : 'clamp(1rem, 3vw, 2.5rem)',
                  color: i === 0 ? '#fff' : 'rgba(255,255,255,0.25)',
                  lineHeight: 1.1,
                }}>
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className={`mt-12 flex items-center gap-4 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
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

// ─── Section 3 : The Build Loop ───────────────────────────────────────────────
function SectionBuildLoop({ active }: SectionProps) {
  const steps = ['LEARN', 'EXPLORE', 'BUILD', 'TEST', 'DEPLOY', 'SHARE'];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!active) { setTick(0); return; }
    const id = setInterval(() => setTick(t => (t + 1) % steps.length), 1000);
    return () => clearInterval(id);
  }, [active, steps.length]);

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center items-center px-8 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999', marginBottom: '2rem' }}>03 / THE BUILD LOOP</span>

        {/* Active word — big */}
        <div className="relative flex items-center justify-center" style={{ height: '14rem' }}>
          {steps.map((step, i) => (
            <h2 key={step}
              className="geist-pixel absolute text-center transition-all duration-500"
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
        <div className={`flex items-center gap-3 mt-4 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
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
        <div className={`mt-8 text-black/30 text-sm transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
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

// ─── Section 4 : What We Build ────────────────────────────────────────────────
function SectionWhatWeBuild({ active }: SectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      label: 'Software & Platforms',
      color: '#0a0a0a',
      fg: '#fff',
      items: [
        { name: 'Innovation Notice Board', desc: 'Campus-wide student notice board with SRC collaboration' },
        { name: 'Club Website', desc: 'The club\'s own web presence and project showcase' },
        { name: 'Course Platform', desc: 'Learning platform for practical tech courses' },
        { name: 'Org Websites', desc: 'Websites built for student organisations on campus' },
      ],
    },
    {
      label: 'AI & Research',
      color: '#1a1a2e',
      fg: '#a78bfa',
      items: [
        { name: 'Project Yapper', desc: 'Setswana speech recognition research using Whisper' },
        { name: 'AI Agents', desc: 'Building and experimenting with agentic AI workflows' },
        { name: 'RAG Systems', desc: 'Retrieval-augmented generation experiments' },
        { name: 'Model Research', desc: 'Hands-on experimentation with open and closed models' },
      ],
    },
    {
      label: 'Cybersecurity',
      color: '#1a0a0a',
      fg: '#f87171',
      items: [
        { name: 'Security Research', desc: 'Offensive and defensive security experimentation' },
        { name: 'Network/Infra', desc: 'Infrastructure and network-level research projects' },
        { name: 'CTF & Challenges', desc: 'Capture-the-flag and technical security challenges' },
        { name: 'Security Tooling', desc: 'Building tools for security-oriented workflows' },
      ],
    },
    {
      label: 'Games & Creative',
      color: '#0a0f1a',
      fg: '#60a5fa',
      items: [
        { name: 'Game Development', desc: 'Student-built games and interactive experiences' },
        { name: 'Interactive Experiments', desc: 'Creative technology experiments and prototypes' },
        { name: 'Visual Projects', desc: 'UI experiments and visual explorations' },
        { name: 'Student Projects', desc: 'Unique self-directed builds by club members' },
      ],
    },
  ];

  const cat = categories[activeCategory];

  return (
    <div className="section-frame" style={{ background: cat.color, transition: 'background 0.6s ease' }}>
      <div className="relative w-full h-full flex flex-col px-12 md:px-20 py-12 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: 'rgba(255,255,255,0.2)' }}>04 / WHAT WE BUILD</span>

        {/* Category tabs */}
        <div className={`flex flex-wrap gap-2 mt-6 mb-8 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '100ms' }}>
          {categories.map((c, i) => (
            <button key={c.label} onClick={() => setActiveCategory(i)}
              className="text-xs tracking-wider px-4 py-2 border transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: 'Arial',
                textTransform: 'uppercase',
                borderColor: activeCategory === i ? cat.fg : 'rgba(255,255,255,0.15)',
                color: activeCategory === i ? cat.fg : 'rgba(255,255,255,0.4)',
                background: 'transparent',
                letterSpacing: '0.08em',
              }}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Active content */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 items-start">

          {/* Category title */}
          <div className={`md:w-1/3 transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}>
            <h2 className="geist-pixel"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', color: cat.fg, lineHeight: 0.9 }}>
              {cat.label.toUpperCase().replace(' & ', '\n&\n')}
            </h2>

            {/* Screenshot placeholder */}
            <div className="mt-6 border border-white/10 rounded-sm overflow-hidden"
              style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.03)' }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'Arial', textTransform: 'none' }}>
                  screenshot placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Project list */}
          <div className="md:w-2/3 space-y-0">
            {cat.items.map((item, i) => (
              <div key={item.name}
                className={`border-t transition-all duration-500 py-5 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                style={{ borderColor: 'rgba(255,255,255,0.08)', transitionDelay: `${300 + i * 80}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-white" style={{ fontFamily: 'Arial', fontSize: '1rem', textTransform: 'none' }}>
                      {item.name}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Arial', textTransform: 'none' }}>
                      {item.desc}
                    </p>
                  </div>
                  <span className="geist-pixel text-xs shrink-0" style={{ color: 'rgba(255,255,255,0.15)' }}>
                    0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 5 : Real-World Collaboration ─────────────────────────────────────
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

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999' }}>05 / REAL-WORLD IMPACT</span>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mt-8">

          {/* Left: statement */}
          <div className={`md:w-2/5 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
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
                className={`flex items-center justify-between border-b py-4 transition-all duration-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
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

// ─── Section 6 : Research Lab ─────────────────────────────────────────────────
function SectionResearch({ active }: SectionProps) {
  const [openQ, setOpenQ] = useState<number | null>(null);

  const questions = [
    { q: 'Can we recognise Setswana speech with modern AI models?', a: 'Project Yapper — ongoing Whisper-based speech recognition research for Setswana, a Bantu language with limited NLP resources.' },
    { q: 'Can students build useful AI agents?', a: 'We\'ve built and deployed agentic workflows using local and cloud models, experimenting with tool use, RAG, and multi-step reasoning.' },
    { q: 'Can we automate something that currently requires manual work?', a: 'Several projects started from real manual processes observed on campus. Some became software. Some became research papers.' },
    { q: 'Can we build software for problems students actually experience?', a: 'The Innovation Notice Board came from a real communication gap between the SRC and students. We built the solution.' },
    { q: 'Can students experiment with technology before it goes mainstream?', a: 'We actively experiment with emerging tools — agentic systems, local AI, open models — before they become standard curriculum.' },
  ];

  return (
    <div className="section-frame" style={{ background: '#0f0f0f' }}>
      <div className="relative w-full h-full flex flex-col px-12 md:px-20 py-10 overflow-hidden overflow-y-auto">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#333' }}>06 / RESEARCH & EXPERIMENTATION</span>

        {/* Lab notebook header */}
        <div className={`mt-6 mb-8 flex items-center gap-3 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '100ms' }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs tracking-widest" style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
            OPEN QUESTIONS
          </span>
        </div>

        <h2 className={`geist-pixel text-white mb-8 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', lineHeight: 0.95, transitionDelay: '150ms' }}>
          SOME PROJECTS<br />START WITH A<br />QUESTION.
        </h2>

        {/* Accordion questions */}
        <div className="space-y-0 max-w-2xl">
          {questions.map((item, i) => (
            <div key={i}
              className={`border-t transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
              style={{ borderColor: 'rgba(255,255,255,0.06)', transitionDelay: `${250 + i * 70}ms` }}>
              <button
                onClick={() => setOpenQ(openQ === i ? null : i)}
                className="w-full py-4 flex items-start justify-between gap-4 text-left cursor-pointer bg-transparent border-none"
              >
                <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'none', lineHeight: 1.5 }}>
                  {item.q}
                </span>
                <span className="shrink-0 text-white/20 mt-0.5 transition-transform duration-300"
                  style={{ transform: openQ === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              {openQ === i && (
                <div className="pb-4 pr-8">
                  <p style={{ fontFamily: 'Arial', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textTransform: 'none', lineHeight: 1.65 }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className={`mt-8 text-white/20 text-sm transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: 'Arial', textTransform: 'none', transitionDelay: '700ms' }}>
          Some projects become products. Some become research. Some just teach us something.
        </p>

      </div>
    </div>
  );
}

// ─── Section 7 : Builder's Infrastructure ─────────────────────────────────────
function SectionInfrastructure({ active }: SectionProps) {
  const stack = [
    { label: 'IDEA', desc: 'You bring the concept', color: '#fff', bg: '#111' },
    { label: 'CODE', desc: 'GitHub Pro + Student Pack', color: '#000', bg: '#f5f0e8' },
    { label: 'DATABASE', desc: 'Firebase / Supabase', color: '#000', bg: '#f5f0e8' },
    { label: 'STORAGE', desc: 'Cloudflare R2 / DigitalOcean', color: '#000', bg: '#f5f0e8' },
    { label: 'DOMAIN', desc: 'Club domain + project subdomains', color: '#000', bg: '#f5f0e8' },
    { label: 'DEPLOYED', desc: 'Live & running', color: '#fff', bg: '#111' },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-20 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999' }}>07 / BUILDER'S TOOLBOX</span>

        <div className={`mt-6 mb-8 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}>
          <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9 }}>
            YOU BRING THE IDEA.<br />
            <span className="text-black/30">WE REMOVE SOME<br />OF THE BARRIERS.</span>
          </h2>
        </div>

        {/* Pipeline */}
        <div className={`flex items-stretch gap-0 max-w-4xl transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '300ms' }}>
          {stack.map((step, i) => (
            <div key={step.label}
              className={`flex-1 transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}>
              <div className="flex flex-col h-full border-r last:border-r-0"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                {/* Top bar */}
                <div className="h-1" style={{ background: step.bg === '#111' ? '#000' : 'transparent', borderBottom: step.bg !== '#111' ? '1px solid rgba(0,0,0,0.1)' : 'none' }} />

                <div className="flex-1 p-4 flex flex-col justify-between"
                  style={{ background: step.bg === '#111' ? '#111' : 'transparent' }}>
                  <span className="geist-pixel text-xs"
                    style={{ color: step.bg === '#111' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}>
                    0{i + 1}
                  </span>
                  <div>
                    <p className="geist-pixel text-sm font-bold mb-1"
                      style={{ color: step.bg === '#111' ? '#fff' : '#000' }}>{step.label}</p>
                    <p className="text-xs"
                      style={{ fontFamily: 'Arial', color: step.bg === '#111' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)', textTransform: 'none', lineHeight: 1.4 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow connector */}
        <div className={`mt-4 flex items-center gap-2 text-black/30 text-xs transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: 'Arial', transitionDelay: '800ms', textTransform: 'none' }}>
          <span>Deployment assistance and technical guidance also available</span>
        </div>

      </div>
    </div>
  );
}

// ─── Section 8 : We Build People ─────────────────────────────────────────────
function SectionPeople({ active }: SectionProps) {
  const skills = ['Technical ability', 'Research skills', 'Teamwork', 'Leadership', 'Communication',
    'Project management', 'Problem solving', 'Independent learning', 'Working with stakeholders', 'Presenting & defending ideas'];

  return (
    <div className="section-frame" style={{ background: '#111' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#333' }}>08 / WE BUILD PEOPLE</span>

        <div className="flex flex-col md:flex-row items-start gap-16 mt-8">

          {/* Left */}
          <div className={`md:w-2/5 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <h2 className="geist-pixel text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9 }}>
              THE PROJECT<br />IS THE OUTPUT.
            </h2>
            <div className="mt-4 h-px bg-white/10 w-full" />
            <h2 className="geist-pixel mt-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9, color: 'rgba(255,255,255,0.25)' }}>
              THE STUDENT<br />IS THE PRODUCT.
            </h2>

            {/* Photo grid placeholder */}
            <div className="mt-8 grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-1"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.1)', fontFamily: 'Arial', textTransform: 'none' }}>
                    photo
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skills */}
          <div className="md:w-3/5">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={skill}
                  className={`inline-block text-sm transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{
                    transitionDelay: `${200 + i * 60}ms`,
                    padding: '0.4rem 0.9rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Arial',
                    textTransform: 'none',
                  }}>
                  {skill}
                </span>
              ))}
            </div>

            <p className={`mt-10 text-white/25 text-sm max-w-sm transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: 'Arial', textTransform: 'none', lineHeight: 1.7, transitionDelay: '900ms' }}>
              A student might join knowing Python and leave having led a team, worked with an organisation, deployed a system, researched a problem, and mentored another student.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 9 : We Are Nerds ─────────────────────────────────────────────────
function SectionNerds({ active }: SectionProps) {
  const things = [
    { emoji: '⛏️', label: 'Minecraft' },
    { emoji: '🎮', label: 'Among Us' },
    { emoji: '🍕', label: 'Snacks' },
    { emoji: '🏆', label: 'Technical Challenges' },
    { emoji: '🤝', label: 'Internship Events' },
    { emoji: '🤖', label: 'AI Experiments' },
    { emoji: '🎉', label: 'Social Sessions' },
    { emoji: '🔐', label: 'Random Tech Stuff' },
  ];

  return (
    <div className="section-frame" style={{ background: '#f5f0e8' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#999' }}>09 / WE'RE NERDS 😂</span>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mt-6">

          {/* Left */}
          <div className={`md:w-1/2 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <h2 className="geist-pixel text-black" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
              WE KNOW.
            </h2>
            <div className="mt-2 mb-6 h-px bg-black/15 w-3/4" />
            <p className="text-black/60" style={{ fontFamily: 'Arial', fontSize: '1rem', lineHeight: 1.7, textTransform: 'none' }}>
              We also play Minecraft, run Among Us sessions, eat snacks, and host events. We hosted an internship-focused event and are planning an agentic AI workshop.
            </p>
            <p className="mt-4 text-black" style={{ fontFamily: 'Arial', fontSize: '1rem', fontWeight: 700, textTransform: 'none' }}>
              But we're also a community.
            </p>
          </div>

          {/* Right: activity grid */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-4 gap-2">
              {things.map((t, i) => (
                <div key={t.label}
                  className={`flex flex-col items-center gap-1 p-3 border border-black/10 transition-all duration-500 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${200 + i * 60}ms`, background: i % 3 === 0 ? '#111' : 'transparent' }}>
                  <span style={{ fontSize: '1.5rem' }}>{t.emoji}</span>
                  <span className="text-xs text-center"
                    style={{ fontFamily: 'Arial', color: i % 3 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)', textTransform: 'none', lineHeight: 1.3 }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Event photo placeholder */}
            <div className="mt-4 border border-black/10 flex flex-col items-center justify-center gap-2"
              style={{ height: '90px', background: 'rgba(0,0,0,0.02)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span style={{ fontFamily: 'Arial', fontSize: '0.7rem', color: 'rgba(0,0,0,0.2)', textTransform: 'none' }}>
                event photo placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section 10 : Who Is This For ─────────────────────────────────────────────
function SectionWhoIsThisFor({ active }: SectionProps) {
  const areas = ['Software Engineering', 'Backend / Frontend', 'AI / ML', 'Cybersecurity',
    'Data', 'Game Development', 'Hardware / Embedded', 'Design', 'Research'];

  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col justify-center px-12 md:px-24 overflow-hidden">

        <span className={`chapter-label transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#333' }}>10 / WHO IS THIS FOR?</span>

        <div className="flex flex-col md:flex-row items-start gap-16 mt-8">

          {/* Left */}
          <div className={`md:w-2/5 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}>
            <h2 className="geist-pixel text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.9 }}>
              YOU DON'T NEED<br />TO KNOW<br />EVERYTHING.
            </h2>
            <div className="mt-6 h-px bg-white/10" />
            <p className="mt-6 text-white/40" style={{ fontFamily: 'Arial', fontSize: '0.95rem', textTransform: 'none', lineHeight: 1.65 }}>
              You need to be willing to <strong style={{ color: 'rgba(255,255,255,0.7)' }}>learn, build, and contribute</strong>. We have an onboarding process because our projects are team-based and research-oriented — not because we're elite.
            </p>
          </div>

          {/* Right: areas */}
          <div className="md:w-3/5">
            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((area, i) => (
                <span key={area}
                  className={`transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{
                    transitionDelay: `${200 + i * 60}ms`,
                    padding: '0.5rem 1rem',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Arial',
                    textTransform: 'none',
                    fontSize: '0.85rem',
                  }}>
                  {area}
                </span>
              ))}
            </div>

            {/* Attributes wanted */}
            <div className={`border-l-2 border-white/10 pl-5 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '700ms' }}>
              {['Build things', 'Research problems', 'Experiment freely', 'Learn continuously', 'Collaborate openly', 'Solve real problems'].map((attr, i) => (
                <p key={attr} className="text-sm mb-2" style={{ fontFamily: 'Arial', color: 'rgba(255,255,255,0.35)', textTransform: 'none' }}>
                  → {attr}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section 11 : Final ───────────────────────────────────────────────────────
function SectionFinal({ active }: SectionProps) {
  const line1 = useTypingEffect("We don't just teach students how to build.", active, 40);
  const line2 = useTypingEffect('We give them a place to build.', line1.length > 30, 40);

  return (
    <div className="section-frame" style={{ background: '#0a0a0a' }}>
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8 overflow-hidden">

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Typewriter quote */}
        <div className={`text-center max-w-2xl transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/40 text-lg mb-2 min-h-[1.8rem]"
            style={{ fontFamily: 'Arial', textTransform: 'none', fontStyle: 'italic' }}>
            {line1}<span className={line1.length > 0 && line1.length < 44 ? 'animate-blink' : 'hidden'}>|</span>
          </p>
          <p className="text-white text-xl font-bold min-h-[2rem]"
            style={{ fontFamily: 'Arial', textTransform: 'none' }}>
            {line2}<span className={line2.length > 0 && line2.length < 31 ? 'animate-blink' : 'hidden'}>|</span>
          </p>
        </div>

        {/* Logo + name */}
        <div className={`mt-16 flex flex-col items-center transition-all duration-700 ${active && line2.length > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}>
          <Image src="/logos/trans-logo.png" alt="BIUST Innovation Club" width={56} height={56}
            style={{ filter: 'invert(1) brightness(2)', objectFit: 'contain', marginBottom: '1.5rem' }} />

          <h2 className="geist-pixel text-white text-center"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', lineHeight: 0.9 }}>
            BIUST<br />INNOVATION<br />CLUB
          </h2>

          <div className="mt-8 h-px w-16 bg-white/20" />

          <p className="mt-6 geist-pixel text-white/40 text-xs tracking-widest">
            LEARN · BUILD · RESEARCH · SHIP
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
      <div className="h-full bg-white/40 transition-all duration-500"
        style={{ width: `${((current + 1) / total) * 100}%` }} />
    </div>
  );
}

// ─── Section Counter ──────────────────────────────────────────────────────────
function SectionCounter({ current, total, onPrev, onNext }: {
  current: number; total: number;
  onPrev: () => void; onNext: () => void;
}) {
  const isDark = [0, 2, 5, 7, 9, 10].includes(current);
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

  const isDark = [0, 2, 5, 7, 9, 10].includes(current);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= TOTAL_SECTIONS || animating) return;
    setAnimating(true);
    setCurrent(idx);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAnimating(false), 800);
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
      setTimeout(() => { debounce = false; }, 900);
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
    <SectionClub key={2} active={current === 2} />,
    <SectionBuildLoop key={3} active={current === 3} />,
    <SectionWhatWeBuild key={4} active={current === 4} />,
    <SectionCollaboration key={5} active={current === 5} />,
    <SectionResearch key={6} active={current === 6} />,
    <SectionInfrastructure key={7} active={current === 7} />,
    <SectionPeople key={8} active={current === 8} />,
    <SectionNerds key={9} active={current === 9} />,
    <SectionWhoIsThisFor key={10} active={current === 10} />,
    <SectionFinal key={11} active={current === 11} />,
  ];

  return (
    <>
      <ProgressBar current={current} total={TOTAL_SECTIONS} />
      <DotNav current={current} total={TOTAL_SECTIONS} onChange={goTo} dark={isDark} />
      <SectionCounter current={current} total={TOTAL_SECTIONS} onPrev={prev} onNext={next} />

      {/* Section stack */}
      <div className="fixed inset-0 overflow-hidden">
        {sections.map((section, i) => (
          <div key={i}
            className="absolute inset-0 transition-all"
            style={{
              transform: i < current ? 'translateY(-100%)' : i > current ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
              zIndex: i === current ? 10 : i === current - 1 ? 9 : 1,
            }}>
            {section}
          </div>
        ))}
      </div>
    </>
  );
}
