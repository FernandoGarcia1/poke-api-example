import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ViewPokemonsComponent } from './components/view-pokemons/view-pokemons.component';
import { ChangeNamePipe } from './libs/change-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewPokemonsComponent,
    ChangeNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
