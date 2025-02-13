import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

enum Activity {
  SEDENTARY = 1,
  SLIGHTLY = 2,
  MODERATELY = 3,
  HIGHLY = 4,
  EXTREMELY = 5,
}

interface UserDataType {
  weight?: number;
  height?: number;
  age?: number;
  activity?: Activity;
  sex?: 'male' | 'female';
  goal?: 'hypertrophy' | 'loseweight';
}

@Component({
  selector: 'app-carousel-input',
  standalone: true,
  imports: [NgStyle, FormsModule, CommonModule],
  templateUrl: './carousel-input.component.html',
  styleUrl: './carousel-input.component.scss',
})
export class CarouselInputComponent {
  public railPosition: number = 0;

  public userData: UserDataType = {
    weight: undefined,
    height: undefined,
    age: undefined,
    activity: 1,
    sex: 'male',
    goal: 'hypertrophy',
  };

  public changeRailPosition = (advance: boolean) => {
    const newValue = advance ? this.railPosition - 1 : this.railPosition + 1;
    if (newValue <= 0 && newValue > -9) this.railPosition = newValue;
    console.log('Posicionista:', this.railPosition);

    console.log(this.userData.sex);
  };

  public done = () => {
    console.log('FOIS 2!', this.userData);

    let errorMessage = '';
    const fieldsMissing: string[] = [];

    if (!this.userData.weight || !this.userData.height || !this.userData.age) {
      errorMessage = 'Falta(m) completar o(s) campo(s) de';

      if (!this.userData.weight) fieldsMissing.push('peso');
      if (!this.userData.height) fieldsMissing.push('altura');
      if (!this.userData.age) fieldsMissing.push('idade');

      fieldsMissing.forEach((field, i) => {
        if (fieldsMissing.length - 1 === i) {
          errorMessage += ` ${field}.`;
        } else {
          errorMessage += ` ${field},`;
        }
      });

      console.log(errorMessage);
    }
  };
}
