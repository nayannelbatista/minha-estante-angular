import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LivroService } from './../../servicos/livro.service';
import { Component, inject } from '@angular/core';
import { Livro } from '../../interfaces/livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-livro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-livro.html',
  styleUrl: './formulario-livro.css',
})
export class FormularioLivro {
  private livroService = inject(LivroService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  formulario = this.formBuilder.nonNullable.group({
    titulo: '',
    autoria: '',
    paginas: 0,
    favorito: false
  });

  salvarLivro() {
    const livro: Livro = this.formulario.getRawValue();
    this.livroService.salvarLivro(livro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
