import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string = 'alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreCompleto: string = 'aLeJandRo HuerTaS';

  fecha: Date = new Date();//El día de hoy

}
