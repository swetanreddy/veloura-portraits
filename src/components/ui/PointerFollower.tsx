import { ReactNode, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface PointerFollowerProps {
  children: ReactNode;
  className?: string;
}

const PointerFollower = ({ children, className }: PointerFollowerProps) => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => {
        if (!isMobile) setIsVisible(true);
      }}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={(event) => {
        if (isMobile) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
    >
      {children}
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 mix-blend-screen"
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.24 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_center,rgba(199,122,90,0.16),rgba(199,122,90,0.05)_42%,transparent_68%)] blur-[34px]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
          <motion.div
            className="absolute left-0 top-0 h-[88px] w-[88px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,230,210,0.14),transparent_72%)] blur-[10px]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default PointerFollower;
