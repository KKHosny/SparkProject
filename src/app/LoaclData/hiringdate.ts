export class Hiringdate {
    date:string;
    time:string;
    arr;
    test;
    constructor(fuldate){
    this.arr=fuldate;
       this.setdatetime();
    }
    setdatetime()
    {
       console.log("enter");
       
       this.test=this.arr.split("T");
       this.date=this.test[0];
       this.time=this.test[1];
   
    }
}
