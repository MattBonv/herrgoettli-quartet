import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EMAIL, Lang } from './data';
import { I18n, LANGS } from './i18n';
import { SWISS } from './swiss-map';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgTemplateOutlet],
  host: {
    '(document:keydown.escape)': 'closeAll()',
    '(document:click)': 'onDocClick($event)',
  },
  template: `
    @let c = i18n.t();
    <header class="bar">
      <a routerLink="/" class="brand">
        <picture>
          <source media="(min-width: 760px)" srcset="/images/logos/logo_hq_white.svg" />
          <img class="logo-bar" src="/images/logos/logo_hq_white.svg" alt="Herrgöttli Quartet" />
        </picture>
      </a>
      <nav>
        <a routerLink="/concerts" routerLinkActive="on">{{ c.nav.concerts }}</a>
        <a routerLink="/presse" routerLinkActive="on">{{ c.nav.press }}</a>
        <a routerLink="/contact" routerLinkActive="on">{{ c.nav.contact }}</a>
        <ng-container *ngTemplateOutlet="picker; context: { big: false }" />
      </nav>
    </header>

    <main><router-outlet /></main>

    <footer class="foot">
      <a [href]="'mailto:' + email">{{ email }}</a>
      <span>© {{ year }} Herrgöttli Quartet</span>
    </footer>

    @if (open()) {
      <div class="overlay" role="dialog" aria-modal="true" [attr.aria-label]="c.nav.lang">
        <button type="button" class="close" (click)="open.set(false)" [attr.aria-label]="closeLabels[i18n.lang()]">✕</button>
        <ng-container *ngTemplateOutlet="picker; context: { big: true }" />
      </div>
    }

    <!-- Sélecteur de langue : utilisé dans la barre et en plein écran -->
    <ng-template #picker let-big="big">
      <div class="swiss" [class.big]="big">
        <svg [attr.viewBox]="map.viewBox" role="group" [attr.aria-label]="c.nav.lang">
          @for (r of regions; track r.lang) {
            <path class="reg" [class.on]="i18n.lang() === r.lang" [attr.d]="r.d"
                  role="button" tabindex="0" [attr.aria-label]="r.label" [attr.aria-pressed]="i18n.lang() === r.lang"
                  (click)="fromMap(r.lang, big)" (keydown.enter)="fromMap(r.lang, big)" (keydown.space)="fromMap(r.lang, big, $event)">
              <title>{{ r.label }}</title>
            </path>
          }
          <path class="reg off" [attr.d]="map.ticino"><title>Presto… (bientôt / bald / soon)</title></path>
          @if (big) {
            <text class="map-label" x="30" y="98" text-anchor="middle">Romand</text>
            <text class="map-label" x="128" y="52" text-anchor="middle">Schwiizerdütsch</text>
          }
        </svg>

        @if (big) {
          <ul class="menu-list">
            @for (l of langs; track l) {
              <li><button type="button" class="opt" [class.on]="i18n.lang() === l" (click)="choose(l)">{{ names[l] }}</button></li>
            }
          </ul>
        } @else {
          <div class="langmenu">
            <button type="button" class="langbtn" (click)="menu.set(!menu())"
                    aria-haspopup="true" [attr.aria-expanded]="menu()"
                    [attr.aria-label]="c.nav.lang + ': ' + names[i18n.lang()]">
              <span class="lbl">
                @for (l of langs; track l) { <span [class.cur]="l === i18n.lang()">{{ names[l] }}</span> }
              </span>
              <span class="chev" aria-hidden="true">▾</span>
            </button>
            @if (menu()) {
              <ul class="menu">
                @for (l of langs; track l) {
                  <li><button type="button" class="opt" [class.on]="i18n.lang() === l" (click)="choose(l)">{{ names[l] }}</button></li>
                }
              </ul>
            }
          </div>
        }
      </div>
    </ng-template>
  `,
})
export class App {
  i18n = inject(I18n);
  email = EMAIL;
  year = new Date().getFullYear();
  map = SWISS;
  langs = LANGS;
  open = signal(false);   // carte en plein écran (téléphone)
  menu = signal(false);   // menu déroulant des langues

  names: Record<Lang, string> = { fr: 'Romand', de: 'Schwiizerdütsch', en: 'English' };
  closeLabels: Record<Lang, string> = { fr: 'Fermer', de: 'Schliessen', en: 'Close' };
  regions: { lang: Lang; d: string; label: string }[] = [
    { lang: 'fr', d: SWISS.romand, label: 'Romand' },
    { lang: 'de', d: SWISS.german, label: 'Schwiizerdütsch' },
  ];

  /** Clic sur la carte : sur téléphone (petite carte) ça l'ouvre en plein écran, sinon ça choisit la langue. */
  fromMap(l: Lang, inOverlay: boolean, e?: Event) {
    e?.preventDefault();
    this.menu.set(false);
    if (!inOverlay && matchMedia('(max-width: 760px)').matches) {
      this.open.set(true);
      return;
    }
    this.choose(l);
  }

  choose(l: Lang) {
    this.i18n.set(l);
    this.closeAll();
  }

  closeAll() {
    this.open.set(false);
    this.menu.set(false);
  }

  /** Ferme le menu déroulant quand on clique en dehors. */
  onDocClick(e: Event) {
    if (!(e.target as Element).closest('.langmenu')) this.menu.set(false);
  }
}