import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class  UserEditComponent implements OnInit {
  

  user: User = new User
  confirmarSenha: string
  idUser: number

  constructor(
    private auth: AuthService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){ 
    window.scroll(0,0)

    if (environment.token == '') {
      alert("Sua seção expirou.")
      this.router.navigate(["/entrar"])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }
  

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  atualizar(){   

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    } else {
      this.auth.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário atualizado com sucesso!')
        this.router.navigate(['/login'])
      })
    }
  }
  findByIdUser(id: number) {
    this.auth.getByIdUser(id).subscribe((resp : User) => {
      this.user = resp
    })
  }

}
