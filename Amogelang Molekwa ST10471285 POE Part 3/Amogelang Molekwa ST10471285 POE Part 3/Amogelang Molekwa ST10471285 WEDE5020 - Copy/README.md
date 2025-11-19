Women In Tech – Website Documentation

Modern responsive website promoting Women in Tech South Africa, including pages for About, Vision & Mission, Services, Contact, and Enquiries. Features scroll effects, forms with JavaScript validation, animations, accessibility improvements, and modular JS architecture.

Table of Contents

Overview
Project Purpose
Features
Technologies Used
Project Structure
Setup & Installation
How to Edit or Add Content
Forms & Email Processing
JavaScript Modules Description
Browser Support
Best Practices Followed
Changelog
References

Overview

The Women in Tech South Africa website is a multi-page responsive platform designed to:
Present organizational information
Promote digital inclusion initiatives
Provide services, contact, and enquiry functionality
Offer users a friendly and accessible interface
The project uses HTML5, CSS3, and modular JavaScript, with simple integration to Formspree for email-based form submissions.

Project Purpose

The platform aims to:
Empower women in STEAM fields
Showcase programs, services, and opportunities
Make it easy for users to enquire or contact the organisation
Deliver a high-quality, maintainable, modular website

Features
✔ Fully responsive layout (mobile, tablet, desktop)

✔ Modular JavaScript for:

Form validation
Animations
Scroll effects
Tabs & accordions
Lightbox functionality
Registration form logic

✔ Contact and Enquiry forms with:

Client-side validation
Asynchronous Formspree integration
Friendly success/error feedback messages

✔ Strong Accessibility:

ARIA labels
Semantic HTML
Keyboard navigability

✔ SEO Ready:

<meta> descriptions and keywords
Clean URL structure
Optimised alt text for images
-----------------------------------------------------------------------------------
Optimized Project Structure

AMOGELANG MOLEKWA ST10471285 WED/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── js/
│   │   ├── accordions.js
│   │   ├── anim_trans.js
│   │   ├── contact.js
│   │   ├── enquire.js
│   │   ├── lightbox.js
│   │   ├── modals.js
│   │   ├── register.js
│   │   ├── registration.js
│   │   ├── scroll.js
│   │   ├── tabs.js
│   │   └── validate.js
│   │
│   ├── images/
│   │   ├── gallery1.jpg
│   │   ├── gallery2.jpg
│   │   ├── gallery3.jpg
│   │   ├── Logo_South-Africa-1280x1280.png
│   │   ├── womenintech-global.jpg
│   │   └── (any other logos or icons)
│
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── enquire.html
│   ├── service.html
│   └── vision.html
│
├── preview/
│   └── (screenshots or mockups of the site)
│
├── index.html
├── README.md
├── GITHUB LINK.txt
├── WEBSITE LINK.txt
└── .gitattributes
---------------------------------------------------------------------------------------
📜 Changelog

v1.4 – (2025-11)

Added Contact Form JavaScript validation
Added Contact Form asynchronous submission
Added success/error message components
Updated README with full sections and references
Cleaned JS structure & added missing modules
Fixed duplicated <script> imports
Improved accessibility on navigation links

v1.3 – (2025-10)

Added Enquiry Form validation + Formspree processing
Improved SEO (meta descriptions, image alt text)
Added scroll animations
Added lightbox + modal system

v1.2 – (2025-09)

Added tabs, accordions, and transitions JS
Added modular JavaScript file architecture
Introduced Side Navigation
Added assets folder & image optimization

v1.1 – (2025-08)

Completed Services, Vision, About pages
Initial responsive CSS
Improved layout structure (header, footer, grid)

v1.0 – (2025-07)

Project initialised
Basic HTML skeleton created
Navigation & homepage added


--------------------📚 References-----------------

These resources guided site structure, accessibility, and coding standards:

HTML & CSS

MDN Web Docs – HTML/CSS Standards
W3C Accessibility Guidelines
W3Schools (layout references)

JavaScript

MDN Web Docs – DOM & Events
JavaScript.info – Form validation patterns

UI/UX
Google Material Design Guidelines
Nielsen Norman Group (UX best practices)

Tools

Formspree Email API
FontAwesome Icons
VS Code + Live Server
GitHub for version control
