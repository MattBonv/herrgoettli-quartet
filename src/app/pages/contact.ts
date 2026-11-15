import { Component, inject, signal } from '@angular/core';
import { EMAIL, FORM_ENDPOINT } from '../data';
import { I18n } from '../i18n';

@Component({
  template: `
    @let c = i18n.t();
    <div class="page contact">
      <div>
        <h1 style="font-size:clamp(3rem,8vw,6rem)">{{ c.nav.contact }}</h1>
        <p style="margin-top:2rem">{{ c.contact.intro }}</p>
        <p><a [href]="'mailto:' + email">{{ email }}</a></p>
      </div>

      <form (submit)="send($event)">
        <label>{{ c.contact.name }} <input name="nom" required autocomplete="name" /></label>
        <label>{{ c.contact.email }} <input name="email" type="email" required autocomplete="email" /></label>
        <label>{{ c.contact.org }} <input name="organisation" /></label>
        <label>{{ c.contact.message }} <textarea name="message" required></textarea></label>
        <input class="hp" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <div><button class="btn" type="submit" [disabled]="state() === 'sending'">
          {{ state() === 'sending' ? c.contact.sending : c.contact.send }}
        </button></div>
        <div aria-live="polite">
          @if (state() === 'sent') { <p class="status">{{ c.contact.sent }}</p> }
          @if (state() === 'error') { <p class="status">{{ c.contact.error }} {{ email }}.</p> }
        </div>
      </form>
    </div>
  `,
})
export class Contact {
  i18n = inject(I18n);
  email = EMAIL;
  state = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async send(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    this.state.set('sending');
    try {
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      form.reset();
      this.state.set('sent');
    } catch {
      this.state.set('error');
    }
  }
}