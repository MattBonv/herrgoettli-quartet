import { Component, inject } from '@angular/core';
import { DOCS, PRESS_PHOTOS } from '../data';
import { I18n } from '../i18n';

@Component({
  template: `
    @let c = i18n.t();
    <div class="page">
      <h1 style="font-size:clamp(3rem,10vw,8rem)">{{ c.nav.press }}</h1>

      <h2 style="margin-top:3rem;font-size:2rem">{{ c.press.docs }}</h2>
      <div class="docs" style="margin-bottom:4rem">
        @for (d of docs; track d.file) {
          <a class="doc" [href]="d.file" download>
            <strong>{{ i18n.tr(d.title) }}</strong><span>{{ i18n.tr(d.note) }}</span>
          </a>
        }
      </div>

      <h2 style="font-size:2rem">{{ c.press.photos }}</h2>
      <div class="grid">
        @for (p of photos; track $index) {
          <figure>
            @if (p.src) { <img [src]="p.src" [alt]="i18n.tr(p.alt)" /> } @else { <div class="ph" role="img" [attr.aria-label]="i18n.tr(p.alt)"></div> }
            <figcaption>{{ i18n.tr(p.credit) }}</figcaption>
          </figure>
        }
      </div>
      <p>{{ c.press.note }}</p>
    </div>
  `,
})
export class Press {
  i18n = inject(I18n);
  docs = DOCS;
  photos = PRESS_PHOTOS;
}