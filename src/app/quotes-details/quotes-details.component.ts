import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quotesList:Quotes[];
  @Output() upVote = new EventEmitter();
  @Output() downVote  = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  
  showDetails(i) {
    this.quotesList[i].showDescription = !this.quotesList[i].showDescription
  }
  toUpVote(up,i) {
    this.upVote.emit(i);
  }
  toDownVote(down,i) {
    this.downVote.emit(i);
  }
  
  constructor() { }

  ngOnInit() {
  }
  
  

}
