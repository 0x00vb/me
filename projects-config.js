// PROJECTS CONFIGURATION
// Edit this file to add, remove, or modify your projects
// Each project object contains all the information displayed on your portfolio

const projectsData = [
  {
    id: 1,
    title: "MindDrive",
    description: "AI-powered note-taking web application designed to help users capture, organize, and retrieve their thoughts efficiently with intelligent search and categorization.",
    image: "./public/minddrive.webp",
    imageAlt: "Screenshot of MindDrive - AI-powered note-taking web application",
    tags: ["Vite", "ExpressJS", "PostgreSQL", "Tailwind CSS", "AI/ML"],
    links: {
      visit: "https://minddrive.vercel.app",
      code: null
    },
    reverse: false
  },
  {
    id: 2,
    title: "CMflow",
    description: "Automated content marketing tool that lets you manage multiple business accounts, describe each brand, and generate AI-powered posts. You can schedule posts with custom intervals or create and publish them manually.",
    image: "./public/cmflow.webp",
    imageAlt: "Screenshot of CMflow - automated content marketing tool",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    links: {
      visit: "https://cmflow.vercel.app/",
      code: null
    },
    reverse: true
  },
  {
    id: 3,
    title: "Ski Rental Pro",
    description: "Comprehensive ski rental management system with client management, inventory tracking, and seamless rental processing for ski shops.",
    image: "./public/skirental.webp",
    imageAlt: "Screenshot of Ski Rental Pro - ski rental management system",
    tags: ["Java", "Desktop App", "Next.js", "React", "Tailwind CSS"],
    links: {
      visit: "https://skirentalpro.vercel.app/",
      code: null
    },
    reverse: false
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with advanced product filtering, wishlist functionality, and optimized checkout experience.",
    image: "./public/ecommerce.webp",
    imageAlt: "Screenshot of E-commerce Platform",
    tags: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe"],
    links: {
      visit: "https://ecommerce-rho-roan.vercel.app",
      code: null
    },
    reverse: true
  },
  {
    id: 5,
    title: "NewsTok",
    description: "Revolutionary news consumption app with TikTok-style swipeable interface, bringing engaging news discovery to mobile users.",
    image: "./public/newstok.webp",
    imageAlt: "Screenshot of NewsTok - news consumption app",
    tags: ["Next.js", "Vite", "ExpressJS", "News API"],
    links: {
      visit: "https://newstok.vercel.app",
      code: null
    },
    reverse: false
  },
  {
    id: 6,
    title: "DreamCanvas",
    description: "Immersive wallpaper application that transforms devices into personalized canvases with AI-generated and curated artwork.",
    image: "./public/dreamcanvas.webp",
    imageAlt: "Screenshot of DreamCanvas - wallpaper application",
    tags: ["React Native", "Mobile Development", "AI Art"],
    links: {
      visit: "https://github.com/0x00vb/DreamCanvas",
      code: "https://github.com/0x00vb/DreamCanvas"
    },
    reverse: true
  }
];

const projectsDataSource = [
  {
    title: "MindDrive",
    description: "AI-powered note-taking web application designed to help users capture, organize, and retrieve their thoughts efficiently with intelligent search and categorization.",
    tags: ["Vite", "ExpressJS", "PostgreSQL", "Tailwind CSS", "AI/ML"],
    image: "/minddrive.webp",
    projectLink: "https://minddrive.vercel.app",
    featured: true,
    category: "Web App"
  },
  {
    title: "CMflow",
    description: "Automated content marketing tool that lets you manage multiple business accounts, describe each brand, and generate AI-powered posts. You can schedule posts with custom intervals or create and publish them manually.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    image: "/cmflow.webp",
    projectLink: "https://cmflow.vercel.app/",
    featured: true,
    category: "Web App"
  },
  {
    title: "Ski Rental Pro",
    description: "Comprehensive ski rental management system with client management, inventory tracking, and seamless rental processing for ski shops.",
    tags: ["Java", "Desktop App", "Next.js", "React", "Tailwind CSS"],
    image: "/skirental.webp",
    projectLink: "https://skirentalpro.vercel.app/",
    featured: true,
    category: "Desktop App"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with advanced product filtering, wishlist functionality, and optimized checkout experience.",
    tags: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe"],
    image: "/ecommerce.webp",
    projectLink: "https://ecommerce-rho-roan.vercel.app",
    featured: false,
    category: "E-commerce"
  },
  {
    title: "NewsTok",
    description: "Revolutionary news consumption app with TikTok-style swipeable interface, bringing engaging news discovery to mobile users.",
    tags: ["Next.js", "Vite", "ExpressJS", "News API"],
    image: "/newstok.webp",
    projectLink: "https://newstok.vercel.app",
    featured: false,
    category: "Mobile App"
  },
  {
    title: "DreamCanvas",
    description: "Immersive wallpaper application that transforms devices into personalized canvases with AI-generated and curated artwork.",
    tags: ["React Native", "Mobile Development", "AI Art"],
    image: "/dreamcanvas.webp",
    projectLink: "https://github.com/0x00vb/DreamCanvas",
    featured: false,
    category: "Mobile App"
  }
]