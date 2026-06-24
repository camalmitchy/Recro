# Homepage Hero Section Update

## Instructions
Replace the hero section in `/src/routes/index.tsx` (starting from line 73 `{/* HERO */}` to line 154 `</section>`) with the code below:

## New Hero Section Code

```tsx
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Full-width background image */}
        <img
          src={heroFamily}
          alt="A diverse family sitting together in a bright sunlit therapy room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Light overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/20 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-center pt-12 md:pt-20 pb-16 md:pb-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Restore your Life.{" "}
              </h1>
              <p className="mt-6 text-lg text-foreground/90 leading-relaxed max-w-xl">
                A compassionate space for healing, growth, and emotional wellness — for individuals, couples, families, and organisations navigating life's most difficult moments.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="/booking" className="btn-primary">
                  Book a session <ArrowRight size={16} />
                </a>
                <Link to="/services" className="btn-secondary">
                  Explore services
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: "7+", v: "Years of care" },
                  { k: "2.4k", v: "Sessions a year" },
                  { k: "9", v: "Camp cohorts" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="text-3xl font-semibold text-foreground">{s.k}</dt>
                    <dd className="mt-1 text-xs text-foreground/70">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
```

## What This Does

1. **Full-width background image** - The hero family image covers the entire hero section edge-to-edge
2. **Light gradient overlay** - `from-white/60 via-white/40 to-white/20` ensures text readability
3. **Content positioned left** - All content (heading, description, buttons, stats) on the left side
4. **Responsive min-height** - 600px on mobile, 700px on desktop
5. **Maintains all existing content** - Title, description, buttons, and stats grid

## Changes Summary

- ❌ Removed: Grid layout with separate image column
- ❌ Removed: Rounded corners and border on image
- ❌ Removed: Commented out floating cards
- ✅ Added: Full-width background image
- ✅ Added: Gradient overlay for text visibility
- ✅ Added: Flexbox layout for content positioning
- ✅ Added: Minimum height for consistent hero size

Save the file after making the change and refresh your browser to see the full-width hero!
