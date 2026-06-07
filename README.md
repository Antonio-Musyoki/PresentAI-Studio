# PresentAI Studio

Enterprise AI-powered presentation generator that transforms PDFs, documents, research papers, and content into stunning professional presentations rivaling Pi.ai, Gamma, Beautiful.ai, and Canva Magic Write.

## Vision

Create a next-generation AI-powered presentation platform that automatically transforms any content into professional presentations with:

- ✨ Design excellence
- 📖 Intelligent storytelling
- ⚡ Complete automation
- 🚀 Enterprise scalability
- 🎨 Unlimited slides (no restrictions)
- 🤝 Real-time collaboration
- 🎯 Brand consistency

## Supported Input Formats

### Documents
- PDF, DOCX, TXT, EPUB, PPTX, RTF, Markdown, ODT

### Web Sources
- URLs, Blogs, Research Papers, Wikipedia, Notion, Confluence

### Media
- Images, Infographics, Screenshots, Videos, YouTube URLs

### Data
- CSV, Excel, Google Sheets, Airtable

### AI Generated Content
- User prompts, Chat transcripts, Research notes

## Core Features

### Phase 1: MVP (Months 1-3)
- [x] PDF Intelligence Engine
- [x] Core Slide Generation (7 layouts)
- [x] Design System (3 templates)
- [x] PPTX + PDF Export

### Phase 2: Differentiation (Months 4-6)
- [ ] Advanced Image Engine
- [ ] Smart Charts & Infographics
- [ ] Real-time Collaboration
- [ ] Speaker Notes & AI Coach

### Phase 3: Enterprise (Months 7+)
- [ ] Third-party Integrations
- [ ] Video Generation
- [ ] Analytics & White Label

## Technology Stack

### Frontend
- Next.js, React, TypeScript, Tailwind CSS, Framer Motion

### Backend
- Node.js, NestJS

### AI/ML
- OpenAI, Anthropic Claude, Google Gemini

### Database
- PostgreSQL, Supabase

### Storage
- S3-compatible storage

### Real-time
- WebSockets, Redis, BullMQ

## Quick Start

```bash
# Clone repository
git clone https://github.com/Antonio-Musyoki/PresentAI-Studio.git

# Navigate to project
cd PresentAI-Studio

# Install dependencies
npm install

# Setup environment variables
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start development server
npm run dev
```

## Project Structure

```
PresentAI-Studio/
├── apps/
│   ├── web/              # Next.js frontend
│   ├── api/              # NestJS backend
│   └── mobile/           # React Native apps
├── packages/
│   ├── pdf-engine/       # PDF intelligence
│   ├── design-engine/    # Design system
│   ├── ai-agents/        # AI agent system
│   └── shared/           # Shared utilities
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md   # System architecture
│   └── DEVELOPMENT.md    # Development guide
├── infrastructure/       # Docker, K8s configs
└── scripts/              # Automation scripts
```

## Documentation

- **[Architecture Overview](./docs/ARCHITECTURE.md)** - System design and technical decisions
- **[Development Guide](./docs/DEVELOPMENT.md)** - Setup and development workflow
- **[API Documentation](./docs/API.md)** - REST API endpoints and usage
- **[Contributing Guide](./CONTRIBUTING.md)** - Contribution guidelines

## Available Scripts

### Development
```bash
npm run dev      # Start all development servers
npm run dev:web  # Start only frontend
npm run dev:api  # Start only backend
```

### Production
```bash
npm run build    # Build all apps and packages
npm start        # Start production servers
npm run export   # Export presentations
```

### Quality
```bash
npm run lint     # Run ESLint
npm run test     # Run all tests
npm run test:web # Test frontend
npm run test:api # Test backend
```

### Maintenance
```bash
npm run clean    # Clean builds and modules
npm run format   # Format code with Prettier
npm run type-check # Check TypeScript types
```

## Environment Variables

### Frontend (`apps/web/.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_AI_API_URL=https://api.openai.com
NEXT_PUBLIC_AUTH_URL=http://localhost:3000/api/auth
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_MAX_FILE_SIZE=52428800
NEXT_PUBLIC_ALLOWED_FILE_TYPES=pdf,docx,txt,pptx
```

### Backend (`apps/api/.env`)
```
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/presentai
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
AWS_REGION=us-east-1
REDIS_URL=redis://localhost:6379
```

## Feature Branches

The project uses feature branches for parallel development:

- `feature/design-system` - Design system components and theming
- `feature/export-formats` - Multiple export format support
- `feature/video-generation` - Video presentation generation
- `feature/analytics` - Analytics and tracking features
- `feature/collaboration` - Real-time collaboration tools
- `feature/slide-generation` - AI-powered slide generation
- `feature/image-engine` - Image intelligence and suggestions

## Contributing

1. Choose a feature branch or create a new one
2. Install dependencies: `npm install`
3. Make your changes following code style guidelines
4. Commit with conventional commit messages
5. Submit a pull request with a clear description

## Code Style

- **Language**: TypeScript
- **Linter**: ESLint
- **Formatter**: Prettier
- **Commit Convention**: Conventional Commits

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Deployment

### Development
```bash
docker-compose up -d
npm run dev
```

### Production
See [Infrastructure Documentation](./infrastructure/README.md) for deployment guides.

## License

Proprietary - Antonio Musyoki

All rights reserved. This project and its contents are confidential.

## Support

For issues, questions, or feature requests:
- Open an issue on [GitHub](https://github.com/Antonio-Musyoki/PresentAI-Studio/issues)
- Contact: antoniomusyoki@gmail.com

---

**Last Updated:** June 7, 2026  
**Version:** 0.1.0
