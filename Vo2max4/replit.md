# VO2 Max Physiotherapy Website

## Overview

This is a modern, responsive landing page for Dr. Pinakin Ayare's VO2 Max physiotherapy and sports rehabilitation practice. The application is built as a single-page marketing website showcasing services, testimonials, and contact information for a physiotherapy clinic. It's designed for deployment on Vercel with a focus on performance and visual appeal through animations and modern UI patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React 18 with TypeScript**
- **Problem**: Need a maintainable, type-safe single-page application with modern UI capabilities
- **Solution**: React 18 with TypeScript provides component-based architecture with type safety
- **Rationale**: React's ecosystem, performance optimizations (concurrent features), and TypeScript's compile-time error checking ensure code quality and developer experience

**Build Tool: Vite**
- **Problem**: Fast development experience and optimized production builds
- **Solution**: Vite with React plugin for hot module replacement and optimized bundling
- **Pros**: Near-instant dev server startup, faster hot updates, optimized production builds
- **Cons**: Newer tool with evolving ecosystem compared to webpack

**Styling Strategy: Tailwind CSS**
- **Problem**: Need rapid UI development with consistent design system
- **Solution**: Utility-first CSS framework with custom theme configuration
- **Rationale**: Tailwind enables rapid prototyping while maintaining design consistency through custom color palette (vo-white, vo-black, vo-blue variants) and spacing system
- **Custom Theme**: Extended with brand-specific colors and shadows for VO2 Max identity

**Animation Library: Framer Motion**
- **Problem**: Need smooth, performant animations for landing page engagement
- **Solution**: Framer Motion for declarative animation API
- **Rationale**: React-first animation library with powerful gesture support and layout animations, ideal for marketing sites

### Component Architecture

**Single-Component Design**
- **Current State**: All UI in App.tsx (monolithic component)
- **Rationale**: Simple landing page with limited interactivity doesn't require complex component hierarchy
- **Trade-off**: Easier to understand initially but harder to maintain as features grow
- **Future Consideration**: May need component extraction for reusability (Header, ServiceCard, TestimonialCard, etc.)

**State Management: React useState**
- **Problem**: Manage mobile menu visibility and form states
- **Solution**: Local component state with useState hooks
- **Rationale**: Simple state requirements don't justify external state management libraries
- **Note**: Zustand is installed but unused, suggesting potential for future state management needs

### Navigation Pattern

**Single-Page Application with Hash Navigation**
- **Implementation**: Anchor links with hash fragments (#home, #about, #services, etc.)
- **Rationale**: Simple landing page doesn't require client-side routing complexity
- **Note**: React Router DOM is installed but unused, indicating potential for future multi-page expansion

### Form Handling

**Contact Form Strategy**
- **Current Implementation**: Basic form structure in code
- **Missing**: Form submission logic and validation
- **Consideration**: Zod is installed for schema validation but not yet implemented
- **Future Integration**: Likely needs backend API or email service integration for submissions

### Internationalization Preparation

**i18next Integration**
- **Dependencies**: i18next, react-i18next, i18next-browser-languagedetector
- **Current State**: Installed but not implemented
- **Purpose**: Future multi-language support for broader market reach
- **Pattern**: Browser language detection with translation files

## External Dependencies

### Core UI Libraries

**Headless UI**
- **Purpose**: Accessible, unstyled UI components (dropdowns, modals, etc.)
- **Integration**: Installed but usage not visible in current code
- **Rationale**: Accessibility compliance for interactive components

**Lucide React**
- **Purpose**: Icon library for UI elements
- **Usage**: Services icons (Stethoscope, Activity, Workflow, etc.), navigation icons
- **Approach**: Tree-shakable icon imports for optimized bundle size

### Animation & Physics Libraries

**GSAP (GreenSock Animation Platform)**
- **Installation**: Present but not actively used in current code
- **Potential Use**: Advanced timeline-based animations, scroll-triggered effects
- **Alternative**: Framer Motion currently handles all animations

**Matter.js & Cannon-es**
- **Purpose**: Physics engines (2D and 3D respectively)
- **Status**: Installed but unused
- **Indication**: Possible future interactive physics-based features or removed dependencies

**Three.js**
- **Purpose**: 3D graphics library
- **Status**: Installed but not implemented
- **Potential**: 3D visualization features for anatomy or exercise demonstrations

### AI/LLM Integration

**Vercel AI SDK (@ai-sdk/openai, ai)**
- **Purpose**: AI-powered features (chatbot, content generation, etc.)
- **Status**: Dependencies installed but not implemented
- **Future Features**: Potential AI exercise recommendations, virtual assistant, or content personalization

### Utility Libraries

**clsx**
- **Purpose**: Conditional className composition
- **Usage**: Dynamic styling based on component state

**react-use**
- **Purpose**: Collection of React hooks utilities
- **Potential Uses**: useMediaQuery, useDebounce, useLocalStorage for enhanced UX

### Build & Development Tools

**PostCSS & Autoprefixer**
- **Purpose**: CSS processing and browser compatibility
- **Integration**: Configured for Tailwind CSS compilation
- **Setup**: postcss.config.js enables Tailwind processing

**TypeScript Configuration**
- **Target**: ES2020 with strict mode enabled
- **Module System**: ESNext with bundler resolution
- **Strictness**: noUnusedLocals, noUnusedParameters for code quality

**Custom Vite Plugin**
- **Package**: @youware/vite-plugin-react
- **Purpose**: Likely platform-specific optimizations or integrations
- **Note**: Custom package suggests deployment on specific platform ecosystem

### Deployment Configuration

**Vercel Platform**
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Routing**: Client-side routing fallback (all routes → /index.html)
- **Optimization**: Automatic static optimization and edge caching

### Asset Management

**Image Assets**
- **Declaration**: TypeScript declarations for .png, .jpg, .jpeg, .svg imports
- **Storage**: Local assets directory (vo2max-logo.png, doctor-photo.png)
- **Bundling**: Vite handles asset optimization and hashing

### Platform Integration Placeholders

**Global SDK Objects**
- **aiSdk**: AI capabilities integration point
- **ywConfig**: Platform configuration object
- **ywSdk**: Platform SDK utilities
- **Purpose**: Integration points for potential platform-specific features or deployment environment