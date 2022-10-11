import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public requestService: RequestService) { }
  @Output() onPokemons : EventEmitter<any>= new EventEmitter() 
  
  public searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm =new FormGroup({
      offset: new FormControl(1, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      limit : new FormControl(1, [Validators.required, Validators.pattern('^[1-9][0-9]*$')])
    });; 
  }

  onSubmit(): void {
    const OFFSET = this.searchForm.get("offset")?.value ;
    const LIMIT= this.searchForm.get("limit")?.value;
    console.log(this.searchForm?.value);
    console.log('---------------------------------')
    let res;
    

    this.requestService.getPokemons(LIMIT,OFFSET-1).subscribe({
      next: (resp : any) => {        
        res = resp.res;
        console.log('form',res)
          this.onPokemons.emit(resp.res)          
          console.log(this.onPokemons)
      }      
    })     
    console.log('form-2',res)
  }
  


}
