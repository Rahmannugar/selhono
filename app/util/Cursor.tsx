"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface FollowCursorProps {
  color?: string;
  dotSize?: number;
  lag?: number;
}

class Dot {
  position: Point;
  width: number;
  lag: number;
  color: string;

  constructor(x: number, y: number, width: number, lag: number, color: string) {
    this.position = { x, y };
    this.width = width;
    this.lag = lag;
    this.color = color;
  }

  jumpTo(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
    this.position.x += (x - this.position.x) / this.lag;
    this.position.y += (y - this.position.y) / this.lag;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

const FollowCursor: React.FC<FollowCursorProps> = ({
  color = "#323232a6",
  dotSize = 14,
  lag = 8,
}) => {
  const cursor = useRef<Point>({ x: 0, y: 0 });
  const lastMoveTime = useRef(0);
  const animationFrame = useRef(0);
  const dot = useRef<Dot | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const width = window.innerWidth;
    const height = window.innerHeight;

    cursor.current = { x: width / 2, y: height / 2 };
    dot.current = new Dot(width / 2, height / 2, dotSize, lag, color);

    if (!canvas.current) {
      canvas.current = document.createElement("canvas");
      context.current = canvas.current.getContext("2d");

      canvas.current.style.position = "fixed";
      canvas.current.style.top = "0";
      canvas.current.style.left = "0";
      canvas.current.style.pointerEvents = "none";
      canvas.current.style.zIndex = "9999";
      canvas.current.width = width;
      canvas.current.height = height;

      document.body.appendChild(canvas.current);
    }

    const onPointerMove = (e: PointerEvent) => {
      const now = Date.now();
      if (now - lastMoveTime.current > 16) {
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
        dot.current?.jumpTo(cursor.current.x, cursor.current.y);
        lastMoveTime.current = now;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        cursor.current.x = e.touches[0].clientX;
        cursor.current.y = e.touches[0].clientY;
        dot.current?.jumpTo(cursor.current.x, cursor.current.y);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        cursor.current.x = e.touches[0].clientX;
        cursor.current.y = e.touches[0].clientY;
      }
    };

    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      if (canvas.current) {
        canvas.current.width = newWidth;
        canvas.current.height = newHeight;
      }
    };

    const updateDot = () => {
      if (context.current && dot.current) {
        context.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
        dot.current.moveTowards(
          cursor.current.x,
          cursor.current.y,
          context.current
        );
      }
    };

    const loop = () => {
      updateDot();
      animationFrame.current = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.");
        return;
      }

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", onWindowResize);

      loop();
    };

    const destroy = () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };

    init();
    return () => destroy();
  }, [color, dotSize, lag]);

  return null;
};

export default FollowCursor;
