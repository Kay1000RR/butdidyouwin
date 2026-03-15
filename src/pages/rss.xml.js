import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  const published = posts
    .filter((post) => post.data.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() -
        new Date(a.data.pubDate).getTime()
    );

  return rss({
    title: 'BUT DID YOU WIN Blog',
    description:
      'Independent forensic writing on paid media, attribution, and capital allocation.',
    site: context.site,
    items: published.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author ?? 'Kay Inoue',
    })),
    customData: `
      <language>en-us</language>
      <copyright>© ${new Date().getFullYear()} BUT DID YOU WIN. All rights reserved.</copyright>
      <managingEditor>kay@butdidyouwin.com (Kay Inoue)</managingEditor>
      <webMaster>kay@butdidyouwin.com (Kay Inoue)</webMaster>
      <ttl>60</ttl>
    `,
  });
}
