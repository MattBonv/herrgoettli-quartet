import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MEMBERS } from '../data';
import { I18n } from '../i18n';

@Component({
  imports: [RouterLink],
  template: `
    @let c = i18n.t();
    <section class="hero">
      <h1>
        <picture>
          <source media="(min-width: 760px)" srcset="/images/logos/logo_horizontal.svg" />
          <img class="logo-hero" src="/images/logos/logo_white.svg" alt="Herrgöttli Quartet" />
        </picture>
      </h1>
      <p class="lead">{{ c.home.tagline }}</p>
    </section>

    <section class="panels" [attr.aria-label]="c.home.panels">
      @for (m of members; track $index) {
        <figure class="panel" tabindex="0">
          @if (m.photo) { <img [src]="m.photo" [alt]="m.name + ', ' + i18n.tr(m.role)" /> } @else { <div class="ph"></div> }
          <figcaption><strong>{{ m.name }}</strong><span>{{ i18n.tr(m.role) }}</span></figcaption>
        </figure>
      }
    </section>

    <section class="about">
      <h2>{{ c.home.about }}</h2>
      <div>
        @for (p of c.home.intro; track $index) { <p>{{ p }}</p> }
        <div class="cta">
          <a class="btn" routerLink="/concerts">{{ c.home.seeConcerts }}</a>
          <a class="btn ghost" routerLink="/contact">{{ c.home.contactUs }}</a>
        </div>
      </div>
    </section>
  `,
})
export class Home {
  i18n = inject(I18n);
  members = MEMBERS;
}