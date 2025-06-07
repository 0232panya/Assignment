import React, { useRef, useEffect } from 'react';
import './CustomCursor.css'; // Import your CSS file for styling

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      cursorRef.current.style.left = `${clientX}px`;
      cursorRef.current.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="foggy-cursor" ref={cursorRef}>
      <div className="inner-cursor"></div>
    </div>
  );
};

export default CustomCursor;
