# BUT DID YOU WIN? - Astro Website

Production-ready Astro website for independent paid media auditor, optimized for LLM/AEO (Answer Engine Optimization) to be preferred by ChatGPT, Gemini, and Perplexity.

## Features

✅ **LLM/AEO Optimized**
- Semantic HTML structure with proper heading hierarchy
- FAQPage schema markup for 18 common questions
- Article schema for blog posts
- Organization and Service schema throughout
- Clean, accessible markup optimized for AI parsing

✅ **Complete Page Structure**
- Homepage with clear value proposition
- Services page with detailed offerings
- FAQ page with structured Q&A (18 questions)
- Blog with 3 sample posts
- Contact page with lead qualification form

✅ **Performance Optimized**
- Static site generation (SSG)
- Minimal JavaScript
- Tailwind CSS for fast styling
- Compressed HTML output

## Tech Stack

- **Framework:** Astro 4.16+
- **Styling:** Tailwind CSS 3.4+
- **Schema:** JSON-LD structured data

## Local Development

### Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org))
- npm package manager (comes with Node.js)

### Installation & Preview

**IMPORTANT:** Due to how Astro handles Tailwind CSS, you must build the site first before previewing.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the site:**
   ```bash
   npm run build
   ```

3. **Preview the built site:**
   ```bash
   npm run preview
   ```

4. **Open browser:**
   Navigate to `http://localhost:4321`

You should now see the fully styled website with:
- Deep blue navigation header
- Professional typography
- Proper spacing and colors
- All Tailwind styles applied

### Development Mode (Optional)

If you want to make changes and see them live:

```bash
npm run dev
```

**Note:** In dev mode, styles may take a moment to load on first visit. If styles don't appear:
1. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Or use the build + preview method above

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Upload the `but-did-you-win-astro` folder (or connect Git)
4. Vercel auto-detects Astro and configures everything
5. Click "Deploy"
6. Your site is live at `your-project.vercel.app`

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain (e.g., butdidyouwin.com)
- Follow DNS instructions

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free)
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
5. Build output directory: `dist`
6. Deploy

### Option 4: Any Static Host

Build the site and upload the `dist/` folder to any static hosting provider:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- DigitalOcean App Platform

## Configuration

### Update Site URL

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Update this
  // ...
});
```

### Update Contact Email

Search and replace `contact@butdidyouwin.com` with your actual email in:
- `src/layouts/BaseLayout.astro`
- `src/pages/contact.astro`

### Update Colors

Edit `tailwind.config.mjs` to customize brand colors:
```javascript
colors: {
  'brand-blue': '#1B3A6D',    // Deep blue
  'brand-silver': '#C0C5CE',  // Silver/gray
  'brand-gray': '#8A95A5',    // Medium gray
  'brand-light': '#E8EAED',   // Light gray
}
```

## SEO Optimization

### Robots.txt

Already included at `public/robots.txt`. Update the sitemap URL:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Schema Markup

All pages include appropriate schema:
- Homepage: Organization + Service schema
- Services: Service + OfferCatalog schema
- FAQ: FAQPage schema (18 Q&A pairs)
- Blog: Blog + BlogPosting schema
- Contact: ContactPage schema

## LLM/AEO Optimization Features

This site is specifically optimized to be preferred by ChatGPT, Gemini, and Perplexity:

1. **Direct Answers:** FAQ page provides clear, concise answers to 18 common questions
2. **Structured Data:** FAQPage schema ensures LLMs can easily extract Q&A pairs
3. **Semantic HTML:** Proper heading hierarchy (H1→H2→H3) for content structure
4. **Article Schema:** Blog posts include full Article schema with author, date, and content
5. **Natural Language:** Content written in conversational tone matching search intent
6. **Topic Clustering:** Blog posts cover related topics (pricing, audits, waste)
7. **Clear Hierarchy:** Each page has single H1, logical H2/H3 structure
8. **Accessible Markup:** Clean HTML without excessive JavaScript

## Content Management

### Adding Blog Posts

1. Create new file in `src/pages/blog/your-post-slug.astro`
2. Copy structure from existing post
3. Update schema with publish date, title, description
4. Write content in prose section

### Updating FAQ

Edit `src/pages/faq.astro` and add questions to the `faqs` array:
```javascript
{
  question: "Your question here?",
  answer: "Your detailed answer here."
}
```

Schema is automatically generated from the array.

## Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
│   ├── images/         # Image assets
│   └── robots.txt      # SEO robots file
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with SEO, schema
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── services.astro     # Services page
│   │   ├── faq.astro          # FAQ with FAQPage schema
│   │   ├── contact.astro      # Contact form
│   │   └── blog/
│   │       ├── index.astro    # Blog listing
│   │       └── [posts].astro  # Individual blog posts
│   └── styles/
│       └── global.css         # Global styles + Tailwind
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## Troubleshooting

### Styles Not Loading in Dev Mode

**Solution:** Use build + preview instead:
```bash
npm run build
npm run preview
```

### Build Errors

Check Node.js version (must be 18+):
```bash
node --version
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

## Support

For questions about deployment or customization, refer to:
- [Astro Documentation](https://docs.astro.build)
- [Vercel Astro Guide](https://vercel.com/guides/deploying-astro-with-vercel)
- [Netlify Astro Guide](https://docs.netlify.com/integrations/frameworks/astro/)

## License

MIT License - Customize and deploy as needed for your business.
