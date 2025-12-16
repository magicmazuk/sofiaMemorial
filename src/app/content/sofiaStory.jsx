export const sofia = {
  name: "Sofia",

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
    "[Story will be here about sofia.]"
};
