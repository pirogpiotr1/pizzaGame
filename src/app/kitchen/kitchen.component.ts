import { Component,OnInit} from '@angular/core';
import { KitchenService} from '../kitchen.service';
import { PizzaMainComponent } from '../pizza-main/pizza-main.component';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit  {

  pizzaDoughBallsCount:number

  constructor(private kitchenService:KitchenService) { 
  
  }

  getDoughBallsCount():void{
    this.pizzaDoughBallsCount = this.kitchenService.getUserDoughBalls();
  }

  ngOnInit() {
    this.getDoughBallsCount();
    console.log(this.pizzaDoughBallsCount);
  }

}
