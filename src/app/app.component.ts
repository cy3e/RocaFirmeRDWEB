import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Plataformas', url: '/folder/Outbox', icon: 'play' },
    { title: 'Contacto', url: '/folder/Favorites', icon: 'call' },
    { title: 'Nuestro Ministerio', url: '/folder/Archived', icon: 'information' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
