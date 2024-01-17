import { Component } from '@angular/core';
import { CarouselInputComponent } from '../../component/carousel-input/carousel-input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselInputComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
