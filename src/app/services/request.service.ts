import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  getPokemons(limit: number, offset: number){
    /*
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .subscribe({
      next: (data: any) =>{
        console.log(data)
      }
    })*/
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .pipe(      
      map( (resp: any) =>{        
        
        return {
          
          res : resp.results,
          
        }
      })
    )
  }
}
