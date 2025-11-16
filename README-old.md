# Vanilla Portfolio - Projects Setup Guide

This vanilla JavaScript portfolio makes it easy to add, edit, and manage your projects. All project data is stored in a simple configuration file that you can edit without touching any HTML or JavaScript code.

## 🚀 Quick Start

1. Open `projects-config.js` in your code editor
2. Edit the `projectsData` array to add your own projects
3. Save the file and refresh your browser

## 📝 Adding Your Projects

### Project Structure
Each project in the `projectsData` array should have this structure:

```javascript
{
  id: 1,                                    // Unique number for each project
  title: "Your Project Title",             // Project name
  description: "Detailed description of what you built and the impact", // 2-3 sentences
  image: "path/to/your/image.jpg",         // Project screenshot or relevant image
  imageAlt: "Description of the image",    // Alt text for accessibility
  tags: ["Tech1", "Tech2", "Tech3"],       // Technologies used
  links: {
    visit: "https://your-project.com",     // Live demo URL (or null to hide)
    code: "https://github.com/you/repo"    // GitHub repo URL (or null to hide)
  },
  reverse: false                           // true = image on right, false = image on left
}
```

### Example Projects

```javascript
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, payment processing, inventory management, and admin dashboard. Served 10k+ users with 99.9% uptime.",
    image: "images/ecommerce-screenshot.jpg",
    imageAlt: "E-commerce platform dashboard showing products and analytics",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    links: {
      visit: "https://my-store.com",
      code: "https://github.com/username/ecommerce-platform"
    },
    reverse: false
  },
  {
    id: 2,
    title: "Weather App",
    description: "Mobile-first weather application with location-based forecasts, interactive maps, and severe weather alerts. Built with React Native and integrated with multiple weather APIs for accurate, real-time data.",
    image: "images/weather-app.jpg",
    imageAlt: "Weather app showing current conditions and forecast",
    tags: ["React Native", "TypeScript", "Weather API"],
    links: {
      visit: null, // No live demo
      code: "https://github.com/username/weather-app"
    },
    reverse: true // Image on right side
  }
];
```

## 🎨 Image Guidelines

### Recommended Image Specs:
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Size**: Under 500KB for fast loading
- **Style**: Screenshots, mockups, or relevant project imagery

### Image Sources:
- **Unsplash**: Free high-quality images (`https://unsplash.com/`)
- **Local images**: Store in an `images/` folder
- **Screenshots**: Take clean, well-composed screenshots of your work

### Example URLs:
```javascript
// Unsplash (recommended for placeholders)
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"

// Local images
image: "images/my-project-screenshot.jpg"

// Direct URLs
image: "https://your-cdn.com/project-image.jpg"
```

## 🔗 Links Configuration

### Visit Links:
- **Purpose**: Link to live demos, deployed apps, or project showcases
- **Examples**:
  - `https://my-app.netlify.app`
  - `https://my-portfolio-site.com/project`
  - `null` (hides the visit button)

### Code Links:
- **Purpose**: Link to GitHub repositories or source code
- **Examples**:
  - `https://github.com/username/project-repo`
  - `https://gitlab.com/username/project`
  - `null` (hides the code button)

## 🏷️ Tags & Technologies

### Best Practices:
- Use 3-6 relevant technologies
- Include programming languages, frameworks, databases, and tools
- Keep names consistent (e.g., "React" not "React.js")
- Order by importance or usage

### Examples:
```javascript
tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
tags: ["Vue.js", "Python", "Django", "Docker", "Redis"]
tags: ["Flutter", "Dart", "Firebase", "Google Maps API"]
```

## 🔄 Layout Options

### Reverse Layout:
- `reverse: false` - Image on left, content on right (default)
- `reverse: true` - Image on right, content on left

### Best Practices:
- Alternate layouts for visual variety
- Use `false` for the first project, `true` for the second, etc.
- Consider the flow of your project descriptions

## 📱 Testing Your Changes

1. Edit `projects-config.js`
2. Save the file
3. Open `index.html` in your browser
4. Refresh the page to see changes
5. Test on different screen sizes

## 🛠️ Advanced Customization

### Adding More Fields:
You can extend the project structure by adding new properties:

```javascript
{
  id: 1,
  title: "Project Name",
  // ... existing fields ...
  featured: true,              // Mark as featured project
  year: "2024",               // Project completion year
  client: "Company Name",     // Client or company
  duration: "3 months"        // Project duration
}
```

### Custom Styling:
Edit `style.css` to customize the appearance of projects:
- `.project` - Main project container
- `.project-image` - Image container
- `.project-title` - Project title styling
- `.project-description` - Description text
- `.tag` - Technology tag styling
- `.project-link` - Link button styling

## 📋 Checklist

- [ ] Added project title and description
- [ ] Set appropriate image and alt text
- [ ] Added relevant technology tags
- [ ] Configured visit/code links (or set to null)
- [ ] Set reverse layout for variety
- [ ] Tested on desktop and mobile
- [ ] Images load properly and are optimized

## 🆘 Troubleshooting

### Projects not showing up:
1. Check browser console for JavaScript errors
2. Verify `projects-config.js` has valid JavaScript syntax
3. Ensure all required fields are present in each project object

### Images not loading:
1. Check image URLs are correct and accessible
2. Verify local images are in the right folder
3. Check browser console for 404 errors

### Layout issues:
1. Clear browser cache and refresh
2. Check that `reverse` values alternate properly
3. Verify CSS is loading correctly

---

Happy coding! 🎉 Your portfolio is now easy to maintain and update.
