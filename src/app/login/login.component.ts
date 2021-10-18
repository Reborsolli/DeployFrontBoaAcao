import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  ngOnInit() {
    window.scroll(0,0)
    console.log(this.token)
    console.log(this.userLogin.token)
    console.log(this.userLogin.nome)
    console.log(this.userLogin.foto)
    console.log(this.userLogin.id)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
    this.userLogin = resp
    
    environment.token = this.userLogin.token
    environment.nome = this.userLogin.nome
    environment.foto = this.userLogin.foto
    environment.id = this.userLogin.id
    environment.email = this.userLogin.email
    


    console.log(environment.email)
    console.log(environment.id)
    console.log(environment.nome)
    console.log(environment.token)
    console.log(environment.foto)
  
    this.router.navigate(['/principal'])
    }, erro => {
        if(erro.status ==500){
          alert("Usuario ou senha estão incorretos!")
        }
      })
    }
    

}
