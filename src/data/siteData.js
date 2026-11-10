export const assets = {
  clinicHero: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/Untitled_Instagram_Post_45.png?v=1793619383&width=1600",
  academyHero: "https://tbigzv-qr.myshopify.com/cdn/shop/files/BEAUTY_ACADEMY_-_175.png?v=1780574575&width=1600",
  clinicPortrait: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/BEAUTY_ACADEMY_-_175.jpg?v=1793619200&width=1000",
  clinicEditorial: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/ECF6DBBA-7531-4EC5-B7AD-EA04DA503619.png?v=1774525471&width=1600",
  clinicDetailOne: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/B8781742-3A4B-488D-8880-C520ED40227C.png?v=1774604460&width=1400",
  clinicDetailTwo: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/Copy_of_Untitled_Design_-_2.png?v=1774525209&width=1400",
  clinicDetailThree: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/Copy_of_Untitled_Design_4b526241-784a-4210-88c1-0380522905c5.png?v=1774515216&width=1400",
  clinicDetailFour: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/58AAB994-B2FE-4A0A-A5E3-82140031BA53.png?v=1778450374&width=1400",
  logo: "https://www.organiklaserandbeauty.com.au/cdn/shop/files/ORGANIK_LOGOS.png?height=100&v=1792881410",
  clinicGallery: [
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_8167.jpg?v=1775285541&width=800",
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_8168.jpg?v=1775285556&width=800",
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_0904.jpg?v=1781666946&width=800",
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_8167.jpg?v=1775285541&width=800",
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_8168.jpg?v=1775285556&width=800",
    "https://www.organiklaserandbeauty.com.au/cdn/shop/files/IMG_0904.jpg?v=1781666946&width=800"
  ],
  academyEditorial: "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8163.jpg?v=1775282631&width=1400",
  academyDetailOne: "https://tbigzv-qr.myshopify.com/cdn/shop/files/2743677E-9862-4A4E-8444-9D81ACFE6A1B.png?v=1772575435&width=1400",
  academyDetailTwo: "https://tbigzv-qr.myshopify.com/cdn/shop/files/B462B10A-83DD-446C-A129-6023FAC9F3F8.png?v=1772784732&width=1400",
  academyGallery: [
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8175.jpg?v=1775296990&width=800",
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8176.jpg?v=1775297004&width=800",
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8177.jpg?v=1775297018&width=800",
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8179.jpg?v=1775297050&width=800",
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8180.jpg?v=1775297077&width=800",
    "https://tbigzv-qr.myshopify.com/cdn/shop/files/IMG_8178.jpg?v=1775297092&width=800"
  ]
};

export const siteConfig = {
  name: "Organik",
  address: "Shop 10, 2563 Gold Coast Highway, Mermaid Beach QLD 4218",
  phone: "07 5538 0665",
  phoneHref: "tel:+61755380665",
  mobile: "0487 204 833",
  mobileHref: "tel:+61487204833",
  whatsappHref: "https://wa.me/61487204833",
  treatmentsEmail: "organiklaserandbeauty@gmail.com",
  academyEmail: "organikbeautyacademy@gmail.com",
  licence: "Racheal Jean Morris, U0110561122",
  instagramTreatments: "https://www.instagram.com/organiklaserandbeauty/",
  instagramAcademy: "https://www.instagram.com/organikbeautyacademy/"
};

export const treatmentsHours = [
  ["Monday", "By appointment only"],
  ["Tuesday – Thursday", "9am – 3pm"],
  ["Friday", "9am – 2pm"],
  ["Saturday – Sunday", "Closed"]
];

export const academyHours = [
  ["Monday – Friday", "9am – 2pm"],
  ["Saturday", "By request only"],
  ["Sunday", "Closed"]
];

export const treatmentCategories = [
  { id: "all", label: "All treatments" },
  { id: "lash-brow", label: "Lash & Brow" },
  { id: "cosmetic-tattoo", label: "Cosmetic Tattoo" },
  { id: "facials-skin", label: "Facials & Skin" },
  { id: "advanced", label: "Advanced" }
];

export const treatments = [
  {
    slug: "eyelash-extensions",
    title: "Eyelash Extensions",
    category: "lash-brow",
    categoryLabel: "Lash & Brow",
    description: "A considered lash set, tailored to your natural lashes and the finish you love.",
    image: assets.clinicDetailOne,
    prices: "From $120",
    duration: "1.5 – 2 hrs"
  },
  {
    slug: "uv-led-eyelash-extensions",
    title: "UV/LED Eyelash Extensions",
    category: "lash-brow",
    categoryLabel: "Lash & Brow",
    description: "A modern lash extension service with a carefully selected UV/LED application approach.",
    image: assets.clinicDetailTwo,
    prices: "From $140",
    duration: "1.5 – 2 hrs"
  },
  {
    slug: "lash-brows",
    title: "Lash & Brows",
    category: "lash-brow",
    categoryLabel: "Lash & Brow",
    description: "Thoughtful shaping and definition for a polished, easy-to-wear everyday look.",
    image: assets.clinicDetailThree,
    prices: "From $35",
    duration: "30 – 45 mins"
  },
  {
    slug: "cosmetic-tattoo",
    title: "Cosmetic Tattoo",
    category: "cosmetic-tattoo",
    categoryLabel: "Cosmetic Tattoo",
    description: "Soft, personalised definition for brows, lips and eyeliner.",
    image: assets.clinicEditorial,
    prices: "From $199",
    duration: "1 – 2 hrs"
  },
  {
    slug: "facials",
    title: "Facials",
    category: "facials-skin",
    categoryLabel: "Facials & Skin",
    description: "A personalised facial experience shaped around your skin and your comfort.",
    image: assets.clinicDetailFour,
    prices: "From $99",
    duration: "45 – 60 mins"
  },
  {
    slug: "microdermabrasion-hydro-facials",
    title: "Microdermabrasion / Hydro Facials",
    category: "facials-skin",
    categoryLabel: "Facials & Skin",
    description: "A refreshing skin appointment with a tailored, consult-first approach.",
    image: assets.clinicDetailTwo,
    prices: "From $120",
    duration: "50 mins"
  },
  {
    slug: "plasma-fibroblast",
    title: "Plasma Fibroblast",
    category: "advanced",
    categoryLabel: "Advanced",
    description: "A precision cosmetic service with a personal consultation and clear aftercare.",
    image: assets.clinicPortrait,
    prices: "Special offers from $180",
    duration: "1 – 2 hrs"
  },
  {
    slug: "rf-microneedling",
    title: "RF Microneedling",
    category: "advanced",
    categoryLabel: "Advanced",
    description: "A considered advanced skin service, discussed in detail before your appointment.",
    image: assets.clinicDetailFour,
    prices: "From $250",
    duration: "60 mins"
  },
  {
    slug: "skin-needling",
    title: "Skin Needling",
    category: "advanced",
    categoryLabel: "Advanced",
    description: "A personalised skin appointment with time to talk through your goals and suitability.",
    image: assets.clinicDetailThree,
    prices: "From $180",
    duration: "50 mins"
  },
  {
    slug: "salmon-dna-facials",
    title: "Salmon DNA Facials",
    category: "facials-skin",
    categoryLabel: "Facials & Skin",
    description: "A focused facial service with product and treatment details discussed at consultation.",
    image: assets.clinicDetailOne,
    prices: "From $220",
    duration: "60 mins"
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    category: "facials-skin",
    categoryLabel: "Facials & Skin",
    description: "A gentle, appointment-only skin service tailored to your preferences.",
    image: assets.clinicDetailTwo,
    prices: "From $95",
    duration: "45 mins"
  },
  {
    slug: "bb-glow",
    title: "BB Glow",
    category: "facials-skin",
    categoryLabel: "Facials & Skin",
    description: "A carefully personalised skin appointment with an individual suitability conversation.",
    image: assets.clinicDetailFour,
    prices: "From $150",
    duration: "60 mins"
  }
];

export const courses = [
  {
    slug: "1-day-eyelash-extension-course",
    title: "1 Day Eyelash Extension Course",
    category: "Lash & Brow",
    price: "$995",
    duration: "1 day",
    summary: "For experienced technicians ready to refine their technique and build confidence.",
    image: assets.academyDetailOne,
    level: "Experienced technicians",
    learn: [
      "Refine your application technique",
      "Review placement and isolation",
      "Practise on a live model under supervision"
    ]
  },
  {
    slug: "uv-led-eyelash-extension-course",
    title: "UV/LED Eyelash Extension Course",
    category: "Lash & Brow",
    price: "Enquire for pricing",
    duration: "Enquire for details",
    summary: "Explore UV/LED application, adhesive curing, placement, isolation and aftercare.",
    image: assets.academyDetailTwo,
    level: "Course details provided on enquiry",
    learn: [
      "Application and adhesive curing",
      "Placement, isolation and retention",
      "Safety, troubleshooting and removal"
    ]
  },
  {
    slug: "plasma-fibroblast-course",
    title: "Plasma Fibroblast Course",
    category: "Dermal",
    price: "Enquire for pricing",
    duration: "Enquire for details",
    summary: "Practical, supervised learning with course suitability discussed before enrolment.",
    image: assets.academyEditorial,
    level: "Course entry details provided on enquiry",
    learn: [
      "Understand the course workflow",
      "Practise with trainer guidance",
      "Review client communication and aftercare"
    ]
  },
  {
    slug: "skin-needling-course",
    title: "Skin Needling Course",
    category: "Dermal",
    price: "Enquire for pricing",
    duration: "Enquire for details",
    summary: "A practical introduction to a professional skin service in a supportive setting.",
    image: assets.academyDetailOne,
    level: "Course entry details provided on enquiry",
    learn: [
      "Explore the service workflow",
      "Practise with trainer guidance",
      "Discuss consultation and aftercare"
    ]
  },
  {
    slug: "microblading-course",
    title: "Microblading Course",
    category: "Cosmetic Tattoo",
    price: "Enquire for pricing",
    duration: "Enquire for details",
    summary: "Learn the foundations of brow mapping, design and supervised practice.",
    image: assets.academyDetailTwo,
    level: "Course entry details provided on enquiry",
    learn: [
      "Explore brow design and mapping",
      "Practise key techniques with guidance",
      "Discuss client care and aftercare"
    ]
  },
  {
    slug: "2-day-beginner-eyelash-extension-course",
    title: "2 Day Beginner Eyelash Extension Course",
    category: "Beauty",
    price: "$1,495",
    duration: "2 days",
    summary: "A supportive foundation for new students beginning their lash journey.",
    image: assets.academyEditorial,
    level: "Beginner",
    learn: [
      "Build a foundation in lash application",
      "Practise placement and isolation",
      "Work with live models under supervision"
    ]
  },
  {
    slug: "3-day-beginner-eyelash-extension-course",
    title: "3 Day Beginner Eyelash Extension Course",
    category: "Beauty",
    price: "$1,695",
    duration: "3 days",
    summary: "A longer beginner pathway with additional time to practise and build confidence.",
    image: assets.academyDetailOne,
    level: "Beginner",
    learn: [
      "Develop core lash application skills",
      "Practise technique over three training days",
      "Work with live models under supervision"
    ]
  },
  {
    slug: "laser-courses",
    title: "Laser Courses",
    category: "Laser Courses",
    price: "Coming 2027",
    duration: "Coming 2027",
    summary: "Laser training is planned for 2027. Register your interest for future updates.",
    image: assets.academyHero,
    level: "Coming 2027",
    learn: [
      "Planned professional training",
      "Further course information to follow",
      "Register interest through the enquiry form"
    ],
    upcoming: true
  }
];

export const beforeAfterComparisons = [
  {
    division: "treatments",
    title: "Brow & lash refresh",
    category: "Lash & Brow",
    before: assets.clinicDetailOne,
    after: assets.clinicDetailTwo
  },
  {
    division: "treatments",
    title: "Cosmetic tattoo — lips",
    category: "Cosmetic Tattoo",
    before: assets.clinicDetailThree,
    after: assets.clinicEditorial
  },
  {
    division: "treatments",
    title: "Plasma Fibroblast",
    category: "Advanced",
    before: assets.clinicGallery[0],
    after: assets.clinicGallery[1]
  },
  {
    division: "treatments",
    title: "Skin needling",
    category: "Facials & Skin",
    before: assets.clinicDetailFour,
    after: assets.clinicGallery[2]
  },
  {
    division: "academy",
    title: "Student lash set",
    category: "Eyelash Extension Course",
    before: assets.academyGallery[0],
    after: assets.academyGallery[1]
  },
  {
    division: "academy",
    title: "Student brow mapping",
    category: "Microblading Course",
    before: assets.academyGallery[2],
    after: assets.academyGallery[3]
  },
  {
    division: "academy",
    title: "Live model practice",
    category: "Plasma Fibroblast Course",
    before: assets.academyGallery[4],
    after: assets.academyGallery[5]
  },
  {
    division: "academy",
    title: "Student skin needling",
    category: "Skin Needling Course",
    before: assets.academyDetailOne,
    after: assets.academyDetailTwo
  }
];

export const galleryPhotos = [
  ...assets.clinicGallery.slice(0, 3).map((src, i) => ({
    division: "treatments",
    src,
    alt: `Organik Laser & Beauty treatment image ${i + 1}`
  })),
  { division: "treatments", src: assets.clinicPortrait, alt: "Organik Laser & Beauty clinic image" },
  { division: "treatments", src: assets.clinicDetailFour, alt: "Organik Laser & Beauty skin treatment image" },
  { division: "treatments", src: assets.clinicEditorial, alt: "Organik Laser & Beauty cosmetic tattoo image" },
  ...assets.academyGallery.map((src, i) => ({
    division: "academy",
    src,
    alt: `Organik Beauty Academy student work image ${i + 1}`
  }))
];

export const reviews = [
  {
    name: "Jennifer",
    when: "Google Review",
    service: "Brows & Lashes",
    quote: "Thank you Racheal! If I could give more than 5 stars I would — professional, kind, friendly and was on time. I am so happy with my eyebrows and eyelashes and will continue to come here from now on x."
  },
  {
    name: "Josepha Troncoso",
    when: "Google Review",
    service: "Skin Needling",
    quote: "I just had my first appointment at Organik Laser for skin needling and OMG Racheal is sooo sweet and so good at what she does. I have had three skin needling sessions in the past at different clinics but never one like this. Five stars for Racheal and the clinic!"
  },
  {
    name: "Danielle Wetherspoon",
    when: "Google Review",
    service: "Deluxe Classic Lashes",
    quote: "I have had the Deluxe Classic eyelashes on two separate occasions. The quality was outstanding, lasting me a fair few months — and I am very rough with my eyes. Very impressive service."
  },
  {
    name: "Jackie Windsor",
    when: "Google Review",
    service: "Plasma Fibroblast",
    quote: "RACHAEL was amazing, very attentive and made sure I was comfortable during the whole fibroblast treatment. So thrilled with the outcome and the results are incredible!"
  },
  {
    name: "Selda Simmons",
    when: "Google Review",
    service: "Skin & Beauty Treatment",
    quote: "Racheal was so professional with great customer service. The salon is stunning. I felt so comfortable and relaxed. I am so happy with the results, it is amazing. I really recommend this place."
  },
  {
    name: "James Cavanugh",
    when: "Google Review",
    service: "Skin Consultation & Care",
    quote: "For someone who hasn't been to a beautician before, Organik and more specifically Rach are amazing. She really takes her time to ensure you are getting exactly what result you are after and is great value. Highly recommend."
  }
];

export const cosmeticTattooPrices = [
  { group: "Lip Tattoo", service: "Lip Blush", price: "$399", duration: "2 hrs" },
  { group: "Lip Tattoo", service: "Ombre Lips", price: "$299", duration: "2 hrs" },
  { group: "Lip Tattoo", service: "Annual touch up", price: "$249", duration: "" },
  { group: "Brow Tattoo", service: "Ombre / Powder Brows", price: "$449", duration: "2 hrs" },
  { group: "Brow Tattoo", service: "Nano Brows", price: "$449", duration: "2 hrs" },
  { group: "Brow Tattoo", service: "Combination Brows", price: "$499", duration: "2 hrs" },
  { group: "Brow Tattoo", service: "Microblading / Hairstrokes", price: "$449", duration: "2 hrs" },
  { group: "Brow Tattoo", service: "Annual touch up", price: "$249", duration: "" },
  { group: "Eyeliner Tattoo", service: "Lash Enhancement", price: "$199", duration: "" },
  { group: "Eyeliner Tattoo", service: "Bottom Eyeliner", price: "$99", duration: "1 hr" },
  { group: "Eyeliner Tattoo", service: "Top & Bottom", price: "$249", duration: "" },
  { group: "Eyeliner Tattoo", service: "Annual touch up", price: "$99", duration: "" },
  { group: "Packages", service: "Lip & Brow", price: "$699", duration: "4 hrs" },
  { group: "Packages", service: "Lip & Lash Enhancement", price: "$449", duration: "2 hrs" },
  { group: "Packages", service: "Lips + Brows + Eyeliner", price: "$799", duration: "5 hrs" }
];

export const plasmaOffers = [
  { title: "Full Face Lift", detail: "Includes upper eyelids", oldPrice: "$995", price: "$430" },
  { title: "Half Face Lift", detail: "Focused half-face appointment", oldPrice: "$595", price: "$270" },
  { title: "Upper Blepharoplasty", detail: "Upper eyelid area", oldPrice: "$395", price: "$180" },
  { title: "Full Neck Lift", detail: "Includes turkey neck", oldPrice: "$695", price: "$360" },
  { title: "Half Neck Lift", detail: "Focused half-neck appointment", oldPrice: "$495", price: "$230" }
];

export const clinicPaymentTerms = [
  { title: "$5 off with PayID", copy: "Pay by PayID, bank transfer or cash and receive a $5 discount at checkout. EFTPOS is still available in the clinic." },
  { title: "Afterpay & Zip", copy: "Spread the cost of your treatment with Afterpay or Zip payment options." },
  { title: "No price increases", copy: "Service prices are not increasing as a result of the October 2026 card surcharge changes." }
];

export const academyPaymentTerms = [
  { title: "20% deposit", copy: "A 20% deposit secures your course date. The full balance is due two weeks before your course starts." },
  { title: "Payment plans", copy: "Afterpay, Zip and custom academy payment plans are available, with minimum weekly repayments of $250." },
  { title: "Study with a friend", copy: "Enrol together and you both receive 10% off the course — that’s 20% saved between the two of you." }
];

export const shopProducts = [
  { name: "Lash Aftercare Brush", category: "Aftercare", image: assets.academyDetailOne, tag: "Sample product" },
  { name: "Beauty Essentials Set", category: "Studio edit", image: assets.academyDetailTwo, tag: "Sample product" },
  { name: "Organik Gift Card", category: "A thoughtful gift", image: assets.clinicEditorial, tag: "Sample product" }
];
