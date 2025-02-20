import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataGoal, UserDataType } from '../../types/UserData';
import { CommonModule } from '@angular/common';
import Result from '../../services/result';
import { UserResult } from '../../types/Result';
import { ActivedFrequenceTextShow } from '../../services/activedFrequence';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  constructor(private activedRoute: ActivatedRoute) {}

  public userDataGoal = UserDataGoal;

  public userData: UserDataType = {
    weight: +this.activedRoute.snapshot.params['weight'],
    height: +this.activedRoute.snapshot.params['height'],
    age: +this.activedRoute.snapshot.params['age'],
    activity: +this.activedRoute.snapshot.params['activity'],
    sex: this.activedRoute.snapshot.params['sex'],
    goal: this.activedRoute.snapshot.params['goal'],
  };

  public isFilledUserDatas =
    this.userData.activity &&
    this.userData.age &&
    this.userData.goal &&
    this.userData.height &&
    this.userData.sex &&
    this.userData.weight;

  public UserResult: UserResult = Result(this.userData as UserDataType);

  public ActivedFrequenceTextShow = ActivedFrequenceTextShow;

  public showResult = () => {
    console.log('USER-RESULTO', this.UserResult);
  };

  ngOnInit() {
    this.showResult();
  }
}
