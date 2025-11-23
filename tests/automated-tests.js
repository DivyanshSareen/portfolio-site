/**
 * Automated Portfolio Tests
 * Run with: node tests/automated-tests.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test results tracking
const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    tests: []
};

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function addTest(name, status, message) {
    results.tests.push({ name, status, message });
    if (status === 'pass') results.passed++;
    else if (status === 'fail') results.failed++;
    else if (status === 'warning') results.warnings++;
}

function testPass(name, message = '') {
    addTest(name, 'pass', message);
    log(`✓ ${name}${message ? ': ' + message : ''}`, 'green');
}

function testFail(name, message = '') {
    addTest(name, 'fail', message);
    log(`✗ ${name}${message ? ': ' + message : ''}`, 'red');
}

function testWarning(name, message = '') {
    addTest(name, 'warning', message);
    log(`⚠ ${name}${message ? ': ' + message : ''}`, 'yellow');
}

// Read HTML file
function readHTML() {
    try {
        const htmlPath = path.join(__dirname, '..', 'index.html');
        return fs.readFileSync(htmlPath, 'utf8');
    } catch (error) {
        testFail('Read HTML file', error.message);
        return null;
    }
}

// Test 10.2: Links and Navigation
function testLinksAndNavigation(html) {
    log('\n=== 10.2 Links and Navigation Tests ===', 'cyan');
    
    // Test social links
    const socialLinksTests = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/divyansh-sareen-55302b195/', label: 'LinkedIn Profile' },
        { name: 'GitHub', url: 'https://github.com/DivyanshSareen', label: 'GitHub Profile' },
        { name: 'LeetCode', url: 'https://leetcode.com/u/sareendivyansh/', label: 'LeetCode Profile' },
        { name: 'Dev.to', url: 'https://dev.to/divyansh_sareen', label: 'Dev.to Profile' }
    ];

    socialLinksTests.forEach(test => {
        if (html.includes(test.url)) {
            testPass(`${test.name} link URL present`);
        } else {
            testFail(`${test.name} link URL missing`, `Expected: ${test.url}`);
        }

        if (html.includes(`aria-label="${test.label}"`)) {
            testPass(`${test.name} link has aria-label`);
        } else {
            testFail(`${test.name} link missing aria-label`, `Expected: ${test.label}`);
        }
    });

    // Test blog post links
    const blogLinksTests = [
        { name: 'Kiro blog post', url: 'https://dev.to/divyansh_sareen/ai-assistance-in-development-53nd' },
        { name: 'Matrix traversal blog post', url: 'https://divyanshsareen.hashnode.dev/matrix-travel' },
        { name: 'JavaScript Objects blog post', url: 'https://divyanshsareen.hashnode.dev/javascript-objects-and-prototypes' }
    ];

    blogLinksTests.forEach(test => {
        if (html.includes(test.url)) {
            testPass(`${test.name} link present`);
        } else {
            testFail(`${test.name} link missing`, `Expected: ${test.url}`);
        }
    });

    // Test project links
    const projectLinksTests = [
        { name: 'Telematics GitHub', url: 'https://github.com/DivyanshSareen/kiroween-telematics-provider' },
        { name: 'Telematics Demo', url: 'https://fleet-manager-dashboard.vercel.app/' }
    ];

    projectLinksTests.forEach(test => {
        if (html.includes(test.url)) {
            testPass(`${test.name} link present`);
        } else {
            testFail(`${test.name} link missing`, `Expected: ${test.url}`);
        }
    });

    // Test navigation links
    const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'blog'];
    navLinks.forEach(link => {
        if (html.includes(`href="#${link}"`)) {
            testPass(`Navigation link to ${link} present`);
        } else {
            testFail(`Navigation link to ${link} missing`);
        }
    });

    // Verify Contact link is removed
    if (!html.includes('href="#contact"') && !html.includes('>Contact</a>')) {
        testPass('Contact link removed from navigation');
    } else {
        testFail('Contact link should be removed from navigation');
    }

    // Test target="_blank" on external links
    const externalLinkPattern = /<a[^>]*href="https?:\/\/[^"]*"[^>]*>/g;
    const externalLinks = html.match(externalLinkPattern) || [];
    
    let blankTargetCount = 0;
    let noopenerCount = 0;
    
    externalLinks.forEach(link => {
        if (link.includes('target="_blank"')) blankTargetCount++;
        if (link.includes('rel="noopener noreferrer"')) noopenerCount++;
    });

    if (blankTargetCount === externalLinks.length) {
        testPass(`All ${externalLinks.length} external links open in new tab`);
    } else {
        testFail(`Some external links missing target="_blank"`, `${blankTargetCount}/${externalLinks.length}`);
    }

    if (noopenerCount === externalLinks.length) {
        testPass(`All ${externalLinks.length} external links have security attributes`);
    } else {
        testWarning(`Some external links missing rel="noopener noreferrer"`, `${noopenerCount}/${externalLinks.length}`);
    }
}

// Test 10.3: Accessibility
function testAccessibility(html) {
    log('\n=== 10.3 Accessibility Tests ===', 'cyan');
    
    // Test aria-labels
    const ariaLabels = [
        'LinkedIn Profile',
        'GitHub Profile',
        'LeetCode Profile',
        'Dev.to Profile',
        'Toggle theme',
        'Toggle navigation'
    ];

    ariaLabels.forEach(label => {
        if (html.includes(`aria-label="${label}"`)) {
            testPass(`Aria-label "${label}" present`);
        } else {
            testFail(`Aria-label "${label}" missing`);
        }
    });

    // Test heading hierarchy
    const h1Count = (html.match(/<h1[^>]*>/g) || []).length;
    if (h1Count === 1) {
        testPass('Page has exactly one h1 element');
    } else {
        testFail('Page should have exactly one h1', `Found ${h1Count}`);
    }

    // Test semantic HTML
    if (html.includes('<nav')) {
        testPass('Semantic nav element present');
    } else {
        testFail('Semantic nav element missing');
    }

    if (html.includes('<section')) {
        testPass('Semantic section elements present');
    } else {
        testFail('Semantic section elements missing');
    }

    if (html.includes('<footer')) {
        testPass('Semantic footer element present');
    } else {
        testFail('Semantic footer element missing');
    }

    // Test meta tags
    if (html.includes('name="description"')) {
        testPass('Meta description present');
    } else {
        testFail('Meta description missing');
    }

    if (html.includes('<meta name="viewport"')) {
        testPass('Viewport meta tag present');
    } else {
        testFail('Viewport meta tag missing');
    }

    // Test lang attribute
    if (html.includes('<html lang="en"')) {
        testPass('HTML lang attribute present');
    } else {
        testFail('HTML lang attribute missing');
    }
}

// Test content updates
function testContentUpdates(html) {
    log('\n=== Content Update Tests ===', 'cyan');
    
    // Test MapUp dates
    if (html.includes('August 2023 - August 2025')) {
        testPass('MapUp dates updated correctly');
    } else {
        testFail('MapUp dates not updated', 'Should be "August 2023 - August 2025"');
    }

    // Test Redis removal
    if (!html.includes('>Redis</')) {
        testPass('Redis removed from skills');
    } else {
        testFail('Redis should be removed from skills');
    }

    // Test TollTally MapUp reference
    if (html.includes('MapUp Product')) {
        testPass('TollTally shows MapUp Product reference');
    } else {
        testFail('TollTally missing MapUp Product reference');
    }

    // Test Telematics Provider Platform
    if (html.includes('Telematics Provider Platform')) {
        testPass('Telematics Provider Platform project present');
    } else {
        testFail('Telematics Provider Platform project missing');
    }

    // Test blog section
    if (html.includes('id="blog"')) {
        testPass('Blog section present');
    } else {
        testFail('Blog section missing');
    }

    // Test contact section removal
    if (!html.includes('id="contact"')) {
        testPass('Contact section removed');
    } else {
        testFail('Contact section should be removed');
    }

    // Test social sidebar
    if (html.includes('class="social-sidebar"')) {
        testPass('Social sidebar present');
    } else {
        testFail('Social sidebar missing');
    }
}

// Test responsive design elements
function testResponsiveElements(html) {
    log('\n=== 10.1 Responsive Design Elements ===', 'cyan');
    
    // Test hamburger menu
    if (html.includes('class="hamburger"')) {
        testPass('Hamburger menu element present');
    } else {
        testFail('Hamburger menu element missing');
    }

    // Test viewport meta tag
    if (html.includes('width=device-width, initial-scale=1.0')) {
        testPass('Proper viewport meta tag present');
    } else {
        testFail('Viewport meta tag incorrect or missing');
    }

    // Test mobile-friendly elements
    if (html.includes('nav-menu')) {
        testPass('Navigation menu structure present');
    } else {
        testFail('Navigation menu structure missing');
    }
}

// Read CSS file and test styles
function testStyles() {
    log('\n=== Style Tests ===', 'cyan');
    
    try {
        const cssPath = path.join(__dirname, '..', 'styles.css');
        const css = fs.readFileSync(cssPath, 'utf8');

        // Test responsive breakpoints
        if (css.includes('@media (max-width: 768px)')) {
            testPass('Mobile breakpoint present');
        } else {
            testFail('Mobile breakpoint missing');
        }

        // Test social sidebar styles
        if (css.includes('.social-sidebar')) {
            testPass('Social sidebar styles present');
        } else {
            testFail('Social sidebar styles missing');
        }

        // Test fixed positioning
        if (css.includes('position: fixed')) {
            testPass('Fixed positioning used');
        } else {
            testFail('Fixed positioning missing');
        }

        // Test dark mode
        if (css.includes('[data-theme="dark"]')) {
            testPass('Dark mode styles present');
        } else {
            testFail('Dark mode styles missing');
        }

        // Test animations
        if (css.includes('@keyframes')) {
            testPass('CSS animations present');
        } else {
            testFail('CSS animations missing');
        }

    } catch (error) {
        testFail('Read CSS file', error.message);
    }
}

// Test JavaScript functionality
function testJavaScript() {
    log('\n=== JavaScript Tests ===', 'cyan');
    
    try {
        const jsPath = path.join(__dirname, '..', 'script.js');
        const js = fs.readFileSync(jsPath, 'utf8');

        // Test theme toggle
        if (js.includes('themeToggle')) {
            testPass('Theme toggle functionality present');
        } else {
            testFail('Theme toggle functionality missing');
        }

        // Test hamburger menu
        if (js.includes('hamburger')) {
            testPass('Hamburger menu functionality present');
        } else {
            testFail('Hamburger menu functionality missing');
        }

        // Test smooth scroll
        if (js.includes('scrollIntoView') || js.includes('scroll-behavior')) {
            testPass('Smooth scroll functionality present');
        } else {
            testFail('Smooth scroll functionality missing');
        }

        // Test EmailJS removal
        if (!js.includes('emailjs') && !js.includes('EmailJS')) {
            testPass('EmailJS code removed');
        } else {
            testFail('EmailJS code should be removed');
        }

        // Test contact form removal
        if (!js.includes('contact-form') && !js.includes('contactForm')) {
            testPass('Contact form code removed');
        } else {
            testFail('Contact form code should be removed');
        }

    } catch (error) {
        testFail('Read JavaScript file', error.message);
    }
}

// Main test runner
function runTests() {
    log('\n╔════════════════════════════════════════╗', 'blue');
    log('║   Portfolio Automated Test Suite      ║', 'blue');
    log('╚════════════════════════════════════════╝\n', 'blue');

    const html = readHTML();
    
    if (html) {
        testResponsiveElements(html);
        testLinksAndNavigation(html);
        testAccessibility(html);
        testContentUpdates(html);
        testStyles();
        testJavaScript();
    }

    // Print summary
    log('\n╔════════════════════════════════════════╗', 'blue');
    log('║          Test Summary                  ║', 'blue');
    log('╚════════════════════════════════════════╝\n', 'blue');
    
    log(`Passed:   ${results.passed}`, 'green');
    log(`Failed:   ${results.failed}`, 'red');
    log(`Warnings: ${results.warnings}`, 'yellow');
    log(`Total:    ${results.passed + results.failed + results.warnings}\n`);

    if (results.failed === 0) {
        log('✓ All tests passed!', 'green');
        process.exit(0);
    } else {
        log(`✗ ${results.failed} test(s) failed`, 'red');
        process.exit(1);
    }
}

// Run tests
runTests();
