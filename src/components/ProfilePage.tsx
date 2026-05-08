import { motion } from "motion/react";
import { ArrowLeft, Mail, MessageSquare, Download } from "lucide-react";
import { SITE_DATA } from "../config";

interface ProfilePageProps {
  onBack: () => void;
}

export const ProfilePage = ({ onBack }: ProfilePageProps) => {
  const data = SITE_DATA.resume;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[300] bg-black overflow-y-auto"
    >
      <div className="fixed inset-0 bg-noise opacity-[0.05] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-[310] p-6 md:p-12 flex justify-between items-center pointer-events-none">
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-primary hover:text-white transition-colors pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform bg-black">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start leading-none uppercase tracking-widest">
            <span className="text-xs font-bold">返回</span>
            <span className="text-[10px] opacity-40">Back</span>
          </div>
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pt-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-end">
          <div className="md:col-span-8">
            <div className="flex flex-col gap-2 mb-6">
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">{data.role.en}</span>
                <span className="text-primary/40 text-xs tracking-[0.2em] uppercase font-bold">{data.role.zh}</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-4">
              {data.name.zh}
              <span className="block text-4xl md:text-6xl text-primary/20 font-light mt-2">{data.name.en}</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4">
                {data.stats.map((stat: any, i: number) => (
                    <div key={i} className="border border-white/5 bg-white/[0.02] p-4 rounded-2xl">
                        <span className="text-primary/30 text-[10px] uppercase tracking-wider block mb-1">{stat.label.en}</span>
                        <span className="text-white text-lg font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* Major Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Education & Experience */}
          <div className="lg:col-span-7 flex flex-col gap-24">
            
            {/* Experience */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-primary/20 flex-1" />
                    <h3 className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Experience / 经历</h3>
                </div>
                <div className="flex flex-col gap-12">
                    {data.experience.map((exp: any, i: number) => (
                        <div key={i} className="group flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <h4 className="text-white text-2xl font-bold">{exp.company.zh}</h4>
                                    <span className="text-primary/40 text-sm italic">{exp.company.en}</span>
                                </div>
                                <span className="text-primary font-mono text-sm opacity-60">{exp.period}</span>
                            </div>
                            <div>
                                <p className="text-primary/80 mb-2">{exp.desc.zh}</p>
                                <p className="text-primary/30 text-sm leading-relaxed">{exp.desc.en}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-primary/20 flex-1" />
                    <h3 className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Education / 教育</h3>
                </div>
                <div className="flex flex-col gap-8">
                    {data.education.map((edu: any, i: number) => (
                        <div key={i} className="flex justify-between items-center">
                            <div>
                                <h4 className="text-white text-xl font-bold">{edu.school.zh}</h4>
                                <p className="text-primary/60">{edu.major.zh} · {edu.major.en}</p>
                            </div>
                            <span className="text-primary/40 font-mono text-sm">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </section>
          </div>

          {/* Right Column: Skills & Contact */}
          <div className="lg:col-span-5 flex flex-col gap-24">
            
            {/* Skills */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-primary/20 flex-1" />
                    <h3 className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Expertise / 技能</h3>
                </div>
                <div className="flex flex-col gap-8">
                    {data.skills.map((skill: any, i: number) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                <span className="text-white">{skill.name}</span>
                                <span className="text-primary">{skill.level}%</span>
                            </div>
                            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="bg-primary p-8 rounded-[2rem] text-black">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border-b border-black/10 pb-4">Connect / 联系</h3>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 opacity-40" />
                        <div>
                            <p className="text-[10px] uppercase tracking-tighter opacity-40 font-bold leading-none">Email</p>
                            <p className="font-bold">{data.contact.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MessageSquare className="w-5 h-5 opacity-40" />
                        <div>
                            <p className="text-[10px] uppercase tracking-tighter opacity-40 font-bold leading-none">Wechat</p>
                            <p className="font-bold">{data.contact.wechat}</p>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-4 bg-black text-white rounded-2xl flex items-center justify-center gap-2 font-bold hover:scale-[1.02] transition-transform active:scale-[0.98]">
                        <Download className="w-4 h-4" />
                        Download Portfolio
                    </button>
                </div>
            </section>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
