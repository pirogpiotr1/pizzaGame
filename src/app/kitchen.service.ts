import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  doughBallCount:number;
  
  constructor() { 
    this.doughBallCount = 6;
  }

  getUserDoughBalls():number{
    return this.doughBallCount;
  }

}

