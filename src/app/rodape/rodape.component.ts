import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailDummy: string

  recebeEmail(){
    alert("Email cadastrado com sucesso!")
    this.emailDummy=""
  }

}
