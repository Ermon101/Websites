#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote (web) sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Session start hook running..."

# Add dependency installation commands here as the project grows.
# Examples:
#   npm install          (Node.js / npm)
#   pip install -r requirements.txt   (Python)
#   bundle install       (Ruby)
#   cargo build          (Rust)

echo "Session start hook complete."
