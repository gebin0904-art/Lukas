import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string | { zh: string; en: string };
  className?: string;
  showAsterisk?: boolean;
}

export const WordsPullUp = ({ text, className, showAsterisk }: WordsPullUpProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const zhText = typeof text === "string" ? text : text.zh;
  const enText = typeof text === "string" ? "" : text.en;

  const words = zhText.split(" ");
  const enWords = enText.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {/* Chinese Line */}
      <div className="overflow-hidden">
        {words.map((word, i) => (
          <span key={i} className="relative inline-block mr-[0.2em] last:mr-0">
            <motion.span
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
              {showAsterisk && i === words.length - 1 && (
                <span className="absolute top-[0.45em] -right-[0.3em] text-[0.31em] font-light">
                  *
                </span>
              )}
            </motion.span>
          </span>
        ))}
      </div>
      
      {/* English Line (Smaller) */}
      {enText && (
        <div className="overflow-hidden mt-[0.1em] opacity-60">
          {enWords.map((word, i) => (
            <span key={i} className="relative inline-block mr-[0.25em] last:mr-0 text-[0.3em] tracking-normal font-normal">
              <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

