import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    return this.pensamento.favorito ? 'ativo' : 'inativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento)
    .subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
  }

}
