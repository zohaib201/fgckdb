import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.component.html',
  styleUrls: ['./showorder.component.scss']
})
export class ShoworderComponent implements OnInit {
  private orderSub: Subscription;
  orderId: any;
  orderData = {
    id: '',
    status: '',
    totalAmount : '',
    discount: ''


  }
  localOrderData: any;
  url = environment.baseUrl;

  order: any;


  constructor(private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.orderId;

    this.orderService.getByid(this.orderId);
    this.orderSub = this.orderService.getUpdatedOrder().subscribe((order: any) => {
      this.orderData = order;
      this.order = order;

      console.log(order);



    });

  }

}
