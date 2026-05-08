export const SITE_DATA = {
  hero: {
    title: { zh: "曹爱雨", en: "CaoAiYu" },
    description: { 
      zh: "视觉传达设计系大学三年级学生，致力于通过平面设计、品牌识别和动态叙事构建有意义的视觉体验。探索我的数字作品集。", 
      en: "Junior Visual Communication student crafting meaningful visual experiences through graphic design, brand identity, and motion storytelling." 
    },
    ctaText: { zh: "查看作品", en: "View Works" },
    backgroundType: "video", // 可选 "video" 或 "image"
    backgroundUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  },
  about: {
    label: { zh: "专业简介", en: "Professional Profile" },
    segments: [
      { zh: "我是曹爱雨，", en: "I am CaoAiYu,", className: "font-normal md:mr-3" },
      { zh: "一名视觉传达设计系大三学生。", en: "a junior Visual Communication student.", className: "font-serif italic text-primary md:mr-3" },
      { zh: "专注于字体排印、实验性构成与品牌叙事的交汇点。", en: "Focusing on the intersection of typography, experimental layout, and brand narrative.", className: "font-normal" },
    ],
    scrollText: {
      zh: "目前正在攻读学位，我的作品旨在架起传统设计准则与现代数字叙事之间的桥梁。我致力于创造既有视觉冲击力，又在传播功能上具有深刻目的性的视觉系统。",
      en: "Currently pursuing my degree, my work bridges the gap between traditional design principles and modern digital storytelling. I am dedicated to creating visual systems that are strike an aesthetic balance with functional purpose."
    },
  },
  features: {
    header: [
      { zh: "设计领域.", en: "Design Disciplines.", className: "text-primary block w-full text-center" },
      { zh: "数字时代形式与功能的综合体。", en: "A synthesis of form and function in the digital age.", className: "text-gray-500 block w-full text-center mt-2" }
    ],
    cards: [
      {
        type: "video",
        videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
        title: { zh: "动态图像", en: "Motion Graphics" },
      },
      {
        type: "feature",
        number: "01",
        title: { zh: "视觉识别", en: "Visual Identity" },
        icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
        items: [
          { zh: "标志系统", en: "Logo Systems" },
          { zh: "品牌手册", en: "Brand Manuals" },
          { zh: "艺术指导", en: "Art Direction" },
          { zh: "营销设计", en: "Marketing Design" }
        ],
      },
      {
        type: "feature",
        number: "02",
        title: { zh: "字体设计", en: "Typography" },
        icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
        items: [
          { zh: "定制字体", en: "Custom Typefaces" },
          { zh: "版式系统", en: "Layout Systems" },
          { zh: "实验海报", en: "Experimental Posters" },
          { zh: "编辑设计", en: "Editorial Design" }
        ],
      },
      {
        type: "feature",
        number: "03",
        title: { zh: "数字媒介", en: "Digital Media" },
        icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
        items: [
          { zh: "UI / UX 设计", en: "UI / UX Design" },
          { zh: "交互原型", en: "Interaction Prototypes" },
          { zh: "生成艺术", en: "Generative Art" },
          { zh: "网页体验", en: "Web Experiences" }
        ],
      },
    ]
  },
  portfolio: {
    visual_identity: {
      title: { zh: "视觉识别与感知", en: "Visual Identity & Perception" },
      description: { 
        zh: "探索品牌精髓的多维表达。通过符号、色彩与版式的系统化构建，为每一个项目注入独特的生命力。", 
        en: "Exploring multidimensional expressions of brand essence. Infusing unique life into every project through systematic construction of symbols, colors, and typography." 
      },
      projects: [
        {
          id: "vi-01",
          title: { zh: "不确定性研究局", en: "Bureau of Uncertainty" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
          gallery: [
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop"
          ],
          description: {
            zh: "这是一个关于视觉秩序与混乱的研究项目。通过实验性的图形语言探索品牌在不可预测环境下的适应性。",
            en: "A research project on visual order and chaos. Exploring brand adaptability in unpredictable environments through experimental graphic language."
          },
          tags: ["Branding", "Identity", "Logo Design"]
        },
        {
          id: "vi-02",
          title: { zh: "虚构界限", en: "Fictional Boundaries" },
          year: "2023",
          image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
          tags: ["Visual Identity", "Print"]
        },
        {
          id: "vi-03",
          title: { zh: "流动频率", en: "Liquid Frequency" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000&auto=format&fit=crop",
          tags: ["Art Direction", "Graphic"]
        }
      ]
    },
    typography: {
      title: { zh: "字体设计与排版", en: "Typography & Layout" },
      description: { 
        zh: "文字不仅是信息的载体，更是视觉的情绪。实验性的版式与定制字体，重塑阅读的节奏感。", 
        en: "Typography is not just a carrier of information, but the emotion of vision. Experimental layouts and custom typefaces reshape the rhythm of reading." 
      },
      projects: [
        {
          id: "typo-01",
          title: { zh: "重力缺失", en: "Gravitational Shift" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
          gallery: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544253733-4f51e0413554?q=80&w=2000&auto=format&fit=crop"
          ],
          description: {
            zh: "探索动态版式与字体的空间感。通过重力的视觉模拟，挑战传统的阅读顺序。",
            en: "Exploring space in dynamic typography. Challenging traditional reading orders through visual simulation of gravity."
          },
          tags: ["Editorial", "Type Design", "Experimental"]
        },
        {
          id: "typo-02",
          title: { zh: "静默交响", en: "Silent Symphony" },
          year: "2023",
          image: "https://images.unsplash.com/photo-1544253733-4f51e0413554?q=80&w=2000&auto=format&fit=crop",
          tags: ["Custom Font", "Poster", "Art Direction"]
        },
        {
          id: "typo-03",
          title: { zh: "汉字重构计划", en: "Hanzi Reconstruction" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=2000&auto=format&fit=crop",
          tags: ["Cultural", "Typeface", "Research"]
        },
        {
          id: "typo-04",
          title: { zh: "极简律动", en: "Minimalistic Rhythm" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2000&auto=format&fit=crop",
          tags: ["Layout", "System", "Grid"]
        }
      ]
    },
    digital_media: {
      title: { zh: "数字媒介与算法艺术", en: "Digital Media & Number Art" },
      description: { 
        zh: "在代码与视觉之间探求诗性。利用算法生成的随机性与逻辑，构建超越现实的沉浸式艺术空间。", 
        en: "Seeking poetics between code and vision. Using algorithmic randomness and logic to construct immersive art spaces that transcend reality." 
      },
      projects: [
        {
          id: "digital-01",
          title: { zh: "算法迭代 004", en: "Algorithmic Iteration 004" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
          gallery: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
          ],
          description: {
            zh: "基于 Noise 算法生成的动态艺术。探讨有序逻辑中诞生的自然美感。",
            en: "Dynamic art generated based on Noise algorithms. Exploring the natural beauty born from orderly logic."
          },
          tags: ["Generative Art", "Code"]
        },
        {
          id: "digital-02",
          title: { zh: "神经元拓扑", en: "Neural Topology" },
          year: "2024",
          image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
          tags: ["Interactive", "VR/AR"]
        }
      ]
    }
  },
  resume: {
    name: { zh: "曹爱雨", en: "Cao AiYu" },
    role: { zh: "视觉传达设计学生 / 视觉设计师", en: "Visual Communication Student / Designer" },
    stats: [
      { label: { zh: "年龄", en: "Age" }, value: "21" },
      { label: { zh: "年级", en: "Year" }, value: "Junior (大三)" },
      { label: { zh: "所在地", en: "Location" }, value: "China" },
    ],
    education: [
      { 
        school: { zh: "美术学院", en: "Academy of Fine Arts" }, 
        major: { zh: "视觉传达设计", en: "Visual Communication Design" },
        period: "2022 - 2026"
      }
    ],
    experience: [
      {
        company: { zh: "独立设计项目", en: "Independent Design Projects" },
        role: { zh: "视觉设计师", en: "Visual Designer" },
        period: "2023 - Present",
        desc: { zh: "主导多个品牌识别与书籍排版项目，专注于探索汉字排版与实验性构成的应用。", en: "Led branding and editorial projects, focusing on experimental typography and grid systems." }
      },
      {
        company: { zh: "设计工作室 (实习建议)", en: "Design Studio (Internship)" },
        role: { zh: "初级设计师", en: "Junior Designer" },
        period: "2023.06 - 2023.09",
        desc: { zh: "参与品牌视觉规范的制定与动态影像设计。", en: "Contributed to brand guidelines and motion graphic production." }
      }
    ],
    skills: [
      { name: "Brand Identity", level: 90 },
      { name: "Typography", level: 95 },
      { name: "Motion Design", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "Adobe Suite", level: 90 }
    ],
    contact: {
      email: "gebin0904@gmail.com",
      wechat: "YourWechatID",
      portfolio_link: "Portfolio Site"
    }
  },
  navigation: [
    { zh: "作品集", en: "Portfolio" },
    { zh: "个人简介", en: "Profile" },
    { zh: "归档", en: "Archives" },
    { zh: "咨询", en: "Inquiry" }
  ]
};


