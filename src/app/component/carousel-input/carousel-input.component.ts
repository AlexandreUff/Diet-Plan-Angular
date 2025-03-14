import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  UserDataActivity,
  UserDataGoal,
  UserDataSex,
  UserDataType,
} from '../../types/UserData';
import Result from '../../services/result';

type UserDataInput = Omit<UserDataType, 'weight' | 'height' | 'age'> & {
  weight?: number;
  height?: number;
  age?: number;
};

@Component({
  selector: 'app-carousel-input',
  standalone: true,
  imports: [NgStyle, FormsModule, CommonModule],
  templateUrl: './carousel-input.component.html',
  styleUrl: './carousel-input.component.scss',
})
export class CarouselInputComponent {
  constructor(private router: Router) {}

  public UserDataActivity = UserDataActivity;
  public UserDataSex = UserDataSex;
  public UserDataGoal = UserDataGoal;

  public railPosition: number = 0;

  public userData: UserDataInput = {
    weight: undefined,
    height: undefined,
    age: undefined,
    activity: UserDataActivity.SEDENTARY,
    sex: UserDataSex.MALE,
    goal: UserDataGoal.HYPERTROPHY,
  };

  public errorMessage: string = '';

  public changeRailPosition = (advance: boolean) => {
    this.errorMessage = '';
    const newValue = advance ? this.railPosition - 1 : this.railPosition + 1;
    if (newValue <= 0 && newValue > -9) this.railPosition = newValue;
  };

  public done = () => {
    const fieldsMissing: string[] = [];

    if (!this.userData.weight || !this.userData.height || !this.userData.age) {
      this.errorMessage = 'Falta completar o(s) campo(s) de';

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

    this.router.navigate(['/result', { ...this.userData }]);
  };
}
