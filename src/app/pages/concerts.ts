import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { CONCERTS } from '../data';

@Component({
  template: `
    <div class="page">
      <h1 style="font-size:clamp(3rem,10vw,8rem)">Concerts</h1>
      <h2 style="margin-top:3rem;font-size:2rem">À venir</h2>
      @if (upcoming.length) {
        <ul class="shows">
          @for (c of upcoming; track c.date + c.venue) { <ng-container *ngTemplateOutlet="row; context: { c }" /> }
        </ul>
      } @else {
        <p class="empty">Aucune date annoncée pour le moment. Revenez bientôt, ou écrivez-nous pour organiser un concert.</p>
      }
      @if (past.length) {
        <h2 style="font-size:2rem">Passés</h2>
        <ul class="shows past">
          @for (c of past; track c.date + c.venue) { <ng-container *ngTemplateOutlet="row; context: { c }" /> }
        </ul>
      }
    </div>

    <ng-template #row let-c="c">
      <li class="show">
        <time [attr.datetime]="c.date">{{ fmt(c.date) }}</time>
        <span class="where">{{ c.venue }}<small>{{ c.city }}</small></span>
        @if (c.url) { <a class="btn ghost" [href]="c.url" target="_blank" rel="noopener">Billets</a> }
      </li>
    </ng-template>
  `,
  imports: [NgTemplateOutlet],
})
export class Concerts {
  private today = new Date().toISOString().slice(0, 10);
  upcoming = CONCERTS.filter(c => c.date >= this.today).sort((a, b) => a.date.localeCompare(b.date));
  past = CONCERTS.filter(c => c.date < this.today).sort((a, b) => b.date.localeCompare(a.date));
  fmt(d: string) {
    return new Date(d + 'T12:00:00').toLocaleDateString('fr-CH', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
