import React, { useEffect, useState } from 'react';

export default function RetroText({ children }) {
  const [visibleChildren, setVisibleChildren] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < children.length) {
        setVisibleChildren((prevChildren) => [
          ...prevChildren,
          children[currentIndex],
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [children, currentIndex]);

  return (
    <div className="retro-text">
      {visibleChildren}
    </div>
  );
}
