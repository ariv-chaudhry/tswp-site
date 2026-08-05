# Content & Assets TODO

Content migrated from https://www.tswp.org/ (Wix). Items below could not be fully extracted or need team-provided assets.

## Student Publications Page

Source: https://www.tswp.org/student-publications

### Extracted and wired
- Page intro/hero copy (“Water Treatment Resources and Education”)
- 2 featured articles with titles, authors, abstracts/summaries
- Full article pages migrated to Next.js:
  - `/spud-cells`
  - `/human-adenoviruses-in-drinking-water`
- SpudCells PDF + Adenovirus PDF download URLs
- Nav link added after About
- Publications cards now link to internal article routes

### Missing / incomplete
- **Publication dates** — not shown on the listing page or article pages (no date field populated)
- **Article cover/poster images** — Wix uses poster graphics; do not hotlink. Add locally:
  - `/public/images/publications/spud-cells.jpg` (Jr Scientific Team Publication 1 poster)
  - `/public/images/publications/human-adenoviruses.jpg` (Jr Scientific Team Publication 2 poster)
- **In-article figures** (placeholders only for now):
  - SpudCells liposome figure (Elsevier note exists; image not migrated)
  - Adenovirus membrane pore-size chart → `/public/images/publications/adenoviruses-table.jpg`
  - Adenovirus “Virus Particle Closeup” hero/figure from Wix (optional)
- **Author affiliation lines** on cards — available on article pages; cards list author names only
- **Any additional publications beyond the 2 featured cards** — listing page only showed these two items
- PDF files are still hosted on Wix CDN (`tswp.org/_files/...`) — consider rehosting under `/public/docs/` later

### Ask the team
1. Confirm publish dates for both articles (if they should appear on cards)
2. Export the two poster images for `/public/images/publications/`
3. Export in-article figures (liposome diagram, membrane size chart, virus closeup)
4. Optionally rehost PDF files under `/public/docs/`

## Missing / unverified from Wix

### How It Works — Step 3
- On the live homepage, step 2 and step 3 use **identical** text (“100% of donations go to said listed project…”).
- The Next.js site uses the How It Works intro line for step 3: “Our partners handle the engineering. Communities benefit from clean water.”
- **Ask the team:** confirm the intended unique copy for step 3.

### Volunteer Interest Form URL
- Wix “Interest Form” buttons on `/blank-5` (Volunteering) did not expose a public form URL in the scrape.
- Currently linked to `/contact`.
- **Ask the team:** provide the Google Form / Typeform / Wix form URL for volunteer interest.

### Team LinkedIn URLs
- About page shows “LinkedIn” labels per member, but hrefs were not extractable from the accessibility tree / DOM scrape.
- **Ask the team:** LinkedIn profile URLs for Valerie Mao, Sophia Yenson, Grace Churney, Dhruv Joshi, Ron Blutrich, Dr. Denise Rebello, Dr. Paul Nyangaresi.

### Incorporation Certificate
- About page has “View Incorporation Certificate” but the document URL was not extractable.
- **Ask the team:** PDF or public link for the Canadian NGO incorporation certificate.
- Place file at e.g. `/public/docs/incorporation-certificate.pdf` and wire the About CTA.

### Funding Breakdown amounts
- Pilot page only lists categories: equipment, labour/deployment, organizational budget.
- **Ask the team:** dollar amounts / pie chart data if they want a detailed breakdown published.

### “Currently Supported By” logos
- Homepage section exists on Wix, but accessible sponsor names/logo files were not extractable.
- Next.js currently lists known project partners from site copy: Clear Inc., Mitacs, MW Technologies, A Drop of Hope.
- **Ask the team:** confirm exact supporter list and provide logo files.

### Home page 12,000 KM Challenge date copy
- Homepage Wix text describes a 24-hour event (July 4–5).
- Challenge microsite (https://tswp12k.vercel.app/) describes race week **Aug 2–9** and $15 Zeffy registration.
- Fundraisers page uses the fuller challenge-site details; home preview keeps the shorter homepage summary.
- **Ask the team:** which date messaging is current.

### Pilot “I. Introduction” body
- Wix section heading exists with mainly a “See Current Projects” control; full intro copy lives in the page lead paragraphs (migrated).
- No additional unique Introduction body was found beyond that.

## Image assets to add under `/public/images`

| Path | Used on | Source note |
|------|---------|-------------|
| `/images/hero.jpg` or hero video | Home (optional) | Wix uses symposium video — export if desired |
| `/public/videos/water-bg.mp4` | Home hero background | Prefer hosting locally if rights allow; currently using temporary Wix CDN URL |
| `/images/project-kenya.jpg` | Home featured project | Kenya pilot photo |
| `/images/pilot/figure-1.jpg` | Pilot | Rainwater/UV system figure |
| `/images/pilot/figure-2.jpg` | Pilot | School toilets conditions |
| `/images/pilot/figure-4.jpg` | Pilot | Banner signed by 100+ students |
| `/images/pilot/figure-5.jpg` | Pilot | Students/staff at academy, 2024 install |
| `/images/fundraisers/12000-km.jpg` | Home + Fundraisers | Running challenge visual |
| `/images/fundraisers/hackathon.jpg` | Fundraisers | Hackathon placeholder |
| `/images/team/*` | About | ✅ Done — all 7 team photos added |
| `/images/sponsors/clear-inc.png` | Home + Sponsorships | Logo |
| `/images/sponsors/mitacs.png` | Home + Sponsorships | Logo |
| `/images/sponsors/mw-technologies.png` | Home + Sponsorships | Logo |
| `/images/sponsors/a-drop-of-hope.png` | Home + Sponsorships | Logo |
| Logo mark for navbar/footer | Layout | Replace “T” circle |

Do **not** hotlink `static.wixstatic.com` URLs in production — export and host locally.

## Forms / backend (intentionally not built)

- Merchandise email signup (Home) — currently mailto fallback
- Donation notify signup (Donate) — currently mailto fallback
- Contact form — currently mailto fallback
- **Ask the team:** preferred form provider (Formspree, Google Forms, Resend, etc.)

## External links already wired

- Instagram: https://www.instagram.com/thestudentwaterproject
- Challenge site: https://tswp12k.vercel.app/
- Zeffy campaign: https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge
- Mitacs article: https://www.mitacs.ca/our-innovation-insights/how-a-bc-researcher-is-tackling-water-challenges/
- Student Leader Application (Google Form)
- Proposal Guiding Document (Wix-hosted `.docx` — consider rehosting under `/public/docs/`)

## Typos corrected from Wix (factual content preserved)

- “comunites” → communities
- “Macmaster” → McMaster
- “Differance” → Difference
- “Hygeine” → Hygiene
- “th camera” → the camera
- “persuing” → pursuing
- “oppertunity” → opportunity
- “Incorperation” → Incorporation
- “Rianyabao” heading spelling normalized to **Rianyabayo** (dominant body spelling on Wix)
- Sanitation bullets reassigned under “Sanitation and Hygiene” (Wix had them under a mislabeled Water Treatment heading)
