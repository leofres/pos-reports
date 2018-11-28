import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventariosPage } from './inventarios';

@NgModule({
  declarations: [
    InventariosPage,
  ],
  imports: [
    IonicPageModule.forChild(InventariosPage),
  ],
})
export class InventariosPageModule {}
