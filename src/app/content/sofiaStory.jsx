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
    "Sofia’s parents, Mario and Gemma, were married in 2010. They chose not to have children right away, but when the time felt right and they began trying, the news came quickly. Within a few months, they learned that Sofia was on the way. She was born in June 2012, and from the very beginning, everything felt perfect. She was a beautiful, happy baby — content, gentle, and deeply loved.\n\nAs Sofia grew, small signs began to appear that something wasn’t quite right. She could be irritable and very particular about what she liked. At times, she didn’t want to walk and preferred to sit or be carried. Like many parents, Mario and Gemma assumed she was simply tired or stubborn and gently encouraged her to keep going.\n\nOne day, while Mario was feeding her, he noticed her eyes flickering rapidly back and forth. It was subtle at first, but once seen, impossible to ignore. This movement was later identified as nystagmus, and it was accompanied by dizziness and unsteadiness — a condition known as ataxia, which caused Sofia to wobble and fall.\n\nAfter hospital visits and further tests, Sofia was diagnosed with Opsoclonus Myoclonus Syndrome (OMS), a rare autoimmune neurological condition. Mario and Gemma were told that OMS is usually triggered either by a childhood virus or by an underlying cancer called neuroblastoma. Sofia underwent scans and an MRI to rule out cancer. When the results came back clear, there was overwhelming relief. It appeared she had the viral form of the condition, and although a long journey lay ahead, there was hope.\n\nLife settled into a difficult rhythm. Every few months, Sofia experienced OMS flare-ups that required steroid treatment. The medication worked, but it was harsh and distressing. Giving it to her was a daily struggle, and the side effects left her unhappy and uncomfortable. Despite the toll it took, her parents carried on, doing everything they could. Over time, the flare-ups became less frequent, and life felt more manageable.\n\nThen another change emerged. Sofia began complaining of back pain. At first, it was occasional, and doctors reassured Mario and Gemma that it was nothing to worry about. But one day, Mario noticed a swelling in her back that didn’t feel right. They returned to hospital, where an ultrasound was arranged “just to be sure.”\n\nThat scan changed everything.\n\nThe following appointment was quiet and heavy with tension. Several doctors entered the room carrying folders and leaflets. Before anything was said, Mario and Gemma knew something was wrong. Sofia was diagnosed with advanced neuroblastoma. Multiple tumours were found in her abdomen — near her kidney, along her spine, and in other areas.\n\nThey were told the disease was rare and aggressive, with devastating survival odds.\n\nSofia began intensive chemotherapy. Over the following years, she endured multiple rounds of treatment, major surgery, and a bone marrow transplant — a procedure designed to wipe out the disease and rebuild the body from scratch. During surgery to remove a tumour near her kidney, doctors discovered the cancer had spread into the kidney itself. To give her the best possible chance, the kidney was removed entirely. Mario and Gemma were told that Sofia could live a full life with one kidney.\n\nAt one point, the treatment worked. Scans showed no active cancer. The “hot spots” that had appeared in her neck, shoulder, and knee disappeared. For a brief moment, hope returned. Plans were made to remove the remaining tumours, and it felt possible that the worst was behind them.\n\nBut only a few months later, the cancer returned.\n\nSofia entered further treatment, including experimental therapies and clinical trials, which required travel to London. During one trial in Glasgow, she suffered a severe reaction. Her remaining kidney began to fail, and she was admitted to intensive care. For several days, it was uncertain whether she would survive.\n\nShe did.\n\nAgain and again, Sofia showed strength far beyond her years. Even while living with stage-four cancer, she remained joyful. She laughed, played, and lived fully in the moments she had. One of the happiest times was a visit to CBeebies Land, where she was radiant — a wee star, full of excitement and happiness.\n\nIn the final months, the disease took more from her. Eventually, Sofia became bedridden. She was brought home, where she was surrounded by love and familiarity. Her final days were quiet and peaceful.\n\nSofia passed away on 15 December 2018.\n\nThis website exists so her story is remembered — not only for how she died, but for how she lived: with bravery, joy, and extraordinary strength, deeply loved by her parents, Mario and Gemma."
};
