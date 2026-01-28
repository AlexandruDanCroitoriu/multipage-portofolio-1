# Romanian Translation & Localization Plan

## Overview
Transform the portfolio website with a Romanian persona, rewrite all content, and implement full English/Romanian translation with language toggle.

## New Persona Details

- **Name**: Andrei Popescu
- **Role**: Software Architect & Full-stack Developer
- **Company**: TechNova (Romanian tech startup)
- **Location**: Bucharest, Romania
- **Focus**: Modern web development, cloud architecture, Romanian tech ecosystem
- **Profile Image**: UI Avatars placeholder (`https://ui-avatars.com/api/?name=Andrei+Popescu&size=512`)

## Phase 1: Content Customization (English)

### Files to Update:
- [ ] src/views/HomeView.vue - Hero, work history, newsletter
- [ ] src/views/AboutView.vue - Full biography (4 paragraphs)
- [ ] src/data/articles.js - 3 article metadata (titles, descriptions, dates)
- [ ] src/data/articleContent.js - 3 full article HTML contents
- [ ] src/data/projects.js - 5 project entries
- [ ] src/views/SpeakingView.vue - 2 conferences, 3 podcasts
- [ ] src/views/UsesView.vue - ~13 tools across 4 categories
- [ ] src/images/photos/ - Replace profile images
- [ ] src/components/Footer.vue - Update copyright name

### Content Theme:
Replace space/Planetaria theme with Romanian tech scene, modern web development, cloud architecture, international collaboration.

## Phase 2: i18n Setup

### 2.1 Installation
```bash
npm install vue-i18n@9
```

### 2.2 File Structure
```
src/i18n/
  ├── index.js          # i18n configuration
  └── locales/
      ├── en.json       # English translations
      └── ro.json       # Romanian translations
```

### 2.3 Configuration (src/i18n/index.js)
- Import createI18n from vue-i18n
- Load locale files
- Set default locale (detect browser or use 'en')
- Configure fallback locale
- Enable localStorage persistence

### 2.4 Integration (src/main.js)
- Import i18n instance
- Add to app.use(i18n)

## Phase 3: Translation Files Structure

### JSON Organization:
```json
{
  "navigation": {
    "about": "About",
    "articles": "Articles",
    "projects": "Projects",
    "speaking": "Speaking",
    "uses": "Uses"
  },
  "pages": {
    "home": {
      "hero": {
        "title": "...",
        "description": "..."
      },
      "newsletter": {
        "title": "...",
        "description": "...",
        "placeholder": "...",
        "button": "..."
      },
      "work": {
        "title": "...",
        "download": "...",
        "present": "...",
        "labels": {
          "company": "...",
          "role": "...",
          "date": "..."
        }
      }
    },
    "about": {
      "title": "...",
      "bio": {
        "p1": "...",
        "p2": "...",
        "p3": "...",
        "p4": "..."
      }
    },
    "articles": {
      "title": "...",
      "intro": "...",
      "readMore": "...",
      "goBack": "..."
    },
    "projects": {
      "title": "...",
      "intro": "..."
    },
    "speaking": {
      "title": "...",
      "intro": "...",
      "conferences": "...",
      "podcasts": "...",
      "watchVideo": "...",
      "listenPodcast": "..."
    },
    "uses": {
      "title": "...",
      "intro": "..."
    },
    "thankYou": {
      "title": "...",
      "message": "..."
    }
  },
  "data": {
    "articles": [
      {
        "title": "...",
        "description": "...",
        "content": "..."
      }
    ],
    "projects": [
      {
        "name": "...",
        "description": "...",
        "link": "..."
      }
    ],
    "work": [
      {
        "company": "...",
        "title": "...",
        "start": "...",
        "end": "..."
      }
    ],
    "speaking": {
      "conferences": [...],
      "podcasts": [...]
    },
    "uses": {
      "workstation": [...],
      "development": [...],
      "design": [...],
      "productivity": [...]
    }
  },
  "components": {
    "footer": {
      "copyright": "© {year} Andrei Popescu. All rights reserved."
    },
    "social": {
      "followOnX": "Follow on X",
      "followOnInstagram": "Follow on Instagram",
      "followOnGitHub": "Follow on GitHub",
      "followOnLinkedIn": "Follow on LinkedIn"
    },
    "mobileNav": {
      "menu": "Menu",
      "close": "Close"
    }
  }
}
```

## Phase 4: Component Updates

### Views to Refactor (Replace text with $t('key')):
- [ ] src/views/HomeView.vue
- [ ] src/views/AboutView.vue
- [ ] src/views/ArticlesView.vue
- [ ] src/views/ArticleDetailView.vue
- [ ] src/views/ProjectsView.vue
- [ ] src/views/SpeakingView.vue
- [ ] src/views/UsesView.vue
- [ ] src/views/ThankYouView.vue

### Components to Refactor:
- [ ] src/components/Header.vue
- [ ] src/components/Footer.vue
- [ ] src/components/MobileNavigation.vue

### Data Files to Refactor:
- [ ] src/data/articles.js - Use i18n composable
- [ ] src/data/articleContent.js - Use i18n composable
- [ ] src/data/projects.js - Use i18n composable

## Phase 5: Language Toggle Component

### Create src/components/LanguageToggle.vue

**Features:**
- Display current opposite language ("RO" when English, "EN" when Romanian)
- Match styling of dark mode toggle
- Smooth transition
- Persist selection to localStorage
- Aria-label for accessibility

**Design:**
```vue
<template>
  <button 
    type="button"
    @click="toggleLanguage" 
    :aria-label="currentLocale === 'en' ? 'Switch to Romanian' : 'Switch to English'"
    class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
  >
    <span class="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
      {{ currentLocale === 'en' ? 'RO' : 'EN' }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'ro' : 'en'
  localStorage.setItem('locale', locale.value)
}
</script>
```

### Update src/components/Header.vue
- Import LanguageToggle component
- Position beside dark mode toggle in header actions
- Maintain responsive layout

**Expected positioning:**
```vue
<div class="flex gap-4">
  <LanguageToggle />
  <MoonIcon v-if="!isDark" />
  <SunIcon v-else />
</div>
```

## Phase 6: Date Formatting Update

### Update src/utils/cn.js

**Current:**
```javascript
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
```

**Updated approach (in components):**
```javascript
import { useI18n } from 'vue-i18n'

// In component setup
const { locale } = useI18n()

const localeMap = {
  en: 'en-US',
  ro: 'ro-RO'
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(localeMap[locale.value], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
```

## Phase 7: Testing Checklist

### Functionality:
- [ ] Language toggle switches between EN/RO
- [ ] Locale persists on page refresh
- [ ] All pages display correctly in English
- [ ] All pages display correctly in Romanian
- [ ] Date formatting changes with locale
- [ ] HTML content in articles renders properly
- [ ] Newsletter form labels translate
- [ ] Navigation menu translates
- [ ] Footer copyright updates
- [ ] Social media aria-labels translate

### Responsiveness:
- [ ] Desktop header with both toggles
- [ ] Mobile navigation with language toggle
- [ ] Tablet view
- [ ] All breakpoints functional

### Accessibility:
- [ ] Aria-labels translated
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works
- [ ] Focus states visible

## Romanian Translation Guidelines

### Tone:
- Professional but approachable
- Technical accuracy for dev terms
- Keep some English terms where standard (e.g., "cloud", "full-stack")

### Technical Terms to Keep in English:
- Full-stack
- Cloud
- API
- Framework
- DevOps
- Frontend/Backend

### Romanian Translations:
- Software Developer → Dezvoltator Software
- Software Architect → Arhitect Software
- Projects → Proiecte
- Articles → Articole
- Speaking → Prezentări
- Uses → Folosesc
- About → Despre
- Read article → Citește articolul
- Download CV → Descarcă CV
- Stay up to date → Rămâi la curent
- Join → Alătură-te
- Email address → Adresa de email
- Present (current job) → Prezent

### Formatting:
- Maintain HTML structure in article content
- Keep code snippets in English
- Translate UI labels and descriptions
- Adapt idioms culturally where needed

## Content Rewrite Ideas

### New Bio Theme:
**Andrei Popescu** - Romanian software architect passionate about modern web technologies, cloud architecture, and building scalable applications. Based in Bucharest, founder of TechNova, a startup focused on innovative web solutions for European businesses.

### Work History:
1. **TechNova** - Founder & CEO (2022 - Present)
2. **Google** - Senior Software Engineer (2019 - 2022)
3. **UiPath** - Full-stack Developer (2017 - 2019)
4. **Bitdefender** - Junior Developer (2015 - 2017)

### Project Ideas:
1. **TechNova Platform** - Cloud-based application platform for Romanian startups
2. **RoCode** - Open-source Romanian coding education platform
3. **CloudFlow** - Serverless workflow automation tool
4. **VueMaster** - Advanced Vue.js component library
5. **DevMetrics** - Analytics dashboard for development teams

### Article Ideas:
1. **Building Scalable Applications with Vue 3 and Cloud Functions**
2. **The Romanian Tech Scene: Opportunities and Challenges**
3. **Modern Frontend Architecture: From Monoliths to Micro-frontends**

### Speaking Engagements:
**Conferences:**
1. **DevTalks Bucharest** - "Cloud-Native Applications in Practice"
2. **JSHeroes Cluj** - "Vue.js Performance Optimization"

**Podcasts:**
1. **Romanian Tech Talks** - Discussing the evolution of web development
2. **Code & Coffee** - Building successful tech startups in Romania
3. **DevCast** - Modern frontend frameworks comparison

### Tools/Uses Categories:
**Workstation:**
- MacBook Pro 16" M3 Max
- Dell UltraSharp 4K Monitor
- Keychron K2 Mechanical Keyboard
- Logitech MX Master 3
- Sony WH-1000XM5 Headphones

**Development Tools:**
- VS Code with custom extensions
- iTerm2 + Oh My Zsh
- Docker Desktop

**Design:**
- Figma for UI/UX design

**Productivity:**
- Notion for documentation
- Slack for team communication
- Linear for project management
- Obsidian for personal notes

## Estimated Scope

- **Translation strings**: ~200+
- **Files to modify**: 16 files
- **New files to create**: 4 files (i18n/index.js, en.json, ro.json, LanguageToggle.vue)
- **Images to replace**: 2-3 profile photos
- **Time estimate**: 6-8 hours

## Implementation Order

### Step 1: Setup (30 min)
1. Install vue-i18n
2. Create i18n folder structure
3. Create basic configuration files

### Step 2: English Content Rewrite (2 hours)
1. Update all view files with new persona content
2. Update data files with new projects/articles
3. Replace profile images

### Step 3: Extract to Translation Files (1.5 hours)
1. Create en.json with all English strings
2. Update components to use $t() functions
3. Test all pages in English

### Step 4: Romanian Translation (2 hours)
1. Create ro.json with Romanian translations
2. Test all pages in Romanian
3. Refine translations

### Step 5: Language Toggle (1 hour)
1. Create LanguageToggle component
2. Add to Header
3. Implement persistence
4. Test switching

### Step 6: Date Formatting & Polish (1 hour)
1. Update date formatting
2. Fix any issues
3. Final testing
4. Accessibility check

## Priority Order

1. **Phase 1 - High Priority**: Navigation, homepage, about page
2. **Phase 2 - Medium Priority**: Articles list, projects, thank you page
3. **Phase 3 - Lower Priority**: Speaking, uses, full article content

---

## Quick Start Commands

```bash
# Install dependencies
npm install vue-i18n@9

# Start development server
npm run dev

# Test the application
# Navigate through all pages in both languages
# Check console for any translation key errors
```

## Notes

- Keep all code snippets in articles in English
- Maintain existing styling and layout
- Ensure smooth UX when switching languages
- Profile images should be consistent across all pages
- Social media links can remain same or be updated to new persona's accounts
