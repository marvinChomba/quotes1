export class Quotes {
  public showDescription:boolean;
  public highestVote:boolean;
  constructor(public actual:string,public author:string,public upvote:number,public downvote:number,public date:Date,public submitter:string) {
    this.showDescription = false;
    this.highestVote = false;
  }
}
