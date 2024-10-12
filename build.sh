set -e

echo "Installing dependencies"

echo "Cleaning up node_modules and cache..."
rm -rf node_modules
rm -rf .pnpm-store

pnpm install --ignore-scripts

echo "Building nuxt-app..."
pnpm run build
