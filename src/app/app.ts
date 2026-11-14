import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EMAIL } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="bar">
      <a routerLink="/" class="brand">Herrgöttli Quartet</a>
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
