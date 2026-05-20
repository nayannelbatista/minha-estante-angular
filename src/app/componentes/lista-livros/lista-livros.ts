import { Component } from '@angular/core';
import { CardLivro } from "../card-livro/card-livro";
import { Livro } from '../../interfaces/livro';

@Component({
  selector: 'app-lista-livros',
  imports: [CardLivro],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivros {
  livros: Livro[] = [
    { id: 1, titulo: 'Dom Quixote', autoria: 'Miguel de Cervantes', paginas: 1072, favorito: false },
    { id: 2, titulo: 'Crime e Castigo', autoria: 'Fiódor Dostoiévski', paginas: 551, favorito: true },
    { id: 3, titulo: 'Anna Karenina', autoria: 'Liev Tolstói', paginas: 864, favorito: false },
    {
      id: 4,
      titulo: 'Cem Anos de Solidão',
      autoria: 'Gabriel García Márquez',
      paginas: 448,
      favorito: true,
    },
    { id: 5, titulo: 'O Processo', autoria: 'Franz Kafka', paginas: 248, favorito: false },
    { id: 6, titulo: 'Madame Bovary', autoria: 'Gustave Flaubert', paginas: 396, favorito: true },
    { id: 7, titulo: 'A Divina Comédia', autoria: 'Dante Alighieri', paginas: 798, favorito: false },
    { id: 8, titulo: 'Orgulho e Preconceito', autoria: 'Jane Austen', paginas: 432, favorito: true },
    { id: 9, titulo: 'O Idiota', autoria: 'Fiódor Dostoiévski', paginas: 667, favorito: false },
    { id: 10, titulo: 'Moby Dick', autoria: 'Herman Melville', paginas: 635, favorito: false },
  ];

  favoritarLivro(id: number) {
    const livroEncontrado = this.livros.find((livro) => livro.id === id);

    if(livroEncontrado) {
      livroEncontrado.favorito = !livroEncontrado.favorito
    }
  }
}
