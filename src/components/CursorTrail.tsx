import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailRef.current.length < 2) return;

      const now = Date.now();
      const maxAge = 500; // Trail lasts 500ms

      // Filter out old points
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < maxAge);

      // Draw the trail
      for (let i = 1; i < trailRef.current.length; i++) {
        const current = trailRef.current[i];
        const previous = trailRef.current[i - 1];
        const age = now - current.timestamp;
        const opacity = Math.max(0, 1 - (age / maxAge));
        const size = Math.max(1, 8 * opacity);

        // Create gradient
        const gradient = ctx.createLinearGradient(
          previous.x, previous.y,
          current.x, current.y
        );
        gradient.addColorStop(0, `hsla(0, 85%, 55%, ${opacity * 0.6})`);
        gradient.addColorStop(1, `hsla(200, 85%, 65%, ${opacity * 0.4})`);

        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.strokeStyle = gradient;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(current.x, current.y);
        ctx.stroke();
        
        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'hsl(0, 85%, 55%)';
        ctx.stroke();
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(drawTrail);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    const handleMouseEnter = () => {
      document.addEventListener('mousemove', handleMouseMove);
      drawTrail();
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trailRef.current = [];
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Start immediately if mouse is already over the page
    if (document.querySelector(':hover')) {
      handleMouseEnter();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorTrail;