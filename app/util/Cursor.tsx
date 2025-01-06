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
  lag = 7,
}) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement | null = null;
    let context: CanvasRenderingContext2D | null = null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let isFirstTouch = true;
    const cursor = { x: width / 2, y: height / 2 };

    const dot = new Dot(cursor.x, cursor.y, dotSize, lag, color);

    const showCursor = () => {
      if (canvas) {
        canvas.style.opacity = "1";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      showCursor();
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      showCursor();
      if (e.touches.length > 0) {
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
        if (isFirstTouch) {
          dot.jumpTo(cursor.x, cursor.y);
          isFirstTouch = false;
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
      animationFrame = requestAnimationFrame(updateDot);
    };

    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");

    if (canvas && context) {
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      canvas.style.opacity = "0";
      canvas.style.transition = "opacity 0.2s ease";
      canvas.width = width;
      canvas.height = height;

      document.body.appendChild(canvas);

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("touchstart", onTouchStart, { passive: false });
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      updateDot();
    }

    return () => {
      if (canvas) {
        canvas.remove();
      }
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [color, dotSize, lag]);

  return null;
};

export default FollowCursor;
