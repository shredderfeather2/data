# FormFlyer AI - File List

## Core Files (Required)
These are the essential files for your website:

- **index.html** - Main website HTML structure
- **styles.css** - All CSS styles and animations  
- **script.js** - JavaScript for interactivity

## Deployment Files
Choose the deployment method you prefer:

### GitHub Pages
- **CNAME** - Custom domain configuration (optional)
- **.gitignore** - Git ignore rules

### Akash Deployment
- **deploy.yaml** - Akash deployment with auto-git-clone
- **akash-simple.yaml** - Simplified Akash deployment (manual upload)
- **nginx.conf** - Custom nginx configuration (optional)

## Setup & Documentation
- **README.md** - Complete documentation
- **setup.sh** - Quick setup script
- **deploy.sh** - Deployment helper script
- **test.html** - Test page to verify setup
- **FILES.md** - This file

## Quick Start Commands

```bash
# Make scripts executable
chmod +x setup.sh deploy.sh

# Run setup
./setup.sh

# Test locally
python3 -m http.server 8000
# Visit http://localhost:8000/test.html

# Deploy
./deploy.sh
```

## Minimal Deployment
For the absolute minimum, you only need:
1. index.html
2. styles.css  
3. script.js

Everything else is optional!