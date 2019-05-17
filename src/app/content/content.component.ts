import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private tamaño : number;
  private style : any;
  constructor() { 
  }
  
  ngOnInit() {
    let heightTotal = document.documentElement.clientHeight;
    let heightHeader = document.getElementById('header').clientHeight;
    let heightFooter = document.getElementById('footer').clientHeight;
    let tamaño = heightTotal - heightFooter - heightHeader +20;

    this.style = {
      height : tamaño
    }
  }

}
