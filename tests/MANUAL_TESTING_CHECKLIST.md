# Portfolio Manual Testing Checklist

## 10.1 Responsive Behavior Testing

### Mobile (< 768px)
- [ ] Layout stacks vertically correctly
- [ ] Social sidebar converts to horizontal bottom bar
- [ ] Social links are easily tappable (44px minimum)
- [ ] Navigation menu collapses to hamburger
- [ ] Hamburger menu opens/closes correctly
- [ ] Hero section text is readable
- [ ] Hero actions stack vertically
- [ ] Skills grid shows single column
- [ ] Projects grid shows single column
- [ ] Blog grid shows single column
- [ ] Timeline shows simplified left-aligned layout
- [ ] All text is readable without horizontal scrolling
- [ ] Touch targets are appropriately sized

### Tablet (768px - 1024px)
- [ ] Layout uses appropriate grid columns
- [ ] Social sidebar remains on left side
- [ ] Navigation menu is visible (no hamburger)
- [ ] Hero content uses 2-column grid
- [ ] Skills grid shows 2 columns
- [ ] Projects grid shows 2 columns
- [ ] Blog grid shows 2 columns
- [ ] Timeline shows proper alternating layout
- [ ] Spacing is appropriate for tablet screens

### Desktop (> 1024px)
- [ ] Full layout is displayed correctly
- [ ] Social sidebar is fixed on left side
- [ ] Navigation menu is fully visible
- [ ] Hero content uses 2-column grid
- [ ] Skills grid shows 4 columns
- [ ] Projects grid shows 2-3 columns
- [ ] Blog grid shows 3 columns
- [ ] Timeline shows alternating left/right layout
- [ ] Container max-width is respected (1200px)
- [ ] All hover effects work smoothly

### Social Sidebar Mobile Conversion
- [ ] On mobile, sidebar moves to bottom
- [ ] Sidebar changes from vertical to horizontal layout
- [ ] Sidebar remains visible and accessible
- [ ] Backdrop blur effect is maintained
- [ ] Icons are properly sized for touch
- [ ] Sidebar doesn't obstruct content

## 10.2 Links and Navigation Testing

### Social Links
- [ ] LinkedIn link opens https://www.linkedin.com/in/divyansh-sareen-55302b195/ in new tab
- [ ] GitHub link opens https://github.com/DivyanshSareen in new tab
- [ ] LeetCode link opens https://leetcode.com/u/sareendivyansh/ in new tab
- [ ] Dev.to link opens https://dev.to/divyansh_sareen in new tab
- [ ] All social links have target="_blank"
- [ ] All social links have rel="noopener noreferrer"
- [ ] Social link icons are visible and correct

### Blog Post Links
- [ ] "Kiro for Software Development?" opens https://dev.to/divyansh_sareen/ai-assistance-in-development-53nd in new tab
- [ ] "Ways to traverse a matrix" opens https://divyanshsareen.hashnode.dev/matrix-travel in new tab
- [ ] "JavaScript Objects and Prototypes" opens https://divyanshsareen.hashnode.dev/javascript-objects-and-prototypes in new tab
- [ ] All blog links have target="_blank"
- [ ] All blog links have rel="noopener noreferrer"

### Project Links
- [ ] Telematics Provider Platform GitHub link opens https://github.com/DivyanshSareen/kiroween-telematics-provider in new tab
- [ ] Telematics Provider Platform Demo link opens https://fleet-manager-dashboard.vercel.app/ in new tab
- [ ] All project links have target="_blank"
- [ ] All project links have rel="noopener noreferrer"
- [ ] TollTally project has no live demo link (as expected)

### Smooth Scroll Navigation
- [ ] Clicking "Home" scrolls to hero section smoothly
- [ ] Clicking "About" scrolls to about section smoothly
- [ ] Clicking "Skills" scrolls to skills section smoothly
- [ ] Clicking "Experience" scrolls to experience section smoothly
- [ ] Clicking "Projects" scrolls to projects section smoothly
- [ ] Clicking "Blog" scrolls to blog section smoothly
- [ ] Active navigation link highlights correctly on scroll
- [ ] Scroll offset accounts for fixed navbar

### Hamburger Menu (Mobile)
- [ ] Hamburger icon is visible on mobile
- [ ] Clicking hamburger opens menu
- [ ] Menu slides in from right
- [ ] Menu covers full viewport height
- [ ] Hamburger animates to X when open
- [ ] Clicking X closes menu
- [ ] Clicking nav link closes menu
- [ ] Menu has proper backdrop

## 10.3 Accessibility Audit

### Aria Labels
- [ ] LinkedIn link has aria-label="LinkedIn Profile"
- [ ] GitHub link has aria-label="GitHub Profile"
- [ ] LeetCode link has aria-label="LeetCode Profile"
- [ ] Dev.to link has aria-label="Dev.to Profile"
- [ ] Theme toggle has aria-label="Toggle theme"
- [ ] Hamburger menu has aria-label="Toggle navigation"

### Keyboard Navigation
- [ ] Tab key moves through all interactive elements
- [ ] Tab order is logical (top to bottom, left to right)
- [ ] All links are keyboard accessible
- [ ] All buttons are keyboard accessible
- [ ] Enter key activates links and buttons
- [ ] Escape key closes mobile menu (if implemented)
- [ ] Focus indicators are visible on all elements
- [ ] No keyboard traps exist

### Color Contrast (WCAG AA)
- [ ] Body text has sufficient contrast (4.5:1 minimum)
- [ ] Heading text has sufficient contrast
- [ ] Link text has sufficient contrast
- [ ] Button text has sufficient contrast
- [ ] Muted text has sufficient contrast (3:1 minimum for large text)
- [ ] Dark mode maintains sufficient contrast
- [ ] Accent colors are distinguishable

### Focus Indicators
- [ ] All interactive elements show focus indicator
- [ ] Focus indicator is visible in light mode
- [ ] Focus indicator is visible in dark mode
- [ ] Focus indicator has sufficient contrast
- [ ] Focus indicator is not hidden by other elements

### Screen Reader Testing
- [ ] Page title is descriptive
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Only one h1 exists on page
- [ ] Landmarks are properly used (nav, main, footer)
- [ ] Images have alt text (if any)
- [ ] Links have descriptive text
- [ ] Form labels are associated (if any)
- [ ] ARIA attributes are used correctly

## 10.4 Cross-Browser Testing

### Chrome
- [ ] Layout renders correctly
- [ ] All styles are applied
- [ ] Animations work smoothly
- [ ] Theme toggle works
- [ ] Smooth scroll works
- [ ] Hover effects work
- [ ] No console errors

### Firefox
- [ ] Layout renders correctly
- [ ] All styles are applied
- [ ] Animations work smoothly
- [ ] Theme toggle works
- [ ] Smooth scroll works
- [ ] Hover effects work
- [ ] No console errors

### Safari
- [ ] Layout renders correctly
- [ ] All styles are applied
- [ ] Animations work smoothly
- [ ] Theme toggle works
- [ ] Smooth scroll works
- [ ] Hover effects work
- [ ] Backdrop blur works
- [ ] No console errors

### Edge
- [ ] Layout renders correctly
- [ ] All styles are applied
- [ ] Animations work smoothly
- [ ] Theme toggle works
- [ ] Smooth scroll works
- [ ] Hover effects work
- [ ] No console errors

### Theme Toggle (All Browsers)
- [ ] Theme toggle switches between light and dark
- [ ] Theme preference is saved to localStorage
- [ ] Theme persists on page reload
- [ ] Theme icon updates (🌙 ↔ ☀️)
- [ ] All sections update with theme
- [ ] Transitions are smooth
- [ ] No flash of unstyled content

## 10.5 Performance Check

### Page Load Time
- [ ] Initial page load is under 2 seconds
- [ ] Time to First Contentful Paint (FCP) < 1.8s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Layout Shifts
- [ ] No layout shift when fonts load
- [ ] No layout shift when images load
- [ ] No layout shift when animations trigger
- [ ] Social sidebar doesn't cause shift
- [ ] Navigation doesn't cause shift
- [ ] Content loads progressively without jumping

### Smooth Animations
- [ ] Hero typing animation is smooth
- [ ] Skill bar animations are smooth
- [ ] Scroll animations are smooth
- [ ] Hover effects are smooth (no jank)
- [ ] Theme toggle transition is smooth
- [ ] Card hover effects are smooth
- [ ] Navigation transitions are smooth
- [ ] All animations run at 60fps

### Scroll Performance
- [ ] Scrolling is smooth and responsive
- [ ] No lag when scrolling quickly
- [ ] Parallax effects don't cause jank
- [ ] Intersection Observer animations are smooth
- [ ] Fixed elements don't cause repaints
- [ ] No excessive reflows during scroll

## Additional Checks

### Content Verification
- [ ] MapUp dates show "August 2023 - August 2025"
- [ ] Redis is removed from skills
- [ ] TollTally shows "(MapUp Product)"
- [ ] Telematics Provider Platform is present
- [ ] All 3 blog posts are displayed
- [ ] Contact section is removed
- [ ] Navigation has 6 links (no Contact)

### Visual Polish
- [ ] All spacing is consistent
- [ ] All colors match design system
- [ ] All borders are consistent
- [ ] All shadows are subtle and appropriate
- [ ] All border radius values are consistent
- [ ] Typography hierarchy is clear
- [ ] Icons are properly sized and aligned

### Error Handling
- [ ] No JavaScript errors in console
- [ ] No CSS errors or warnings
- [ ] No 404 errors for resources
- [ ] Graceful degradation for older browsers
- [ ] No broken images or icons

## Testing Tools

### Recommended Tools
- Chrome DevTools (Responsive mode, Lighthouse)
- Firefox Developer Tools
- Safari Web Inspector
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools (Accessibility testing)
- Contrast Checker (WebAIM)
- PageSpeed Insights
- GTmetrix
- WebPageTest

### Testing Devices
- iPhone (Safari)
- Android phone (Chrome)
- iPad (Safari)
- Desktop (1920x1080)
- Laptop (1366x768)

## Notes
- Test in both light and dark modes
- Test with slow network throttling
- Test with JavaScript disabled (graceful degradation)
- Test with different zoom levels (100%, 125%, 150%)
- Test with browser extensions disabled
