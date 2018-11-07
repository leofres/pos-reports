import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentasSettingsPage } from './ventas-settings';

@NgModule({
  declarations: [
    VentasSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(VentasSettingsPage),
  ],
})
export class VentasSettingsPageModule {}
