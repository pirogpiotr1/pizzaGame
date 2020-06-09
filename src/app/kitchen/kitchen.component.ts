import { Component,OnInit} from '@angular/core';
import { KitchenService, doughBalls} from '../kitchen.service';
import { PizzaMainComponent } from '../pizza-main/pizza-main.component';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit  {

  pizzaDoughBalls:doughBalls;

  constructor(private kitchenService:KitchenService) { 
  
  }

  getDoughBallsCount():void{
    this.pizzaDoughBalls = this.kitchenService.getUserDoughBalls();
  }

  ngOnInit() {
    this.getDoughBallsCount();
  }

}
