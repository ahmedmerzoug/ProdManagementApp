import { Injectable } from "@angular/core";
import { IProduct } from "./Iproducts";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";


@Injectable(
    {
        providedIn : "root"
    }
)
export class ProductService {

    private productUrl:string = "api/products/products.json";

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> { 
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All',JSON.stringify(data))),
            catchError(this.handleError)
        );

    }

    handleError(err : HttpErrorResponse)
    {
        return throwError("error");
    } 


}