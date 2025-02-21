// ZdogAnimation.jsx
import React, { useEffect } from 'react';
import Zdog from 'zdog';

const ZdogAnimation = () => {
    
  useEffect(() => {
    const TAU = Zdog.TAU;

    // Create the illustration
    let illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      dragRotate: true,
    });

    // Create a rectangle shape
    let rect = new Zdog.Rect({
      addTo: illo,
      width: 80,
      height: 64,
      stroke: 10,
      translate: { x: -48 },
      rotate: { y: TAU / 4 },
      color: '#E62',
    });

    // Copy and create another rectangle shape
    rect.copy({
      translate: { y: -48 },
      rotate: { x: TAU / 4 },
      color: '#636',
    });

    // Animation loop
    function animate() {
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on component unmount
    return () => {
      illo = null;
    };
  }, []);
  

  return (
    <canvas className="zdog-canvas" width="240" height="240"></canvas>
  );
};


export default ZdogAnimation;
