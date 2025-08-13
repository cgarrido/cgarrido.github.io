# GitHub Pages Personal Website

This is a simple GitHub Pages personal website for Cristian Garrido hosted at cgarrido.github.io. The site consists of a single HTML file that is automatically deployed via GitHub Pages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Repository Structure
- `index.html` - Single HTML file containing the entire website
- `.git/` - Git repository metadata  
- `.github/` - GitHub configuration and workflows

### Local Development Workflow
- Clone the repository: `git clone https://github.com/cgarrido/cgarrido.github.io.git`
- Navigate to repository: `cd cgarrido.github.io`
- Start local development server: `python3 -m http.server 8000`
- Access site locally: Open `http://localhost:8000` in browser
- Stop server: `Ctrl+C` or `pkill -f "python3 -m http.server"`

### Build Process
- **NO BUILD PROCESS REQUIRED** - This is a static HTML site
- Files are served directly by GitHub Pages without any build step
- No dependencies, no package.json, no build tools needed
- **TIMING**: Local server starts instantly (< 1 second)

### Deployment
- **AUTOMATIC DEPLOYMENT** via GitHub Pages
- Deployment happens automatically when pushing to any branch that GitHub Pages is configured to deploy from
- **TIMING**: GitHub Pages deployment typically takes 1-5 minutes after push
- **NEVER CANCEL**: Wait for GitHub Pages deployment to complete. Check Actions tab for deployment status.
- Deployment workflow: "pages-build-deployment" runs automatically

## Validation

### Local Validation Steps
Always perform these validation steps after making changes:

1. **Start local server**: `python3 -m http.server 8000`
2. **Test HTTP response**: `curl -s http://localhost:8000 | head -10`
3. **Verify content**: Check that HTML content displays correctly
4. **Validate HTML structure**: Ensure proper DOCTYPE, title, and body content
5. **Stop server**: `pkill -f "python3 -m http.server"`

### Complete End-to-End Validation Scenario
After making any changes, run this validation sequence:

```bash
# 1. Verify file exists
ls -la index.html

# 2. Start local server  
python3 -m http.server 8000 &
SERVER_PID=$!

# 3. Wait for server startup
sleep 2

# 4. Test HTTP response
curl -s -w "%{http_code}" http://localhost:8000

# 5. Test content contains expected elements
curl -s http://localhost:8000 | grep -E "(Hello|Cristian|Garrido)"

# 6. Cleanup
kill $SERVER_PID
```

### Manual Browser Testing
- Open `http://localhost:8000` in a web browser
- Verify the page displays "Hello!" header and "Hello world!!" paragraph
- Verify the page title shows "Cristian Garrido"
- Test on multiple browsers if available (Chrome, Firefox, Safari)

### GitHub Pages Deployment Validation
- After pushing changes, monitor the Actions tab in GitHub
- Wait for "pages-build-deployment" workflow to complete (1-5 minutes)
- **NEVER CANCEL** the deployment workflow - let it finish completely
- Visit https://cgarrido.github.io to verify live deployment
- **TIMING**: Total deployment time is typically 1-5 minutes, wait for completion

## Common Tasks

### Making Content Changes
1. Edit `index.html` directly
2. Test locally using validation steps above
3. Commit and push changes: `git add index.html && git commit -m "Update content" && git push`
4. Wait for automatic GitHub Pages deployment (1-5 minutes)
5. Verify changes at https://cgarrido.github.io

### Adding New Pages
1. Create new HTML files in repository root (e.g., `about.html`)
2. Update `index.html` to link to new pages if needed
3. Test all pages locally
4. Commit and push all changes
5. Verify deployment

### Troubleshooting
- If local server fails to start, check if port 8000 is in use: `lsof -i :8000`
- If GitHub Pages deployment fails, check Actions tab for error details
- For HTML validation, manually review DOCTYPE, head, and body structure
- Ensure all HTML tags are properly closed

## Repository Information

### File Structure
```
.
├── .git/           # Git repository metadata
├── .github/        # GitHub configuration and workflows  
│   └── copilot-instructions.md  # This file
└── index.html      # Main website content
```

### Key Characteristics
- **Type**: Static GitHub Pages site
- **Dependencies**: None
- **Build tools**: None required
- **Testing**: Manual browser testing and local HTTP server
- **Deployment**: Automatic via GitHub Pages
- **Hosting**: https://cgarrido.github.io

### GitHub Workflows
- `pages-build-deployment` - Automatic deployment workflow managed by GitHub Pages
- No custom workflows or CI/CD pipelines

## Quick Reference Commands

| Task | Command | Expected Time |
|------|---------|---------------|
| Start local server | `python3 -m http.server 8000` | < 1 second |
| Test HTTP response | `curl -s http://localhost:8000` | < 1 second |
| Stop local server | `pkill -f "python3 -m http.server"` | < 1 second |
| View file | `cat index.html` | < 1 second |
| Check git status | `git status` | < 1 second |
| Push changes | `git push` | 1-10 seconds |
| GitHub Pages deploy | Automatic after push | 1-5 minutes |

Always use the validation steps above before considering any change complete. The goal is to ensure the website continues to work properly both locally and when deployed to GitHub Pages.