import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { AlunosData } from 'src/app/models/alunosData';
import { AlunoCadatro } from 'src/app/models/alunoCadastro';
import { AlunosService } from 'src/app/service/alunos.service';
import {UsuarioDialogComponent} from 'src/app/components/usuario-dialog/usuario-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogUpdateComponent } from 'src/app/components/usuario-dialog-update/usuario-dialog-update.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],

})
export class UsuarioComponent implements OnInit, DoCheck{
  display = 'none';
  //display2 = true;
  altura = '0px'
  dados:AlunosData[];
  alunosData: AlunosData[];




  nome:string ='';
  cpf: string ='';
  contato: string ='';
  cep:string ='';
  buscaPorNome!:string;


  constructor(private service: AlunosService,private dialog:MatDialog) {
    this.dados = []

    this.alunosData = this.dados;

  }


  ngDoCheck(): void {

    if(this.buscaPorNome !=null || this.buscaPorNome!='' ){
      console.log('Inicio doCheck/ pesquisa');

     this.alunosData = this.teste();

    }else{
      console.log('retornando todos os dados');

      this.alunosData = this.dados;
    }
  }

  teste(){
    const regex = new RegExp(this.buscaPorNome, 'i');
    return this.dados.filter(nomes => regex.test(nomes.nome));
  }


  update(item:AlunosData):void {
    this.dialog.open(UsuarioDialogUpdateComponent, {
      data:{
        id:item.id,
        nome:item.nome,
        cpf:item.cpf,
        contato:item.contato,
        cep:item.edereco.cep

      }
    })
    this.dialog.afterAllClosed.subscribe(()=>{
      this.carregarCadastro()
    })
  }


  deletar(item:AlunosData): void {
    this.dialog.open(UsuarioDialogComponent,{
      data:{
        nome:item.nome,
        cpf:item.cpf,
        contato:item.contato,
        cep:item.edereco.cep
      }
     })

     this.dialog.afterAllClosed.subscribe(()=>{
      console.log("Modal fechou");
      this.carregarCadastro();

     })

  }



  ngOnInit(): void {
    this.buscaPorNome = ''
    this.carregarCadastro();
  }

  carregarCadastro():void{
    this.service.getAlunos().subscribe({
      next: (res) => {
        this.dados = res;
        console.log(this.dados);

      },
      error: (err) => {
        console.log('Deu Ruim!!')
        alert("A conexão com o servidor falhou")
      }
    });
  }

  cadastrar(): void{
    const aluno:AlunoCadatro ={
      nome:this.nome,
      cpf:this.cpf,
      contato:this.contato,
      edereco:{cep: this.cep}
    };

    this.service.cadastrarAluno(aluno).subscribe({
      next:(res) =>{

        this.carregarCadastro();
        console.log(aluno);
        console.log("Sucesso ao Cadastrar Aluno", res)
      },
      error:(err) =>{
        console.log(aluno);
        alert('Erro')
        console.log("Erro Ao Cadastrar Aluno",err);

      }
    })


  }


  mudarDisplay(){
  if(this.display == 'none'){
    this.display = 'block'

  }else{
    this.display = 'none'

  }
}

  /**
 * Aqui é onde injeta os dados da tela no dialog
 * crie uma component para deixar o codigo limpo
 *
 */

}
/*
@Component({
  selector: 'usuario-dialog',
  templateUrl: './usuario-dialog.componet.html',
})
export class UsuarioDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
}

}

function openDialog() {
  throw new Error('Function not implemented.');
}

*/

