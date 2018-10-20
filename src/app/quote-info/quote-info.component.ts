import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  @Input() quoteDet:Quotes;
  @Input() index:number;
  @Output() upvote = new EventEmitter();
  @Output() downvote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
