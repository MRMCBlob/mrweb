import React, { useState, useEffect } from 'react';
import exampleImg from '../../public/pfp.jpg';
import { SiJavascript, SiTypescript, SiReact, SiRust } from 'react-icons/si';

const techs = [
  {
    key: 'javascript',
    label: 'javascript',
    icon: <SiJavascript size={26} className="start-tech-icon" />,
  },
  {
    key: 'typescript',
    label: 'typescript',
    icon: <SiTypescript size={26} className="start-tech-icon" />,
  },
  {
    key: 'react',
    label: 'react',
    icon: <SiReact size={26} className="start-tech-icon" />,
  },
  {
    key: 'rust',
    label: 'rust',
    icon: <SiRust size={26} className="start-tech-icon" />,
  },
];

const StartSection: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcons(prev => !prev);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const renderTech = (key: string, label: string) => {
    const tech = techs.find(t => t.key === key);
    return (
      <span
        className={`start-tech${showIcons ? ' show-icon' : ''}`}
        style={{
          display: 'inline-block',
          minWidth: 22,
          minHeight: 22,
          verticalAlign: 'middle',
          transition: 'color 0.2s',
          cursor: 'pointer',
        }}
      >
        {showIcons && tech ? tech.icon : label}
      </span>
    );
  };

  return (
    <div className="start-section">
      <div className="start-section-text">
        <div className="start-section-title">Anto</div>
        <div className="start-section-desc">
          I&apos;m a backend dev with most knowledge in {renderTech('javascript', 'javascript')}/
          {renderTech('typescript', 'typescript')}, {renderTech('react', 'react')} and a bit {renderTech('rust', 'rust')}.
        </div>
      </div>
      <div className="start-img-container start-img-square">
        <img
          src={exampleImg}
          alt="Start section"
          className="start-img"
        />
      </div>
    </div>
  );
};

export default StartSection;
