"use client";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";

interface CardItem {
  text: string;
  image: string;
  link?: string;
}

interface MultiCardMarqueeProps {
  items: CardItem[];
  speed?: number;
}

export default function Banner2({ items, speed = 60 }: MultiCardMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setContentWidth(container.scrollWidth / 2);
    let animationFrame: number;
    let lastTime: number;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        setOffset((prev) => {
          let newOffset = prev - (speed * delta) / 1000;
          if (Math.abs(newOffset) >= contentWidth) newOffset += contentWidth;
          return newOffset;
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed, contentWidth, isPaused]);

  return (
    <div className="relative w-full overflow-hidden h-58 sm:h-56 md:h-64 flex items-center">
      <div className="absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div
        ref={containerRef}
        style={{ transform: `translateX(${offset}px)` }}
        className="flex whitespace-nowrap gap-8 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...items, ...items].map((item, idx) => (
          <Link
            key={idx}
            to={item.link || ""}
            className="flex items-center gap-10 min-w-[220px] sm:min-w-[260px] md:min-w-[300px] shadow-md hover:shadow-xl rounded-xl md:rounded-2xl border transition-all duration-200 hover:scale-105 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.text}
              className="rounded-2xl object-cover w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#6e67ef]/80 to-[#FF7E5F]/80 bg-clip-text text-transparent">
              {item.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
