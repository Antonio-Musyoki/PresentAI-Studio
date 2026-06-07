# Contributing to PresentAI Studio

Thank you for your interest in contributing to PresentAI Studio! We welcome contributions from developers, designers, and other talented individuals.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/PresentAI-Studio.git
   cd PresentAI-Studio
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

```bash
# Install dependencies
npm install

# Setup environment variables
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start development servers
npm run dev
```

## Code Style

We follow these conventions:

- **Language**: TypeScript
- **Linting**: ESLint with Prettier
- **Commit Messages**: Conventional Commits
- **Naming**: camelCase for variables/functions, PascalCase for classes/components

### Format your code:
```bash
npm run lint
npm run format
```

## Git Workflow

### Feature Branches

Work on dedicated feature branches:

```bash
git checkout -b feature/your-feature-name
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix a bug
docs: update documentation
refactor: refactor code
test: add/update tests
chore: update dependencies
```

### Example commits:
```
feat(pdf-engine): add text extraction from PDFs
fix(api): resolve authentication token validation issue
docs(readme): update setup instructions
refactor(web): simplify component structure
test(design-engine): add unit tests for slide layouts
```

## Pull Request Process

1. **Update** the README.md if needed
2. **Add tests** for new functionality
3. **Update documentation** if you've changed APIs
4. **Ensure tests pass**: `npm run test`
5. **Ensure linting passes**: `npm run lint`
6. **Create a pull request** with a clear description

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage
npm run test:coverage
```

## Documentation

- Update relevant documentation files in `/docs`
- Add JSDoc comments for new functions/classes
- Update the CHANGELOG.md with your changes
- Document API changes in `/docs/API.md`

## Issues

- Use clear, descriptive titles
- Include steps to reproduce for bugs
- Provide expected vs. actual behavior
- Include screenshots/videos when relevant

## Code Review

Your PR will be reviewed for:

- Code quality and style consistency
- Test coverage
- Documentation completeness
- Performance implications
- Security considerations

## Questions?

- Open an issue for questions
- Check existing issues for similar topics
- Join our discussions for feature ideas

## License

By contributing, you agree that your contributions will be licensed under the same Proprietary License as the project.

---

Thank you for contributing to PresentAI Studio! 🎉
