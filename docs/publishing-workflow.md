# Blog Publishing Workflow

This document outlines the exact workflow for publishing blog articles on butdidyouwin.com.

## Step 1: Write in Google Docs

1. Open the official article template in Google Docs
2. Follow the template structure exactly:
   - Summary (2-4 factual sentences)
   - Why this article exists
   - The actual business problem
   - What most teams get wrong
   - The forensic framework (with 4 subsections)
   - How to validate this in practice
   - What changes after you do this correctly
   - Final takeaway

## Step 2: Export to Markdown

1. In Google Docs, go to File → Download → Markdown (.md)
2. Save the file with a descriptive slug name (e.g., `attribution-mistakes.md`)
3. Ensure the filename uses lowercase and hyphens only

## Step 3: Place the file in the repository

1. Move the exported Markdown file to: `src/content/blog/`
2. Do not place it in `src/pages/blog/` (that directory is for the old format)

## Step 4: Fill frontmatter

Add the following frontmatter at the top of the Markdown file:

```yaml
---
title: "Your Article Title"
description: "A concise description for SEO and social sharing (150-160 characters)"
pubDate: "2025-02-10"
updatedDate: ""
canonical: ""
draft: true
---
```

### Frontmatter field guide:

- **title**: The article headline (will be the H1)
- **description**: SEO meta description
- **pubDate**: Publication date in YYYY-MM-DD format
- **updatedDate**: (Optional) Last update date if article is revised
- **canonical**: (Optional) If cross-publishing, put the canonical URL here
- **draft**: Set to `true` while writing, `false` when ready to publish

## Step 5: Set draft to false when ready

When the article is ready for publication:

1. Change `draft: true` to `draft: false` in the frontmatter
2. Ensure `pubDate` is set to the intended publication date
3. Double-check title and description

## Step 6: Preview locally

1. Run `npm run dev` in the project directory
2. Navigate to `http://localhost:4321/blog/your-slug`
3. Verify:
   - Article renders correctly
   - CTA block appears at the bottom
   - No formatting issues
   - All links work

## Step 7: Commit and push

1. Stage the new file: `git add src/content/blog/your-article.md`
2. Commit: `git commit -m "Add article: Your Article Title"`
3. Push to main: `git push origin main`
4. The site will automatically deploy

## Step 8: Cross-publish to LinkedIn

After the article is live on butdidyouwin.com:

1. Copy the article content
2. Post to LinkedIn
3. **Add this canonical notice at the top:**

   > *Originally published at [https://butdidyouwin.com/blog/your-slug](https://butdidyouwin.com/blog/your-slug)*

4. In the frontmatter of your Markdown file, add the LinkedIn URL to the `canonical` field:

   ```yaml
   canonical: "https://butdidyouwin.com/blog/your-slug"
   ```

   This tells search engines that the butdidyouwin.com version is the original.

## Important notes

- **Do not** use any other CMS or publishing tools
- **Do not** edit articles directly in `src/pages/blog/` (those are legacy files)
- **Always** use the template structure
- **Always** set `draft: false` before pushing to production
- **Always** include the canonical notice when cross-publishing

## Troubleshooting

**Article not showing on /blog:**
- Check that `draft: false` in frontmatter
- Verify the file is in `src/content/blog/`, not `src/pages/blog/`

**Build errors:**
- Ensure all frontmatter fields use proper YAML syntax
- Check that dates are in YYYY-MM-DD format
- Verify canonical URL is a valid URL (if provided)

**CTA not appearing:**
- The CTA is automatically added to all blog articles
- If missing, check the blog layout template
