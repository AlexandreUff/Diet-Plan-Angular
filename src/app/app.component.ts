import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IcoContentComponent } from './component/ico-content/ico-content.component';
import Icons from '../assets/icons';
import { DomSanitizer } from '@angular/platform-browser';
import { LogoIconComponent } from './component/logo-icon/logo-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IcoContentComponent, LogoIconComponent],
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
  linkedin = this.sanitizer.bypassSecurityTrustHtml(Icons.linkedin('width="30px" height="30px" fill="#baffb4"'))
  github = this.sanitizer.bypassSecurityTrustHtml(Icons.github('width="30px" height="30px" fill="#baffb4"'))
  instagram = this.sanitizer.bypassSecurityTrustHtml(Icons.instagram('width="30px" height="30px" fill="#baffb4"'))
}
