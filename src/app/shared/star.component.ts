import { Component, EventEmitter, Input, OnChanges, Output, } from "@angular/core";

@Component({
    selector: 'pm-start', 
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })

  
export class StarComponent implements OnChanges{

    @Input() rating:number =0;
    cropWidth:number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter
    <string>();

    
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/4;
    }

    onClick() : void
    {
        this.ratingClicked.emit("stars"+this.rating);
    }
}