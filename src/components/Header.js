import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
   
   render() {
      return (
         <header className="header">
            <img className="header__logo" src={logo} alt="логатип сайта" />
         </header>
      );
   }
}

export default Header;