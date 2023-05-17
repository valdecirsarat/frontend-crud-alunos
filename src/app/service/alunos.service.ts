import { Injectable } from '@angular/core';
import { AlunosData } from '../models/alunosData';
import { AlunoCadatro } from '../models/alunoCadastro';
import {HttpClient, HttpParams,  HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private baseUrl:string ="";
  private alunosData:AlunosData|any;


  constructor(private http:HttpClient) {
    this.baseUrl= environment.faturamentoApi;
   }

   getAlunos():Observable<AlunosData[]>{
    this.alunosData = this.http.get<AlunosData[]>(`${this.baseUrl}${"alunos"}`)
    return this.alunosData;
   }

   cadastrarAluno(cadastro:AlunoCadatro):Observable<AlunoCadatro>{
    return this.http.post<AlunoCadatro>(`${this.baseUrl}${"alunos"}`, cadastro)
   }

   deletarAluno(cpf:string):Observable<any>{
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: new HttpParams().set("cpf", cpf)
      };

    return this.http.delete<any>(`${this.baseUrl}${"alunos"}`, options)
   }


   update(updateAluno:AlunoCadatro):Observable<AlunoCadatro>{
    return this.http.put<AlunoCadatro>(`${this.baseUrl}${"alunos"}`,updateAluno);
   }


}
