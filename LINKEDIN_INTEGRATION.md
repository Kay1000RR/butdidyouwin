# LinkedIn Article Integration for Blog

## Overview

This document explains how to automatically sync your LinkedIn articles to the blog section of your website.

## Current Setup

The blog is located at `/src/pages/blog/` with:
- `index.astro` - Blog listing page
- Individual `.astro` files for each blog post

## Integration Options

### Option 1: Manual Import (Recommended for Now)

1. **Export LinkedIn Article**
   - Go to your LinkedIn article
   - Copy the content
   - Create new file: `/src/pages/blog/[article-slug].astro`

2. **Use This Template**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

const publishDate = "2025-01-28"; // Update with actual date
const title = "Your LinkedIn Article Title";
const description = "Brief description for SEO";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "datePublished": publishDate,
  "author": {
    "@type": "Person",
    "name": "BUT DID YOU WIN?"
  }
};
---

<BaseLayout 
  title={`${title} | BUT DID YOU WIN? Blog`}
  description={description}
  schema={schema}
>
  <article class="py-16 bg-white">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <div class="mb-8">
          <p class="text-sm text-brand-gray mb-2">
            <time datetime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </p>
          <h1 class="text-brand-blue mb-4">{title}</h1>
        </div>

        <div class="prose prose-lg max-w-none">
          <!-- Paste your LinkedIn article content here -->
          <p>Your content goes here...</p>
        </div>

        <div class="mt-12 pt-8 border-t">
          <a href="/blog" class="text-brand-blue font-semibold hover:underline">&larr; Back to Blog</a>
        </div>
      </div>
    </div>
  </article>
</BaseLayout>
```

3. **Update Blog Index**
   - Add your new article to `/src/pages/blog/index.astro`
   - Add it to the `posts` array

### Option 2: RSS Feed Integration (Future Enhancement)

LinkedIn provides an RSS feed for your published articles. You can:

1. Get your LinkedIn RSS feed URL
2. Use Astro's content collections to fetch and parse RSS
3. Automatically generate blog posts from LinkedIn articles

**Implementation Steps:**

```bash
npm install rss-parser
```

Create `/src/scripts/sync-linkedin.js`:

```javascript
import Parser from 'rss-parser';
import fs from 'fs';

const parser = new Parser();

async function syncLinkedInArticles() {
  const feed = await parser.parseURL('YOUR_LINKEDIN_RSS_FEED_URL');
  
  feed.items.forEach(item => {
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const content = `---
import BaseLayout from '../../layouts/BaseLayout.astro';

const publishDate = "${item.pubDate}";
const title = "${item.title}";
const description = "${item.contentSnippet}";
---

<BaseLayout title={\`\${title} | Blog\`} description={description}>
  <article>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: \`${item.content}\` }} />
  </article>
</BaseLayout>
`;

    fs.writeFileSync(`src/pages/blog/${slug}.astro`, content);
  });
}

syncLinkedInArticles();
```

Run before build:
```bash
node src/scripts/sync-linkedin.js && npm run build
```

### Option 3: API Integration (Most Automated)

Use LinkedIn's API to fetch articles programmatically:

1. Set up LinkedIn OAuth
2. Use LinkedIn API to fetch published articles
3. Auto-generate blog posts during build

**Requires:**
- LinkedIn API access
- OAuth authentication
- Build-time script

## Recommended Approach

**Start with Option 1 (Manual)** because:
- ✅ Full control over formatting
- ✅ Can edit/optimize for web before publishing
- ✅ No API dependencies
- ✅ Works immediately

**Upgrade to Option 2 or 3** when you have:
- 10+ LinkedIn articles published
- Regular publishing schedule (weekly/monthly)
- Need for automatic sync

## Current Blog Structure

Your blog currently has 3 sample posts:
1. `5-signs-agency-wasting-budget.astro`
2. `percentage-pricing-conflicts.astro`
3. `cost-of-wasted-ad-spend.astro`

When adding LinkedIn articles:
1. Follow the same naming convention (lowercase, hyphens)
2. Include Article schema markup
3. Add to blog index page
4. Maintain consistent styling

## Next Steps

1. **Identify your best LinkedIn articles** to import
2. **Create .astro files** using the template above
3. **Update blog index** to list new articles
4. **Test locally** with `npm run build && npm run preview`
5. **Deploy** updated site

## Questions?

See `README.md` for general site documentation or contact for custom integration support.
