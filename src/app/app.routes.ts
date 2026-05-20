import { Routes } from '@angular/router';
import { Estante } from './paginas/estante/estante';
import { FormularioLivro } from './paginas/formulario-livro/formulario-livro';

export const routes: Routes = [
  {
    path: '',
    component: Estante
  },
  {
    path: 'formulario-livro',
    component: FormularioLivro
  }
];
