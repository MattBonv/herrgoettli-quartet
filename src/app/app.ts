import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EMAIL } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="bar">
      <a routerLink="/" class="brand">
        <picture>
          <source media="(min-width: 760px)" srcset="/images/logos/logo_hq_white.svg" />
          <img class="logo-bar" src="/images/logos/logo_hq_white.svg" alt="Accueil" />
        </picture>
      </a>
      <nav aria-label="Navigation principale">
        <a routerLink="/concerts" routerLinkActive="on">Concerts</a>
        <a routerLink="/presse" routerLinkActive="on">Presse</a>
        <a routerLink="/contact" routerLinkActive="on">Contact</a>
      </nav>
    </header>
    <main><router-outlet /></main>
    <footer class="foot">
      <a [href]="'mailto:' + email">{{ email }}</a>
      <span>© {{ year }} Herrgöttli Quartet</span>
    </footer>
  `,
})
export class App {
  email = EMAIL;
  year = new Date().getFullYear();
}
