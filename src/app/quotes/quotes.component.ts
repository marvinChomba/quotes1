import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quotes"

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotesList = [
    new Quotes("If you don't know where you're going, DON'T GO","Marvin Chomba",0,0,new Date(2018,9,19),"Marvin"),
    new Quotes("Coding is like toothpaste","Raphael Katana",0,0,new Date(2018,9,18),"Zig Ziglar"),
    new Quotes("Manchester United is better than Chelsea","No One Ever",0,0,new Date(2018,9,17),"Marvin Chomba")
  ]
  highestArr:any[]
  highestVotes() {
    this.highestArr = this.quotesList.map(element => {
      return element.upvote;
    });
    let numHigh = Math.max(...this.highestArr);
    this.quotesList.forEach(element => {
      if(element.upvote === numHigh && numHigh >= 5) {
        element.highestVote = true;
      } else {
        element.highestVote = false;
      }
    });
    
  }
  
  add(quote) {
    this.quotesList.unshift(quote);
  }
  downVote(i) {
    this.quotesList[i].downvote++;
  }
  upVote(i) {
    this.quotesList[i].upvote++;
    this.highestVotes();

  }
  deleteQuote(i) {
    this.quotesList.splice(i,1);
  }
  constructor() {}

  ngOnInit() {
  }

}
