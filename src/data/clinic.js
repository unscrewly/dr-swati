// Single source of truth for clinic facts — NAP consistency site-wide.
export const clinic = {
  nameEn: "Dr. Swati's Dental Clinic",
  nameMr: "डॉ. स्वाती यांचा विठाई दातांचा दवाखाना",
  shortEn: "Dr. Swati's Dental Clinic",
  shortMr: "विठाई दातांचा दवाखाना",
  rating: "5.0",
  reviewsCount: 102,
  phoneDisplay: "095527 61082",
  phone: "+919552761082",
  whatsapp: "https://wa.me/919552761082",
  addressEn:
    "First floor, Vitthal Mandir, Madhali Galli, Vitthal Mandir Chowk, near Vitthal Mandir, Scheme No. 4, Kadamwadi, Kolhapur, Maharashtra 416003",
  addressMr:
    "पहिला मजला, विठ्ठल मंदिर, मधली गल्ली, विठ्ठल मंदिर चौक, विठ्ठल मंदिराजवळ, स्कीम क्र. ४, कदमवाडी, कोल्हापूर, महाराष्ट्र ४१६००३",
  mapsEmbed:
    "https://www.google.com/maps?q=Vitthal+Mandir+Madhali+Galli+Kadamwadi+Kolhapur+416003&output=embed",
  mapsLink: "https://maps.app.goo.gl/424mtWNiMAy49iLt9",
  geo: { lat: 16.6959, lng: 74.2333 },
  hours: [
    { day: { en: "Mon – Sat", mr: "सोम – शन" }, time: { en: "9:30 AM – 1:30 PM, 5:30 – 9:00 PM", mr: "दुपार ९:३० – १:३०, सायं. ५:३० – ९:००" } },
    { day: { en: "Sunday", mr: "रविवार" }, time: { en: "By appointment", mr: "अपॉइंटमेंटने" } },
  ],
};

export const testimonials = [
  {
    name: "A patient from Kadamwadi",
    nameMr: "कदमवाडीतील एक रुग्ण",
    text: "The treatment was completely painless and I felt comfortable throughout. The doctor explained every step, which put me at ease.",
    textMr: "उपचार संपूर्ण वेदनारहित होता आणि मला सार्वात्रिक आराम मिळाला. डॉक्टरने प्रत्येक पायरी स्पष्ट केली, ज्यामुळे मला ताळमीळ मिळाली.",
    rating: 5,
  },
  {
    name: "A relieved patient",
    nameMr: "आराम मिळालेले रुग्ण",
    text: "Painless treatment and a very pleasant chairside manner. I never felt rushed or anxious at any point.",
    textMr: "वेदनारहित उपचार आणि अतिशय मृदू चेअरसाइड वागणूक. कधीही घाई किंवा भीती वाटली नाही.",
    rating: 5,
  },
  {
    name: "A happy patient",
    nameMr: "आनंदी रुग्ण",
    text: "I would recommend the dentist to anyone looking for a genuinely comfortable dental experience in Kolhapur.",
    textMr: "कोल्हापूरमध्ये खरोखर आरामदायी दंत अनुभव शोधणाऱ्या कोणालाही मी डॉक्टरांची शिफारस करेन.",
    rating: 5,
  },
  {
    name: "A returning patient",
    nameMr: "परत आलेले रुग्ण",
    text: "Calm, clean and caring — the whole visit felt easy. My fear of dental work is finally gone.",
    textMr: "शांत, स्वच्छ आणि काळजी घेणारे — संपूर्ण भेट सोपी वाटली. दंत उपचाराची भीती शेवटी गेली.",
    rating: 5,
  },
];

export const generalFaqs = [
  {
    q: { en: "Will my treatment be painful?", mr: "माझा उपचार वेदनादायक असेल का?" },
    a: {
      en: "No. Painless, comfortable care is the standard here. We explain each step beforehand and pace treatment to your comfort, and patients routinely describe their visits as painless.",
      mr: "नाही. वेदनारहित, आरामदायी सेवा इथे दर्जा आहे. आम्ही प्रत्येक पायरी आधीच स्पष्ट करतो आणि उपचार तुमच्या आरामानुसार ठेवतो; रुग्ण नेहमी भेट वेदनारहित म्हणून वर्णन करतात.",
    },
  },
  {
    q: { en: "How do I book an appointment?", mr: "मी अपॉइंटमेंट कसा बुक करू?" },
    a: {
      en: "The fastest way is to call 095527 61082 or message us on WhatsApp. We'll find the earliest available slot for you.",
      mr: "सर्वात लवकर मार्ग — 095527 61082 वर कॉल करा किंवा व्हॉट्सॲपवर संदेश पाठवा. आम्ही सर्वात लवकर उपलब्ध वेळ शोधू.",
    },
  },
  {
    q: { en: "Do you treat children and elderly patients?", mr: "तुम्ही मुलांचा आणि वृद्ध रुग्णांचा उपचार करता का?" },
    a: {
      en: "Yes. We offer dedicated paediatric and geriatric dental care, with a gentle approach suited to every age group.",
      mr: "होय. आम्ही प्रत्येक वयोगटानुसार कोमल पद्धतीने विशेष बाल आणि ज्येष्ठ दंत सेवा देतो.",
    },
  },
  {
    q: { en: "What should I expect to pay?", mr: "मला किती खर्च येऊ शकेल?" },
    a: {
      en: "Costs vary by treatment. After a check-up we explain the recommended plan and its cost clearly before anything begins — no surprises.",
      mr: "खर्च उपचारानुसार बदलतो. तपासणीनंतर आम्ही शिफारस केलेली योजना व तिचा खर्च काही सुरू होण्याआधीच स्पष्ट करतो — कोणताही धोका नाही.",
    },
  },
  {
    q: { en: "Do you handle dental emergencies?", mr: "तुम्ही दंत आपत्काळीन परिस्थिती हाताळता का?" },
    a: {
      en: "Yes. For sudden pain, swelling, trauma or a broken tooth, call us immediately and we'll prioritise your visit.",
      mr: "होय. अचानक वेदना, सूज, इजा किंवा तुटलेला दात यासाठी लगेच कॉल करा — आम्ही तुमची भेट प्राधान्याने घेऊ.",
    },
  },
  {
    q: { en: "How often should I get a dental check-up?", mr: "मी किती वेळा दंत तपासणी करावी?" },
    a: {
      en: "Most people benefit from a check-up and cleaning every six months to catch problems early and keep gums healthy.",
      mr: "बहुतेकांना सहा महिन्यांतून एक तपासणी व स्वच्छता लाभदायक ठरते — त्रास लवकर ओळखायला आणि हिरड्या निरोगी ठेवायला.",
    },
  },
  {
    q: { en: "Is a root canal really necessary, or can I just extract the tooth?", mr: "रूट कॅनाल खरोखर गरजेचा आहे, की दात काढून टाकला तरी होईल?" },
    a: {
      en: "Whenever a tooth can be saved, saving it is better for chewing, jaw health and appearance. We extract only when saving it isn't possible.",
      mr: "दात वाचवता येईल तेव्हा तो वाचवणे चघण्यासाठी, जबड्याच्या आरोग्यासाठी आणि सौंदर्यासाठी चांगले. आम्ही वाचवणे शक्य नसेल तेव्हाच काढतो.",
    },
  },
  {
    q: { en: "Are dental implants safe?", mr: "दंत प्रत्यारोप सुरक्षित आहेत का?" },
    a: {
      en: "Yes. Implants are a well-established, long-lasting solution for missing teeth. We assess your bone and gums first to ensure you're a good candidate.",
      mr: "होय. प्रत्यारोप हे गहाळ दातांसाठी रुढ, दीर्घकाळ टिकणारे उत्तर आहे. आम्ही आधी हाड व हिरड्या तपासून तुम्ही योग्य उमेदवार आहात हे निश्चित करतो.",
    },
  },
  {
    q: { en: "How long does teeth whitening last?", mr: "दात फुगवणे (व्हायटनिंग) किती काळ टिकते?" },
    a: {
      en: "Results typically last several months to a year, depending on diet and oral care. Avoiding staining foods and regular cleaning extends the effect.",
      mr: "निकाल साधारण काही महिने ते एक वर्ष टिकतो, आहार व दंत स्वच्छतेवर अवलंबून. डाग पाडणारे पदार्थ टाळल्यास व नियमित स्वच्छतेने परिणाम दीर्घ टिकतो.",
    },
  },
  {
    q: { en: "What are clear aligners and are they right for me?", mr: "क्लिअर अलायनर म्हणजे काय, ते मला योग्य आहेत का?" },
    a: {
      en: "Clear aligners are near-invisible, removable trays that straighten teeth discreetly. After an assessment we'll tell you if they suit your case.",
      mr: "क्लिअर अलायनर हे जवळजवळ अदृश्य, काढता येण्याजोगे ट्रे आहेत जे दात साधेरित्या आळवतात. तपासणीनंतर ते तुमच्या बाबतीत योग्य आहेत का ते सांगू.",
    },
  },
  {
    q: { en: "Where exactly is the clinic located?", mr: "दवाखाना नेमका कुठे आहे?" },
    a: {
      en: "First floor, Vitthal Mandir, Madhali Galli, Vitthal Mandir Chowk, near Vitthal Mandir, Scheme No. 4, Kadamwadi, Kolhapur 416003 — right beside Vitthal Mandir.",
      mr: "पहिला मजला, विठ्ठल मंदिर, मधली गल्ली, विठ्ठल मंदिर चौक, विठ्ठल मंदिराजवळ, स्कीम क्र. ४, कदमवाडी, कोल्हापूर ४१६००३ — विठ्ठल मंदिराच्या बरोबर शेजारी.",
    },
  },
  {
    q: { en: "Do you provide treatment in Marathi?", mr: "तुम्ही मराठीत उपचार/सल्ला देता का?" },
    a: {
      en: "Absolutely. We explain everything in Marathi, Hindi or English — whatever you're most comfortable in.",
      mr: "नक्कीच. आम्ही सर्व मराठी, हिंदी किंवा इंग्रजीत स्पष्ट करतो — ज्यात तुम्हाला सोयीस्कर असेल.",
    },
  },
];

export const categories = [
  { slug: "general-preventive", name: { en: "General & Preventive", mr: "सामान्य व प्रतिबंधक" }, icon: "Shield" },
  { slug: "cosmetic", name: { en: "Cosmetic", mr: "कॉस्मेटिक" }, icon: "Gem" },
  { slug: "restorative-surgical", name: { en: "Restorative & Surgical", mr: "पुनर्स्थापनकारी व शस्त्रक्रिया" }, icon: "Activity" },
  { slug: "orthodontics", name: { en: "Orthodontics", mr: "ऑर्थोडॉन्टिक्स" }, icon: "Smile" },
  { slug: "special-care", name: { en: "Special Care", mr: "विशेष काळजी" }, icon: "Heart" },
];