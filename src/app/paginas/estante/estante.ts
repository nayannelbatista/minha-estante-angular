import { Component } from '@angular/core';
import { ListaLivros } from "../../componentes/lista-livros/lista-livros";

@Component({
  selector: 'app-estante',
  imports: [ListaLivros],
  templateUrl: './estante.html',
  styleUrl: './estante.css',
})
export class Estante {

}
