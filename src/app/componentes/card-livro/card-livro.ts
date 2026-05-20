import { Component, input, output } from '@angular/core';
import { Livro } from '../../interfaces/livro';

@Component({
  selector: 'app-card-livro',
  imports: [],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.css',
})
export class CardLivro {
  livro = input.required<Livro>();
  favoritar = output<number>();

  toggleFavorito() {
    this.favoritar.emit(this.livro().id)
  }

  //comp. filho -> pai = output
}
