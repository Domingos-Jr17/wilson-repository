---
Task ID: 2
Agent: Main
Task: Add dark/light mode, fix logo, real Adobe logos, centered navbar, modernize

Work Log:
- Added next-themes ThemeProvider and ThemeToggle component
- Updated layout.tsx to use ThemeProvider with class-based dark mode
- Fixed logo everywhere: wam-logo.jpeg → wam-design_logo.jpeg (Hero, Navbar, Loader, About, Footer, favicon)
- Created custom CSS variables for dark/light mode (--wam-bg, --wam-text, --wam-glass-bg, etc.)
- Updated globals.css with complete dark/light mode variable system
- Replaced generic Adobe app icons with real SVG logos (Photoshop, Illustrator, Premiere, After Effects, InDesign, XD)
- Redesigned Navbar: centered premium header on desktop with all nav links, theme toggle, and CTA; hamburger bar on mobile
- Added glass-light variant for light mode navbar
- Updated all sections to use CSS variables instead of hardcoded colors for theme support
- Improved Portfolio section: added tags, action buttons, better descriptions for each project
- Added tools section at bottom of portfolio
- All components updated with var(--wam-*) color tokens for seamless dark/light switching

Stage Summary:
- Dark/Light mode fully functional with toggle in navbar
- Correct logo (wam-design_logo.jpeg) used everywhere
- Real Adobe SVG logos replace generic icons in Skills section
- Premium centered navbar on desktop, hamburger menu on mobile
- Portfolio section clearer with tags, descriptions, and action buttons
- All sections respond to theme changes via CSS custom properties
