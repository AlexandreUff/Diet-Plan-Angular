import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  UserDataActivity,
  UserDataGoal,
  UserDataSex,
  UserDataType,
} from '../../types/UserData';
import Result from '../../services/result';

@Component({
  selector: 'app-carousel-input',
  standalone: true,
  imports: [NgStyle, FormsModule, CommonModule],
  templateUrl: './carousel-input.component.html',
  styleUrl: './carousel-input.component.scss',
})
export class CarouselInputComponent {
  public UserDataActivity = UserDataActivity;
  public UserDataSex = UserDataSex;
  public UserDataGoal = UserDataGoal;

  public railPosition: number = 0;

  public userData: UserDataType = {
    weight: 0, // Ver isso aqui
    height: 0, // Ver isso aqui
    age: 0, // Ver isso aqui
    activity: 1,
    sex: UserDataSex.MALE,
    goal: UserDataGoal.HYPERTROPHY,
  };

  public errorMessage: string = '';

  public changeRailPosition = (advance: boolean) => {
    this.errorMessage = '';
    const newValue = advance ? this.railPosition - 1 : this.railPosition + 1;
    if (newValue <= 0 && newValue > -9) this.railPosition = newValue;
    console.log('Posicionista:', this.railPosition);

    console.log(this.userData.sex);
  };

  public done = () => {
    console.log('userData: ', this.userData);

    const fieldsMissing: string[] = [];

    if (!this.userData.weight || !this.userData.height || !this.userData.age) {
      this.errorMessage = 'Falta(m) completar o(s) campo(s) de';

      if (!this.userData.weight) fieldsMissing.push('peso');
      if (!this.userData.height) fieldsMissing.push('altura');
      if (!this.userData.age) fieldsMissing.push('idade');

      fieldsMissing.forEach((field, i) => {
        if (fieldsMissing.length - 1 === i) {
          this.errorMessage += ` ${field}.`;
        } else {
          this.errorMessage += ` ${field},`;
        }
      });

      return;
    }

    console.log(Result(this.userData));
  };
}
