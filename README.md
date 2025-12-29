# Edu_Merge

A modern, full-stack e-learning platform built with Turborepo, enabling educators to create, manage, and sell courses with custom subdomains and AI-powered features.

## 🌟 Overview

Edu_Merge is a comprehensive monorepo project that provides a complete solution for online course management. It features a multi-tenant architecture with custom subdomain support, allowing educators to have their own branded spaces to showcase and sell courses.

## 🚀 Quick Deploy

Want to deploy this project? Check out our deployment guides:

- 📖 **[Complete Deployment Guide](./DEPLOYMENT.md)** - Detailed instructions for deploying web, docs, and backend
- ⚡ **[Quick Deploy Guide](./QUICK_DEPLOY.md)** - Get deployed in 10 minutes!

## 🏗️ Project Architecture

This is a **Turborepo** monorepo containing multiple applications and shared packages:

```
edu_merge/
├── apps/                    # Application workspaces
│   ├── docs/               # Documentation Next.js app (Port 3001)
│   └── web/                # Main web application (Next.js)
├── packages/               # Shared packages
│   ├── backend/           # Express.js API server
│   ├── eslint-config/     # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── ui/                # Shared React component library
└── [config files]         # Root-level configuration files
```

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 14.2.6 (App Router)
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**:
  - Radix UI (Accessible component primitives)
  - shadcn/ui components
  - Aceternity UI (Premium animated components)
- **Animations**: Framer Motion 11.15.0
- **TypeScript**: 5.x
- **Icons**:
  - Lucide React
  - React Icons
  - Tabler Icons

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js 4.21.1
- **Database**: MongoDB (Mongoose 8.7.3)
- **Authentication**:
  - Passport.js (Google OAuth & JWT)
  - JWT tokens
- **Validation**: Zod schemas

### DevOps & Tooling

- **Monorepo**: Turborepo 2.2.3
- **Package Manager**: npm 10.8.1
- **Linting**: ESLint 8.x
- **Formatting**: Prettier 3.2.5

## 📁 Detailed Project Structure

### Root Configuration Files

#### `package.json`

Root workspace configuration managing all sub-packages:

- **Scripts**:
  - `build`: Builds all apps and packages
  - `dev`: Runs all apps in development mode
  - `lint`: Lints all projects
  - `format`: Formats code with Prettier
- **Workspaces**: `apps/*` and `packages/*`

#### `turbo.json`

Turborepo pipeline configuration:

- Defines build dependencies and caching strategies
- Configures parallel task execution
- Environment variable handling
- Output caching for `.next/` and `dist/`

#### `.npmrc`

npm configuration file for workspace settings

---

### 📱 Apps Directory

#### 1. `apps/docs/` - Documentation Site

A Next.js application for project documentation.

**Key Files**:

- `app/page.tsx`: Main documentation landing page
- `app/layout.tsx`: Root layout with Geist fonts
- `app/globals.css`: Global styles with dark mode support
- `next.config.mjs`: Next.js configuration
- `package.json`:
  - Port: `3001`
  - Dependencies: React 18.3.1, Next.js 14.2.6

**Features**:

- Geist Sans and Geist Mono fonts
- Dark mode support
- Responsive design
- Fast refresh with Turbo mode

---

#### 2. `apps/web/` - Main Web Application

The primary Next.js application with a rich UI and comprehensive features.

**Directory Structure**:

```
web/
├── app/                           # Next.js App Router
│   ├── page.tsx                  # Homepage (Landing page)
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── fonts/                    # Font files (Geist)
│   └── screen-recording/         # Screen recording feature
│       └── page.tsx              # Recording page
├── components/                    # React components
│   ├── Layout/                   # Layout components
│   │   ├── About.tsx            # Features section
│   │   ├── Herosection.tsx      # Hero with background lines
│   │   ├── InfiniteMoving.tsx   # Testimonials carousel
│   │   ├── LandingPage.tsx      # Complete landing page
│   │   ├── Navbar.tsx           # Navigation menu
│   │   ├── OurRich.tsx          # World map section
│   │   ├── PricingPlans.tsx     # Pricing cards
│   │   └── WhatWeDo.tsx         # Timeline section
│   └── ui/                       # Reusable UI components (50+ components)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── avatar.tsx
│       ├── background-lines.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── infinite-moving-cards.tsx
│       ├── navbar-menu.tsx
│       ├── timeline.tsx
│       ├── world-map.tsx
│       └── [40+ more components]
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── lib/                          # Utility functions
│   └── utils.ts                 # cn() and other helpers
├── public/                       # Static assets
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js config (image domains)
├── tailwind.config.js           # Tailwind config (animations, plugins)
├── tailwind.config.ts           # TypeScript Tailwind config
└── postcss.config.js            # PostCSS config
```

**Key Features**:

1. **Landing Page Components**:

   - Animated background lines hero section
   - Feature cards with hover effects
   - Infinite moving testimonials
   - Interactive timeline
   - Premium pricing plans
   - Animated world map with location dots

2. **Screen Recording**:

   - Browser screen capture API
   - Video recording with MediaRecorder
   - Download functionality
   - Preview playback

3. **UI Component Library** (50+ components):

   - Radix UI primitives (Dialog, Dropdown, Popover, etc.)
   - Form components (Input, Checkbox, Radio, etc.)
   - Data display (Table, Card, Timeline)
   - Feedback (Toast, Alert, Progress)
   - Navigation (Navbar, Breadcrumb, Pagination)
   - Special animated components (Background Lines, Infinite Moving Cards, World Map)

4. **Styling**:
   - Tailwind CSS with custom animations
   - Custom grid backgrounds
   - Glassmorphism effects
   - SVG patterns and gradients

**Configuration**:

- **Image Domains**: Configured for `assets.aceternity.com`
- **Fonts**: Geist Sans and Geist Mono
- **Tailwind Plugins**:
  - `tailwindcss-animate`
  - Custom color palette
  - Grid and dot patterns
  - Scroll animations

---

### 📦 Packages Directory

#### 1. `packages/backend/` - Express.js API Server

A Node.js/Express backend with MongoDB and authentication.

**Directory Structure**:

```
backend/
├── src/
│   ├── app.ts                        # Express app setup
│   ├── config/                       # Configuration modules
│   │   ├── config.ts                # Environment config
│   │   ├── db.ts                    # MongoDB connection
│   │   ├── passport-google.ts       # Google OAuth strategy
│   │   └── passport-jwt.ts          # JWT strategy
│   ├── controller/                   # Request handlers
│   │   └── user-controller.ts       # User CRUD operations
│   ├── middleware/                   # Express middleware
│   │   ├── auth.ts                  # Authorization logic
│   │   └── authenticate.ts          # Authentication logic
│   ├── models/                       # Mongoose schemas
│   │   ├── users.ts                 # User model
│   │   └── workspace.ts             # Workspace model
│   ├── routes/                       # API routes
│   │   └── userRoutes.ts            # User endpoints
│   ├── utils/                        # Utility functions
│   │   ├── otp.utils.ts             # OTP generation/validation
│   │   ├── send-otp.ts              # Email OTP sender
│   │   └── subdomain.utils.ts       # Subdomain helpers
│   └── zod/                          # Data validation
│       └── userSchema.ts            # User validation schemas
├── .env.example                      # Environment variables template
├── package.json                      # Backend dependencies
└── tsconfig.json                     # TypeScript config
```

**Key Features**:

1. **Authentication**:

   - Google OAuth 2.0 integration
   - JWT-based session management
   - OTP email verification
   - Passport.js strategies

2. **Database**:

   - MongoDB with Mongoose ODM
   - User model
   - Workspace/tenant model

3. **API Features**:

   - RESTful endpoints
   - Request validation with Zod
   - Authentication middleware
   - Error handling

4. **Multi-tenancy**:
   - Subdomain-based routing utilities
   - Workspace isolation

**Environment Variables** (`.env.example`):

- Database connection strings
- Google OAuth credentials
- JWT secrets
- Email service configuration
- Port settings

---

#### 2. `packages/eslint-config/` - Shared ESLint Config

Centralized linting configurations for the monorepo.

**Files**:

- `library.js`: Config for library packages
- `next.js`: Config for Next.js apps
- `react-internal.js`: Config for internal React components
- `package.json`: ESLint dependencies

**Usage**: Extended in `apps/*/. eslintrc.js` files

---

#### 3. `packages/typescript-config/` - Shared TypeScript Config

Centralized TypeScript configurations.

**Files**:

- `base.json`: Base TypeScript config
- `nextjs.json`: Next.js-specific settings
- `react-library.json`: React library settings
- `package.json`: TypeScript version

**Usage**: Extended in `tsconfig.json` files across apps/packages

---

#### 4. `packages/ui/` - Shared Component Library

Reusable React components shared across apps.

**Structure**:

```
ui/
├── src/
│   ├── button.tsx               # Custom button component
│   ├── card.tsx                 # Card component
│   └── code.tsx                 # Code display component
├── turbo/
│   └── generators/              # Component generation templates
│       ├── config.ts            # Generator config
│       └── templates/
│           └── component.hbs    # Handlebars template
├── package.json
├── tsconfig.json
└── tsconfig.lint.json
```

**Features**:

- Typed React components
- Turbo code generation
- Consistent styling
- Exported to `@repo/ui` package

---

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js**: >= 18.x
- **npm**: >= 10.8.1
- **MongoDB**: Running instance (local or cloud)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd Edu_Merge
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure backend environment**:

   ```bash
   cd packages/backend
   cp .env.example .env
   # Edit .env with your configurations
   ```

4. **Build all packages**:

   ```bash
   npm run build
   ```

5. **Start development servers**:
   ```bash
   npm run dev
   ```

This will start:

- `docs` app on `http://localhost:3001`
- `web` app on `http://localhost:3000`
- Backend API (port configured in `.env`)

---

## 🎯 Available Scripts

### Root Level

```bash
npm run dev       # Start all apps in dev mode
npm run build     # Build all apps and packages
npm run lint      # Lint all projects
npm run format    # Format code with Prettier
```

### Individual Apps

```bash
# Docs app
cd apps/docs
npm run dev       # Dev server on port 3001
npm run build     # Production build
npm run start     # Start production server

# Web app
cd apps/web
npm run dev       # Dev server with Turbo
npm run build     # Production build
npm run start     # Start production server
```

---

## 🎨 Design System

### Color Palette

The project uses a **modern dark theme** with vibrant accent colors:

- **Background**: Black gradient (`#0a0a0a` to `#000000`)
- **Foreground**: White/Light gray
- **Accents**: Blue, Purple, Green, Orange gradients
- **Grid overlay**: White with low opacity

### Typography

- **Primary Font**: Geist Sans (Variable font)
- **Monospace**: Geist Mono (Variable font)

### Components

All UI components follow:

- Radix UI accessibility standards
- Dark mode support
- Smooth animations with Framer Motion
- Responsive design patterns

---

## 🏢 Features

### Platform Features

1. **🌐 Custom Subdomain**

   - Each educator gets their own branded space (e.g., `yourname.edumerge.com`)
   - Customizable branding, colors, and logo

2. **📚 Course Creation**

   - Easy upload of videos, PDFs, quizzes
   - Drag-and-drop module organization
   - Rich text content support

3. **🤖 AI-Powered Support**

   - 24/7 chatbot for student assistance
   - Automated FAQ responses
   - Intelligent learning path suggestions

4. **📝 Smart Notes & Reviews**

   - Global note search
   - Personal annotations
   - Bookmark key insights

5. **💬 Community Features**

   - Discussion boards
   - Live sessions
   - Peer-to-peer learning

6. **📊 Analytics Dashboard**
   - Student progress tracking
   - Engagement metrics
   - Revenue statistics

### Technical Features

- **Multi-tenancy**: Subdomain-based workspace isolation
- **Authentication**: OAuth + JWT
- **Real-time**: WebSocket support (planned)
- **Scalable**: Turborepo caching and parallel builds
- **Type-safe**: End-to-end TypeScript
- **Responsive**: Mobile-first design

---

## 🗂️ Key Configuration Files

### `turbo.json`

Defines the build pipeline:

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### `components.json` (shadcn/ui)

UI component generation config:

```json
{
  "style": "new-york",
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

---

## 🔐 Authentication Flow

1. User visits login page
2. Chooses Google OAuth or email/password
3. Backend validates credentials
4. JWT token issued and stored
5. Protected routes check JWT middleware
6. Token refresh on expiry

---

## 🗄️ Database Schema

### User Model

```typescript
{
  _id: ObjectId,
  email: string,
  name: string,
  googleId?: string,
  passwordHash?: string,
  workspaces: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Workspace Model

```typescript
{
  _id: ObjectId,
  subdomain: string,
  owner: ObjectId,
  settings: {
    branding: {},
    paymentGateway: {}
  },
  courses: [ObjectId],
  createdAt: Date
}
```

---

## 📱 Responsive Design

The platform is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1400px

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Deploy web app
cd apps/web
vercel deploy

# Deploy docs
cd apps/docs
vercel deploy
```

### Backend (Railway/Heroku)

```bash
cd packages/backend
# Configure environment variables
# Deploy to your chosen platform
```

### Database (MongoDB Atlas)

- Create a cluster
- Update connection string in `.env`
- Configure IP whitelist

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential.

---

## 👥 Team

Built with ❤️ by the Edu_Merge team

---

## 📧 Contact

For questions or support, reach out at: [your-email@domain.com]

---

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build) - Monorepo tooling
- [Next.js](https://nextjs.org) - React framework
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [Aceternity UI](https://aceternity.com) - Premium components
- [Radix UI](https://radix-ui.com) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://framer.com/motion) - Animation library

---

**Happy Learning! 🎓**
