import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/vetnmas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  enMayusuculas: boolean = true;
  ordenarPor= 'nombre';

  heroes: Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Dardevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarEnMayusculas(): void {
    this.enMayusuculas = !this.enMayusuculas;
  }

  cambiarOrden ( valor: string): void{
    console.log(valor)
    this.ordenarPor= valor;
  }

}
