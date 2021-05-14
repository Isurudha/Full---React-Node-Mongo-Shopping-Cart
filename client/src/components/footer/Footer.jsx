import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <em>NIBM Shopping Cart</em>
      &nbsp;&copy;&nbsp;
      {new Date().getFullYear()}.
    </footer>
  );
};

export default Footer;
