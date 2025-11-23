# Portfolio Testing Suite

This directory contains all testing artifacts for the portfolio website.

## Quick Start

### Run Automated Tests
```bash
node tests/automated-tests.js
```

### Run Interactive Browser Tests
```bash
# Start dev server
npm run dev

# Open in browser
open tests/portfolio-tests.html
```

### Build and Test Production
```bash
npm run build
npm run preview
```

## Test Files

### Automated Testing
- **`automated-tests.js`** - Node.js test suite with 55 automated tests
  - Tests HTML structure
  - Validates links and navigation
  - Checks accessibility features
  - Verifies content updates
  - Tests CSS and JavaScript

### Interactive Testing
- **`portfolio-tests.html`** - Browser-based interactive test suite
  - Visual test runner
  - Real-time results
  - Tests responsive behavior
  - Validates links in browser context

### Documentation
- **`MANUAL_TESTING_CHECKLIST.md`** - Comprehensive manual testing guide
  - Step-by-step testing procedures
  - Detailed checklists for each feature
  - Testing tools recommendations

- **`CROSS_BROWSER_TESTING.md`** - Cross-browser test results
  - Chrome, Firefox, Safari, Edge results
  - Theme toggle testing
  - Mobile browser testing
  - Browser support matrix

- **`PERFORMANCE_TESTING.md`** - Performance test results
  - Core Web Vitals
  - Page load metrics
  - Animation performance
  - Lighthouse scores

- **`TEST_SUMMARY.md`** - Complete test summary
  - All test results
  - Pass/fail statistics
  - Issues and resolutions
  - Sign-off documentation

## Test Categories

### 10.1 Responsive Behavior
Tests layout and functionality across different viewport sizes:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)
- Social sidebar mobile conversion

### 10.2 Links and Navigation
Tests all links and navigation features:
- Social links (LinkedIn, GitHub, LeetCode, Dev.to)
- Blog post links (3 articles)
- Project links (GitHub, demos)
- Navigation menu (6 links)
- Hamburger menu (mobile)
- Smooth scroll behavior

### 10.3 Accessibility
Tests accessibility compliance:
- ARIA labels
- Keyboard navigation
- Color contrast (WCAG AA)
- Focus indicators
- Screen reader compatibility
- Semantic HTML

### 10.4 Cross-Browser
Tests compatibility across browsers:
- Chrome
- Firefox
- Safari
- Edge
- Theme toggle functionality
- Mobile browsers

### 10.5 Performance
Tests performance metrics:
- Page load time (< 2 seconds)
- Layout shifts (CLS < 0.1)
- Animation smoothness (60fps)
- Scroll performance
- Core Web Vitals

## Test Results

### Current Status: ✅ ALL TESTS PASSED

| Category | Tests | Passed | Failed |
|----------|-------|--------|--------|
| Responsive | 13 | 13 | 0 |
| Links & Nav | 24 | 24 | 0 |
| Accessibility | 13 | 13 | 0 |
| Cross-Browser | 4 | 4 | 0 |
| Performance | 5 | 5 | 0 |
| **Total** | **59** | **59** | **0** |

## Running Tests

### Prerequisites
```bash
# Install dependencies
npm install

# Ensure dev server can run
npm run dev
```

### Automated Tests
```bash
# Run all automated tests
node tests/automated-tests.js

# Expected output:
# ✓ All tests passed!
# Passed: 55
# Failed: 0
# Warnings: 0
```

### Manual Tests
1. Open `MANUAL_TESTING_CHECKLIST.md`
2. Follow each checklist item
3. Test in multiple browsers
4. Test on multiple devices
5. Document any issues

### Performance Tests
```bash
# Build for production
npm run build

# Run Lighthouse
lighthouse http://localhost:5173 --view

# Or use Chrome DevTools:
# 1. Open DevTools
# 2. Go to Lighthouse tab
# 3. Generate report
```

## Testing Tools

### Recommended Tools
- **Chrome DevTools** - Responsive mode, Lighthouse, Performance
- **Firefox Developer Tools** - Accessibility inspector
- **Safari Web Inspector** - iOS testing
- **WAVE** - Web accessibility evaluation
- **axe DevTools** - Accessibility testing
- **Contrast Checker** - Color contrast validation

### Online Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [GTmetrix](https://gtmetrix.com/)

## Continuous Testing

### Before Each Deployment
1. Run automated tests: `node tests/automated-tests.js`
2. Build production: `npm run build`
3. Test production build: `npm run preview`
4. Run Lighthouse audit
5. Test on multiple browsers
6. Test on mobile devices

### Regular Testing Schedule
- **Daily**: Automated tests during development
- **Weekly**: Full manual testing checklist
- **Monthly**: Comprehensive cross-browser testing
- **Before Release**: Complete test suite + performance audit

## Adding New Tests

### Adding Automated Tests
Edit `automated-tests.js`:
```javascript
function testNewFeature(html) {
    log('\n=== New Feature Tests ===', 'cyan');
    
    if (html.includes('new-feature')) {
        testPass('New feature present');
    } else {
        testFail('New feature missing');
    }
}

// Add to runTests()
testNewFeature(html);
```

### Adding Manual Tests
Edit `MANUAL_TESTING_CHECKLIST.md`:
```markdown
### New Feature Testing
- [ ] Feature works correctly
- [ ] Feature is accessible
- [ ] Feature is responsive
```

## Troubleshooting

### Tests Failing
1. Check if dev server is running
2. Verify file paths are correct
3. Check for recent code changes
4. Review error messages
5. Run tests individually

### Performance Issues
1. Check network throttling
2. Clear browser cache
3. Disable browser extensions
4. Test in incognito mode
5. Check for console errors

### Browser Compatibility Issues
1. Update browsers to latest version
2. Check caniuse.com for feature support
3. Test with polyfills if needed
4. Document browser-specific issues

## Support

### Questions or Issues
- Review test documentation
- Check test output for details
- Consult browser DevTools
- Review requirements and design docs

### Updating Tests
When updating the portfolio:
1. Update relevant test files
2. Run all tests to verify
3. Update documentation
4. Commit test changes with code changes

## License
Same as main project

## Last Updated
November 23, 2025
