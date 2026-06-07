# PresentAI Studio - Architecture Overview

## System Design

PresentAI Studio is built as a monorepo using Turbo for efficient task orchestration.

### Core Components

#### Frontend (Next.js)
- Modern React UI with Tailwind CSS
- Framer Motion for animations
- Real-time collaboration features
- Responsive design for all devices

#### Backend (NestJS)
- RESTful API endpoints
- WebSocket support for real-time updates
- Authentication and authorization
- File processing and PDF parsing

#### Packages
- **pdf-engine**: PDF parsing and text extraction
- **design-engine**: Slide layout and design system
- **ai-agents**: AI-powered content generation
- **shared**: Shared types and utilities

## Technology Stack

### Frontend
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- NestJS
- PostgreSQL
- Redis (caching & real-time)
- S3 (file storage)

### AI/ML
- OpenAI GPT-4
- Anthropic Claude
- Google Gemini

## Database Schema

### Users
- id (UUID, PK)
- email (VARCHAR, UNIQUE)
- name (VARCHAR)
- password_hash (VARCHAR)
- role (ENUM)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Presentations
- id (UUID, PK)
- user_id (UUID, FK)
- title (VARCHAR)
- description (TEXT)
- theme_id (UUID, FK)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Slides
- id (UUID, PK)
- presentation_id (UUID, FK)
- order (INT)
- layout (VARCHAR)
- content (JSONB)
- notes (TEXT)
- created_at (TIMESTAMP)

## API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`

### Presentations
- `GET /api/presentations` - List user's presentations
- `POST /api/presentations` - Create new presentation
- `GET /api/presentations/:id` - Get presentation details
- `PUT /api/presentations/:id` - Update presentation
- `DELETE /api/presentations/:id` - Delete presentation

### Slides
- `GET /api/presentations/:id/slides` - List slides
- `POST /api/presentations/:id/slides` - Create slide
- `PUT /api/slides/:id` - Update slide
- `DELETE /api/slides/:id` - Delete slide

### AI Generation
- `POST /api/ai/generate-slides` - Generate slides from content
- `POST /api/ai/enhance-text` - Enhance text content
- `POST /api/ai/suggest-images` - Get image suggestions

### Export
- `POST /api/export/pptx` - Export to PowerPoint
- `POST /api/export/pdf` - Export to PDF
- `POST /api/export/video` - Export to video

## Deployment

### Development
- Local development with hot reload
- Docker Compose for services

### Production
- Kubernetes orchestration
- Docker containerization
- CI/CD with GitHub Actions
- CDN for static assets
- Cloud storage for files

## Security

- JWT authentication
- HTTPS only
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Environment variables for secrets
