#!/usr/bin/env bash
# Start the portfolio locally at http://localhost:3001
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
PORT="${PORT:-3001}"

echo "→ Stopping stale Next.js dev servers..."
pkill -f "next dev" 2>/dev/null || true

if command -v lsof >/dev/null 2>&1; then
  for p in 3000 3001; do
    if lsof -ti :"$p" >/dev/null 2>&1; then
      lsof -ti :"$p" | xargs kill -9 2>/dev/null || true
    fi
  done
fi

sleep 1

echo "→ Clearing .next cache..."
rm -rf .next

echo "→ Starting dev server..."
echo "   Open http://localhost:${PORT}"
echo "   Press Ctrl+C to stop"
echo ""

npm run dev
