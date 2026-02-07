import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'BUT DID YOU WIN Blog',
    description: 'Insights on paid media diagnosis, advertising efficiency, and business outcomes from an independent auditor.',
    site: context.site,
    items: [
      {
        title: '5 Signs Your Paid Media Accounts Need a Fresh Set of Eyes',
        pubDate: new Date('2025-01-15'),
        description: 'Even well-managed paid media accounts accumulate inefficiencies over time. Here are five symptoms that suggest it\'s time for an independent evaluation.',
        link: '/blog/5-signs-fresh-eyes-needed/',
        author: 'Kay Inoue',
        categories: ['Paid Media', 'Audit', 'Optimization'],
      },
      {
        title: 'Common Optimization Opportunities in Mature Paid Media Accounts',
        pubDate: new Date('2025-01-10'),
        description: 'The hidden cost of wasted ad spend and common inefficiencies found in mature advertising accounts.',
        link: '/blog/cost-of-wasted-ad-spend/',
        author: 'Kay Inoue',
        categories: ['Paid Media', 'Waste', 'Optimization'],
      },
      {
        title: 'How Pricing Models Shape Paid Media Recommendations',
        pubDate: new Date('2025-01-05'),
        description: 'Understanding how percentage-of-spend pricing creates conflicts of interest in paid media management.',
        link: '/blog/percentage-pricing-conflicts/',
        author: 'Kay Inoue',
        categories: ['Agency', 'Pricing', 'Conflicts of Interest'],
      },
    ],
    customData: `
      <language>en-us</language>
      <copyright>© ${new Date().getFullYear()} BUT DID YOU WIN. All rights reserved.</copyright>
      <managingEditor>kay@butdidyouwin.com (Kay Inoue)</managingEditor>
      <webMaster>kay@butdidyouwin.com (Kay Inoue)</webMaster>
      <ttl>60</ttl>
    `,
  });
}
