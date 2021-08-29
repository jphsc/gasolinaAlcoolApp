import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "resultado"

   resultado(){
    //Validar se os campos foram preenchidos
    if (this.peso<50) {
      this.resultado='Peso inferior a 50. Favor, inserir um valor válido.';
    } else if (this.peso>100) {
      this.resultado='Peso acima dos parâmetros. Favor, verificar tabela de pesos acima de 100.';
    } else {
       return this.resultado='<br>**Teste para exibição do valor armazenado nas variáveis.**<br><br>Peso: ';

    } 

  }


}
