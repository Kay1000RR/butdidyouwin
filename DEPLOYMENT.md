# Deployment Guide

Quick reference for deploying your BUT DID YOU WIN? Astro website.

## Quick Start (5 Minutes)

### Option 1: Vercel (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Upload the entire `but-did-you-win-astro` folder (or connect Git)
4. Vercel auto-detects Astro settings
5. Click "Deploy"
6. Your site is live at `your-project.vercel.app`

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain (e.g., butdidyouwin.com)
- Follow DNS instructions

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `but-did-you-win-astro` folder
3. Site deploys automatically
4. Live at `your-site.netlify.app`

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain
- Update DNS records

### Option 3: Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to Pages → Create a project
3. Upload `but-did-you-win-astro` folder
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Before You Deploy

### 1. Update Site URL

Edit `astro.config.mjs`:
```javascript
site: 'https://yourdomain.com'
```

### 2. Update Contact Email

Search and replace in all files:
- `contact@butdidyouwin.com` → your actual email

### 3. Update robots.txt

Edit `public/robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap-index.xml
```

### 4. Test Locally

```bash
npm install
npm run build
npm run preview
```

Visit `http://localhost:4321` to verify everything works.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form displays (note: form submission requires backend setup)
- [ ] Check sitemap at `/sitemap-index.xml`
- [ ] Validate schema markup using [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test mobile responsiveness
- [ ] Submit sitemap to Google Search Console
- [ ] Test FAQ page schema with [Schema Markup Validator](https://validator.schema.org/)

## Form Submission Setup

The contact form is currently frontend-only. To make it functional:

### Option A: Netlify Forms (Easiest)

Add `netlify` attribute to form in `src/pages/contact.astro`:
```html
<form netlify>
```

Submissions appear in Netlify dashboard.

### Option B: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create form endpoint
3. Update form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option C: Custom Backend

Build API endpoint to handle form submissions and send emails.

## Analytics Setup

### Google Analytics

Add to `src/layouts/BaseLayout.astro` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-Friendly)

Add to `src/layouts/BaseLayout.astro` before `</head>`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## SEO Setup

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## Troubleshooting

### Build Fails

Check Node.js version:
```bash
node --version  # Should be 18+
```

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

Ensure images are in `public/` folder and referenced with absolute paths:
```html
<img src="/images/your-image.jpg" />
```

### Schema Validation Errors

Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

Common fixes:
- Ensure all required schema fields are present
- Check date formats (YYYY-MM-DD)
- Validate JSON-LD syntax

## Performance Optimization

### Image Optimization

Use WebP format for images:
```bash
# Convert images to WebP
npm install -g sharp-cli
sharp -i input.jpg -o output.webp
```

### Lighthouse Score

Run Lighthouse audit:
1. Open site in Chrome
2. DevTools → Lighthouse tab
3. Generate report
4. Target: 90+ scores in all categories

## Support Resources

- [Astro Docs](https://docs.astro.build)
- [Vercel Support](https://vercel.com/support)
- [Netlify Docs](https://docs.netlify.com)
- [Schema.org Reference](https://schema.org)

## Need Help?

Common issues and solutions:

**Q: Form doesn't submit**
A: Add form handling (see Form Submission Setup above)

**Q: Schema not showing in Google**
A: Can take 1-2 weeks for Google to index. Verify with Rich Results Test first.

**Q: Site loads slowly**
A: Check image sizes, enable CDN, use WebP format

**Q: Custom domain not working**
A: Verify DNS records (usually takes 24-48 hours to propagate)
