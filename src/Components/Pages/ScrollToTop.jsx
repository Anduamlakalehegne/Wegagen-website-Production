import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the icon from react-icons
import './ScrollToTop.css'; // Import the CSS file for custom styles

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
