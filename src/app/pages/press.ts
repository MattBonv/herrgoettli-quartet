import { Component } from '@angular/core';
import { DOCS, PRESS_PHOTOS } from '../data';

@Component({
  template: `
    <div class="page">
      <h1 style="font-size:clamp(3rem,10vw,8rem)">Presse</h1>

      <h2 style="margin-top:3rem;font-size:2rem">Documents</h2>
      <div class="docs" style="margin-bottom:4rem">
        @for (d of docs; track d.file) {
          <a class="doc" [href]="d.file" download>
            <strong>{{ d.title }}</strong><span>{{ d.note }}</span>
          </a>
        }
      </div>

      <h2 style="font-size:2rem">Photos</h2>
      <div class="grid">
        @for (p of photos; track $index) {
          <figure>
            @if (p.src) { <img [src]="p.src" [alt]="p.alt" /> } @else { <div class="ph" role="img" [attr.aria-label]="p.alt"></div> }
            <figcaption>{{ p.credit }}</figcaption>
          </figure>
        }
      </div>
      <p>Photos libres de droits pour la presse, avec mention du crédit.</p>
    </div>
  `,
})
export class Press {
  docs = DOCS;
  photos = PRESS_PHOTOS;
}
