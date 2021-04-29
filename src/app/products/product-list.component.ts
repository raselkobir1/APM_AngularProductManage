import { ProductService } from './product.Service';
import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'

@Component({
    //selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{ 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;
    _listFilter = '';

    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts:IProduct[];
    products:IProduct[];
      toggleImage():void{
        this.showImage =!this.showImage;
      }
     
      performFilter(filterby:string):IProduct[]{
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterby) !==-1)
      }
      
      constructor(private productSrv: ProductService){
        //this.listFilter='cart';
      }
      onRatingClicked(message:string):void{
        this.pageTitle='Product List :'+ message;
      }
      ngOnInit(): void {
        this.productSrv.getProduct().subscribe({
          next:products => {
            this.products=products,
            this.filteredProducts =this.products;
          },
          error:err=>this.errorMessage=err
        });
        
        console.log('This is from OnInit');
      }
}