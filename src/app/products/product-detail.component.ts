import { Component, OnInit } from '@angular/core';

 import { ActivatedRoute, Router } from '@angular/router';
 import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:IProduct;
  pageTitle = 'Product Detail';
  constructor(private route:ActivatedRoute,private router:Router ) {}

  ngOnInit(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle +=`: ${id}`
    this.product = {
      'productId':id,
      'productName':'Leaf Rake',
      'productCode': 'GND-0011',
      'releaseDate':'March 19, 2029',
      'description':'Leaf rake with 48-inch wooden handle.',
      'price':19.95,
      'starRating': 3.2,
      'imageUrl':'assets/images/leaf_rake.png'
    }
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
