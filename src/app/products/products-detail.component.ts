import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './Iproducts';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  pageTitle:string = "Prouct name is : " 
  product: IProduct | undefined

  constructor(private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var id = Number(this.rout.snapshot.paramMap.get('id'));
    this.pageTitle +=id; 
  }

  onBackButton() :void{
    this.router.navigate(['/products']);

  }

}
