import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from "../quotes"
import * as $ from 'jquery';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes("","",0,0,new Date(),"");
  public invalid = false;
  @Output() addQuote = new EventEmitter<Quotes>();
  emitQuote() {
    if(this.newQuote.actual === "" || this.newQuote.author === "" || this.newQuote.submitter === "") {
      $("#invalid-text").show()
    } else if(!/([a-z]+)|(\s)/ig.test(this.newQuote.author)) {
      $("#invalid-text").hide()
      $("#one").show();
      $("#two").hide(); 
    } else if(!/([a-z]+)|(\s)/ig.test(this.newQuote.submitter)) {
      $("#one").hide()
      $("#invalid-text").hide()
      $("#two").show();
    }
    else {
      $(".text-invalid").hide();
      $("#invalid-text").hide()
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quotes("","",0,0,new Date(),"");
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
