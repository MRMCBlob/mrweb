import React from 'react';
import { Globe, MapPin, User, Languages } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaBluesky } from "react-icons/fa6";

const aboutInfo = [
  { icon: <User size={28} color="#fff" />, label: 'Name', value: 'Anto' },
  { icon: <Languages size={28} color="#fff" />, label: 'Language', value: 'German, English' },
  { icon: <MapPin size={28} color="#fff" />, label: 'Location', value: 'Germany' },
];

const socialLinks = [
  { icon: <FaBluesky size={36} color="#fff" />, label: 'Bluesky', href: 'https://bsky.app/profile/mrmcblob.com' },
  { icon: <FaDiscord size={36} color="#fff" />, label: 'Discord', href: 'https://discord.com/users/970700037216665640' },
  { icon: <FaXTwitter size={36} color="#fff" />, label: 'Twitter/X', href: 'https://x.com/Mr_mcblob0' },
];

const AboutPanel: React.FC = () => {
  return (
    <div className="about-panel">
      <div className="about-info">
        {aboutInfo.map((item) => (
          <div className="about-info-row" key={item.label}>
            <span className="about-info-icon">{item.icon}</span>
            <span className="about-info-label">{item.label}:</span>
            <span className="about-info-value">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="about-socials">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="about-social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutPanel;
