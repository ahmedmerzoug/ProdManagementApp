import { Component, OnInit } from "@angular/core";
import { IProduct } from "./Iproducts";
import { ProductService } from "./product.service";


@Component({
  selector: 'pm-product', 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  
  productPageTitle: string = "Test Product List"
  imageWidth: number = 50
  imageMargin=  2
  showImage = false
  
  private _listFilter : string =""
  get listFilter() : string
  {
    return this._listFilter;
  }
  
  set listFilter(value : string) 
  {
    this._listFilter = value;
    console.log("is setters", value);
    this.filtredProductsByName = this.performFilterByName(value);
  }

  filtredProductsByName :IProduct [] = [];
  products: IProduct [] = [];

    constructor(private productservice : ProductService)
    {}
    toggleImage() : void
    {
        this.showImage = !this.showImage;
        this._listFilter = "";
    }

    performFilterByName(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((x : IProduct) =>x.productName.toLowerCase()
        .includes(filterBy))
    }
    
    ngOnInit(): void {
        console.log("Method not implemented.!");
        this.products = this.productservice.getProducts();
        this.filtredProductsByName = this.products;
        
    }

    onRatingClicked(value : string) : void{
        this.productPageTitle = value;
    }

   
}