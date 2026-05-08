import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SITE_DATA } from "../config";
import { WordsPullUp } from "./WordsPullUp";
import { ProjectDetailPage } from "./ProjectDetailPage";

interface CategoryPageProps {
  categoryKey: "visual_identity" | "typography" | "digital_media";
  onBack: () => void;
}

export const CategoryPage = ({ categoryKey, onBack }: CategoryPageProps) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const data = SITE_DATA.portfolio[categoryKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto"
    >
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPage 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Background Noise */}
      <div className="fixed inset-0 bg-noise opacity-[0.1] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-[110] p-6 md:p-12 flex justify-between items-center">
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-primary hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform bg-black">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start leading-none uppercase tracking-widest">
            <span className="text-xs font-bold">返回首页</span>
            <span className="text-[10px] opacity-40">Back to home</span>
          </div>
        </button>

        <div className="hidden md:flex flex-col items-end leading-none uppercase tracking-[0.2em] text-primary/40">
          <span className="text-[10px] font-bold">CaoAiYu 曹爱雨</span>
          <span className="text-[8px]">Junior Portfolio</span>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-6 md:px-24 pt-12 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-24">
          <WordsPullUp
            text={data.title}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-none"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-2 max-w-2xl mt-8"
          >
            <p className="text-primary text-lg md:text-xl font-medium leading-relaxed">
              {data.description.zh}
            </p>
            <p className="text-primary/40 text-sm md:text-base italic leading-relaxed">
              {data.description.en}
            </p>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {data.projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-24 border-t border-white/5 text-center mt-24">
        <p className="text-primary/20 text-xs tracking-widest uppercase">
          End of category — CaoAiYu 曹爱雨 Studio
        </p>
      </footer>
    </motion.div>
  );
};

function ProjectCard({ project, index, onClick }: { project: any; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
        <img
          src={project.image}
          alt={project.title.en}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-8 right-8">
          <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500 pointer-events-none">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-white">{project.title.zh}</h3>
          <p className="text-primary/40 text-sm italic font-medium">{project.title.en}</p>
        </div>
        <span className="text-primary font-mono text-sm border border-primary/20 px-3 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
