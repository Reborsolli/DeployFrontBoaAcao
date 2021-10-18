import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

import { EquipeComponent } from './equipe/equipe.component';

import { PrincipalComponent } from './principal/principal.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

import { MenulogadoComponent } from './menulogado/menulogado.component';

import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { SobreComponent } from './sobre/sobre.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    InicioComponent,
    EquipeComponent,
    PrincipalComponent,
    UserEditComponent,

    PostagemDeleteComponent,
      MenulogadoComponent,

    PostagemEditComponent,
    PostagemDeleteComponent,
    SobreComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide:LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
