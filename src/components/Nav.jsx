import React from 'react';

import logo from '../images/logo.png';

const Nav = () => {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='' />
      <h1>my travel journal.</h1>
    </div>
  );
};

export default Nav;
