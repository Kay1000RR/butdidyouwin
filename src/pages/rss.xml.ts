import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { COMPANY, CONTACT } from '../data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  const published = posts
    .filter((post) => post.data.draft !== true)
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  return rss({
    title: `${COMPANY.name} Blog`,
    description: 'Independent forensic writing on paid media, attribution, and capital allocation.',
    site: context.site?.toString() ?? COMPANY.url,
    items: published.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author ?? 'Kay Inoue',
    })),
    customData: `
      <language>en-us</language>
      <copyright>© ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.</copyright>
      <managingEditor>${CONTACT.email} (Kay Inoue)</managingEditor>
      <webMaster>${CONTACT.email} (Kay Inoue)</webMaster>
      <ttl>60</ttl>
    `,
  });
}
