import { Component, OnInit } from '@angular/core';
import { FormOperationsService } from 'src/services/form-operations.service';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private formOperations: FormOperationsService) { }

  ngOnInit() {
  }

  formsTab() {
    return this.formOperations.tabOfForms;
  }

  addForm(){
    const form = new FormComponent()
    this.formOperations.addLabel(form);
    console.log(form)
  }

}
