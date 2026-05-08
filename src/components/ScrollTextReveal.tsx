import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: any; // MotionValue
}

export const AnimatedLetter = ({ char, index, totalChars, progress }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export const ScrollTextReveal = ({ text, className }: { text: { zh: string; en: string }; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const zhChars = text.zh.split("");
  const enChars = text.en.split("");

  return (
    <div ref={containerRef} className={`flex flex-col gap-8 ${className}`}>
      {/* Chinese Text */}
      <p className="text-2xl sm:text-3xl font-normal leading-relaxed">
        {zhChars.map((char, i) => (
          <AnimatedLetter
            key={`zh-${i}`}
            char={char}
            index={i}
            totalChars={zhChars.length}
            progress={scrollYProgress}
          />
        ))}
      </p>

      {/* English Text (Smaller, More Dim) */}
      <p className="text-sm sm:text-base opacity-60 font-normal leading-relaxed italic max-w-2xl mx-auto">
        {enChars.map((char, i) => (
          <AnimatedLetter
            key={`en-${i}`}
            char={char}
            index={i}
            totalChars={enChars.length}
            progress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  );
};

