# Spotlight Next.js Portfolio Website - Complete Content Extraction

## Overview
This is Spencer Sharp's personal portfolio website built with Next.js, featuring his work as a software designer, founder, and amateur astronaut. The site includes information about projects, articles, speaking engagements, and tools he uses.

---

## 1. SITE METADATA & CONFIGURATION

### Page Title & Description
- **Title Template**: `%s - Spencer Sharp`
- **Default Title**: `Spencer Sharp - Software designer, founder, and amateur astronaut`
- **Main Description**: "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."

---

## 2. PAGE CONTENT STRUCTURE

### 2.1 HOME PAGE (`/`)
**Hero Section:**
- Main Heading: "Software designer, founder, and amateur astronaut."
- Tagline: "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
- Social Links: X, Instagram, GitHub, LinkedIn

**Newsletter Signup Section:**
- Heading: "Stay up to date"
- Description: "Get notified when I publish something new, and unsubscribe at any time."
- Form has email input with "Join" button
- Post-submission redirect: `/thank-you`

**Photo Gallery:**
- 5 rotated images displayed in carousel
- Classes: `rotate-2`, `-rotate-2` for visual interest
- Responsive sizes: `18rem` (sm), `11rem` (mobile)

**Resume/Work Section:**
- Heading with briefcase icon: "Work"
- CV download button
- Lists company roles with logos

**Articles Section:**
- Displays first 4 most recent articles
- Each article shows:
  - Title (linked to article page)
  - Publication date
  - Description
  - "Read article" CTA

### 2.2 ABOUT PAGE (`/about`)
**Page Metadata:**
- Title: "About"
- Description: "I'm Spencer Sharp. I live in New York City, where I design the future."

**Content:**
- Main Heading: "I'm Spencer Sharp. I live in New York City, where I design the future."
- 4 biographical paragraphs covering:
  1. Love of making things, first program at age 6 with Macintosh LC 550
  2. Childhood love of space, attempted tree jump at age 8
  3. Building rocket design, successfully sent dad's Blackberry to orbit at age 15
  4. Current work at Planetaria on civilian space suits and shuttle kits

**Sidebar Elements:**
- Portrait image (rotated 3 degrees)
- Social Links:
  - X (Twitter)
  - Instagram
  - GitHub
  - LinkedIn
  - Email: `spencer@planetaria.tech`

### 2.3 ARTICLES PAGE (`/articles`)
**Page Metadata:**
- Title: "Articles"
- Description: "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."

**Layout:**
- Title: "Writing on software design, company building, and the aerospace industry."
- Intro: "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
- Grid layout with left border and padding
- Articles sorted by date (newest first)

**Article Components:**
Each article card displays:
- Title (linked)
- Date
- Description
- "Read article" CTA

### 2.4 ARTICLES CONTENT

#### Article 1: "Rewriting the cosmOS kernel in Rust"
- **Date**: July 14, 2022
- **Slug**: `rewriting-the-cosmos-kernel-in-rust`
- **Author**: Adam Wathan
- **Description**: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it's been a while since I've seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
- **Key Content**:
  - Rust code example with ferris_says library
  - Self-worth derived from Hacker News impressions
  - Migration to Rust as response to trends
  - Lorem Ipsum filler sections with Lorem Markdownum

#### Article 2: "Crafting a design system for a multiplanetary future"
- **Date**: September 5, 2022
- **Slug**: `crafting-a-design-system-for-a-multiplanetary-future`
- **Author**: Adam Wathan
- **Description**: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
- **Key Content**:
  - Brand design for multiplanetary future
  - Space helmet approach to design
  - Figma-based design process
  - Lorem Ipsum filler sections with C code examples

#### Article 3: "Introducing Animaginary: High performance web animations"
- **Date**: September 2, 2022
- **Slug**: `introducing-animaginary`
- **Author**: Adam Wathan
- **Description**: "When you're building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
- **Key Content**:
  - Animaginary: WASM-based web animation library
  - High-performance animations including height property at 60fps
  - Code example showing animate.div usage with opacity and scale
  - Animation properties: `in`, `animateFrom`, `animateTo`, `duration`
  - Lorem Ipsum filler sections

### 2.5 PROJECTS PAGE (`/projects`)
**Page Metadata:**
- Title: "Projects"
- Description: "Things I've made trying to put my dent in the universe."

**Layout:**
- Title: "Things I've made trying to put my dent in the universe."
- Intro: "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
- Grid: 3 columns on large screens, 2 on tablets, 1 on mobile
- Gap: 12px (x-axis), 16px (y-axis)

**Projects List:**

1. **Planetaria**
   - Description: "Creating technology to empower civilians to explore space on their own terms."
   - Link: `http://planetaria.tech`
   - Label: `planetaria.tech`
   - Logo: logoPlanetaria

2. **Animaginary**
   - Description: "High performance web animation library, hand-written in optimized WASM."
   - Link: `#` (GitHub)
   - Label: `github.com`
   - Logo: logoAnimaginary

3. **HelioStream**
   - Description: "Real-time video streaming library, optimized for interstellar transmission."
   - Link: `#` (GitHub)
   - Label: `github.com`
   - Logo: logoHelioStream

4. **cosmOS**
   - Description: "The operating system that powers our Planetaria space shuttles."
   - Link: `#` (GitHub)
   - Label: `github.com`
   - Logo: logoCosmos

5. **OpenShuttle**
   - Description: "The schematics for the first rocket I designed that successfully made it to orbit."
   - Link: `#` (GitHub)
   - Label: `github.com`
   - Logo: logoOpenShuttle

### 2.6 SPEAKING PAGE (`/speaking`)
**Page Metadata:**
- Title: "Speaking"
- Description: "I've spoken at events all around the world and been interviewed for many podcasts."

**Layout:**
- Title: "I've spoken at events all around the world and been interviewed for many podcasts."
- Intro: "One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."

**Conference Appearances:**

1. **"In space, no one can watch you stream — until now"**
   - Event: SysConf 2021
   - Description: "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
   - CTA: "Watch video"

2. **"Lessons learned from our first product recall"**
   - Event: Business of Startups 2020
   - Description: "They say that if you're not embarassed by your first version, you're doing it wrong. Well when you're selling DIY space shuttle kits it turns out it's a bit more complicated."
   - CTA: "Watch video"

**Podcast Appearances:**

1. **"Using design as a competitive advantage"**
   - Event: Encoding Design, July 2022
   - Description: "How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
   - CTA: "Listen to podcast"

2. **"Bootstrapping an aerospace company to $17M ARR"**
   - Event: The Escape Velocity Show, March 2022
   - Description: "The story of how we built one of the most promising space startups in the world without taking any capital from investors."
   - CTA: "Listen to podcast"

3. **"Programming your company operating system"**
   - Event: How They Work Radio, September 2021
   - Description: "On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
   - CTA: "Listen to podcast"

### 2.7 USES PAGE (`/uses`)
**Page Metadata:**
- Title: "Uses"
- Description: "Software I use, gadgets I love, and other things I recommend."

**Layout:**
- Title: "Software I use, gadgets I love, and other things I recommend."
- Intro: "I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."

**Tools by Category:**

**Workstation:**
- 16" MacBook Pro, M1 Max, 64GB RAM (2021)
  - Description: Never heard fans turn on, excellent for heavy loads during launch simulations
- Apple Pro Display XDR (Standard Glass)
  - Description: Only HiDPI display >27", necessary for planetary-scale work
- IBM Model M SSK Industrial Keyboard
  - Description: High-quality mechanical keyboard, collects spares
- Apple Magic Trackpad
  - Description: Gesture-based wizard-like control experience
- Herman Miller Aeron Chair
  - Description: Expensive chair for slouching in terrible ergonomic positions

**Development Tools:**
- Sublime Text 4
  - Description: Best text editor ever made, despite lacking fancy IDE features
- iTerm2
  - Description: Terminal emulator with superior features
- TablePlus
  - Description: Database GUI tool, eliminates need for custom admin interfaces

**Design:**
- Figma
  - Description: Started as design tool, evolved into company virtual whiteboard, collaboration features are the real draw

**Productivity:**
- Alfred
  - Description: "Sublime Text of the application launcher world"
- Reflect
  - Description: Daily notes system, easier discovery than topic-organized notes
- SavvyCal
  - Description: Meeting scheduling tool that protects calendar and reserves deep work time
- Focus
  - Description: Website blocker for maintaining momentum during work

### 2.8 THANK YOU PAGE (`/thank-you`)
**Page Metadata:**
- Title: "You're subscribed"
- Description: "Thanks for subscribing to my newsletter."

**Content:**
- Title: "Thanks for subscribing."
- Message: "I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."

---

## 3. COMPONENT ARCHITECTURE

### 3.1 BUTTON COMPONENT (`Button.jsx`)

**Props:**
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `className`: Additional CSS classes
- `href`: Optional link destination (converts to Link if provided)
- All standard button/link props

**Variants:**

**Primary Style:**
```
bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 
active:bg-zinc-800 active:text-zinc-100/70 
dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 
dark:active:text-zinc-100/70
```

**Secondary Style:**
```
bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 
active:bg-zinc-100 active:text-zinc-900/60 
dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 
dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 
dark:active:text-zinc-50/70
```

**Common Classes:**
- `inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none`

### 3.2 CARD COMPONENT (`Card.jsx`)

**Structure:**
- Card (wrapper)
- Card.Link (internal link wrapper)
- Card.Title (heading)
- Card.Description (body text)
- Card.Cta (call-to-action with chevron)
- Card.Eyebrow (metadata like dates)

**Card Root:**
- Props: `as` (component type), `className`, `children`
- Base Classes: `group relative flex flex-col items-start`

**Card.Link:**
- Creates hover background effect
- Background: `bg-zinc-50 dark:bg-zinc-800/50`
- Scale on hover: `scale-95 → scale-100`
- Opacity: `opacity-0 → opacity-100`
- Rounded: `sm:rounded-2xl`

**Card.Title:**
- Component type: defaults to 'h2'
- Classes: `text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100`
- Optionally wraps in Card.Link if href provided

**Card.Description:**
- Classes: `relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400`

**Card.Cta:**
- Classes: `relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500`
- Includes right chevron icon

**Card.Eyebrow:**
- Component type: defaults to 'p'
- Classes: `relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500`
- Optional decorate: adds left bar indicator
- Decorate style: `h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500`

### 3.3 CONTAINER COMPONENTS (`Container.jsx`)

**ContainerOuter:**
- Responsive padding: `sm:px-8`
- Max width wrapper: `max-w-7xl lg:px-8`

**ContainerInner:**
- Responsive padding: `px-4 sm:px-8 lg:px-12`
- Inner max-width: `lg:max-w-5xl`

**Container (composite):**
- Combines Outer and Inner for full structure
- Provides consistent spacing and max-width constraints

### 3.4 HEADER COMPONENT (`Header.jsx`)

**Features:**
- Sticky positioning with dynamic height adjustment
- Avatar image scaling animation based on scroll position
- Theme toggle (light/dark mode)
- Responsive navigation (desktop and mobile)
- Mobile menu with popover (Headless UI)

**Navigation Items:**
- `/about` → "About"
- `/articles` → "Articles"
- `/projects` → "Projects"
- `/speaking` → "Speaking"
- `/uses` → "Uses"

**Avatar:**
- Size on home page: `h-16 w-16` (large), `h-9 w-9` (other pages)
- Image: `avatar.jpg`
- Rounded: `rounded-full`
- Background: `bg-zinc-100 dark:bg-zinc-800`

**Theme Toggle:**
- Sun icon (light mode): `fill-zinc-100 stroke-zinc-500`
- Moon icon (dark mode): `fill-zinc-700 stroke-zinc-500`
- Hover colors with teal accents

**Mobile Navigation:**
- Popover trigger: "Menu" button
- Menu items as links
- Backdrop blur effect
- Close button in header

**Header Styling:**
- Desktop nav: `bg-white/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90`
- Rounded: `rounded-full`
- Padding: `px-3 py-2` (desktop), `px-4 py-2` (mobile)

### 3.5 FOOTER COMPONENT (`Footer.jsx`)

**Navigation Links:**
- `/about` → "About"
- `/projects` → "Projects"
- `/speaking` → "Speaking"
- `/uses` → "Uses"

**Copyright:**
- Format: `© [YEAR] Spencer Sharp. All rights reserved.`
- Year dynamically generated

**Styling:**
- Border top: `border-zinc-100 dark:border-zinc-700/40`
- Padding: `pt-10 pb-16`
- Link hover: `hover:text-teal-500 dark:hover:text-teal-400`

### 3.6 LAYOUT COMPONENT (`Layout.jsx`)

**Structure:**
- Fixed background grid (visual effect)
- Relative flex container
- Header component
- Main content area (flex-auto)
- Footer component

**Background:**
- White ring effect: `ring-1 ring-zinc-100 dark:ring-zinc-300/20`
- Dark mode background: `dark:bg-zinc-900`

### 3.7 SIMPLE LAYOUT COMPONENT (`SimpleLayout.jsx`)

**Props:**
- `title`: Page heading
- `intro`: Introductory text
- `children`: Page content

**Structure:**
- Header section with title and intro
- Optional children container with top margin

**Styling:**
- Title: `text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100`
- Intro: `mt-6 text-base text-zinc-600 dark:text-zinc-400`
- Children container: `mt-16 sm:mt-20`

### 3.8 SECTION COMPONENT (`Section.jsx`)

**Props:**
- `title`: Section heading
- `children`: Content

**Layout:**
- Border left on medium+: `md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40`
- Grid: `grid-cols-1 md:grid-cols-4`
- Title width: `1 column`
- Content width: `3 columns (md:col-span-3)`
- Vertical gap: `gap-y-8`

### 3.9 ARTICLE LAYOUT COMPONENT (`ArticleLayout.jsx`)

**Props:**
- `article`: Article metadata (title, date)
- `children`: Article content

**Features:**
- Back button to previous page
- Article header with title and date
- Prose wrapper for formatted content

**Back Button:**
- Position: `absolute lg:-left-5 xl:left-0` (side-mounted)
- Arrow icon pointing left
- Appears only if previousPathname exists (in AppContext)

**Article Header:**
- Title: `mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100`
- Date: `order-first text-base text-zinc-400 dark:text-zinc-500` with decoration bar

### 3.10 PROSE COMPONENT (`Prose.jsx`)

**Purpose:**
- Wrapper for MDX content with Tailwind typography
- Classes: `prose dark:prose-invert`

**Typography Configuration:**
- Uses Tailwind's @tailwindcss/typography plugin
- Custom typography theme (see typography.js)
- Heading colors, link colors, code highlighting
- Different styling for light/dark modes

---

## 4. SOCIAL ICONS COMPONENT (`SocialIcons.jsx`)

**Icons Included:**

1. **X Icon** (Twitter)
   - SVG path: Custom X logo design
   - Fill: `fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400`

2. **Instagram Icon**
   - SVG path: Instagram camera logo
   - Fill color on hover

3. **GitHub Icon**
   - SVG path: GitHub octocat
   - Fill rule: evenodd, clip rule

4. **LinkedIn Icon**
   - SVG path: LinkedIn "in" logo
   - Professional network icon

**Usage Pattern:**
- All icons accept `props` for customization
- Used in SocialLink wrapper for consistent styling
- Icon size: `h-6 w-6` (standard)
- Hover effects: color transitions

---

## 5. NAVIGATION STRUCTURE

**Main Navigation:**
1. Home (`/`)
2. About (`/about`)
3. Articles (`/articles`)
4. Projects (`/projects`)
5. Speaking (`/speaking`)
6. Uses (`/uses`)

**Article Routes:**
- `/articles/introducing-animaginary`
- `/articles/crafting-a-design-system-for-a-multiplanetary-future`
- `/articles/rewriting-the-cosmos-kernel-in-rust`

**Post-submission Route:**
- `/thank-you` (after newsletter signup)

---

## 6. IMAGE REFERENCES

### Logos (in `/images/logos/`)
- `airbnb.svg` - Airbnb company logo
- `facebook.svg` - Facebook/Meta logo
- `planetaria.svg` - Planetaria company logo
- `starbucks.svg` - Starbucks logo
- `animaginary.svg` - Animaginary project logo
- `cosmos.svg` - cosmOS project logo
- `helio-stream.svg` - HelioStream project logo
- `open-shuttle.svg` - OpenShuttle project logo

### Photos (in `/images/photos/`)
- `image-1.jpg` - Photo gallery image 1
- `image-2.jpg` - Photo gallery image 2
- `image-3.jpg` - Photo gallery image 3
- `image-4.jpg` - Photo gallery image 4
- `image-5.jpg` - Photo gallery image 5

### Profile Images
- `avatar.jpg` - Profile avatar for header
- `portrait.jpg` - Portrait image on about page

---

## 7. TAILWIND CSS & STYLING

### Color Palette

**Primary Colors:**
- `zinc`: Text, borders, backgrounds (50-900 scale)
- `teal`: Accent color (400, 500, 600)
- `white`: Pure white backgrounds

**Dark Mode:**
- Prefix: `dark:` for dark mode specific classes
- Dark backgrounds: `dark:bg-black`, `dark:bg-zinc-800`, `dark:bg-zinc-900`
- Dark text: `dark:text-zinc-100`, `dark:text-zinc-200`

### Typography

**Font Sizes:**
- `text-xs`: 0.8125rem (13px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2rem (32px)
- `text-5xl`: 3rem (48px)

**Font Weights:**
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

**Line Heights:**
- `leading-7`: 1.75rem (custom for text)
- `leading-7`: 1.75rem (headings)

### Spacing Conventions

**Margin/Padding:**
- `mt-6`, `mt-16`, `mt-20`, `mt-32` - Top margins
- `pt-10`, `pb-16` - Padding top/bottom
- `px-3`, `px-4`, `px-8`, `px-12` - Horizontal padding
- `py-2`, `py-6` - Vertical padding
- `gap-4`, `gap-6` - Grid gaps

**Max Widths:**
- `max-w-2xl` - Article containers (42rem)
- `max-w-3xl` - Form/content areas (48rem)
- `max-w-5xl` - Main content (64rem)
- `max-w-7xl` - Full site container (80rem)

### Responsive Design

**Breakpoints:**
- `sm`: 640px - Tablet
- `md`: 768px - Larger tablet
- `lg`: 1024px - Desktop
- `xl`: 1280px - Large desktop

**Grid Patterns:**
- Single column mobile → 2 columns tablet → 3 columns desktop
- Example: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

### Common Class Combinations

**Cards:**
- Container: `group relative flex flex-col items-start`
- Hover overlay: `group-hover:scale-100 group-hover:opacity-100`
- Background: `bg-zinc-100 dark:bg-zinc-800`
- Rounded: `rounded-xl`, `rounded-2xl`, `sm:rounded-2xl`

**Links/Buttons:**
- Hover: `transition hover:text-teal-500 dark:hover:text-teal-400`
- Active: `active:bg-zinc-800 active:text-zinc-100/70`

**Text:**
- Base: `text-sm text-zinc-600 dark:text-zinc-400`
- Heading: `text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100`
- Metadata: `text-xs text-zinc-500 dark:text-zinc-400`

---

## 8. RESUME/EXPERIENCE DATA

**Role Data Structure:**

```javascript
{
  company: string,
  title: string,
  logo: ImageImport,
  start: string | { label: string, dateTime: string },
  end: string | { label: string, dateTime: string }
}
```

**Experience Timeline:**

1. **Planetaria** (Current)
   - Title: CEO
   - Start: 2019
   - End: Present (current year)
   - Logo: logoPlanetaria

2. **Airbnb**
   - Title: Product Designer
   - Start: 2014
   - End: 2019
   - Logo: logoAirbnb

3. **Facebook**
   - Title: iOS Software Engineer
   - Start: 2011
   - End: 2014
   - Logo: logoFacebook

4. **Starbucks**
   - Title: Shift Supervisor
   - Start: 2008
   - End: 2011
   - Logo: logoStarbucks

---

## 9. ARTICLES METADATA STRUCTURE

**Article Data Structure:**

```javascript
{
  author: string,
  date: string (YYYY-MM-DD),
  title: string,
  description: string,
  slug: string (derived from filename)
}
```

**Articles List (Chronologically):**

1. **Rewriting the cosmOS kernel in Rust**
   - Date: 2022-07-14
   - Author: Adam Wathan
   - Slug: rewriting-the-cosmos-kernel-in-rust
   - Category: Technical/Backend

2. **Crafting a design system for a multiplanetary future**
   - Date: 2022-09-05
   - Author: Adam Wathan
   - Slug: crafting-a-design-system-for-a-multiplanetary-future
   - Category: Design

3. **Introducing Animaginary: High performance web animations**
   - Date: 2022-09-02
   - Author: Adam Wathan
   - Slug: introducing-animaginary
   - Category: Frontend/Web

**Article Retrieval:**
- Function: `getAllArticles()` (from `lib/articles.js`)
- Mechanism: Glob pattern for `/page.mdx` files in `src/app/articles/`
- Sorting: By date descending (newest first)
- Import format: ESM with article metadata export

---

## 10. PROJECTS METADATA STRUCTURE

**Project Data Structure:**

```javascript
{
  name: string,
  description: string,
  link: { href: string, label: string },
  logo: ImageImport
}
```

**Project Categories:**
1. **Space/Aerospace** - Planetaria, OpenShuttle
2. **Frontend/Web** - Animaginary, HelioStream
3. **Systems** - cosmOS

---

## 11. SPEAKING ENGAGEMENTS STRUCTURE

**Speaking Data Structure:**

```javascript
{
  title: string,
  description: string,
  event: string (event name and date),
  cta: string (call-to-action text),
  href: string (link to recording/page)
}
```

**Categories:**
- Conferences: 2 appearances
- Podcasts: 3 appearances

---

## 12. TAILWIND TYPOGRAPHY CONFIGURATION

### Typography Plugin Setup

**Theme Override:**
- Uses `@tailwindcss/typography` plugin
- Custom `typography.js` configuration
- Light and dark mode variants (invert)

### Custom CSS Variables for Typography

**Light Mode:**
- `--tw-prose-body`: `zinc-600`
- `--tw-prose-headings`: `zinc-900`
- `--tw-prose-links`: `teal-500`
- `--tw-prose-links-hover`: `teal-600`
- `--tw-prose-code`: `zinc-700`
- `--tw-prose-code-bg`: `zinc-300 / 0.2`
- `--tw-prose-pre-bg`: `zinc-900`
- `--tw-prose-pre-code`: `zinc-100`

**Dark Mode (Invert):**
- `--tw-prose-invert-body`: `zinc-400`
- `--tw-prose-invert-headings`: `zinc-200`
- `--tw-prose-invert-links`: `teal-400`
- `--tw-prose-invert-code`: `zinc-300`
- `--tw-prose-invert-code-bg`: `zinc-200 / 0.05`
- `--tw-prose-invert-pre-bg`: `rgb(0 0 0 / 0.4)`

### Heading Styles

**H2:**
- Font size: `xl`
- Font weight: semibold
- Margin top: `spacing-20`
- Margin bottom: `spacing-4`

**H3:**
- Font size: base
- Font weight: semibold
- Margin top: `spacing-16`
- Margin bottom: `spacing-4`

---

## 13. PROVIDERS & CONTEXT

**Providers Component (`providers.jsx`):**
- Wraps app with `ThemeProvider` from `next-themes`
- Manages dark/light mode preference
- Creates `AppContext` for sharing `previousPathname`
- `ThemeWatcher` component syncs system theme preferences

**Custom Hooks:**
- `usePrevious()` - Tracks previous pathname for back navigation

---

## 14. UTILITY FUNCTIONS

### Format Date Function (`lib/formatDate.js`)

```javascript
function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
```

**Output Format:** "September 2, 2022" (Month Day, Year)

---

## 15. ICONS USED

### Inline SVG Icons

**In Page Components:**
- `MailIcon` - Newsletter signup section
- `BriefcaseIcon` - Work/Resume section
- `ArrowDownIcon` - CV download button
- `ChevronRightIcon` - Card CTA arrows
- `CloseIcon` - Mobile menu close button
- `ChevronDownIcon` - Mobile menu dropdown
- `SunIcon` - Light mode toggle
- `MoonIcon` - Dark mode toggle
- `ArrowLeftIcon` - Article back button
- `LinkIcon` - External link indicator (projects)

**Social Icons:**
- XIcon (Twitter/X)
- InstagramIcon
- GitHubIcon
- LinkedInIcon

---

## 16. KEY FEATURES & INTERACTIONS

### Dynamic Header Behavior
- Avatar scales/positions based on scroll position (home page only)
- Header height adjusts based on scroll state
- Fixed positioning for nav bar when scrolling
- Smooth transitions between states

### Theme Switching
- Light/dark mode toggle in header
- Persists user preference
- Respects system preference by default
- Smooth transitions without page reload

### Mobile Responsiveness
- Desktop navigation hidden on mobile (md breakpoint)
- Mobile menu with popover (Headless UI)
- Touch-friendly button sizing
- Optimized image sizes per breakpoint

### Article Features
- MDX-based content with code syntax highlighting
- Prose styling for formatted text
- Back navigation to previous page
- Date formatting utility

### Form Handling
- Newsletter signup form
- Validates email input
- Redirects to thank-you page on submission
- Form action: POST to `/thank-you`

---

## 17. DEPENDENCIES & LIBRARIES

**Key Technologies:**
- Next.js (App Router)
- React 18+
- Tailwind CSS v4 (with plugin system)
- next-themes (theme management)
- Headless UI (accessible components)
- clsx (conditional CSS class utility)
- MDX (for articles)
- next/image (optimized images)
- fast-glob (article discovery)

---

## 18. CSS/STYLING PATTERNS

### Shadow Patterns
- `shadow-md`: Medium shadow for interactive elements
- `shadow-lg`: Large shadow for prominent elements
- `shadow-zinc-800/5`: Zinc-colored shadows with transparency

### Ring Patterns
- `ring-1`: Single-pixel outline ring
- `ring-zinc-100 dark:ring-zinc-300/20`: Border-like ring styling

### Backdrop Effects
- `backdrop-blur-sm`: Slight blur effect
- `backdrop-blur-xs`: Extra subtle blur

### Gradient Text
- `bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0`: Gradient underline

### Opacity/Transparency
- `bg-white/90`: 90% opacity white
- `dark:bg-zinc-800/90`: 90% opacity dark background
- Commonly used for frosted glass effect with backdrop blur

---

This comprehensive extraction covers the complete structure, content, and styling of the Spotlight Next.js portfolio website.
