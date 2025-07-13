#!/bin/bash

# Quick setup script for FormFlyer AI website

echo "FormFlyer AI - Quick Setup"
echo "========================="
echo ""

# Create git repository
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - FormFlyer AI website"
    echo "✓ Git repository created"
else
    echo "✓ Git repository already exists"
fi

# Check if all files are present
echo ""
echo "Checking files..."
if [ -f "index.html" ] && [ -f "styles.css" ] && [ -f "script.js" ]; then
    echo "✓ All required files present"
else
    echo "✗ Missing required files!"
    exit 1
fi

# Get GitHub username
echo ""
read -p "Enter your GitHub username: " github_username
read -p "Enter repository name (default: formflyer-site): " repo_name

# Use default if empty
repo_name=${repo_name:-formflyer-site}

# Update deploy.yaml with the correct repo URL
if [ -f "deploy.yaml" ]; then
    sed -i.bak "s|YOUR-USERNAME|${github_username}|g" deploy.yaml
    echo "✓ Updated deploy.yaml with your GitHub username"
fi

# Show next steps
echo ""
echo "Setup complete! Next steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   https://github.com/new"
echo "   Name: ${repo_name}"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/${github_username}/${repo_name}.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   Go to Settings → Pages → Deploy from branch (main)"
echo ""
echo "4. (Optional) Deploy to Akash:"
echo "   akash tx deployment create deploy.yaml --from YOUR-WALLET"
echo ""
echo "Your site will be available at:"
echo "- GitHub Pages: https://${github_username}.github.io/${repo_name}/"
echo "- Custom domain: Add CNAME file with your domain"

# Make deploy script executable
chmod +x deploy.sh 2>/dev/null

echo ""
echo "Run './deploy.sh' for more deployment options"