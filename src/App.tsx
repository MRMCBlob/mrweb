import './App.css'
import Topbar from './components/Topbar';
import { StarsBackground } from './components/animate-ui/backgrounds/stars';
import StartSection from './components/StartSection';
import AboutPanel from './components/AboutPanel';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <>
      <Topbar />
      <StarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <StartSection />
        <AboutPanel />
        <ProjectSection />
        {/* Add your main content here, below the Topbar */}
      </div>
    </>
  );
}

export default App
