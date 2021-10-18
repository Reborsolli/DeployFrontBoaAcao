import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router 
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.foto = ''
    environment.id = 0
  }

}
