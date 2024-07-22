import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    function changeDimensions() {
      setWindowSize([
        window.innerHeight,
        window.innerWidth
      ]);
    };
    window.addEventListener('resize', changeDimensions);

    return () => {
      window.removeEventListener('resize', changeDimensions);
    } // componentWillUnmount
  }, [])  
  return windowSize;

}
export default useWindowSize;
// so return the current screen width and current screen height at any given instance of time 
// you need to return the current screen with and current screen height.


// React Lazy 
// Redux toolkit 
// React testing library
// HOC
// Deployment
// React lifecycle
