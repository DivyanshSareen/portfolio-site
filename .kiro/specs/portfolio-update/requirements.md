# Requirements Document

## Introduction

This document outlines the requirements for updating an existing portfolio website to better target HR professionals and recruiters. The portfolio showcases a backend developer's skills, experience, and projects with updated content, improved social media visibility, refined technology sections, and a new blog section.

## Glossary

- **Portfolio Website**: A single-page web application showcasing professional experience, skills, and projects
- **Social Links Component**: Persistent UI element displaying links to professional social media profiles
- **Terminal Display**: Code block visualization showing JSON-formatted developer information
- **Technologies Section**: Visual display of technical skills with progress indicators
- **Work Experience Section**: Timeline-based display of professional employment history
- **Featured Projects Section**: Showcase of notable development projects with descriptions and links
- **Blog Posts Section**: Display of published technical articles with links to external platforms
- **HR**: Human Resources professionals and technical recruiters who review developer portfolios

## Requirements

### Requirement 1

**User Story:** As an HR professional, I want to see the developer's core identity immediately upon landing, so that I can quickly understand their specialization and expertise.

#### Acceptance Criteria

1. WHEN the Portfolio Website loads THEN the system SHALL display a terminal-style code block showing JSON objects with basic developer information
2. WHEN the terminal display renders THEN the system SHALL include properties for name, role, languages, cloud technologies, and passions
3. WHEN the landing page content is displayed THEN the system SHALL emphasize backend development specialization
4. THE Portfolio Website SHALL maintain the existing landing page layout and visual design
5. WHEN the hero section renders THEN the system SHALL display the developer's name, role, and professional summary

### Requirement 2

**User Story:** As an HR professional, I want to access the developer's social profiles easily from any page, so that I can review their professional presence and contributions.

#### Acceptance Criteria

1. THE Portfolio Website SHALL display social links persistently on all viewport positions
2. WHEN social links are rendered THEN the system SHALL include LinkedIn, GitHub, LeetCode, and Dev.to profile links
3. WHEN a user clicks a social link THEN the system SHALL open the corresponding profile in a new browser tab
4. THE Social Links Component SHALL remain visible during page scrolling
5. WHEN the Social Links Component is positioned THEN the system SHALL not obstruct primary content or navigation elements

### Requirement 3

**User Story:** As an HR professional reviewing technical skills, I want to see relevant and current technologies, so that I can assess the developer's technical stack accurately.

#### Acceptance Criteria

1. WHEN the Technologies Section renders THEN the system SHALL exclude Redis from the displayed technologies
2. THE Technologies Section SHALL display PostgreSQL, MongoDB, and DynamoDB as database technologies
3. WHEN technology skills are displayed THEN the system SHALL include visual progress indicators for each technology
4. THE Technologies Section SHALL organize skills into categories: Programming Languages, Frameworks & Libraries, Databases, and Cloud & DevOps
5. WHEN the Technologies Section is viewed THEN the system SHALL maintain the existing card-based layout with skill bars

### Requirement 4

**User Story:** As an HR professional reviewing work history, I want to see accurate employment dates, so that I can verify the candidate's experience timeline.

#### Acceptance Criteria

1. WHEN the Work Experience Section displays the MapUp position THEN the system SHALL show the date range as "August 2023 - August 2025"
2. THE Work Experience Section SHALL maintain all existing achievement descriptions for the MapUp position
3. WHEN employment history is rendered THEN the system SHALL display positions in reverse chronological order
4. THE Work Experience Section SHALL preserve the timeline visualization design
5. WHEN work experience entries are displayed THEN the system SHALL include company name, role, dates, description, achievements, and technology tags

### Requirement 5

**User Story:** As an HR professional evaluating projects, I want to see relevant and recent work samples, so that I can assess the developer's practical capabilities.

#### Acceptance Criteria

1. WHEN the Featured Projects Section renders THEN the system SHALL display the TollTally project without a live demo link
2. WHEN the TollTally project is displayed THEN the system SHALL include a reference indicating it is a MapUp product
3. THE Featured Projects Section SHALL remove the Location Search API project
4. THE Featured Projects Section SHALL remove the API Integration Platform project
5. WHEN the Featured Projects Section renders THEN the system SHALL add the Telematics Provider Platform project with GitHub code link and live demo link
6. WHEN the Telematics Provider Platform project is displayed THEN the system SHALL include technologies: Go, Next.js, PostgreSQL, PostGIS, JWT
7. WHEN the Telematics Provider Platform project is displayed THEN the system SHALL include descriptions of RESTful APIs, GPS data processing, insight generation, fleet dashboard, and authentication features

### Requirement 6

**User Story:** As an HR professional, I want streamlined contact options, so that I can reach out through professional channels without form friction.

#### Acceptance Criteria

1. THE Portfolio Website SHALL remove the Contact Me section entirely
2. THE Portfolio Website SHALL remove the contact form component
3. WHEN the contact section is removed THEN the system SHALL remove associated form validation logic
4. WHEN the contact section is removed THEN the system SHALL remove EmailJS integration code
5. WHEN navigation is rendered THEN the system SHALL remove the "Contact" link from the navigation menu

### Requirement 7

**User Story:** As an HR professional interested in the developer's thought leadership, I want to access their published articles, so that I can evaluate their communication skills and technical knowledge.

#### Acceptance Criteria

1. THE Portfolio Website SHALL add a new Blog Posts Section
2. WHEN the Blog Posts Section renders THEN the system SHALL display the article "Kiro for Software Development?" with link to https://dev.to/divyansh_sareen/ai-assistance-in-development-53nd
3. WHEN the Blog Posts Section renders THEN the system SHALL display the article "Ways to traverse a matrix" with link to https://divyanshsareen.hashnode.dev/matrix-travel
4. WHEN the Blog Posts Section renders THEN the system SHALL display the article "JavaScript Objects and Prototypes" with link to https://divyanshsareen.hashnode.dev/javascript-objects-and-prototypes
5. WHEN a user clicks a blog post link THEN the system SHALL open the article in a new browser tab
6. THE Blog Posts Section SHALL include article titles and publication platform indicators
7. WHEN the Blog Posts Section is positioned THEN the system SHALL place it after the Featured Projects Section and before the footer
