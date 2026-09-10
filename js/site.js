/* French Atelier · Social Kickstart · HUGE presentation-grade injectors */

/* ---------- 6 BIG RTM MOMENTS ---------- */
const RTM = [
  {d:"Sept 29 → Oct 7", en:"Paris Fashion Week · Womenswear SS27", city:"Paris", hook:"Nine days. Dior, Chanel, Hermès, Louis Vuitton, Saint Laurent. The event that dresses the world.", src:"https://www.fhcm.paris/en/paris-fashion-week"},
  {d:"Oct 7 → 11",       en:"Fête des Vendanges de Montmartre",      city:"Montmartre, Paris", hook:"The last working vineyard in Paris throws its harvest parade. Brass bands, saint's blessing, half a million people.", src:"https://fetedesvendangesdemontmartre.com/"},
  {d:"Oct 28 → Nov 1",   en:"Salon du Chocolat · 30th edition",       city:"Porte de Versailles, Paris", hook:"The world's biggest chocolate salon turns thirty. Chocolate couture runway. Broadcast in 28 countries.", src:"https://www.salon-du-chocolat.com/en"},
  {d:"Nov 19 · midnight",en:"Beaujolais Nouveau Day",                 city:"France & 100+ countries", hook:"Every bar, bistro, French embassy on the planet opens the year's first wine at the same second.", src:"https://beaujolais.com/en/"},
  {d:"Late November",    en:"Champs-Élysées Christmas Illuminations", city:"Avenue des Champs-Élysées, Paris", hook:"A million lights on the most beautiful avenue in the world. Live on French TV.", src:"https://www.sortiraparis.com/en/what-to-do-in-paris/christmas-in-paris/articles/324091-champs-elysees-illuminations-2026-launch-date-lights-and-program"},
  {d:"Late Nov → Dec",   en:"Strasbourg & Colmar Christmas Markets", city:"Strasbourg · Colmar (Alsace)", hook:"Europe's oldest Christmas market. Half-timbered facades, vin chaud, two million visitors.", src:"https://www.noel.strasbourg.eu/en"}
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
    </article>`);
});

/* ---------- 5 ORGANIC FORMATS · one big showcase video per format ---------- */
// Using clean_ prefixed muxed files (strip-free + audio)
const FORMATS = [
  {
    id: "fvs",
    num: "01",
    title: "Formal vs Spoken",
    tag: "Wednesday Product · 6 clips available",
    lede: "Textbook French on one side, the French Parisians actually speak on the other. The exact reason our academy exists.",
    hero: {f:"videos/clean_formal_vs_spoken_5.mp4", label:"Il y a → Y a"},
    thumbs: [
      {f:"videos/clean_formal_vs_spoken_2.mp4", label:"S'il vous plaît → S'te plaît"},
      {f:"videos/clean_formal_vs_spoken_3.mp4", label:"Je ne sais pas → Chais pas"},
      {f:"videos/clean_formal_vs_spoken_4.mp4", label:"Qu'est-ce que c'est → C'est quoi"},
      {f:"videos/clean_formal_vs_spoken_6.mp4", label:"Nous sommes → On est"},
      {f:"videos/clean_formal_vs_spoken_7.mp4", label:"Je suis fatigué → Chuis crevé"}
    ]
  },
  {
    id: "hom",
    num: "02",
    title: "Homonyms",
    tag: "Friday Education · 6 clips available",
    lede: "Same sound, different word, different meaning. The trap every French speaker learned in childhood.",
    hero: {f:"videos/clean_homonyms_1.mp4", label:"Ver · Vers · Vert · Verre"},
    thumbs: [
      {f:"videos/clean_homonyms_2.mp4", label:"Sang · Cent · Sans · Sent"},
      {f:"videos/clean_homonyms_3.mp4", label:"Mer · Mère · Maire"},
      {f:"videos/clean_homonyms_4.mp4", label:"Ou · Où · Août"},
      {f:"videos/clean_homonyms_5.mp4", label:"Foi · Foie · Fois"},
      {f:"videos/clean_homonyms_6.mp4", label:"Cou · Coup · Coût · Coud"}
    ]
  },
  {
    id: "th",
    num: "03",
    title: "French Tourism · French History",
    tag: "Monday Inspiration · 2 clips available",
    lede: "The map lesson and the fast-take history lesson. Culture teaching, one region and one century at a time.",
    hero: {f:"videos/clean_french_tourism.mp4", label:"Tourism · Bienvenue en France"},
    thumbs: [
      {f:"videos/clean_french_history.mp4", label:"History · Le Roi Soleil"}
    ]
  },
  {
    id: "wh",
    num: "04",
    title: "French Wardrobe · French Holiday",
    tag: "Monday Inspiration · 2 clips available",
    lede: "Five essentials of a French wardrobe. Eleven holidays that shape a French year.",
    hero: {f:"videos/clean_french_wardrobe.mp4", label:"Wardrobe · the essentials"},
    thumbs: [
      {f:"videos/clean_french_holiday.mp4", label:"Holiday · the calendar"}
    ]
  },
  {
    id: "cw",
    num: "05",
    title: "French Cheeses · French Wines",
    tag: "Friday Education · 3 clips available",
    lede: "The two categories no French meal survives without. Twelve cheeses, five wine regions, one soundtrack.",
    hero: {f:"videos/clean_french_cheeses.mp4", label:"Cheeses · chapitre I"},
    thumbs: [
      {f:"videos/clean_french_wines_1.mp4", label:"Wines · chapitre I"},
      {f:"videos/clean_french_wines_2.mp4", label:"Wines · chapitre II"}
    ]
  }
];

function bigFormatBlock(F){
  return `
    <div class="fmt-block" data-fmt="${F.id}">
      <div class="fmt-head">
        <div class="fmt-num">${F.num}</div>
        <div class="fmt-titles">
          <h3 class="fmt-title">${F.title}</h3>
          <div class="fmt-tag">${F.tag}</div>
          <p class="fmt-lede">${F.lede}</p>
        </div>
      </div>
      <div class="fmt-stage">
        <video class="fmt-hero" autoplay muted loop playsinline preload="metadata" src="${F.hero.f}"></video>
        <button class="fmt-sound" data-fmt="${F.id}" aria-label="Toggle sound">🔇 SOUND</button>
        <div class="fmt-cap">${F.hero.label}</div>
      </div>
      <div class="fmt-thumbs">
        ${F.thumbs.map(t => `<button class="fmt-thumb" data-src="${t.f}" data-label="${t.label}"><video muted playsinline preload="metadata" src="${t.f}"></video><span>${t.label}</span></button>`).join("")}
      </div>
    </div>`;
}

const fmtHost = document.getElementById("formatsHost");
if (fmtHost) fmtHost.innerHTML = FORMATS.map(bigFormatBlock).join("");

// Thumb click swaps hero
document.querySelectorAll(".fmt-thumb").forEach(btn => {
  btn.addEventListener("click", () => {
    const block = btn.closest(".fmt-block");
    const hero = block.querySelector(".fmt-hero");
    const cap = block.querySelector(".fmt-cap");
    hero.src = btn.dataset.src;
    hero.play();
    cap.textContent = btn.dataset.label;
  });
});
// Sound toggle per format hero
document.querySelectorAll(".fmt-sound").forEach(btn => {
  btn.addEventListener("click", () => {
    const block = btn.closest(".fmt-block");
    const hero = block.querySelector(".fmt-hero");
    document.querySelectorAll(".fmt-hero").forEach(v => v.muted = true);
    document.querySelectorAll(".fmt-sound").forEach(b => b.textContent = "🔇 SOUND");
    if (hero.muted) { hero.muted = false; btn.textContent = "🔊 SOUND ON"; hero.play(); }
  });
});

/* ---------- BEAUTY · 6 aspirational reels ---------- */
const BEAUTY = [
  {f:"videos/beauty_1.mp4", p:"posters/beauty_1.jpg", title:"Louvre · Mona Lisa crowd"},
  {f:"videos/beauty_2.mp4", p:"posters/beauty_2.jpg", title:"Palais Garnier · after hours"},
  {f:"videos/beauty_3.mp4", p:"posters/beauty_3.jpg", title:"One day in Cannes · Cartier"},
  {f:"videos/beauty_4.mp4", p:"posters/beauty_4.jpg", title:"Rue Cambon · Chanel morning"},
  {f:"videos/beauty_5.mp4", p:"posters/beauty_5.jpg", title:"Provence · fin d'été"},
  {f:"videos/beauty_6.mp4", p:"posters/beauty_6.jpg", title:"Le marché du dimanche"}
];
const beautyHost = document.getElementById("beautyGrid");
if (beautyHost) {
  beautyHost.innerHTML = BEAUTY.map(v => `
    <div class="beauty-card">
      <video autoplay muted loop playsinline preload="metadata" poster="${v.p}" src="${v.f}"></video>
      <button class="beauty-sound" aria-label="Toggle sound">🔇</button>
      <div class="beauty-cap">${v.title}</div>
    </div>`).join("");
  document.querySelectorAll(".beauty-sound").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = btn.previousElementSibling;
      document.querySelectorAll(".beauty-card video, .fmt-hero").forEach(vv => vv.muted = true);
      document.querySelectorAll(".beauty-sound, .fmt-sound").forEach(b => { b.textContent = b.classList.contains("fmt-sound") ? "🔇 SOUND" : "🔇"; });
      if (v.muted) { v.muted = false; btn.textContent = "🔊"; v.play(); }
    });
  });
}

/* ---------- ALL 30 EMAILS · organized by category ---------- */
const EMAILS = [
  // WELCOME
  {n:"01",day:"0",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"Bienvenue · your French starts here",pre:"You just took a step most adults never take. Here is what happens in the next seven days.",hero:"heroes/banner.jpg"},
  {n:"02",day:"1",cat:"WELCOME",from:"charline@frenchatelier.com",sub:"Meet your teacher · live from France",pre:"Charline introduces herself. One minute. In her real Paris apartment.",hero:"heroes/banner.jpg"},
  {n:"03",day:"3",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"The 4-minute placement test",pre:"Four minutes. One click. We match you to the right cohort.",hero:"heroes/banner.jpg"},
  {n:"04",day:"5",cat:"WELCOME",from:"philippe@frenchatelier.com",sub:"Why we teach in groups of 8 (not 1)",pre:"The intimacy of a private tutor. The energy of a real cohort. That's the trick.",hero:"heroes/banner.jpg"},
  {n:"05",day:"7",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"What a French Atelier class actually looks like",pre:"Three-minute tour of a live session. No slides. Real conversation.",hero:"heroes/banner.jpg"},
  // SOUL
  {n:"08",day:"25",cat:"SOUL",from:"vincent@frenchatelier.com",sub:"The French don't say \"I miss you\"",pre:"They say tu me manques · you are missing from me. One grammatical flip changes how love is spoken.",hero:"heroes/email8_tu_me_manques.jpg"},
  {n:"11",day:"35",cat:"SOUL",from:"philippe@frenchatelier.com",sub:"On June 21st, all of France sings",pre:"La Fête de la Musique. Every corner, every square. Twelve words to sing along.",hero:"heroes/email11_sings.jpg"},
  {n:"15",day:"49",cat:"SOUL",from:"vincent@frenchatelier.com",sub:"The unsent letter · a Proust passage we love",pre:"Twelve lines. One breath. The rhythm of French thought.",hero:"heroes/email8_tu_me_manques.jpg"},
  {n:"19",day:"63",cat:"SOUL",from:"charline@frenchatelier.com",sub:"The single French expression that defines friendship",pre:"On se voit. See you. It's not a farewell, it's a promise.",hero:"heroes/email9_coffee.jpg"},
  // TASTE
  {n:"09",day:"28",cat:"TASTE",from:"vincent@frenchatelier.com",sub:"How to order a coffee in Paris (without embarrassing yourself)",pre:"Un café is a verb in Paris. What you order says who you are, and how long you plan to stay.",hero:"heroes/email9_coffee.jpg"},
  {n:"13",day:"42",cat:"TASTE",from:"philippe@frenchatelier.com",sub:"The French word for hunger has three meanings",pre:"Faim, envie, gourmandise. The French map appetite the way English maps colour.",hero:"heroes/email9_coffee.jpg"},
  {n:"17",day:"56",cat:"TASTE",from:"charline@frenchatelier.com",sub:"The market in Lyon at 8am",pre:"Twelve stalls. Nine cheeses. One vocabulary that opens them all.",hero:"heroes/email9_coffee.jpg"},
  // STYLE
  {n:"10",day:"32",cat:"STYLE",from:"charline@frenchatelier.com",sub:"There is a French word for the cinema I love",pre:"Cinéphile, cinéaste, séance, salle. Four words the industry itself gave the world.",hero:"heroes/email10_cinema.jpg"},
  {n:"14",day:"46",cat:"STYLE",from:"charline@frenchatelier.com",sub:"Why Parisian women say less",pre:"Silence is a Parisian vocabulary. Here is when to use it.",hero:"heroes/email10_cinema.jpg"},
  {n:"18",day:"60",cat:"STYLE",from:"charline@frenchatelier.com",sub:"What a Parisian wears to a wedding (it's not what you think)",pre:"Navy. Never black. Never white. Three rules, one word: sobriété.",hero:"heroes/email10_cinema.jpg"},
  // ART
  {n:"07",day:"21",cat:"ART",from:"vincent@frenchatelier.com",sub:"Why your French teacher should know Monet",pre:"The Impressionists rewrote how French sees light. That's the language you inherit.",hero:"capsules/capsule-impressionism.jpg"},
  {n:"12",day:"39",cat:"ART",from:"philippe@frenchatelier.com",sub:"You already speak more French than you think",pre:"250 words you use in English every day are French. We start there.",hero:"heroes/email12_already_speak.jpg"},
  {n:"16",day:"53",cat:"ART",from:"vincent@frenchatelier.com",sub:"Three French painters who never left their region",pre:"Cézanne stayed in Aix. Millet stayed in Barbizon. The vocabulary of a place.",hero:"capsules/capsule-impressionism.jpg"},
  {n:"20",day:"67",cat:"ART",from:"vincent@frenchatelier.com",sub:"Why French film has no Hollywood ending",pre:"La fin ouverte. The open ending. A grammar you can borrow.",hero:"heroes/email10_cinema.jpg"},
  // OTHER
  {n:"06",day:"14",cat:"PILLARS",from:"hello@frenchatelier.com",sub:"The Six Pillars · why we teach French this way",pre:"Grammar. Speech. Reading. Culture. Confidence. Community. One map for the whole journey.",hero:"heroes/banner.jpg"},
  {n:"21",day:"70",cat:"PILLARS",from:"philippe@frenchatelier.com",sub:"The slow Sunday · France's quietest ritual",pre:"Le dimanche. What shops close. What stays open. A vocabulary of stillness.",hero:"heroes/email9_coffee.jpg"},
  // TRIAL
  {n:"22",day:"74",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Your free 20-minute advisor call · book it",pre:"One call. We match you to a cohort, an instructor, a level.",hero:"heroes/banner.jpg"},
  {n:"23",day:"78",cat:"TRIAL",from:"philippe@frenchatelier.com",sub:"What a 12-week cohort actually changes",pre:"Twelve weeks. Live classes twice a week. Here's the before-and-after we measured.",hero:"heroes/banner.jpg"},
  {n:"24",day:"82",cat:"TRIAL",from:"charline@frenchatelier.com",sub:"Charline answers your most asked question",pre:"Am I too old to learn? Ninety-second video reply.",hero:"heroes/banner.jpg"},
  {n:"25",day:"86",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Your seat in the July cohort · held until Friday",pre:"Ten seats per cohort. Yours is reserved until Friday at midnight.",hero:"heroes/banner.jpg"},
  {n:"26",day:"90",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Last call · July cohort closes tonight",pre:"Midnight Paris time. The next cohort opens in October.",hero:"heroes/banner.jpg"},
  // REACTIVATION
  {n:"27",day:"150",cat:"REACTIVATION",from:"hello@frenchatelier.com",sub:"Your French is still here. We saved your seat.",pre:"You paused. That's fine. The next cohort starts in three weeks.",hero:"heroes/banner.jpg"},
  {n:"28",day:"160",cat:"REACTIVATION",from:"charline@frenchatelier.com",sub:"Three students who came back after a year (and what changed)",pre:"Marina. James. Eleanor. Same fear, same return. Ninety seconds.",hero:"heroes/banner.jpg"},
  // BASTILLE
  {n:"29",day:"170",cat:"BASTILLE",from:"hello@frenchatelier.com",sub:"Win a long weekend in Paris · drawn live July 14",pre:"Enter free. Drawn live on Bastille Day. Two nights, flights included.",hero:"heroes/banner.jpg"},
  {n:"30",day:"172",cat:"BASTILLE",from:"hello@frenchatelier.com",sub:"Last 48 hours · Bastille trip draw closes Sunday",pre:"Two nights in Paris. Flights included. Enter free before Sunday midnight.",hero:"heroes/banner.jpg"}
];

function emailCard(m){
  return `
    <div class="email-frame">
      <div class="email-chrome">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="from">From: <b>${m.from}</b></span>
        <span class="day">Day ${m.day}</span>
      </div>
      <img class="email-hero-img" src="${m.hero}" alt="hero" loading="lazy">
      <div class="email-body-min">
        <div class="email-tag">${m.cat} · Email ${m.n} of 30</div>
        <div class="email-sub">${m.sub}</div>
        <div class="email-pre">${m.pre}</div>
        <div class="email-cta">Open in inbox</div>
      </div>
    </div>`;
}

// Group by category
const CATS = ["WELCOME","SOUL","TASTE","STYLE","ART","PILLARS","TRIAL","REACTIVATION","BASTILLE"];
const emailsHost = document.getElementById("emailsHost");
if (emailsHost) {
  emailsHost.innerHTML = CATS.map(cat => {
    const items = EMAILS.filter(e => e.cat === cat);
    if (!items.length) return "";
    return `
      <div class="email-track">
        <div class="track-h">
          <h3>${cat}</h3>
          <div class="count">${items.length} emails</div>
        </div>
        <div class="email-row">${items.map(emailCard).join("")}</div>
      </div>`;
  }).join("");
}

/* ---------- CONTENT CALENDAR ---------- */
const CAL_SEP = [
  {date:"Wed · Sept 10", pillar:"prod", pillarL:"Product", head:"Il y a → Y a.", cap:"Every French sentence you were taught has a spoken twin.", asset:"clean_formal_vs_spoken_5.mp4"},
  {date:"Fri · Sept 12", pillar:"edu",  pillarL:"Education", head:"Tu me manques.", cap:"You are missing from me. Not \"I miss you.\"", asset:"Carousel · email 08"},
  {date:"Mon · Sept 15", pillar:"inspo", pillarL:"Inspiration", head:"Paris, l'heure dorée.", cap:"The city at golden hour, before the crowds return.", asset:"beauty_1.mp4"},
  {date:"Wed · Sept 17", pillar:"prod",  pillarL:"Product", head:"S'il vous plaît → S'te plaît.", cap:"Formal versus spoken. Same word, different French.", asset:"clean_formal_vs_spoken_2.mp4"},
  {date:"Fri · Sept 19", pillar:"edu",   pillarL:"Education", head:"Cheeses, chapitre I.", cap:"There is a cheese for every French mood.", asset:"clean_french_cheeses.mp4"},
  {date:"Mon · Sept 22", pillar:"inspo", pillarL:"Inspiration", head:"Vendanges dans le Bordelais.", cap:"Golden light, cellar doors, the year's first wine.", asset:"beauty_3.mp4"},
  {date:"Wed · Sept 24", pillar:"prod",  pillarL:"Product", head:"Ver · Vers · Vert · Verre.", cap:"Four spellings, one sound.", asset:"clean_homonyms_1.mp4"},
  {date:"Fri · Sept 26", pillar:"edu",   pillarL:"Education", head:"French Wardrobe · the essentials.", cap:"Five pieces. That is a French wardrobe.", asset:"clean_french_wardrobe.mp4"},
  {date:"Mon · Sept 29", pillar:"inspo", pillarL:"Inspiration", head:"Paris Fashion Week SS27.", cap:"Dior. Chanel. Hermès. Nine days that dress the world.", asset:"beauty_2.mp4 · RTM"}
];
const CAL_OCT = [
  {date:"Wed · Oct 1", pillar:"prod",  pillarL:"Product", head:"Je ne sais pas → Chais pas.", cap:"The most spoken sentence in France.", asset:"clean_formal_vs_spoken_3.mp4"},
  {date:"Fri · Oct 3", pillar:"edu",   pillarL:"Education", head:"Chanel Capsule opens.", cap:"Rue Cambon vocabulary. Live class Thursday.", asset:"capsule-chanel.jpg"},
  {date:"Mon · Oct 6",  pillar:"inspo", pillarL:"Inspiration", head:"French Tourism · the map lesson.", cap:"Ninety-six departments. Three to know first.", asset:"clean_french_tourism.mp4"},
  {date:"Wed · Oct 8",  pillar:"prod",  pillarL:"Product", head:"Nous sommes → On est.", cap:"French classrooms teach nous. Streets speak on.", asset:"clean_formal_vs_spoken_6.mp4"},
  {date:"Fri · Oct 10", pillar:"edu",   pillarL:"Education", head:"Vendanges de Montmartre.", cap:"The last vineyard in Paris. Brass, saint, parade.", asset:"clean_french_wines_1.mp4 · RTM"},
  {date:"Mon · Oct 13", pillar:"inspo", pillarL:"Inspiration", head:"French Holiday · the calendar.", cap:"Eleven public holidays. The three you should know.", asset:"clean_french_holiday.mp4"},
  {date:"Wed · Oct 15", pillar:"prod",  pillarL:"Product", head:"Je suis fatigué → Chuis crevé.", cap:"Formal French is polite. Spoken French is honest.", asset:"clean_formal_vs_spoken_7.mp4"},
  {date:"Fri · Oct 17", pillar:"edu",   pillarL:"Education", head:"Foi · Foie · Fois.", cap:"Faith, liver, time. Same sound.", asset:"clean_homonyms_5.mp4"},
  {date:"Mon · Oct 20", pillar:"inspo", pillarL:"Inspiration", head:"French History · le Roi Soleil.", cap:"Louis XIV in ninety seconds.", asset:"clean_french_history.mp4"},
  {date:"Wed · Oct 22", pillar:"prod",  pillarL:"Product", head:"Sang · Cent · Sans · Sent.", cap:"Same sound, four meanings.", asset:"clean_homonyms_2.mp4"},
  {date:"Fri · Oct 24", pillar:"edu",   pillarL:"Education", head:"French Wines · chapitre II.", cap:"Bordeaux, Bourgogne, Champagne, Rhône, Loire.", asset:"clean_french_wines_2.mp4"},
  {date:"Mon · Oct 27", pillar:"inspo", pillarL:"Inspiration", head:"Salon du Chocolat opens.", cap:"Thirty years. Actual chocolate couture runway.", asset:"beauty_6.mp4 · RTM"},
  {date:"Wed · Oct 29", pillar:"prod",  pillarL:"Product", head:"Mer · Mère · Maire.", cap:"The classic Homonym trap.", asset:"clean_homonyms_3.mp4"},
  {date:"Fri · Oct 31", pillar:"edu",   pillarL:"Education", head:"The Mapster, opened to the world.", cap:"Tap through Paris.", asset:"Live Mapster · interactive"}
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
