import { Component } from '@angular/core';
import {CreateComponent} from "./forms/create/create.component";
import {ModalService} from "./modal/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';

  public appToLoad: string
  public isLogin = false

  constructor(public modalService: ModalService) {
  }
}
