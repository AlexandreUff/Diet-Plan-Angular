import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IcoContentComponent } from './component/ico-content/ico-content.component';
import Icons from '../assets/icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IcoContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /* styles: `
    :host {
      background-image: url('../assets/images/pexels-victor-freitas-949126.jpg');
      background-size: 100%;
    }
  `, */
  /* template: `
    <p>Teste</p>
    <router-outlet></router-outlet>
  ` */
})
export class AppComponent {

  constructor(private sanitizer: DomSanitizer){}

  title = 'diet-plan';
  logo = this.sanitizer.bypassSecurityTrustHtml(Icons.logo('width="55px" height="55px" fill="#baffb4"'))
}
