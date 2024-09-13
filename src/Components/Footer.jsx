import React from "react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>

      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    </footer>
  );
};

export default Footer;
