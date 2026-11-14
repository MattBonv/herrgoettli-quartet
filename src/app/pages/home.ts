import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT, MEMBERS, TAGLINE } from '../data';

@Component({
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>
        <picture>
          <source media="(min-width: 760px)" srcset="/images/logos/logo_horizontal.svg" />
          <img class="logo-hero" src="/images/logos/logo_white.svg" alt="Herrgöttli Quartet" />
        </picture>
      </h1>
      <p class="lead">{{ tagline }}</p>
    </section>

    <section class="panels" aria-label="Les quatre musiciens">
      @for (m of members; track $index) {
        <figure class="panel" tabindex="0">
          @if (m.photo) { <img [src]="m.photo" [alt]="m.name + ', ' + m.role" /> } @else { <div class="ph"></div> }
          <figcaption><strong>{{ m.name }}</strong><span>{{ m.role }}</span></figcaption>
        </figure>
      }
    </section>

    <section class="about">
      <h2>Le groupe</h2>
      <div>
        @for (p of about; track $index) { <p>{{ p }}</p> }
        <div class="cta">
          <a class="btn" routerLink="/concerts">Voir les concerts</a>
          <a class="btn ghost" routerLink="/contact">Nous contacter</a>
        </div>
      </div>
    </section>
  `,
})
export class Home {
  tagline = TAGLINE;
  members = MEMBERS;
  about = ABOUT;
}
