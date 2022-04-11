import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Style from './NavBar.module.css';
import { Link } from 'react-router-dom';



function Nav({onSearch}) {
  return (
<nav className={Style.navBar}> 

<div> <Link to={'/'}> <span className={Style.homeIcon}> <i class="bi bi-house-door"></i> </span> <span className={Style.homeSpan}>Home</span> </Link></div>
<Link to={'/about'}><div className={Style.homeSpan}>   <i class="bi bi-arrow-up-right-circle"></i> <span>About us </span> </div></Link>
<div className={Style.homeSpan}>
  <a href="https://github.com/Luisddr" target="_blank"><i class="bi bi-github"></i>  </a> 
  <a href="https://www.linkedin.com/in/luis-carlos-de-dios-rodr%C3%ADguez-0a4820175/" target="_blank"><i class="bi bi-linkedin"></i> </a> 
 </div>
<SearchBar onSearch={onSearch}/>



</nav>
  );
};

export default Nav;