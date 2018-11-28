import { Component } from '@angular/core';


import { VentasPage } from '../ventas/ventas';
import { ComprasPage } from '../compras/compras';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  ventasPage = VentasPage;
  comprasPage = ComprasPage;

  constructor() {

  }
}
