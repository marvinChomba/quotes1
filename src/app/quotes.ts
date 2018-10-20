export class Quotes {
  public showDescription:boolean;
  public highest:boolean;
  constructor(public actual:string,public author:string,public upvote:number,public downvote:number,public date:Date,public submitter:string) {
    this.showDescription = false;
    this.highest = false;
  }
}
