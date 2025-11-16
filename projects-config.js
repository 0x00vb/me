// PROJECTS CONFIGURATION
// Edit this file to add, remove, or modify your projects
// Each project object contains all the information displayed on your portfolio

const projectsData = [
  // EXAMPLE PROJECT 1 - Replace with your own project
  {
    id: 1,
    title: "Your Project Title Here", // Change this to your project name
    description: "Describe what you built, the technologies used, and the impact it had. Keep it to 2-3 sentences that highlight the key features and results.", // Write your project description
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", // Replace with your project image/screenshot
    imageAlt: "Describe what this image shows", // Alt text for accessibility
    tags: ["Technology1", "Technology2", "Technology3"], // List the main technologies you used
    links: {
      visit: "https://your-live-demo.com", // URL to your live project (or set to null)
      code: "https://github.com/yourusername/project-repo" // GitHub repo URL (or set to null)
    },
    reverse: false // false = image on left, true = image on right
  },

  // EXAMPLE PROJECT 2 - Copy and modify this template
  {
    id: 2,
    title: "Another Project Title",
    description: "Another detailed description of your project. Mention the problem you solved, how you solved it, and what the results were.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Screenshot of the project interface",
    tags: ["React", "Node.js", "Database"],
    links: {
      visit: "https://another-project.com",
      code: "https://github.com/yourusername/another-repo"
    },
    reverse: true // Alternate layout for visual variety
  },

  // ADD MORE PROJECTS HERE
  // Copy the template above and change the details for each new project
  // Remember to increment the id number (3, 4, 5, etc.)
  // Alternate the reverse value for visual variety
];

// HOW TO ADD A NEW PROJECT:
// 1. Copy one of the project objects above
// 2. Change the id to the next number
// 3. Update title, description, image, tags, and links
// 4. Set reverse: true for every other project to alternate layouts
// 5. Save this file and refresh your browser

// IMAGE GUIDELINES:
// - Use images that are 800px wide (the ?w=800 parameter)
// - Choose images that represent your project well
// - Make sure you have rights to use the images
// - You can also use relative paths to local images: "images/my-project.jpg"

// LINKS:
// - visit: URL to your live project/demo
// - code: URL to your GitHub repository
// - Set to null to hide that link

// TAGS:
// - Add relevant technologies, languages, or tools used
// - Keep them concise and professional

// REVERSE LAYOUT:
// - Set reverse: true to show image on the right side
// - Alternate this for visual variety
// - First project: false, second: true, third: false, etc.
