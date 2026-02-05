import rss from '@astrojs/rss';

export async function GET(context) {
  // Define blog posts manually (or import from content collection if using one)
  const posts = [
    {
      title: "5 Signs Your Paid Media Accounts Need a Fresh Set of Eyes",
      pubDate: new Date('2025-01-15'),
      description: "Even well-managed paid media accounts accumulate inefficiencies over time. Here are five symptoms that suggest it's time for an independent evaluation.",
      link: "/blog/5-signs-fresh-eyes-needed/",
    },
    {
      title: "The True Cost of Wasted Ad Spend",
      pubDate: new Date('2025-01-15'),
      description: "Understanding how inefficient paid media campaigns impact your bottom line beyond the obvious metrics.",
      link: "/blog/cost-of-wasted-ad-spend/",
    },
    {
      title: "Why Percentage-Based Pricing Creates Conflicts of Interest",
      pubDate: new Date('2025-01-15'),
      description: "An examination of how agency compensation models influence the advice you receive about your ad spend.",
      link: "/blog/percentage-pricing-conflicts/",
    },
  ];

  return rss({
    title: 'BUT DID YOU WIN | Paid Media Insights',
    description: 'Independent analysis and insights on paid media optimization, Google Ads, Meta Ads, and marketing accountability from Kay Inoue.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.pubDate,
      description: post.description,
      link: post.link,
      author: 'kay@butdidyouwin.com (Kay Inoue)',
      categories: ['Paid Media', 'Google Ads', 'Meta Ads', 'Marketing'],
    })),
    customData: `<language>en-us</language>
<managingEditor>kay@butdidyouwin.com (Kay Inoue)</managingEditor>
<webMaster>kay@butdidyouwin.com (Kay Inoue)</webMaster>
<copyright>Copyright ${new Date().getFullYear()} BUT DID YOU WIN</copyright>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<ttl>60</ttl>`,
  });
}
