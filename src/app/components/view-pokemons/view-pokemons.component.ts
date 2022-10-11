import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-view-pokemons',
  templateUrl: './view-pokemons.component.html',
  styleUrls: ['./view-pokemons.component.scss']
})
export class ViewPokemonsComponent implements OnInit {

  @Input() pokemons : any[] = []; 
  constructor(public requestService: RequestService) {

   }

  ngOnInit(): void {        
  }
   
    

    

}

