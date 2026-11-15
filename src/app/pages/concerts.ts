import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CONCERTS } from '../data';
import { I18n } from '../i18n';

@Component({
  imports: [NgTemplateOutlet],
  template: `
    @let c = i18n.t();
    <div class="page">
      <h1 style="font-size:clamp(3rem,10vw,8rem)">{{ c.nav.concerts }}</h1>
      <h2 style="margin-top:3rem;font-size:2rem">{{ c.concerts.upcoming }}</h2>
      @if (upcoming.length) {
        <ul class="shows">
          @for (s of upcoming; track s.date + s.venue) { <ng-container *ngTemplateOutlet="row; context: { s }" /> }
        </ul>
      } @else {
        <p class="empty">{{ c.concerts.empty }}</p>
      }
      @if (past.length) {
        <h2 style="font-size:2rem">{{ c.concerts.past }}</h2>
        <ul class="shows past">
          @for (s of past; track s.date + s.venue) { <ng-container *ngTemplateOutlet="row; context: { s }" /> }
        </ul>
      }
    </div>

    <ng-template #row let-s="s">
      <li class="show">
        <time [attr.datetime]="s.date">{{ i18n.date(s.date) }}</time>
        <span class="where">{{ s.venue }}<small>{{ s.city }}</small></span>
        @if (s.url) { <a class="btn ghost" [href]="s.url" target="_blank" rel="noopener">{{ i18n.t().concerts.tickets }}</a> }
      </li>
    </ng-template>
  `,
})
export class Concerts {
  i18n = inject(I18n);
  private today = new Date().toISOString().slice(0, 10);
  upcoming = CONCERTS.filter(s => s.date >= this.today).sort((a, b) => a.date.localeCompare(b.date));
  past = CONCERTS.filter(s => s.date < this.today).sort((a, b) => b.date.localeCompare(a.date));
}