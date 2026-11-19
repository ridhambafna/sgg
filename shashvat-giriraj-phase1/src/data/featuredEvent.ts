export interface ItineraryItem {
  time?: string;
  activity: string;
  highlight?: boolean;
  note?: string;
}

export interface YatraItineraryDay {
  dayNumber: number;
  dateStr: string;
  title: string;
  items: ItineraryItem[];
}

export interface FeaturedEventData {
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  dates: {
    start: string;
    end: string;
    returnDate: string;
    display: string;
  };
  destination: string;
  contribution: string;
  contributionUnit: string;
  blessings: {
    invoking: string;
    divyashish: string;
    inspiration: string;
  };
  motto: string;
  quote: {
    lead: string;
    body: string;
  };
  pillars: Array<{ title: string; desc: string }>;
  itinerary: YatraItineraryDay[];
  contributionCovers: string[];
  enquiries: Array<{ name: string; phone: string }>;
  socials: {
    instagram: string;
    instagramHandle: string;
    whatsappNumber: string;
    youtubeChannel: string;
  };
}

export const saalKaAarambhEvent: FeaturedEventData = {
  title: "Saal Ka Aarambh Giriraj Se",
  subtitle: "30 Dec 2026 – 1 Jan 2027",
  slug: "saal-ka-aarambh-giriraj-se",
  category: "Yatra & Bhakti",
  dates: {
    start: "2026-12-30",
    end: "2027-01-01",
    returnDate: "2027-01-02",
    display: "30 DEC 2026 – 1 JAN 2027",
  },
  destination: "Shetrunjay Giriraj, Palitana (via Songadh)",
  contribution: "₹2,500",
  contributionUnit: "Per Person",
  blessings: {
    invoking: "॥ श्री आदिनाथाय नमः ॥",
    divyashish: "जिनशासन सिरताज प.पू. आ. देव श्री विजय हेमप्रभसूरीश्वरजी म.सा.",
    inspiration: "विश्व प्रसिद्ध गिरिविहार संस्था मार्गदर्शक, सत्वशाली प्रवचनकार, गुरुकृपापात्र, युवागच्छाधिपति प.पू. आचार्यदेव श्री विजय विज्ञानप्रभसूरीश्वरजी महाराजा के शिष्यरन्त मधुर कंठी प.पू. मुनिराज श्री जयंकर प्रभविजयजी महाराजा",
  },
  motto: "Come as a traveller, leave as a family.",
  quote: {
    lead: "Giriraj is not just a mountain, it is our Aastha, our Praan.",
    body: "Beginning the year here fills our hearts with peace, our minds with positivity & our journey with divine blessings. Let’s do jatra together. Let’s grow together. Let’s start the year with Giriraj.",
  },
  pillars: [
    { title: "SPIRITUAL ENERGY", desc: "Deep devotion and positivity" },
    { title: "BHAKTI EXPERIENCE", desc: "Life time experience" },
    { title: "DIVINE BLESSINGS", desc: "Seek grace and peace" },
    { title: "UNFORGETTABLE MEMORIES", desc: "Moments to cherish forever" },
  ],
  itinerary: [
    {
      dayNumber: 1,
      dateStr: "30 DEC 2026, WEDNESDAY",
      title: "MUMBAI TO SONGADH",
      items: [
        { time: "06:00 PM", activity: "Assemble at Bandra Terminus" },
        { time: "07:10 PM", activity: "Departure from Bandra (BDTS)", note: "Train No. 12971 (Bandra Terminus – Songadh), 3-Tier AC Coach" },
        { time: "Night", activity: "Bhakti in Train", highlight: true, note: "Let's spend the night in devotion with bhakti and good vibes." },
      ],
    },
    {
      dayNumber: 2,
      dateStr: "31 DEC 2026, THURSDAY",
      title: "ARRIVAL & SEVA PUJA",
      items: [
        { time: "07:04 AM", activity: "Arrival at Songadh Station & proceed via Private Bus to Dharamshala" },
        { time: "Morning", activity: "Check-in & Settle in Premium Accommodation" },
        { time: "11:00 AM", activity: "Puja at Taleti & Babu Derasar" },
        { time: "01:00 – 02:30 PM", activity: "Navkarshi / Lunch (Pure Jain Meals)" },
        { time: "03:30 – 05:00 PM", activity: "Jain's Got Talent", highlight: true },
        { time: "05:00 – 06:00 PM", activity: "Chovihar" },
        { time: "06:30 – 08:00 PM", activity: "Rohishala Aarti" },
        { time: "09:00 – 11:00 PM", activity: "Bhakti Bhavna", highlight: true },
      ],
    },
    {
      dayNumber: 3,
      dateStr: "1 JAN 2027, FRIDAY",
      title: "GIRIRAJ JATRA & RETURN",
      items: [
        { time: "05:30 AM", activity: "Jatra Begins — Climb the holy steps of Shetrunjay Giriraj with devotion" },
        { time: "Darshan", activity: "Dada Darshan — Sacred Darshan of Shree Dada Adinath" },
        { time: "Pooja", activity: "Pakshal & Pooja — Seva pooja and bhakti with the entire group" },
        { time: "01:00 – 02:30 PM", activity: "Lunch" },
        { time: "04:30 – 05:30 PM", activity: "Chovihar" },
        { time: "05:30 PM", activity: "Private Bus to Songadh Station" },
        { time: "07:08 PM", activity: "Train Departure: Train No. 12972 (Songadh – Bandra Terminus)" },
        { time: "08:20 AM (2 Jan)", activity: "Arrival at Bandra Terminus. Return home with divine memories & a peaceful heart.", highlight: true },
      ],
    },
  ],
  contributionCovers: [
    "Comfortable round-trip train travel (3-Tier AC coach)",
    "Train Bhakti with Vanigota Brothers",
    "Bhakti Jamming Concert",
    "Premium accommodation",
    "All pure Jain meals during the trip",
  ],
  enquiries: [
    { name: "Ridham Bafna", phone: "9766044980" },
    { name: "Misha Jain", phone: "8928612389" },
  ],
  socials: {
    instagram: "https://www.instagram.com/shashvat.giriraj/",
    instagramHandle: "@shashvat.giriraj",
    whatsappNumber: "919766044980",
    youtubeChannel: "https://www.youtube.com/@shashvatgiriraj",
  },
};
