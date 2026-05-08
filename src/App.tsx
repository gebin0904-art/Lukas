/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { WordsPullUp } from "./components/WordsPullUp";
import { WordsPullUpMultiStyle } from "./components/WordsPullUpMultiStyle";
import { ScrollTextReveal } from "./components/ScrollTextReveal";
import { CategoryPage } from "./components/CategoryPage";
import { ProfilePage } from "./components/ProfilePage";
import { SITE_DATA } from "./config";

const NAV_STYLE = {
  color: "rgba(225, 224, 204, 0.8)",
  transition: "color 0.2s ease",
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);

  // Prevent scroll when gallery or profile is open
  useEffect(() => {
    if (activeCategory || showProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeCategory, showProfile]);

  const handleOpenCategory = (key: string) => {
    // Map keys from feature cards or navigation
    const categoryMap: Record<string, string> = {
      "视觉识别": "visual_identity",
      "字体设计": "typography",
      "数字媒介": "digital_media",
      "作品集": "visual_identity"
    };

    if (key === "个人简介" || key === "咨询") {
      setShowProfile(true);
      return;
    }
    
    const mappedKey = categoryMap[key] || "visual_identity";
    setActiveCategory(mappedKey);
  };

  return (
    <div className="bg-black text-[#E1E0CC] selection:bg-primary/30 min-h-screen">
      <AnimatePresence>
        {activeCategory && (
          <CategoryPage 
            categoryKey={activeCategory} 
            onBack={() => setActiveCategory(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showProfile && (
          <ProfilePage onBack={() => setShowProfile(false)} />
        )}
      </AnimatePresence>
      {/* SECTION 1: HERO */}
      <section className="relative h-screen p-4 md:p-6 bg-black overflow-hidden">
        <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden group">
          {/* Background Content */}
          {SITE_DATA.hero.backgroundType === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={SITE_DATA.hero.backgroundUrl} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={SITE_DATA.hero.backgroundUrl} 
              alt="Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlays */}
          <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

          {/* Navbar */}
          <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl border-x border-b border-white/5">
              {SITE_DATA.navigation.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenCategory(link.zh)}
                  className="group flex flex-col items-center hover:text-[#E1E0CC] transition-colors cursor-pointer"
                  style={NAV_STYLE}
                >
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap">
                    {link.zh}
                  </span>
                  <span className="text-[8px] md:text-[9px] opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                    {link.en}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              {/* Left Column: Heading */}
              <div className="md:col-span-8">
                <WordsPullUp
                  text={SITE_DATA.hero.title}
                  showAsterisk
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.8] tracking-[-0.07em] text-[#E1E0CC]"
                />
              </div>

              {/* Right Column: Description + CTA */}
              <div className="md:col-span-4 flex flex-col gap-6 md:pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-2 max-w-sm"
                >
                  <p className="text-primary/90 text-sm md:text-base leading-snug">
                    {SITE_DATA.hero.description.zh}
                  </p>
                  <p className="text-primary/40 text-xs md:text-sm leading-[1.2] italic">
                    {SITE_DATA.hero.description.en}
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-2 bg-primary rounded-full px-1 py-1 w-fit pr-6 hover:gap-3 transition-all duration-300"
                >
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-black font-bold text-sm sm:text-base whitespace-nowrap">
                      {SITE_DATA.hero.ctaText.zh}
                    </span>
                    <span className="text-black/50 font-medium text-[10px] uppercase tracking-tight">
                      {SITE_DATA.hero.ctaText.en}
                    </span>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black py-24 px-6 md:py-48">
        <div className="max-w-6xl mx-auto bg-[#101010] p-12 md:p-24 rounded-[3rem] text-center border border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-1 mb-8"
          >
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] block">
              {SITE_DATA.about.label.zh}
            </span>
            <span className="text-primary/30 text-[8px] uppercase tracking-[0.1em] block">
              {SITE_DATA.about.label.en}
            </span>
          </motion.div>

          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl ml-auto mr-0 leading-[0.95] sm:leading-[0.9] text-white items-end text-right"
            segments={SITE_DATA.about.segments}
            justify="justify-end"
          />

          <ScrollTextReveal
            text={SITE_DATA.about.scrollText}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base mt-24 max-w-2xl mx-auto leading-relaxed"
          />
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="relative min-h-screen bg-black py-24 px-6 md:px-12 overflow-hidden">
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <WordsPullUpMultiStyle
              segments={SITE_DATA.features.header}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal items-center"
              justify="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2">
            {SITE_DATA.features.cards.map((card, idx) => (
              <FeatureCard 
                key={idx} 
                index={idx}
                className={card.type === 'video' ? 'p-0 overflow-hidden' : ''}
                number={card.number}
                title={card.title}
                icon={card.icon}
                onOpen={handleOpenCategory}
              >
                {card.type === 'video' ? (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-1">
                      <p className="text-[#E1E0CC] font-medium text-lg leading-tight">{card.title.zh}</p>
                      <p className="text-[#E1E0CC]/50 text-xs italic tracking-wide">{card.title.en}</p>
                    </div>
                  </>
                ) : (
                  <Checklist items={card.items || []} />
                )}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function FeatureCard({ children, className = "", index, number, title, icon, onOpen }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`relative bg-[#212121] rounded-3xl p-8 flex flex-col gap-6 ${className} group`}
    >
      {icon && (
        <div className="flex justify-between items-start">
          <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover" />
          <span className="text-primary/30 text-xs font-medium">{number}</span>
        </div>
      )}
      {title && (
        <div className="mt-auto">
          <div className="mb-4 flex flex-col gap-1">
            <h3 className="text-[#E1E0CC] text-xl font-bold">{title.zh}</h3>
            <span className="text-primary/40 text-xs italic font-medium uppercase tracking-wider">{title.en}</span>
          </div>
          {children}
          <button 
            onClick={() => onOpen?.(title.zh)}
            className="mt-6 flex items-center gap-2 text-primary group/btn cursor-pointer"
          >
            <div className="flex flex-col items-start leading-none group-hover:gap-0.5 transition-all">
              <span className="text-sm font-bold uppercase tracking-wide">了解更多</span>
              <span className="text-[10px] opacity-40 uppercase tracking-tight">Learn more</span>
            </div>
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      )}
      {!title && children}
    </motion.div>
  );
}

function Checklist({ items }: { items: { zh: string; en: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
          <div className="flex flex-col">
            <span className="text-gray-200 text-sm leading-tight font-medium">{item.zh}</span>
            <span className="text-gray-500 text-[10px] leading-tight mt-0.5">{item.en}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
