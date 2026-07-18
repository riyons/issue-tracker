# Issue Tracker — Learn Modern Next.js by Building

A production-grade issue tracker built step by step with **Next.js 16**, **React 19**, **TypeScript**, **Prisma**, and **Auth.js v5**.

This repository is a practical, feature-by-feature guide for developers who want to learn modern Next.js through a real-world project — not just toy examples. Every commit represents a discrete feature, so you can follow the build from an empty project all the way to a deployed full-stack app.

If you already know React and want to learn how Next.js 16 actually works in production — Server Components, Server Actions, the App Router, explicit caching, authentication, optimistic updates — this project is built for you.

---

## What you'll learn

- **App Router architecture** — file-based routing, layouts, loading and error boundaries
- **Server Components vs Client Components** — when to use each and why
- **Server Actions** — mutations without API routes
- **React 19 features** — `useOptimistic`, the `use()` hook, native Actions
- **Async `params` and `searchParams`** — the Next.js 16 way
- **Explicit caching** — `use cache`, `cacheTag`, `cacheLife`
- **Authentication with Auth.js v5** — Google OAuth, session handling, `proxy.ts`
- **Type-safe end-to-end** — Zod schemas shared between client and server
- **Database modeling with Prisma** — schema design, migrations, relations
- **Production patterns** — error handling, loading states, optimistic UI, accessibility

---

## Tech stack

| Layer      | Technology                         |
| ---------- | ---------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack) |
| UI library | React 19                           |
| Language   | TypeScript                         |
| Styling    | Tailwind CSS v4 + Radix UI Themes  |
| Database   | MySQL                              |
| ORM        | Prisma                             |
| Auth       | Auth.js v5 (NextAuth successor)    |
| Forms      | React Hook Form + Zod              |
| Charts     | Recharts                           |
| Deployment | Vercel                             |

---

## Features

- Create, view, edit, and delete issues
- Status workflow: Open → In Progress → Closed
- Assign issues to team members
- Filter, sort, and paginate the issues list
- Dashboard with charts and summary metrics
- Authentication with Google OAuth
- Role-based route protection
- Optimistic UI updates
- Fully responsive design

---

## Getting started

### Prerequisites

- Node.js 20 or later
- MySQL running locally (or any MySQL-compatible database)
- Google Cloud OAuth credentials (for authentication)

### Setup

1. **Clone the repository**

```bash
   git clone https://github.com/riyons/issue-tracker.git
   cd issue-tracker
```

2. **Install dependencies**

```bash
   npm install
```

3. **Set up environment variables**

   Create a `.env` file in the project root:

```env
   DATABASE_URL="mysql://root@localhost:3306/issue_tracker"
   AUTH_SECRET="your-auth-secret-here"
   AUTH_GOOGLE_ID="your-google-oauth-client-id"
   AUTH_GOOGLE_SECRET="your-google-oauth-client-secret"
```

Generate an `AUTH_SECRET` with:

```bash
   npx auth secret
```

4. **Run database migrations**

```bash
   npx prisma migrate dev
```

5. **Start the dev server**

```bash
   npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
issue-tracker/
├── app/
│   ├── api/              # Route handlers (used sparingly — most mutations are Server Actions)
│   ├── issues/           # Issues feature (list, new, [id], edit)
│   ├── components/       # Shared UI components
│   ├── NavBar.tsx        # Top navigation
│   └── layout.tsx        # Root layout with Theme + NavBar
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── client.ts         # Prisma singleton (avoids connection leaks in dev)
│   └── migrations/       # Version-controlled schema changes
├── auth.ts               # Auth.js v5 configuration
├── proxy.ts              # Route protection (replaces middleware.ts in v16)
└── README.md
```

---

## How to follow this project

This project is built feature by feature, with each commit representing a discrete, working step. You can follow along in two ways:

**Option 1 — Read the code, feature by feature**
Use `git log --oneline` to see the commit history. Each commit message describes the feature it adds. Check out earlier commits to see the project at different stages.

**Option 2 — Build it yourself from scratch**
Use the commit history as a roadmap. Each commit tells you what to build next. Try to implement the feature on your own before looking at the code.

---

## Notes on Next.js 16 patterns used

This project deliberately uses the newest patterns recommended for Next.js 16 in 2026:

- **Server Actions for all mutations** — no API routes for create/update/delete
- **`useOptimistic`** for status changes and assignee updates
- **Async `params` and `searchParams`** in dynamic routes
- **`use cache` directive** on dashboard data
- **`proxy.ts`** for route protection (replaces the older `middleware.ts`)
- **Auth.js v5** (formerly NextAuth) with the modern config style

If you're migrating an older Next.js project, the commits in this repo can serve as a reference for what each pattern looks like in practice.

---

## Roadmap

- [x] Project setup with Next.js 16 + Prisma + Radix UI
- [x] Navbar with active link highlighting
- [x] Issues list page (Server Component + Prisma)
- [x] Create issue with Server Actions + Zod validation
- [x] Issue detail page with markdown rendering
- [x] Edit and delete issues
- [x] Authentication with Auth.js v5 + Google OAuth
- [ ] Assign issues to users
- [ ] Filter, sort, and paginate
- [ ] Dashboard with charts
- [ ] Production deployment

---

## License

MIT — feel free to use this as a learning resource or starting point for your own projects.
