import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormOperationsService {
  private _tabOfForms = [1];
  private _typeOfForm;
  private _idForm = 0;
  constructor() { }

  addLabel(value) {
    this._tabOfForms.push(value);
  }

  get tabOfForms() {
    return this._tabOfForms;
  }

  set typeOfForm(value) {
    this._typeOfForm;
  }

  get typeOfForm(){
    return
  }

  get idForm(){
    return this._idForm;
  }
}
