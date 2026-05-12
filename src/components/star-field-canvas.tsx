"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  trail: Array<{ x: number; y: number; opacity: number }>;
  lifetime: number;
  maxLifetime: number;
}

interface StarFieldCanvasProps {
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

function drawStaticBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#001233");
  gradient.addColorStop(0.5, "#001845");
  gradient.addColorStop(1, "#000814");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createStars(canvas: HTMLCanvasElement): Star[] {
  const stars: Star[] = [];
  const starCount = Math.min(window.innerWidth / 3, 200);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5,
      opacity: Math.random() * 0.8 + 0.2,
      pulse: 0,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    });
  }

  for (let i = 0; i < 15; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 2,
      opacity: Math.random() * 0.5 + 0.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
    });
  }

  return stars;
}

function createShootingStars(): ShootingStar[] {
  return Array.from({ length: 5 }, () => ({
    x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0,
    active: false, trail: [], lifetime: 0, maxLifetime: 0,
  }));
}

function activateShootingStar(star: ShootingStar, canvasWidth: number, canvasHeight: number) {
  star.x = Math.random() * canvasWidth;
  star.y = Math.random() * (canvasHeight * 0.5);
  star.angle = Math.PI / 6 + Math.random() * (Math.PI / 6);
  if (Math.random() > 0.5) star.angle = Math.PI - star.angle;
  star.speed = 5 + Math.random() * 10;
  star.length = 50 + Math.random() * 80;
  star.opacity = 0.7 + Math.random() * 0.3;
  star.active = true;
  star.trail = [];
  star.lifetime = 0;
  star.maxLifetime = 70 + Math.random() * 50;
}

function drawBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#001233");
  gradient.addColorStop(0.5, "#001845");
  gradient.addColorStop(1, "#000814");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const nebulaGradient = ctx.createRadialGradient(
    width * 0.8, height * 0.2, 0,
    width * 0.8, height * 0.2, width * 0.6
  );
  nebulaGradient.addColorStop(0, "rgba(75, 0, 130, 0.03)");
  nebulaGradient.addColorStop(0.5, "rgba(138, 43, 226, 0.02)");
  nebulaGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = nebulaGradient;
  ctx.fillRect(0, 0, width, height);
}

function drawStars(ctx: CanvasRenderingContext2D, stars: Star[]) {
  for (const star of stars) {
    star.pulse += star.pulseSpeed;
    const pulseOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
    glow.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity + 0.2})`;
    ctx.fill();
  }
}

function drawShootingStars(ctx: CanvasRenderingContext2D, shootingStars: ShootingStar[], canvasWidth: number, canvasHeight: number) {
  if (Math.random() < 0.01) {
    const inactive = shootingStars.find((s) => !s.active);
    if (inactive) activateShootingStar(inactive, canvasWidth, canvasHeight);
  }

  for (const star of shootingStars) {
    if (!star.active) continue;

    star.x += Math.cos(star.angle) * star.speed;
    star.y += Math.sin(star.angle) * star.speed;
    star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });
    if (star.trail.length > 20) star.trail.pop();

    ctx.beginPath();
    const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 3);
    headGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
    headGradient.addColorStop(1, "rgba(200, 255, 255, 0)");
    ctx.fillStyle = headGradient;
    ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
    ctx.fill();

    if (star.trail.length > 1) {
      ctx.beginPath();
      ctx.moveTo(star.trail[0].x, star.trail[0].y);
      for (let i = 1; i < star.trail.length; i++) {
        ctx.lineTo(star.trail[i].x, star.trail[i].y);
      }
      const trailGradient = ctx.createLinearGradient(
        star.trail[0].x, star.trail[0].y,
        star.trail[star.trail.length - 1].x, star.trail[star.trail.length - 1].y
      );
      trailGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      trailGradient.addColorStop(0.3, `rgba(120, 220, 255, ${star.opacity * 0.6})`);
      trailGradient.addColorStop(1, "rgba(70, 120, 255, 0)");
      ctx.strokeStyle = trailGradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.lineWidth = 4;
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
      ctx.stroke();
    }

    star.lifetime++;
    if (star.x < 0 || star.x > canvasWidth || star.y < 0 || star.y > canvasHeight || star.lifetime > star.maxLifetime) {
      star.active = false;
    }
  }
}

export function StarFieldCanvas({ prefersReducedMotion, isMobile }: StarFieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (prefersReducedMotion || isMobile) {
      drawStaticBackground(canvas, ctx);
      return;
    }

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const stars = createStars(canvas);
    const shootingStars = createShootingStars();

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(ctx, canvas.width, canvas.height);
      drawStars(ctx, stars);
      drawShootingStars(ctx, shootingStars, canvas.width, canvas.height);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [prefersReducedMotion, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
