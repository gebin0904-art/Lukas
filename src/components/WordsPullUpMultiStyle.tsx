import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Segment {
  zh: string;
  en: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  justify?: "justify-center" | "justify-end" | "justify-start";
}

export const WordsPullUpMultiStyle = ({ segments, className, justify = "justify-center" }: WordsPullUpMultiStyleProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {/* Chinese Line */}
      <div className={`flex flex-wrap ${justify}`}>
        {segments.map((segment, segmentIndex) => {
          const words = segment.zh.split(" ");
          return (
            <span key={segmentIndex} className={`inline-flex flex-wrap ${segment.className}`}>
              {words.map((word, wordIndex) => {
                return (
                  <span key={wordIndex} className="relative inline-block overflow-hidden mr-[0.2em]">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={isInView ? { y: 0 } : { y: "110%" }}
                      transition={{
                        duration: 0.8,
                        delay: segmentIndex * 0.1 + wordIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>

      {/* English Translation (Smaller) */}
      <div className={`flex flex-wrap ${justify} mt-4 opacity-50 max-w-lg px-4 ${justify === 'justify-end' ? 'ml-auto mr-0' : 'mx-auto'}`}>
        {segments.map((segment, segmentIndex) => {
          const words = segment.en.split(" ");
          return (
            <span key={segmentIndex} className="inline-flex flex-wrap text-sm sm:text-base font-normal tracking-wide">
              {words.map((word, wordIndex) => {
                return (
                  <span key={wordIndex} className="relative inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={isInView ? { y: 0 } : { y: "110%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + segmentIndex * 0.1 + wordIndex * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
};

