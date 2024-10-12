#!/bin/bash

set -e

# Assuming the current project is in the root directory
root_directory=$PWD

echo "Installing dependencies using pnpm (root directory: $root_directory)"

# Install dependencies in the root directory
pnpm install --frozen-lockfile

echo "Cleaning up node_modules and cache..."
rm -rf node_modules
rm -rf .cache

echo "Building the project..."
pnpx nuxt build
