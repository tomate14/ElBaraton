import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuuser',
  templateUrl: './menuuser.component.html',
  styleUrls: ['./menuuser.component.css']
})
export class MenuuserComponent implements OnInit {

  private _nombre:string;
  constructor() { 
    this._nombre = "Maximiliano Roselli";
  }

  ngOnInit() {
  }

}
