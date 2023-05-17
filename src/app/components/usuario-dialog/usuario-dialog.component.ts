import { Component, OnInit, Inject} from '@angular/core';
import { AlunosService } from 'src/app/service/alunos.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import {Location}from '@angular/common'


@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrls: ['./usuario-dialog.component.css']
})
export class UsuarioDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service:AlunosService) {

  }

  ngOnInit(): void {

  }

  delete(cpf:string):void{
    this.service.deletarAluno(cpf).subscribe({
      next:(res) =>{
        console.log("usuario deletado " + cpf, res);
        //window.location.reload();

      },
      error:(err)=>{
        console.log(err)
      }
    })




  }


}
