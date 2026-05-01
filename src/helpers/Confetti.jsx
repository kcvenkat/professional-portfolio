import { useEffect, useRef } from "react";

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const COLORS = ["#9b5de5", "#c77dff", "#7b2fff", "#e0aaff", "#d4adfc", "#ffffff"];

export default function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 80 }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(-200, -10),
      r: randomBetween(4, 9),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: randomBetween(2, 5),
      drift: randomBetween(-1.5, 1.5),
      spin: randomBetween(-0.1, 0.1),
      angle: randomBetween(0, Math.PI * 2),
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));

    let frame;
    let done = false;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allGone = true;

      for (const p of pieces) {
        if (p.y < canvas.height + 20) allGone = false;
        p.y += p.speed;
        p.x += p.drift;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - p.y / canvas.height);

        if (p.shape === "rect") {
          ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (!allGone) {
        frame = requestAnimationFrame(draw);
      } else {
        done = true;
      }
    }

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}