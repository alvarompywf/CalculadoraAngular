import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Calculadora en Angular';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar():void  {

    this.resultado  = this.numero1  + this.numero2 ;

  }

  restar():void  {

    this.resultado  =this.numero1  - this.numero2 ;

  }

  multiplicar():void  {

    this.resultado  = this.numero1  * this.numero2 ;

  }

  dividir():void  {

    this.resultado  = this.numero1  / this.numero2 ;

  }
}
