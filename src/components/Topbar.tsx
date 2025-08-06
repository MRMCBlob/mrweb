import React, { useRef, useState } from 'react';
import ThemeControl from './theme';
import { Braces } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects', isProjects: true },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  { label: 'Triangular Backend', href: 'https://github.com/triangular-discord/triangular' },
  { label: 'Triangular Frontend', href: 'https://github.com/triangular-discord/web' },
  { label: 'Blob Proxy', href: 'https://github.com/MRMCBlob/blob-proxy' },
];

const Topbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [showProjects, setShowProjects] = useState(false);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const projectsOverlayRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    const link = linksRef.current[idx];
    if (link) {
      const rect = link.getBoundingClientRect();
      const parentRect = link.parentElement!.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - parentRect.left + 'px',
        width: rect.width + 'px',
        opacity: 1,
        transition: 'left 0.3s cubic-bezier(.4,1.6,.6,1), width 0.3s cubic-bezier(.4,1.6,.6,1)',
      });
    }
    if (quickLinks[idx].isProjects) {
      setShowProjects(true);
    }
  };

  const handleMouseLeave = (idx?: number) => {
    setHoveredIdx(null);
    setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    if (typeof idx === 'number' && quickLinks[idx].isProjects) {
      setTimeout(() => {
        if (!projectsOverlayRef.current?.matches(':hover')) {
          setShowProjects(false);
        }
      }, 100);
    }
  };

  const handleOverlayMouseLeave = () => {
    setShowProjects(false);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 28px',
        background: 'rgba(21, 20, 20, 0.55)',
        color: 'var(--color-card-foreground)',
        borderRadius: '14px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
        margin: '20px auto 24px auto',
        maxWidth: '900px',
        minHeight: '56px',
        fontSize: '1rem',
        position: 'fixed',
        zIndex: 10,
        backdropFilter: 'blur(16px) brightness(1.07)',
        WebkitBackdropFilter: 'blur(16px) brightness(1.07)',
        border: '1px solid rgba(255,255,255,0.18)',
      }}
    >
      <span style={{ fontWeight: 700, letterSpacing: 1, fontSize: '1.1rem' }}>MR_MCBlob</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative' }}>
        <nav
          className="quicklinks-nav"
          style={{ position: 'relative', display: 'flex' }}
          onMouseLeave={() => handleMouseLeave(hoveredIdx ?? undefined)}
        >
          {quickLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              ref={el => linksRef.current[idx] = el}
              className={`quicklink${hoveredIdx === idx ? ' hovered' : ''}`}
              style={{
                margin: '0 12px',
                padding: '2px 0',
                position: 'relative',
                fontWeight: 500,
                fontSize: '1rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              {link.label}
            </a>
          ))}
          <span
            className="quicklink-underline"
            style={{
              position: 'absolute',
              bottom: 0,
              height: '2.5px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
              pointerEvents: 'none',
              ...underlineStyle,
            }}
          />
          {/* Projects Overlay */}
          {showProjects && (
            <div
              ref={projectsOverlayRef}
              className="projects-overlay"
              style={{
                position: 'absolute',
                top: 'calc(100% + 20px)',
                left: linksRef.current[2]?.offsetLeft || 0,
                minWidth: 220,
                width: 240,
                background: 'var(--color-card)',
                borderRadius: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                padding: '12px 0',
                display: 'flex',
                flexDirection: 'column',
                opacity: showProjects ? 1 : 0,
                pointerEvents: showProjects ? 'auto' : 'none',
                transition: 'opacity 0.25s',
                zIndex: 100,
              }}
              onMouseLeave={handleOverlayMouseLeave}
              onMouseEnter={() => setShowProjects(true)}
            >
              {projects.map((proj) => (
                <a
                  key={proj.label}
                  href={proj.href}
                  className="quicklink project-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 24px',
                    margin: '0 10px',
                    borderRadius: '8px',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onClick={() => setShowProjects(false)}
                >
                  {proj.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
