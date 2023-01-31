import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent {

  @ViewChild('itemForm', { static: false }) form!: NgForm;

  get submitMessage() { return this._submitMessage; }
  private _submitMessage = '';

  onSubmit(form: NgForm) {
    this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }
  
}
