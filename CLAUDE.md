# CLAUDE.md — Creative Agency Project

This file provides guidance for AI assistants (Claude Code and similar tools) working in this repository.

---

## Project Overview

This is a **creative agency** web project. The repository is currently bootstrapped and awaiting initial project scaffolding. This document establishes the conventions, workflows, and standards that all contributors — human and AI — should follow as the codebase grows.

---

## Repository Status

- **State:** Empty / Initial setup
- **Remote:** `http://local_proxy@127.0.0.1:28343/git/jinwoobot/creative-agency`
- **Default development branch:** `claude/claude-md-mmd42305mhaw6i09-ssS27`

---

## Development Branch Convention

All AI-assisted development must follow this branching model:

- **Feature branches** must follow the pattern: `claude/<description>-<session-id>`
- **Never push directly to `main` or `master`** without explicit user approval
- Always use `git push -u origin <branch-name>` when pushing for the first time
- If a push fails due to a network error, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

---

## Expected Project Structure

As the project develops, the structure should follow this convention:

```
creative-agency/
├── CLAUDE.md                  # This file
├── README.md                  # Human-facing project documentation
├── package.json               # Node.js dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.*                # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .env.example               # Environment variable template (never commit .env)
├── .gitignore
│
├── src/
│   ├── app/                   # Next.js App Router (if using Next.js)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (routes)/
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Primitive/atomic components
│   │   └── sections/          # Page section components
│   ├── lib/                   # Shared utilities and helpers
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global styles and theme tokens
│   └── types/                 # TypeScript type definitions
│
├── public/                    # Static assets (images, fonts, icons)
│
└── tests/                     # Test files (mirrors src/ structure)
```

> Update this section once the actual scaffolding is committed.

---

## Technology Stack (Anticipated)

Once the stack is finalized, document it here. Common choices for a creative agency:

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| CMS | Sanity / Contentful / Notion API |
| Deployment | Vercel |
| Testing | Vitest / Jest + React Testing Library |

> **AI assistants:** When adding dependencies, prefer the technologies above unless the user specifies otherwise. Do not add new major dependencies without confirming with the user.

---

## Code Style & Conventions

### General

- Use **TypeScript** throughout — avoid `any`, prefer `unknown` with type guards
- Prefer **named exports** over default exports for components and utilities
- Keep files focused and small; split large components into sub-components
- Do not add comments unless the logic is genuinely non-obvious

### Naming

| Entity | Convention | Example |
|---|---|---|
| React components | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase, prefix `use` | `useScrollPosition.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types/Interfaces | PascalCase | `ProjectCard`, `SiteConfig` |
| CSS classes | kebab-case (or Tailwind) | `hero-section` |
| Constants | UPPER_SNAKE_CASE | `MAX_ITEMS` |

### React

- Prefer functional components with hooks
- Co-locate component styles, tests, and types near the component file
- Do not use `React.FC` — prefer explicit prop type annotations

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) { ... }

// Avoid
const Button: React.FC<ButtonProps> = ({ label, onClick }) => { ... }
```

### Imports

- Use absolute imports (configured via `tsconfig.json` path aliases)
- Order: external libraries → internal modules → relative imports → types
- Avoid barrel files (`index.ts`) unless the module boundary is well-defined

---

## Git Workflow

### Commits

- Write commit messages in the **imperative mood**: `Add hero section`, `Fix navigation scroll`
- Keep commits focused — one logical change per commit
- Do not amend published commits; always create a new commit

### Pull Requests

- PR titles should be concise (under 70 characters)
- Include a summary of what changed and why in the PR body
- All PRs should target the appropriate feature branch (see branching convention above)

---

## AI Assistant Guidelines

### Do

- Read files before editing them
- Make the minimum change necessary to accomplish the task
- Follow existing conventions found in the codebase
- Run linting/type checks after making changes
- Ask before introducing new dependencies or architectural patterns
- Keep solutions simple — avoid over-engineering

### Do Not

- Add features, refactors, or improvements beyond what was explicitly requested
- Add docstrings, comments, or type annotations to code you did not change
- Commit or push without explicit instruction
- Use `--no-verify` to bypass git hooks
- Delete files without confirming with the user
- Add error handling for scenarios that cannot realistically occur

### Security

- Never commit `.env`, credentials, API keys, or secrets
- Validate inputs at system boundaries (user input, external APIs)
- Avoid introducing XSS, SQL injection, or command injection vulnerabilities
- Use environment variables for all secrets; document them in `.env.example`

---

## Environment Variables

All secrets and environment-specific values must be managed via environment variables.

- Add new variables to `.env.example` with placeholder values and a comment explaining each
- Never commit `.env` or any file containing real secrets
- Use a secrets manager or CI/CD environment injection for production values

---

## Testing

- Write tests for non-trivial logic and all user-facing interactions
- Tests live alongside source files or in a top-level `tests/` directory
- Run tests before pushing: `npm test` (or `pnpm test` / `yarn test`)
- Do not mark a task complete if tests are failing

---

## Scripts (to be updated as project evolves)

Once `package.json` is defined, document the key scripts here:

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run test      # Run tests
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript compiler checks
```

---

## Updating This File

This file should be updated whenever:

- New technologies or dependencies are added to the project
- The directory structure changes significantly
- New team conventions or workflows are established
- The project moves from scaffolding to active development

Keep this file accurate — an outdated CLAUDE.md is worse than none.
