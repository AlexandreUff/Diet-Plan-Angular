import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface userDataType {
  weight?: number,
  height?: number,
  age?: number,
  activity?: number,
  sex?: "male" | "female",
  goal?: "hypertrophy" | "loseweight"
}

@Component({
  selector: 'app-carousel-input',
  standalone: true,
  imports: [NgStyle, FormsModule, CommonModule],
  templateUrl: './carousel-input.component.html',
  styleUrl: './carousel-input.component.scss'
})
export class CarouselInputComponent {
  public railPosition: number = 0

  public userData: userDataType = {
    weight: undefined,
    height: undefined,
    age: undefined,
    activity: 1,
    sex: "male",
    goal: "hypertrophy"
  }

  public changeRailPosition = (advance: boolean) => {
    const newValue = advance ? this.railPosition - 1 : this.railPosition + 1
    if(newValue <= 0 && newValue > -9) this.railPosition = newValue
    console.log("Posicionista:", this.railPosition)

    console.log(this.userData.sex)
  }

  public test = () => {
    console.log("FOIS 2!")
  }

}
