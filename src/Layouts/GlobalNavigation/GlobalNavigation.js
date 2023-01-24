import { Link } from "react-router-dom";
import './GlobalNavigation.css'
import navigationTabs from './GlobalNavigationTabs.json'

function GlobalNavigation({languageOptions, currentLanguage, setLanguage}){
    return (
      <div className="navbar">
        <p className="site-title">Filipe José</p>
        <div className="navbar-buttons-group">
            <select 
              value={currentLanguage} 
              onChange={(event) => setLanguage(event.target.value)}
              className='dropdown-wrapper'
            >
              {languageOptions.map(option => (
                <option key={option} value={option} className='dropdown-option'>
                  {option}
                </option>
              ))}
            </select>
            <Link to="/" className="navbar-button"> {navigationTabs["Home"][currentLanguage]}</Link>
            <Link to="/it" className="navbar-button"> {navigationTabs["IT"][currentLanguage]}</Link>
            <Link to="/creative" className="navbar-button"> {navigationTabs["Creative"][currentLanguage]}</Link>
            <Link to="/about" className="navbar-button"> {navigationTabs["About"][currentLanguage]}</Link>
        </div>
      </div>
    );
}
export default GlobalNavigation;