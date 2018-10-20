import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quotes"

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotesList = [
    new Quotes("If you don't know where you're going, DON'T GO","Marvin Chomba",0,0,new Date(2018,9,17),"Marvin"),
    new Quotes("Coding is like toothpaste","Raphael Katana",0,0,new Date(2018,9,18),"Zig Ziglar"),
    new Quotes("Manchester United is better than Chelsea","No One Ever",0,0,new Date(2018,9,19),"Marvin Chomba")
  ]
  add(quote) {
    this.quotesList.unshift(quote);
  }
  downVote(i) {
    this.quotesList[i].downvote++;
  }
  upVote(i) {
    this.quotesList[i].upvote++;
  }
  deleteQuote(i) {
    this.quotesList.splice(i,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
