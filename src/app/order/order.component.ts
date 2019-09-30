import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private orderSub: Subscription;
  orders = '';
  products = '';

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orderService.getAllOrder();
    this.orderSub = this.orderService.getAllUpdatedOrder().subscribe((orders: any) => {
      this.orders = orders;
      this.products = orders.products;
      console.log(orders);
    })


  }
}
