# RolemIAster Web Documentation

> [!IMPORTANT]
> **THIS SITE IS HOSTED ON GITHUB PAGES.**
> Repository: `https://github.com/rolemiaster/RolemIAster_Web`

## Deployment Status
- **Method:** `git push origin master`
- **Hosting:** GitHub Pages (Source: `master` branch)
- **Status:** Active

## obsolete / Deprecated
> [!WARNING]
> **Apps Script is NO LONGER USED.**
> Do NOT use `clasp push` or `deploy.bat`. These files have been removed.

## How to Update
1. Edit HTML/CSS/JS files locally in this folder.
2. Run standard git commands:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```
3. Changes will be live on the GitHub Pages URL shortly.

## Automation
The `changelog_y_backup.py` script automatically copies the latest `changelog_produccion.md` to this folder when a new version is created. You just need to commit and push that change.
