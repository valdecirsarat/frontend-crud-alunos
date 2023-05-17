import { NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatDialogModule} from '@angular/material/dialog';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';
import {UsuarioDialogUpdateComponent} from './components/usuario-dialog-update/usuario-dialog-update.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioDialogComponent,
    UsuarioDialogUpdateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
