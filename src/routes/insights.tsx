import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/therapy-session.jpg";

export const Route = createFileRoute("/insights")({
    head: () => ({
        meta: [
            { title: "Insights | Articles, talks & resources — Recro Group" },
            {
                name: "description",
                content:
                    "Articles, talks, and resources from our therapists to help you navigate relationships, grief, and life.",
            },
        ],
    }),
    component: InsightsPage,
});

// Combined content array with both articles and videos
const allContent = [
    // FEATURED
    {
        id: "featured-1",
        type: "article",
        category: "Family",
        title: "From the foxhole to the front porch — a family perspective",
        excerpt:
            "With great joy and sadness Kenya welcomed home its troops. The readjustment from the family unit takes years. A look at reintegration and redeployment through the lens of family systems.",
        readTime: "8 min",
        featured: true,
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
    },

    // ARTICLES
    {
        id: "art-1",
        type: "article",
        category: "Relationships",
        title: "The perfect storm",
        excerpt:
            "As years go by, relationships tend to move and take all kinds of turns and twists.",
        readTime: "6 min",
    },
    {
        id: "art-2",
        type: "article",
        category: "Grief & Loss",
        title: "When grief shows up at the office",
        excerpt:
            "What to say (and not say) when a colleague returns to work after a loss.",
        readTime: "5 min",
    },
    {
        id: "art-3",
        type: "article",
        category: "Relationships",
        title: "Repair conversations for couples",
        excerpt:
            "A simple structure that turns most arguments into a chance to grow closer.",
        readTime: "7 min",
    },
    {
        id: "art-4",
        type: "article",
        category: "Parenting",
        title: "How children grieve differently",
        excerpt:
            "Why a child laughing the day after a loss doesn't mean they're 'fine'.",
        readTime: "6 min",
    },
    {
        id: "art-5",
        type: "article",
        category: "Therapy 101",
        title: "Five gentle ways to start therapy",
        excerpt:
            "Tiny first steps for people who've been thinking about it for a while.",
        readTime: "4 min",
    },
    {
        id: "art-6",
        type: "article",
        category: "Relationships",
        title: "Boundaries that breathe",
        excerpt:
            "Boundaries as care for the relationship — not walls against the person.",
        readTime: "5 min",
    },
    {
        id: "art-7",
        type: "article",
        category: "Workplace",
        title: "Anxiety, told simply",
        excerpt:
            "What anxiety is actually doing in the body, and how therapy quiets it.",
        readTime: "6 min",
    },

    // VIDEOS
    {
        id: "vid-1",
        type: "video",
        category: "Therapy 101",
        title: "Benefits of therapy",
        excerpt:
            "Why starting therapy is one of the most generous things you can do for yourself.",
        duration: "5:12",
        videoId: "yrtRlE6HlUU",
        thumbnail: "https://i.ytimg.com/vi/yrtRlE6HlUU/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "vid-2",
        type: "video",
        category: "Relationships",
        title: "Expectations in relationships",
        excerpt: "How unmet, uncommunicated expectations quietly breed disappointment.",
        duration: "4 min",
        videoId: "6yd3gLyuR_0",
        thumbnail: "https://i.ytimg.com/vi/6yd3gLyuR_0/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "vid-3",
        type: "video",
        category: "Parenting",
        title: "Parenting apart",
        excerpt:
            "Co-parenting through and after separation, with the child at the centre.",
        duration: "7 min",
        videoId: "JnfjyI05zSw",
        thumbnail: "https://i.ytimg.com/vi/JnfjyI05zSw/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "vid-4",
        type: "video",
        category: "Grief & Loss",
        title: "Invisible mourners",
        excerpt: "Children grieve too. Here's how to see, name and support it.",
        duration: "5:08",
        videoId: "vsTbJassTKA",
        thumbnail: "https://i.ytimg.com/vi/vsTbJassTKA/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "vid-5",
        type: "video",
        category: "Relationships",
        title: "Forgiveness",
        excerpt: "What forgiveness is — and what it isn't — in healing relationships.",
        duration: "6:15",
        videoId: "f3omumMGIw0",
        thumbnail: "https://i.ytimg.com/vi/f3omumMGIw0/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "vid-6",
        type: "video",
        category: "Workplace",
        title: "Boundaries that breathe",
        excerpt: "Boundaries as care, not walls — for couples, families and teams.",
        duration: "4:48",
        videoId: "",
        thumbnail: "",
        therapist: "Dr. Michelle Karume",
    },
];

// Popular videos for carousel
const popularVideos = [
    {
        id: "pop-1",
        title: "Benefits of therapy",
        duration: "5:12",
        videoId: "yrtRlE6HlUU",
        thumbnail: "https://i.ytimg.com/vi/yrtRlE6HlUU/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "pop-2",
        title: "Parenting apart",
        duration: "7:15",
        videoId: "JnfjyI05zSw",
        thumbnail: "https://i.ytimg.com/vi/JnfjyI05zSw/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "pop-3",
        title: "Invisible mourners",
        duration: "5:08",
        videoId: "vsTbJassTKA",
        thumbnail: "https://i.ytimg.com/vi/vsTbJassTKA/hqdefault.jpg",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "pop-4",
        title: "Boundaries that breathe",
        duration: "4:48",
        videoId: "",
        thumbnail: "",
        therapist: "Dr. Michelle Karume",
    },
    {
        id: "pop-5",
        title: "Anxiety, told simply",
        duration: "4:30",
        videoId: "",
        thumbnail: "",
        therapist: "Dr. Michelle Karume",
    },
];

const categories = [
    "All",
    "Articles",
    "Videos",
    "Relationships",
    "Grief & Loss",
    "Parenting",
    "Workplace",
    "Therapy 101",
];

// How many cards to show in the "Latest insights" teaser before expanding
const TEASER_COUNT = 4;

function VideoCard({
    video,
    compact = false,
}: {
    video: (typeof popularVideos)[0];
    compact?: boolean;
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!video.videoId) {
        return (
            <div
                className={`group rounded-2xl border border-border bg-card overflow-hidden ${compact ? "min-w-[280px]" : ""}`}
            >
                <div className="relative aspect-video bg-gradient-to-br from-primary-soft via-background to-surface-2 grid place-items-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_60%)]" />
                    <button
                        aria-label={`Play ${video.title}`}
                        className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-background/90 backdrop-blur shadow-lg text-primary-deep"
                    >
                        <Play size={20} className="ml-0.5" fill="currentColor" />
                    </button>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
                        {video.duration}
                    </div>
                </div>
                {!compact && (
                    <div className="p-5">
                        <h3 className="text-base font-semibold">{video.title}</h3>
                        {video.therapist && (
                            <p className="mt-1 text-xs text-muted-foreground">
                                {video.therapist}
                            </p>
                        )}
                    </div>
                )}
                {compact && (
                    <div className="p-4">
                        <h4 className="text-sm font-semibold line-clamp-2">
                            {video.title}
                        </h4>
                        {video.therapist && (
                            <p className="mt-1 text-xs text-muted-foreground">
                                {video.therapist}
                            </p>
                        )}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={`group rounded-2xl border border-border bg-card overflow-hidden card-lift ${compact ? "min-w-[280px]" : ""}`}
        >
            <div className="relative aspect-video bg-black overflow-hidden">
                {!isPlaying ? (
                    <>
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <button
                            onClick={() => setIsPlaying(true)}
                            aria-label={`Play ${video.title}`}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 backdrop-blur shadow-lg text-primary-deep group-hover:scale-110 transition-transform">
                                <Play size={20} className="ml-0.5" fill="currentColor" />
                            </span>
                        </button>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
                            {video.duration}
                        </div>
                    </>
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                )}
            </div>
            {!compact && (
                <div className="p-5">
                    <h3 className="text-base font-semibold">{video.title}</h3>
                    {video.therapist && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {video.therapist}
                        </p>
                    )}
                </div>
            )}
            {compact && (
                <div className="p-4">
                    <h4 className="text-sm font-semibold line-clamp-2">{video.title}</h4>
                    {video.therapist && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {video.therapist}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

function InsightsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAllInsights, setShowAllInsights] = useState(false);
    const [email, setEmail] = useState("");

    // Get featured content
    const featuredContent = allContent.find((c) => c.featured);

    // Filter non-featured content
    const filteredContentAll = allContent
        .filter((c) => !c.featured)
        .filter((content) => {
            if (activeCategory === "All") return true;
            if (activeCategory === "Articles") return content.type === "article";
            if (activeCategory === "Videos") return content.type === "video";
            return content.category === activeCategory;
        });

    // On "All", show a short teaser of the latest items until expanded.
    // Any specific category always shows its full set.
    const isTeaser = activeCategory === "All" && !showAllInsights;
    const filteredContent = isTeaser
        ? filteredContentAll.slice(0, TEASER_COUNT)
        : filteredContentAll;

    const handleSelectCategory = (cat: string) => {
        setActiveCategory(cat);
        setShowAllInsights(false);
    };

    return (
        <SiteShell>
            {/* HERO - MATCHING ABOUT US STRUCTURE */}
            <section className="relative bg-surface overflow-hidden">
                {/* Full-width background image positioned to the right */}
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Calming therapy setting"
                        className="absolute right-0 top-0 h-full w-full md:w-[65%] lg:w-[55%] object-cover"
                    />
                    {/* Gradient fade from left to right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="container-page py-12 md:py-16 lg:py-20">
                        <div className="max-w-xl lg:max-w-2xl">
                            <span className="eyebrow">INSIGHTS</span>
                            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                                Insights that support{" "}
                                <em className="font-serif italic text-primary-deep">healing</em>.
                            </h1>
                            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg text-base md:text-lg">
                                Articles, talks, and resources from our therapists to help you
                                navigate relationships, grief, and life.
                            </p>
                            <div className="mt-8">
                                <Button
                                    size="lg"
                                    className="rounded-full"
                                    onClick={() => {
                                        setActiveCategory("Articles");
                                        setTimeout(() => {
                                            document
                                                .getElementById("filter-bar")
                                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }, 100);
                                    }}
                                >
                                    View all Insights
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            <section id="filter-bar" className="bg-background border-y border-border sticky top-0 z-20">
                <div className="container-page py-4">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleSelectCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === cat
                                    ? "bg-primary text-white scale-105 shadow-md"
                                    : "bg-surface text-muted-foreground hover:bg-surface-2"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED INSIGHT */}
            {featuredContent && activeCategory === "All" && (
                <section className="bg-background">
                    <div className="container-page py-12 md:py-16">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-deep">
                            FEATURED ARTICLE
                        </span>
                        <div className="mt-6 grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-border bg-card p-6 md:p-8 card-lift">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                <img
                                    src={featuredContent.image}
                                    alt={featuredContent.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold">
                                    {featuredContent.category}
                                </span>
                                <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-snug">
                                    {featuredContent.title}
                                </h2>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    {featuredContent.excerpt}
                                </p>
                                <Link
                                    to="/blog"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep"
                                >
                                    Read article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* UNIFIED CONTENT GRID */}
            <section id="all-insights" className="bg-background">
                <div className="container-page py-12 md:py-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold transition-all duration-200">
                            {activeCategory === "All"
                                ? "Latest insights"
                                : `${activeCategory}`}
                        </h2>

                        {/* Teaser state (All, not yet expanded): take the user to the full Articles list */}
                        {isTeaser && (
                            <button
                                onClick={() => handleSelectCategory("Articles")}
                                className="text-sm font-medium text-primary-deep hover:underline inline-flex items-center gap-1"
                            >
                                View all insights <ArrowRight size={14} />
                            </button>
                        )}

                        {/* Filtered by a different category: offer a way to the full Articles list */}
                        {!isTeaser && activeCategory !== "All" && activeCategory !== "Articles" && (
                            <button
                                onClick={() => handleSelectCategory("Articles")}
                                className="text-sm font-medium text-primary-deep hover:underline inline-flex items-center gap-1"
                            >
                                View all insights <ArrowRight size={14} />
                            </button>
                        )}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300">
                        {filteredContent.map((content) => (
                            <article
                                key={content.id}
                                className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col card-lift animate-in fade-in duration-300"
                            >
                                {content.type === "video" && "videoId" in content && (
                                    <div className="relative aspect-video bg-black">
                                        <img
                                            src={
                                                content.thumbnail ||
                                                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                                            }
                                            alt={content.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                        <button
                                            aria-label={`Play ${content.title}`}
                                            className="absolute inset-0 grid place-items-center"
                                        >
                                            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 backdrop-blur shadow-lg text-primary-deep hover:scale-110 transition-transform">
                                                <Play size={20} className="ml-0.5" fill="currentColor" />
                                            </span>
                                        </button>
                                        {"duration" in content && content.duration && (
                                            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-medium">
                                                {content.duration}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {content.type === "article" && (
                                    <div className="relative aspect-video bg-gradient-to-br from-primary-soft via-background to-surface-2">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_60%)]" />
                                    </div>
                                )}

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs flex-wrap">
                                        <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary-deep font-semibold">
                                            {content.category}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-surface text-muted-foreground font-medium">
                                            {content.type === "video" ? "Video" : "Article"}
                                        </span>
                                        {"readTime" in content && content.readTime && (
                                            <span className="text-muted-foreground">
                                                {content.readTime} read
                                            </span>
                                        )}
                                        {"duration" in content && content.duration && (
                                            <span className="text-muted-foreground">
                                                {content.duration}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold leading-snug line-clamp-2">
                                        {content.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                                        {content.excerpt}
                                    </p>
                                    <Link
                                        to={content.type === "video" ? "/media" : "/blog"}
                                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep"
                                    >
                                        {content.type === "video" ? "Watch now" : "Read article"}{" "}
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* POPULAR VIDEOS CAROUSEL */}
            {activeCategory === "All" && (
                <section className="bg-surface border-y border-border">
                    <div className="container-page py-12 md:py-16">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-deep">
                                    POPULAR VIDEOS
                                </span>
                                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                                    Most watched
                                </h2>
                            </div>
                            <button
                                onClick={() => {
                                    setActiveCategory("Videos");
                                    setTimeout(() => {
                                        document
                                            .getElementById("filter-bar")
                                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }, 100);
                                }}
                                className="text-sm font-medium text-primary-deep hover:underline hidden md:inline-flex items-center gap-1"
                            >
                                View all videos <ArrowRight size={14} />
                            </button>
                        </div>

                        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                            {popularVideos.map((video) => (
                                <VideoCard key={video.id} video={video} compact />
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setActiveCategory("Videos");
                                setTimeout(() => {
                                    document
                                        .getElementById("filter-bar")
                                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, 100);
                            }}
                            className="mt-6 text-sm font-medium text-primary-deep hover:underline md:hidden inline-flex items-center gap-1"
                        >
                            View all videos <ArrowRight size={14} />
                        </button>
                    </div>
                </section>
            )}

            {/* NEWSLETTER CTA */}
            <section className="bg-background">
                <div className="container-page py-12 md:py-16">
                    <div className="rounded-3xl border border-border bg-card p-6 md:p-8 card-lift flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                        <div className="flex items-center gap-4 md:flex-1">
                            <span className="shrink-0 inline-grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary-deep">
                                <Mail size={24} strokeWidth={1.5} />
                            </span>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                                    Stay connected
                                </h2>
                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                    Get new insights, videos, and resources delivered to your
                                    inbox.
                                </p>
                            </div>
                        </div>
                        <form
                            className="flex flex-col sm:flex-row gap-3 md:w-auto md:min-w-[380px]"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle newsletter subscription
                                console.log("Subscribe:", email);
                            }}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="flex-1 px-5 py-3 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="rounded-full shrink-0"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground text-center md:text-left">
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </section>
        </SiteShell>
    );
}