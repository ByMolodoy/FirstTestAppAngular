import { Component } from '@angular/core';
import {ModalService} from "../../modal/modal.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: ModalService,
              private appComponent: AppComponent) {
  }

  get isLogin() {
    return this.appComponent.isLogin
  }
  login() {
    this.modalService.open()
    this.appComponent.appToLoad = 'Вход'
  }

  registration():void {
    this.modalService.open()
    this.appComponent.appToLoad = 'Регистрация'
  }
}
