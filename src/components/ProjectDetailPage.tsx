import { motion } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

interface ProjectDetailPageProps {
  project: any;
  onClose: () => void;
}

export const ProjectDetailPage = ({ project, onClose }: ProjectDetailPageProps) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-black overflow-y-auto"
    >
      <div className="fixed inset-0 bg-noise opacity-[0.05] pointer-events-none" />

      {/* Control Bar */}
      <div className="sticky top-0 z-[210] p-6 md:p-12 flex justify-between items-center pointer-events-none">
        <button
          onClick={onClose}
          className="group flex items-center gap-4 text-primary hover:text-white transition-colors pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform bg-black">
            <X className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start leading-none uppercase tracking-widest">
            <span className="text-xs font-bold">关闭详情</span>
            <span className="text-[10px] opacity-40">Close Details</span>
          </div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 pb-24 -mt-12">
        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-end">
          <div className="md:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-mono text-sm block mb-4"
            >
              PROJECT TYPE / {project.tags?.[0] || "SELECTED WORKS"}
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-none tracking-tighter">
              {project.title.zh}
            </h1>
            <h2 className="text-2xl md:text-4xl text-primary/40 font-italic mt-4">
              {project.title.en}
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
             <div className="text-right flex flex-col">
                <span className="text-primary/20 text-xs uppercase tracking-widest mb-1">Timeline</span>
                <span className="text-primary font-bold text-2xl">{project.year}</span>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden mb-24">
          <img src={project.image} alt="Hero" className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <div className="flex flex-col gap-6 sticky top-32">
               <div>
                  <h4 className="text-primary/20 text-[10px] uppercase tracking-widest mb-2 font-bold">Scope of Work</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag: string) => (
                      <span key={tag} className="text-xs text-primary border border-primary/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
               <div>
                  <h4 className="text-primary/20 text-[10px] uppercase tracking-widest mb-2 font-bold">Studio</h4>
                  <span className="text-white text-sm">CaoAiYu 曹爱雨</span>
               </div>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="flex flex-col gap-12">
               <div className="flex flex-col gap-4">
                  <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
                    {project.description?.zh || "作品详细介绍正在整理中。该项目探讨了视觉传达中的核心命题，通过创新的设计方法论，将概念转化为具有影响力的视觉语言。"}
                  </p>
                  <p className="text-primary/40 text-sm md:text-base italic leading-relaxed">
                    {project.description?.en || "Detailed project description is under preparation. This project explores core propositions in visual communication, transforming concepts into impactful visual language through innovative design methodologies."}
                  </p>
               </div>

               {/* Gallery */}
               <div className="grid grid-cols-1 gap-12">
                  {(project.gallery || [project.image, project.image]).map((img: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-3xl overflow-hidden"
                    >
                      <img src={img} alt={`Gallery ${i}`} className="w-full object-cover" />
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="p-24 border-t border-white/5 flex flex-col items-center gap-8 mt-24">
         <button 
           onClick={onClose}
           className="px-12 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform"
         >
           回到作品列表 Back to List
         </button>
      </div>
    </motion.div>
  );
};
