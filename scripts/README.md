# Portfolio scripts

Run these from the project root, or use the npm shortcuts.

## Local dev

```bash
./scripts/dev.sh
# or
npm run local
```

Opens **http://localhost:3001** — kills stale servers on 3000/3001 and clears cache first.

## Deploy live

```bash
./scripts/deploy.sh
# or
npm run ship

# Custom commit message
./scripts/deploy.sh "Fix light mode and update copy"
npm run ship -- "Fix light mode and update copy"
```

Builds, commits any changes, pushes to GitHub `main`, deploys to Vercel, and aliases **clint-viegas.vercel.app**.

## Screenshots

```bash
npm run capture:screenshots
```

Captures project screenshots into `public/projects/`.
