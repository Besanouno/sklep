import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {BasketService} from '../../service/BasketService';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket.preview.component.html',
  styleUrls: ['./basket.preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  private amount: string;
  private totalPrice: string;

  public constructor(
    private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.getTotalPrice().subscribe(
      data => this.totalPrice = data.toFixed(2)
    );
    this.basketService.getItems().subscribe(
      data => this.amount = data.length.toString()
    );
  }

}
