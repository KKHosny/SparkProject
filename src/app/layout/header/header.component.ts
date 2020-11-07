import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  option={Eng :true, AR : false}
  ngOnInit(): void {
  }
 openNav() {
   
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("home").style.marginLeft="250px";
}
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("home").style.marginLeft = "0px";

  }
  opt(int){
    if (int==0) {
      if (this.option.Eng != true) {
        this.option.Eng=true;
        this.option.AR=false;
      }
    }
    else{
      if (this.option.AR != true) {
        this.option.Eng = false;
        this.option.AR = true;
      }
    }
  }
}
