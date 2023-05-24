import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {BodyComponent} from "./body/body.component";
import {LayoutComponent} from "./layout.component";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ],
    imports: [
        NgIf
    ]
})

export class LayoutModule {

}
