# Agent Guidance

This is a Next.js portfolio application using Bun, Prisma (SQLite), Tailwind CSS, and shadcn/ui.

## Key Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Start dev server on port 3000 |
| `bun run build` | Production build (standalone output) |
| `bun run start` | Run production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Sync Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |

## Development Workflow

- **Quick start:** `bun run dev` (requires manual `bun install` and `bun run db:push` first)
- **Full setup:** Run `.zscripts/dev.sh` - installs deps, pushes DB, starts dev server and any mini-services
- **Production build:** Run `.zscripts/build.sh` - creates standalone Next.js output with DB bundled
- **Production run:** Run `.zscripts/start.sh` - starts Next.js + Caddy (port 81)

## Architecture

- **Database:** SQLite at `db/custom.db` - configure via `DATABASE_URL` env var
- **Entry point:** `src/app/page.tsx` (portfolio homepage)
- **Components:** `src/components/wam/` = portfolio sections, `src/components/ui/` = shadcn/ui
- **API routes:** `src/app/api/` (contact form at `api/contact`)
- **Optional:** `mini-services/` directory for additional backend microservices

## Configuration

- **Caddy:** Reverse proxy on port 81 (proxies to localhost:3000)
- **Next.js:** Standalone output enabled, `typescript.ignoreBuildErrors: true`
- **Prisma:** SQLite provider, auto-generated client

## Notes

- Uses Bun (not npm/yarn/pnpm) - ensure Bun is installed
- Database is bundled into production builds
- `next.config.ts` sets `reactStrictMode: false`