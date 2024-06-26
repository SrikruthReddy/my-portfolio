import logo from './logo.svg';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.scss';
import { motion, AnimatePresence } from 'framer-motion';

const shrinkZoomVariants = {
  initial: {
    opacity: 0,
    scale: 0.8, // Start slightly smaller
  },
  in: {
    opacity: 1,
    scale: 1, // Normal size
    transition: {
      duration: 0.3, // Adjust duration as needed
      ease: 'easeInOut', // Use easeInOut for smoother effect
    },
  },
  out: {
    opacity: 0,
    scale: 0.8, // Shrink to smaller size
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout location={location} />}>
          <Route
            index
            element={
              <motion.div
                key="home"
                className="animated-route"
                variants={shrinkZoomVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <Home location={location} />
              </motion.div>
            }
          />
          <Route
            path="about"
            element={
              <motion.div
                key="about"
                className="animated-route"
                variants={shrinkZoomVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="experience"
            element={
              <motion.div
                key="experience"
                className="animated-route"
                variants={shrinkZoomVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="projects"
            element={
              <motion.div
                key="projects"
                className="animated-route"
                variants={shrinkZoomVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <Projects />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
