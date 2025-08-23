"use client";

import { useEffect, useRef } from "react";
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  symbol: string;
  size: number;
}
export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvasRef.current?.clientWidth || window.innerWidth;
    canvas.height = canvasRef.current?.clientHeight || window.innerHeight;
    const symbols = [
      "∑",
      "∫",
      "π",
      "∞",
      "∂",
      "α",
      "β",
      "λ",
      "∇",
      "≈",
      "±",
      "√",
      "Ω",
      "φ",
      "θ",
      "χ",
      "ψ",
      "ω",
    ];
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 20 + 15, // Tamaño entre 40 y 80
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        // Dibujar símbolo
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = "rgba(255, 0, 200, 0.75)";
        ctx.textAlign = "center";
        ctx.fillText(particle.symbol, particle.x, particle.y);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    animate();
    const handleResize = () => {
      canvas.width = canvasRef.current?.clientWidth || window.innerWidth;
      canvas.height = canvasRef.current?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0"
      style={{ zIndex: 1 }}
    />
  );
}
