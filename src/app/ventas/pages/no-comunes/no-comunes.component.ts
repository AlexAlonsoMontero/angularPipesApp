import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18nSelect
  nombre:string = 'Susana';
  genero: string = 'femenino';
  text: string = '';


  invitacionMapa = {
    'masculino': 'conocerlo',
    'femenino': 'conocerla'
  }

  cambiarCliente (){
    if (this.genero === 'femenino'){
      this.nombre = 'Alex'
      this.genero = 'masculino'
    } else {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan','Rosa'];
  clientesMapa = {
    '=0': 'no tenemos ningúncliente esperando,',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  borrarClientes() {
    this.clientes.pop();
  }

  //KeyVAluePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Vigo, España'

  }

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Finaliza la promesa');
    }, 3500);
  })

}
