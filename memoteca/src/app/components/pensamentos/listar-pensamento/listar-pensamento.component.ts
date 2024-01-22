import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'alo alo',
      autoria:'uauauauau',
      modelo: 'modelo2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
