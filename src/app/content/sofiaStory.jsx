export const sofia = {
  name: "Sofia",
  // Birthday config for theming; change to the correct date.
  // Format: MM-DD (month-day, zero-padded)
  birthday: "06-04",

  hero: {
    line1: "In loving memory of",
    line2: "A wee life. A huge love. A story that stays."
  },

  // Top gallery shown in the horizontal slider
  // Add your real image paths under /public/photos and update below.
  gallery: [
    { src: "/photos/sofia-1.jpg", alt: "Sofia smiling", caption: "Joyful day" },
    { src: "/photos/sofia-2.jpg", alt: "Sofia playing", caption: "Playtime fun" },
    { src: "/photos/sofia-3.jpg", alt: "Sofia with rainbow", caption: "Rainbow magic" },
    { src: "/photos/sofia-4.jpg", alt: "Sofia with pony", caption: "My Little Pony" }
  ],

  // GISCUS CONFIG (fill these in from the giscus setup page)
  // You’ll get repoId and categoryId as strings.
  // repo format: "YourUser/YourRepo"
  giscus: {
    repo: "YOUR_USER/YOUR_REPO",
    repoId: "YOUR_REPO_ID",
    category: "Guestbook",
    categoryId: "YOUR_CATEGORY_ID",
    mapping: "pathname",
    reactionsEnabled: "1",
    inputPosition: "bottom",
    theme: "transparent_dark"
  },

  chapters: [
    {
      id: "ch1",
      title: "Our beautiful Sofia",
      subtitle: "Early picture(s) before illness.",
      body: [
        "This is Sofia as we first knew her — bright, curious, and absolutely adored.",
        "A few moments that capture her wee spirit, the way she looked at the world, and the way the world looked back."
      ],
      images: [
        { src: "/images/sofia-early-1.jpg", alt: "Sofia smiling (early photo)" },
        { src: "/images/sofia-early-2.jpg", alt: "Sofia (early photo)" }
      ]
    },

    {
      id: "ch2",
      title: "Things she loved",
      subtitle: "Pictures with things that made her happy.",
      body: [
        "Sofia loved the things that made her feel safe and joyful.",
        "Purple days, My Little Pony magic, and that soft feeling like clouds and rainbows."
      ],
      favourites: ["Purple", "My Little Pony", "Clouds", "Rainbows"],
      images: [
        { src: "/images/sofia-pony-1.jpg", alt: "Sofia with a My Little Pony" },
        { src: "/images/sofia-purple-1.jpg", alt: "Sofia with something purple she loved" },
        { src: "/images/sofia-happy-1.jpg", alt: "Sofia doing something that made her happy" }
      ]
    },

    {
      id: "ch3",
      title: "Diagnosis and resilience",
      subtitle: "Bravery in the hardest moments.",
      body: [
        "This chapter is about the strength Sofia showed, and the love that held her up.",
        "We don’t need every detail here — just the truth: she was brave, and she was never alone."
      ],
      callout:
        "If you’re reading this at her resting place: thank you for keeping her close."
    },

    {
      id: "ch4",
      title: "Testimonials from family",
      subtitle: "Words we never want to lose.",
      body: [
        "A few voices from the people who loved her most.",
        "Little memories. Big love."
      ],
      testimonials: [
        { from: "Dad", text: "Write a short message here — one vivid memory, one feeling, one promise." },
        { from: "Mum", text: "A note from Mum — warm, simple, and true." },
        { from: "Family", text: "A line from Gran/Grampa/Auntie/Uncle/etc." }
      ]
    }
  ],

  timeline: [
    { date: "2012", title: "A bright hello", icon: "👶", note: "Sofia arrives with a smile." },
    { date: "2014", title: "First dance", icon: "💃", note: "Twirl, giggle, repeat." },
    { date: "2016", title: "Pony magic", icon: "🦄", note: "My Little Pony everything." },
    { date: "2017", title: "Brave heart", icon: "🦸‍♀️", note: "Strength beyond years." },
    { date: "2018", title: "Forever loved", icon: "💜", note: "A love that stays." }
  ],

  places: {
    center: { lat: 55.8642, lng: -4.2518, zoom: 7 },
    pins: [
      { id: "home", name: "Home", lat: 55.8642, lng: -4.2518, icon: "🏠", note: "Warmth, blankets, stories." },
      { id: "park", name: "Favorite Park", lat: 55.9533, lng: -3.1883, icon: "🎠", note: "Slides and giggles." },
      { id: "hospital", name: "Hospital", lat: 55.8609, lng: -4.2436, icon: "🏥", note: "Brave days, kind nurses." }
    ]
  },

  footer: {
    note: "Made with love.",
    privacy: "Please be kind and respectful when sharing this page."
  }
};

// Story text content
export const sofiaStory = {
  short:
    "Sofia was born in June 2012 and was a happy, loving child. As a toddler, she was diagnosed with a rare neurological condition (OMS), and later with advanced neuroblastoma. Over several years, she endured chemotherapy, major surgery, a bone marrow transplant, and experimental treatments, showing remarkable strength throughout. Despite her illness, she lived joyfully and was deeply loved by her parents, Mario and Gemma. Sofia passed away peacefully at home on 15 December 2018.",
  long:
    `Sofia Jaconelli was born on 4 June 2012, weighing 7lb 5oz. She arrived into a loving, close-knit family and was instantly adored by her parents, Mario and Gemma. From the beginning, she showed a strong personality — curious, confident, and full of life.

Sofia grew up surrounded by family, including her grandparents, aunts, uncles, and extended family who all played an important part in her life. Her early years were filled with birthdays, holidays, nursery, playtime, and laughter. She loved music, stories, and games, and she quickly became known for her expressive nature and quick wit.

In January 2016, when Sofia was just three years old, she was diagnosed with a very rare illness. From that moment on, life changed for her and for her family. Despite the challenges that followed, Sofia showed remarkable resilience. She adapted to hospital life with bravery far beyond her years and continued to let her personality shine through.

Sofia spent time receiving treatment in Glasgow, Aberdeen, and London. Along the way, she formed close bonds with hospital staff, nurses, play assistants, and other children. She made friends everywhere she went and was remembered for her warmth, humour, and determination. Even with IV lines and drip stands, she played games, hid in wardrobes, laughed with nurses, and turned hospital rooms into places of imagination.

She loved Peppa Pig, playing hide and seek, and inventing games that everyone around her had to join in with. She danced whenever music played and became especially excited when she heard her favourite songs. Her teachers remembered her as a joyful presence in class, someone who danced freely and brought happiness to those around her.

When her younger sister Aria was born, Sofia became a proud big sister. She was protective, caring, and deeply bonded with her. She stood up for Aria, included her in everything, and showed a maturity that surprised everyone. The two sisters shared a close and loving relationship filled with play, laughter, and loyalty.

Dance became one of Sofia’s great loves. She attended dance classes whenever she was well enough and looked forward to them each week. In June 2018, she performed on stage at Motherwell Civic Centre, taking part in rehearsals and shows with confidence and joy. She shone on stage, especially during her Elvis performance, and her parents watched with immense pride.

Sofia loved adventures. She visited Alton Towers and stayed in the CBeebies Land Hotel. She attended concerts by Katy Perry and Britney Spears. She walked onto the pitch at Celtic Park as part of a charity match guard of honour — a moment that brought her great happiness and her dad unforgettable pride.

During her illness, many people came together to support Sofia and her family. Fundraising events, sponsored walks, and challenges raised money and awareness, but just as importantly, they brought kindness, encouragement, and love. Sofia’s journey touched people far beyond those who knew her personally.

At home, Sofia treasured simple joys — playing in the garden, bouncing on the trampoline, singing, dancing, and spending time with her sister and friends. She loved her Blanky, which never left her side, and her iPad, which connected her to music, videos, animals, and the wider world. She loved animals and delighted in visits from therapy pets.

Sofia shared a special bond with her grandparents, who spoiled her in all the best ways. Time at gran’s house was full of freedom, laughter, and fun — exactly as it should be.

Sofia passed away peacefully with her parents beside her. Though her life was short, it was rich with love, personality, strength, and joy. She was determined, smart, feisty, affectionate, and unforgettable. She left behind a legacy of love and a reminder of how powerful a small life can be.

Sofia continues to live on in photographs, videos, memories, and in the hearts of everyone who loved her.`
};

// Easy testing flags for Birthday Mode
// If true, forces Birthday Mode regardless of date (or use ?birthday=1 in the URL)
export const FORCE_BIRTHDAY = false;
