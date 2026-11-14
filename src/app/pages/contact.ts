import { Component, signal } from '@angular/core';
import { EMAIL, FORM_ENDPOINT } from '../data';

@Component({
  template: `
    <div class="page contact">
      <div>
        <h1 style="font-size:clamp(3rem,8vw,6rem)">Contact</h1>
        <p style="margin-top:2rem">Booking, presse, questions : écrivez-nous. Indiquez la date et le lieu si c'est pour un concert.</p>
        <p><a [href]="'mailto:' + email">{{ email }}</a></p>
      </div>

      <form (submit)="send($event)">
        <label>Nom <input name="nom" required autocomplete="name" /></label>
        <label>E-mail <input name="email" type="email" required autocomplete="email" /></label>
        <label>Organisation ou lieu <input name="organisation" /></label>
        <label>Message <textarea name="message" required></textarea></label>
        <input class="hp" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <div><button class="btn" type="submit" [disabled]="state() === 'sending'">
          {{ state() === 'sending' ? 'Envoi en cours' : 'Envoyer le message' }}
        </button></div>
        <div aria-live="polite">
          @if (state() === 'sent') { <p class="status">Message envoyé. Nous répondons en général sous quelques jours.</p> }
          @if (state() === 'error') { <p class="status">L'envoi a échoué. Écrivez-nous directement à {{ email }}.</p> }
        </div>
      </form>
    </div>
  `,
})
export class Contact {
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
