import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlunosService } from 'src/app/service/alunos.service';
import { AlunoCadatro } from 'src/app/models/alunoCadastro';

@Component({
  selector: 'app-usuario-dialog-update',
  templateUrl: './usuario-dialog-update.component.html',
  styleUrls: ['./usuario-dialog-update.component.css']
})
export class UsuarioDialogUpdateComponent implements OnInit {

  nome:string;
  cpf: string;
  contato: string;
  cep:string;
  id:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service:AlunosService) {
    this.id= data.id;
    this.nome = data.nome;
    this.cpf = data.cpf;
    this.contato = data.contato;
    this.cep = data.cep;

  }


  ngOnInit(): void {

  }

  atualizar():void{
    const aluno:AlunoCadatro ={
      id:this.id,
      nome:this.nome,
      cpf:this.cpf,
      contato:this.contato,
      edereco:{cep: this.cep}
    };
    console.log("Isso é apenas um teste " + aluno.contato + " " + aluno.cpf + " " + aluno.nome + " " + aluno.edereco.cep + " " + aluno.id);
    //console.log(this.data);
    this.service.update(aluno).subscribe({
      next:(res) =>{
        console.log("Usuario Atualizado!");
      },
      error:(err)=>{
        console.log(err)
      }
    });



  }

}
