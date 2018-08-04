export class CARS {
 public title:string;
 public model:string;
 public year:number;
 public price:number;
 private isNew:boolean;
 private priceWithTax:number;
 constructor (title:string, model:string, year:number, price:number, isNew:boolean, priceWithTax:number){
     this.title = title;
     this.model = model;
     this.year = year;
     this.price = price;
     this.isNew = year>2012;
     this.priceWithTax = price*120;
 }

}