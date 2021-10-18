import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

import { EquipeComponent } from './equipe/equipe.component';

import { PrincipalComponent } from './principal/principal.component';

import { MenulogadoComponent } from './menulogado/menulogado.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'sobre', component: SobreComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'principal', component: PrincipalComponent},


  {path: 'menulog', component: MenulogadoComponent},
   {path:'user-edit/:id', component: UserEditComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
