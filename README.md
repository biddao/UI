# What is BidDAO?



## Getting Started

```bash
# Install Dependencies
yarn

# Run the development server
yarn dev
```

### ENV

```bash
# Copy ENV File
cp .env.example .env.local
```

### Configs

- `src/appConfig.ts`: app name, title, SEO etc.
- `src/pages/_app.tsx`: chains, providers, wallet connectors

### Scripts

**Next.js**

```bash
# Build
yarn build

# Start server with build files
yarn start
```


**Contract Types**

```bash
# Generate contract types from src/contracts/*.json
yarn compile-contract-types
```
