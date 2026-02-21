# Hostinger Static Deployment Guide (public_html)

This project is now configured for **Static Export**. Follow these steps to host it on Hostinger Shared Hosting.

## 1. Prepare your files
1. Click the **"Download"** button in the Firebase Studio interface to download the project source code as a ZIP.
2. Extract the ZIP on your local computer.

## 2. Build the Production Site
Open your terminal in the extracted folder and run:
```bash
npm install
npm run build
```

## 3. Upload to Hostinger
1. After the build finishes, a new folder named `out` will appear in your project directory.
2. Log in to your Hostinger **hPanel**.
3. Go to **File Manager** and open the `public_html` directory.
4. Upload all files and folders **inside** the `out` folder directly into `public_html`.
   - *Note: Do not upload the 'out' folder itself, only its contents.*

## 4. Final Result
Your site is now a lightning-fast static website. Form submissions are already configured to work through **FormSubmit.co**, so you don't need any server-side Node.js setup!

---
**Technical Note:**
- `output: 'export'` is enabled in `next.config.ts`.
- `images.unoptimized: true` is enabled to support static hosting without a Next.js image server.
