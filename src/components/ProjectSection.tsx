import React from 'react';
import { Server, PanelsTopLeft, Braces } from 'lucide-react';
import { BentoGrid, BentoCard } from './magicui/bento-grid';

const projects = [
  {
    id: 'triangular-backend',
    name: 'Triangular Backend',
    description: 'A robust backend for the Triangular platform, handling all business logic and data processing.',
    github: 'https://github.com/triangular-discord/triangular',
    className: 'col-span-6',
    image: '/assets/tria-backend.jpg',
    Icon: Braces,
  },
  {
    id: 'triangular-frontend',
    name: 'Triangular Frontend',
    description: 'A sleek frontend for the Triangular platform, providing a modern user interface.',
    github: 'https://github.com/triangular-discord/web',
    className: 'col-span-4',
    image: '/assets/tria-web.png',
    Icon: PanelsTopLeft,
  },
  {
    id: 'blob-proxy',
    name: 'Blob Proxy',
    description: 'A proxy service for handling multiple web servers running on one machine or more on non https/http port through a single proxy server that can display different web servers output on different domain/subdomains.',
    github: 'https://github.com/MRMCBlob/blob-proxy',
    className: 'col-span-2',
    image: '/assets/blob.proxy.jpg',
    Icon: Server,
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="project-section">
      <h2 className="project-section-title">Projects</h2>
      <BentoGrid className="project-bento-grid">
        {projects.map((proj) => (
          <BentoCard
            key={proj.id}
            name={proj.name}
            className={`project-bento-card rounded-2xl ${proj.className}`}
            background={
              <div
                className="project-card-bg-image"
                style={{
                  backgroundImage: `url(${proj.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'absolute',
                  inset: 0,
                  zIndex: 0,
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.85) blur(3px)',
                  opacity: 0.85,
                  pointerEvents: 'none',
                  borderRadius: '24px',
                }}
              />
            }
            Icon={proj.Icon}
            description={proj.description}
            href={proj.github}
            cta="View on GitHub"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectSection;
