import logo from './logo.svg';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from 'react-loaders';

const shrinkZoomVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  in: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2, // Maintain the delay for smoother effect
      type: 'spring',
      stiffness: 150, // Lower stiffness for smoother animation
      damping: 30, // Higher damping for less bounce
    },
  },
  out: {
    opacity: 0,
    scale: 0.3,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
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
              <>
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
                <Loader type="pacman" className="loader-active" />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
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
                <Loader type="pacman" className="loader-active" />
              </>
            }
          />
          <Route
            path="experience"
            element={
              <>
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
                <Loader type="pacman" className="loader-active" />
              </>
            }
          />
          <Route
            path="projects"
            element={
              <>
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
                <Loader type="pacman" className="loader-active" />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <motion.div
                  key="contact"
                  className="animated-route"
                  variants={shrinkZoomVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <Contact />
                </motion.div>
                <Loader type="pacman" className="loader-active" />
              </>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
