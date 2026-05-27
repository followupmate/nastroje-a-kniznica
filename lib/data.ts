export type Badge = "TOP" | "FREE" | "PAID" | "API" | "OS";

export interface Tool {
  name: string;
  url?: string;
  desc: string;
  tags: string[];
  badges: Badge[];
}

export interface Subsection {
  title: string;
  tools: Tool[];
}

export interface Category {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  subsections: Subsection[];
}

export const categories: Category[] = [
  {
    id: "video",
    icon: "🎬",
    title: "Tvorba Videa",
    subtitle: "Text-to-video · Image-to-video · B-roll generátory · Reklamné videá",
    color: "#7c6cff",
    subsections: [
      {
        title: "Generatívne modely (T2V / I2V)",
        tools: [
          { name: "Google Veo 3.1", url: "https://deepmind.google/technologies/veo/", badges: ["TOP","PAID","API"], desc: "Najrealistickejšie video v 2026. Natívny zvuk a dialóg synchrónny s pohybom pier. Povinné SynthID vodoznaky. Silný pre YouTube a marketingové kampane.", tags: ["Vertex AI","natívny zvuk","4K"] },
          { name: "Kling 3.0", url: "https://kling.kuaishou.com", badges: ["TOP","FREE","API"], desc: "Produkčný štandard 2026. Najlepší rendering rúk a prstov. Stabilný, kontrolovateľný, filmový výstup. Výborný pomer cena/výkon.", tags: ["Kuaishou","high-motion","cinematic"] },
          { name: "Seedance 2.0", badges: ["TOP","PAID"], desc: "ByteDance model — #1 na Artificial Analysis leaderboarde (2026). Silná identita postavy cez multi-shot sekvency. Higgsfield integrácia.", tags: ["ByteDance","#1 leaderboard"] },
          { name: "Runway Gen-4.5", url: "https://runwayml.com", badges: ["FREE","API"], desc: "Kreatívna pracovná stanica pre filmárov. Motion Brush, storyboard, Inpainting. Najlepšia direktívna kontrola kamery. Gen-4 Turbo pre rýchle iterácie.", tags: ["Motion Brush","filmári"] },
          { name: "Luma Dream Machine / Ray3", url: "https://lumalabs.ai", badges: ["FREE","API"], desc: "Najkrajšie UX spomedzi video generátorov. Elegantný vizuálny výstup, silný image-to-video. Ray3 ideálny na conceptovanie.", tags: ["I2V","stylized"] },
          { name: "Pika 2.5", url: "https://pika.art", badges: ["FREE"], desc: "Hravý nástroj pre virálny obsah. PikaFrames, PikaSwaps, real-time PikaStream. Vhodný na rýchle sociálne video.", tags: ["social media","effects"] },
          { name: "PixVerse V6", url: "https://pixverse.ai", badges: ["FREE"], desc: "Najlepší celkový výber 2026 podľa vlastného benchmarku. Silný na dlhší multi-shot storytelling. Dobrý bezplatný tier.", tags: ["multi-shot","storytelling"] },
          { name: "Hailuo (MiniMax) 2.3", url: "https://hailuoai.com", badges: ["FREE"], desc: "Solidná fyzika, 1080p/24fps. Kreatívny pohyb na neobvyklých promptoch. Štyri cenové úrovne.", tags: ["MiniMax","expresívny pohyb"] },
          { name: "Wan 2.6 / 2.7", url: "https://wan.video", badges: ["OS","FREE"], desc: "Open-source (Apache 2.0). Spoľahlivý flexibilný nástroj bez obmedzení obsahu. LTX-2.3 variant pre až 20s klipy. Čistá licencia pre komerčné projekty.", tags: ["open-source","unrestricted"] },
          { name: "HappyHorse-1.0", badges: ["TOP"], desc: "Alibaba ATH model — #2 na Artificial Analysis (apríl 2026). Nový súper s natívnym audiom. Výkonný pri pohybe a fyzike.", tags: ["Alibaba","nový 2026"] },
        ],
      },
      {
        title: "Marketingové & reklamné video",
        tools: [
          { name: "InVideo AI", url: "https://invideo.io", badges: ["FREE"], desc: "Plne automatizované marketingové videá z textu. Script → video pipeline s hlasom a titulkami. Vhodné pre obsah na sociálne siete.", tags: ["automatizácia","marketing"] },
          { name: "Creatify", url: "https://creatify.ai", badges: ["PAID"], desc: "URL → reklama workflow špeciálne pre e-commerce performance marketing. Najlepší výber pre UGC-štýl ads a produktové videá.", tags: ["e-commerce","UGC ads"] },
          { name: "Adobe Firefly Video", url: "https://www.adobe.com/products/firefly.html", badges: ["PAID"], desc: "Jediný video generátor s plnou copyright indemnifikáciou. Trénovaný na licencovanom obsahu. Pre komerčné projekty kde záleží na IP.", tags: ["copyright-safe","enterprise"] },
          { name: "CapCut", url: "https://www.capcut.com", badges: ["FREE"], desc: "Najlepší bezplatný výber pre sociálne siete. Bez vodoznaku na exportoch. Integrovaný so Sora 2 a Veo. ByteDance.", tags: ["TikTok","bezplatný export"] },
          { name: "Higgsfield", url: "https://higgsfield.ai", badges: ["FREE","API"], desc: "Model hub s pay-as-you-go prístupom k Veo, Kling, Seedance, Pika pod jednou platformou. MCP integrácia do Claude.", tags: ["multi-model","MCP"] },
          { name: "Krea / Leonardo / fal.ai", url: "https://krea.ai", badges: ["FREE","API"], desc: "Platformy poskytujúce prístup k viacerým modelom naraz. Krea a fal.ai obľúbené u vývojárov. Leonardo silný pre konzistentnosť štýlu.", tags: ["model hubs","API"] },
          { name: "VEED.io", url: "https://veed.io", badges: ["FREE"], desc: "Kolaboratívny AI video editor v prehliadači. Auto titulky, noise removal, text-to-video. Dobrý pre tímovú spoluprácu.", tags: ["browser-based","tímová práca"] },
          { name: "Haiper / Vidu Q3", badges: ["FREE"], desc: "Haiper pre efektívny marketer-friendly výstup. Vidu Q3 v top 10 Artificial Analysis rebríčku. Alternatívy k dominantným modelom.", tags: ["alternatívy"] },
        ],
      },
    ],
  },
  {
    id: "avatars",
    icon: "👤",
    title: "Avatary & Digitálni Ľudia",
    subtitle: "AI avatar generátory · Talking heads · Digital twins · Klony",
    color: "#ff6c9d",
    subsections: [
      {
        title: "Všetky nástroje",
        tools: [
          { name: "HeyGen", url: "https://heygen.com", badges: ["TOP","FREE","API"], desc: "Lídra trhu 2026. Instant Avatar v5 — digitálny dvojník z krátkeho videa. Kontextové emócie, 300+ jazykov, Streaming Avatar API pre real-time konverzácie.", tags: ["digital twin","real-time","lip-sync"] },
          { name: "Synthesia", url: "https://synthesia.io", badges: ["TOP","PAID"], desc: "Enterprise štandard — používa 90% Fortune 100 firiem. 230+ avatarov, 140+ jazykov, SOC2 compliance. Ideálny pre firemné školenia a onboarding.", tags: ["enterprise","L&D","SOC2"] },
          { name: "D-ID", url: "https://d-id.com", badges: ["FREE","API"], desc: "Priekopník animácie fotografií. TalkingPhoto — animuje ľubovoľnú foto s hlasom v 100+ jazykoch. Silný pre interaktívne agenty.", tags: ["photo animation","interactive"] },
          { name: "Colossyan", url: "https://www.colossyan.com", badges: ["PAID"], desc: "Špeciálne pre L&D a HR tímy. Quiz integrácia, LMS podpora. Najlepší výber pre vzdelávacie inštitúcie s potrebou SCORM výstupu.", tags: ["LMS","SCORM","vzdelávanie"] },
          { name: "Hour One", url: "https://www.hour.one", badges: ["PAID"], desc: "Broadcast-štýl prezentátori pre korporátne komunikácie. Silný pre personalizáciu predajného outreachu vo veľkom.", tags: ["broadcast","sales outreach"] },
          { name: "Vidnoz", url: "https://www.vidnoz.com", badges: ["FREE"], desc: "Najlepší bezplatný tier — skutočne použiteľný pre menšie projekty. Rýchle talking-head videá bez platby.", tags: ["bezplatný","ľahké použitie"] },
          { name: "Digen AI", url: "https://www.digen.ai", badges: ["PAID"], desc: "30-sekundový smartfón scan → plnohodnotný digital twin. 4K rozlíšenie, generatívna kontrola emócií.", tags: ["digital twin","retail"] },
          { name: "ImagineArt Avatar", url: "https://www.imagine.art", badges: ["FREE"], desc: "Štyri rôzne avatar nástroje pod jednou platformou: HeyGen Avatar IV, AI Headshot, UGC Creator, Spokesperson Video.", tags: ["multi-tool","headshots"] },
          { name: "Hedra / Kaiber Avatar", badges: ["FREE"], desc: "Hedra pre animáciu postáv z obrázkov s pohybom a hlasom. Kaiber pre štylizované avatar videá.", tags: ["animácia","niche"] },
          { name: "Rephrase.ai", url: "https://rephrase.ai", badges: ["PAID"], desc: "Personalizovaný video outreach vo veľkom. Každý príjemca vidí video so svojím menom. Integrácia s CRM systémami.", tags: ["personalizácia","CRM"] },
        ],
      },
    ],
  },
  {
    id: "images",
    icon: "🎨",
    title: "Tvorba Obrázkov",
    subtitle: "Text-to-image · Image editing · Logo & typografia · Photorealism",
    color: "#6cffb8",
    subsections: [
      {
        title: "Hlavné modely",
        tools: [
          { name: "Midjourney V7", url: "https://www.midjourney.com", badges: ["TOP","PAID"], desc: "Umelecký lídra trhu. Nevyrovnaná vizuálna kvalita a estetická koherencia s minimálnym promptovaním. Od $10/mes. Bez API.", tags: ["artistický","estetika","V7 2026"] },
          { name: "FLUX 2 Pro / Max", url: "https://blackforestlabs.ai", badges: ["TOP","OS","API"], desc: "Open-weights šampión. Matchuje Midjourney na fotorealizme za zlomok ceny (~$0.06-0.08/obrázok). Flux Schnell pre rýchle iterácie. Flux Kontext pre konzistentnosť postáv.", tags: ["fotorealizmus","open-source","API-first"] },
          { name: "Ideogram V3", url: "https://ideogram.ai", badges: ["TOP","FREE"], desc: "Absolútny lídra pre text v obrázkoch (90-95% presnosť). Logá, plagáty, typografia — nič iné to nedokáže tak dobre. 40 generácií/deň zadarmo.", tags: ["typografia","logá","text-in-image"] },
          { name: "DALL-E 4 / GPT Image 2", url: "https://openai.com/dall-e", badges: ["FREE","API"], desc: "Najlepší výber pre zložité prompt inštrukcie. Integrovaný do ChatGPT Plus. Spoľahlivý text rendering.", tags: ["prompt presnosť","ChatGPT"] },
          { name: "Imagen 4 (Google)", url: "https://deepmind.google/technologies/imagen/", badges: ["TOP","API"], desc: "S-tier po aprílovom release 2026. Mimoriadne prirodzené výstupy, najmä ľudia a tváre. Dostupný cez Gemini Advanced a Google Vertex AI.", tags: ["ľudia & tváre","Vertex AI"] },
          { name: "Adobe Firefly 3", url: "https://www.adobe.com/products/firefly.html", badges: ["PAID"], desc: "Jediný generátor trénovaný výhradne na licencovanom obsahu. Plná komerčná indemnifikácia. Nevyhnutný pre firemné a reklamné projekty.", tags: ["copyright-safe","indemnifikácia","Creative Cloud"] },
          { name: "Stable Diffusion 4", url: "https://stability.ai", badges: ["OS","FREE"], desc: "Jediný plne bezplatný, lokálne spustiteľný model. Totálna kontrola a súkromie. ComfyUI ekosystém.", tags: ["self-hosting","lokálne","ComfyUI"] },
          { name: "Recraft V4 / SVG", url: "https://recraft.ai", badges: ["FREE","API"], desc: "Najrýchlejší model na trhu. Recraft V4-SVG — jediný AI nástroj generujúci čisté vektorové SVG súbory. Ideálny pre ikonografiu a branding.", tags: ["SVG generácia","rýchlosť","vektory"] },
        ],
      },
      {
        title: "Platformy & špecializované nástroje",
        tools: [
          { name: "Leonardo AI", url: "https://leonardo.ai", badges: ["FREE"], desc: "Silný pre konzistentnosť štýlu naprieč viacerými obrázkami. Populárny v hernom dizajne a brand identity.", tags: ["herný dizajn","štýl konzistencia"] },
          { name: "Krea AI", url: "https://krea.ai", badges: ["FREE"], desc: "Real-time generácia s live canvas. Multi-model prístup, Flux integrácia. Populárny pre UI mockupy a konceptovanie.", tags: ["real-time","canvas"] },
          { name: "OpenArt", url: "https://openart.ai", badges: ["FREE"], desc: "Model hub + komunita. Prístup k Flux, DALL-E, SD. Workflow builder a rozsiahla knižnica komunitných výtvorov.", tags: ["komunita","workflow"] },
          { name: "Microsoft Designer / Copilot", url: "https://www.bing.com/images/create", badges: ["FREE"], desc: "DALL-E powered, bezplatný, integrovaný do Windows a Edge. Vhodný pre každodenné rýchle vizuály.", tags: ["bezplatný","Windows"] },
          { name: "Seedream 4.5 / 5 lite", badges: ["FREE"], desc: "ByteDance image modely. Nákladovo efektívne, silné pri ľuďoch. Dostupné cez Higgsfield a fal.ai platformy.", tags: ["cost-efficient","ByteDance"] },
          { name: "Qwen / Nano Banana", badges: ["FREE"], desc: "Qwen (Alibaba) — výkonný open-source model. Nano Banana (Higgsfield) — top kvality 4K výstup s textom a diagramami.", tags: ["Alibaba","4K"] },
          { name: "Canva AI / Dream Lab", url: "https://www.canva.com/ai-image-generator/", badges: ["FREE"], desc: "Flux 2 a Stable Diffusion pod kapotou. Priamo integrovaný do Canva workflow. Ideálny pre nevývojárov a marketérov.", tags: ["Canva","dizajn workflow"] },
          { name: "Aurora (Amazon)", badges: ["API"], desc: "Amazon proprietárny model dostupný cez AWS Bedrock. Vysoká kvalita a detail presnosť. Pre enterprise AWS ekosystémy.", tags: ["AWS","enterprise"] },
        ],
      },
    ],
  },
  {
    id: "voice",
    icon: "🎙️",
    title: "Hlas, TTS & Klonovanie Hlasu",
    subtitle: "Text-to-speech · Klonovanie · Dabovanie · Konverzačné agenty",
    color: "#ffb86c",
    subsections: [
      {
        title: "Všetky nástroje",
        tools: [
          { name: "ElevenLabs", url: "https://elevenlabs.io", badges: ["TOP","FREE","API"], desc: "Zlatý štandard — najrealistickejší AI hlas. 1000+ hlasov, klonovanie z 1-min nahrávky. Dabovanie do 29 jazykov. Konverzačné agenty. Od $5/mes.", tags: ["voice cloning","dabovanie","agenty"] },
          { name: "Murf AI", url: "https://murf.ai", badges: ["FREE","API"], desc: "Profesionálny biznis TTS. Výborná kontrola prízvuku, rytmu a výslovnosti. Integrácie s Canva, PowerPoint, WordPress. Od $19/mes.", tags: ["B2B","školenia","Canva"] },
          { name: "Play.ht / PlayAI", url: "https://play.ht", badges: ["FREE","API"], desc: "Ultra-realistické hlasy s neobmedzenými sťahovaniami. Multi-speaker podpora, fine kontrola emócií. Výborný pre podcast výrobu.", tags: ["multi-speaker","podcast","unlimited"] },
          { name: "Descript", url: "https://www.descript.com", badges: ["FREE"], desc: "Bezplatný AI voice clone (Overdub) kombinovaný s komplexným audio-video editorom, transkripciou a odstraňovaním vycpávkových slov.", tags: ["video editor","transkripcia","overdub"] },
          { name: "Resemble AI", url: "https://www.resemble.ai", badges: ["FREE","API"], desc: "Najrýchlejšie klonovanie — 10 sekúnd audio → plnohodnotný klon. Real-time syntéza. Obľúbený medzi vývojármi pre API integrácie.", tags: ["10s klon","real-time","developer"] },
          { name: "Respeecher", url: "https://respeecher.com", badges: ["PAID"], desc: "Hollywood-grade klonovanie pre filmové dabovanie. Zachováva pôvodný herecký výkon v rôznych jazykoch. 60+ hlasov na marketplace.", tags: ["filmový dabbing","Hollywood"] },
          { name: "LOVO AI / Genny", url: "https://lovo.ai", badges: ["FREE"], desc: "500+ AI hlasov v 100+ jazykoch. Genny kombinuje TTS s AI písaním obsahu. Výroba voiceover videa priamo v platforme.", tags: ["500+ hlasov","content writing"] },
          { name: "Fliki", url: "https://fliki.ai", badges: ["FREE"], desc: "Text → video s AI hlasom v jednom workflow. 75+ jazykov, celebrity hlasy. Pre YouTuberov a tvorcov bez nutnosti nahrávania.", tags: ["TTS+video","YouTube"] },
          { name: "Speechify", url: "https://speechify.com", badges: ["FREE"], desc: "Konverzia textu na audio z PDF, webstránok, Word dokumentov a emailov. 30+ jazykov. Mobilná, desktop aj browser extension.", tags: ["čítanie dokumentov","accessibility"] },
          { name: "Google Cloud TTS / WaveNet", badges: ["API"], desc: "Škálovateľná developer-first syntéza reči. WaveNet hlasy, SSML podpora. Ideálny pre veľkoobjemové aplikácie a IVR systémy.", tags: ["Google Cloud","SSML","IVR"] },
          { name: "Microsoft Azure Neural TTS", badges: ["API"], desc: "300+ hlasov, 140+ jazykov a dialektov. SSML customization. Custom Neural Voice pre firemné branding hlasy.", tags: ["Azure","enterprise","custom voice"] },
          { name: "Amazon Polly", badges: ["API"], desc: "AWS TTS s real-time streamingom. Neural TTS hlasy. Pay-per-character platba. Pre aplikácie na AWS infraštruktúre.", tags: ["AWS","real-time stream"] },
          { name: "WellSaid Labs", url: "https://www.wellsaidlabs.com", badges: ["PAID"], desc: "Prémiový firemný TTS. Dôraz na consent a brand voice. Obľúbený v médiách a e-learningu.", tags: ["brand voice","media"] },
          { name: "Kits.ai / Uberduck", badges: ["FREE"], desc: "Kits.ai pre hudobné AI voice covers a konverziu hlasu. Uberduck open API pre vývojárov. Populárny medzi hudobníkmi.", tags: ["hudobné covers","voice conversion"] },
        ],
      },
    ],
  },
  {
    id: "music",
    icon: "🎵",
    title: "Tvorba Hudby",
    subtitle: "Text-to-song · Inštrumentálna tvorba · Royalty-free · DAW integrácie",
    color: "#6ce4ff",
    subsections: [
      {
        title: "Všetky nástroje",
        tools: [
          { name: "Suno v5.5", url: "https://suno.ai", badges: ["TOP","FREE"], desc: "Dominantný lídra s 2M platiacich odberateľov. Text → kompletná pieseň s vokálmi. Suno Studio DAW, Voices (vlastný hlas), Custom Models. Vyrovnané so Warner/UMG. Od $10/mes.", tags: ["vokály","DAW","klonovanie hlasu"] },
          { name: "Udio", url: "https://udio.com", badges: ["TOP","FREE"], desc: "Audiofil výber — 48kHz stereo výstup, stem export, Inpainting editor. Excelentný na inštrumentáls, jazz, classical, ambient. Dočasne vypnuté sťahovania — overiť pred predplatením.", tags: ["48kHz","stem export","inpainting"] },
          { name: "AIVA", url: "https://www.aiva.ai", badges: ["FREE"], desc: "MIDI-first symbolická kompozícia pre skladateľov a scoring. Export MIDI/MusicXML do DAW. Vynikajúci na klasiku, orchestrálne a filmové soundtracky.", tags: ["MIDI","orchestrálne","filmový scoring"] },
          { name: "Beatoven.ai", url: "https://beatoven.ai", badges: ["FREE"], desc: "Najspoľahlivejšia royalty-free licencia — perpetuálna licencia na každý stiahnutý track. Výborná customizácia nálady a žánru.", tags: ["royalty-free","perpetuálna licencia"] },
          { name: "Mubert", url: "https://mubert.com", badges: ["FREE","API"], desc: "Real-time generácia nekonečných hudebných streamov. Developer API pre aplikácie, hry a live streaming. Contributor ekosystém músikov.", tags: ["real-time streaming","API","hry"] },
          { name: "Soundraw", url: "https://soundraw.io", badges: ["PAID"], desc: "Ideálny pre background tracky a podkladovú hudbu. Výborná kontrola dĺžky, tempa a nálady. Obľúbený medzi video tvorcami.", tags: ["background music","YouTube"] },
          { name: "Riffusion", url: "https://riffusion.com", badges: ["FREE"], desc: "Unikátna difúzna metóda cez spectrogramy. Vynikajúci na textúrovanú, ambientnú a experimentálnu loop-based hudbu.", tags: ["ambient","experimental","loops"] },
          { name: "Loudly / Mureka", badges: ["FREE"], desc: "Loudly pre tímovú kolaboráciu na AI hudbe. Mureka skúša rôzne vokálne štýly. Menej využívané alternatívy k Suno/Udio.", tags: ["kolaborácia","vokálne varianty"] },
          { name: "Google MusicFX (Gemini)", badges: ["FREE"], desc: "Integrovaný do Gemini Advanced. Obmedzený na 30-sekundové tracky. Výborný na rýchle nápady a mood testing.", tags: ["Gemini","30s tracky"] },
          { name: "ElevenLabs Sound Effects", url: "https://elevenlabs.io", badges: ["FREE"], desc: "Text → zvukové efekty a environmentálne audio. Výborný doplnok k video a hernej produkcii kde treba originálny zvuk.", tags: ["sound effects","game audio"] },
        ],
      },
    ],
  },
  {
    id: "llm",
    icon: "🧠",
    title: "LLM / AI Asistenti & Chatboty",
    subtitle: "Všeobecné asistenty · Výskum · Písanie · Analýza · Multimodálne modely",
    color: "#c46cff",
    subsections: [
      {
        title: "Komerčné modely (Proprietary)",
        tools: [
          { name: "ChatGPT (GPT-5.5)", url: "https://chatgpt.com", badges: ["TOP","FREE","API"], desc: "60.4% trhový podiel v AI chatbotoch (Q1 2026). Najuniverzálnejší asistent — brainstorming, kreatíva, kód, agentné workflow, Deep Research. $20/mes.", tags: ["všestranný","agent mode","DALL-E"] },
          { name: "Claude (Sonnet 4.6 / Opus 4.6)", url: "https://claude.ai", badges: ["TOP","FREE","API"], desc: "Najlepší na dlhé písanie, kód, analýzu a bezpečnosť. 14% kvartálny rast. Claude Code, Artifacts, Cowork. Presný reasoning s nuansou. $20/mes.", tags: ["kód","dlhé texty","Artifacts"] },
          { name: "Gemini 3.1 Pro (Google)", url: "https://gemini.google.com", badges: ["FREE","API"], desc: "Najlepší pre Google Workspace integráciu. Multimodálny s natívnym vyhľadávaním. Deep Research, Veo 3 video, Imagen 4 obrázky, NotebookLM. $19.99/mes.", tags: ["Google Workspace","multimodálny","realtime web"] },
          { name: "Microsoft Copilot / Copilot 365", url: "https://copilot.microsoft.com", badges: ["FREE"], desc: "Natívna integrácia do Word, Excel, Teams, Outlook, PowerPoint. Microsoft Agent 365 od mája 2026. Najlepší pre Microsoft 365 ekosystém.", tags: ["M365","Word/Excel","Teams"] },
          { name: "Grok (xAI)", url: "https://grok.com", badges: ["FREE"], desc: "Najnižšia miera halucinácie (~4%) podľa niektorých testov. Prístup k X/Twitter dátam real-time. Silný na fact-checking. $30/mes premium.", tags: ["fact-checking","X/Twitter","real-time"] },
          { name: "Perplexity AI", url: "https://perplexity.ai", badges: ["TOP","FREE"], desc: "Answer engine — vyhľadáva web a syntetizuje odpovede s citáciami zdrojov. Subscription-first od februára 2026. Najlepší pre výskum a analytikov. $20/mes.", tags: ["citácie","výskum","realtime web"] },
        ],
      },
      {
        title: "Open-source modely",
        tools: [
          { name: "Meta Llama 4 / Spark", badges: ["OS","FREE"], desc: "Llama 4 Maverick — frontier výkon za dramaticky nižšiu cenu. Meta vydal Spark (nový open-source model, máj 2026). Možné self-hosting a fine-tuning.", tags: ["Meta","self-hosting","fine-tuning"] },
          { name: "DeepSeek V4 / V3.2", badges: ["OS","FREE"], desc: "Čínsky open-source model šokujúco dobrej kvality zadarmo. Vynikajúci pre kód a matematiku. DeepSeek V4 (máj 2026).", tags: ["kód & matematika","zadarmo"] },
          { name: "Mistral / Le Chat", url: "https://mistral.ai", badges: ["OS","FREE","API"], desc: "Európsky open-source lídra (Francúzsko). Mixtral modely, Le Chat produkt. Dobrý pre privacy-sensitive projekty a GDPR compliance.", tags: ["Európa","GDPR","Mixtral"] },
          { name: "Qwen 3 (Alibaba)", badges: ["OS","FREE"], desc: "Frontier-level výkon za dramaticky nižšie náklady cez API. Silný na kód a multijazyčné úlohy.", tags: ["budget API","multijazyčný"] },
        ],
      },
      {
        title: "Špecializované & výskumné nástroje",
        tools: [
          { name: "NotebookLM (Google)", url: "https://notebooklm.google", badges: ["FREE"], desc: "AI na prácu s vlastnými dokumentmi. Odpovedá výhradne z tvojich nahraných súborov. Audio Overview (podcast z dokumentov). Pre výskum a štúdium.", tags: ["RAG","vlastné dáta","podcast z PDF"] },
          { name: "Fathom", url: "https://www.fathom.video", badges: ["FREE"], desc: "AI na nahrávanie a sumarizáciu meetingov. Automatické action items, prepisy a highlights. Integrácie so Zoom, Teams, Meet.", tags: ["meeting notes","Zoom/Teams"] },
          { name: "Jasper / Writesonic / Copy.ai", badges: ["PAID"], desc: "AI písanie obsahu pre marketing tímy. Brand voice, tímové workflow, SEO scoring, výkonnostné predikcie.", tags: ["content marketing","brand voice","SEO"] },
          { name: "OpenRouter / Abacus.ai", badges: ["FREE","API"], desc: "Model routing platformy — posielajú queries k najlepšiemu/najlacnejšiemu modelu automaticky. Pre pokročilých používateľov a vývojárov.", tags: ["model routing","cost optimization"] },
        ],
      },
    ],
  },
  {
    id: "coding",
    icon: "💻",
    title: "Kódovanie, Agenty & No-code",
    subtitle: "AI coding asistenti · Agentné frameworky · App buildery · Automatizácia",
    color: "#6cffb8",
    subsections: [
      {
        title: "Coding IDE & asistenti",
        tools: [
          { name: "Cursor 3", url: "https://cursor.sh", badges: ["TOP","FREE"], desc: "Najlepší AI coding IDE. Agents Window pre paralelné spúšťanie agentov. Celé features end-to-end. Šetrí 8-12h/týždeň podľa testov. Rebuildnutý v 2026.", tags: ["IDE","agenty","full features"] },
          { name: "Claude Code", url: "https://claude.ai/code", badges: ["TOP","PAID"], desc: "CLI agentná coding platforma od Anthropic. GitHub → Vercel workflow. VS Code, JetBrains, Slack integrácie. Cowork GA na macOS/Windows.", tags: ["CLI","Cowork","GitHub/Vercel"] },
          { name: "GitHub Copilot", url: "https://github.com/features/copilot", badges: ["FREE","API"], desc: "Najrozšírenejší coding asistent integrovaný priamo do GitHub a VS Code. Multi-model podpora, Copilot Workspace pre celé issue → PR flow.", tags: ["VS Code","GitHub","PR workflow"] },
          { name: "Windsurf (Codeium)", url: "https://www.windsurf.ai", badges: ["FREE"], desc: "AI-first IDE od Codeium. Cascade mode pre multi-file editing s kontextovým pochopením celej codebase. Silná alternatíva ku Cursor.", tags: ["IDE","Cascade","codebase context"] },
          { name: "Tabnine", url: "https://www.tabnine.com", badges: ["FREE"], desc: "Privacy-first AI coding asistent. Možné lokálne spustenie na vlastnom serveri. Obľúbený v enterprise kde nemôžu posielať kód na externé API.", tags: ["privacy-first","on-premise","enterprise"] },
        ],
      },
      {
        title: "App buildery & no-code",
        tools: [
          { name: "Lovable", url: "https://lovable.dev", badges: ["FREE"], desc: "Najlepší app builder pre zakladateľov bez hlbokého tech zázemá. Prompt → funkčná web app s backendom. Supabase integrácia. GitHub export.", tags: ["fullstack builder","Supabase","founders"] },
          { name: "Bolt.new / StackBlitz", url: "https://bolt.new", badges: ["FREE"], desc: "Browser-based fullstack development. Instantné preview, npm packages priamo v prehliadači. Výborný pre rapid prototyping.", tags: ["browser IDE","prototyping"] },
          { name: "v0 (Vercel)", url: "https://v0.dev", badges: ["FREE"], desc: "Generovanie React/Next.js UI komponentov. Shadcn/ui, Tailwind. Priame nasadenie na Vercel. Pre frontend vývojárov.", tags: ["React/Next.js","UI komponenty","Vercel"] },
          { name: "Replit AI", url: "https://replit.com", badges: ["FREE"], desc: "Online IDE s AI asistentom a instant deployom. Populárny medzi začiatočníkmi a vzdelávacími inštitúciami. Replit Agent.", tags: ["online IDE","vzdelávanie","deploy"] },
          { name: "NxCode / Manus", badges: ["FREE"], desc: "NxCode pre founders s plným vlastníctvom kódu. Manus pre AI workflow orchestráciu naprieč nástrojmi.", tags: ["ownership","orchestrácia"] },
          { name: "Google Stitch / Firebase Genkit", badges: ["FREE"], desc: "Google Stitch pre UI generovanie (nový 2026). Firebase Genkit pre AI-powered backend workflow v Node.js.", tags: ["Google","UI generovanie","Firebase"] },
        ],
      },
      {
        title: "Automatizácia & frameworky",
        tools: [
          { name: "Zapier AI / Central", url: "https://zapier.com", badges: ["FREE"], desc: "Prepojenie 7000+ aplikácií s AI. Zapier Central pre agentné workflow bez kódu. Dominuje no-code automation trh.", tags: ["no-code automation","7000+ apps"] },
          { name: "Make.com", url: "https://www.make.com", badges: ["FREE"], desc: "Vizuálna automatizácia s pokročilými workflow možnosťami. Populárny v Európe, GDPR friendly. Silnejší ako Zapier pre komplexné scenáre.", tags: ["workflow","Európa","GDPR"] },
          { name: "LangChain / LlamaIndex / CrewAI", badges: ["OS","FREE"], desc: "Open-source frameworky pre tvorbu AI agentov a RAG aplikácií. LangChain najrozšírenejší, LlamaIndex pre dátové pipeline, CrewAI pre multi-agent orchestráciu.", tags: ["RAG","agentné frameworky","open-source"] },
        ],
      },
    ],
  },
  {
    id: "nsfw",
    icon: "🔞",
    title: "NSFW & Erotický Obsah",
    subtitle: "Len názvy nástrojov · Pre dospelých (18+)",
    color: "#ff6c6c",
    subsections: [],
  },
];

export const nsfwData = {
  warning: "Táto kategória obsahuje len názvy nástrojov bez odkazov. Väčšina platforiem vyžaduje vek 18+ overenie. Niektoré nástroje sú v šedej právnej zóne v závislosti od jurisdikcie. Spoločnosti ako Civitai, Tensor.Art a ďalšie open-source platformy umožňujú lokálne generovanie bez cenzorov cez vlastné modely (LoRA, SDXL variácie). Väčšina mainstreamových nástrojov (Midjourney, DALL-E, Stability.ai hosted) NSFW obsah zakazuje.",
  subsections: [
    {
      title: "AI generátory obrázkov / videa (NSFW)",
      items: [
        { name: "Civitai", sub: "SD modely, LoRA, komunita" },
        { name: "Tensor.Art", sub: "cloud SD + NSFW modely" },
        { name: "SeaArt AI", sub: "anime + realistické" },
        { name: "Candy AI", sub: "AI kompanioni" },
        { name: "DreamGF / DreamBF", sub: "AI vzťahové kompaniony" },
        { name: "Undress AI (rôzne)", sub: "právne sporné v mnohých krajinách" },
        { name: "SoulGen", sub: "generovanie postáv" },
        { name: "Pornpen AI", sub: "obraz generátor" },
        { name: "Stable Horde", sub: "distribuovaná open GPU sieť" },
        { name: "Eromenos / Waifu", sub: "anime štýl" },
      ],
    },
    {
      title: "AI chatboty / kompanioni (NSFW)",
      items: [
        { name: "Character.AI (filtrácia)", sub: "NSFW filtry, ale obchádza sa" },
        { name: "Crushon AI", sub: "bez cenzúry chatbot" },
        { name: "Janitor AI", sub: "API-based, vlastné modely" },
        { name: "Spicy Chat AI", sub: "roleplay bez obmedzení" },
        { name: "Replika (premium)", sub: "AI kompanion s Erotic Mode" },
        { name: "Venus AI", sub: "anime chatbot" },
        { name: "Kuki / Chai", sub: "rôzne mobile AI chat apps" },
      ],
    },
    {
      title: "Lokálne (self-hosted) NSFW modely",
      items: [
        { name: "Ollama + uncensored LLM", sub: "Llama, Mistral variácie" },
        { name: "ComfyUI + NSFW SD", sub: "lokálne bez obmedzení" },
        { name: "KoboldCPP", sub: "textový NSFW inference" },
        { name: "LM Studio", sub: "lokálne LLM runner" },
      ],
    },
  ],
};
