import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
