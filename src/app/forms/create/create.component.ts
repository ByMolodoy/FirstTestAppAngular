import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formCreate = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private appComp: AppComponent) {
  }

  get name() {
    return this.formCreate.controls.name as FormControl
  }
  submit() {
    console.log(this.formCreate.value)
    console.log(this.name)
    this.appComp.appToLoad = ''
  }
}
