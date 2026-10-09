"use client";

import { motion } from "framer-motion";

type IconProps = {
  className?: string;
  size?: number;
};

export function PixelStar({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FFD93D">
        <rect x="7" y="0" width="2" height="2" />
        <rect x="7" y="2" width="2" height="2" />
        <rect x="0" y="7" width="2" height="2" />
        <rect x="2" y="7" width="2" height="2" />
        <rect x="12" y="7" width="2" height="2" />
        <rect x="14" y="7" width="2" height="2" />
        <rect x="7" y="12" width="2" height="2" />
        <rect x="7" y="14" width="2" height="2" />
        <rect x="6" y="4" width="4" height="2" />
        <rect x="4" y="6" width="8" height="4" />
        <rect x="6" y="10" width="4" height="2" />
      </g>
    </svg>
  );
}

export function PixelHeart({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FF6B81">
        <rect x="2" y="2" width="4" height="2" />
        <rect x="10" y="2" width="4" height="2" />
        <rect x="0" y="4" width="6" height="2" />
        <rect x="10" y="4" width="6" height="2" />
        <rect x="0" y="6" width="16" height="2" />
        <rect x="2" y="8" width="12" height="2" />
        <rect x="4" y="10" width="8" height="2" />
        <rect x="6" y="12" width="4" height="2" />
      </g>
    </svg>
  );
}

export function PixelPhone({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#4A5568">
        <rect x="4" y="0" width="8" height="16" />
      </g>
      <g fill="#A9D9FF">
        <rect x="5" y="2" width="6" height="10" />
      </g>
      <g fill="#4A5568">
        <rect x="7" y="13" width="2" height="1" />
      </g>
    </svg>
  );
}

export function PixelComputer({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#4A5568">
        <rect x="1" y="1" width="14" height="9" />
      </g>
      <g fill="#A9D9FF">
        <rect x="2" y="2" width="12" height="7" />
      </g>
      <g fill="#718096">
        <rect x="6" y="11" width="4" height="1" />
        <rect x="3" y="13" width="10" height="1" />
      </g>
    </svg>
  );
}

export function PixelCamera({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#4A5568">
        <rect x="1" y="4" width="14" height="10" />
        <rect x="4" y="2" width="4" height="2" />
      </g>
      <g fill="#A9D9FF">
        <rect x="5" y="7" width="6" height="4" />
      </g>
    </svg>
  );
}

export function PixelController({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#4A5568">
        <rect x="2" y="5" width="12" height="6" />
        <rect x="0" y="6" width="2" height="4" />
        <rect x="14" y="6" width="2" height="4" />
      </g>
      <g fill="#FFD93D">
        <rect x="4" y="6" width="2" height="2" />
        <rect x="3" y="7" width="1" height="1" />
        <rect x="6" y="7" width="1" height="1" />
      </g>
      <g fill="#FF6B81">
        <rect x="11" y="7" width="1" height="1" />
        <rect x="12" y="8" width="1" height="1" />
      </g>
    </svg>
  );
}

export function PixelEarth({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#7FC4FF">
        <rect x="3" y="1" width="10" height="14" />
      </g>
      <g fill="#5FCB7A">
        <rect x="3" y="3" width="3" height="2" />
        <rect x="8" y="2" width="4" height="3" />
        <rect x="4" y="9" width="3" height="3" />
        <rect x="9" y="10" width="4" height="3" />
      </g>
    </svg>
  );
}

export function PixelHouse({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FF8A5B">
        <rect x="6" y="0" width="4" height="2" />
        <rect x="4" y="2" width="8" height="2" />
        <rect x="2" y="4" width="12" height="2" />
      </g>
      <g fill="#F4E8C1">
        <rect x="3" y="6" width="10" height="9" />
      </g>
      <g fill="#7FC4FF">
        <rect x="7" y="9" width="2" height="6" />
      </g>
    </svg>
  );
}

export function PixelCar({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FF8A5B">
        <rect x="2" y="6" width="12" height="4" />
        <rect x="4" y="3" width="8" height="3" />
      </g>
      <g fill="#A9D9FF">
        <rect x="5" y="4" width="6" height="2" />
      </g>
      <g fill="#2D3748">
        <rect x="3" y="10" width="3" height="2" />
        <rect x="10" y="10" width="3" height="2" />
      </g>
    </svg>
  );
}

export function PixelLightbulb({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FFD93D">
        <rect x="5" y="1" width="6" height="2" />
        <rect x="4" y="3" width="8" height="5" />
        <rect x="5" y="8" width="6" height="2" />
      </g>
      <g fill="#A0AEC0">
        <rect x="6" y="10" width="4" height="1" />
        <rect x="6" y="12" width="4" height="1" />
        <rect x="6" y="14" width="4" height="1" />
      </g>
    </svg>
  );
}

export function PixelPen({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
    >
      <g fill="#FFD93D">
        <rect x="9" y="1" width="3" height="3" />
      </g>
      <g fill="#4A5568">
        <rect x="6" y="4" width="6" height="6" transform="rotate(45 9 7)" />
      </g>
      <g fill="#2D3748">
        <rect x="2" y="12" width="3" height="3" />
      </g>
    </svg>
  );
}

export function FloatingIcon({
  children,
  className,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
