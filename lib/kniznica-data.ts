export type KniznicaItemType = "skill" | "prompt" | "info" | "tool";

export interface KniznicaItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  tags: string[];
  type: KniznicaItemType;
  fullPrompt?: string;
  dateAdded: string;
  collection?: string;
}

export interface KniznicaCollection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  dateAdded: string;
  items: KniznicaItem[];
}

export const kniznicaCollections: KniznicaCollection[] = [
  {
    id: "claude-skills-prompts-1",
    title: "Claude Skills Prompts — Kolekcia 1",
    description: "42 kurátorských Claude skills z oblasti UI, marketingu, výskumu, médií, kódovania a viac. Zdroj: Claude Skills PDF, jún 2026.",
    icon: "⚡",
    color: "#e07b39",
    dateAdded: "2026-06-04",
    items: [
      {
        id: "frontend-design",
        title: "Frontend Design",
        category: "UI Design",
        description: "Creates bold, non-generic frontend interfaces that avoid typical AI-looking UI.",
        url: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
        tags: ["UI", "frontend", "design"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "color-expert",
        title: "Color Expert",
        category: "Color / Branding",
        description: "Optimizes color palettes, accessibility, contrast, OKLCH/OKLAB systems.",
        url: "https://github.com/meodai/skill.color-expert",
        tags: ["farby", "branding", "accessibility", "OKLCH"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "hand-drawn-diagrams",
        title: "Hand-Drawn Diagrams",
        category: "Diagram / Visual Content",
        description: "Creates editable Excalidraw-style diagrams and exports.",
        url: "https://github.com/muthuishere/hand-drawn-diagrams",
        tags: ["diagramy", "Excalidraw", "vizuály"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "claude-design-skills",
        title: "ClaudeDesign Skills",
        category: "3D / Motion Design",
        description: "Supports Three.js, GSAP, Framer Motion, Lottie, and Spline.",
        url: "https://github.com/freshtechbro/claudedesignskills",
        tags: ["3D", "Three.js", "GSAP", "animácia", "Framer Motion"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "nothing-design-skill",
        title: "Nothing Design Skill",
        category: "UI Style System",
        description: "Generates interfaces inspired by Nothing Phone aesthetics.",
        url: "https://github.com/jqueryscript/awesome-claude-code",
        tags: ["UI", "Nothing Phone", "design system"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "canvas-design",
        title: "Canvas Design",
        category: "Poster / Static Design",
        description: "Creates posters, PNGs, PDFs, and static campaign visuals.",
        url: "https://github.com/anthropics/skills/tree/main/skills/canvas-design",
        tags: ["poster", "PNG", "PDF", "kampane"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "charlie-hills-social-media",
        title: "Charlie Hills Social Media",
        category: "Social Media System",
        description: "Complete content ecosystem for posts, reels, thumbnails, and analytics.",
        url: "https://github.com/charlie947/social-media-skills",
        tags: ["social media", "reels", "thumbnails", "analytika"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "voice-builder",
        title: "Voice Builder",
        category: "Brand Voice",
        description: "Analyzes samples to generate consistent brand voice documents.",
        url: "https://github.com/charlie947/social-media-skills/tree/main/skills/voice-builder",
        tags: ["brand voice", "copywriting", "konzistentnosť"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "reels-scripting",
        title: "Reels Scripting",
        category: "Reels / TikTok",
        description: "Creates high-performing reel scripts in your tone.",
        url: "https://github.com/charlie947/social-media-skills/tree/main/skills/reels-scripting",
        tags: ["reels", "TikTok", "scripting"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "post-scorer",
        title: "Post Scorer",
        category: "Social Analytics",
        description: "Scores posts using past content performance.",
        url: "https://github.com/charlie947/social-media-skills/tree/main/skills/post-scorer",
        tags: ["analytika", "scoring", "obsah"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "youtube-thumbnail",
        title: "YouTube Thumbnail",
        category: "YouTube Design",
        description: "Converts titles into high CTR thumbnail prompts.",
        url: "https://github.com/charlie947/social-media-skills/tree/main/skills/youtube-thumbnail",
        tags: ["YouTube", "thumbnail", "CTR"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "hook-generator",
        title: "Hook Generator",
        category: "Copywriting / Hook",
        description: "Creates hooks using PAS, AIDA, BAB, STAR, and SLAY frameworks.",
        url: "https://github.com/charlie947/social-media-skills/tree/main/skills/hook-generator",
        tags: ["copywriting", "hook", "PAS", "AIDA", "BAB"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "twitter-algorithm-optimizer",
        title: "Twitter Algorithm Optimizer",
        category: "X Growth",
        description: "Improves tweets using ranking signal insights.",
        url: "https://github.com/ComposioHQ/awesome-claude-skills",
        tags: ["Twitter", "X", "algoritmus", "rast"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "marketing-module",
        title: "Marketing Module",
        category: "Marketing System",
        description: "Covers SEO, CRO, growth, content, and sales intelligence.",
        url: "https://github.com/alirezarezvani/claude-skills/tree/main/marketing-skill",
        tags: ["marketing", "SEO", "CRO", "sales", "growth"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "marketing-skills",
        title: "Marketing Skills",
        category: "Growth / Copy / SEO",
        description: "Supports analytics, ad creatives, SEO, and scaling.",
        url: "https://github.com/coreyhaines31/marketingskills",
        tags: ["marketing", "SEO", "reklamy", "analytika"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "email-marketing-bible",
        title: "Email Marketing Bible",
        category: "Email Marketing",
        description: "Builds stronger lifecycle and retention email systems.",
        url: "https://github.com/CosmoBlk/email-marketing-bible",
        tags: ["email", "lifecycle", "retencia"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "competitive-ads-extractor",
        title: "Competitive Ads Extractor",
        category: "Ads Research",
        description: "Analyzes competitor ad messaging and creatives.",
        url: "https://github.com/ComposioHQ/awesome-claude-skills",
        tags: ["reklamy", "konkurencia", "výskum"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "social-media-research",
        title: "Social Media Research",
        category: "Market Research",
        description: "Tracks Reddit and X discussions for audience insights.",
        url: "https://github.com/skainguyen1412/social-media-research-skill",
        tags: ["výskum", "Reddit", "X", "audience"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "daydream",
        title: "Daydream",
        category: "Knowledge Mining",
        description: "Finds hidden patterns and idea clusters.",
        url: "https://github.com/glebis/claude-skills/tree/main/daydream",
        tags: ["nápady", "vzory", "knowledge mining"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "humanizer",
        title: "Humanizer",
        category: "Writing Cleanup",
        description: "Refines AI-generated writing into natural prose.",
        url: "https://github.com/blader/humanizer",
        tags: ["písanie", "AI text", "prirodzený štýl"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "anything-to-notebooklm",
        title: "Anything to NotebookLM",
        category: "Content Repurposing",
        description: "Transforms PDFs and articles into podcasts and quizzes.",
        url: "https://github.com/joeseesun/anything-to-notebooklm",
        tags: ["PDF", "podcast", "kvízy", "NotebookLM"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "deep-research-engine",
        title: "Deep Research Engine",
        category: "Deep Research",
        description: "Runs multi-phase research workflows with source scoring.",
        url: "https://github.com/199-biotechnologies/claude-deep-research-skill",
        tags: ["výskum", "multi-phase", "scoring"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "academic-research-skills",
        title: "Academic Research Skills",
        category: "Academic Writing",
        description: "Supports research, drafting, review, and editing.",
        url: "https://github.com/Imbad0202/academic-research-skills",
        tags: ["akademický výskum", "písanie", "review"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "vexor-semantic-search",
        title: "Vexor Semantic Search",
        category: "Private Search",
        description: "Enables semantic search through meaning instead of keywords.",
        url: "https://github.com/scarletkc/vexor",
        tags: ["sémantické vyhľadávanie", "súkromné", "embedding"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "remotion-best-practices",
        title: "Remotion Best Practices",
        category: "Programmatic Video",
        description: "Builds videos in React with captions and MP4 exports.",
        url: "https://github.com/remotion-dev/skills/tree/main/skills/remotion",
        tags: ["Remotion", "React", "video", "MP4"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "gpt-image-2-skill",
        title: "GPT Image 2 Skill",
        category: "Image Generation",
        description: "Handles image generation, editing, and presets.",
        url: "https://github.com/glebis/claude-skills/tree/main/gpt-image-2",
        tags: ["obrázky", "generovanie", "GPT Image"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "ai-video-toolkit",
        title: "AI Video Toolkit",
        category: "Video Production",
        description: "Creates AI-powered video production pipelines.",
        url: "https://github.com/digitalsamba/claude-code-video-toolkit",
        tags: ["video", "produkcia", "pipeline"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "ai-music-album-production",
        title: "AI Music Album Production",
        category: "Music Production",
        description: "Supports AI music creation and mastering workflows.",
        url: "https://github.com/bitwize-music-studio/claude-ai-music-skills",
        tags: ["hudba", "mastering", "AI hudba"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "generative-media-skills",
        title: "Generative Media Skills",
        category: "Multimodal Media",
        description: "Manages AI image, audio, and video generation.",
        url: "https://github.com/jqueryscript/awesome-claude-code",
        tags: ["multimodal", "obrázky", "audio", "video"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "dev-browser",
        title: "Dev Browser",
        category: "Browser Automation",
        description: "Enables browser-based AI workflows and QA.",
        url: "https://github.com/jqueryscript/awesome-claude-code",
        tags: ["browser", "automatizácia", "QA"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "web-scraper",
        title: "Web Scraper",
        category: "Web Scraping",
        description: "Scrapes websites using advanced validation strategies.",
        url: "https://github.com/yfe404/web-scraper",
        tags: ["scraping", "web", "validácia"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "skill-seekers",
        title: "Skill Seekers",
        category: "Skill Creation",
        description: "Converts repositories and docs into Claude skills.",
        url: "https://github.com/yusufkaraaslan/Skill_Seekers",
        tags: ["tvorba skills", "repozitáre", "dokumentácia"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "autoresearch-skill",
        title: "Autoresearch Skill",
        category: "Automation / Iteration",
        description: "Runs iterative self-improvement workflows.",
        url: "https://github.com/uditgoenka/autoresearch",
        tags: ["automatizácia", "iterácia", "self-improvement"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "pm-skills-marketplace",
        title: "PM Skills Marketplace",
        category: "Product Management",
        description: "Supports PRDs, launch strategy, and product workflows.",
        url: "https://github.com/phuryn/pm-skills",
        tags: ["PM", "PRD", "product", "launch"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "jtbd-interview-tool",
        title: "JTBD Interview Tool",
        category: "Customer Research",
        description: "Converts customer interviews into actionable messaging.",
        url: "https://github.com/glebis/claude-skills/tree/main/skill-studio",
        tags: ["JTBD", "zákazníci", "výskum", "messaging"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "ai-transformation-discovery",
        title: "AI Transformation Discovery",
        category: "AI Consulting",
        description: "Identifies AI opportunities using consulting frameworks.",
        url: "https://github.com/glebis/claude-skills/tree/main/discovery",
        tags: ["AI konzulting", "príležitosti", "frameworky"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "superpowers",
        title: "Superpowers",
        category: "Engineering Workflow",
        description: "Forces Claude to think and execute like a senior engineer.",
        url: "https://github.com/obra/superpowers",
        tags: ["inžinierstvo", "senior engineer", "workflow"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "repomix",
        title: "Repomix",
        category: "Codebase Context",
        description: "Packages repositories into AI-friendly formats.",
        url: "https://github.com/yamadashy/repomix",
        tags: ["repozitár", "kontext", "AI-friendly"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "antfu-skills",
        title: "Antfu Skills",
        category: "Engineering Skills",
        description: "Production-ready development skills curated by Anthony Fu.",
        url: "https://github.com/antfu/skills",
        tags: ["vývoj", "produkcia", "Anthony Fu"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "personal-health-assistant",
        title: "Personal Health Assistant",
        category: "Health Data",
        description: "Analyzes medical reports and wellness metrics.",
        url: "https://github.com/BehiSecc/awesome-claude-skills",
        tags: ["zdravie", "medicína", "wellness"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "dna-analysis",
        title: "DNA Analysis",
        category: "Genome Analysis",
        description: "Processes ancestry and health DNA datasets.",
        url: "https://github.com/BehiSecc/awesome-claude-skills",
        tags: ["DNA", "genóm", "zdravie", "predkovia"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
      {
        id: "beautiful-prose",
        title: "Beautiful Prose",
        category: "Prose / Brand Writing",
        description: "Creates sharper and cleaner English prose.",
        url: "https://github.com/SHADOWPR0/beautiful_prose",
        tags: ["písanie", "próza", "angličtina", "brand"],
        type: "skill",
        dateAdded: "2026-06-04",
        collection: "claude-skills-prompts-1",
      },
    ],
  },
  {
    id: "realism-formula",
    title: "Realism Formula — Skin Texture System",
    description: "Kompletný systém na tvorbu fotorealistickej kože pomocou AI. Model Nano Banana 2 (invideo.io) + Magnific AI upscale + Kling 2.6 animácia. Zdroj: Realism Formula PDF, jún 2026.",
    icon: "🎞️",
    color: "#22c55e",
    dateAdded: "2026-06-04",
    items: [
      {
        id: "realism-workflow-info",
        title: "Realism Formula — Workflow",
        category: "AI Image / Workflow",
        description: "Kompletný workflow: invideo.io → Nano Banana 2 → Magnific AI (2x upscale) → Kling 2.6 (animácia). Krok 1: invideo.io → Agents and models → New project → Nano Banana 2. Krok 7: TakeOne Pro → Kling 2.6 na animáciu finálnych shotov.",
        tags: ["workflow", "invideo.io", "Nano Banana 2", "Magnific AI", "Kling 2.6", "animácia"],
        type: "info",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
      },
      {
        id: "realism-master-prompt",
        title: "Master Prompt — Skin Realism Template",
        category: "AI Image / Prompt",
        description: "Univerzálny master prompt pre fotorealistickú kožu. Parametrizovaný šablónovým systémom — stačí zmeniť BODY_PART, SKIN_TONE a IMPERFECTION. Upscale: Magnific AI Low 2x, creativity −3, resemblance 3.",
        tags: ["master prompt", "skin texture", "macro", "medium format", "Magnific AI", "šablóna"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `MASTER PROMPT — Skin Realism (parametrizovaná šablóna)

Model: nano-banana-2 | Rozlíšenie: 4K

PARAMETRE (zmeň podľa potreby):
  body_part: ear / cheek / forehead / knuckles / neck / collarbone
  skin_tone: deep brown-black / warm medium brown / olive-tan / light beige-pink / pale with pink undertones
  imperfections: raised mole 4mm / healed scar 15mm / freckle cluster / keloid / acne scarring / none

PROMPT:
"Extreme macro photograph of [BODY_PART]. [SKIN_TONE] skin. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. [IMPERFECTION] rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI):
  preset: Low | scale: 2x | creativity: −3 | HDR: 0 | resemblance: 3 | fractality: 0
  upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-ears-prompt",
        title: "Skin Prompt — Ears (diamond stud, warm brown)",
        category: "AI Image / Prompt",
        description: "Extrémne makro ucha s diamantovým náušníkom v platine. Teplá stredohnedá koža, buzz cut, goatee. Model: Nano Banana 2 / 4K.",
        tags: ["ucho", "makro", "diamond stud", "warm medium brown", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: warm medium brown
Body part: right ear with round diamond stud earring
Imperfections: round brilliant-cut diamond stud in platinum setting on earlobe, goatee stubble on jawline below ear, buzz cut stubble at hairline above ear, visible ear cartilage folds

PROMPT:
"Extreme macro photograph of right ear with round diamond stud earring. Warm medium brown skin. Full ear in profile filling frame — helix, antihelix, tragus, concha, and earlobe all visible, round brilliant-cut diamond stud earring in platinum four-prong setting on earlobe catching light, buzz cut stubble visible at hairline above ear, goatee stubble on jawline below and in front of ear, sage-green blurred background. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Round brilliant-cut diamond stud in platinum setting on earlobe rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-forehead-prompt",
        title: "Skin Prompt — Forehead (wrinkles, warm brown)",
        category: "AI Image / Prompt",
        description: "Čelo s hlbokými horizontálnymi vráskami, buzz cut pri línii vlasov. Teplá stredohnedá koža. Model: Nano Banana 2 / 4K.",
        tags: ["čelo", "vrásky", "makro", "warm medium brown", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: warm medium brown
Body part: forehead from hairline to eyebrows
Imperfections: deep horizontal forehead wrinkles 3-4 lines, buzz cut stubble at receding hairline, visible pores across entire forehead, eyebrow tops visible at bottom edge

PROMPT:
"Extreme macro photograph of forehead from hairline to eyebrows. Warm medium brown skin. Full forehead filling frame with 3-4 deep horizontal wrinkle lines, short buzz cut stubble visible at top hairline edge, thick black eyebrow tops visible at bottom of frame, dense visible pores across entire surface. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Deep horizontal forehead wrinkles 3-4 lines rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-lips-prompt",
        title: "Skin Prompt — Lips (pale beige, vertical lines)",
        category: "AI Image / Prompt",
        description: "Pery a brada. Bledá béžová koža s ružovým podtónom, vertikálne línie pier, vellus chĺpky, sage-green farebný nádych. Model: Nano Banana 2 / 4K.",
        tags: ["pery", "brada", "makro", "pale beige", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: pale beige with pink undertones
Body part: lips and chin area
Imperfections: vertical lip lines on both lips, subtle chin cleft shadow, fine vellus hair on chin and upper lip area, natural lip color gradient pink to beige

PROMPT:
"Extreme macro photograph of lips and chin area. Pale beige with pink undertones skin. Closed lips filling upper portion of frame with visible vertical lip texture lines, pink-beige natural lip color, chin below with subtle cleft shadow, fine vellus peach fuzz visible on chin and around mouth, muted sage-green color cast over entire image. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Vertical lip lines on both lips rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-neck-tattoo-prompt",
        title: "Skin Prompt — Neck Tattoo (deep brown-black)",
        category: "AI Image / Prompt",
        description: "Krk s tetovaním, tmavohnedočierna koža. Adamovo jablko, límec košele, viditeľné póry a stubble. Model: Nano Banana 2 / 4K.",
        tags: ["krk", "tetovanie", "makro", "deep brown-black", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: deep brown-black
Body part: neck and throat with tattoo
Imperfections: black ink tattoo reading PUKE in capital letters across lower neck, visible Adam's apple contour above, tan button-up shirt collar at bottom, fine neck stubble

PROMPT:
"Extreme macro photograph of neck and throat with tattoo. Deep brown-black skin. Front of neck filling frame, black ink tattoo reading PUKE in capital serif letters across lower throat, Adam's apple visible at top, tan/beige button-up shirt collar with metal button visible at bottom edge, chin shadow at top of frame, visible pores and fine stubble across neck surface. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Black ink tattoo rendering with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-eye-prompt",
        title: "Skin Prompt — Eye (deep brown-black, olive cast)",
        category: "AI Image / Prompt",
        description: "Extrémne makro jedného oka. Tmavohnedočierna koža s olive-green farebným nádychom, tmavá hnedá dúhovka, prirodzené mihalnice. Model: Nano Banana 2 / 4K.",
        tags: ["oko", "makro", "deep brown-black", "olive", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: deep brown-black with olive-green color cast
Body part: single eye extreme close-up
Imperfections: fine under-eye texture, natural eyelid crease, sparse short eyelashes

PROMPT:
"Extreme macro photograph of single eye extreme close-up. Deep brown-black with olive-green color cast skin. Single eye filling frame, dark brown iris with visible radial fibers and light reflection, white sclera with subtle cream tone, short natural eyelashes, smooth eyelid with fine crease, surrounding orbital skin with visible pore texture. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Fine under-eye texture rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
      {
        id: "realism-bandaid-prompt",
        title: "Skin Prompt — Bandaid (pinky finger, deep brown-black)",
        category: "AI Image / Prompt",
        description: "Malíček s látkovým náplasťom, tmavohnedočierna koža, modrofialový rukáv. Model: Nano Banana 2 / 4K.",
        tags: ["prst", "náplasť", "makro", "deep brown-black", "Nano Banana 2"],
        type: "prompt",
        dateAdded: "2026-06-04",
        collection: "realism-formula",
        fullPrompt: `Model: nano-banana-2 | Rozlíšenie: 4K
Skin tone: deep brown-black
Body part: pinky finger wrapped in fabric bandaid
Imperfections: woven fabric bandaid wrapped around finger, visible fingernail edge, knuckle crease at base

PROMPT:
"Extreme macro photograph of pinky finger wrapped in fabric bandaid. Deep brown-black skin. Small pinky finger with woven beige/tan fabric bandaid wrapped around the middle section, white gauze pad visible in center of bandaid, finger emerging from powder-blue fabric sleeve. Photorealistic, shot on medium format film. Raking side-top light at 45 degrees reveals every pore as a 3D crater with its own micro-shadow. Shallow depth of field — critical sharpness in the center, gentle optical falloff at edges. Visible: individual pore openings with depth, vellus peach fuzz catching sidelight, natural sebum sheen (uneven, concentrated on convex surfaces), subsurface color variation (veins, capillary flush, melanin gradients), micro-wrinkles between major features. Woven fabric bandaid wrapped around finger rendered with full physical accuracy — casting micro-shadow, distinct texture from surrounding skin. Skin fills 85% of frame. Fine organic film grain throughout. Zero digital sharpening — all sharpness is optical. Lifted blacks — shadow detail preserved inside every pore. Soft highlight rolloff — specular sheen never clips. No makeup, no retouching, no smoothing, no filters. The skin must look uncomfortably real — a dermatological study shot by a cinematographer."

NEGATIVE PROMPT:
"airbrushed, smooth skin, uniform tone, beauty lighting, ring light, porcelain, digital sharpening halos, symmetrical pore patterns, CGI, plastic, silicone, flat lighting, text, logos, watermarks"

UPSCALE (Magnific AI): Low / 2x / creativity −3 / resemblance 3
upscale_prompt: "Add micro pores, micro hairs and sharp skin texture."`,
      },
    ],
  },
];

export const allKniznicaItems: KniznicaItem[] = kniznicaCollections.flatMap(
  (c) => c.items
);

export const kniznicaCategories = [
  ...new Set(allKniznicaItems.map((i) => i.category)),
];
