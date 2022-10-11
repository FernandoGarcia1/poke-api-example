import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poke-api';
  public pokemonsRes : any[] = [];
  

  onSubmit(res : any[]){
    console.log('app-component', res)
    this.pokemonsRes = res;
  }
}
