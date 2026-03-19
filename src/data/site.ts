/**
 * Centralized business data for BUT DID YOU WIN.
 *
 * Single source of truth for values that appear across multiple pages,
 * components, layouts, and structured data schemas. Editing a value here
 * propagates it everywhere.
 */

// ---------------------------------------------------------------------------
// Company
// ---------------------------------------------------------------------------
export const COMPANY = {
  name: 'BUT DID YOU WIN',
  abbreviation: 'BDYW',
  url: 'https://butdidyouwin.com',
  slogan: 'Verdicts, not pitches.',
  description:
    'Independent paid media auditor providing forensic audits and optimization services. Flat-fee pricing eliminates conflicts of interest.',
  founded: 2025,
} as const;

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const CONTACT = {
  phone: {
    raw: '+17027109325',
    display: '(702) 710-9325',
  },
  email: 'kay@butdidyouwin.com',
  location: {
    city: 'Las Vegas',
    region: 'NV',
    regionFull: 'Nevada',
    country: 'US',
    latitude: '36.1699',
    longitude: '-115.1398',
  },
} as const;

// ---------------------------------------------------------------------------
// Founder
// ---------------------------------------------------------------------------
export const FOUNDER = {
  name: 'Kay Inoue',
  jobTitle: 'Independent Paid Media Auditor',
  linkedIn: 'https://www.linkedin.com/in/kayinoue',
  image: `${COMPANY.url}/kay-inoue-headshot.jpg`,
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavItem[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Method', href: '/method' },
  { label: 'Fit', href: '/fit' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'For Agencies', href: '/for-agencies' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
] as const;

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------
export const CTA = {
  primary: {
    label: 'Request Diagnosis',
    href: '/contact',
  },
} as const;

// ---------------------------------------------------------------------------
// SEO defaults
// ---------------------------------------------------------------------------
export const SEO = {
  titleSuffix: 'BUT DID YOU WIN',
  ogImage: `${COMPANY.url}/og-image.png`,
  ogImageAlt: 'BUT DID YOU WIN - Independent Paid Media Auditor',
  locale: 'en_US',
  twitterCard: 'summary_large_image' as const,
  themeColor: '#1B3A6D',
  gaId: 'G-570BH85RLH',
} as const;
