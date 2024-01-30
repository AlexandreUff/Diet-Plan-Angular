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
    const newValue = advance ? this.railPosition - 1 : this.railPosition + 1
    if(newValue <= 0) this.railPosition = newValue
    console.log("Posicionista:", this.railPosition)
  }

}
