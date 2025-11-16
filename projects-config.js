// PROJECTS CONFIGURATION
// Edit this file to add, remove, or modify your projects
// Each project object contains all the information displayed on your portfolio

const projectsData = [
  {
    id: 9,
    title: "RedAgro",
    description: "RedAgro is a nationwide digital marketplace that connects Argentine agricultural producers with machinery owners, service providers, and suppliers of high-quality inputs, all in a single, commission-free platform.",
    image: "./public/redagro.webp",
    imageAlt: "Screenshot of RedAgro - agriculture marketplace platform",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "MercadoPago API"],
    links: {
      visit: "https://redagro.com.ar/",
      code: null
    },
    reverse: false
  },
  {
    id: 10,
    title: "Match",
    description: "Match is a digital platform designed to transform the parking experience in Buenos Aires by connecting drivers looking for available parking spots with property owners who want to rent out their garages. The service delivers a safe, convenient, and cost-effective solution, streamlining both the search and management of parking spaces in real time.",
    image: "./public/match.webp",
    imageAlt: "Screenshot of Match - Parking Marketplace platform",
    tags: ["Next.js", "Socket.io", "Leaflet.js", "PostgreSQL"],
    links: {
      visit: "https://match-ar.vercel.app/",
      code: null
    },
    reverse: true
  },
  {
    id: 1,
    title: "Autofix",
    description: "Mecano is a streamlined platform for managing automotive workshops, allowing teams to track vehicle diagnostics, repairs, and maintenance in one place. It improves workflow efficiency, centralizes service information, and gives both mechanics and customers clear visibility into each repair process.",
    image: "./public/autofix.webp",
    imageAlt: "Screenshot of Autofix - automotive workshop management platform",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    links: {
      visit: "https://mecano-app.com",
      code: null
    },
    reverse: false
  },
  {
    id: 11,
    title: "VueGPT",
    description: "VueGPT is a web application that allows you to chat with Gemini 2.5 Flash using a simple interface. It's built with Vue.js and Tailwind CSS.",
    image: "./public/vuegpt.webp",
    imageAlt: "Screenshot of VueGPT - Gemini 2.5 Flash chat application",
    tags: ["Vue.js", "Tailwind CSS", "Node.js", "ExpressJS", "Google Gemini API", "AI"],
    links: {
      visit: null,
      code: "https://github.com/0x00vb/vuegpt"
    },
    reverse: true
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with advanced product filtering, wishlist functionality, and optimized checkout experience.",
    image: "./public/ecommerce.webp",
    imageAlt: "Screenshot of E-commerce Platform",
    tags: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe"],
    links: {
      visit: "https://ecommerce-rho-roan.vercel.app",
      code: "https://github.com/0x00vb/ecommerce"
    },
    reverse: true
  },
  {
    id: 7,
    title: "NewsTok",
    description: "Revolutionary news consumption app with TikTok-style swipeable interface, bringing engaging news discovery to mobile users.",
    image: "./public/newstok.webp",
    imageAlt: "Screenshot of NewsTok - news consumption app",
    tags: ["Next.js", "Vite", "ExpressJS", "News API"],
    links: {
      visit: "https://newstok.vercel.app",
      code: "https://github.com/0x00vb/newsTok"
    },
    reverse: false
  },
  {
    id: 8,
    title: "DreamCanvas",
    description: "Immersive wallpaper application that transforms devices into personalized canvases with AI-generated and curated artwork.",
    image: "./public/dreamcanvas.webp",
    imageAlt: "Screenshot of DreamCanvas - wallpaper application",
    tags: ["React Native", "Mobile Development", "AI Art"],
    links: {
      visit: null,
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