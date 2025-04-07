
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen  dark:bg-gray-900 transition-colors duration-200" 
        style={{ background: "linear-gradient(to right,#a8c0ff, #3f2b96)" }}
      >
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;