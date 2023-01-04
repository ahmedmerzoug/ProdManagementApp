import { Component, OnInit } from "@angular/core";
import { IProduct } from "./Iproducts";


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
  products: IProduct [] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }]

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
        this.filtredProductsByName = this.products;
    }

    onRatingClicked(value : string) : void{
        this.productPageTitle = value;
    }
}