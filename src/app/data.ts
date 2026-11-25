export type Lang = 'fr' | 'de' | 'en';
export type L = Record<Lang, string>;

export const EMAIL = 'booking@herrgoettli-quartet.ch';
export const FORM_ENDPOINT = 'https://formspree.io/f/xwlovzzp';

/* ---------- Textes des pages : un bloc par langue ---------- */
const fr = {
  nav: { concerts: 'Concerts', press: 'Presse', contact: 'Contact', lang: 'Langue' },
  home: {
    tagline: 'Fait danser toute la Suisse sans modération',
    panels: 'Les quatre musiciens',
    about: 'Le groupe',
    intro: [
      'Groupe de Jazz Festif ayant comme mission de réunir toute la Suisse sur le dance-floor',
      'À mi-chemin entre un concert et un cours de Cross-Fit, veuillez vous échauffer avant de venir nous voir.',
    ],
    seeConcerts: 'Voir les concerts',
        contactUs: 'Nous contacter',
    word: {
      respell: 'hèr-gueutt-li',
      senses: [
        'Mot suisse-allemand désignant une petite bière de 2dl.',
        'Quartet de jazz festif qui fait danser toute la Suisse. À consommer sans modération.',
      ],
    },
  },
  concerts: {
    upcoming: 'À venir',
    past: 'Passés',
    tickets: 'Billets',
    empty: 'Aucune date annoncée pour le moment. Revenez bientôt, ou écrivez-nous pour organiser un concert.',
  },
  press: {
    docs: 'Documents',
    photos: 'Photos',
    note: 'Photos libres de droits pour la presse, avec mention du crédit.',
  },
  contact: {
    intro: "Booking, presse, questions : écrivez-nous. Indiquez la date et le lieu si c'est pour un concert.",
    name: 'Nom',
    email: 'E-mail',
    org: 'Organisation ou lieu',
    message: 'Message',
    send: 'Envoyer le message',
    sending: 'Envoi en cours',
    sent: 'Message envoyé. Nous répondons en général sous quelques jours.',
    error: "L'envoi a échoué. Écrivez-nous directement à",
  },
};

// `typeof fr` oblige l'allemand et l'anglais à avoir exactement les mêmes clés.
export const TEXT: Record<Lang, typeof fr> = {
  fr,
  de: {
    nav: { concerts: 'Konzerte', press: 'Presse', contact: 'Kontakt', lang: 'Sprache' },
    home: {
      tagline: 'Bringt die ganze Schweiz hemmungslos zum Tanzen',
      panels: 'Die vier Musiker',
      about: 'Die Band',
      intro: [
        'Eine festliche Jazzband mit der Mission, die ganze Schweiz auf der Tanzfläche zu vereinen.',
        'Irgendwo zwischen Konzert und Crossfit-Training: Bitte wärmen Sie sich auf, bevor Sie zu uns kommen.',
      ],
      seeConcerts: 'Konzerte ansehen',
      contactUs: 'Kontakt aufnehmen',
      word: {
        respell: 'här-gött-li',
        senses: [
          'Schweizerdeutsches Wort für ein kleines Bier von 2 dl.',
          'Festliche Jazzband, die die ganze Schweiz zum Tanzen bringt. Ohne Mass zu geniessen.',
        ],
      },
    },
    concerts: {
      upcoming: 'Kommende',
      past: 'Vergangene',
      tickets: 'Tickets',
      empty: 'Zurzeit sind keine Termine angekündigt. Schauen Sie bald wieder vorbei oder schreiben Sie uns, um ein Konzert zu organisieren.',
    },
    press: {
      docs: 'Dokumente',
      photos: 'Fotos',
      note: 'Pressefotos honorarfrei, mit Nennung der Quelle.',
    },
    contact: {
      intro: 'Booking, Presse, Fragen: Schreiben Sie uns. Geben Sie bei Konzertanfragen bitte Datum und Ort an.',
      name: 'Name',
      email: 'E-Mail',
      org: 'Organisation oder Veranstaltungsort',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet',
      sent: 'Nachricht gesendet. Wir antworten in der Regel innerhalb weniger Tage.',
      error: 'Senden fehlgeschlagen. Schreiben Sie uns direkt an',
    },
  },
  en: {
    nav: { concerts: 'Concerts', press: 'Press', contact: 'Contact', lang: 'Language' },
    home: {
      tagline: 'Making all of Switzerland dance, without moderation',
      panels: 'The four musicians',
      about: 'The band',
      intro: [
        'A festive jazz band on a mission to bring all of Switzerland together on the dance floor.',
        'Somewhere between a concert and a CrossFit class: please warm up before coming to see us.',
      ],
      seeConcerts: 'See the concerts',
      contactUs: 'Get in touch',
      word: {
        respell: 'hair-gurt-lee',
        senses: [
          'Swiss German word for a small 2 dl beer.',
          'A festive jazz quartet that gets all of Switzerland dancing. Best enjoyed without moderation.',
        ],
      },
    },
    concerts: {
      upcoming: 'Upcoming',
      past: 'Past',
      tickets: 'Tickets',
      empty: 'No dates announced yet. Check back soon, or write to us to book a concert.',
    },
    press: {
      docs: 'Documents',
      photos: 'Photos',
      note: 'Press photos are free to use, with credit.',
    },
    contact: {
      intro: 'Booking, press, questions: write to us. For a concert, please include the date and venue.',
      name: 'Name',
      email: 'Email',
      org: 'Organisation or venue',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending',
      sent: 'Message sent. We usually reply within a few days.',
      error: 'Sending failed. Please write to us directly at',
    },
  },
};

/* ---------- Contenus en liste (musiciens, concerts, presse) ---------- */

// photo : chemin dans public/images, par ex. '/images/matteo.jpg'. Laissez vide tant que vous n'avez pas la photo.
export const MEMBERS: { name: string; role: L; photo?: string }[] = [
  { name: 'Mattéo Bonvin', role: { fr: 'Trombone', de: 'Posaune', en: 'Trombone' } },
  { name: 'Léo Pham', role: { fr: 'Guitare', de: 'Gitarre', en: 'Guitar' } },
  { name: 'Wyclif Ruhumuliza', role: { fr: 'Batterie', de: 'Schlagzeug', en: 'Drums' } },
  { name: 'Jean Démurger', role: { fr: 'Basson', de: 'Fagott', en: 'Bassoon' } },
];

// date au format AAAA-MM-JJ. Les concerts passés basculent seuls dans « Passés ».
// Noms de salles et villes : pas de traduction nécessaire.
export const CONCERTS: { date: string; city: string; venue: string; url?: string }[] = [
  // { date: '2027-03-12', city: 'Sion', venue: 'Nom de la salle', url: 'https://billetterie…' },
];

const TO_FILL: L = { fr: 'Photo : à renseigner', de: 'Foto: noch einzutragen', en: 'Photo: to be added' };

export const PRESS_PHOTOS: { src?: string; alt: L; credit: L }[] = [
  { alt: { fr: 'Le quartet sur scène', de: 'Das Quartett auf der Bühne', en: 'The quartet on stage' }, credit: TO_FILL },
  { alt: { fr: 'Portrait de groupe', de: 'Gruppenporträt', en: 'Group portrait' }, credit: TO_FILL },
  { alt: { fr: 'Détail instruments', de: 'Detailaufnahme der Instrumente', en: 'Close-up of the instruments' }, credit: TO_FILL },
  { alt: { fr: 'Le quartet en répétition', de: 'Das Quartett bei der Probe', en: 'The quartet rehearsing' }, credit: TO_FILL },
];

export const DOCS: { title: L; file: string; note: L }[] = [
  {
    title: { fr: 'Press kit', de: 'Presse-Kit', en: 'Press kit' },
    file: '/press/herrgoettli-quartet-presskit.pdf',
    note: { fr: 'Biographie, visuels, contacts (PDF)', de: 'Biografie, Bilder, Kontakte (PDF)', en: 'Bio, images, contacts (PDF)' },
  },
  {
    title: { fr: 'Rider technique', de: 'Technical Rider', en: 'Tech rider' },
    file: '/press/herrgoettli-quartet-techrider.pdf',
    note: { fr: 'Plan de scène et besoins techniques (PDF)', de: 'Bühnenplan und technische Anforderungen (PDF)', en: 'Stage plan and technical needs (PDF)' },
  },
];

export const WORD = {
  term: 'Herrgöttli',
  ipa: 'ˈhɛrˌɡœtːli',
};