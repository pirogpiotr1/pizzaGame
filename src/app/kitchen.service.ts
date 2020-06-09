import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

export interface doughBall{
  type:string
}

export interface doughBalls extends Array<doughBall>{}

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  doughBalls:doughBall[];

  constructor() { 
    //hard coded for now
    this.doughBalls = [
      {type:'basic'},
      {type:'basic'},
      {type:'basic'},
      {type:'basic'},
      {type:'basic'},
      {type:'basic'},
    ];
  }

  getUserDoughBalls():doughBall[]{
    return this.doughBalls;
  }

}

