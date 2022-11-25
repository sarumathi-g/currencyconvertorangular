import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyconvertor';
  src = ["inr","usd","eur","aud","rub"]
  target=["inr","usd","eur","aud","rub"]
  // selectlogo:any;
  // chooselogo:any;
  num!:number;
  res?:number;
  name:any;
  name1:any;
  sub(val1:string,val2:string, num: number){
    console.log(val1,val2,num)
    //inr
    if(val1=="inr" && val2=="usd"){
      this.res=this.num*0.012;
    }
    else if(val1=="inr" && val2=="eur"){
      this.res=this.num*0.013;
    }
    else if(val1=="inr" && val2=="aud"){
      this.res=this.num*0.019;
    }
    else if(val1=="inr" && val2=="rub"){
      this.res=this.num*0.76;
    }
// usd
    else if(val1=="usd" && val2=="inr"){
      this.res=this.num*82.32;
    }
    else if(val1=="usd" && val2=="eur"){
      this.res=this.num*1.03;
    }
    else if(val1=="usd" && val2=="aud"){
      this.res=this.num*1.60;
    }
    else if(val1=="usd" && val2=="rub"){
      this.res=this.num*62.25;
    }
// eur
    else if(val1=="eur" && val2=="inr"){
      this.res=this.num*81.07;
    }
    else if(val1=="eur" && val2=="usd"){
      this.res=this.num*0.99;
    }
    else if(val1=="eur" && val2=="aud"){
      this.res=this.num*1.57;
    }
    else if(val1=="eur" && val2=="rub"){
      this.res=this.num*61.35;
    }

// aud
    else if(val1=="aud" && val2=="inr"){
      this.res=this.num*51.84;
    }
    else if(val1=="aud" && val2=="usd"){
      this.res=this.num*0.63;
    }
    else if(val1=="aud" && val2=="eur"){
      this.res=this.num*0.65;
    }
    else if(val1=="aud" && val2=="rub"){
      this.res=this.num*39.22;
    }
    // rub
    else if(val1=="rub" && val2=="inr"){
      this.res=this.num*1.32;
    }
    else if(val1=="rub" && val2=="usd"){
      this.res=this.num*0.016;
    }
    else if(val1=="rub" && val2=="eur"){
      this.res=this.num*0.016;
    }
    else if(val1=="rub" && val2=="aud"){
      this.res=this.num*0.025;
    }
    else if((val1=="inr" && val2=="inr")||(val1=="usd" && val2=="usd")||(val1=="eur" && val2=="eur")||(val1=="aud" && val2=="aud")||(val1=="rub" && val2=="rub"))
    {
      this.res=this.num;
    }
  }

}

