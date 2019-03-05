import { Component, OnInit } from '@angular/core';
import { FormOperationsService } from 'src/services/form-operations.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  private _typeOfForm;
  private _idForm;

  constructor(private formsOperations?: FormOperationsService) { 
    //this._idForm = this.formsOperations.idForm;
    //this._idForm++;
  }

  ngOnInit() {
  }

  get typeOfForm() {
    return this._typeOfForm;
  }
  get idForm(){
    return this._idForm;
  }


}

