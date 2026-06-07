# Development Guide

## Setup

```bash
# Install dependencies
npm install

# Copy environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start development servers
npm run dev
```

## Project Structure

```
PresentAI-Studio/
├── apps/
│   ├── web/              # Next.js frontend
│   └── api/              # NestJS backend
├── packages/
│   ├── pdf-engine/       # PDF parsing
│   ├── design-engine/    # Design system
│   ├── ai-agents/        # AI agents
│   └── shared/           # Shared utilities
├── docs/                 # Documentation
└── infrastructure/       # Deployment configs
```

## Development Workflow

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Committing Changes

Follow conventional commits:

```
feat: add new feature
fix: fix a bug
docs: update documentation
refactor: refactor code
test: add tests
```

### Running Tests

```bash
npm run test
```

### Building

```bash
npm run build
```

## Code Style

- Use TypeScript
- Follow ESLint rules
- Format with Prettier
- Write meaningful names
- Add JSDoc comments

## Database Migrations

Using TypeORM or similar:

```bash
npm run migration:create -- src/migrations/YourMigration
npm run migration:run
```
