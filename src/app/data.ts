export const EMAIL = 'booking@herrgoettli-quartet.ch';

// Créez un formulaire sur formspree.io avec l'adresse booking@..., puis collez ici son URL.
export const FORM_ENDPOINT = 'https://formspree.io/f/xwlovzzp';

export const TAGLINE = 'Fait danser toute la Suisse sans modération';

export const ABOUT = [
  'Groupe de Jazz Festif ayant comme mission de réunir toute la Suisse sur le dance-floor',
  'À mi-chemin entre un concert et un cours de Cross-Fit, veuillez vous échauffer avant de venir nous voir.',
];

// photo : chemin dans public/images, par ex. '/images/prenom.jpg'. Laissez vide tant que vous n'avez pas la photo.
export const MEMBERS: { name: string; role: string; photo?: string }[] = [
  { name: 'Mattéo Bonvin', role: 'Trombone' },
  { name: 'Léo Pham', role: 'Guitare' },
  { name: 'Wyclif Ruhumuliza', role: 'Batterie' },
  { name: 'Jean Démurger', role: 'Basson' },
];

// date au format AAAA-MM-JJ. Les concerts passés basculent seuls dans « Passés ».
export const CONCERTS: { date: string; city: string; venue: string; url?: string }[] = [
  // { date: '2027-03-12', city: 'Sion', venue: 'Nom de la salle', url: 'https://billetterie…' },
];

export const PRESS_PHOTOS: { src?: string; alt: string; credit: string }[] = [
  { alt: 'Le quartet sur scène', credit: 'Photo : à renseigner' },
  { alt: 'Portrait de groupe', credit: 'Photo : à renseigner' },
  { alt: 'Détail instruments', credit: 'Photo : à renseigner' },
  { alt: 'Le quartet en répétition', credit: 'Photo : à renseigner' },
];

export const DOCS = [
  { title: 'Press kit', file: '/press/herrgoettli-quartet-presskit.pdf', note: 'Biographie, visuels, contacts (PDF)' },
  { title: 'Rider technique', file: '/press/herrgoettli-quartet-techrider.pdf', note: 'Plan de scène et besoins techniques (PDF)' },
];
