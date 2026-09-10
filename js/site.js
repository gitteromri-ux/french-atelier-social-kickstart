/* French Atelier · Social Kickstart · injectors */

/* ---------- 5 BIG RTM MOMENTS (Bastille-scale only) ---------- */
const RTM = [
  {
    d: "Sept 29 → Oct 7",
    en: "Paris Fashion Week · Womenswear SS27",
    fr: "Paris Fashion Week",
    city: "Paris",
    hook: "Nine days. Dior, Chanel, Hermès, Louis Vuitton, Saint Laurent. The event that dresses the world for the next twelve months, watched by every fashion desk on Earth.",
    src: "https://www.fhcm.paris/en/paris-fashion-week"
  },
  {
    d: "Oct 7 → 11",
    en: "Fête des Vendanges de Montmartre",
    fr: "Grape Harvest Festival of Montmartre",
    city: "Montmartre, Paris",
    hook: "The last working vineyard in Paris throws its harvest parade on the Butte. Brass bands, a saint's blessing, half a million people, a hundred thousand bottles of Clos Montmartre uncorked in the streets.",
    src: "https://fetedesvendangesdemontmartre.com/"
  },
  {
    d: "Oct 28 → Nov 1",
    en: "Salon du Chocolat · 30th edition",
    fr: "Salon du Chocolat",
    city: "Porte de Versailles, Paris",
    hook: "The world's biggest chocolate salon turns thirty. A chocolate-couture runway where pastry chefs dress models in cacao. Actual couture. Actual chocolate. Broadcast in twenty-eight countries.",
    src: "https://www.salon-du-chocolat.com/en"
  },
  {
    d: "Nov 19 · midnight",
    en: "Beaujolais Nouveau Day",
    fr: "Le Beaujolais Nouveau est arrivé",
    city: "Nationwide · France & 100+ countries",
    hook: "The stroke of midnight on the third Thursday of November. Every bar, every bistro, every French embassy on the planet opens the year's first wine at the same second. A country toasts itself.",
    src: "https://beaujolais.com/en/"
  },
  {
    d: "Late November",
    en: "Champs-Élysées Christmas Illuminations",
    fr: "Illuminations des Champs-Élysées",
    city: "Avenue des Champs-Élysées, Paris",
    hook: "A million lights go on across the most beautiful avenue in the world. Broadcast live on French TV, watched by six hundred million people worldwide. Paris becomes the postcard.",
    src: "https://www.sortiraparis.com/en/what-to-do-in-paris/christmas-in-paris/articles/324091-champs-elysees-illuminations-2026-launch-date-lights-and-program"
  },
  {
    d: "Late Nov → Dec",
    en: "Strasbourg & Colmar Christmas Markets",
    fr: "Marchés de Noël d'Alsace",
    city: "Strasbourg · Colmar (Alsace)",
    hook: "Strasbourg's Christkindelsmärik is 455 years old · Europe's oldest. Two million visitors, half-timbered facades, hot vin chaud and bredele biscuits in the snow. The scene Americans imagine when they imagine Christmas in France.",
    src: "https://www.noel.strasbourg.eu/en"
  }
];

const rtmGrid = document.getElementById("rtmGrid");
if (rtmGrid) RTM.forEach(e => {
  const domain = new URL(e.src).hostname.replace(/^www\./, "");
  rtmGrid.insertAdjacentHTML("beforeend", `
    <article class="rtm-card">
      <div class="rtm-date">${e.d} · 2026</div>
      <div class="rtm-name">${e.en}</div>
      <div class="rtm-city">${e.city}</div>
      <div class="rtm-hook">${e.hook}</div>
      <div class="rtm-src"><a href="${e.src}" target="_blank" rel="noopener">${domain}</a></div>
    </article>
  `);
});

/* ---------- 5 ORGANIC VIDEO FORMATS ---------- */

// FORMAT 1 · Formal vs Spoken (11 clips)
const FVS = [
  {f:"videos/formal_vs_spoken_2.mp4",  p:"posters/formal_vs_spoken_2.jpg",  title:"S'il vous plaît · vs · S'te plaît"},
  {f:"videos/formal_vs_spoken_3.mp4",  p:"posters/formal_vs_spoken_3.jpg",  title:"Je ne sais pas · vs · Chais pas"},
  {f:"videos/formal_vs_spoken_4.mp4",  p:"posters/formal_vs_spoken_4.jpg",  title:"Qu'est-ce que c'est · vs · C'est quoi"},
  {f:"videos/formal_vs_spoken_5.mp4",  p:"posters/formal_vs_spoken_5.jpg",  title:"Il y a · vs · Y a"},
  {f:"videos/formal_vs_spoken_6.mp4",  p:"posters/formal_vs_spoken_6.jpg",  title:"Nous sommes · vs · On est"},
  {f:"videos/formal_vs_spoken_7.mp4",  p:"posters/formal_vs_spoken_7.jpg",  title:"Je suis fatigué · vs · Chuis crevé"},
  {f:"videos/formal_vs_spoken_8.mp4",  p:"posters/formal_vs_spoken_3.jpg",  title:"Ne t'inquiète pas · vs · T'inquiète"},
  {f:"videos/formal_vs_spoken_9.mp4",  p:"posters/formal_vs_spoken_4.jpg",  title:"Peut-être · vs · P'têt"},
  {f:"videos/formal_vs_spoken_10.mp4", p:"posters/formal_vs_spoken_5.jpg",  title:"Je vais · vs · J'vais"},
  {f:"videos/formal_vs_spoken_11.mp4", p:"posters/formal_vs_spoken_6.jpg",  title:"Tu as vu · vs · T'as vu"},
  {f:"videos/formal_vs_spoken_12.mp4", p:"posters/formal_vs_spoken_7.jpg",  title:"C'est un peu · vs · C't'un peu"}
];

// FORMAT 2 · Homonyms (8 clips)
const HOM = [
  {f:"videos/homonyms_1.mp4", p:"posters/homonyms_1.jpg", title:"Ver · Vers · Vert · Verre"},
  {f:"videos/homonyms_2.mp4", p:"posters/homonyms_2.jpg", title:"Sang · Cent · Sans · Sent"},
  {f:"videos/homonyms_3.mp4", p:"posters/homonyms_3.jpg", title:"Mer · Mère · Maire"},
  {f:"videos/homonyms_4.mp4", p:"posters/homonyms_4.jpg", title:"Ou · Où · Août"},
  {f:"videos/homonyms_5.mp4", p:"posters/homonyms_5.jpg", title:"Foi · Foie · Fois"},
  {f:"videos/homonyms_6.mp4", p:"posters/homonyms_6.jpg", title:"Cou · Coup · Coût · Coud"},
  {f:"videos/homonyms_7.mp4", p:"posters/homonyms_1.jpg", title:"Chant · Champ"},
  {f:"videos/homonyms_8.mp4", p:"posters/homonyms_2.jpg", title:"Tant · Temps · Tend · Taon"}
];

// FORMAT 3 · French Tourism · French History
const TH = [
  {f:"videos/french_tourism.mp4", p:"posters/french_tourism.jpg", title:"French Tourism · the map lesson"},
  {f:"videos/french_history.mp4", p:"posters/french_history.jpg", title:"French History · the fast take"}
];

// FORMAT 4 · French Wardrobe · French Holiday
const WH = [
  {f:"videos/french_wardrobe.mp4",  p:"posters/french_wardrobe.jpg", title:"French Wardrobe · the essentials"},
  {f:"videos/french_holiday.mp4",   p:"posters/french_holiday.jpg",  title:"French Holiday · the calendar"},
  {f:"videos/french_holiday_1.mp4", p:"posters/french_holiday.jpg",  title:"French Holiday · the second take"}
];

// FORMAT 5 · French Cheeses · French Wines
const CW = [
  {f:"videos/french_cheeses.mp4",   p:"posters/french_cheeses.jpg",  title:"French Cheeses · chapitre I"},
  {f:"videos/french_cheeses_1.mp4", p:"posters/french_cheeses.jpg",  title:"French Cheeses · chapitre II"},
  {f:"videos/french_wines_1.mp4",   p:"posters/french_wines_1.jpg",  title:"French Wines · chapitre I"},
  {f:"videos/french_wines_2.mp4",   p:"posters/french_wines_2.jpg",  title:"French Wines · chapitre II"}
];

// BEAUTY showcase · viral 4K
const BEAUTY = [
  {f:"videos/beauty_1.mp4", p:"posters/beauty_1.jpg", title:"Paris · l'heure dorée"},
  {f:"videos/beauty_2.mp4", p:"posters/beauty_2.jpg", title:"Un café rue Cambon"},
  {f:"videos/beauty_3.mp4", p:"posters/beauty_3.jpg", title:"Vendanges dans le Bordelais"},
  {f:"videos/beauty_4.mp4", p:"posters/beauty_4.jpg", title:"Le Louvre après la fermeture"},
  {f:"videos/beauty_5.mp4", p:"posters/beauty_5.jpg", title:"Provence · fin d'été"},
  {f:"videos/beauty_6.mp4", p:"posters/beauty_6.jpg", title:"Le marché du dimanche"}
];

function vidCard(v){
  return `
    <div class="vid-card">
      <video muted autoplay loop playsinline preload="metadata" poster="${v.p}">
        <source src="${v.f}" type="video/mp4">
      </video>
      <button class="sound-btn" aria-label="Toggle sound">🔇</button>
      <div class="vid-label">
        <div class="vid-title">${v.title}</div>
      </div>
    </div>`;
}
function fill(id, arr){ const el = document.getElementById(id); if(el) el.innerHTML = arr.map(vidCard).join(""); }
fill("fvsGrid", FVS);
fill("homGrid", HOM);
fill("thGrid",  TH);
fill("whGrid",  WH);
fill("cwGrid",  CW);
fill("beautyGrid", BEAUTY);

// Sound-toggle behavior · one video with sound at a time
document.querySelectorAll(".sound-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".vid-card");
    const vid = card.querySelector("video");
    const willUnmute = vid.muted;
    document.querySelectorAll("video").forEach(v => v.muted = true);
    document.querySelectorAll(".sound-btn").forEach(b => b.textContent = "🔇");
    if (willUnmute) { vid.muted = false; vid.play(); btn.textContent = "🔊"; }
  });
});
document.querySelectorAll(".vid-card video").forEach(v => {
  v.addEventListener("click", () => { if (v.paused) v.play(); else v.pause(); });
});

/* ---------- EMAILS · realistic mockups ---------- */
const EMAILS_LIFECYCLE = [
  {tag:"WELCOME · Email 01", from:"hello@frenchatelier.com", sub:"Bienvenue · your French starts here", pre:"You just took a step most adults never take. Here is what happens in the next seven days.", hero:"heroes/banner.jpg"},
  {tag:"SOUL · Email 08",    from:"vincent@frenchatelier.com", sub:"The French don't say \"I miss you\"", pre:"They say tu me manques · you are missing from me. That single grammatical flip changes how love is spoken.", hero:"heroes/email8_tu_me_manques.jpg"},
  {tag:"SOUL · Email 09",    from:"vincent@frenchatelier.com", sub:"Coffee is a decision, not a habit", pre:"Un café is a verb in Paris. What you order says who you are, and how long you plan to stay.", hero:"heroes/email9_coffee.jpg"},
  {tag:"SOUL · Email 10",    from:"charline@frenchatelier.com", sub:"There is a French word for the cinema I love", pre:"Cinéphile, cinéaste, séance, salle. Four words the industry itself gave the world.", hero:"heroes/email10_cinema.jpg"},
  {tag:"SOUL · Email 11",    from:"philippe@frenchatelier.com", sub:"The song you already know in French, and never realised", pre:"Édith Piaf's rhythm is the same rhythm as your Sunday morning. Here is why.", hero:"heroes/email11_sings.jpg"}
];
const EMAILS_ACQ = [
  {tag:"ACQ · Cold 01", from:"hello@frenchatelier.com", sub:"The French you thought you'd forgotten is still there", pre:"Two questions inside. The second one is the one that surprises everyone.", hero:"heroes/banner.jpg"},
  {tag:"ACQ · Cold 04", from:"charline@frenchatelier.com", sub:"You already speak more French than you think", pre:"250 words you use in English every day are French. We start there.", hero:"heroes/email12_already_speak.jpg"},
  {tag:"ACQ · Trial 02", from:"philippe@frenchatelier.com", sub:"Your first live class is booked · here is what to expect", pre:"Small room, real conversation, no textbooks. Bring one question about a French film.", hero:"heroes/email10_cinema.jpg"},
  {tag:"ACQ · Trial 04", from:"vincent@frenchatelier.com", sub:"The moment a student stops translating", pre:"It happens around week three. The click. We measured it across three cohorts.", hero:"heroes/email11_sings.jpg"},
  {tag:"ACQ · Warm 07", from:"hello@frenchatelier.com", sub:"An invitation to a Chanel culture capsule", pre:"For adults who want French through the doors that stay closed to tourists.", hero:"capsules/capsule-chanel.jpg"}
];
const EMAILS_ONB = [
  {tag:"ONB · Day 1",   from:"hello@frenchatelier.com", sub:"Your Atelier is open · this is your keycard", pre:"Access, cohort link, first live class time. Save this email.", hero:"heroes/banner.jpg"},
  {tag:"ONB · Day 3",   from:"philippe@frenchatelier.com", sub:"How to walk into class the first time", pre:"One sentence to say. One sentence to expect. That is the only preparation.", hero:"heroes/email9_coffee.jpg"},
  {tag:"ONB · Day 7",   from:"charline@frenchatelier.com", sub:"Your first week, what changed", pre:"You will start dreaming in French sooner than you think. Here is why.", hero:"heroes/email8_tu_me_manques.jpg"},
  {tag:"ONB · Day 14",  from:"vincent@frenchatelier.com", sub:"The Six Pillars, and where you are on them", pre:"A private map of your Atelier journey. Print it.", hero:"heroes/email12_already_speak.jpg"},
  {tag:"ONB · Day 30",  from:"hello@frenchatelier.com", sub:"Thirty days in · a small ceremony", pre:"You have earned the first badge. Here is what unlocks next.", hero:"heroes/email11_sings.jpg"}
];
const EMAILS_CAP = [
  {tag:"CAPSULE · Fashion", from:"charline@frenchatelier.com", sub:"Chanel · the Rue Cambon language, live Thursday", pre:"Ninety minutes on the tweed, the camellia, the number five. In French, in English, together.", hero:"capsules/capsule-chanel.jpg"},
  {tag:"CAPSULE · Art",     from:"vincent@frenchatelier.com",  sub:"Impressionism · reading Monet's light, live from Giverny", pre:"A private walk through the atelier language that made a movement.", hero:"capsules/capsule-impressionism.jpg"},
  {tag:"CAPSULE · Heritage",from:"philippe@frenchatelier.com", sub:"Louis XIV · Versailles as grammar, one live evening", pre:"The court, the hierarchy, the vous behind every French politeness that survives today.", hero:"capsules/capsule-louis.jpg"},
  {tag:"CAPSULE · Fashion", from:"charline@frenchatelier.com", sub:"Dior · the New Look, and the words behind it", pre:"1947. The waist returns. The vocabulary of French couture is rewritten. Live class Thursday.", hero:"capsules/hero-versailles.jpg"},
  {tag:"CAPSULE · Art",     from:"vincent@frenchatelier.com",  sub:"Reading a Louvre wall, in twenty French words", pre:"You do not need a degree. You need twenty words. We give you all twenty.", hero:"capsules/bg-salon.jpg"}
];

function emailCard(m){
  return `
    <div class="email-frame">
      <div class="email-chrome">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="from">From: <b>${m.from}</b></span>
      </div>
      <img class="email-hero-img" src="${m.hero}" alt="hero">
      <div class="email-body-min">
        <div class="email-tag">${m.tag}</div>
        <div class="email-sub">${m.sub}</div>
        <div class="email-pre">${m.pre}</div>
        <div class="email-cta">Open in inbox</div>
      </div>
    </div>`;
}
function fillE(id, arr){ const el = document.getElementById(id); if(el) el.innerHTML = arr.map(emailCard).join(""); }
fillE("emailsLifecycle", EMAILS_LIFECYCLE);
fillE("emailsAcq",       EMAILS_ACQ);
fillE("emailsOnb",       EMAILS_ONB);
fillE("emailsCap",       EMAILS_CAP);

/* ---------- CONTENT CALENDAR · 23 posts ---------- */
const CAL_SEP = [
  {date:"Wed · Sept 10", pillar:"prod", pillarL:"Product", head:"Il y a → Y a. One micro-lesson, five seconds.", cap:"Every French sentence you were taught has a spoken twin. Meet the twin.", asset:"formal_vs_spoken_5.mp4"},
  {date:"Fri · Sept 12", pillar:"edu",  pillarL:"Education", head:"Tu me manques. The love flip.", cap:"You are missing from me. Not \"I miss you.\" One grammatical flip changes how love is spoken.", asset:"Carousel · lifecycle email 08"},
  {date:"Mon · Sept 15", pillar:"inspo", pillarL:"Inspiration", head:"Paris, l'heure dorée.", cap:"The city at golden hour, before the crowds return. Save this reel. Plan the trip you never take.", asset:"beauty_1.mp4"},
  {date:"Wed · Sept 17", pillar:"prod",  pillarL:"Product", head:"S'il vous plaît → S'te plaît.", cap:"Formal versus spoken. Same word, different French. The first thing a Parisian barista will notice.", asset:"formal_vs_spoken_2.mp4"},
  {date:"Fri · Sept 19", pillar:"edu",   pillarL:"Education", head:"French Cheeses, chapitre I.", cap:"There is a cheese for every French mood. Twelve names, twelve moods. Here they are.", asset:"french_cheeses.mp4"},
  {date:"Mon · Sept 22", pillar:"inspo", pillarL:"Inspiration", head:"Vendanges dans le Bordelais.", cap:"Golden light, cellar doors, the year's first wine. This is why French sounds like a place, not a language.", asset:"beauty_3.mp4"},
  {date:"Wed · Sept 24", pillar:"prod",  pillarL:"Product", head:"Ver · Vers · Vert · Verre.", cap:"Four spellings, one sound. The homonym trap Parisians navigate a hundred times a day.", asset:"homonyms_1.mp4"},
  {date:"Fri · Sept 26", pillar:"edu",   pillarL:"Education", head:"French Wardrobe · the essentials.", cap:"Five pieces. That is a French wardrobe. Here is what and why.", asset:"french_wardrobe.mp4"},
  {date:"Mon · Sept 29", pillar:"inspo", pillarL:"Inspiration", head:"Paris Fashion Week SS27 · day two.", cap:"Dior. Chanel. Hermès. The nine days that dress the world. Turn the sound on.", asset:"beauty_2.mp4 · RTM Fashion Week"}
];
const CAL_OCT = [
  {date:"Wed · Oct 1", pillar:"prod",  pillarL:"Product", head:"Je ne sais pas → Chais pas.", cap:"The most spoken sentence in France, and the one you were never taught. Two seconds, one lesson.", asset:"formal_vs_spoken_3.mp4"},
  {date:"Fri · Oct 3", pillar:"edu",   pillarL:"Education", head:"The Chanel Capsule opens.", cap:"Rue Cambon vocabulary. The tweed, the camellia, the number five, in the French Mademoiselle spoke.", asset:"capsule-chanel.jpg carousel"},
  {date:"Mon · Oct 6",  pillar:"inspo", pillarL:"Inspiration", head:"French Tourism · the map lesson.", cap:"There are ninety-six departments in France. Each one is a lesson. We start with three.", asset:"french_tourism.mp4"},
  {date:"Wed · Oct 8",  pillar:"prod",  pillarL:"Product", head:"Nous sommes → On est.", cap:"French classrooms teach nous. French streets speak on. One replaces the other in every real conversation.", asset:"formal_vs_spoken_6.mp4"},
  {date:"Fri · Oct 10", pillar:"edu",   pillarL:"Education", head:"Vendanges de Montmartre · the last vineyard in Paris.", cap:"Brass band, saint's blessing, half a million people. Eight words to sing along with the parade.", asset:"french_wines_1.mp4 · RTM Vendanges"},
  {date:"Mon · Oct 13", pillar:"inspo", pillarL:"Inspiration", head:"French Holiday · the calendar.", cap:"Eleven public holidays. Eleven ways France stops the clock. Here are the three you should know.", asset:"french_holiday.mp4"},
  {date:"Wed · Oct 15", pillar:"prod",  pillarL:"Product", head:"Je suis fatigué → Chuis crevé.", cap:"Formal French is polite. Spoken French is honest. Here is the honest one.", asset:"formal_vs_spoken_7.mp4"},
  {date:"Fri · Oct 17", pillar:"edu",   pillarL:"Education", head:"Foi · Foie · Fois. Three sounds, one meaning apart.", cap:"Faith, liver, time. Same sound. How the French hear the difference without thinking.", asset:"homonyms_5.mp4"},
  {date:"Mon · Oct 20", pillar:"inspo", pillarL:"Inspiration", head:"French History · the fast take.", cap:"From Vercingétorix to de Gaulle in ninety seconds. This is how French culture speaks about itself.", asset:"french_history.mp4"},
  {date:"Wed · Oct 22", pillar:"prod",  pillarL:"Product", head:"Ne t'inquiète pas → T'inquiète.", cap:"Two words become one. Reassurance in French, said the way Paris actually says it.", asset:"formal_vs_spoken_8.mp4"},
  {date:"Fri · Oct 24", pillar:"edu",   pillarL:"Education", head:"French Wines · chapitre II.", cap:"Bordeaux, Bourgogne, Champagne, Rhône, Loire. Five regions. Five personalities. Five accents.", asset:"french_wines_2.mp4"},
  {date:"Mon · Oct 27", pillar:"inspo", pillarL:"Inspiration", head:"Salon du Chocolat opens · 30 years, one runway.", cap:"Actual couture. Actual chocolate. The sweetest week Paris has all year, broadcast in 28 countries.", asset:"beauty_6.mp4 · RTM Salon du Chocolat"},
  {date:"Wed · Oct 29", pillar:"prod",  pillarL:"Product", head:"Tant · Temps · Tend · Taon.", cap:"Four spellings. Same sound. The classic Homonym trap Duolingo will never explain.", asset:"homonyms_8.mp4"},
  {date:"Fri · Oct 31", pillar:"edu",   pillarL:"Education", head:"The Mapster, opened to the world.", cap:"Every lesson has a place. Every place has a photograph, a story, a memory. Tap through Paris.", asset:"Live Mapster fold · interactive carousel"}
];

function calRow(r){
  return `
    <tr>
      <td class="date">${r.date}</td>
      <td class="pillar-cell"><span class="pill ${r.pillar}">${r.pillarL}</span></td>
      <td class="headline">${r.head}</td>
      <td class="caption">${r.cap}</td>
      <td class="asset">${r.asset}</td>
    </tr>`;
}
function fillTbody(sel, arr){ const el = document.querySelector(sel); if(el) el.innerHTML = arr.map(calRow).join(""); }
fillTbody("#calSep tbody", CAL_SEP);
fillTbody("#calOct tbody", CAL_OCT);
