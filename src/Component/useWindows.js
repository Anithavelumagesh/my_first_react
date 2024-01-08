import { useState, useEffect } from 'react';

// Custom Hook: UseWindowWidth
function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return windowWidth;
}

// Usage of Custom Hook in a Component
function MyComponent() {
  const width = useWindow();

  return (
    <div>
      <p>Window Width: {width}px</p>
    </div>
  );
}

export default useWindow;