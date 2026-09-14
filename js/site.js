/* French Atelier · Social Kickstart · presentation-grade injectors */

/* ---------- 6 BIG RTM MOMENTS with 4K imagery ---------- */
const RTM = [
  {img:"rtm/rtm_fashion_week.png",  d:"Sept 29 → Oct 7",  en:"Paris Fashion Week SS27",             city:"Paris · Grand Palais",           hook:"Dior, Chanel, Hermès, Louis Vuitton, Saint Laurent. Nine days of runway shows in Paris.", src:"https://www.fhcm.paris/en/paris-fashion-week", color:"#8B0000"},
  {img:"rtm/rtm_vendanges.png",     d:"Oct 7 → 11",       en:"Fête des Vendanges de Montmartre",    city:"Montmartre, Paris",              hook:"Wine harvest parade on the Butte. Brass bands, period costume, half a million people.", src:"https://fetedesvendangesdemontmartre.com/", color:"#7A2C2A"},
  {img:"rtm/rtm_chocolat.png",      d:"Oct 28 → Nov 1",   en:"Salon du Chocolat · 30th edition",    city:"Porte de Versailles, Paris",     hook:"Chocolate-couture runway show. Broadcast in 28 countries. 30th anniversary.", src:"https://www.salon-du-chocolat.com/en", color:"#5A3A1E"},
  {img:"rtm/rtm_beaujolais.png",    d:"Nov 19 · midnight",en:"Beaujolais Nouveau Day",              city:"France · 100+ countries",        hook:"Every bar and bistro opens the year's first wine at the same second across time zones.", src:"https://beaujolais.com/en/", color:"#6B0F1A"},
  {img:"rtm/rtm_champs.png",        d:"Late November",    en:"Champs-Élysées Christmas Illuminations", city:"Avenue des Champs-Élysées, Paris", hook:"A million lights turn on across the avenue. Live-broadcast ceremony.", src:"https://www.sortiraparis.com/en/what-to-do-in-paris/christmas-in-paris/articles/324091-champs-elysees-illuminations-2026-launch-date-lights-and-program", color:"#A5842D"},
  {img:"rtm/rtm_strasbourg.png",    d:"Late Nov → Dec",   en:"Strasbourg Christmas Market",          city:"Strasbourg (Alsace)",            hook:"Europe's oldest Christmas market · 455 years. Two million visitors, vin chaud, half-timbered chalets.", src:"https://www.noel.strasbourg.eu/en", color:"#0A4D3F"}
];
const rtmGrid = document.getElementById("rtmGrid");
if (rtmGrid) RTM.forEach(e => {
  const domain = new URL(e.src).hostname.replace(/^www\./, "");
  rtmGrid.insertAdjacentHTML("beforeend", `
    <article class="rtm-card" style="--accent:${e.color}">
      <div class="rtm-img"><img src="${e.img}" alt="${e.en}"></div>
      <div class="rtm-body">
        <div class="rtm-date">${e.d} · 2026</div>
        <div class="rtm-name">${e.en}</div>
        <div class="rtm-city">${e.city}</div>
        <div class="rtm-hook">${e.hook}</div>
        <div class="rtm-src"><a href="${e.src}" target="_blank" rel="noopener">${domain}</a></div>
      </div>
    </article>`);
});

/* ---------- 5 ORGANIC FORMATS · UNIQUE hero per format · no duplicates, no short clips ---------- */
// Rules enforced: each format gets ONE hero video (chosen for longest good take) + up to 3 different-content thumbs.
// ALL 28 organic burned videos, every clip per format, uploaded to CEO deck.
const FORMATS = [
  {
    id: "fvs", num: "01", title: "Formal vs Spoken French", tag: "Wednesday Product",
    availability: "11 raw clips from Drive",
    lede: "Textbook French on one side. The French Parisians actually speak on the other.",
    hero: {f:"videos/formal_vs_spoken_5.mp4", label:"Il y a · Y a · 10s"},
    thumbs: [
      {f:"videos/formal_vs_spoken_2.mp4",  label:"Formal vs Spoken · take 02"},
      {f:"videos/formal_vs_spoken_3.mp4",  label:"Formal vs Spoken · take 03"},
      {f:"videos/formal_vs_spoken_4.mp4",  label:"Formal vs Spoken · take 04"},
      {f:"videos/formal_vs_spoken_6.mp4",  label:"Formal vs Spoken · take 06 · 12s"},
      {f:"videos/formal_vs_spoken_7.mp4",  label:"Formal vs Spoken · take 07 · 14s"},
      {f:"videos/formal_vs_spoken_8.mp4",  label:"Formal vs Spoken · take 08 · 13s"},
      {f:"videos/formal_vs_spoken_9.mp4",  label:"Peut-être · P'têt · 10s"},
      {f:"videos/formal_vs_spoken_10.mp4", label:"Formal vs Spoken · take 10 · 9s"},
      {f:"videos/formal_vs_spoken_11.mp4", label:"Tu as vu · T'as vu · 10s"},
      {f:"videos/formal_vs_spoken_12.mp4", label:"C'est un peu · C't'un peu · 10s"}
    ]
  },
  {
    id: "hom", num: "02", title: "French Homonyms", tag: "Friday Education",
    availability: "8 raw clips from Drive",
    lede: "Same sound. Different word. Different meaning.",
    hero: {f:"videos/homonyms_5.mp4", label:"Homonyms · take 05 · 17s"},
    thumbs: [
      {f:"videos/homonyms_1.mp4",  label:"Charline intro · 9s"},
      {f:"videos/homonyms_2.mp4",  label:"Sang · Cent · Sans · Sent · 10s"},
      {f:"videos/homonyms_3.mp4",  label:"Homonyms · take 03 · 12s"},
      {f:"videos/homonyms_4.mp4",  label:"Ou · Où · Août · 12s"},
      {f:"videos/homonyms_6.mp4",  label:"Homonyms · take 06 · 18s"},
      {f:"videos/homonyms_7.mp4",  label:"Chant · Champ · 13s"},
      {f:"videos/homonyms_8.mp4",  label:"Tant · Temps · Tend · Taon · 20s"}
    ]
  },
  {
    id: "th", num: "03", title: "French Tourism · French History", tag: "Monday Inspiration",
    availability: "2 raw clips from Drive",
    lede: "The map lesson and the fast-take history lesson.",
    hero: {f:"videos/french_tourism.mp4", label:"Tourism · Bienvenue en France · 34s"},
    thumbs: [
      {f:"videos/french_history.mp4",  label:"History · Le Roi Soleil · 35s"}
    ]
  },
  {
    id: "wh", num: "04", title: "French Wardrobe · French Holiday", tag: "Monday Inspiration",
    availability: "2 raw clips from Drive",
    lede: "Five wardrobe essentials. Eleven public holidays.",
    hero: {f:"videos/french_wardrobe.mp4", label:"Wardrobe · full 35s take"},
    thumbs: [
      {f:"videos/french_holiday.mp4",  label:"Holiday · full 40s take"}
    ]
  },
  {
    id: "cw", num: "05", title: "French Cheeses · French Wines", tag: "Friday Education",
    availability: "3 raw clips from Drive",
    lede: "The two categories no French meal survives without.",
    hero: {f:"videos/french_wines_1.mp4", label:"Wines · chapitre I · 36s"},
    thumbs: [
      {f:"videos/french_wines_2.mp4",  label:"Wines · chapitre II · 35s"},
      {f:"videos/french_cheeses.mp4",  label:"Cheeses · full 24s take"}
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
          <div class="fmt-tag">${F.tag} · ${F.availability}</div>
          <p class="fmt-lede">${F.lede}</p>
        </div>
      </div>
      <div class="fmt-stage">
        <video class="fmt-hero" autoplay muted loop playsinline preload="metadata" src="${F.hero.f}"></video>
        <button class="fmt-sound" data-fmt="${F.id}" aria-label="Toggle sound">🔇 SOUND</button>
        <div class="fmt-cap">${F.hero.label}</div>
      </div>
      <div class="fmt-thumbs">
        ${F.thumbs.map(t => {
          const poster = t.f.replace("videos/","posters/").replace(".mp4",".jpg");
          return `<button class="fmt-thumb" data-src="${t.f}" data-label="${t.label}"><img class="fmt-thumb-img" src="${poster}" alt="${t.label}" loading="lazy"><span>${t.label}</span></button>`;
        }).join("")}
      </div>
    </div>`;
}

const fmtHost = document.getElementById("formatsHost");
if (fmtHost) fmtHost.innerHTML = FORMATS.map(bigFormatBlock).join("");

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
document.querySelectorAll(".fmt-sound").forEach(btn => {
  btn.addEventListener("click", () => {
    const block = btn.closest(".fmt-block");
    const hero = block.querySelector(".fmt-hero");
    document.querySelectorAll(".fmt-hero, .beauty-card video").forEach(v => v.muted = true);
    document.querySelectorAll(".fmt-sound").forEach(b => b.textContent = "🔇 SOUND");
    document.querySelectorAll(".beauty-sound").forEach(b => b.textContent = "🔇");
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
      document.querySelectorAll(".beauty-sound").forEach(b => b.textContent = "🔇");
      document.querySelectorAll(".fmt-sound").forEach(b => b.textContent = "🔇 SOUND");
      if (v.muted) { v.muted = false; btn.textContent = "🔊"; v.play(); }
    });
  });
}

/* ---------- ALL 30 EMAILS ---------- */
const EMAILS = [
  // Sandra's ACQ Drip Series Stage 3 (12 emails, real subject lines + banners)
  {n:"01",day:"0",cat:"CELEBS",from:"hello@frenchatelier.com",sub:"Meet the French names the world knows",pre:"Mbappe, Omar Sy, Marion Cotillard. Six names that open conversations in France.",hero:"emails_real/01-celebs-today.jpg"},
  {n:"02",day:"2",cat:"CELEBS",from:"hello@frenchatelier.com",sub:"Meet six French lives that changed the world",pre:"From Joan of Arc to Marie Curie. Stories you will want to retell.",hero:"emails_real/02-celebs-history.jpg"},
  {n:"03",day:"4",cat:"CULTURE",from:"hello@frenchatelier.com",sub:"Meet Edith Piaf, the little sparrow",pre:"A street singer who became the voice of France.",hero:"emails_real/03-edith-piaf.jpg"},
  {n:"04",day:"6",cat:"CULTURE",from:"hello@frenchatelier.com",sub:"Decode the musketeer legend",pre:"The true men behind d'Artagnan, Athos, Porthos and Aramis.",hero:"emails_real/04-musketeers.jpg"},
  {n:"05",day:"8",cat:"PROMO",from:"hello@frenchatelier.com",sub:"Take the quiz, claim your reward",pre:"Five friendly questions. Do well and earn something special.",hero:"emails_real/05-promo-quiz.jpg"},
  {n:"06",day:"10",cat:"PROMO",from:"hello@frenchatelier.com",sub:"Claim your welcome scholarship",pre:"20% off your course, and a seat open in the next class.",hero:"emails_real/06-promo-seat.jpg"},
  {n:"07",day:"12",cat:"PROMO",from:"hello@frenchatelier.com",sub:"Save your seat, the class is filling",pre:"A few seats left, and your 20% welcome scholarship still applies.",hero:"emails_real/07-promo-seat-2.jpg"},
  {n:"08",day:"14",cat:"PROMO",from:"hello@frenchatelier.com",sub:"Final call, save your seat",pre:"The class is nearly full. Your 20% closes with it.",hero:"emails_real/08-promo-final.jpg"},
  {n:"09",day:"16",cat:"PRODUCT",from:"hello@frenchatelier.com",sub:"Learn live with real teachers from France",pre:"Small groups, 85 live minutes, and someone who hears you speak.",hero:"emails_real/09-product-teachers.jpg"},
  {n:"10",day:"18",cat:"PRODUCT",from:"hello@frenchatelier.com",sub:"Master French, region by region",pre:"Courses that travel from Paris to the Basque Country while you learn.",hero:"emails_real/10-product-journeys.jpg"},
  {n:"11",day:"20",cat:"PRODUCT",from:"hello@frenchatelier.com",sub:"Learn France, not just French",pre:"Art, food, music and daily rituals, inside every class.",hero:"emails_real/11-product-culture.jpg"},
  {n:"12",day:"22",cat:"PRODUCT",from:"hello@frenchatelier.com",sub:"Choose a school, not an app",pre:"A fair comparison, and what makes French Atelier different.",hero:"emails_real/12-product-difference.jpg"},
  // WhatsApp RET/ACQ Broadcast topics (6 landing pages, real hero imagery)
  {n:"13",day:"25",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"The Paris Metro alphabet",pre:"Fourteen lines, thirteen colours. The vocabulary Parisians use every morning.",hero:"emails_real/wa-paris-metro.jpg"},
  {n:"14",day:"28",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"Jambon-beurre, France in a sentence",pre:"One baguette, one slice of ham, one piece of butter. And a whole grammar of choice.",hero:"emails_real/wa-jambon-beurre.jpg"},
  {n:"15",day:"31",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"Provence lavender, spoken in French",pre:"Two months a year, the country becomes purple. The words that describe it are older.",hero:"emails_real/wa-provence-lavender.jpg"},
  {n:"16",day:"34",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"The French comic book grammar",pre:"Tintin, Asterix, Persepolis. Panels teach French rhythm the classroom cannot.",hero:"emails_real/wa-french-comics.jpg"},
  {n:"17",day:"37",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"The language of French perfume",pre:"Sillage, longevity, projection. Fragrance vocabulary that opens Rue Cambon.",hero:"emails_real/wa-french-perfumes.jpg"},
  {n:"18",day:"40",cat:"WHATSAPP",from:"WhatsApp broadcast",sub:"French words English forgot to translate",pre:"Depaysement, flaneur, retrouvailles. Words with no English equivalent.",hero:"emails_real/wa-french-words.jpg"}
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
        <div class="email-tag">${m.cat} · Email ${m.n} of 18</div>
        <div class="email-sub">${m.sub}</div>
        <div class="email-pre">${m.pre}</div>
        <div class="email-cta">Open in inbox</div>
      </div>
    </div>`;
}

const CATS = ["CELEBS","CULTURE","PROMO","PRODUCT","WHATSAPP"];
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

/* ---------- CONTENT CALENDAR · HUGE, COLORED, WITH POST MOCKUPS ---------- */
const CAL = [
  {date:"Wed", d:"Sept 9",  pillar:"prod",  head:"Il y a → Y a",                              cap:"Every French sentence has a spoken twin.",           asset:"formal_vs_spoken_5.mp4",  thumb:"posters/formal_vs_spoken_5.jpg"},
  {date:"Fri", d:"Sept 11", pillar:"edu",   head:"French Homonyms intro · Charline",           cap:"Same sound. Different word. Different meaning.",     asset:"homonyms_1.mp4",          thumb:"posters/homonyms_1.jpg"},
  {date:"Mon", d:"Sept 14", pillar:"inspo", head:"Louvre · Mona Lisa crowd",                   cap:"Paris routines Americans daydream about.",           asset:"beauty_1.mp4",            thumb:"posters/beauty_1.jpg"},
  {date:"Wed", d:"Sept 16", pillar:"prod",  head:"Peut-être → P'têt",                          cap:"Formal versus spoken. What Paris actually says.",    asset:"formal_vs_spoken_9.mp4",  thumb:"posters/formal_vs_spoken_9.jpg"},
  {date:"Fri", d:"Sept 18", pillar:"edu",   head:"French Cheeses · chapitre I",                cap:"There is a cheese for every French mood.",           asset:"french_cheeses.mp4",      thumb:"posters/french_cheeses.jpg"},
  {date:"Mon", d:"Sept 21", pillar:"inspo", head:"One day in Cannes · Cartier",                cap:"French Riviera style, in one minute.",               asset:"beauty_3.mp4",            thumb:"posters/beauty_3.jpg"},
  {date:"Wed", d:"Sept 23", pillar:"prod",  head:"Sang · Cent · Sans · Sent",                  cap:"Four spellings, one sound.",                          asset:"homonyms_2.mp4",          thumb:"posters/homonyms_2.jpg"},
  {date:"Fri", d:"Sept 25", pillar:"edu",   head:"French Wardrobe · the essentials",           cap:"Five pieces. That is a French wardrobe.",            asset:"french_wardrobe.mp4",     thumb:"posters/french_wardrobe.jpg"},
  {date:"Mon", d:"Sept 28", pillar:"inspo", head:"Paris Fashion Week SS27 opens",              cap:"Nine days in Paris. Dior, Chanel, Hermès.",          asset:"beauty_2.mp4 · RTM",      thumb:"rtm/rtm_fashion_week.png"},
  {date:"Wed", d:"Sept 30", pillar:"prod",  head:"Tu as vu → T'as vu",                         cap:"Two vowels drop, one Frenchness enters.",             asset:"formal_vs_spoken_11.mp4", thumb:"posters/formal_vs_spoken_11.jpg"},
  {date:"Fri", d:"Oct 2",   pillar:"edu",   head:"Chanel Capsule invitation",                  cap:"Rue Cambon vocabulary. Live Thursday.",              asset:"capsule-chanel.jpg",      thumb:"capsules/capsule-chanel.jpg"},
  {date:"Mon", d:"Oct 5",   pillar:"inspo", head:"French Tourism · Bienvenue en France",       cap:"Ninety-six departments. Three to know first.",       asset:"french_tourism.mp4",      thumb:"posters/french_tourism.jpg"},
  {date:"Wed", d:"Oct 7",   pillar:"prod",  head:"Ou · Où · Août",                             cap:"Three spellings, three meanings.",                    asset:"homonyms_4.mp4",          thumb:"posters/homonyms_4.jpg"},
  {date:"Fri", d:"Oct 9",   pillar:"edu",   head:"Vendanges de Montmartre",                    cap:"Brass, parade, saint's blessing. Paris harvest.",    asset:"french_wines_1.mp4 · RTM",thumb:"rtm/rtm_vendanges.png"},
  {date:"Mon", d:"Oct 12",  pillar:"inspo", head:"Palais Garnier · after hours",               cap:"The opera house Paris keeps to itself.",             asset:"beauty_2.mp4",            thumb:"posters/beauty_2.jpg"},
  {date:"Wed", d:"Oct 14",  pillar:"prod",  head:"C'est un peu → C't'un peu",                  cap:"How casual French compresses two words into one.",   asset:"formal_vs_spoken_12.mp4", thumb:"posters/formal_vs_spoken_12.jpg"},
  {date:"Fri", d:"Oct 16",  pillar:"edu",   head:"French Holiday · the calendar",              cap:"Eleven public holidays. The three you should know.", asset:"french_holiday.mp4",      thumb:"posters/french_holiday.jpg"},
  {date:"Mon", d:"Oct 19",  pillar:"inspo", head:"French History · Le Roi Soleil",              cap:"Louis XIV in ninety seconds.",                        asset:"french_history.mp4",      thumb:"posters/french_history.jpg"},
  {date:"Wed", d:"Oct 21",  pillar:"prod",  head:"Chant · Champ",                               cap:"One sound, two meanings.",                            asset:"homonyms_7.mp4",          thumb:"posters/homonyms_7.jpg"},
  {date:"Fri", d:"Oct 23",  pillar:"edu",   head:"French Wines · chapitre II",                  cap:"Bordeaux, Bourgogne, Champagne, Rhône, Loire.",      asset:"french_wines_2.mp4",      thumb:"posters/french_wines_2.jpg"},
  {date:"Mon", d:"Oct 26",  pillar:"inspo", head:"Salon du Chocolat opens · 30 years",          cap:"Chocolate couture runway. Broadcast in 28 countries.",asset:"beauty_6.mp4 · RTM",      thumb:"rtm/rtm_chocolat.png"},
  {date:"Wed", d:"Oct 28",  pillar:"prod",  head:"Tant · Temps · Tend · Taon",                  cap:"Four spellings, same sound. Homonym classic.",       asset:"homonyms_8.mp4",          thumb:"posters/homonyms_8.jpg"},
  {date:"Fri", d:"Oct 30",  pillar:"edu",   head:"The Mapster · opened to the world",           cap:"Every lesson has a place. Tap through Paris.",       asset:"Live Mapster fold",       thumb:"capsules/hero-versailles.jpg"}
];
const CAL_SEP = CAL.filter(r => r.d.startsWith("Sept"));
const CAL_OCT = CAL.filter(r => r.d.startsWith("Oct"));

// Real month grid Sun-Sat with dated cells. Sept 1 2026 = Tuesday. Oct 1 2026 = Thursday.
function buildMonthGrid(monthName, year, month0, daysInMonth, firstWeekday, items){
  const DAY_LBL = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const byDay = {};
  items.forEach(it => {
    const m = it.d.match(/(Sept|Oct)\s+(\d+)/);
    if (m) byDay[parseInt(m[2])] = it;
  });
  const PILL = {inspo:"MON", prod:"WED", edu:"FRI"};
  const total = firstWeekday + daysInMonth;
  const rows = Math.ceil(total/7);
  let cells = "";
  // Header
  cells += DAY_LBL.map(d => `<div class="mg-hd">${d}</div>`).join("");
  // Blank leading cells
  for (let i=0; i<firstWeekday; i++) cells += `<div class="mg-blank"></div>`;
  // Days
  for (let day=1; day<=daysInMonth; day++){
    const it = byDay[day];
    if (it){
      cells += `
        <div class="mg-cell mg-post mg-${it.pillar}">
          <div class="mg-num">${day}</div>
          <div class="mg-pill">${PILL[it.pillar]}</div>
          <div class="mg-thumb"><img src="${it.thumb}" alt="post" loading="lazy"></div>
          <div class="mg-head">${it.head}</div>
          <div class="mg-cap">${it.cap}</div>
          <div class="mg-asset">${it.asset}</div>
        </div>`;
    } else {
      cells += `<div class="mg-cell mg-empty"><div class="mg-num">${day}</div></div>`;
    }
  }
  // Trailing blanks
  while ((firstWeekday + daysInMonth + (rows*7 - total)) % 7 !== 0){ cells += `<div class="mg-blank"></div>`; break; }
  return `<div class="mg">${cells}</div>`;
}
const sepHost = document.getElementById("calSepHost");
const octHost = document.getElementById("calOctHost");
if (sepHost) sepHost.innerHTML = buildMonthGrid("September", 2026, 8, 30, 2, CAL_SEP);
if (octHost) octHost.innerHTML = buildMonthGrid("October", 2026, 9, 31, 4, CAL_OCT);

/* ---------- SPROUT SOCIAL EXECUTION SLIDE ---------- */
const SPROUT = {
  plan: "Sprout Social · Advanced Plan",
  price: "$399 / seat / month · billed annually",
  seats: "1 seat included · Philippe added as External Approver (no seat cost)",
  blocks: [
    {
      icon: "📅",
      title: "Publishing · every calendar post scheduled once",
      lines: [
        "Instagram Feed, Reels and Stories · Facebook + Reels · TikTok video · LinkedIn · X · YouTube · Threads · Pinterest images",
        "MP4 upload native. Reels up to 90s, TikTok up to 10 min / 1 GB, Facebook up to 3 GB / 45 min.",
        "Publishing Rule Builder enforces our Mon Inspiration · Wed Product · Fri Education cadence.",
        "Automated Link Tracking on every post from bio."
      ]
    },
    {
      icon: "✅",
      title: "Approvals · Philippe reviews before anything goes live",
      lines: [
        "Message Approval Workflow: every draft queued to Philippe.",
        "External Approval Workflow: Philippe reviews and approves without a Sprout seat.",
        "Nothing publishes until he clicks approve. Every post traceable."
      ]
    },
    {
      icon: "💬",
      title: "Engagement · Smart Inbox and rule-based replies",
      lines: [
        "Unified Smart Inbox pulls comments and DMs from all networks into one queue.",
        "Enhance Reply · AI writes on-brand reply drafts, we approve and send.",
        "Sentiment tagging on every incoming message (Advanced-tier only).",
        "Bot Builder handles Twitter DMs and Facebook Messenger with predefined flows that end in a Talk-to-Sales link. Instagram DM bots are not supported by Sprout · we handle those manually via Smart Inbox."
      ]
    },
    {
      icon: "📊",
      title: "Reporting · monthly delivered to inbox automatically",
      lines: [
        "Cross-Network Performance Report emailed monthly on Sprout's Scheduled Delivery.",
        "Team &amp; Productivity Report shows response time and reply volume.",
        "Customer Feedback Report captures CSAT and NPS from social replies.",
        "PDF format · lands in Philippe's inbox on the 1st of every month."
      ]
    }
  ],
  cautions: [
    "One paid seat only · Philippe joins as free External Approver.",
    "Social Listening, Premium Analytics and Employee Advocacy are separate paid add-ons and are NOT part of this plan.",
    "Instagram DM chatbots are not offered by Sprout · IG DMs handled manually via Smart Inbox.",
    "HEIC and WEBP images are not supported · we deliver everything in JPG or PNG."
  ]
};

function sproutBlock(b){
  return `
    <div class="sprout-block">
      <div class="sprout-icon">${b.icon}</div>
      <div class="sprout-body">
        <h3 class="sprout-title">${b.title}</h3>
        <ul class="sprout-list">${b.lines.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>
    </div>`;
}

const sproutHost = document.getElementById("sproutHost");
// Real product screenshots per block
const SPROUT_SHOTS = {
  "Publishing · every calendar post scheduled once": "sprout/ui_publishing_calendar.webp",
  "Approvals · Philippe reviews before anything goes live": "sprout/ui_publishing_new_post.webp",
  "Engagement · Smart Inbox and rule-based replies": "sprout/ui_engagement_inbox.webp",
  "Reporting · monthly delivered to inbox automatically": "sprout/ui_analytics_dashboard.webp"
};

function sproutBlockWithShot(b){
  const shot = SPROUT_SHOTS[b.title];
  return `
    <div class="sprout-block-lg">
      <div class="sprout-shot"><img src="${shot}" alt="${b.title}" loading="lazy"></div>
      <div class="sprout-block-body">
        <div class="sprout-icon-lg">${b.icon}</div>
        <h3 class="sprout-title-lg">${b.title}</h3>
        <ul class="sprout-list-lg">${b.lines.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>
    </div>`;
}

if (sproutHost) {
  sproutHost.innerHTML = `
    <div class="sprout-header">
      <img class="sprout-logo" src="sprout/sprout_logo.png" alt="Sprout Social">
      <div class="sprout-plan-info">
        <div class="sprout-plan-name">${SPROUT.plan}</div>
        <div class="sprout-plan-price">${SPROUT.price}</div>
        <div class="sprout-plan-seats">${SPROUT.seats}</div>
      </div>
    </div>
    <div class="sprout-stack">${SPROUT.blocks.map(sproutBlockWithShot).join("")}</div>
    <div class="sprout-cautions">
      <div class="sprout-cautions-h">What this plan does NOT include</div>
      <ul>${SPROUT.cautions.map(c => `<li>${c}</li>`).join("")}</ul>
    </div>
  `;
}

/* ============ PERFORMANCE · lazy-play videos only when their slide is active ============ */
(function(){
  function pauseAllHiddenSlides(){
    document.querySelectorAll('.slide').forEach(s => {
      const isActive = s.classList.contains('active');
      s.querySelectorAll('video').forEach(v => {
        if (isActive) {
          if (v.dataset.pendingSrc && !v.src){ v.src = v.dataset.pendingSrc; }
          if (v.paused && v.autoplay !== false && v.hasAttribute('data-autoplay-in-view')) {
            v.play().catch(()=>{});
          }
        } else {
          v.pause();
        }
      });
    });
  }
  // Mark autoplay videos to be lazy-triggered
  document.querySelectorAll('video[autoplay]').forEach(v => {
    v.setAttribute('data-autoplay-in-view', '1');
  });
  // Hook into slide-show
  const origShow = window.show;
  // Observe class changes on .slide
  const mo = new MutationObserver(pauseAllHiddenSlides);
  document.querySelectorAll('.slide').forEach(s => mo.observe(s, {attributes:true, attributeFilter:['class']}));
  // Kick once  
  setTimeout(pauseAllHiddenSlides, 200);
})();

/* ================================================================
   V1400 — DECK FEEDBACK PASS
   ================================================================ */

/* -------- 3. BEAUTY reels · stamp visible French Atelier logo on every tile -------- */
(function stampBeautyLogo(){
  const cards = document.querySelectorAll(".vid-grid.beauty .beauty-card");
  cards.forEach(card => {
    if (card.querySelector(".beauty-logo-plate")) return;
    const plate = document.createElement("div");
    plate.className = "beauty-logo-plate";
    plate.innerHTML = `
      <img src="brand/logo-white.png" alt="The French Atelier">
      <div class="bl-txt">By The French <em>Atelier</em></div>
    `;
    card.appendChild(plate);
  });
})();

/* -------- 4. REAL EMAILS · magazine-grade mockups with full body copy -------- */
const EMAIL_BODIES = {
  // Sandra's ACQ Drip Series - real subjects, matching body prose
  "01": {h:"Meet the French names the world knows.", p:["Mbappé on the pitch. Omar Sy on Netflix. Marion Cotillard in Paris and Los Angeles. Camille Cottin, Vincent Cassel, Léa Seydoux.","Six names. Six accents. Six ways to say <b>bonjour</b> that open a real conversation in France.","This Friday we open the full carousel inside your Culture Capsule."], cta:"Open the carousel"},
  "02": {h:"Six French lives that changed the world.", p:["Joan of Arc rode into Orléans at seventeen. Marie Curie was the only person alive to win two Nobels in two sciences.","Napoleon rewrote European law. De Gaulle rebuilt a nation. Simone de Beauvoir rewrote how we think about being a woman.","One name a week, inside your Sunday capsule."], cta:"Read the six stories"},
  "03": {h:"Edith Piaf, the little sparrow.", p:["She sang from the pavement of Belleville before she sang from the stage of Carnegie Hall.","<b>La Vie en Rose</b>, <b>Non, je ne regrette rien</b>. Two songs that carry more French than a semester of textbooks.","Your capsule this week: her lyrics, translated, sung, and taught."], cta:"Hear the lesson"},
  "04": {h:"Decode the musketeer legend.", p:["Athos, Porthos, Aramis, d'Artagnan. Four men Dumas invented from four real Gascon soldiers of Louis XIII.","<b>Un pour tous, tous pour un.</b> One sentence that traveled from Dumas to every schoolyard in France.","Inside: the real men, the real Paris, the real French of 1625."], cta:"Meet the four"},
  "05": {h:"Take the quiz. Claim your reward.", p:["Five friendly questions on the French you already speak. <b>Rendez-vous. Déjà vu. Souvenir. Cliché. Chic.</b>","Do well and we open your welcome scholarship on the next page.","Two minutes. No wrong answers, only the reward at the end."], cta:"Start the quiz"},
  "06": {h:"Claim your welcome scholarship.", p:["<b>20% off your first French Atelier course</b>, plus a live seat held in the next class opening.","Live teaching from Paris. Small groups. Eighty-five minutes. Someone who hears you speak.","The scholarship holds for seven days. Your seat holds for the same."], cta:"Claim my 20% seat"},
  "07": {h:"Save your seat. The class is filling.", p:["The next cohort has six seats left before we close it and open the following one.","Your <b>20% welcome scholarship</b> is still on the offer. It closes with the class.","Reserve now and choose your teacher on the confirmation page."], cta:"Reserve my seat"},
  "08": {h:"Final call. Save your seat.", p:["The class is nearly full. Your <b>20% welcome scholarship</b> closes when the last seat closes.","One click reserves the seat. The confirmation opens the schedule and the teacher choice.","After tonight, the next class opens on the standard fare."], cta:"Finish my reservation"},
  "09": {h:"Learn live with real French teachers.", p:["Every French Atelier teacher was born in France, trained in France, and teaches from France.","Small live groups. Eighty-five real minutes. Someone who hears every word you say and corrects it in the moment.","Meet Philippe, Charline, Caitlin, Carmèle, Shanice. Choose whose class you want to walk into."], cta:"Meet the teachers"},
  "10": {h:"Master French, region by region.", p:["Foundation opens at a Parisian café. Beginner walks through daily life from Normandy to Paris.","Elementary crosses the Loire to the Basque Country. Intermediate reaches Marseille, Chamonix and Alsace.","Every level travels. Every class arrives somewhere real."], cta:"See the four levels"},
  "11": {h:"Learn France, not just French.", p:["Art on Monday. Food on Wednesday. Music on Friday. The daily rituals a French person grows up inside.","Every course carries its Culture Capsules. Every capsule carries the vocabulary of that world.","The language and the culture, in the same eighty-five minutes."], cta:"See a capsule"},
  "12": {h:"Choose a school. Not an app.", p:["Duolingo teaches you words. An app never hears you speak. An app never opens a door in Paris.","French Atelier is a live school with a real teacher, a small class, and a real hour of French every week.","A fair comparison, and the one thing that makes us different, in one page."], cta:"See the comparison"},
  // WhatsApp broadcasts
  "13": {h:"The Paris Metro alphabet.", p:["Fourteen lines. Thirteen colors. One century of French vocabulary a Parisian uses before breakfast.","<b>Prochain arrêt. Correspondance. Direction.</b> Three words that carry a whole morning.","Inside: the fourteen names, the two you must not confuse, and the one line no one takes for fun."], cta:"Open the guide"},
  "14": {h:"Jambon-beurre. France in a sentence.", p:["One baguette. One slice of ham. One thick knob of butter. Sold on every Paris corner since 1900.","And a whole grammar of choice hidden in the order: <b>demi-baguette, sans cornichon, avec un peu plus de beurre s'il vous plaît</b>.","This is the sentence you master first."], cta:"Practice the order"},
  "15": {h:"Provence lavender, spoken in French.", p:["Two months a year the country turns purple. Valensole, Sault, the plateau of Albion.","<b>La lavande. Le champ. La ruche. La récolte.</b> The words are older than the fields.","Inside: the harvest calendar, the villages, and the vocabulary that comes with them."], cta:"Walk the fields"},
  "16": {h:"French comic book grammar.", p:["Tintin taught two generations to read. Astérix taught them to pun. Persepolis taught them to argue.","A panel of French comic teaches rhythm no textbook can: pause, punchline, silence, retort.","Inside: three panels, three lessons, one small joke that lands in French."], cta:"Read a panel"},
  "17": {h:"The language of French perfume.", p:["<b>Sillage. Longévité. Projection. Nez.</b> Words the great houses invented for a sense English never bothered to name.","Grasse taught the world how to describe smell. Rue Cambon taught the world what to smell like.","Inside: the twelve terms that open a Paris perfume counter."], cta:"Open the counter"},
  "18": {h:"French words English forgot to translate.", p:["<b>Dépaysement.</b> The feeling of being pleasantly out of your country.","<b>Flâneur.</b> A wanderer who watches, on purpose.","<b>Retrouvailles.</b> The joy of meeting again after long apart.","Six more inside. Every one of them yours to use in an English sentence tomorrow."], cta:"See the nine"}
};

function emailCardReal(m){
  const b = EMAIL_BODIES[m.n] || {h: m.sub, p: [m.pre], cta: "Open"};
  const bodyHtml = b.p.map(p => `<p class="ebr-p">${p}</p>`).join("");
  const initials = m.from.includes("hello") ? "FA" : "WA";
  const fromName = m.from.includes("hello") ? "The French Atelier" : "French Atelier WhatsApp";
  const fromEmail = m.from.includes("hello") ? "hello@frenchatelier.com" : "broadcast";
  const catLabel = m.cat === "WHATSAPP" ? "WhatsApp Broadcast" : `${m.cat} · ACQ Drip · Day ${m.day}`;
  const sig = m.from.includes("hello") ? "Sandra — French Atelier team" : "The French Atelier · WhatsApp";
  return `
    <div class="email-frame">
      <div class="email-mail-chrome">
        <div class="emc-top">
          <span class="emc-back">←</span>
          <span class="emc-icons">
            <span>📁</span><span>🗑</span><span>✉</span><span>⋮</span>
          </span>
        </div>
        <div class="emc-subject">${m.sub}</div>
        <div class="emc-from-row">
          <div class="emc-avatar">${initials}</div>
          <div class="emc-meta">
            <div class="emc-name">${fromName} <span>&lt;${fromEmail}&gt;</span></div>
            <div class="emc-to">to me · <span class="emc-star">★</span></div>
          </div>
          <div class="emc-date">Day ${m.day}</div>
        </div>
      </div>
      <img class="email-hero-img" src="${m.hero}" alt="${m.sub}" loading="lazy">
      <div class="email-body-real">
        <div class="ebr-brand-tag">${catLabel}</div>
        <div class="ebr-h">${b.h}</div>
        ${bodyHtml}
        <a class="ebr-cta">${b.cta} →</a>
        <div class="ebr-sig">${sig}</div>
        <div class="ebr-footer">The French Atelier · by Acadomia · frenchatelierlive.com</div>
      </div>
    </div>`;
}

// Rebuild email host with the new card
(function rebuildEmails(){
  const host = document.getElementById("emailsHost");
  if (!host || typeof EMAILS === "undefined") return;
  host.innerHTML = CATS.map(cat => {
    const items = EMAILS.filter(e => e.cat === cat);
    if (!items.length) return "";
    const catTitle = ({CELEBS:"Celebrities · faces students know",CULTURE:"Culture · stories worth retelling",PROMO:"Promo · seat and scholarship",PRODUCT:"Product · what French Atelier is",WHATSAPP:"WhatsApp broadcasts · six topics"})[cat] || cat;
    return `
      <div class="email-track">
        <div class="track-h">
          <h3>${catTitle}</h3>
          <div class="count">${items.length} real emails</div>
        </div>
        <div class="email-row">${items.map(emailCardReal).join("")}</div>
      </div>`;
  }).join("");
})();

/* -------- 5. CULTURE CAPSULES · launch banner injected -------- */
(function capsuleLaunch(){
  const slide = document.querySelector('.slide[data-i="5"] .capsules .wrap');
  if (!slide || slide.querySelector(".capsule-launch-banner")) return;
  const banner = document.createElement("div");
  banner.className = "capsule-launch-banner";
  banner.innerHTML = `
    <div class="clb-badge">Now Launching</div>
    <div class="clb-headline">Culture Capsules · <em>fifteen-minute cinematic French lessons</em>, delivered inside every course.</div>
    <div class="clb-meta">Six capsules live<br>Twice a month on social</div>
  `;
  const psSay = slide.querySelector(".presenter-say");
  if (psSay) psSay.after(banner); else slide.appendChild(banner);
})();

/* -------- 6. MAPSTER · real interactive Instagram carousel mockup -------- */
(function buildMapster(){
  const slide = document.querySelector('.slide[data-i="6"] .mapster .wrap');
  if (!slide) return;
  const existing = slide.querySelector(".mapster-post");
  if (existing) existing.remove();

  const PLACES = [
    {city:"Versailles · Île-de-France", h:"Versailles as grammar.", p:"The court, the hierarchy, the vous behind every French politeness that survives today.", img:"capsules/hero-versailles.jpg"},
    {city:"Grasse · Provence", h:"The language of perfume.", p:"Sillage, longévité, projection, nez. Words the great houses invented for a sense English never bothered to name.", img:"capsules/capsule-chanel.jpg"},
    {city:"Giverny · Normandy", h:"Reading Monet's light.", p:"Nuée, brume, lumière, chatoiement. The Impressionists rewrote how French sees light.", img:"capsules/capsule-impressionism.jpg"},
    {city:"Paris · Rue de Rivoli", h:"Haussmann's Paris.", p:"Twenty thousand demolitions. Forty thousand new buildings. A word for every zinc roof.", img:"capsules/bg-staircase.jpg"},
    {city:"Saint-Germain · Paris", h:"The café and the idea.", p:"Diderot at the Procope, Sartre at Les Deux Magots, Beauvoir at the Flore. French thought was written at zinc counters.", img:"capsules/bg-rooftops.jpg"}
  ];

  const post = document.createElement("div");
  post.className = "mapster-post";
  post.innerHTML = `
    <div class="mp-phone">
      <div class="mp-inner">
        <div class="mp-status-bar"><span>9:41</span><span>●●● 100%</span></div>
        <div class="mp-ig-header">
          <div class="mp-ig-avatar"><div class="mp-ig-avatar-inner"></div></div>
          <div class="mp-ig-userblock">
            <div class="mp-ig-user">livefrenchatelier</div>
            <div class="mp-ig-sub">Sponsored</div>
          </div>
          <div class="mp-ig-more">···</div>
        </div>
        <div class="mp-carousel" id="mpCarousel">
          <div class="mp-slide mp-slide-map on" data-i="0">
            <svg class="mp-map-svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="mapg" cx="50%" cy="45%" r="65%">
                  <stop offset="0%" stop-color="#2a3f5a"/>
                  <stop offset="100%" stop-color="#0a1420"/>
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#mapg)"/>
              <!-- France outline -->
              <path d="M 165 90 Q 200 78 235 92 Q 280 105 295 145 Q 310 190 300 235 Q 285 285 245 315 Q 210 335 175 325 Q 130 315 108 275 Q 95 235 100 190 Q 108 140 135 110 Q 148 95 165 90 Z"
                    fill="rgba(201,166,98,0.15)" stroke="rgba(201,166,98,0.55)" stroke-width="1.5"/>
              <!-- Rivers / routes -->
              <path d="M 195 130 Q 210 170 220 210 Q 225 250 215 295" fill="none" stroke="rgba(201,166,98,0.25)" stroke-width="1" stroke-dasharray="4 4"/>
              <path d="M 130 200 Q 180 205 240 215 Q 275 220 295 210" fill="none" stroke="rgba(201,166,98,0.25)" stroke-width="1" stroke-dasharray="4 4"/>
              <!-- Pins -->
              <g class="mp-pin pin-1" transform="translate(198,152)"><circle r="7" fill="#C9A662"/><circle r="14" fill="none" stroke="#C9A662" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-2" transform="translate(158,168)"><circle r="6" fill="#E4B4A8"/><circle r="12" fill="none" stroke="#E4B4A8" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-3" transform="translate(220,140)"><circle r="6" fill="#7CA6C7"/><circle r="12" fill="none" stroke="#7CA6C7" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-4" transform="translate(180,240)"><circle r="6" fill="#C9A662"/><circle r="12" fill="none" stroke="#C9A662" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-5" transform="translate(230,285)"><circle r="6" fill="#E4B4A8"/><circle r="12" fill="none" stroke="#E4B4A8" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-6" transform="translate(140,220)"><circle r="6" fill="#7CA6C7"/><circle r="12" fill="none" stroke="#7CA6C7" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <g class="mp-pin pin-7" transform="translate(275,175)"><circle r="6" fill="#C9A662"/><circle r="12" fill="none" stroke="#C9A662" stroke-opacity="0.5" stroke-width="1.5"/></g>
              <!-- Labels -->
              <text x="205" y="146" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Paris</text>
              <text x="146" y="182" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Normandy</text>
              <text x="230" y="134" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Strasbourg</text>
              <text x="168" y="254" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Bordeaux</text>
              <text x="220" y="299" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Marseille</text>
              <text x="128" y="234" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Loire</text>
              <text x="284" y="189" font-family="Cormorant Garamond, serif" font-style="italic" font-size="11" fill="#F2EDE3">Chamonix</text>
            </svg>
            <div class="mp-map-label">The Mapster · France</div>
            <div class="mp-map-count">42 places · 42 lessons</div>
          </div>
          ${PLACES.map((pl, i) => `
            <div class="mp-slide mp-slide-place" data-i="${i+1}">
              <img src="${pl.img}" alt="${pl.city}">
              <div class="mp-place-overlay">
                <div class="mp-place-city">${pl.city}</div>
                <div class="mp-place-h">${pl.h}</div>
                <div class="mp-place-p">${pl.p}</div>
              </div>
            </div>
          `).join("")}
          <div class="mp-dots" id="mpDots">
            ${[0,1,2,3,4,5].map(i => `<div class="d${i===0?' on':''}"></div>`).join("")}
          </div>
        </div>
        <div class="mp-actions">
          <span>♡</span><span>💬</span><span>➤</span><span class="save">🔖</span>
        </div>
        <div class="mp-likes">18,246 likes</div>
        <div class="mp-caption"><b>livefrenchatelier</b> Every French lesson has a place. Forty-two pins across France. Swipe to see where the next lesson lives. <em>#learnFrench #FrenchAtelier</em></div>
        <div class="mp-time">2 hours ago</div>
      </div>
    </div>
    <div class="mp-desc">
      <h3>Every lesson has <em>a place</em>.</h3>
      <p>The Mapster fold from <b>frenchatelierlive.com</b> becomes a native Instagram carousel post. Forty-two real pins across France, six of them rotate here on the phone as they would in-feed.</p>
      <ul class="mp-desc-list">
        <li><b>Slide 1</b><span>The map opens with animated pins across France.</span></li>
        <li><b>Slide 2</b><span>Versailles · the court and the vous behind every polite French sentence.</span></li>
        <li><b>Slide 3</b><span>Grasse · the twelve perfume terms that open Rue Cambon.</span></li>
        <li><b>Slide 4</b><span>Giverny · Monet's light, in French.</span></li>
        <li><b>Slide 5</b><span>Rue de Rivoli · Haussmann's Paris, one zinc roof at a time.</span></li>
        <li><b>Slide 6</b><span>Saint-Germain · the cafés that wrote French thought.</span></li>
      </ul>
      <div class="mp-desc-note"><b>Cadence.</b> Every Friday, one pin becomes one carousel. Twelve carousels a quarter. Every one links back to the live Mapster on the site.</div>
    </div>
  `;
  const psSay = slide.querySelector(".presenter-say");
  if (psSay) psSay.after(post); else slide.appendChild(post);

  // Auto-cycle the carousel
  const slides = post.querySelectorAll(".mp-slide");
  const dots = post.querySelectorAll("#mpDots .d");
  let cur = 0;
  function goto(i){
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle("on", idx === cur));
    dots.forEach((d, idx) => d.classList.toggle("on", idx === cur));
  }
  let timer = setInterval(() => goto(cur+1), 3200);
  dots.forEach((d, idx) => d.addEventListener("click", () => { clearInterval(timer); goto(idx); }));
})();

/* -------- 7-8. CALENDARS · add LIVE badge to today's post (Sept 14, 2026) -------- */
(function addLiveBadge(){
  document.querySelectorAll(".mg-post").forEach(cell => {
    const num = cell.querySelector(".mg-num");
    if (!num) return;
    const day = parseInt(num.textContent, 10);
    // Sept 14 today - assumes Sept grid
    const inSep = cell.closest("#calSepHost");
    if (inSep && day === 14){
      if (!cell.querySelector(".mg-live-badge")){
        const b = document.createElement("div");
        b.className = "mg-live-badge";
        b.textContent = "LIVE TODAY";
        cell.insertBefore(b, cell.querySelector(".mg-pill"));
      }
    }
  });
})();
