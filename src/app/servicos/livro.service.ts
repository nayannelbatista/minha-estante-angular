import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Livro } from '../interfaces/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  private api = 'http://localhost:3000/livros';
  private http = inject(HttpClient);

  buscarLivros() {
    return this.http.get<Livro[]>(this.api);
  }

  salvarLivro(livro: Livro) {
    return this.http.post(this.api, livro);
  }
}
