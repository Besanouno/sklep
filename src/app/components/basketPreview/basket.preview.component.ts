import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Product} from '../../model/Product';
import {of} from 'rxjs/internal/observable/of';
import {BasketService} from '../../service/BasketService';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket.preview.component.html',
  styleUrls: ['./basket.preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  private amount: number;
  private totalPrice: number;

  public constructor(
    private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.getTotalPrice().subscribe(
      data => this.totalPrice = data
    );
    this.basketService.getItems().subscribe(
      data => this.amount = data.length
    );
  }

}
