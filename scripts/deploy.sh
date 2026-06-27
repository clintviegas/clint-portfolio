#!/usr/bin/env bash
# Build, commit (if needed), push to GitHub, and deploy to Vercel production
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

COMMIT_MSG="${1:-Deploy portfolio updates}"

echo "→ Building..."
rm -rf .next
npm run build

if [[ -n "$(git status --porcelain)" ]]; then
  echo "→ Committing changes..."
  git add -A
  git commit -m "$COMMIT_MSG"
else
  echo "→ No file changes to commit"
fi

echo "→ Pushing to GitHub (main)..."
git push origin main

echo "→ Deploying to Vercel production..."
npx vercel --prod --yes

DEPLOY_URL="$(npx vercel ls clint-portfolio --prod 2>/dev/null | grep -oE 'https://clint-portfolio-[a-z0-9]+-clint-6349s-projects\.vercel\.app' | head -1 || true)"

if [[ -n "$DEPLOY_URL" ]]; then
  echo "→ Aliasing clint-viegas.vercel.app..."
  npx vercel alias "$DEPLOY_URL" clint-viegas.vercel.app --yes
fi

echo ""
echo "✓ Live at https://clint-viegas.vercel.app"
echo "✓ Also at https://clint-portfolio-ten.vercel.app"
