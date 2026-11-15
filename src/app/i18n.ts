import { Injectable, computed, signal } from '@angular/core';
import { L, Lang, TEXT } from './data';

export const LANGS: Lang[] = ['fr', 'de', 'en'];
const LOCALES: L = { fr: 'fr-CH', de: 'de-CH', en: 'en-GB' };

@Injectable({ providedIn: 'root' })
export class I18n {
  lang = signal<Lang>(this.initial());
  /** Tous les textes de la langue active */
  t = computed(() => TEXT[this.lang()]);

  constructor() {
    document.documentElement.lang = this.lang();
  }

  private initial(): Lang {
    try {
      const saved = localStorage.getItem('lang') as Lang;
      if (LANGS.includes(saved)) return saved;
    } catch {}
    const browser = navigator.language.slice(0, 2) as Lang;
    return LANGS.includes(browser) ? browser : 'fr';
  }

  set(l: Lang) {
    this.lang.set(l);
    document.documentElement.lang = l;
    try { localStorage.setItem('lang', l); } catch {}
  }

  /** Choisit la bonne langue dans un objet { fr, de, en } */
  tr(x: L): string { return x[this.lang()]; }

  date(d: string): string {
    return new Date(d + 'T12:00:00').toLocaleDateString(LOCALES[this.lang()], { day: 'numeric', month: 'short', year: 'numeric' });
  }
}