import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  standalone: true,
  imports: [],
  templateUrl: './logo-icon.component.html',
  styleUrl: './logo-icon.component.scss',
  animations: [
    trigger('beat-heart', [
      state(
        'beat',
        style({
          trasform: 'scale(0.5)',
          fill: 'red',
        })
      ),
      transition('* => beat',animate('0.5s ease-out'))
    ]),
  ]
})

export class LogoIconComponent {
  logoAnimation = "beat"
}
