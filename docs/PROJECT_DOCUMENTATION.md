
# Ivan.dev Portfolio Website Documentation

## Project Overview

This is a modern portfolio website for Ivan, a web developer from the Philippines specializing in web development, web applications, and AI-powered solutions. The site features a dark theme with neon green and purple accents, responsive design, and several key sections showcasing Ivan's skills and services.

## Tech Stack

- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Routing**: react-router-dom
- **Data Fetching**: @tanstack/react-query

## Project Structure

```
src/
├── components/       # UI components
│   ├── ui/           # shadcn/ui components (read-only)
│   └── ...           # Custom components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
├── pages/            # Page components
└── main.tsx          # Entry point
```

## Key Files

- `src/pages/Index.tsx`: Main page component that assembles all sections
- `src/components/Navbar.tsx`: Navigation bar with responsive mobile menu
- `src/components/HeroSection.tsx`: Landing section with introduction
- `src/components/AboutSection.tsx`: Information about Ivan and his skills
- `src/components/ServicesSection.tsx`: Services offered by Ivan
- `src/components/ProjectsSection.tsx`: Portfolio of past projects
- `src/components/ContactSection.tsx`: Contact form and information
- `src/components/Footer.tsx`: Site footer with navigation and links

## Styling System

### Color Scheme

The website uses a carefully designed color palette defined in Tailwind CSS:

- **Dark Background**: `portfolio-dark` (#0f0f0f)
- **Neon Green Accent**: `portfolio-neon` (#ACFF00)
- **Purple Accent**: `portfolio-purple` (#a855f7)

These colors are configured in `tailwind.config.ts`.

### Typography

- **Heading Font**: Space Grotesk (font-heading)
- **Body Font**: Inter (font-sans)

### Custom Utility Classes

Several custom utility classes are defined in `index.css`:

- `gradient-text`: Text with gradient from neon to purple
- `highlight-text`: Text with neon green color
- `card-hover`: Card hover animation effect
- `button-glow`: Button with glow effect on hover

### Animations

The site includes custom animations defined in `tailwind.config.ts`:

- `float`: Floating animation for UI elements
- `pulse-glow`: Pulsing glow effect
- `gradient-shift`: Shifting gradient background

## Components

### Navbar

- Responsive navigation with mobile menu
- Changes appearance on scroll
- Smooth scroll to sections

### Hero Section

- Introduction with animated elements
- Main call-to-action buttons
- Tech stack indicators

### About Section

- Personal introduction and background
- Skills categorized by frontend, backend, and AI tools
- Development approach

### Services Section

- Three main service categories with descriptions
- Feature lists for each service
- Call-to-action button

### Projects Section

- Filterable project grid
- Project cards with images, descriptions, and technologies
- Filter options: All, Websites, Web Apps, AI Chatbots

### Contact Section

- Contact form with validation
- Additional contact information
- Social media links

### Footer

- Site navigation
- Services links
- Legal links
- Copyright information

## Responsive Design

The website is fully responsive with breakpoints:

- Mobile: Default
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1400px

## Best Practices for Extending

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add the component to `src/pages/Index.tsx`
3. Add a navigation link in `src/components/Navbar.tsx` if needed

### Creating New Pages

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.tsx`

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Utilize the custom utility classes for consistent styling
- Follow the established color scheme
- For complex components, use shadcn/ui as a foundation

### Component Structure Pattern

Most section components follow this pattern:

```jsx
const SectionName = () => {
  return (
    <section id="section-id" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute... blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-portfolio-neon mb-2">Section Title</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Content with <span className="gradient-text">Accent</span></h3>
        </div>
        
        {/* Section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Content items */}
        </div>
      </div>
    </section>
  );
};
```

## Potential Future Improvements

- Add animation libraries like Framer Motion for enhanced interactions
- Implement dark/light mode toggle
- Connect to backend services via Supabase
- Add a RAG AI Chatbot as mentioned in the project brief
- Create blog functionality
- Implement analytics tracking
