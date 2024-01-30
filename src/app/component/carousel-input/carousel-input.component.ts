import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-input',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './carousel-input.component.html',
  styleUrl: './carousel-input.component.scss'
})
export class CarouselInputComponent {
  valor = 5
  public railPosition: number = 0

  public changeRailPosition = (advance: boolean) => {
    advance ? this.railPosition-- : this.railPosition++
    console.log("Posicionista:", this.railPosition)
  }

}
