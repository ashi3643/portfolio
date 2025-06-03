import React from "react";

// Custom hook for mousemove-based parallax effect
const useParallax = () => {
  React.useEffect(() => {
    function handleMouseMove(e) {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      document.querySelectorAll(".parallax-layer").forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed"));
        // Use translate3d for better performance
        layer.style.transform = `translate3d(${x * speed * 40}px, ${y * speed * 40}px, 0)`;
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
};

export default useParallax;