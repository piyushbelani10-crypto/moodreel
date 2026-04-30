const moods = [
  { id: "happy", name: "Happy", tone: "bright, charming, alive", note: "For when you want warmth without switching your brain off." },
  { id: "sad", name: "Sad", tone: "gentle, aching, human", note: "Films that sit with melancholy and make it feel beautifully specific." },
  { id: "romantic", name: "Romantic", tone: "tender, witty, yearning", note: "Love stories with texture, not just sparkle." },
  { id: "thrilled", name: "Thrilled", tone: "tense, propulsive, sharp", note: "Clean adrenaline, moral pressure, and nervous hands on the armrest." },
  { id: "thoughtful", name: "Thoughtful", tone: "philosophical, layered", note: "For the mood where you want the movie to follow you after the credits." },
  { id: "weird", name: "Weird", tone: "surreal, bold, uncanny", note: "Odd angles, strange rules, and films with a pulse of their own." },
  { id: "inspired", name: "Inspired", tone: "hopeful, grand, resilient", note: "Stories that restore a little faith in motion, craft, and people." }
];

const movies = [
  {
    title: "Amelie",
    year: 2001,
    director: "Jean-Pierre Jeunet",
    mood: ["happy", "romantic"],
    pace: "balanced",
    era: "modern",
    rating: "8.3",
    summary: "A shy Parisian waitress quietly improves strangers' lives while learning to risk her own happiness. Whimsical, precise, and built like a box of cinematic sweets.",
    tags: ["French", "whimsical", "romance"],
    platforms: ["Prime Video", "Apple TV", "JustWatch"],
    colors: ["#bd3f2f", "#2d6f73"]
  },
  {
    title: "Singin' in the Rain",
    year: 1952,
    director: "Gene Kelly, Stanley Donen",
    mood: ["happy", "inspired"],
    pace: "fast",
    era: "classic",
    rating: "8.3",
    summary: "Hollywood stumbles into the sound era with dance, wit, and impossible grace. It remains one of cinema's cleanest arguments for joy as serious craft.",
    tags: ["musical", "classic", "Hollywood"],
    platforms: ["Max", "Apple TV", "Prime Video"],
    colors: ["#2d6f73", "#b7791f"]
  },
  {
    title: "Past Lives",
    year: 2023,
    director: "Celine Song",
    mood: ["sad", "romantic", "thoughtful"],
    pace: "slow",
    era: "recent",
    rating: "7.8",
    summary: "Two childhood friends reconnect across continents and years, turning what-could-have-been into something quieter and more devastating.",
    tags: ["modern romance", "Korean diaspora", "quiet"],
    platforms: ["Paramount+", "Showtime", "Apple TV"],
    colors: ["#55735f", "#31546b"]
  },
  {
    title: "Aftersun",
    year: 2022,
    director: "Charlotte Wells",
    mood: ["sad", "thoughtful"],
    pace: "slow",
    era: "recent",
    rating: "7.6",
    summary: "A daughter looks back at a holiday with her father, where ordinary moments carry the weight of things she could not understand yet.",
    tags: ["memory", "father-daughter", "A24"],
    platforms: ["Paramount+", "Kanopy", "Apple TV"],
    colors: ["#31546b", "#b7791f"]
  },
  {
    title: "Before Sunrise",
    year: 1995,
    director: "Richard Linklater",
    mood: ["romantic", "thoughtful"],
    pace: "slow",
    era: "modern",
    rating: "8.1",
    summary: "Two strangers spend one night walking through Vienna, letting conversation become flirtation, philosophy, and a fragile promise.",
    tags: ["dialogue", "Vienna", "indie"],
    platforms: ["Criterion Channel", "Max", "Apple TV"],
    colors: ["#8f2f28", "#55735f"]
  },
  {
    title: "Portrait of a Lady on Fire",
    year: 2019,
    director: "Celine Sciamma",
    mood: ["romantic", "sad", "thoughtful"],
    pace: "slow",
    era: "recent",
    rating: "8.1",
    summary: "An artist and her subject build intimacy through looking, silence, and restraint. Every frame feels composed around desire and memory.",
    tags: ["French", "period drama", "painterly"],
    platforms: ["Hulu", "Criterion Channel", "Apple TV"],
    colors: ["#bd3f2f", "#1f5f66"]
  },
  {
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    mood: ["thrilled", "thoughtful"],
    pace: "fast",
    era: "recent",
    rating: "8.5",
    summary: "A poor family infiltrates a wealthy household in a genre-shifting satire that keeps tightening until the social architecture cracks.",
    tags: ["Korean", "satire", "class"],
    platforms: ["Hulu", "Max", "Apple TV"],
    colors: ["#171717", "#55735f"]
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    mood: ["thrilled", "inspired"],
    pace: "fast",
    era: "recent",
    rating: "8.1",
    summary: "A near-wordless chase movie engineered with operatic clarity. It is maximal action with clean geography and a fierce survival heartbeat.",
    tags: ["action", "desert", "kinetic"],
    platforms: ["Max", "Prime Video", "Apple TV"],
    colors: ["#b7791f", "#bd3f2f"]
  },
  {
    title: "Drive",
    year: 2011,
    director: "Nicolas Winding Refn",
    mood: ["thrilled", "weird"],
    pace: "balanced",
    era: "recent",
    rating: "7.8",
    summary: "A stunt driver with a criminal side life falls into danger, scored with neon longing and sudden violence.",
    tags: ["neo-noir", "Los Angeles", "stylized"],
    platforms: ["Netflix", "Apple TV", "Prime Video"],
    colors: ["#8f2f88", "#1f5f66"]
  },
  {
    title: "Arrival",
    year: 2016,
    director: "Denis Villeneuve",
    mood: ["thoughtful", "sad", "inspired"],
    pace: "balanced",
    era: "recent",
    rating: "7.9",
    summary: "A linguist tries to understand alien visitors, and the film turns language, time, grief, and choice into one elegant emotional equation.",
    tags: ["sci-fi", "language", "grief"],
    platforms: ["Netflix", "Paramount+", "Apple TV"],
    colors: ["#31546b", "#55735f"]
  },
  {
    title: "Stalker",
    year: 1979,
    director: "Andrei Tarkovsky",
    mood: ["thoughtful", "weird"],
    pace: "slow",
    era: "classic",
    rating: "8.1",
    summary: "A guide leads two men into a forbidden zone where desire, faith, and despair seem to alter the landscape itself.",
    tags: ["Soviet", "philosophical", "slow cinema"],
    platforms: ["Criterion Channel", "Max", "Apple TV"],
    colors: ["#55735f", "#6f604c"]
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    director: "Daniel Kwan, Daniel Scheinert",
    mood: ["weird", "happy", "inspired"],
    pace: "fast",
    era: "recent",
    rating: "7.8",
    summary: "A laundromat owner tumbles through multiverses, absurd comedy, family pain, and a surprisingly sincere argument for kindness.",
    tags: ["multiverse", "family", "absurd"],
    platforms: ["Netflix", "Paramount+", "Apple TV"],
    colors: ["#bd3f2f", "#2d6f73"]
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    mood: ["happy", "weird"],
    pace: "fast",
    era: "recent",
    rating: "8.1",
    summary: "A concierge and lobby boy race through a powdered-sugar Europe of theft, manners, fascism, and immaculate comic timing.",
    tags: ["comedy", "stylized", "ensemble"],
    platforms: ["Hulu", "Disney+", "Apple TV"],
    colors: ["#bd3f88", "#b7791f"]
  },
  {
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    mood: ["weird", "inspired", "happy"],
    pace: "balanced",
    era: "modern",
    rating: "8.6",
    summary: "A girl navigates a spirit bathhouse with courage and attention. Dream logic, labor, appetite, and wonder all move as one.",
    tags: ["animation", "Japanese", "fantasy"],
    platforms: ["Max", "Netflix", "Apple TV"],
    colors: ["#2d6f73", "#31546b"]
  },
  {
    title: "Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    mood: ["inspired", "sad", "happy"],
    pace: "balanced",
    era: "classic",
    rating: "8.5",
    summary: "A filmmaker remembers the projectionist who taught him to love movies. Sentimental in the best way: generous, nostalgic, and full-hearted.",
    tags: ["Italian", "nostalgia", "movies"],
    platforms: ["Prime Video", "Kanopy", "Apple TV"],
    colors: ["#b7791f", "#8f2f28"]
  },
  {
    title: "Ikiru",
    year: 1952,
    director: "Akira Kurosawa",
    mood: ["inspired", "sad", "thoughtful"],
    pace: "slow",
    era: "classic",
    rating: "8.3",
    summary: "A bureaucrat facing mortality searches for one meaningful act. Quiet, humane, and devastatingly clear about what a life can still become.",
    tags: ["Japanese", "humanist", "classic"],
    platforms: ["Criterion Channel", "Max", "Apple TV"],
    colors: ["#171717", "#b7791f"]
  },
  {
    title: "Dil Chahta Hai",
    year: 2001,
    director: "Farhan Akhtar",
    mood: ["happy", "thoughtful"],
    pace: "balanced",
    era: "modern",
    rating: "8.1",
    summary: "Three friends drift through love, ego, and adulthood in a film that helped redraw urban Hindi cinema for the 2000s.",
    tags: ["Bollywood", "friendship", "coming-of-age"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#2d6f73", "#31546b"]
  },
  {
    title: "Lagaan",
    year: 2001,
    director: "Ashutosh Gowariker",
    mood: ["inspired", "happy"],
    pace: "balanced",
    era: "modern",
    rating: "8.1",
    summary: "A village challenges colonial rulers to a cricket match, turning sport into a grand, musical underdog epic.",
    tags: ["Bollywood", "period drama", "sports"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#b7791f", "#8f2f28"]
  },
  {
    title: "Kal Ho Naa Ho",
    year: 2003,
    director: "Nikkhil Advani",
    mood: ["romantic", "sad", "happy"],
    pace: "balanced",
    era: "modern",
    rating: "7.9",
    summary: "A warm New York romance folds comedy, family tension, and heartbreak into one of Bollywood's most emotional crowd-pleasers.",
    tags: ["Bollywood", "romance", "family"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#bd3f2f", "#31546b"]
  },
  {
    title: "Swades",
    year: 2004,
    director: "Ashutosh Gowariker",
    mood: ["inspired", "thoughtful"],
    pace: "slow",
    era: "modern",
    rating: "8.2",
    summary: "A NASA engineer returns to rural India and slowly confronts comfort, responsibility, and the meaning of home.",
    tags: ["Bollywood", "drama", "social"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#55735f", "#b7791f"]
  },
  {
    title: "Rang De Basanti",
    year: 2006,
    director: "Rakeysh Omprakash Mehra",
    mood: ["inspired", "sad", "thoughtful"],
    pace: "fast",
    era: "modern",
    rating: "8.1",
    summary: "A group of carefree friends become politically awake while reenacting freedom-fighter stories for a documentary.",
    tags: ["Bollywood", "political", "youth"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#b7791f", "#bd3f2f"]
  },
  {
    title: "Jab We Met",
    year: 2007,
    director: "Imtiaz Ali",
    mood: ["happy", "romantic"],
    pace: "fast",
    era: "modern",
    rating: "7.9",
    summary: "A heartbroken businessman meets a talkative runaway bride, and their journey becomes pure comfort-cinema momentum.",
    tags: ["Bollywood", "rom-com", "road movie"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#bd3f2f", "#2d6f73"]
  },
  {
    title: "Taare Zameen Par",
    year: 2007,
    director: "Aamir Khan, Amole Gupte",
    mood: ["sad", "inspired"],
    pace: "balanced",
    era: "modern",
    rating: "8.3",
    summary: "A misunderstood child finds a teacher who sees his imagination clearly. Tender, direct, and deeply empathetic.",
    tags: ["Bollywood", "school", "family"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#31546b", "#b7791f"]
  },
  {
    title: "3 Idiots",
    year: 2009,
    director: "Rajkumar Hirani",
    mood: ["happy", "inspired"],
    pace: "fast",
    era: "modern",
    rating: "8.4",
    summary: "Three engineering students question pressure, ambition, and education in a comedy-drama with huge heart and replay value.",
    tags: ["Bollywood", "college", "comedy-drama"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#2d6f73", "#b7791f"]
  },
  {
    title: "Wake Up Sid",
    year: 2009,
    director: "Ayan Mukerji",
    mood: ["happy", "thoughtful", "romantic"],
    pace: "balanced",
    era: "modern",
    rating: "7.6",
    summary: "A careless rich kid in Mumbai learns independence through friendship, work, and a softer kind of growing up.",
    tags: ["Bollywood", "Mumbai", "coming-of-age"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#31546b", "#2d6f73"]
  },
  {
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    director: "Zoya Akhtar",
    mood: ["happy", "inspired", "thoughtful"],
    pace: "balanced",
    era: "recent",
    rating: "8.2",
    summary: "A Spain road trip turns into a sleek, funny meditation on friendship, fear, work, love, and choosing your life.",
    tags: ["Bollywood", "travel", "friendship"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#2d6f73", "#bd3f2f"]
  },
  {
    title: "Barfi!",
    year: 2012,
    director: "Anurag Basu",
    mood: ["happy", "romantic", "sad"],
    pace: "balanced",
    era: "recent",
    rating: "8.1",
    summary: "A Chaplin-esque romance follows mischief, disability, memory, and devotion with playful visual storytelling.",
    tags: ["Bollywood", "romance", "bittersweet"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#b7791f", "#55735f"]
  },
  {
    title: "Queen",
    year: 2013,
    director: "Vikas Bahl",
    mood: ["happy", "inspired"],
    pace: "balanced",
    era: "recent",
    rating: "8.1",
    summary: "After being dumped before her wedding, Rani takes her honeymoon alone and discovers a sturdier version of herself.",
    tags: ["Bollywood", "self-discovery", "travel"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#bd3f2f", "#b7791f"]
  },
  {
    title: "Haider",
    year: 2014,
    director: "Vishal Bhardwaj",
    mood: ["sad", "thoughtful", "thrilled"],
    pace: "slow",
    era: "recent",
    rating: "8.0",
    summary: "A Kashmir-set Hamlet adaptation turns grief, revenge, and political violence into a haunting, muscular tragedy.",
    tags: ["Bollywood", "Shakespeare", "political"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#171717", "#31546b"]
  },
  {
    title: "Piku",
    year: 2015,
    director: "Shoojit Sircar",
    mood: ["happy", "thoughtful"],
    pace: "balanced",
    era: "recent",
    rating: "7.6",
    summary: "A prickly father-daughter road movie finds comedy in care, routine, aging, and tiny domestic negotiations.",
    tags: ["Bollywood", "family", "slice-of-life"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#55735f", "#bd3f2f"]
  },
  {
    title: "Masaan",
    year: 2015,
    director: "Neeraj Ghaywan",
    mood: ["sad", "thoughtful"],
    pace: "slow",
    era: "recent",
    rating: "8.1",
    summary: "Intersecting lives in Varanasi reveal shame, caste, grief, and longing with restrained, devastating clarity.",
    tags: ["Hindi indie", "drama", "Varanasi"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#31546b", "#6f604c"]
  },
  {
    title: "Dangal",
    year: 2016,
    director: "Nitesh Tiwari",
    mood: ["inspired", "happy"],
    pace: "balanced",
    era: "recent",
    rating: "8.3",
    summary: "A former wrestler trains his daughters into champions, balancing sports-film uplift with family and social pressure.",
    tags: ["Bollywood", "sports", "family"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#b7791f", "#2d6f73"]
  },
  {
    title: "Andhadhun",
    year: 2018,
    director: "Sriram Raghavan",
    mood: ["thrilled", "weird"],
    pace: "fast",
    era: "recent",
    rating: "8.2",
    summary: "A pianist pretending to be blind gets pulled into murder, lies, and slippery noir games with wicked comic timing.",
    tags: ["Bollywood", "thriller", "black comedy"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#171717", "#bd3f2f"]
  },
  {
    title: "Gully Boy",
    year: 2019,
    director: "Zoya Akhtar",
    mood: ["inspired", "thoughtful"],
    pace: "fast",
    era: "recent",
    rating: "7.9",
    summary: "A young rapper from Dharavi turns anger, class pressure, and ambition into verse, rhythm, and self-belief.",
    tags: ["Bollywood", "music", "Mumbai"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#31546b", "#b7791f"]
  },
  {
    title: "Article 15",
    year: 2019,
    director: "Anubhav Sinha",
    mood: ["thoughtful", "thrilled", "sad"],
    pace: "balanced",
    era: "recent",
    rating: "8.1",
    summary: "A police officer investigates caste violence in a procedural that uses genre tension to confront social horror.",
    tags: ["Bollywood", "crime", "social thriller"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#171717", "#55735f"]
  },
  {
    title: "Thappad",
    year: 2020,
    director: "Anubhav Sinha",
    mood: ["thoughtful", "sad"],
    pace: "slow",
    era: "recent",
    rating: "7.0",
    summary: "A single slap forces a woman to reexamine marriage, dignity, and the compromises people expect her to swallow.",
    tags: ["Bollywood", "drama", "marriage"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#8f2f28", "#55735f"]
  },
  {
    title: "Shershaah",
    year: 2021,
    director: "Vishnuvardhan",
    mood: ["inspired", "sad", "romantic"],
    pace: "balanced",
    era: "recent",
    rating: "8.3",
    summary: "A biographical war drama built around courage, sacrifice, and a romance shadowed by duty.",
    tags: ["Bollywood", "war", "biopic"],
    platforms: ["Prime Video", "Netflix", "JustWatch"],
    colors: ["#55735f", "#31546b"]
  },
  {
    title: "Gangubai Kathiawadi",
    year: 2022,
    director: "Sanjay Leela Bhansali",
    mood: ["inspired", "sad", "thoughtful"],
    pace: "balanced",
    era: "recent",
    rating: "7.8",
    summary: "A woman rises through Mumbai's underworld and politics with theatrical force, pain, and defiant self-invention.",
    tags: ["Bollywood", "biopic", "period drama"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#bd3f2f", "#171717"]
  },
  {
    title: "Jawan",
    year: 2023,
    director: "Atlee",
    mood: ["thrilled", "inspired"],
    pace: "fast",
    era: "recent",
    rating: "6.9",
    summary: "A mass-action spectacle mixes vigilante justice, star charisma, social anger, and breakneck set pieces.",
    tags: ["Bollywood", "action", "masala"],
    platforms: ["Netflix", "Prime Video", "JustWatch"],
    colors: ["#bd3f2f", "#171717"]
  },
  {
    title: "12th Fail",
    year: 2023,
    director: "Vidhu Vinod Chopra",
    mood: ["inspired", "sad", "thoughtful"],
    pace: "balanced",
    era: "recent",
    rating: "8.8",
    summary: "A young man from a poor background prepares for the civil services exam in a moving story about grit and honesty.",
    tags: ["Hindi", "biographical", "education"],
    platforms: ["Netflix", "Disney+", "JustWatch"],
    colors: ["#55735f", "#b7791f"]
  }
];

let activeMood = "happy";

const moodGrid = document.querySelector("#mood-grid");
const movieGrid = document.querySelector("#movie-grid");
const resultCount = document.querySelector("#result-count");
const moodNote = document.querySelector("#mood-note");
const paceFilter = document.querySelector("#pace-filter");
const eraFilter = document.querySelector("#era-filter");
const searchInput = document.querySelector("#search-input");
const surpriseButton = document.querySelector("#surprise-button");

function createMoodButtons() {
  moodGrid.innerHTML = moods
    .map(
      (mood) => `
        <button class="mood-button ${mood.id === activeMood ? "active" : ""}" data-mood="${mood.id}" type="button">
          <span class="mood-name">${mood.name}</span>
          <span class="mood-tone">${mood.tone}</span>
        </button>
      `
    )
    .join("");
}

function platformUrl(platform, title) {
  const encodedTitle = encodeURIComponent(title);
  const encodedPlatform = encodeURIComponent(platform);

  if (platform === "JustWatch") {
    return `https://www.justwatch.com/us/search?q=${encodedTitle}`;
  }

  return `https://www.google.com/search?q=${encodedTitle}+${encodedPlatform}+streaming`;
}

function movieMatches(movie) {
  const pace = paceFilter.value;
  const era = eraFilter.value;
  const query = searchInput.value.trim().toLowerCase();
  const searchable = [movie.title, movie.director, movie.summary, movie.tags.join(" ")]
    .join(" ")
    .toLowerCase();

  return (
    movie.mood.includes(activeMood) &&
    (pace === "all" || movie.pace === pace) &&
    (era === "all" || movie.era === era) &&
    (!query || searchable.includes(query))
  );
}

function renderMovies() {
  const selectedMood = moods.find((mood) => mood.id === activeMood);
  const matches = movies.filter(movieMatches);

  moodNote.textContent = selectedMood.note;
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "film" : "films"}`;

  if (!matches.length) {
    movieGrid.innerHTML = `
      <div class="empty-state">
        <p>No films match that exact mix yet. Try another pace, era, or search term.</p>
      </div>
    `;
    return;
  }

  movieGrid.innerHTML = matches
    .map(
      (movie) => `
        <article class="movie-card">
          <div class="poster" style="--card-a: ${movie.colors[0]}; --card-b: ${movie.colors[1]}">
            <span>${movie.title}</span>
          </div>
          <div class="movie-body">
            <div class="meta-row">
              <span class="movie-year">${movie.year} • ${movie.director}</span>
              <span class="rating">IMDb ${movie.rating}</span>
            </div>
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-summary">${movie.summary}</p>
            <div class="tag-row">
              ${movie.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="platform-row" aria-label="Streaming platform searches">
              ${movie.platforms
                .map(
                  (platform) =>
                    `<a class="platform-link" href="${platformUrl(platform, movie.title)}" target="_blank" rel="noreferrer">${platform}</a>`
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function setMood(moodId) {
  activeMood = moodId;
  createMoodButtons();
  renderMovies();
}

moodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mood]");
  if (!button) return;
  setMood(button.dataset.mood);
});

[paceFilter, eraFilter, searchInput].forEach((control) => {
  control.addEventListener("input", renderMovies);
});

surpriseButton.addEventListener("click", () => {
  const nextMood = moods[Math.floor(Math.random() * moods.length)].id;
  paceFilter.value = "all";
  eraFilter.value = "all";
  searchInput.value = "";
  setMood(nextMood);
});

createMoodButtons();
renderMovies();

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Moodreel service worker registration failed:", error);
    });
  });
}
