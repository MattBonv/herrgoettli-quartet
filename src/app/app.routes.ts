import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Concerts } from './pages/concerts';
import { Press } from './pages/press';
import { Contact } from './pages/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Herrgöttli Quartet' },
  { path: 'concerts', component: Concerts, title: 'Concerts · Herrgöttli Quartet' },
  { path: 'presse', component: Press, title: 'Presse · Herrgöttli Quartet' },
  { path: 'contact', component: Contact, title: 'Contact · Herrgöttli Quartet' },
  { path: '**', redirectTo: '' },
];
