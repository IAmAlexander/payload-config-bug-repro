#!/bin/bash

echo "Checking for duplicate dependencies (as per Payload troubleshooting docs)..."
echo ""

echo "=== @payloadcms/ui (as recommended by Payload docs) ==="
find node_modules -name package.json -exec grep -H '"name": "@payloadcms/ui"' {} \;
echo ""

echo "=== React (checking for duplicates) ==="
find node_modules -path "*/react/package.json" -exec grep -H '"version"' {} \; | sort | uniq
echo ""

echo "=== react-dom (checking for duplicates) ==="
find node_modules -path "*/react-dom/package.json" -exec grep -H '"version"' {} \; | sort | uniq
echo ""

echo "=== payload (checking for duplicates) ==="
find node_modules -name package.json -exec grep -H '"name": "payload"' {} \;
echo ""

echo "=== @payloadcms/next (checking for duplicates) ==="
find node_modules -name package.json -exec grep -H '"name": "@payloadcms/next"' {} \;
echo ""

echo "=== Summary ==="
echo "If you see multiple entries above, you have duplicate dependencies."
echo "If you see only one entry per package, no duplicates found."
echo ""
echo "Note: This repo uses 'bun' as package manager."
echo "If using 'pnpm', you can also run: pnpm why @payloadcms/ui"

