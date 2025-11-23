# Design Document

## Overview

This design document outlines the technical approach for updating an existing portfolio website to better target HR professionals and recruiters. The portfolio is built using vanilla JavaScript, HTML, and CSS with Vite as the build tool and Tailwind CSS for styling. The updates focus on content modifications, UI enhancements for social link visibility, removal of the contact form, and addition of a blog posts section.

The design maintains the existing single-page application architecture while making targeted updates to improve the portfolio's effectiveness for HR review. Key changes include persistent social links, updated content sections, and a new blog showcase.

### Design Philosophy

The updated portfolio will follow a **modern, sleek, shadcn-inspired aesthetic** with these principles:

- **Minimalist & Clean**: Generous whitespace, clear hierarchy, subtle borders
- **Smooth Interactions**: Micro-animations, hover states, smooth transitions
- **Modern Typography**: Clear font hierarchy with Inter for body and JetBrains Mono for code
- **Subtle Depth**: Soft shadows, subtle gradients, layered components
- **Accessible**: High contrast ratios, keyboard navigation, screen reader friendly
- **Responsive**: Mobile-first approach with fluid layouts

**Color Palette** (shadcn-inspired):
- Background: Slate-based neutrals (#ffffff, #f8fafc, #f1f5f9)
- Text: Slate grays (#1e293b, #64748b, #94a3b8)
- Accent: Blue to purple gradient (#3b82f6 → #8b5cf6)
- Borders: Subtle slate (#e2e8f0)
- Dark mode: Deep slate backgrounds (#0f172a, #1e293b, #334155)

## Architecture

### Current Architecture
The portfolio follows a traditional single-page application (SPA) structure:
- **HTML**: Single `index.html` file containing all page sections
- **CSS**: Single `styles.css` file with CSS custom properties for theming
- **JavaScript**: Single `script.js` file handling interactivity, animations, and form submission
- **Build Tool**: Vite for development server and production builds
- **Deployment**: Netlify with configuration in `netlify.toml`

### Updated Architecture
The architecture remains unchanged, with modifications limited to:
- HTML structure updates for new/modified sections
- CSS additions for the persistent social links component and blog section
- JavaScript updates to remove EmailJS integration and add blog section animations
- Navigation menu updates to reflect removed contact section

## Components and Interfaces

### 1. Persistent Social Links Component

**Purpose**: Display social media links that remain visible throughout the user's browsing session.

**Location**: Fixed position on the left side of the viewport (desktop), converts to bottom bar on mobile.

**Design**: Shadcn-inspired vertical sidebar with subtle hover effects and smooth transitions.

**Structure**:
```html
<div class="social-sidebar">
  <a href="https://www.linkedin.com/in/divyansh-sareen-55302b195/" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="social-sidebar-link"
     aria-label="LinkedIn Profile">
    <!-- LinkedIn SVG Icon -->
  </a>
  <a href="https://github.com/DivyanshSareen" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="social-sidebar-link"
     aria-label="GitHub Profile">
    <!-- GitHub SVG Icon -->
  </a>
  <a href="https://leetcode.com/u/sareendivyansh/" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="social-sidebar-link"
     aria-label="LeetCode Profile">
    <!-- LeetCode SVG Icon -->
  </a>
  <a href="https://dev.to/divyansh_sareen" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="social-sidebar-link"
     aria-label="Dev.to Profile">
    <!-- Dev.to SVG Icon -->
  </a>
</div>
```

**Styling Considerations** (shadcn-inspired):
- Fixed positioning on left side (`left: 2rem, top: 50%, transform: translateY(-50%)`)
- Subtle background with backdrop blur for glassmorphism effect
- Rounded corners (`border-radius: 1rem`)
- Soft shadow (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`)
- Icon size: 20px with 12px padding in 40px containers
- Hover effects: scale(1.1) + color change to accent
- Smooth transitions (200ms ease)
- Vertical gap of 0.75rem between icons
- Mobile: Convert to horizontal bar at bottom with backdrop blur
- Z-index: 50 (below nav which is 1000)

### 2. Updated Technologies Section

**Changes**:
- Remove Redis skill item from the Databases category
- Maintain existing skill bar visualization
- Keep PostgreSQL, MongoDB, and DynamoDB

**Implementation**:
- Remove the Redis skill item HTML block
- No JavaScript changes required (skill bars already animated)
- Maintain existing CSS styling

### 3. Updated Work Experience Section

**Changes**:
- Update MapUp date range from "August 2023 - Present" to "August 2023 - August 2025"
- Keep all other content unchanged

**Implementation**:
- Simple text content update in HTML
- No structural or styling changes

### 4. Updated Featured Projects Section

**Changes**:
- Keep TollTally project, remove live demo link, add MapUp product reference
- Remove Location Search API project
- Remove API Integration Platform project
- Add Telematics Provider Platform project

**New Project Structure**:
```html
<div class="project-card">
  <div class="project-image">
    <div class="project-placeholder">
      <div class="project-icon">🚗</div>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">Telematics Provider Platform</h3>
    <p class="project-description">
      Built RESTful APIs and microservices using Go for real-time GPS data collection, 
      transmission, and fleet management. Developed insight generation service to process 
      raw GPS tracks and generate driver behavior analytics. Created fleet dashboard and 
      driver simulator frontend with Next.js and shadcn/ui components.
    </p>
    <div class="project-tech">
      <span class="tech-tag">Go</span>
      <span class="tech-tag">Next.js</span>
      <span class="tech-tag">PostgreSQL</span>
      <span class="tech-tag">PostGIS</span>
      <span class="tech-tag">JWT</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/DivyanshSareen/kiroween-telematics-provider" 
         class="project-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <span>Code</span>
        <svg><!-- External link icon --></svg>
      </a>
      <a href="https://fleet-manager-dashboard.vercel.app/" 
         class="project-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <span>Demo</span>
        <svg><!-- External link icon --></svg>
      </a>
    </div>
  </div>
</div>
```

### 5. Blog Posts Section

**Purpose**: Showcase published technical articles to demonstrate communication skills and technical knowledge.

**Location**: After Featured Projects section, before footer.

**Structure**:
```html
<section class="blog" id="blog">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Blog Posts</h2>
      <p class="section-subtitle">Technical articles and insights</p>
    </div>
    <div class="blog-grid">
      <article class="blog-card">
        <div class="blog-icon">📝</div>
        <h3 class="blog-title">Kiro for Software Development?</h3>
        <p class="blog-platform">Dev.to</p>
        <p class="blog-excerpt">
          Exploring AI assistance in development workflows and productivity.
        </p>
        <a href="https://dev.to/divyansh_sareen/ai-assistance-in-development-53nd" 
           class="blog-link" 
           target="_blank" 
           rel="noopener noreferrer">
          Read Article
          <svg><!-- External link icon --></svg>
        </a>
      </article>
      
      <article class="blog-card">
        <div class="blog-icon">🔢</div>
        <h3 class="blog-title">Ways to traverse a matrix</h3>
        <p class="blog-platform">Hashnode</p>
        <p class="blog-excerpt">
          Different approaches and algorithms for matrix traversal.
        </p>
        <a href="https://divyanshsareen.hashnode.dev/matrix-travel" 
           class="blog-link" 
           target="_blank" 
           rel="noopener noreferrer">
          Read Article
          <svg><!-- External link icon --></svg>
        </a>
      </article>
      
      <article class="blog-card">
        <div class="blog-icon">⚙️</div>
        <h3 class="blog-title">JavaScript Objects and Prototypes</h3>
        <p class="blog-platform">Hashnode</p>
        <p class="blog-excerpt">
          Deep dive into JavaScript's object model and prototype chain.
        </p>
        <a href="https://divyanshsareen.hashnode.dev/javascript-objects-and-prototypes" 
           class="blog-link" 
           target="_blank" 
           rel="noopener noreferrer">
          Read Article
          <svg><!-- External link icon --></svg>
        </a>
      </article>
    </div>
  </div>
</section>
```

**Styling** (shadcn-inspired):
- Grid layout: 3 columns on desktop (minmax(350px, 1fr)), 1 column on mobile
- Card design:
  - Background: var(--bg-secondary) with subtle border
  - Padding: 2rem
  - Border radius: 1rem
  - Soft shadow that lifts on hover
  - Hover: translateY(-4px) + enhanced shadow
- Blog icon: Large emoji/icon at top (3rem size)
- Title: 1.3rem, font-weight 600, margin-bottom 0.5rem
- Platform badge: Small pill with accent color background, 0.75rem text
- Excerpt: Muted text color, 1rem, line-height 1.6
- Read link: Accent color with arrow icon, hover underline
- Smooth transitions (300ms ease) on all interactive elements

### 6. Navigation Updates

**Changes**:
- Remove "Contact" link from navigation menu
- Update smooth scroll behavior to exclude contact section
- Update active link highlighting logic

**Implementation**:
```html
<ul class="nav-menu" id="nav-menu">
  <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
  <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
  <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
  <li class="nav-item"><a href="#experience" class="nav-link">Experience</a></li>
  <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
  <li class="nav-item"><a href="#blog" class="nav-link">Blog</a></li>
</ul>
```

### 7. Contact Section Removal

**Changes**:
- Remove entire contact section HTML
- Remove contact form JavaScript logic
- Remove EmailJS initialization and form submission handler
- Remove existing social links from footer (replaced by persistent sidebar)
- Keep footer with copyright information

## Data Models

No complex data models are required for this update. All content is static HTML. The main data structures are:

### Blog Post Data Structure (Conceptual)
```javascript
{
  title: string,
  platform: string,
  excerpt: string,
  url: string,
  icon: string
}
```

### Social Link Data Structure (Conceptual)
```javascript
{
  platform: string,
  url: string,
  icon: SVGElement,
  ariaLabel: string
}
```

These structures are not implemented as JavaScript objects but represent the information contained in the HTML markup.


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Social links open in new tabs
*For any* social link in the persistent social links component, clicking the link should open the target URL in a new browser tab (target="_blank" attribute present).
**Validates: Requirements 2.3**

### Property 2: Social links remain visible during scroll
*For any* scroll position on the page, the social links component should remain visible in the viewport with fixed positioning.
**Validates: Requirements 2.1, 2.4**

### Property 3: Technology skills have progress indicators
*For any* technology skill displayed in the Technologies Section, the skill should have an associated visual progress bar element.
**Validates: Requirements 3.3**

### Property 4: Work experience in reverse chronological order
*For any* pair of adjacent work experience entries, the first entry should have a start date that is later than or equal to the second entry's start date.
**Validates: Requirements 4.3**

### Property 5: Work experience entries are complete
*For any* work experience entry displayed, the entry should contain all required elements: company name, role, dates, description, achievements list, and technology tags.
**Validates: Requirements 4.5**

### Property 6: Blog post links open in new tabs
*For any* blog post link in the Blog Posts Section, clicking the link should open the article in a new browser tab (target="_blank" attribute present).
**Validates: Requirements 7.5**

### Property 7: Blog posts have complete information
*For any* blog post displayed in the Blog Posts Section, the post should include both an article title and a publication platform indicator.
**Validates: Requirements 7.6**

## Error Handling

### Missing Content
- If social link URLs are malformed or missing, the link should still render but may not navigate correctly
- If blog post URLs are invalid, the browser will handle the navigation error
- Missing icons or images should degrade gracefully with placeholder content

### Responsive Behavior
- On mobile viewports (< 768px), the persistent social links component should either:
  - Hide completely and rely on footer social links, OR
  - Convert to a horizontal layout at the bottom of the viewport
- Navigation menu should collapse to hamburger menu on mobile
- Blog grid should stack to single column on mobile

### Browser Compatibility
- Target modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Graceful degradation for older browsers:
  - CSS Grid fallback to flexbox
  - CSS custom properties fallback to static colors
  - Smooth scroll fallback to instant scroll

### Accessibility
- All links must have appropriate aria-labels
- Social icons must have text alternatives
- Color contrast must meet WCAG AA standards
- Keyboard navigation must work for all interactive elements
- Focus indicators must be visible

## Testing Strategy

### Unit Testing

Since this is a static website with minimal JavaScript logic, traditional unit tests are limited. However, we can test:

**JavaScript Functions**:
- Theme toggle functionality
- Navigation menu toggle (hamburger)
- Smooth scroll behavior
- Active navigation link highlighting
- Typing animation logic

**Example Unit Tests**:
```javascript
describe('Theme Toggle', () => {
  test('should toggle between light and dark themes', () => {
    // Test theme switching logic
  });
  
  test('should persist theme preference to localStorage', () => {
    // Test localStorage interaction
  });
});

describe('Navigation', () => {
  test('should update active link based on scroll position', () => {
    // Test active link logic
  });
});
```

### Property-Based Testing

Property-based testing will verify that universal properties hold across the website's structure and content.

**Testing Framework**: We will use **fast-check** for JavaScript property-based testing, as it integrates well with Jest/Vitest and provides excellent support for DOM testing scenarios.

**Configuration**: Each property-based test should run a minimum of 100 iterations to ensure thorough coverage of the input space.

**Test Tagging**: Each property-based test must include a comment tag in this format:
```javascript
// Feature: portfolio-update, Property 1: Social links open in new tabs
```

**Property Test Examples**:

```javascript
// Feature: portfolio-update, Property 1: Social links open in new tabs
test('all social links should open in new tabs', () => {
  fc.assert(
    fc.property(fc.constantFrom(...socialLinks), (link) => {
      const element = document.querySelector(`a[href="${link.url}"]`);
      return element.getAttribute('target') === '_blank';
    }),
    { numRuns: 100 }
  );
});

// Feature: portfolio-update, Property 3: Technology skills have progress indicators
test('all technology skills should have progress bars', () => {
  fc.assert(
    fc.property(fc.constantFrom(...technologySkills), (skill) => {
      const skillElement = document.querySelector(`[data-skill="${skill.name}"]`);
      const progressBar = skillElement.querySelector('.skill-progress');
      return progressBar !== null;
    }),
    { numRuns: 100 }
  );
});

// Feature: portfolio-update, Property 4: Work experience in reverse chronological order
test('work experience entries should be in reverse chronological order', () => {
  const entries = document.querySelectorAll('.timeline-item');
  fc.assert(
    fc.property(fc.integer({ min: 0, max: entries.length - 2 }), (index) => {
      const currentDate = parseDate(entries[index].querySelector('.timeline-date').textContent);
      const nextDate = parseDate(entries[index + 1].querySelector('.timeline-date').textContent);
      return currentDate >= nextDate;
    }),
    { numRuns: 100 }
  );
});
```

### Integration Testing

Integration tests will verify that sections work together correctly:

**Section Rendering**:
- Verify all sections render in correct order
- Verify navigation links correspond to actual sections
- Verify smooth scrolling navigates to correct sections

**Responsive Behavior**:
- Test layout at different viewport sizes
- Verify mobile menu functionality
- Verify social links component responsive behavior

**Theme Switching**:
- Verify theme applies to all sections
- Verify theme persistence across page reloads

### Manual Testing Checklist

Since this is a portfolio website targeting HR professionals, manual testing is crucial:

1. **Visual Review**:
   - Verify all content updates are accurate
   - Check spacing and alignment
   - Verify color scheme consistency
   - Test both light and dark themes

2. **Content Verification**:
   - Verify MapUp dates are correct
   - Verify all blog post links work
   - Verify social links navigate to correct profiles
   - Verify project links work (GitHub, demos)

3. **Cross-Browser Testing**:
   - Test on Chrome, Firefox, Safari, Edge
   - Verify layout consistency
   - Check for any browser-specific issues

4. **Mobile Testing**:
   - Test on actual mobile devices
   - Verify touch interactions work
   - Check readability and spacing
   - Verify hamburger menu functionality

5. **Accessibility Testing**:
   - Test keyboard navigation
   - Verify screen reader compatibility
   - Check color contrast ratios
   - Verify focus indicators

6. **Performance**:
   - Check page load time
   - Verify smooth scrolling performance
   - Check animation performance
   - Verify no layout shifts

### End-to-End Testing

While not strictly necessary for a static portfolio, E2E tests can verify the complete user experience:

**User Flows**:
- Landing → Navigate to sections → Click social links
- Landing → View projects → Click project links
- Landing → View blog → Click blog links
- Theme toggle → Navigate sections → Verify theme persists

**Tools**: Playwright or Cypress could be used for E2E testing if desired.

## Implementation Notes

### Development Workflow
1. Update HTML structure for all modified sections
2. Add CSS for new components (social sidebar, blog section)
3. Update JavaScript to remove EmailJS and contact form logic
4. Test responsive behavior at various breakpoints
5. Verify accessibility with keyboard navigation and screen readers
6. Test in multiple browsers
7. Deploy to Netlify staging environment for review
8. Final production deployment

### Performance Considerations
- Minimize CSS and JavaScript for production build
- Optimize any images used in blog section
- Ensure smooth scroll performance
- Lazy load images if any are added
- Maintain fast page load times (< 2 seconds)

### SEO Considerations
- Update meta description to mention blog posts
- Ensure all sections have proper heading hierarchy
- Add structured data for blog posts if desired
- Verify Open Graph tags are still accurate
- Update sitemap if using one

### Deployment
- Netlify configuration remains unchanged
- Vite build process remains the same
- No environment variables needed (EmailJS removed)
- Verify build succeeds before deployment
- Test deployed version thoroughly

## Future Enhancements

Potential improvements for future iterations:

1. **Blog Integration**: Fetch blog posts dynamically from Dev.to and Hashnode APIs
2. **Analytics**: Add privacy-friendly analytics to track HR engagement
3. **Resume Download**: Add downloadable PDF resume
4. **Project Filtering**: Add ability to filter projects by technology
5. **Dark Mode Auto-Detection**: Automatically detect system preference on first visit
6. **Animations**: Add more sophisticated scroll animations
7. **Testimonials**: Add section for recommendations or testimonials
8. **Certifications**: Add section for professional certifications if applicable
