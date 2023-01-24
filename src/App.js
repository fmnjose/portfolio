import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalNavigation from './Layouts/GlobalNavigation/GlobalNavigation';
import Footer from './Layouts/Footer/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import IT from './Pages/IT/IT';
import Creative from './Pages/Creative/Creative';

const LANGUAGE_OPTIONS = ["PT","EN"];

function App() {
  
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0])
  return (
    <Router>
    <div className="App">
      <GlobalNavigation 
        languageOptions={LANGUAGE_OPTIONS} 
        currentLanguage={language}
        setLanguage={(newLanguage) => setLanguage(newLanguage)}/>
      <div className="page-content">
        <Routes>
          <Route path="/it" element={<IT currentLanguage={language}/>} />
          <Route path="/creative" element={<Creative currentLanguage={language}/>} />
          <Route path="/about" element={<About currentLanguage={language}/>} />
          <Route path="/*" element={<Home currentLanguage={language}/>}/>
        </Routes>
      </div>
      <p>Mobile version is still W.I.P</p>
      <Footer currentLanguage={language}/>
    </div>
    </Router>
  );
}

export default App;
