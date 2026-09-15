// All dental services — unique bilingual content per treatment.
// Each service: { slug, category, icon, name, tagline, what, benefits[], faqs[], related[] }

export const services = [
  // ---------- General & Preventive ----------
  {
    slug: "check-ups",
    category: "general-preventive",
    icon: "Stethoscope",
    name: { en: "Dental Check-ups", mr: "दंत तपासणी" },
    tagline: { en: "Catch problems early", mr: "त्रास लवकर ओळखा" },
    what: {
      en: "A routine check-up lets us spot decay, gum issues and wear before they cause pain. We examine your teeth, gums and bite, and advise the right next steps. Regular visits keep small problems from becoming big ones.",
      mr: "नियती तपासणीत आम्ही दात, हिरड्या व चघण्याची झीज वेदना होण्याआधीच ओळखतो. दात, हिरड्या व चघण्याची तपासणी करून योग्य पुढील पायऱ्या सांगतो. नियमित भेट लहान त्रासांना मोठे होण्यापासून वाचवते.",
    },
    benefits: [
      { en: "Early detection of decay and gum disease", mr: "दात व हिरड्यांच्या त्रासाची लवकर ओळख" },
      { en: "Personalised oral-care guidance", mr: "वैयक्तिक दंत स्वच्छता सल्ला" },
      { en: "A clear, no-pressure plan for any treatment", mr: "कोणताही उपचार दबदब्याशिवाय स्पष्ट योजना" },
    ],
    faqs: [
      { q: { en: "How often should I come?", mr: "किती वेळा यावे?" }, a: { en: "Every six months for most people.", mr: "बहुतेकांना सहा महिन्यांतून एक." } },
      { q: { en: "Is the check-up painful?", mr: "तपासणी वेदनादायक आहे का?" }, a: { en: "No, it's a gentle visual exam.", mr: "नाही, ती कोमल दृश्य तपासणी आहे." } },
    ],
    related: ["teeth-cleaning", "x-ray", "fillings-sealants"],
  },
  {
    slug: "teeth-cleaning",
    category: "general-preventive",
    icon: "Sparkles",
    name: { en: "Teeth Cleaning", mr: "दात स्वच्छता" },
    tagline: { en: "A fresh, smooth smile", mr: "ताजे, चमकदार हसणे" },
    what: {
      en: "Professional cleaning removes plaque and tartar that brushing can't reach, leaving teeth smooth and gums healthy. It also polishes away surface stains for a brighter smile. We recommend it as part of your routine care.",
      mr: "व्यावसायिक स्वच्छतेत ब्रशने पोहोचू न शकणारा प्लाक व टार्टार काढला जातो; दात गुळगुळीत व हिरड्या निरोगी होतात. ती पृष्ठभागाचे डागही पुसून टाकते. आम्ही नियमित सेवेचा भाग म्हणून तिची शिफारस करतो.",
    },
    benefits: [
      { en: "Removes hardened tartar", mr: "साचलेला टार्टार काढते" },
      { en: "Reduces gum inflammation and bad breath", mr: "हिरड्यांची सूज व दुर्गंध कमी करते" },
      { en: "Polishes away surface stains", mr: "पृष्ठभागाचे डाग पुसून टाकते" },
    ],
    faqs: [
      { q: { en: "Does cleaning hurt?", mr: "स्वच्छता दुखते का?" }, a: { en: "It's comfortable; we pace it to you.", mr: "ती आरामदायी आहे; आम्ही तुमच्या आरामानुसार करतो." } },
      { q: { en: "How often is it needed?", mr: "किती वेळा लागते?" }, a: { en: "Usually every six months.", mr: "साधारण सहा महिन्यांतून." } },
    ],
    related: ["ultrasonic-cleaning", "check-ups", "fluoride-bleaching"],
  },
  {
    slug: "ultrasonic-cleaning",
    category: "general-preventive",
    icon: "Waves",
    name: { en: "Ultrasonic Teeth Cleaning", mr: "अल्ट्रासोनिक दात स्वच्छता" },
    tagline: { en: "Gentle, deep tartar removal", mr: "कोमल, खोल टार्टार काढणे" },
    what: {
      en: "Ultrasonic cleaning uses soft vibrations and a cooling water mist to break up stubborn tartar, even below the gumline. It's faster and gentler than hand scaling, and reaches areas manual tools miss. Ideal for heavier buildup or gum inflammation.",
      mr: "अल्ट्रासोनिक स्वच्छता कोमल कंपन व थंड पाण्याच्या धारेने जड टार्टार, हिरड्याखालीपर्यंत, तोडते. हाताने करण्यापेक्षा ती लवकर व कोमल, आणि हस्तसाधनांना न पोहोचणाऱ्या भागांपर्यंत पोहोचते. जास्त टार्टार किंवा हिरड्यांच्या सुजीसाठी आदर्श.",
    },
    benefits: [
      { en: "Reaches below the gumline", mr: "हिरड्याखालीपर्यंत पोहोचते" },
      { en: "Less scraping sensation than hand tools", mr: "हाताच्या साधनांपेक्षा कमी खरचटणे" },
      { en: "Flushes out bacteria from pockets", mr: "पॉकेटमधून जंतू धुऊन काढते" },
    ],
    faqs: [
      { q: { en: "Is the vibration uncomfortable?", mr: "कंपन अस्वस्थ करतो का?" }, a: { en: "It's gentle and cooled with water.", mr: "तो कोमल असून पाण्याने थंड केला जातो." } },
      { q: { en: "Will my teeth feel sensitive after?", mr: "नंतर दात संवेदनशील होतील का?" }, a: { en: "Mild sensitivity may last a day or two.", mr: "हलकी संवेदनशीलता एक-दोन दिवस राहू शके." } },
    ],
    related: ["teeth-cleaning", "flap-surgery", "check-ups"],
  },
  {
    slug: "x-ray",
    category: "general-preventive",
    icon: "Scan",
    name: { en: "Dental X-Ray", mr: "दंत एक्स-रे" },
    tagline: { en: "See what the eye can't", mr: "डोळ्यांना दिसत नाही ते पहा" },
    what: {
      en: "X-rays reveal decay between teeth, bone loss, infections and impacted teeth that a visual exam misses. We use them to plan fillings, root canals, extractions and implants accurately. Modern digital X-rays use very low radiation.",
      mr: "एक्स-रे दातांमधील दुरुस्ती, हाडांची झीज, इन्फेक्शन व आत दाबलेले दात दाखवतात, जे दृश्य तपासणीत दिसत नाही. आम्ही फिलिंग, रूट कॅनाल, दात काढणे व प्रत्यारोप अचूक ठरवण्यासाठी त्यांचा वापर करतो. आधुनिक डिजिटल एक्स-रे अतिशय कमी किरण वापरतात.",
    },
    benefits: [
      { en: "Detects hidden decay and infections", mr: "लपलेली दुरुस्ती व इन्फेक्शन ओळखते" },
      { en: "Guides precise treatment planning", mr: "अचूक उपचार नियोजनाला मार्गदर्शन करते" },
      { en: "Low-radiation digital imaging", mr: "कमी किरणांचे डिजिटल इमेजिंग" },
    ],
    faqs: [
      { q: { en: "Are X-rays safe?", mr: "एक्स-रे सुरक्षित आहेत का?" }, a: { en: "Yes, digital X-rays use minimal radiation.", mr: "होय, डिजिटल एक्स-रे नगण्य किरण वापरतात." } },
      { q: { en: "When is one needed?", mr: "कधी लागते?" }, a: { en: "For new patients, pain, or before major treatment.", mr: "नवीन रुग्ण, वेदना किंवा मोठ्या उपचाराआधी." } },
    ],
    related: ["check-ups", "root-canal", "wisdom-tooth"],
  },
  {
    slug: "fillings-sealants",
    category: "general-preventive",
    icon: "Shield",
    name: { en: "Fillings & Sealants", mr: "फिलिंग्स व सीलंट्स" },
    tagline: { en: "Stop decay in its tracks", mr: "दुरुस्ती थांबवा" },
    what: {
      en: "Fillings repair teeth damaged by decay, restoring their shape and function. Sealants are thin protective coatings applied to the grooves of back teeth to prevent decay from starting. Both are quick, comfortable and preserve natural tooth structure.",
      mr: "फिलिंग्स दुरुस्तीने खराब झालेले दात बरे करून त्यांचा आकार व कार्य परत आणतात. सीलंट्स हे मागच्या दातांच्या खाचांवर लावलेले पातळ संरक्षक आवरण आहे, जे दुरुस्ती सुरू होण्यापासून थांबवतात. दोन्ही लवकर, आरामदायी आणि नैसर्गिक दात राखतात.",
    },
    benefits: [
      { en: "Restores chewing function and shape", mr: "चघण्याचे कार्य व आकार परत आणते" },
      { en: "Tooth-coloured materials for a natural look", mr: "नैसर्गिक दिसण्यासाठी दाताच्या रंगाचे साहित्य" },
      { en: "Sealants prevent future decay", mr: "सीलंट्स भविष्यातील दुरुस्ती टाळतात" },
    ],
    faqs: [
      { q: { en: "Which filling material is used?", mr: "कोणते फिलिंग साहित्य वापरता?" }, a: { en: "Tooth-coloured composites for most cases.", mr: "बहुतेक बाबतीत दाताच्या रंगाचे कंपोझिट." } },
      { q: { en: "Are sealants only for children?", mr: "सीलंट्स फक्त मुलांसाठी आहेत का?" }, a: { en: "Common in children, useful for adults too.", mr: "मुलांत सामान्य, प्रौढांनाही उपयुक्त." } },
    ],
    related: ["check-ups", "composite-light-curing", "x-ray"],
  },
  {
    slug: "fluoride-bleaching",
    category: "general-preventive",
    icon: "Sun",
    name: { en: "Fluoride & Dental Bleaching", mr: "फ्लोराइड व दंत ब्लीचिंग" },
    tagline: { en: "Strengthen & brighten", mr: "मजबूत करा व चमकवा" },
    what: {
      en: "Fluoride treatments remineralise and strengthen enamel, making teeth more resistant to decay. Dental bleaching lightens the natural tooth shade for a brighter smile. Together they protect and refresh your teeth safely.",
      mr: "फ्लोराइड उपचार एनॅमेल पुन्हा खनिजीकृत करून मजबूत करतात, दात दुरुस्तीला अधिक प्रतिकार करतात. दंत ब्लीचिंग नैसर्गिक दाताचा रंग उजळ करून तेजस्वी हसणे देते. एकत्र ते दात सुरक्षित राखून ताजारता देतात.",
    },
    benefits: [
      { en: "Strengthens enamel against decay", mr: "दुरुस्तीविरुद्ध एनॅमेल मजबूत करते" },
      { en: "Brightens natural tooth shade", mr: "नैसर्गिक दाताचा रंग उजळ करते" },
      { en: "Safe, in-clinic application", mr: "सुरक्षित, दवाखान्यातच उपयोजन" },
    ],
    faqs: [
      { q: { en: "Is bleaching safe for enamel?", mr: "ब्लीचिंग एनॅमेलसाठी सुरक्षित आहे का?" }, a: { en: "Yes, when done professionally.", mr: "होय, व्यावसायिक केल्यास." } },
      { q: { en: "How long does whitening last?", mr: "उजळपणा किती टिकतो?" }, a: { en: "Months to a year with good care.", mr: "चांगल्या काळजीने काही महिने ते एक वर्ष." } },
    ],
    related: ["teeth-whitening", "fillings-sealants", "teeth-cleaning"],
  },

  // ---------- Cosmetic ----------
  {
    slug: "teeth-whitening",
    category: "cosmetic",
    icon: "Sun",
    name: { en: "Teeth Whitening", mr: "दात फुगवणे (व्हायटनिंग)" },
    tagline: { en: "A brighter, confident smile", mr: "उजळ, आत्मविश्वासाचे हसणे" },
    what: {
      en: "Professional teeth whitening safely lifts years of staining from coffee, tea, tobacco and ageing. In-clinic whitening delivers visible results in a single visit, while take-home kits let you brighten gradually. The result is a noticeably fresher smile.",
      mr: "व्यावसायिक दात फुगवण्याने कॉफी, चहा, तंबाखू व वयाच्या डागांची वर्षे सुरक्षितपणे पुसली जातात. दवाखान्यातील व्हायटनिंग एकाच भेटीत दिसण्याजोगे निकाल देते, तर घरी नेण्याच्या किटमध्ये तुम्ही हळूहळू उजळ करू शकता. निकाल लक्षणीय ताजारता असलेले हसणे.",
    },
    benefits: [
      { en: "Visible brightening in one visit", mr: "एकाच भेटीत दिसण्याजोगे उजळपणा" },
      { en: "Safe for enamel when done professionally", mr: "व्यावसायिक केल्यास एनॅमेलसाठी सुरक्षित" },
      { en: "Customised to your natural shade", mr: "तुमच्या नैसर्गिक रंगानुसार" },
    ],
    faqs: [
      { q: { en: "Will it cause sensitivity?", mr: "संवेदनशीलता होईल का?" }, a: { en: "Mild, temporary sensitivity can occur.", mr: "हलकी, तात्पुरती संवेदनशीलता होऊ शके." } },
      { q: { en: "How long do results last?", mr: "निकाल किती टिकतो?" }, a: { en: "Months to a year with good habits.", mr: "चांगल्या सवयींनी काही महिने ते एक वर्ष." } },
    ],
    related: ["veneers-crowns", "smile-designing", "fluoride-bleaching"],
  },
  {
    slug: "bonding",
    category: "cosmetic",
    icon: "Link",
    name: { en: "Tooth Bonding", mr: "दात बॉन्डिंग" },
    tagline: { en: "Fix chips & gaps simply", mr: "तुटलेले व पोकळ दात सोप्या पद्धतीने" },
    what: {
      en: "Bonding uses a tooth-coloured resin sculpted onto the tooth to repair chips, close small gaps and reshape edges. It's a conservative, single-visit solution that needs minimal enamel removal. The result blends naturally with your smile.",
      mr: "बॉन्डिंग दाताच्या रंगाचे राळ दातावर घालून तुटलेले दात, लहान पोकळ व कडा बनवून दुरुस्त करते. हे संरक्षणक्षम, एकाच भेटीत उत्तर आहे ज्यात एनॅमेल फक्त थोडे काढावे लागते. निकाल तुमच्या हसण्यात नैसर्गिक विरजतो.",
    },
    benefits: [
      { en: "Repairs chips and closes gaps", mr: "तुटलेले दात व पोकळ बरे करते" },
      { en: "Usually no anaesthesia needed", mr: "साधारणतः भूनिरोधक लागत नाही" },
      { en: "Completed in one visit", mr: "एकाच भेटीत पूर्ण" },
    ],
    faqs: [
      { q: { en: "How long does bonding last?", mr: "बॉन्डिंग किती टिकते?" }, a: { en: "Several years with care.", mr: "काळजीने काही वर्षे." } },
      { q: { en: "Can it stain?", mr: "त्याला डाग बसू शकतो का?" }, a: { en: "It can stain over time like natural teeth.", mr: "नैसर्गिक दाताप्रमाणे वेळेने डाग बसू शकतो." } },
    ],
    related: ["veneers-crowns", "teeth-reshaping", "composite-light-curing"],
  },
  {
    slug: "veneers-crowns",
    category: "cosmetic",
    icon: "Crown",
    name: { en: "Veneers & Crowns", mr: "व्हिनिअर्स व क्राउन्स" },
    tagline: { en: "Reshape, restore, transform", mr: "आकार, पुनर्स्थापन, रूपांतर" },
    what: {
      en: "Veneers are thin shells bonded to the front of teeth to perfect their colour, shape and alignment. Crowns cap and protect weakened or broken teeth while restoring their appearance. Both deliver dramatic, long-lasting smile improvements.",
      mr: "व्हिनिअर्स हे दाताच्या पुढच्या भागावर चिकटवलेले पातळ आवरण आहे, जे रंग, आकार व रांग परिपूर्ण करतात. क्राउन्स कमजोर किंवा तुटलेले दात झाकून संरक्षित करतात व त्यांचे रूप परत आणतात. दोन्ही नाट्यमय, दीर्घकाळ टिकणारे हसणे देतात.",
    },
    benefits: [
      { en: "Transforms colour, shape and alignment", mr: "रंग, आकार व रांग बदलते" },
      { en: "Protects and strengthens damaged teeth", mr: "इज्य झालेले दात संरक्षित व मजबूत करते" },
      { en: "Natural, stain-resistant results", mr: "नैसर्गिक, डाग-प्रतिरोधी निकाल" },
    ],
    faqs: [
      { q: { en: "Veneers or crowns — which do I need?", mr: "व्हिनिअर्स की क्राउन्स — मला काय लागेल?" }, a: { en: "Veneers for front cosmetic changes; crowns for damaged teeth.", mr: "पुढच्या सौंदर्य बदलांसाठी व्हिनिअर्स; इज्य झालेल्या दातांसाठी क्राउन्स." } },
      { q: { en: "How long do they last?", mr: "ते किती टिकतात?" }, a: { en: "Often 10–15 years with good care.", mr: "चांगल्या काळजीने साधारण १०–१५ वर्षे." } },
    ],
    related: ["smile-designing", "zirconia-ceramic-crowns", "teeth-whitening"],
  },
  {
    slug: "smile-designing",
    category: "cosmetic",
    icon: "Smile",
    name: { en: "Smile Designing", mr: "स्माईल डिझायनिंग" },
    tagline: { en: "A smile planned for you", mr: "तुमच्यासाठी आखलेले हसणे" },
    what: {
      en: "Smile designing is a planned combination of whitening, veneers, bonding and reshaping tailored to your face and wishes. We assess your smile line, tooth proportions and gum balance, then design a result that suits you. It's dentistry as an art form.",
      mr: "स्माईल डिझायनिंग हे तुमच्या चेहऱ्यानुसार व्हायटनिंग, व्हिनिअर्स, बॉन्डिंग व आकार बदलण्याचा आराखडा आहे. आम्ही तुमची स्माईल लाईन, दातांचे प्रमाण व हिरड्यांचा संतुलन तपासून तुम्हाला शोभणारा निकाल रचतो. हे कलात्मक दंतवैद्यकीय आहे.",
    },
    benefits: [
      { en: "Personalised to your facial proportions", mr: "तुमच्या चेहऱ्याच्या प्रमाणानुसार" },
      { en: "Combines multiple treatments cohesively", mr: "अनेक उपचार एकत्रितपणे जोडते" },
      { en: "Previewed before any work begins", mr: "काम सुरू होण्याआधी पूर्वालोकन" },
    ],
    faqs: [
      { q: { en: "Can I see the result beforehand?", mr: "मला निकाल आधी पाहता येईल का?" }, a: { en: "Yes, we plan and preview the design.", mr: "होय, आम्ही आराखडा व पूर्वालोकन करतो." } },
      { q: { en: "Is it only cosmetic?", mr: "ते फक्त सौंदर्याचे आहे का?" }, a: { en: "It improves both looks and function.", mr: "ते रूप व कार्य दोन्ही सुधारते." } },
    ],
    related: ["veneers-crowns", "teeth-whitening", "teeth-reshaping"],
  },
  {
    slug: "teeth-reshaping",
    category: "cosmetic",
    icon: "PenTool",
    name: { en: "Teeth Reshaping", mr: "दात आकार बदलणे" },
    tagline: { en: "Subtle contouring, big impact", mr: "सूक्ष्म आकार, मोठा परिणाम" },
    what: {
      en: "Reshaping gently contours uneven, pointed or chipped teeth for a more balanced smile. It removes minimal enamel and is often combined with bonding. The result is immediate and requires no anaesthesia in most cases.",
      mr: "आकार बदलण्याने असमान, टोचकी किंवा तुटलेले दात कोमलपणे घडतात व संतुलित हसणे मिळते. त्यात फक्त थोडे एनॅमेल काढते व बहुतेक वेळा बॉन्डिंगसोबत केले जाते. निकाल त्वरित असून बहुतेक बाबतीत भूनिरोधक लागत नाही.",
    },
    benefits: [
      { en: "Instant, painless refinement", mr: "त्वरित, वेदनारहित सुधारणा" },
      { en: "No anaesthesia usually needed", mr: "साधारणतः भूनिरोधक लागत नाही" },
      { en: "Improves tooth symmetry", mr: "दातांची सममिती सुधारते" },
    ],
    faqs: [
      { q: { en: "Does reshaping weaken teeth?", mr: "आकार बदलण्याने दात कमजोर होतात का?" }, a: { en: "Only minimal enamel is removed.", mr: "फक्त थोडेच एनॅमेल काढले जाते." } },
      { q: { en: "Is it reversible?", mr: "ते उलटवता येते का?" }, a: { en: "No, it's a permanent contouring.", mr: "नाही, ते कायमचे आकारणे आहे." } },
    ],
    related: ["bonding", "smile-designing", "veneers-crowns"],
  },
  {
    slug: "cosmetic-dentistry",
    category: "cosmetic",
    icon: "Gem",
    name: { en: "Cosmetic Dentistry", mr: "कॉस्मेटिक दंतवैद्यकीय" },
    tagline: { en: "Your smile, perfected", mr: "तुमचे हसणे, परिपूर्ण" },
    what: {
      en: "Cosmetic dentistry brings together whitening, veneers, bonding and reshaping to enhance the appearance of your smile. Every plan is tailored to your goals and facial features. The aim is natural-looking confidence, not artificial perfection.",
      mr: "कॉस्मेटिक दंतवैद्यकीय व्हायटनिंग, व्हिनिअर्स, बॉन्डिंग व आकार बदलण्याची जोडी तुमचे हसणे सुधारते. प्रत्येक आराखडा तुमच्या इच्छा व चेहऱ्यानुसार. उद्देश नैसर्गिक दिसणारा आत्मविश्वास, कृत्रिम परिपूर्णता नाही.",
    },
    benefits: [
      { en: "Tailored, whole-smile planning", mr: "संपूर्ण हसण्याचे वैयक्तिक नियोजन" },
      { en: "Natural-looking results", mr: "नैसर्गिक दिसणारे निकाल" },
      { en: "Boosts confidence and self-image", mr: "आत्मविश्वास व स्वतःची छवी वाढवते" },
    ],
    faqs: [
      { q: { en: "What does cosmetic dentistry include?", mr: "कॉस्मेटिक दंतवैद्यकीयात काय येते?" }, a: { en: "Whitening, veneers, bonding, reshaping and more.", mr: "व्हायटनिंग, व्हिनिअर्स, बॉन्डिंग, आकार बदलणे व बरेच काही." } },
      { q: { en: "Is it safe?", mr: "ते सुरक्षित आहे का?" }, a: { en: "Yes, when planned and done properly.", mr: "होय, योग्य नियोजन व काम केल्यास." } },
    ],
    related: ["smile-designing", "teeth-whitening", "veneers-crowns"],
  },

  // ---------- Restorative & Surgical ----------
  {
    slug: "root-canal",
    category: "restorative-surgical",
    icon: "Activity",
    name: { en: "Root Canal Treatment", mr: "रूट कॅनाल उपचार" },
    tagline: { en: "Save your natural tooth", mr: "तुमचा नैसर्गिक दात वाचवा" },
    what: {
      en: "A root canal removes infected pulp from inside a tooth, relieves pain and saves the tooth from extraction. We clean, shape and seal the canals, then restore the tooth with a crown. Modern techniques make it surprisingly comfortable.",
      mr: "रूट कॅनाल दाताच्या आतचा संक्रमित गर्भ काढून वेदना दूर करतो व दात काढण्यापासून वाचवतो. आम्ही कॅनाल स्वच्छ, आकार व बंद करून दात क्राउनने परत बनवतो. आधुनिक तंत्रामुळे तो आश्चर्यकारक आरामदायी होतो.",
    },
    benefits: [
      { en: "Relieves severe tooth pain", mr: "तीव्र दात वेदना दूर करतो" },
      { en: "Saves the natural tooth", mr: "नैसर्गिक दात वाचवतो" },
      { en: "Single-sitting option for suitable cases", mr: "योग्य बाबतीत एकाच बैठकीचा पर्याय" },
    ],
    faqs: [
      { q: { en: "Does a root canal hurt?", mr: "रूट कॅनाल दुखतो का?" }, a: { en: "No — it relieves pain, not causes it.", mr: "नाही — तो वेदना दूर करतो, देत नाही." } },
      { q: { en: "What is single-sitting RCT?", mr: "एकल बैठक RCT म्हणजे काय?" }, a: { en: "Completing the root canal in one visit, for suitable cases.", mr: "योग्य बाबतीत एकाच भेटीत रूट कॅनाल पूर्ण करणे." } },
    ],
    related: ["zirconia-ceramic-crowns", "fillings-sealants", "extractions"],
  },
  {
    slug: "extractions",
    category: "restorative-surgical",
    icon: "Scissors",
    name: { en: "Tooth Extractions", mr: "दात काढणे" },
    tagline: { en: "Gentle removal when needed", mr: "गरज असल्यास कोमल काढणे" },
    what: {
      en: "When a tooth can't be saved — severe decay, fracture or overcrowding — extraction relieves pain and protects the rest of your mouth. We numb the area thoroughly and remove the tooth with care. We'll discuss replacing it afterwards.",
      mr: "दात वाचवता न आल्यास — तीव्र दुरुस्ती, तडा किंवा दाटपणा — काढणे वेदना दूर करून तोंडाचे आरोग्य राखते. आम्ही भाग पूर्ण बध्द करून दात काळजीपूर्वक काढतो. नंतरची जागा भरण्याचे मार्ग आम्ही चर्चा करतो.",
    },
    benefits: [
      { en: "Relieves pain and infection", mr: "वेदना व संक्रमण दूर करते" },
      { en: "Prevents spread to other teeth", mr: "इतर दातांत पसरणे थांबवते" },
      { en: "Guidance on replacement options", mr: "जागा भरण्याच्या पर्यायांचे मार्गदर्शन" },
    ],
    faqs: [
      { q: { en: "Will extraction hurt?", mr: "काढणे दुखेल का?" }, a: { en: "The area is numbed; you feel pressure, not pain.", mr: "भाग बध्द केला जातो; तुम्हाला दबाव, वेदना नाही." } },
      { q: { en: "How long is recovery?", mr: "बरे होण्यास किती वेळ?" }, a: { en: "A few days of mild soreness.", mr: "काही दिवस हलकी वेदना." } },
    ],
    related: ["wisdom-tooth", "dentures-bridges", "dental-implants"],
  },
  {
    slug: "wisdom-tooth",
    category: "restorative-surgical",
    icon: "Brain",
    name: { en: "Wisdom Tooth Extraction", mr: "अक्कल दात काढणे" },
    tagline: { en: "Relieve impaction & pain", mr: "दाबलेला दात व वेदना दूर" },
    what: {
      en: "Wisdom teeth often emerge at an angle or stay trapped in the jaw, causing pain, swelling and crowding. We assess their position with X-rays and remove them carefully, whether erupted or impacted. Post-op guidance keeps healing smooth.",
      mr: "अक्कल दात बहुतेक वेळा कोनात येतात किंवा जबड्यात दाबलेले राहतात, ज्यामुळे वेदना, सूज व दाटपणा होतो. आम्ही एक्स-रेने त्यांची स्थिती तपासून, आलेले किंवा दाबलेले, काळजीपूर्वक काढतो. शस्त्रक्रियेनंतरचे मार्गदर्शन बरे होणे सुरळीत ठेवते.",
    },
    benefits: [
      { en: "Relieves pain and pressure", mr: "वेदना व दबाव दूर करते" },
      { en: "Prevents crowding of front teeth", mr: "पुढच्या दातांचा दाटपणा टाळते" },
      { en: "Careful, image-guided removal", mr: "प्रतिमा-निर्देशित काळजीपूर्वक काढणे" },
    ],
    faqs: [
      { q: { en: "Does everyone need them out?", mr: "सर्वांना काढावेच लागते का?" }, a: { en: "Only if they cause problems or are impacted.", mr: "फक्त त्रास किंवा दाबल्यासच." } },
      { q: { en: "How long is recovery?", mr: "बरे होण्यास किती वेळ?" }, a: { en: "Usually a few days to a week.", mr: "साधारण काही दिवस ते एक आठवडा." } },
    ],
    related: ["extractions", "oral-surgery", "x-ray"],
  },
  {
    slug: "oral-surgery",
    category: "restorative-surgical",
    icon: "Syringe",
    name: { en: "Oral Surgery", mr: "ओरल सर्जरी" },
    tagline: { en: "Advanced surgical care", mr: "उन्नत शस्त्रक्रिया सेवा" },
    what: {
      en: "Oral surgery covers extractions, cyst removal, biopsies and corrective procedures of the mouth and jaws. We perform these with proper anaesthesia and sterile technique, prioritising your comfort and safety. Each case is planned with imaging beforehand.",
      mr: "ओरल सर्जरीत दात काढणे, सिस्ट काढणे, बायोप्सी व तोंड-जबड्याच्या सुधारात्मक शस्त्रक्रिया येतात. आम्ही योग्य भूनिरोधक व निर्जंतुक पद्धतीने, तुमचा आराम व सुरक्षा प्राधान्याने करतो. प्रत्येक बाबत आधी इमेजिंगसह नियोजन केले जाते.",
    },
    benefits: [
      { en: "Safe, sterile surgical technique", mr: "सुरक्षित, निर्जंतुक शस्त्रक्रिया पद्धत" },
      { en: "Imaging-guided planning", mr: "इमेजिंग-निर्देशित नियोजन" },
      { en: "Comfort-focused anaesthesia", mr: "आरामकेंद्रित भूनिरोधक" },
    ],
    faqs: [
      { q: { en: "Is oral surgery safe?", mr: "ओरल सर्जरी सुरक्षित आहे का?" }, a: { en: "Yes, with proper planning and technique.", mr: "होय, योग्य नियोजन व पद्धतीने." } },
      { q: { en: "Will I be in pain after?", mr: "नंतर वेदना होईल का?" }, a: { en: "Some soreness, managed with medication.", mr: "थोडी वेदना, औषधाने नियंत्रित." } },
    ],
    related: ["wisdom-tooth", "facio-maxillary-surgery", "jaw-fracture"],
  },
  {
    slug: "facio-maxillary-surgery",
    category: "restorative-surgical",
    icon: "Activity",
    name: { en: "Facio-Maxillary Surgery", mr: "फेशिओ-मॅक्सिलरी सर्जरी" },
    tagline: { en: "Jaw & facial surgery", mr: "जबडा व चेहऱ्याची शस्त्रक्रिया" },
    what: {
      en: "Facio-maxillary surgery treats injuries, deformities and diseases of the face, jaws and mouth — fractures, cysts, tumours and corrective jaw issues. We plan each case with detailed imaging and coordinate care for safe, functional and aesthetic outcomes.",
      mr: "फेशिओ-मॅक्सिलरी सर्जरी चेहरा, जबडा व तोंडाच्या इजा, विकृती व रोगांवर उपचार करते — तडे, सिस्ट, गाठी व जबड्याच्या सुधारात्मक बाबती. आम्ही तपस्वी इमेजिंगसह प्रत्येक बाबत नियोजन करून सुरक्षित, कार्यक्षम व सौंदर्यपूर्ण निकालासाठी सेवा जोडतो.",
    },
    benefits: [
      { en: "Treats complex facial & jaw conditions", mr: "गुंतागुंतीच्या चेहरा-जबडा स्थिती उपचार" },
      { en: "Imaging-guided surgical planning", mr: "इमेजिंग-निर्देशित शस्त्रक्रिया नियोजन" },
      { en: "Restores function and appearance", mr: "कार्य व रूप परत आणते" },
    ],
    faqs: [
      { q: { en: "When is it needed?", mr: "कधी लागते?" }, a: { en: "For fractures, cysts, deformities or jaw correction.", mr: "तडे, सिस्ट, विकृती किंवा जबडा सुधारासाठी." } },
      { q: { en: "Is it a major surgery?", mr: "ती मोठी शस्त्रक्रिया आहे का?" }, a: { en: "It ranges from minor to major; we explain each case.", mr: "लहान ते मोठी; प्रत्येक बाबत आम्ही स्पष्ट करतो." } },
    ],
    related: ["jaw-fracture", "oral-surgery", "wisdom-tooth"],
  },
  {
    slug: "flap-surgery",
    category: "restorative-surgical",
    icon: "Layers",
    name: { en: "Flap Surgery for Gingiva", mr: "हिरड्यांसाठी फ्लॅप सर्जरी" },
    tagline: { en: "Treat advanced gum disease", mr: "प्रगत हिरड्यांचा रोग उपचार" },
    what: {
      en: "Flap surgery treats advanced gum disease by gently lifting the gums to clean deep tartar and infected tissue from the roots. We then reposition and secure the gums so they heal tightly around the teeth. It helps save loose teeth and restores gum health.",
      mr: "फ्लॅप सर्जरी हिरड्या कोमळपणे उचलून मुळांपासून खोल टार्टार व संक्रमित ऊती काढून प्रगत हिरड्यांच्या रोगावर उपचार करते. नंतर हिरड्या परत ठेवून दातांभोवती घट्ट बरे होईल अशा बद्ध करतो. ते ढासळलेले दात वाचवून हिरड्यांचे आरोग्य परत आणते.",
    },
    benefits: [
      { en: "Cleans deep below the gumline", mr: "हिरड्याखाली खोल स्वच्छता" },
      { en: "Reduces pockets and infection", mr: "पॉकेट व संक्रमण कमी करते" },
      { en: "Helps save loose teeth", mr: "ढासळलेले दात वाचवायला मदत" },
    ],
    faqs: [
      { q: { en: "Is flap surgery painful?", mr: "फ्लॅप सर्जरी वेदनादायक आहे का?" }, a: { en: "Done under local anaesthesia; mild soreness after.", mr: "स्थानिक भूनिरोधकाखाली; नंतर हलकी वेदना." } },
      { q: { en: "How long to heal?", mr: "बरे होण्यास किती वेळ?" }, a: { en: "Gums heal over a few weeks.", mr: "हिरड्या काही आठवड्यांत बरे होतात." } },
    ],
    related: ["ultrasonic-cleaning", "teeth-cleaning", "oral-surgery"],
  },
  {
    slug: "jaw-fracture",
    category: "restorative-surgical",
    icon: "Activity",
    name: { en: "Jaw Fracture Treatment", mr: "जबडा तुटल्याचा उपचार" },
    tagline: { en: "Restore alignment & function", mr: "रांग व कार्य परत" },
    what: {
      en: "Jaw fractures from accidents or trauma need prompt, precise care to restore bite and facial shape. We assess the break with imaging and stabilise it — sometimes with wiring or plates — so it heals in the correct position. Follow-up ensures proper recovery.",
      mr: "अपघात किंवा इजेमुळे जबडा तुटल्यास चघण्याचे कार्य व चेहऱ्याचा आकार परत आणण्यासाठी त्वरित, अचूक सेवा लागते. आम्ही इमेजिंगने तडा तपासून योग्य स्थितीत बरे होईल अशी स्थिरता — कधी वायरिंग किंवा प्लेटने — देतो. पुनर्तपासणी योग्य बरे होणे सुनिश्चित करते.",
    },
    benefits: [
      { en: "Restores bite and facial shape", mr: "चघण्याचे कार्य व चेहऱ्याचा आकार परत" },
      { en: "Imaging-guided stabilisation", mr: "इमेजिंग-निर्देशित स्थिरता" },
      { en: "Coordinated follow-up care", mr: "समन्वित पुनर्तपासणी सेवा" },
    ],
    faqs: [
      { q: { en: "Is it an emergency?", mr: "ते आपत्काळीन आहे का?" }, a: { en: "Yes, seek prompt care.", mr: "होय, लवकर सेवा घ्या." } },
      { q: { en: "Will my jaw be wired shut?", mr: "जबडा बंद वायर केला जाईल का?" }, a: { en: "Sometimes, depending on the fracture.", mr: "कधी कधी, तुटल्यावर अवलंबून." } },
    ],
    related: ["facio-maxillary-surgery", "oral-surgery", "emergency-care"],
  },
  {
    slug: "dental-implants",
    category: "restorative-surgical",
    icon: "Syringe",
    name: { en: "Dental Implants", mr: "दंत प्रत्यारोप" },
    tagline: { en: "A permanent fix for missing teeth", mr: "गहाळ दातांसाठी कायम उत्तर" },
    what: {
      en: "Dental implants replace missing tooth roots with titanium posts, topped with natural-looking crowns. They restore full chewing power, preserve jawbone and don't rely on neighbouring teeth. With care, they last many years and feel like your own teeth.",
      mr: "दंत प्रत्यारोप गहाळ दाताच्या मुळांची जागा टायटॅनियम पिनांनी भरून वर नैसर्गिक दिसणारे क्राउन बसवतात. ते पूर्ण चघण्याचे बळ परत आणून जबड्याचे हाड राखतात व शेजारच्या दातांवर अवलंबून नसतात. काळजीने ते अनेक वर्षे टिकून स्वतःच्याच दातांसारखे वाटतात.",
    },
    benefits: [
      { en: "Permanent, stable tooth replacement", mr: "कायम, स्थिर दात बदली" },
      { en: "Preserves jawbone and facial shape", mr: "जबड्याचे हाड व चेहऱ्याचा आकार राखते" },
      { en: "Feels and functions like natural teeth", mr: "नैसर्गिक दातांसारखे वाट व काम" },
    ],
    faqs: [
      { q: { en: "Are implants painful?", mr: "प्रत्यारोप वेदनादायक आहेत का?" }, a: { en: "Placed under anaesthesia; mild soreness after.", mr: "भूनिरोधकाखाली; नंतर हलकी वेदना." } },
      { q: { en: "How long do they last?", mr: "ते किती टिकतात?" }, a: { en: "Many years with good hygiene.", mr: "चांगल्या स्वच्छतेने अनेक वर्षे." } },
    ],
    related: ["dentures-bridges", "zirconia-ceramic-crowns", "root-canal"],
  },
  {
    slug: "dentures-bridges",
    category: "restorative-surgical",
    icon: "Link",
    name: { en: "Dentures & Bridges", mr: "डेंचर्स व ब्रिज" },
    tagline: { en: "Replace missing teeth", mr: "गहाळ दात बदला" },
    what: {
      en: "Dentures and bridges replace one or more missing teeth to restore chewing, speech and your smile. Bridges anchor to neighbouring teeth; dentures are removable and can replace a full arch. Both are crafted for a comfortable, natural fit.",
      mr: "डेंचर्स व ब्रिज एक किंवा अधिक गहाळ दात बदलून चघणे, बोलणे व हसणे परत आणतात. ब्रिज शेजारच्या दातांना बद्ध होतात; डेंचर्स काढता-घालता असून संपूर्ण आर्च बदलू शकतात. दोन्ही आरामदायी, नैसर्गिक फिटसाठी घडवले जातात.",
    },
    benefits: [
      { en: "Restores chewing and speech", mr: "चघणे व बोलणे परत आणते" },
      { en: "Supports facial structure", mr: "चेहऱ्याची रचना टिकवते" },
      { en: "Removable or fixed options", mr: "काढता-घालता किंवा स्थिर पर्याय" },
    ],
    faqs: [
      { q: { en: "Are dentures uncomfortable?", mr: "डेंचर्स अस्वस्थ आहेत का?" }, a: { en: "They take a few weeks to get used to.", mr: "सरावासाठी काही आठवडे लागतात." } },
      { q: { en: "Bridge or implant?", mr: "ब्रिज की प्रत्यारोप?" }, a: { en: "We advise based on your teeth and bone.", mr: "तुमचे दात व हाड पाहून सल्ला देतो." } },
    ],
    related: ["dental-implants", "zirconia-ceramic-crowns", "extractions"],
  },
  {
    slug: "zirconia-ceramic-crowns",
    category: "restorative-surgical",
    icon: "Crown",
    name: { en: "Crown & Bridge (Zirconia/Ceramic/Metal)", mr: "क्राउन व ब्रिज (झिर्कोनिया/सिरॅमिक/धातू)" },
    tagline: { en: "Strong, beautiful restorations", mr: "मजबूत, सुंदर पुनर्स्थापन" },
    what: {
      en: "Crowns and bridges restore damaged or missing teeth using zirconia, ceramic or metal-based materials. Zirconia offers strength and a natural look; ceramic blends beautifully with front teeth; metal is durable for back teeth. We choose what suits each tooth best.",
      mr: "क्राउन व ब्रिज झिर्कोनिया, सिरॅमिक किंवा धातू-आधारित साहित्याने इज्य झालेले किंवा गहाळ दात परत बनवतात. झिर्कोनिया बळ व नैसर्गिक दिसणे देते; सिरॅमिक पुढच्या दातांत सुंदर विरजते; धातू मागच्या दातांसाठी टिकाऊ. आम्ही प्रत्येक दाताला काय शोभेल ते निवडतो.",
    },
    benefits: [
      { en: "Material matched to each tooth", mr: "प्रत्येक दाताला योग्य साहित्य" },
      { en: "Natural, long-lasting results", mr: "नैसर्गिक, दीर्घकाळ टिकणारे निकाल" },
      { en: "Restores strength and appearance", mr: "बळ व रूप परत आणते" },
    ],
    faqs: [
      { q: { en: "Which material is best?", mr: "कोणते साहित्य सर्वोत्तम?" }, a: { en: "Depends on tooth position and bite.", mr: "दाताच्या जागा व चघण्यावर अवलंबून." } },
      { q: { en: "How long do crowns last?", mr: "क्राउन किती टिकतात?" }, a: { en: "Often 10+ years with care.", mr: "काळजीने साधारण १०+ वर्षे." } },
    ],
    related: ["root-canal", "dental-implants", "veneers-crowns"],
  },

  // ---------- Orthodontics ----------
  {
    slug: "lingual-orthodontics",
    category: "orthodontics",
    icon: "Smile",
    name: { en: "Lingual Orthodontics", mr: "लिंग्वल ऑर्थोडॉन्टिक्स" },
    tagline: { en: "Braces hidden behind teeth", mr: "दातांमागे लपलेले ब्रेसेस" },
    what: {
      en: "Lingual braces are fixed behind the teeth, making them virtually invisible from the front. They straighten teeth just like regular braces while keeping treatment private. Ideal for adults who want discreet orthodontics.",
      mr: "लिंग्वल ब्रेसेस दातांच्या मागे बसवले जातात, ज्यामुळे समोरून ते जवळजवळ अदृश्य असतात. ते नेहमीच्या ब्रेसेसप्रमाणे दात साधेरित करतात व उपचार खाजगी ठेवतात. गुप्त ऑर्थोडॉन्टिक्स हवणाऱ्या प्रौढांसाठी आदर्श.",
    },
    benefits: [
      { en: "Invisible from the front", mr: "समोरून अदृश्य" },
      { en: "Effective for complex alignment", mr: "गुंतागुंतीच्या रांगीसाठी प्रभावी" },
      { en: "Fixed, no daily removal needed", mr: "स्थिर, रोज काढावे लागत नाही" },
    ],
    faqs: [
      { q: { en: "Are lingual braces uncomfortable?", mr: "लिंग्वल ब्रेसेस अस्वस्थ आहेत का?" }, a: { en: "Some tongue soreness at first, which fades.", mr: "सुरुवातीला जीभ खवखवे, नंतर कमी होते." } },
      { q: { en: "How long is treatment?", mr: "उपचार किती काळ?" }, a: { en: "Typically 12–24 months.", mr: "साधारण १२–२४ महिने." } },
    ],
    related: ["clear-aligners", "malaligned-teeth", "smile-designing"],
  },
  {
    slug: "clear-aligners",
    category: "orthodontics",
    icon: "Smile",
    name: { en: "Clear Aligners", mr: "क्लिअर अलायनर" },
    tagline: { en: "Straighten teeth, invisibly", mr: "दात साधेरित, अदृश्यपणे" },
    what: {
      en: "Clear aligners are transparent, removable trays that gradually move teeth into place without metal brackets. They're nearly invisible, easy to clean and let you eat normally. We plan your sequence with a digital preview of the result.",
      mr: "क्लिअर अलायनर हे पारदर्शक, काढता-घालता ट्रे आहेत जे धातूच्या कंगाशिवाय दात हळूहळू योग्य जागी नेतात. ते जवळजवळ अदृश्य, स्वच्छ करणे सोपे व सामान्य चघण्यास परवानगी देतात. आम्ही निकालाच्या डिजिटल पूर्वालोकनासह तुमची मालिका आखतो.",
    },
    benefits: [
      { en: "Nearly invisible treatment", mr: "जवळजवळ अदृश्य उपचार" },
      { en: "Removable for eating and cleaning", mr: "चघणे व स्वच्छतेसाठी काढता-घालता" },
      { en: "Digital preview of the result", mr: "निकालाचे डिजिटल पूर्वालोकन" },
    ],
    faqs: [
      { q: { en: "Do aligners hurt?", mr: "अलायनर दुखतात का?" }, a: { en: "Mild pressure when switching trays.", mr: "ट्रे बदलताना हलका दबाव." } },
      { q: { en: "How long do I wear them daily?", mr: "रोज किती तास घालावे?" }, a: { en: "About 20–22 hours a day.", mr: "दिवसात साधारण २०–२२ तास." } },
    ],
    related: ["lingual-orthodontics", "malaligned-teeth", "smile-designing"],
  },
  {
    slug: "malaligned-teeth",
    category: "orthodontics",
    icon: "Smile",
    name: { en: "Mal-aligned Teeth Treatment", mr: "विस्थापित दात उपचार" },
    tagline: { en: "Correct crowding & spacing", mr: "दाटपणा व मोकळी जागा बरे" },
    what: {
      en: "Mal-aligned teeth — crowding, gaps or crossbite — affect chewing, cleaning and confidence. We assess the cause and recommend braces, aligners or a combination to guide teeth into a healthy, balanced position. Early treatment often gives the best results.",
      mr: "विस्थापित दात — दाटपणा, मोकळी जागा किंवा क्रॉसबाईट — चघणे, स्वच्छता व आत्मविश्वासावर परिणाम करतात. आम्ही कारण तपासून ब्रेसेस, अलायनर किंवा जोडी शिफारस करून दात निरोगी, संतुलित स्थितीत नेतो. लवकर उपचार बहुतेक वेळा सर्वोत्तम निकाल देतो.",
    },
    benefits: [
      { en: "Improves bite and chewing", mr: "चघणे व बाईट सुधारते" },
      { en: "Easier cleaning, fewer cavities", mr: "स्वच्छता सोपी, कमी दुरुस्ती" },
      { en: "Balanced, confident smile", mr: "संतुलित, आत्मविश्वासाचे हसणे" },
    ],
    faqs: [
      { q: { en: "Is it only for children?", mr: "फक्त मुलांसाठी आहे का?" }, a: { en: "No, adults can be treated too.", mr: "नाही, प्रौढांचाही उपचार होतो." } },
      { q: { en: "How long is treatment?", mr: "उपचार किती काळ?" }, a: { en: "Months to a couple of years.", mr: "काही महिने ते एक-दोन वर्षे." } },
    ],
    related: ["clear-aligners", "lingual-orthodontics", "smile-designing"],
  },

  // ---------- Special Care ----------
  {
    slug: "paediatric-dentistry",
    category: "special-care",
    icon: "Baby",
    name: { en: "Paediatric Dentistry", mr: "बाल दंतवैद्यकीय" },
    tagline: { en: "Gentle care for little smiles", mr: "लहान हसण्यासाठी कोमल सेवा" },
    what: {
      en: "Children need a calm, friendly approach — and that's what we provide for every dental treatment, from check-ups to fillings and sealants. We help kids build healthy habits and a positive attitude toward the dentist. Early care sets up a lifetime of healthy smiles.",
      mr: "मुलांना शांत, मित्रप्राय वागणूक लागते — व तपासणीपासून फिलिंग व सीलंटपर्यंत प्रत्येक दंत उपचारात तेच आम्ही देतो. आम्ही मुलांना निरोगी सवयी व दंततज्जांबद्दल सकारात्मक वृत्ती राबवायला मदत करतो. लवकर सेवा आयुष्यभराच्या निरोगी हसण्याची सुरुवात करते.",
    },
    benefits: [
      { en: "Child-friendly, calm approach", mr: "मुलांना आरामदायी, शांत वागणूक" },
      { en: "Preventive sealants and fluoride", mr: "प्रतिबंधक सीलंट व फ्लोराइड" },
      { en: "Builds lifelong healthy habits", mr: "आयुष्यभराच्या निरोगी सवयी घडवते" },
    ],
    faqs: [
      { q: { en: "When should a child first visit?", mr: "मूल आधी कधी भेट द्यावे?" }, a: { en: "By the first birthday or first tooth.", mr: "पहिल्या वाढदिवसापर्यंत किंवा पहिल्या दाताने." } },
      { q: { en: "Will my child be scared?", mr: "मुलाला भीती वाटेल का?" }, a: { en: "We keep visits gentle and fun.", mr: "आम्ही भेटी कोमळ व मजेशीर ठेवतो." } },
    ],
    related: ["fillings-sealants", "fluoride-bleaching", "check-ups"],
  },
  {
    slug: "geriatric-dentistry",
    category: "special-care",
    icon: "Heart",
    name: { en: "Geriatric Dentistry", mr: "ज्येष्ठ दंतवैद्यकीय" },
    tagline: { en: "Dignified care for elders", mr: "वृद्धांसाठी सन्मानाने सेवा" },
    what: {
      en: "Older patients face worn teeth, gum recession, dry mouth and missing teeth — and deserve patient, dignified care. We handle all dental treatments for elders with attention to comfort and medical history. Our goal is to keep them eating and smiling comfortably.",
      mr: "वृद्ध रुग्णांना झीजलेले दात, हिरड्या आकुंचन, कोरडे तोंड व गहाळ दात असतात — व त्यांना धैर्याने, सन्मानाने सेवा हक्काची. आम्ही वृद्धांचे सर्व दंत उपचार आराम व वैद्यकीय इतिहासाकडे लक्ष देऊन करतो. आमचे ध्येय त्यांना आरामाने चघणे व हसणे राखायला मदत करणे.",
    },
    benefits: [
      { en: "Comfort-first, patient approach", mr: "आराम-प्रथम, धैर्याने सेवा" },
      { en: "Handles age-related dental issues", mr: "वयसानुसारी दंत त्रास हाताळते" },
      { en: "Coordinates with medical history", mr: "वैद्यकीय इतिहासाशी समन्वय" },
    ],
    faqs: [
      { q: { en: "Is treatment safe at an older age?", mr: "वयानुसार उपचार सुरक्षित आहे का?" }, a: { en: "Yes, we tailor it to your health.", mr: "होय, तुमच्या आरोग्यानुसार आम्ही ठरवतो." } },
      { q: { en: "Can missing teeth still be replaced?", mr: "गहाळ दात अजूनही बदलता येतात का?" }, a: { en: "Yes — dentures, bridges or implants.", mr: "होय — डेंचर्स, ब्रिज किंवा प्रत्यारोप." } },
    ],
    related: ["dentures-bridges", "dental-implants", "gum-care"],
  },
  {
    slug: "emergency-care",
    category: "special-care",
    icon: "AlertTriangle",
    name: { en: "Emergency Dental Care", mr: "आपत्काळीन दंत सेवा" },
    tagline: { en: "Fast relief when it hurts", mr: "दुखत असल्यास लवकर आराम" },
    what: {
      en: "Dental emergencies — severe pain, swelling, a knocked-out or broken tooth — need quick attention. Call us right away and we'll prioritise your visit to relieve pain and protect the tooth. Bring any broken or avulsed tooth pieces with you.",
      mr: "दंत आपत्काळीन स्थिती — तीव्र वेदना, सूज, बाहेर पडलेला किंवा तुटलेला दात — लवकर लक्ष लागते. लगेच कॉल करा, आम्ही वेदना दूर करून दात राखण्यासाठी तुमची भेट प्राधान्याने घेऊ. तुटलेले किंवा बाहेर पडलेले दाताचे तुकडे सोबत आणा.",
    },
    benefits: [
      { en: "Priority appointment for pain", mr: "वेदनेसाठी प्राधान्य अपॉइंटमेंट" },
      { en: "Relieves pain and infection fast", mr: "वेदना व संक्रमण लवकर दूर" },
      { en: "Guidance to save a knocked-out tooth", mr: "बाहेर पडलेला दात वाचवायला मार्गदर्शन" },
    ],
    faqs: [
      { q: { en: "What counts as an emergency?", mr: "आपत्काळीन काय मानले जाते?" }, a: { en: "Severe pain, swelling, trauma or a lost tooth.", mr: "तीव्र वेदना, सूज, इजा किंवा पडलेला दात." } },
      { q: { en: "What do I do if a tooth is knocked out?", mr: "दात पडल्यास काय करावे?" }, a: { en: "Keep it moist and come immediately.", mr: "ओलसर ठेवून लगेच या." } },
    ],
    related: ["extractions", "jaw-fracture", "oral-surgery"],
  },
  {
    slug: "mouth-guards",
    category: "special-care",
    icon: "Shield",
    name: { en: "Mouth Guards", mr: "माउथ गार्ड" },
    tagline: { en: "Protect teeth from grinding & sport", mr: "दात घासणे व खेळापासून राखा" },
    what: {
      en: "Custom mouth guards protect teeth from grinding (bruxism) at night and from impact during sports. They fit precisely, are comfortable to wear and far more effective than shop-bought ones. We make them to suit your bite and need.",
      mr: "सानुकूल माउथ गार्ड रात्री दात घासणे (ब्रक्सिझम) व खेळातील धक्क्यांपासून दात राखतात. ते अचूक बसतात, घालणे आरामदायी व दुकानातल्यांपेक्षा बरेच प्रभावी. आम्ही तुमच्या बाईट व गरजेनुसार ते बनवतो.",
    },
    benefits: [
      { en: "Prevents tooth wear and fractures", mr: "दातांची झीज व तडे टाळते" },
      { en: "Custom-fit for comfort", mr: "आरामासाठी सानुकूल फिट" },
      { en: "Protects during sports", mr: "खेळादरम्यान राखते" },
    ],
    faqs: [
      { q: { en: "Do I need a guard for grinding?", mr: "दात घासण्यासाठी गार्ड लागेल का?" }, a: { en: "If you grind at night, yes.", mr: "रात्री घासल्यास, होय." } },
      { q: { en: "Are sports guards different?", mr: "खेळाचे गार्ड वेगळे असतात का?" }, a: { en: "Yes, they're built for impact.", mr: "होय, ते धक्क्यासाठी बनवले जातात." } },
    ],
    related: ["teeth-reshaping", "check-ups", "emergency-care"],
  },
  {
    slug: "oral-cancer-diagnosis",
    category: "special-care",
    icon: "Eye",
    name: { en: "Diagnosis & Treatment of Oral Lesions / Oral Cancer", mr: "ओरल लेझियन / ओरल कॅन्सर निदान व उपचार" },
    tagline: { en: "Early detection saves lives", mr: "लवकर ओळख आयुष्य वाचवते" },
    what: {
      en: "We screen for oral lesions, ulcers and changes that could signal cancer or pre-cancer, and arrange biopsy or referral when needed. Early detection dramatically improves outcomes. We also guide prevention — especially for tobacco and betel-nut users.",
      mr: "आम्ही ओरल लेझियन, व्रण व बदलांची तपासणी करतो जी कॅन्सर किंवा पूर्व-कॅन्सर दर्शवू शकतात, व गरजेनुसार बायोप्सी किंवा रेफरल ठरवतो. लवकर ओळख निकाल लक्षणीय सुधारतो. आम्ही प्रतिबंधही मार्गदर्शन करतो — विशेषतः तंबाखू व सुपारी वापरणाऱ्यांसाठी.",
    },
    benefits: [
      { en: "Early screening for lesions", mr: "लेझियनची लवकर तपासणी" },
      { en: "Biopsy and referral when needed", mr: "गरजेनुसार बायोप्सी व रेफरल" },
      { en: "Prevention guidance", mr: "प्रतिबंध मार्गदर्शन" },
    ],
    faqs: [
      { q: { en: "Is oral cancer screening painful?", mr: "ओरल कॅन्सर तपासणी वेदनादायक आहे का?" }, a: { en: "No, it's a quick visual exam.", mr: "नाही, ती लवकर दृश्य तपासणी आहे." } },
      { q: { en: "Who is at higher risk?", mr: "जास्त धोका कोणाला?" }, a: { en: "Tobacco, alcohol and betel-nut users.", mr: "तंबाखू, दारू व सुपारी वापरणारे." } },
    ],
    related: ["oral-ulcers", "restricted-mouth-opening", "check-ups"],
  },
  {
    slug: "oral-ulcers",
    category: "special-care",
    icon: "Droplet",
    name: { en: "Oral Ulcers Treatment", mr: "ओरल व्रण उपचार" },
    tagline: { en: "Soothe painful mouth sores", mr: "दुखणाऱ्या व्रणांना आराम" },
    what: {
      en: "Mouth ulcers can be painful and sometimes signal underlying conditions. We identify the cause — stress, deficiency, trauma or disease — and treat accordingly, easing pain and helping healing. Persistent ulcers are checked for serious causes.",
      mr: "तोंडातील व्रण वेदनादायक असू शकतात व कधी खालील आजार दर्शवतात. आम्ही कारण ओळखतो — तणाव, कमतरता, इजा किंवा रोग — व तदनुसार उपचार करून वेदना कमी करून बरे होणे सोपे करतो. जुनाट व्रण गंभीर कारणांसाठी तपासले जातात.",
    },
    benefits: [
      { en: "Relieves ulcer pain quickly", mr: "व्रण वेदना लवकर दूर" },
      { en: "Identifies underlying causes", mr: "खालील कारणे ओळखते" },
      { en: "Checks persistent sores", mr: "जुनाट व्रण तपासते" },
    ],
    faqs: [
      { q: { en: "Are ulcers contagious?", mr: "व्रण संक्रामक आहेत का?" }, a: { en: "Most are not; we assess each case.", mr: "बहुतेक नाहीत; प्रत्येक बाबत तपासतो." } },
      { q: { en: "When should I worry?", mr: "कधी काळजी करावी?" }, a: { en: "If an ulcer lasts over two weeks.", mr: "व्रण दोन आठवड्यांहून जास्त टिकल्यास." } },
    ],
    related: ["oral-cancer-diagnosis", "restricted-mouth-opening", "check-ups"],
  },
  {
    slug: "restricted-mouth-opening",
    category: "special-care",
    icon: "Wrench",
    name: { en: "Difficulty Opening Mouth Treatment", mr: "तोंड उघडण्यात अडचण उपचार" },
    tagline: { en: "Restore full mouth movement", mr: "तोंडाचे पूर्ण हालचाल परत" },
    what: {
      en: "Limited mouth opening (trismus) can follow trauma, infection, oral submucous fibrosis or jaw joint issues. We diagnose the cause and treat it — medication, exercises or minor procedures — to restore comfortable movement. Early care prevents stiffness from worsening.",
      mr: "तोंड कमी उघडणे (ट्रिझमस) इजा, संक्रमण, ओरल सबम्युकस फायब्रोसिस किंवा जबडा सांध्याच्या त्रासामुळे होऊ शकते. आम्ही कारण निदान करून — औषध, व्यायाम किंवा लघु प्रक्रिया — आरामदायक हालचाल परत आणतो. लवकर सेवे ताठपणा वाढणे टाळते.",
    },
    benefits: [
      { en: "Diagnoses the underlying cause", mr: "खालील कारण निदान" },
      { en: "Restores comfortable opening", mr: "आरामदायक उघडणे परत" },
      { en: "Prevents worsening stiffness", mr: "ताठपणा वाढणे टाळते" },
    ],
    faqs: [
      { q: { en: "Why can't I open my mouth fully?", mr: "तोंड पूर्ण का उघडत नाही?" }, a: { en: "Causes range from spasm to fibrosis.", mr: "कारणे ऐंशीपासून फायब्रोसिसपर्यंत." } },
      { q: { en: "Is it reversible?", mr: "ते उलटवता येते का?" }, a: { en: "Often, with early treatment.", mr: "बहुतेक वेळा, लवकर उपचाराने." } },
    ],
    related: ["oral-cancer-diagnosis", "oral-ulcers", "facio-maxillary-surgery"],
  },
  {
    slug: "composite-light-curing",
    category: "special-care",
    icon: "Sun",
    name: { en: "Composite / GIC / Light Curing", mr: "कंपोझिट / GIC / लाईट क्युरिंग" },
    tagline: { en: "Modern tooth-coloured restorations", mr: "आधुनिक दाताच्या रंगाचे पुनर्स्थापन" },
    what: {
      en: "Composite, glass-ionomer (GIC) and light-cured materials let us restore teeth with natural-looking, strong fillings that bond directly to the tooth. Light-curing hardens them instantly for a quick, durable finish. We choose the right material for each tooth and need.",
      mr: "कंपोझिट, ग्लास-आयनोमर (GIC) व लाईट-क्युर्ड साहित्यामुळे आम्ही दात नैसर्गिक दिसणाऱ्या, मजबूत फिलिंग्सने बरे करतो जे दाताला थेट चिकटतात. लाईट-क्युरिंग त्यांना त्वरित घट्ट करून लवकर, टिकाऊ निकाल देते. आम्ही प्रत्येक दात व गरजेनुसार योग्य साहित्य निवडतो.",
    },
    benefits: [
      { en: "Natural, tooth-coloured finish", mr: "नैसर्गिक, दाताच्या रंगाचे निकाल" },
      { en: "Bonds directly to tooth structure", mr: "दाताच्या रचनेशी थेट चिकट" },
      { en: "Quick, light-cured setting", mr: "लवकर, लाईट-क्युर्ड बसणी" },
    ],
    faqs: [
      { q: { en: "Are these fillings durable?", mr: "हे फिलिंग टिकाऊ आहेत का?" }, a: { en: "Yes, with normal care.", mr: "होय, सामान्य काळजीने." } },
      { q: { en: "Composite or GIC — which?", mr: "कंपोझिट की GIC — कोणते?" }, a: { en: "Depends on the tooth and location.", mr: "दात व जागेवर अवलंबून." } },
    ],
    related: ["fillings-sealants", "bonding", "veneers-crowns"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const servicesByCategory = (cat) => services.filter((s) => s.category === cat);