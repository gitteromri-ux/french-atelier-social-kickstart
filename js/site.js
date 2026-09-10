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
// EXCLUDED: formal_vs_spoken_2/3/4 (4.6-5.6s truncated).
// USING: only original ffprobe-verified files, unique per slot.
const FORMATS = [
  {
    id: "fvs",
    num: "01",
    title: "Formal vs Spoken",
    tag: "Wednesday Product",
    availability: "8 clips",
    lede: "Textbook French on one side. The French Parisians actually speak on the other.",
    hero: {f:"videos/formal_vs_spoken_9.mp4",  label:"Peut-être · P'têt"},
    thumbs: [
      {f:"videos/formal_vs_spoken_5.mp4",  label:"Il y a · Y a"},
      {f:"videos/formal_vs_spoken_11.mp4", label:"Tu as vu · T'as vu"},
      {f:"videos/formal_vs_spoken_12.mp4", label:"C'est un peu · C't'un peu"}
    ]
  },
  {
    id: "hom",
    num: "02",
    title: "Homonyms",
    tag: "Friday Education",
    availability: "8 clips",
    lede: "Same sound. Different word. Different meaning.",
    hero: {f:"videos/homonyms_2.mp4",  label:"Sang · Cent · Sans · Sent"},
    thumbs: [
      {f:"videos/homonyms_4.mp4",  label:"Ou · Où · Août"},
      {f:"videos/homonyms_7.mp4",  label:"Chant · Champ"},
      {f:"videos/homonyms_8.mp4",  label:"Tant · Temps · Tend · Taon"}
    ]
  },
  {
    id: "th",
    num: "03",
    title: "French Tourism · French History",
    tag: "Monday Inspiration",
    availability: "2 clips",
    lede: "The map lesson and the fast-take history lesson.",
    hero: {f:"videos/french_tourism.mp4",  label:"Tourism · Bienvenue en France"},
    thumbs: [
      {f:"videos/french_history.mp4",  label:"History · Le Roi Soleil"}
    ]
  },
  {
    id: "wh",
    num: "04",
    title: "French Wardrobe · French Holiday",
    tag: "Monday Inspiration",
    availability: "3 clips",
    lede: "Five wardrobe essentials. Eleven public holidays.",
    hero: {f:"videos/french_wardrobe.mp4",  label:"Wardrobe · full 35s take"},
    thumbs: [
      {f:"videos/french_holiday.mp4",  label:"Holiday · full 40s take"},
      {f:"videos/french_holiday_1.mp4",  label:"Holiday · short take"}
    ]
  },
  {
    id: "cw",
    num: "05",
    title: "French Cheeses · French Wines",
    tag: "Friday Education",
    availability: "4 clips",
    lede: "The two categories no French meal survives without.",
    hero: {f:"videos/french_cheeses.mp4",  label:"Cheeses · full 24s take"},
    thumbs: [
      {f:"videos/french_cheeses_1.mp4",  label:"Cheeses · short take"},
      {f:"videos/french_wines_1.mp4",  label:"Wines · chapitre I"},
      {f:"videos/french_wines_2.mp4",  label:"Wines · chapitre II"}
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
        <video class="fmt-hero" autoplay muted loop playsinline preload="auto" src="${F.hero.f}"></video>
        <button class="fmt-sound" data-fmt="${F.id}" aria-label="Toggle sound">🔇 SOUND</button>
        <div class="fmt-cap">${F.hero.label}</div>
      </div>
      <div class="fmt-thumbs">
        ${F.thumbs.map(t => `<button class="fmt-thumb" data-src="${t.f}" data-label="${t.label}"><video muted playsinline preload="metadata" src="${t.f}#t=1"></video><span>${t.label}</span></button>`).join("")}
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
  {n:"01",day:"0",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"Bienvenue · your French starts here",pre:"You just took a step most adults never take. Here is what happens in the next seven days.",hero:"heroes/banner.jpg"},
  {n:"02",day:"1",cat:"WELCOME",from:"charline@frenchatelier.com",sub:"Meet your teacher · live from France",pre:"Charline introduces herself. One minute. In her real Paris apartment.",hero:"heroes/banner.jpg"},
  {n:"03",day:"3",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"The 4-minute placement test",pre:"Four minutes. One click. We match you to the right cohort.",hero:"heroes/banner.jpg"},
  {n:"04",day:"5",cat:"WELCOME",from:"philippe@frenchatelier.com",sub:"Why we teach in groups of 8 (not 1)",pre:"The intimacy of a private tutor. The energy of a real cohort.",hero:"heroes/banner.jpg"},
  {n:"05",day:"7",cat:"WELCOME",from:"hello@frenchatelier.com",sub:"What a French Atelier class actually looks like",pre:"Three-minute tour of a live session. No slides. Real conversation.",hero:"heroes/banner.jpg"},
  {n:"08",day:"25",cat:"SOUL",from:"vincent@frenchatelier.com",sub:"The French don't say \"I miss you\"",pre:"They say tu me manques · you are missing from me. One grammatical flip changes how love is spoken.",hero:"heroes/email8_tu_me_manques.jpg"},
  {n:"11",day:"35",cat:"SOUL",from:"philippe@frenchatelier.com",sub:"On June 21st, all of France sings",pre:"La Fête de la Musique. Every corner, every square. Twelve words to sing along.",hero:"heroes/email11_sings.jpg"},
  {n:"15",day:"49",cat:"SOUL",from:"vincent@frenchatelier.com",sub:"The unsent letter · a Proust passage we love",pre:"Twelve lines. One breath. The rhythm of French thought.",hero:"heroes/email8_tu_me_manques.jpg"},
  {n:"19",day:"63",cat:"SOUL",from:"charline@frenchatelier.com",sub:"The single French expression that defines friendship",pre:"On se voit. See you. It's not a farewell, it's a promise.",hero:"heroes/email9_coffee.jpg"},
  {n:"09",day:"28",cat:"TASTE",from:"vincent@frenchatelier.com",sub:"How to order a coffee in Paris",pre:"Un café is a verb in Paris. What you order says who you are.",hero:"heroes/email9_coffee.jpg"},
  {n:"13",day:"42",cat:"TASTE",from:"philippe@frenchatelier.com",sub:"The French word for hunger has three meanings",pre:"Faim, envie, gourmandise. The French map appetite the way English maps colour.",hero:"heroes/email9_coffee.jpg"},
  {n:"17",day:"56",cat:"TASTE",from:"charline@frenchatelier.com",sub:"The market in Lyon at 8am",pre:"Twelve stalls. Nine cheeses. One vocabulary that opens them all.",hero:"heroes/email9_coffee.jpg"},
  {n:"10",day:"32",cat:"STYLE",from:"charline@frenchatelier.com",sub:"There is a French word for the cinema I love",pre:"Cinéphile, cinéaste, séance, salle. Four words the industry itself gave the world.",hero:"heroes/email10_cinema.jpg"},
  {n:"14",day:"46",cat:"STYLE",from:"charline@frenchatelier.com",sub:"Why Parisian women say less",pre:"Silence is a Parisian vocabulary. Here is when to use it.",hero:"heroes/email10_cinema.jpg"},
  {n:"18",day:"60",cat:"STYLE",from:"charline@frenchatelier.com",sub:"What a Parisian wears to a wedding",pre:"Navy. Never black. Never white. Three rules, one word: sobriété.",hero:"heroes/email10_cinema.jpg"},
  {n:"07",day:"21",cat:"ART",from:"vincent@frenchatelier.com",sub:"Why your French teacher should know Monet",pre:"The Impressionists rewrote how French sees light. That's the language you inherit.",hero:"capsules/capsule-impressionism.jpg"},
  {n:"12",day:"39",cat:"ART",from:"philippe@frenchatelier.com",sub:"You already speak more French than you think",pre:"250 words you use in English every day are French. We start there.",hero:"heroes/email12_already_speak.jpg"},
  {n:"16",day:"53",cat:"ART",from:"vincent@frenchatelier.com",sub:"Three French painters who never left their region",pre:"Cézanne stayed in Aix. Millet stayed in Barbizon. The vocabulary of a place.",hero:"capsules/capsule-impressionism.jpg"},
  {n:"20",day:"67",cat:"ART",from:"vincent@frenchatelier.com",sub:"Why French film has no Hollywood ending",pre:"La fin ouverte. The open ending. A grammar you can borrow.",hero:"heroes/email10_cinema.jpg"},
  {n:"06",day:"14",cat:"PILLARS",from:"hello@frenchatelier.com",sub:"The Six Pillars · why we teach French this way",pre:"Grammar. Speech. Reading. Culture. Confidence. Community.",hero:"heroes/banner.jpg"},
  {n:"21",day:"70",cat:"PILLARS",from:"philippe@frenchatelier.com",sub:"The slow Sunday · France's quietest ritual",pre:"Le dimanche. What shops close. What stays open.",hero:"heroes/email9_coffee.jpg"},
  {n:"22",day:"74",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Your free 20-minute advisor call · book it",pre:"One call. We match you to a cohort, an instructor, a level.",hero:"heroes/banner.jpg"},
  {n:"23",day:"78",cat:"TRIAL",from:"philippe@frenchatelier.com",sub:"What a 12-week cohort actually changes",pre:"Twelve weeks. Live classes twice a week.",hero:"heroes/banner.jpg"},
  {n:"24",day:"82",cat:"TRIAL",from:"charline@frenchatelier.com",sub:"Charline answers your most asked question",pre:"Am I too old to learn? Ninety-second video reply.",hero:"heroes/banner.jpg"},
  {n:"25",day:"86",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Your seat in the July cohort · held until Friday",pre:"Ten seats per cohort. Yours is reserved until Friday.",hero:"heroes/banner.jpg"},
  {n:"26",day:"90",cat:"TRIAL",from:"hello@frenchatelier.com",sub:"Last call · July cohort closes tonight",pre:"Midnight Paris time.",hero:"heroes/banner.jpg"},
  {n:"27",day:"150",cat:"REACTIVATION",from:"hello@frenchatelier.com",sub:"Your French is still here. We saved your seat.",pre:"You paused. That's fine. The next cohort starts in three weeks.",hero:"heroes/banner.jpg"},
  {n:"28",day:"160",cat:"REACTIVATION",from:"charline@frenchatelier.com",sub:"Three students who came back after a year",pre:"Marina. James. Eleanor. Same fear, same return.",hero:"heroes/banner.jpg"},
  {n:"29",day:"170",cat:"BASTILLE",from:"hello@frenchatelier.com",sub:"Win a long weekend in Paris · drawn July 14",pre:"Enter free. Two nights, flights included.",hero:"heroes/banner.jpg"},
  {n:"30",day:"172",cat:"BASTILLE",from:"hello@frenchatelier.com",sub:"Last 48 hours · Bastille draw closes Sunday",pre:"Two nights in Paris. Enter free before Sunday midnight.",hero:"heroes/banner.jpg"}
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

/* ---------- CONTENT CALENDAR · HUGE, COLORED, WITH POST MOCKUPS ---------- */
const CAL = [
  {date:"Wed", d:"Sept 10", pillar:"prod",  head:"Il y a → Y a",                              cap:"Every French sentence has a spoken twin.",           asset:"formal_vs_spoken_5.mp4",  thumb:"posters/formal_vs_spoken_5.jpg"},
  {date:"Fri", d:"Sept 12", pillar:"edu",   head:"Tu me manques",                             cap:"You are missing from me. Not \"I miss you.\"",         asset:"Carousel · email 08",     thumb:"heroes/email8_tu_me_manques.jpg"},
  {date:"Mon", d:"Sept 15", pillar:"inspo", head:"Louvre · Mona Lisa crowd",                   cap:"Paris routines Americans daydream about.",           asset:"beauty_1.mp4",            thumb:"posters/beauty_1.jpg"},
  {date:"Wed", d:"Sept 17", pillar:"prod",  head:"Peut-être → P'têt",                          cap:"Formal versus spoken. What Paris actually says.",    asset:"formal_vs_spoken_9.mp4",  thumb:"posters/formal_vs_spoken_9.jpg"},
  {date:"Fri", d:"Sept 19", pillar:"edu",   head:"French Cheeses · chapitre I",                cap:"There is a cheese for every French mood.",           asset:"french_cheeses.mp4",      thumb:"posters/french_cheeses.jpg"},
  {date:"Mon", d:"Sept 22", pillar:"inspo", head:"One day in Cannes · Cartier",                cap:"French Riviera style, in one minute.",               asset:"beauty_3.mp4",            thumb:"posters/beauty_3.jpg"},
  {date:"Wed", d:"Sept 24", pillar:"prod",  head:"Sang · Cent · Sans · Sent",                  cap:"Four spellings, one sound.",                          asset:"homonyms_2.mp4",          thumb:"posters/homonyms_2.jpg"},
  {date:"Fri", d:"Sept 26", pillar:"edu",   head:"French Wardrobe · the essentials",           cap:"Five pieces. That is a French wardrobe.",            asset:"french_wardrobe.mp4",     thumb:"posters/french_wardrobe.jpg"},
  {date:"Mon", d:"Sept 29", pillar:"inspo", head:"Paris Fashion Week SS27 opens",              cap:"Nine days in Paris. Dior, Chanel, Hermès.",          asset:"beauty_2.mp4 · RTM",      thumb:"rtm/rtm_fashion_week.png"},
  {date:"Wed", d:"Oct 1",   pillar:"prod",  head:"Tu as vu → T'as vu",                         cap:"Two vowels drop, one Frenchness enters.",             asset:"formal_vs_spoken_11.mp4", thumb:"posters/formal_vs_spoken_11.jpg"},
  {date:"Fri", d:"Oct 3",   pillar:"edu",   head:"Chanel Capsule invitation",                  cap:"Rue Cambon vocabulary. Live Thursday.",              asset:"capsule-chanel.jpg",      thumb:"capsules/capsule-chanel.jpg"},
  {date:"Mon", d:"Oct 6",   pillar:"inspo", head:"French Tourism · the map lesson",             cap:"Ninety-six departments. Three to know first.",       asset:"french_tourism.mp4",      thumb:"posters/french_tourism.jpg"},
  {date:"Wed", d:"Oct 8",   pillar:"prod",  head:"Ou · Où · Août",                             cap:"Three spellings, three meanings.",                    asset:"homonyms_4.mp4",          thumb:"posters/homonyms_4.jpg"},
  {date:"Fri", d:"Oct 10",  pillar:"edu",   head:"Vendanges de Montmartre",                    cap:"Brass, parade, saint's blessing. Paris harvest.",    asset:"french_wines_1.mp4 · RTM",thumb:"rtm/rtm_vendanges.png"},
  {date:"Mon", d:"Oct 13",  pillar:"inspo", head:"Palais Garnier · after hours",               cap:"The opera house Paris keeps to itself.",             asset:"beauty_2.mp4",            thumb:"posters/beauty_2.jpg"},
  {date:"Wed", d:"Oct 15",  pillar:"prod",  head:"C'est un peu → C't'un peu",                  cap:"How casual French compresses two words into one.",   asset:"formal_vs_spoken_12.mp4", thumb:"posters/formal_vs_spoken_12.jpg"},
  {date:"Fri", d:"Oct 17",  pillar:"edu",   head:"French Holiday · the calendar",              cap:"Eleven public holidays. The three you should know.", asset:"french_holiday.mp4",      thumb:"posters/french_holiday.jpg"},
  {date:"Mon", d:"Oct 20",  pillar:"inspo", head:"French History · Le Roi Soleil",              cap:"Louis XIV in ninety seconds.",                        asset:"french_history.mp4",      thumb:"posters/french_history.jpg"},
  {date:"Wed", d:"Oct 22",  pillar:"prod",  head:"Chant · Champ",                               cap:"One sound, two meanings.",                            asset:"homonyms_7.mp4",          thumb:"posters/homonyms_2.jpg"},
  {date:"Fri", d:"Oct 24",  pillar:"edu",   head:"French Wines · chapitre II",                  cap:"Bordeaux, Bourgogne, Champagne, Rhône, Loire.",      asset:"french_wines_2.mp4",      thumb:"posters/french_wines_2.jpg"},
  {date:"Mon", d:"Oct 27",  pillar:"inspo", head:"Salon du Chocolat opens · 30 years",          cap:"Chocolate couture runway. Broadcast in 28 countries.",asset:"beauty_6.mp4 · RTM",      thumb:"rtm/rtm_chocolat.png"},
  {date:"Wed", d:"Oct 29",  pillar:"prod",  head:"Tant · Temps · Tend · Taon",                  cap:"Four spellings, same sound. Homonym classic.",       asset:"homonyms_8.mp4",          thumb:"posters/homonyms_2.jpg"},
  {date:"Fri", d:"Oct 31",  pillar:"edu",   head:"The Mapster · opened to the world",           cap:"Every lesson has a place. Tap through Paris.",       asset:"Live Mapster fold",       thumb:"capsules/hero-versailles.jpg"}
];
const CAL_SEP = CAL.filter(r => r.d.startsWith("Sept"));
const CAL_OCT = CAL.filter(r => r.d.startsWith("Oct"));

function calCard(r){
  const PILL = {inspo:"MON · INSPIRATION", prod:"WED · PRODUCT", edu:"FRI · EDUCATION"};
  return `
    <div class="cal-card cal-${r.pillar}">
      <div class="cal-date-band">${r.date} · ${r.d}</div>
      <div class="cal-pillar-band">${PILL[r.pillar]}</div>
      <div class="cal-thumb"><img src="${r.thumb}" alt="asset" loading="lazy"></div>
      <div class="cal-body">
        <h4 class="cal-h">${r.head}</h4>
        <p class="cal-cap">${r.cap}</p>
        <div class="cal-asset">${r.asset}</div>
      </div>
    </div>`;
}
const sepHost = document.getElementById("calSepHost");
const octHost = document.getElementById("calOctHost");
if (sepHost) sepHost.innerHTML = CAL_SEP.map(calCard).join("");
if (octHost) octHost.innerHTML = CAL_OCT.map(calCard).join("");
