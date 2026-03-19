# Blog Publishing Workflow

This document outlines the exact workflow for publishing blog articles on butdidyouwin.com.

## Step 1: Write in Google Docs

1. Open the official article template in Google Docs
2. Follow the template structure exactly (in this order):
   - **TL;DR Verdict** - 2-3 sentences giving the bottom-line conclusion
   - **Summary** - 2-4 factual sentences explaining what the article covers
   - **Who This Is For** - Specific reader profile
   - **Definitions** - Key terms defined for clarity
   - **Why This Article Exists** - Context and motivation
   - **The Actual Business Problem** - Real-world problem addressed
   - **What Most Teams Get Wrong** - Common mistakes
   - **The Forensic Framework** - With 4 subsections:
     - Revenue Impact
     - Sales Behavior Impact
     - Attribution Validity
     - Capital Allocation Discipline
   - **How to Validate This in Practice** - Concrete validation steps
   - **Example Scenario** - Specific example illustrating the framework
   - **What Changes After You Do This Correctly** - Outcomes and improvements
   - **FAQ** - Frequently asked questions with answers
   - **Final Takeaway** - Concise final statement

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
title: 'Your Article Title'
description: 'A concise description for SEO and social sharing (150-160 characters)'
pubDate: '2025-02-10'
updatedDate: ''
canonical: ''
draft: true
author: 'Keinosuke Inoue'
---
```

### Frontmatter field guide:

- **title**: The article headline (will be the H1)
- **description**: SEO meta description
- **pubDate**: Publication date in YYYY-MM-DD format
- **updatedDate**: (Optional) Last update date if article is revised
- **canonical**: (Optional) If cross-publishing, put the canonical URL here
- **draft**: Set to `true` while writing, `false` when ready to publish
- **author**: (Optional) Author name, defaults to "Keinosuke Inoue" if omitted

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
   - All sections appear in the correct order
   - CTA block appears at the bottom
   - No formatting issues
   - All links work

## Step 7: Commit and push

1. Stage the new file: `git add src/content/blog/your-article.md`
2. Commit: `git commit -m "Add article: Your Article Title"`
3. Push to main: `git push origin main`
4. The site will automatically deploy

## Step 8: Publish to LinkedIn after site is live

After the article is live on butdidyouwin.com:

1. Copy the article content
2. Post to LinkedIn
3. **Add this canonical notice at the bottom of the LinkedIn article:**

   > _Originally published at [https://butdidyouwin.com/blog/your-slug](https://butdidyouwin.com/blog/your-slug)_

4. In the frontmatter of your Markdown file, add the butdidyouwin.com URL to the `canonical` field:

   ```yaml
   canonical: 'https://butdidyouwin.com/blog/your-slug'
   ```

   This tells search engines that the butdidyouwin.com version is the original.

## Article Structure Requirements

### Required Sections (in order):

1. TL;DR Verdict
2. Summary
3. Who This Is For
4. Definitions
5. Why This Article Exists
6. The Actual Business Problem
7. What Most Teams Get Wrong
8. The Forensic Framework (with 4 subsections)
9. How to Validate This in Practice
10. Example Scenario
11. What Changes After You Do This Correctly
12. FAQ
13. Final Takeaway

### Heading Hierarchy:

- Article title → H1 (automatically generated from frontmatter)
- Major sections → H2 (## in Markdown)
- Framework subsections → H3 (### in Markdown)
- FAQ questions → H3 (### in Markdown)

### LLM/AEO Optimization:

All sections must be:

- In the main document flow
- Visible to crawlers
- Readable without JavaScript
- Using semantic HTML headings (not styled divs)

The **TL;DR Verdict**, **Definitions**, and **FAQ** sections are especially important for LLM/AEO systems.

## Important notes

- **Do not** use any other CMS or publishing tools
- **Do not** edit articles directly in `src/pages/blog/` (those are legacy files)
- **Always** use the template structure with all required sections
- **Always** set `draft: false` before pushing to production
- **Always** include the canonical notice at the bottom when cross-publishing to LinkedIn

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

**Sections not rendering correctly:**

- Ensure all major sections use ## (H2) in Markdown
- Ensure framework subsections use ### (H3) in Markdown
- Do not skip heading levels
