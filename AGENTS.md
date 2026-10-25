<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository guide

Single-page portfolio built with Next.js 16 App Router, React 19, TypeScript, Tailwind v4, shadcn (`base-nova` style), and Mongoose. Use `pnpm`; `CLAUDE.md` only re-exports this file.

## Commands

- `pnpm install` — install with `pnpm-lock.yaml` (Node >= 20.9). `pnpm-workspace.yaml` only blocks sharp/unrs build scripts; this is not a monorepo.
- `pnpm dev` — Turbopack dev server. It also regenerates route types and the managed block above.
- `pnpm lint` — ESLint flat config. `next build` no longer lints, so run this separately.
- `pnpm exec next typegen && pnpm exec tsc --noEmit` — typecheck a clean checkout; `next-env.d.ts` and route types are generated and gitignored.
- `pnpm build` — production build (also typechecks).
- No test suite or CI is configured.

## Environment

- Create `.env.local` (gitignored) for backend features:
  - `MONGODB_URI` — required when guestbook DB code runs; `src/lib/db.ts` throws without it.
  - `GITHUB_USERNAME`, `GITHUB_TOKEN` — required by `/api/github`; the token needs GraphQL access.
- GitHub env vars are read at module scope, so restart `pnpm dev` after changing them.

## Architecture and conventions

- `src/app/page.tsx` is the only page. Sections live in `src/components/{header,works,events,github,footer}`; reusable primitives are in `src/components/ui`.
- UI primitives use `@base-ui/react`, not Radix. Use Base UI's `render={<Link ... />}` (plus `nativeButton={false}` for buttons) instead of `asChild`.
- `cn` is re-exported from `src/lib/utils.ts`; it comes from the `cn` package. Don't add clsx/tailwind-merge.
- Tailwind v4 has no JS config. Theme tokens, radius, and utilities like `hide-scrollbar` live in `src/app/globals.css`; extend the existing tokens there.
- The local Fira Code font is loaded from `public/Fira_Code/` by `src/app/layout.tsx`.
- Portfolio content lives in `src/data/work.json` and `src/data/events.json`. Add entries there, not in components.
- Icons use explicit name-to-Lucide maps in `src/components/works/work-icons.tsx` and `src/components/events/event-icons.tsx`. Work entries with unknown names are skipped; events with unknown Lucide names can fail to render, so update the map when adding entries. Works sort newest-first, events oldest-first.
- Guestbook reads use `GET /api/guestbook`; writes use the `postGuestBook` server action (`src/app/actions/post-guestbook.ts`), which validates with Zod and calls `revalidatePath("/")`. There is no POST route handler, and no guestbook UI is wired into the page yet.
- Keep the Mongoose caches in `src/lib/db.ts` (global connection promise) and `src/schema/guest-book.ts` (`models.Guestbook || model(...)`); they prevent duplicate connections/models under HMR.

For framework details, read `node_modules/next/dist/docs/` before changing routing, data fetching, caching, or config. This is Next 16.3.5, not the older Next.js in most training data.
