#!/bin/bash

set -e

projects=("nuxt-app/")

root_directory=$PWD

for project in "${projects[@]}"; do

    echo "Installing dependencies for $project"
    cd "$root_directory/$project"

    echo "Cleaning up node_modules and cache..."
    rm -rf node_modules
    rm -rf .pnpm-store

    pnpm install --ignore-scripts

    echo "Building $project..."
    pnpm run build
    cd "$root_directory"
done
