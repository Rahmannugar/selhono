"use client";
import React, { useEffect } from "react";

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
  lag = 7,
}) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const dot = new Dot(width / 2, height / 2, dotSize, lag, color);

    const onPointerMove = (e: PointerEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
      }
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.");
        return;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");

      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      canvas.width = width;
      canvas.height = height;

      document.body.appendChild(canvas);

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", onWindowResize);

      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();
    return () => destroy();
  }, [color, dotSize, lag]);

  return null;
};

export default FollowCursor;
