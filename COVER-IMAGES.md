# Blog Cover Images — Guide

Last updated: 2026-07-31

Every published post has a cover image. Until now only 6 of the prompts that
produced them were written down, so each new cover was re-invented from scratch
and the look drifted. This file records a prompt for all 33 published posts,
reverse-engineered from the images actually on disk, so covers stay consistent.

---

## Tool

**Gemini** is the current generator. Paste a prompt, download, convert to WebP.

Bing Image Creator (bing.com/images/create, DALL-E 3, free) was the original
tool and still works if Gemini refuses a prompt. Covers 1-6 below were made
with it, which is why they read slightly flatter than the later ones.

---

## House style

Every prompt below is built on the same base. Keep it intact when writing new
ones — it is the reason the blog index looks like one publication rather than
thirty-three unrelated stock images.

```
Cinematic 16:9 blog cover, near-black background, deep navy and black,
cyan and violet neon accents, glowing translucent glass panels,
thin wireframe polygon network, floating light particles, volumetric haze,
soft rim lighting, high contrast, photoreal 3D render, no text, no letters,
no words, no logos, no watermarks
```

Three compositions cover almost every post. Pick by what the post is:

| Mode | Use for | Looks like |
|---|---|---|
| **Desk scene** | Reviews, tutorials about one tool | Dark desk at night, laptop, floating holographic UI panels, city bokeh through a window |
| **Abstract** | Guides, pricing, concept posts | Glowing glass planes or cards suspended in dark haze, wireframe connections, no physical objects |
| **Isometric** | Systems, agents, workflows, listicles | Dark isometric grid of connected platforms, circuit traces, glowing nodes |

### Rules

1. **Always end the prompt with "no text, no letters, no words."** Image models
   render fake UI text as gibberish. The Gemini cover on `chatgpt-vs-google-gemini`
   is the cautionary example — it shows visible garbled strings like
   "Integratis all tasks" and should be regenerated.
2. **No real logos.** Suggest a brand with colour, not its mark. Purple-green for
   ChatGPT, orange-clay for Claude, blue-to-magenta gradient for Gemini.
3. **No faces.** Robots and hands are fine, human faces are not.
4. **Never light-background.** One cover broke this and it stands out badly in
   the index.
5. Green and gold accents are allowed for money topics. Everything else stays
   cyan/violet.

---

## Technical spec

- **Aspect ratio:** 16:9
- **Dimensions:** 1376x768 minimum, 1672x941 preferred
- **Format:** WebP
- **Target file size:** under 120 KB. The site norm is 38-112 KB.
  Anything over 200 KB is a mobile page-experience problem and gets re-encoded.
- **Naming:** `<post-slug>-cover.webp` for anything new. Older files use
  shortened names, listed per post below.
- **Optimizer:** `node scripts/optimize-images.mjs` converts and compresses.

---

## Prompts by post

### Reviews

**Cursor AI Review 2026** — `cursor-ai-review-2026-cover.webp`
```
Cinematic 16:9 blog cover, dark home office at night, open laptop on a wooden
desk showing a code editor with cyan and violet syntax highlighting, glowing
wireframe polygon network floating above the screen, three translucent
holographic terminal panels hovering in the air, mechanical keyboard with
purple backlight, black coffee mug with steam, city lights bokeh through a
window, volumetric haze, photoreal, no text, no letters, no logos
```

**ChatGPT Plus Review** — `chatgpt-plus-cover.webp`
```
Cinematic 16:9 blog cover, dark premium product shot, glowing abstract knot
emblem on a black glass surface, purple and green light reflection, luxury
minimalist aesthetic, volumetric haze, dramatic rim lighting, no text,
no letters, no logos
```

**Claude AI Review** — `claude-ai-review-cover.webp`
```
Cinematic 16:9 blog cover, warm clay-orange glowing orb suspended in a
near-black space, thin wireframe polygon network radiating outward, soft
violet counter-light, floating light particles, volumetric haze, photoreal
3D render, no text, no letters, no logos
```

**ElevenLabs Review 2026** — `elevenlabs-review-2026-cover.webp`
```
Cinematic 16:9 blog cover, glowing cyan audio waveform ribbon flowing through
a dark studio space, translucent glass panels showing abstract equaliser bars,
studio microphone silhouette in soft focus, violet rim light, volumetric haze,
photoreal 3D render, no text, no letters, no logos
```

**Grammarly Review 2026** — `grammarly-review-cover.webp`
```
Cinematic 16:9 blog cover, dark desk scene, glowing document panel floating
above a laptop with cyan correction marks and underlines rendered as abstract
glowing strokes rather than readable words, green accent light, violet
ambience, volumetric haze, photoreal, no text, no letters, no logos
```

**Notion AI Review 2026** — `notion-ai-review-2026-cover.webp`
```
Cinematic 16:9 blog cover, dark workspace, stacked translucent glass cards
arranged like a database board floating in space, cyan and violet edge glow,
thin wireframe connections between cards, floating particles, volumetric haze,
photoreal 3D render, no text, no letters, no logos
```

**Perplexity AI Review** — `perplexity-ai-review-cover.webp`
```
Cinematic 16:9 blog cover, glowing search beam cutting through a dark space,
translucent glass result cards fanning outward with citation nodes connected
by thin cyan wireframes, teal and violet accents, volumetric haze, photoreal
3D render, no text, no letters, no logos
```

---

### Comparisons

**Cursor vs GitHub Copilot** — `cursor-vs-github-copilot-cover.webp`
```
Cinematic 16:9 blog cover, split composition on a near-black background, two
glowing translucent code-editor panels facing each other, the left one violet
toned and the right one cyan toned, thin wireframe polygon bridge arcing
between them, floating light particles, volumetric haze, versus tension,
photoreal 3D render, no text, no letters, no logos
```

**ChatGPT vs Google Gemini** — `chatgpt-vs-google-gemini-cover.webp`
> Needs regeneration. The current file is light-background, shows garbled
> UI text, and does not match the house style.
```
Cinematic 16:9 blog cover, split composition on a near-black background, two
glowing orbs facing each other, the left one purple-green and the right one
blue-to-magenta gradient, thin wireframe polygon network arcing between them,
floating particles, volumetric haze, photoreal 3D render, no text, no letters,
no logos
```

**Claude vs ChatGPT** — `claude-vs-chatgpt-cover.webp`
```
Cinematic 16:9 blog cover, split composition, warm clay-orange glow on the
left and purple-green glow on the right, two translucent glass panels angled
toward each other on a near-black background, wireframe polygon network
between them, volumetric haze, photoreal 3D render, no text, no letters,
no logos
```

**GPT-5 vs Claude 4** — `gpt5-vs-claude4-cover.webp`
```
Cinematic 16:9 blog cover, two glowing neural core structures suspended in
dark space, one cyan and one warm orange, energy arcs connecting them, thin
wireframe polygons, floating particles, volumetric haze, dramatic rim
lighting, photoreal 3D render, no text, no letters, no logos
```

**Midjourney vs DALL-E 3** — `midjourney-dalle-cover.webp`
```
Cinematic 16:9 blog cover, split composition, two glowing art canvases side by
side on a near-black background, the left violet toned and the right blue
toned, abstract generated imagery on each surface, versus battle aesthetic,
dramatic lighting, volumetric haze, no text, no letters, no logos
```

---

### Guides

**What AI Pricing Did in 2026** — `ai-pricing-changes-2026-cover.webp`
```
Cinematic 16:9 blog cover, a receding row of glowing translucent glass planes
angled through dark blue haze, the nearest plane bright cyan and the furthest
ones fading to violet, thin wireframe threads connecting them, floating
particles, deep navy volumetric fog, photoreal 3D render, no text, no letters,
no logos
```

**Best AI Tools Under $20/Month** — `best-ai-tools-under-20-dollars-2026-cover.webp`
```
Cinematic 16:9 blog cover, cluster of glowing translucent glass cards
scattered in dark space, each card carrying an abstract app glyph, dense cyan
wireframe polygon network linking them, faint currency symbols embedded in the
dark background, violet and teal accents, volumetric haze, photoreal 3D
render, no text, no letters, no logos
```

**Perplexity SEO Checker** — `perplexity-seo-checker-cover.webp`
```
Cinematic 16:9 blog cover, glowing magnifying lens over a dark network of
connected content nodes, one node lit bright cyan while the rest stay dim,
thin wireframe links radiating outward, violet ambience, volumetric haze,
photoreal 3D render, no text, no letters, no logos
```

---

### Tools

**Best ElevenLabs Alternatives** — `best-elevenlabs-alternatives-cover.webp`
```
Cinematic 16:9 blog cover, dark space filled with floating translucent glass
panels showing glowing cyan audio waveform ribbons, two panels in the middle
dimmed and cracked with their glow extinguished while the rest pulse bright,
thin violet wireframe network linking the living panels and broken threads
hanging from the dead ones, volumetric haze, photoreal 3D render, no text,
no letters, no logos
```

**10 Best Free AI Tools** — `best-free-ai-tools-cover.webp`
```
Dark futuristic flat lay, multiple glowing app icons arranged in a grid on a
dark surface, purple and cyan ambient light, technology aesthetic,
volumetric haze, 16:9 blog cover, no text, no letters, no logos
```

**7 AI Tools That Replace Expensive Software** — `ai-tools-replace-software-cover.webp`
```
Cinematic 16:9 blog cover, glowing translucent app tiles replacing a row of
dimmed grey legacy software boxes on a dark surface, cyan light spilling from
the new tiles, violet ambience, wireframe connections, volumetric haze,
photoreal 3D render, no text, no letters, no logos
```

**Best AI Tools for Freelancers** — `best-ai-tools-for-freelancers-cover.webp`
```
Cinematic 16:9 blog cover, dark desk at night seen from above, laptop,
notebook and phone, glowing holographic panels floating above showing abstract
invoices and project boards, cyan and violet accents, city bokeh, volumetric
haze, photoreal, no text, no letters, no logos
```

**Best AI Tools for Productivity 2026** — `ai-tools-productivity-cover.webp`
```
Cinematic 16:9 blog cover, dark isometric workspace, glowing translucent task
boards and calendar planes connected by cyan circuit traces, violet nodes at
each junction, floating particles, volumetric haze, photoreal 3D render,
no text, no letters, no logos
```

**Best AI Tools for Social Media** — `ai-tools-social-media-cover.webp`
```
Cinematic 16:9 blog cover, dark space filled with floating translucent
vertical video frames and glowing engagement rings, cyan and magenta accents,
thin wireframe network linking the frames, volumetric haze, photoreal 3D
render, no text, no letters, no logos
```

**Best AI Tools for Students** — `best-ai-tools-for-students-cover.webp`
```
Cinematic 16:9 blog cover, dark study desk at night, open laptop and stacked
books, glowing holographic study panels and abstract note cards floating
above, cyan and violet light, warm desk lamp glow, volumetric haze, photoreal,
no text, no letters, no logos
```

**Best Free AI Image Generators** — `best-free-ai-image-generators-cover.webp`
```
Cinematic 16:9 blog cover, grid of glowing translucent art canvases suspended
in dark space, each showing abstract generated colour fields, violet and cyan
edge light, thin wireframe connections, volumetric haze, photoreal 3D render,
no text, no letters, no logos
```

**Top AI Coding Assistants for Beginners** — `ai-coding-assistants-cover.webp`
```
Cinematic 16:9 blog cover, dark isometric scene, several glowing code panels
arranged as a learning path ascending from left to right, cyan syntax glow
rendered as abstract strokes, violet circuit traces connecting the steps,
floating particles, volumetric haze, photoreal 3D render, no text, no letters,
no logos
```

---

### Tutorials

**What Is ChatGPT? Beginner's Guide** — `chatgpt-guide-cover.webp`
```
Cinematic dark tech illustration, glowing chat interface floating in dark
space, soft purple and blue light rays, neural network nodes in background,
dramatic lighting, 16:9 blog cover, no text, no letters, no logos
```

**Write a Blog Post 10x Faster with AI** — `write-faster-cover.webp`
```
Dark atmospheric scene, glowing laptop screen with an AI writing interface,
light trails suggesting speed, deep blue and purple tones, dramatic shadows,
16:9 blog cover, no text, no letters, no logos
```

**How to Make Money with AI Tools** — `make-money-cover.webp`
```
Dark cinematic scene, glowing digital coins and an upward graph on a dark
background, green and gold light accents, wealth and technology theme,
volumetric haze, 16:9 blog cover, no text, no letters, no logos
```

**How to Build a Blog with AI** — `build-blog-with-ai-cover.webp`
```
Cinematic 16:9 blog cover, glowing translucent page layouts assembling
themselves in dark space, wireframe scaffolding around a half-built site
structure, cyan and violet accents, floating particles, volumetric haze,
photoreal 3D render, no text, no letters, no logos
```

**How to Use AI for YouTube Automation** — `how-to-use-ai-for-youtube-automation-cover.webp`
```
Cinematic 16:9 blog cover, dark isometric production pipeline, glowing
translucent stages for script, voice, video and upload connected by cyan
circuit traces, floating video frames and waveform ribbons, violet nodes,
volumetric haze, photoreal 3D render, no text, no letters, no logos
```

**How to Use ChatGPT for Freelancing** — `how-to-use-chatgpt-for-freelancing-cover.webp`
```
Cinematic 16:9 blog cover, dark desk at night, laptop showing a glowing
proposal panel, floating holographic job cards and a rising earnings curve
above it, cyan and violet light with soft gold accents, volumetric haze,
photoreal, no text, no letters, no logos
```

**How to Use ChatGPT to Make Money Online** — `how-to-use-chatgpt-to-make-money-cover.webp`
```
Cinematic 16:9 blog cover, glowing chat orb in dark space feeding light into a
rising stack of digital coins, thin wireframe network around them, green and
gold accents against cyan and violet ambience, volumetric haze, photoreal 3D
render, no text, no letters, no logos
```

**How to Use Claude AI for Coding** — `claude-ai-coding-cover.webp`
```
Cinematic 16:9 blog cover, dark desk scene, laptop showing a code editor with
abstract glowing syntax strokes, warm clay-orange assistant orb hovering
beside the screen, cyan wireframe network across the code, violet ambience,
volumetric haze, photoreal, no text, no letters, no logos
```

**How to Use Midjourney for Beginners** — `midjourney-beginners-cover.webp`
```
Cinematic 16:9 blog cover, glowing art canvas materialising out of dark haze,
particles resolving into an abstract painted image, violet and cyan light,
wireframe grid beneath the canvas, volumetric fog, photoreal 3D render,
no text, no letters, no logos
```

---

### News

**The Rise of AI Agents** — `rise-of-ai-agents-cover.webp`
```
Cinematic 16:9 blog cover, dark isometric technology grid, several humanoid
robots working at glowing translucent workstations connected by cyan and
violet circuit traces, a glowing brain core at the centre, floating data
panels, dense particle field, volumetric haze, photoreal 3D render, no text,
no letters, no logos
```

**Is AI Replacing Freelancers?** — `is-ai-replacing-freelancers-cover.webp`
```
Cinematic 16:9 blog cover, dark split scene, a human silhouette at a desk on
one side and a glowing robotic arm at an identical desk on the other, cyan and
violet rim light, wireframe network between them, volumetric haze, photoreal,
no faces, no text, no letters, no logos
```

---

## How to add a cover to a post

**1. Generate** — paste the prompt into Gemini, download the result.

**2. Convert and compress** — save into `public/images/` as
`<post-slug>-cover.webp`, then run `node scripts/optimize-images.mjs`.
Check the result is under 120 KB.

**3. Reference it in frontmatter:**

```yaml
---
title: "Your Post Title"
date: "2026-07-31"
coverImage: "/images/your-slug-cover.webp"
---
```

**4. Record the prompt in this file** under the right category. Drafts carry a
`coverImagePrompt` field while unpublished; that field is stripped at publish
time, so this file is the only permanent home for the prompt. Skipping this
step is what caused the gap being repaired here.

---

## Known issues

| Cover | Problem | Action |
|---|---|---|
| `chatgpt-vs-google-gemini-cover.webp` | Light background, visible garbled UI text, off-theme | Regenerate with the prompt above |
| `rise-of-ai-agents-cover.webp` | 204 KB, roughly 2x the site norm | Re-encode |
