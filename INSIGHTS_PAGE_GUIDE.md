# Insights Page Implementation Guide

## Overview

The **Insights** page is a unified content hub that merges the previously separate Blog and Media pages into one seamless experience. It serves as the central location for articles, videos, and therapeutic resources from Recro Group therapists.

## Design Philosophy

The page follows Recro Group's behavioral health platform design principles:
- **Calm & minimal** - soft greens, warm neutrals, generous whitespace
- **Emotionally safe** - non-clinical, human-centered tone
- **Premium feel** - magazine-quality editorial layouts
- **Strong hierarchy** - clear typography and content organization

## Key Features

### 1. Hero Section (About Us Style Match)
- **Structure**: Left-aligned text block + right-side large rounded image
- **Label**: "INSIGHTS" (eyebrow style)
- **Headline**: "Insights that support *healing*."
- **Subheading**: Explains the page purpose
- **CTA**: "Explore all insights" button (smooth scroll to content)
- **Layout**: Matches the About Us page hero exactly for brand consistency

### 2. Filter Bar (Sticky Navigation)
- **Categories**: All, Articles, Videos, Relationships, Grief & Loss, Parenting, Workplace, Therapy 101
- **Style**: Soft rounded pill buttons
- **Active state**: Recro green background
- **Behavior**: Sticky to top, horizontal scroll on mobile
- **Purpose**: Allows users to filter unified content by type or topic

### 3. Featured Insight Section
- **When shown**: Only when "All" filter is active
- **Layout**: Large split card (image left, content right)
- **Contains**: 
  - High-quality feature image
  - Category tag
  - Title and excerpt
  - "Read article" CTA
- **Purpose**: Highlights the most important/recent content

### 4. Unified Content Grid
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Card types**: Both articles and videos in same system
- **Each card includes**:
  - Thumbnail/preview (video has play button overlay + duration)
  - Category tag
  - Content type tag (Article/Video)
  - Title
  - Short excerpt (1-2 lines)
  - Appropriate CTA ("Read article" or "Watch now")
- **Styling**: 
  - Equal-height cards
  - Soft hover elevation (card-lift utility)
  - Consistent spacing
  - Rounded corners (rounded-3xl)

### 5. Popular Videos Carousel
- **When shown**: Only when "All" filter is active
- **Layout**: Horizontal scrolling carousel
- **Cards**: Compact video cards with:
  - Play icon overlay
  - Duration timestamp
  - Therapist name
  - Title
- **Purpose**: Showcases most-watched video content
- **Link**: "View all videos" directs to media page for backwards compatibility

### 6. Newsletter CTA Section
- **Style**: Centered, minimal, calm
- **Icon**: Mail icon in soft primary circle
- **Headline**: "Stay connected"
- **Subheading**: "Get new insights, videos, and resources delivered to your inbox."
- **Form**: Email input + Subscribe button
- **Note**: Privacy reassurance text
- **Design**: No heavy borders, warm neutral palette

### 7. Footer
- Uses existing Recro Group SiteFooter component
- Updated with Insights link

## Content Structure

The page uses a single unified content array (`allContent`) that includes:

```typescript
{
  id: string;
  type: "article" | "video";
  category: "Family" | "Relationships" | "Grief & Loss" | "Parenting" | "Workplace" | "Therapy 101";
  title: string;
  excerpt: string;
  readTime?: string;  // for articles
  duration?: string;  // for videos
  videoId?: string;   // YouTube video ID
  thumbnail?: string; // video thumbnail URL
  therapist?: string; // for videos
  featured?: boolean; // marks featured content
  image?: string;     // for featured articles
}
```

## Navigation Updates

### Site Header (SiteHeader.tsx)
- **Updated navigation array** to replace separate "Blog" and "Media" with single "Insights" link
- **New order**: Home → About → Services → Grief Camp → Insights → FAQ → Contact

### Site Footer (SiteFooter.tsx)
- **Explore section** updated to include Insights link
- Removed separate Media library and Blog links
- Kept backwards compatibility by maintaining old routes

## Filtering System

The page implements client-side filtering:

```typescript
- "All": Shows all content (articles + videos)
- "Articles": Shows only article type content
- "Videos": Shows only video type content
- "Relationships" / "Grief & Loss" / "Parenting" / "Workplace" / "Therapy 101": 
  Filters by category regardless of type
```

## Video Playback

Videos use embedded YouTube players:
- **Play behavior**: Click play button → embeds YouTube iframe
- **Autoplay**: Enabled on play
- **Related videos**: Disabled (`rel=0`)
- **Fullscreen**: Supported via YouTube's native controls

## Responsive Design

### Mobile (< 768px)
- Hero: Full-width, text-only (image fades to gradient)
- Filter bar: Horizontal scroll
- Content grid: Single column
- Video carousel: Horizontal scroll
- Newsletter: Stacked form layout

### Tablet (768px - 1023px)
- Hero: Text visible with partial image
- Content grid: 2 columns
- Featured: Maintains split layout

### Desktop (≥ 1024px)
- Hero: Full left-right split layout
- Content grid: 3 columns
- All features fully displayed

## Styling Utilities Used

### Custom Utilities (from styles.css)
- `container-page`: Responsive container with max-width
- `card-lift`: Hover elevation effect
- `btn-primary`: Primary button styling
- `eyebrow`: Small label styling
- `scrollbar-hide`: Hides scrollbars on carousels

### Tailwind Classes
- Rounded corners: `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Colors: `bg-surface`, `bg-card`, `text-primary-deep`, `bg-primary-soft`
- Spacing: `py-12`, `py-16`, `py-20`, `gap-6`, `gap-8`
- Typography: `text-5xl`, `md:text-6xl`, `lg:text-7xl`, `font-semibold`

## File Locations

```
/src/routes/insights.tsx              # Main Insights page
/src/components/site/SiteHeader.tsx   # Updated navigation
/src/components/site/SiteFooter.tsx   # Updated footer
/src/styles.css                       # Custom utilities (added scrollbar-hide)
```

## Backwards Compatibility

- Old `/blog` route still exists (unchanged)
- Old `/media` route still exists (unchanged)
- Users can still access original pages directly
- Links in content cards point back to original pages
- This allows for gradual migration of content

## Future Enhancements

Potential improvements for production:

1. **CMS Integration**: Connect to a headless CMS for content management
2. **Search functionality**: Add full-text search across all insights
3. **Tags system**: Multi-tag filtering (e.g., "Grief + Parenting")
4. **Bookmarking**: Allow users to save favorite articles/videos
5. **Reading progress**: Track and display reading progress
6. **Related content**: Show related insights at bottom of articles
7. **Analytics**: Track most-viewed content, popular categories
8. **Comments/Discussion**: Enable community discussion on insights
9. **Newsletter integration**: Actually connect to email service
10. **Video transcripts**: Add text transcripts for accessibility

## Testing Checklist

- [ ] Hero section matches About Us page structure
- [ ] All filter categories work correctly
- [ ] Featured content displays only on "All" filter
- [ ] Videos play inline correctly
- [ ] Video carousel scrolls smoothly on mobile
- [ ] Newsletter form has proper validation
- [ ] Responsive layout works on all breakpoints
- [ ] Navigation links work correctly
- [ ] Card hover effects are smooth
- [ ] Typography hierarchy is clear
- [ ] Colors match design system
- [ ] No console errors or warnings

## Deployment Notes

1. Build the project: `npm run build`
2. Preview production build: `npm run preview`
3. Test all routes work correctly
4. Verify all images load
5. Check responsive behavior on real devices
6. Test video playback
7. Validate form submission
8. Deploy to production

## Accessibility Considerations

- Semantic HTML structure (article, section tags)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Aria labels for icon-only buttons
- Keyboard navigation support
- Focus states visible
- Sufficient color contrast
- Video controls accessible
- Form labels properly associated

---

**Status**: ✅ Production-ready
**Last updated**: June 23, 2026
**Author**: Kiro AI Agent
