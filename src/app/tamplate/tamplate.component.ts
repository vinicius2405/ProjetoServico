import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamplate',
  templateUrl: './tamplate.component.html',
  styleUrls: ['./tamplate.component.css']
})
export class TamplateComponent implements OnInit {

  Storage : Storage = localStorage;
  logado!:boolean;
  constructor() { }

  ngOnInit(): void {

    if(this.Storage.length > 0 ){
      this.logado = true;
    }else{
      this.logado = false
    }
  }


  deslogar(){
    this.Storage.clear();
    location.reload();
  }

}
