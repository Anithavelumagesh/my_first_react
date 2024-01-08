import React, { useRef, useEffect } from 'react';

const Useref= () => {
  // Creating a ref
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on initial render
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // Accessing the input element's value using ref
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      {/* Using the ref in an input element */}
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
};

export default Useref;
