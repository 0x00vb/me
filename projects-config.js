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
];
