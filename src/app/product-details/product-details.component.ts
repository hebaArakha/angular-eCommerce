import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }
  product: any = {};
  rating: string = '';
  productId: string = this.route.snapshot.params['id'];
  ngOnInit() {

    this.productsService.getSingleProduct(this.productId)
      .subscribe((res) => this.product = res
      )

    this.rating = ((this.product.rating / 5) * 100) + '%';
  }

  // this.product = this.products.find(product => product.id === Number(productId));

}
