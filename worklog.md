---
Task ID: 3
Agent: Main
Task: Fix dark/light mode using standard Tailwind/shadcn pattern

Work Log:
- Diagnosed the problem: custom CSS variables (var(--wam-*)) don't integrate with Tailwind's dark: prefix or shadcn's theme system
- Rewrote globals.css with proper :root (light) and .dark (dark) CSS variable definitions using oklch values
- Added glass CSS variables (--glass, --glass-border, --glass-hover) to both :root and .dark and registered them in @theme inline
- Replaced ALL var(--wam-*) usage across 10 component files with standard shadcn Tailwind classes:
  - var(--wam-text) → text-foreground
  - var(--wam-text-muted) → text-muted-foreground
  - var(--wam-bg) → bg-background
  - var(--wam-bg-secondary) → bg-card
  - var(--wam-glass-bg) → bg-accent
  - var(--wam-border) → border-border
  - var(--wam-input-bg) → bg-secondary
  - var(--wam-input-border) → border-input
  - etc.
- Updated FloatingShapes to use dark: prefix for different opacity in light/dark
- Updated Navbar with proper shadcn classes
- Updated ThemeToggle with proper muted-foreground colors
- Verified 0 remaining var(--wam-) references in src/
- Ran lint: 0 errors
- Dev server compiles and serves correctly

Stage Summary:
- Dark/light mode now uses the standard Tailwind/shadcn pattern
- :root = light mode, .dark = dark mode (managed by next-themes with attribute="class")
- All components use semantic shadcn classes (bg-background, text-foreground, etc.)
- Theme toggle in navbar properly switches between modes
- Default theme is dark
