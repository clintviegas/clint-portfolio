#!/usr/bin/env bash
# Start the portfolio locally at http://localhost:3000
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Stopping stale Next.js dev servers..."
pkill -f "next dev" 2>/dev/null || true

if command -v lsof >/dev/null 2>&1; then
  if lsof -ti :3000 >/dev/null 2>&1; then
    lsof -ti :3000 | xargs kill -9 2>/dev/null || true
  fi
fi

sleep 1

echo "→ Clearing .next cache..."
rm -rf .next

echo "→ Starting dev server..."
echo "   Open http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""

npm run dev
