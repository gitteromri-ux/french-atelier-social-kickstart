/* French Atelier · Social Kickstart · injectors */

/* ---------- RTM EVENTS ---------- */
const RTM = [
  {d:"Sept 10–15", en:"Paris Design Week & Maison&Objet", fr:"Paris Design Week", city:"Paris", hook:"Design's global capital opens 300+ ateliers and boutiques, from the Louvre nave to the Marais.", src:"https://www.maison-objet.com/en/paris-design-week"},
  {d:"Sept 19–20", en:"European Heritage Days", fr:"Journées Européennes du Patrimoine", city:"Nationwide · France", hook:"18,000 historic sites unlock their private doors for one weekend · Élysée, Matignon, Comédie-Française.", src:"https://journeesdupatrimoine.culture.gouv.fr/espace-organisateurs"},
  {d:"Sept 19–22", en:"Fine Arts Paris", fr:"Fine Arts Paris", city:"Carrousel du Louvre", hook:"Old-master drawings, sculpture and salon painting under the glass pyramid.", src:"https://finearts-paris.com/en/home/"},
  {d:"Sept 19", en:"Techno Parade", fr:"Techno Parade", city:"Paris", hook:"A hundred thousand ravers roll from Bastille to République behind twenty sound floats.", src:"https://www.festivalenfrance.com/en/festival/techno-parade"},
  {d:"Sept 24", en:"Louvre · Kader Attia & Elizabeth Peyton", fr:"Hôtes du Louvre", city:"Musée du Louvre", hook:"Two contemporary voices installed inside the greatest museum on Earth. First glimpse this week.", src:"https://www.louvre.fr/en/exhibitions-and-events/exhibitions"},
  {d:"Sept 26–28", en:"French Gastronomy Festival", fr:"Fête de la Gastronomie", city:"Nationwide", hook:"Chefs across France open kitchens, markets fill the squares, the country eats together for a weekend.", src:"https://www.chouette-calendrier.com/date/fete-gastronomie/14786.html"},
  {d:"Sept 28–Oct 6", en:"Paris Fashion Week · Womenswear SS27", fr:"Paris Fashion Week", city:"Paris", hook:"Dior. Chanel. Hermès. Louis Vuitton. The nine days that dress the world.", src:"https://www.fhcm.paris/en/paris-fashion-week"},
  {d:"Oct 2–12", en:"French Science Festival", fr:"Fête de la Science", city:"Nationwide", hook:"Labs and observatories open across France · Institut Pasteur, Palais de la Découverte, the CERN of curiosities.", src:"https://www.fetedelascience.fr/"},
  {d:"Oct 6 · Jan 2027", en:"Orsay · Mary Cassatt", fr:"Mary Cassatt · Le choix de l'indépendance", city:"Musée d'Orsay", hook:"The American impressionist finally gets Orsay to herself. Morisot's rival, Degas's confidante.", src:"https://www.visitparisregion.com/en/mary-cassatt-the-choice-of-independence"},
  {d:"Oct 7–10", en:"Montmartre Grape Harvest", fr:"Fête des Vendanges de Montmartre", city:"Montmartre, Paris", hook:"The last working vineyard in Paris throws its harvest festival on the Butte. Parade, wine, brass.", src:"https://fetedesvendangesdemontmartre.com/"},
  {d:"Oct 7 · Jan 2027", en:"Louvre · Zurbarán 1598–1664", fr:"Zurbarán", city:"Musée du Louvre", hook:"First French retrospective of Seville's mystic painter · silence, folds, candlelight.", src:"https://www.louvre.fr/en/exhibitions-and-events/exhibitions"},
  {d:"Oct 9 · Feb 2027", en:"Fondation Louis Vuitton · Fayet", fr:"Gustave Fayet · Collectionneur, Créateur", city:"Fondation Louis Vuitton", hook:"Frank Gehry's glass sails reopen with the collector who bought Gauguin before Gauguin was Gauguin.", src:"https://www.fondationlouisvuitton.fr/en/programme"},
  {d:"Oct 10–13", en:"Saint-Émilion Grape Harvest", fr:"Fête des Vendanges de Saint-Émilion", city:"Saint-Émilion (Bordeaux)", hook:"The Jurade in scarlet robes proclaims the vintage from the medieval tower. Bordeaux at its most operatic.", src:"https://www.bordeaux.com/fr/agenda/fete-des-vendanges-2026/"},
  {d:"Oct 10–18", en:"Festival Lumière · Lyon", fr:"Festival Lumière", city:"Lyon", hook:"Cinema's birthplace turns its ten-day pilgrimage into a citywide altar. This year's tribute: Isabelle Huppert.", src:"https://www.festivalenfrance.com/en/festival/festival-lumiere"},
  {d:"Oct 20 · Mar 2027", en:"Orsay · Jenny Holzer", fr:"Jenny Holzer · I Saw", city:"Musée d'Orsay", hook:"The American conceptualist projects words across Orsay's beaux-arts halls. Text as thunder.", src:"https://www.sortiraparis.com/en/what-to-visit-in-paris/exhibit-museum/articles/305107-jenny-holzer-i-saw-the-artist-s-first-major-exhibition-in-paris-at-the-orsay-museum"},
  {d:"Oct 20–26", en:"Paris Internationale", fr:"Paris Internationale", city:"Paris", hook:"The Fashion-Week-adjacent art fair with the smallest, sharpest galleries on the planet.", src:"https://parisinternationale.com/"},
  {d:"Oct 21 · Mar 2027", en:"Palais de Tokyo · Sonia Gomes", fr:"Sonia Gomes · Wild Heart", city:"Palais de Tokyo", hook:"The Brazilian master of textile assemblage takes over Paris's wildest contemporary museum.", src:"https://palaisdetokyo.com/en/exposition/wild-heart/"},
  {d:"Oct 23–26", en:"Art Basel Paris", fr:"Paris+ par Art Basel", city:"Grand Palais", hook:"The Grand Palais under glass, the collectors under pressure, the city electric.", src:"https://www.festivalenfrance.com/festival/paris-par-art-basel"},
  {d:"Oct 28–Nov 1", en:"Salon du Chocolat · 30ᵉ édition", fr:"Salon du Chocolat", city:"Porte de Versailles, Paris", hook:"The world's biggest chocolate salon turns thirty. A chocolate haute-couture runway. Actual couture, actual chocolate.", src:"https://www.salon-du-chocolat.com/en"}
];

const rtmGrid = document.getElementById("rtmGrid");
RTM.forEach(e => {
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

/* ---------- VIDEOS · autoplay muted, tap for sound, lip-sync guarded via poster ---------- */

// Formal vs Spoken · Philippe & Charline this-or-that
const FORMAL = [
  {f:"videos/formal_vs_spoken_2.mp4",  p:"posters/formal_vs_spoken_2.jpg",  title:"S'il vous plaît · vs · S'te plaît",       meta:"5 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_3.mp4",  p:"posters/formal_vs_spoken_3.jpg",  title:"Je ne sais pas · vs · Chais pas",           meta:"5 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_4.mp4",  p:"posters/formal_vs_spoken_4.jpg",  title:"Qu'est-ce que c'est · vs · C'est quoi",     meta:"6 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_5.mp4",  p:"posters/formal_vs_spoken_5.jpg",  title:"Il y a · vs · Y a",                          meta:"7 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_6.mp4",  p:"posters/formal_vs_spoken_6.jpg",  title:"Nous sommes · vs · On est",                  meta:"7 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_7.mp4",  p:"posters/formal_vs_spoken_7.jpg",  title:"Je suis fatigué · vs · Chuis crevé",         meta:"7 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_8.mp4",  p:"posters/formal_vs_spoken_2.jpg",  title:"Ne t'inquiète pas · vs · T'inquiète",        meta:"7 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_9.mp4",  p:"posters/formal_vs_spoken_3.jpg",  title:"Peut-être · vs · P'têt",                     meta:"8 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_10.mp4", p:"posters/formal_vs_spoken_4.jpg",  title:"Je vais · vs · J'vais",                      meta:"8 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_11.mp4", p:"posters/formal_vs_spoken_5.jpg",  title:"Tu as vu · vs · T'as vu",                    meta:"8 sec · lip-sync clean"},
  {f:"videos/formal_vs_spoken_12.mp4", p:"posters/formal_vs_spoken_6.jpg",  title:"C'est un peu · vs · C't'un peu",             meta:"8 sec · lip-sync clean"}
];
// Organic bonus (culture-first shorts)
const ORG = [
  {f:"videos/french_cheeses.mp4", p:"posters/french_cheeses.jpg", title:"Les fromages de France", meta:"culture · 6 sec"},
  {f:"videos/french_history.mp4", p:"posters/french_history.jpg", title:"L'histoire, vite dit",   meta:"culture · 5 sec"},
  {f:"videos/french_holiday.mp4", p:"posters/french_holiday.jpg", title:"Un jour férié",           meta:"culture · 7 sec"},
  {f:"videos/french_wardrobe.mp4",p:"posters/french_wardrobe.jpg",title:"La garde-robe française", meta:"culture · 8 sec"},
  {f:"videos/french_wines_1.mp4", p:"posters/formal_vs_spoken_2.jpg", title:"Les vins, chapitre I",   meta:"culture · 5 sec"},
  {f:"videos/french_wines_2.mp4", p:"posters/formal_vs_spoken_3.jpg", title:"Les vins, chapitre II",  meta:"culture · 5 sec"}
];
// Beauty · viral 4K aspirational
const BEAUTY = [
  {f:"videos/beauty_1.mp4", p:"posters/beauty_1.jpg", title:"Paris, la lumière du soir",  meta:"inspiration · 23 sec"},
  {f:"videos/beauty_2.mp4", p:"posters/beauty_2.jpg", title:"Un café rue Cambon",         meta:"inspiration · 7 sec"},
  {f:"videos/beauty_3.mp4", p:"posters/beauty_3.jpg", title:"Vendanges dans le Bordelais",meta:"inspiration · 14 sec"},
  {f:"videos/beauty_4.mp4", p:"posters/beauty_4.jpg", title:"Le Louvre après la fermeture",meta:"inspiration · 9 sec"},
  {f:"videos/beauty_5.mp4", p:"posters/beauty_1.jpg", title:"Provence, fin d'été",         meta:"inspiration · 10 sec"},
  {f:"videos/beauty_6.mp4", p:"posters/beauty_3.jpg", title:"Le marché du dimanche",       meta:"inspiration · 15 sec"}
];

function vidCard(v){
  return `
    <div class="vid-card">
      <video muted autoplay loop playsinline preload="metadata" poster="${v.p}">
        <source src="${v.f}" type="video/mp4">
      </video>
      <button class="sound-btn" aria-label="Toggle sound" title="Toggle sound">🔇</button>
      <div class="vid-label">
        <div class="vid-title">${v.title}</div>
        <div class="vid-meta">${v.meta}</div>
      </div>
    </div>`;
}
function fill(id, arr, fn){ const el = document.getElementById(id); if(el) el.innerHTML = arr.map(fn).join(""); }
fill("vidGrid",    FORMAL, vidCard);
fill("orgGrid",    ORG,    vidCard);
fill("beautyGrid", BEAUTY, vidCard);

// Sound-toggle behavior · single video with sound at a time
document.querySelectorAll(".sound-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".vid-card");
    const vid = card.querySelector("video");
    const willUnmute = vid.muted;
    // Mute all others first
    document.querySelectorAll("video").forEach(v => {
      v.muted = true;
    });
    document.querySelectorAll(".sound-btn").forEach(b => b.textContent = "🔇");
    if (willUnmute) {
      vid.muted = false;
      vid.play();
      btn.textContent = "🔊";
    }
  });
});
// Click on video body toggles play/pause without unmuting
document.querySelectorAll(".vid-card video").forEach(v => {
  v.addEventListener("click", () => { if (v.paused) v.play(); else v.pause(); });
});

/* ---------- EMAILS · realistic mockups ---------- */
const EMAILS_LIFECYCLE = [
  {tag:"WELCOME · Email 01", from:"hello@frenchatelier.com", sub:"Bienvenue · your French starts here", pre:"You just took a step most adults never take. Here is what happens in the next 7 days.", hero:"heroes/banner.jpg"},
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
  {tag:"ONB · Day 7",   from:"charline@frenchatelier.com", sub:"Your first week · what changed", pre:"You will start dreaming in French sooner than you think. Here is why.", hero:"heroes/email8_tu_me_manques.jpg"},
  {tag:"ONB · Day 14",  from:"vincent@frenchatelier.com", sub:"The Six Pillars, and where you are on them", pre:"A private map of your Atelier journey. Print it.", hero:"heroes/email12_already_speak.jpg"},
  {tag:"ONB · Day 30",  from:"hello@frenchatelier.com", sub:"Thirty days in · a small ceremony", pre:"You have earned the first badge. Here is what unlocks next.", hero:"heroes/email11_sings.jpg"}
];
const EMAILS_CAP = [
  {tag:"CAPSULE · Fashion", from:"charline@frenchatelier.com", sub:"Chanel · the Rue Cambon language, this Thursday live", pre:"Ninety minutes on the tweed, the camellia, the number five. In French, in English, together.", hero:"capsules/capsule-chanel.jpg"},
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
fill("emailsLifecycle", EMAILS_LIFECYCLE, emailCard);
fill("emailsAcq",       EMAILS_ACQ,       emailCard);
fill("emailsOnb",       EMAILS_ONB,       emailCard);
fill("emailsCap",       EMAILS_CAP,       emailCard);

/* ---------- CONTENT CALENDAR · 23 posts ---------- */
const CAL_SEP = [
  // Week 1 (partial · Sept 10-14): 2 posts (Wed+Fri) since Monday is 8th (past)
  {date:"Wed · Sept 10", pillar:"prod", pillarL:"Product", head:"Il y a → Y a. One micro-lesson, five seconds.", cap:"Every French sentence you were taught has a spoken twin. Meet the twin.", asset:"formal_vs_spoken_5.mp4 · Philippe & Charline"},
  {date:"Fri · Sept 12", pillar:"edu",  pillarL:"Education", head:"Tu me manques. The love flip.", cap:"You are missing from me. Not \"I miss you.\" A single grammatical flip that changes how love is spoken.", asset:"Carousel from lifecycle email 08 · hero + long copy"},
  // Week 2 (Sept 15-21)
  {date:"Mon · Sept 15", pillar:"inspo", pillarL:"Inspiration", head:"Paris Design Week opens · 300 ateliers unlock.", cap:"From the Louvre nave to the Marais, the design capital reopens its doors. Save this reel, plan the trip you never take.", asset:"beauty_1.mp4 · Paris golden hour · RTM Paris Design Week"},
  {date:"Wed · Sept 17", pillar:"prod",  pillarL:"Product", head:"S'il vous plaît → S'te plaît.", cap:"Formal versus spoken. Same word, different French. This one is the first thing a Parisian barista will notice.", asset:"formal_vs_spoken_2.mp4 · Philippe & Charline"},
  {date:"Fri · Sept 19", pillar:"edu",   pillarL:"Education", head:"Journées du Patrimoine · the private France opens.", cap:"18,000 sites, one weekend, private doors that stay closed the other 363 days. Here is the vocabulary to ask for the tour.", asset:"french_history.mp4 + carousel · RTM Heritage Days"},
  // Week 3 (Sept 22-28)
  {date:"Mon · Sept 22", pillar:"inspo", pillarL:"Inspiration", head:"Vendanges. The harvest starts in Bordeaux.", cap:"Golden light, cellar doors, the year's first wine. This is why French sounds like a place, not a language.", asset:"beauty_3.mp4 · Vendanges Bordelaises"},
  {date:"Wed · Sept 24", pillar:"prod",  pillarL:"Product", head:"Je ne sais pas → Chais pas.", cap:"The most spoken sentence in France, and the one you were never taught. Two seconds, one lesson.", asset:"formal_vs_spoken_3.mp4 · Philippe & Charline"},
  {date:"Fri · Sept 26", pillar:"edu",   pillarL:"Education", head:"Fête de la Gastronomie · cook a country, read its tongue.", cap:"Chefs open kitchens across France this weekend. Here are the twelve French menu words that unlock every one of them.", asset:"french_cheeses.mp4 + carousel · RTM Gastronomy Festival"},
  // Week 4 (Sept 29 – Oct 5) · spans into October (first row Monday Sept 29)
  {date:"Mon · Sept 29", pillar:"inspo", pillarL:"Inspiration", head:"Paris Fashion Week SS27 · day two.", cap:"Dior. Chanel. Hermès. The nine days that dress the world. Turn the sound on.", asset:"beauty_2.mp4 · Rue Cambon coffee · RTM Fashion Week"}
];
const CAL_OCT = [
  // Week of Sep 29 – Oct 5 : Wed Oct 1 · Fri Oct 3
  {date:"Wed · Oct 1", pillar:"prod",  pillarL:"Product", head:"Qu'est-ce que c'est → C'est quoi.", cap:"The polite way, and the way people actually ask. Both correct. Only one is spoken.", asset:"formal_vs_spoken_4.mp4 · Philippe & Charline"},
  {date:"Fri · Oct 3", pillar:"edu",   pillarL:"Education", head:"The Chanel Capsule opens.", cap:"Rue Cambon vocabulary. The tweed, the camellia, the number five, in the French Mademoiselle spoke. Live class Thursday.", asset:"capsule-chanel.jpg carousel · Culture Capsule invitation"},
  // Week of Oct 6-12
  {date:"Mon · Oct 6",  pillar:"inspo", pillarL:"Inspiration", head:"Mary Cassatt opens at Orsay.", cap:"The American impressionist finally gets Orsay to herself. Morisot's rival, Degas's confidante. Save the ticket.", asset:"capsule-impressionism.jpg reel · RTM Musée d'Orsay"},
  {date:"Wed · Oct 8",  pillar:"prod",  pillarL:"Product", head:"Nous sommes → On est.", cap:"French classrooms teach nous. French streets speak on. One replaces the other in every real conversation.", asset:"formal_vs_spoken_6.mp4 · Philippe & Charline"},
  {date:"Fri · Oct 10", pillar:"edu",   pillarL:"Education", head:"Vendanges de Montmartre · the last vineyard in Paris.", cap:"A brass band, a saint's blessing, a parade of a hundred confréries. Here are the eight words to sing along.", asset:"french_wines_1.mp4 + carousel · RTM Fête des Vendanges"},
  // Week of Oct 13-19
  {date:"Mon · Oct 13", pillar:"inspo", pillarL:"Inspiration", head:"Lyon glows · Festival Lumière opens.", cap:"The city where cinema was born turns into a ten-day altar. This year's tribute: Isabelle Huppert.", asset:"beauty_4.mp4 · Louvre after dark styled as Lyon night · RTM Lumière"},
  {date:"Wed · Oct 15", pillar:"prod",  pillarL:"Product", head:"Je suis fatigué → Chuis crevé.", cap:"Formal French is polite. Spoken French is honest. Here is the honest one, from Philippe.", asset:"formal_vs_spoken_7.mp4 · Philippe & Charline"},
  {date:"Fri · Oct 17", pillar:"edu",   pillarL:"Education", head:"Dépaysement. The word English forgot to invent.", cap:"The feeling of being pleasantly unmoored. There is no English translation because English rarely names the in-between.", asset:"Carousel · lifecycle email SOUL series · essay + hero"},
  // Week of Oct 20-26
  {date:"Mon · Oct 20", pillar:"inspo", pillarL:"Inspiration", head:"Art Basel Paris · Grand Palais under glass.", cap:"The city electric, the collectors under pressure, the glass roof back after four years of restoration. Save the walk.", asset:"beauty_5.mp4 · Provence · restaged as Grand Palais opening · RTM Art Basel"},
  {date:"Wed · Oct 22", pillar:"prod",  pillarL:"Product", head:"Ne t'inquiète pas → T'inquiète.", cap:"Two words become one. Reassurance in French, said the way Paris actually says it.", asset:"formal_vs_spoken_8.mp4 · Philippe & Charline"},
  {date:"Fri · Oct 24", pillar:"edu",   pillarL:"Education", head:"The Impressionism Capsule opens.", cap:"Argenteuil to Giverny, in the words the painters wrote to each other. Live, English-guided, exclusive to the Atelier.", asset:"capsule-impressionism.jpg carousel · Culture Capsule invitation"},
  // Week of Oct 27-31
  {date:"Mon · Oct 27", pillar:"inspo", pillarL:"Inspiration", head:"Salon du Chocolat opens · thirty years, one runway.", cap:"Actual couture. Actual chocolate. The Salon at thirty is the sweetest week Paris has all year.", asset:"beauty_6.mp4 · Sunday market · RTM Salon du Chocolat"},
  {date:"Wed · Oct 29", pillar:"prod",  pillarL:"Product", head:"Tu as vu → T'as vu.", cap:"Two vowels drop, one Frenchness enters. The rule Duolingo will not teach you.", asset:"formal_vs_spoken_11.mp4 · Philippe & Charline"},
  {date:"Fri · Oct 31", pillar:"edu",   pillarL:"Education", head:"The Mapster, opened to the world.", cap:"Every lesson has a place. Every place has a photograph, a story, a memory. Tap through Paris.", asset:"Live Mapster fold · interactive carousel + swipe reel"}
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
