import { Component, inject, OnInit, signal } from '@angular/core';
import { CardLivro } from "../card-livro/card-livro";
import { Livro } from '../../interfaces/livro';
import { LivroService } from '../../servicos/livro.service';

@Component({
  selector: 'app-lista-livros',
  imports: [CardLivro],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivros implements OnInit {
  private livroService = inject(LivroService);
  livros = signal<Livro[]>([]);

  ngOnInit() {
    this.livroService.buscarLivros().subscribe((livros) => {
      this.livros.set(livros);
    });
  }

  favoritarLivro(id: number) {
    const livroEncontrado = this.livros().find((livro) => livro.id === id);

    if(livroEncontrado) {
      livroEncontrado.favorito = !livroEncontrado.favorito
    }
  }
}
