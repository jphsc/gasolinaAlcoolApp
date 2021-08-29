import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public resultado: String = "resultado";

	precoAlcool: String;
	precoGasolina: String;

      public calcular(precoGasolina,precoAlcool) {
        if (this.precoAlcool || this.precoGasolina) {
          this.resultado="Não preenchido"
        }else{

        }
      }
}

