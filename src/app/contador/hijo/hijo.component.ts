import {Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from "../contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( value => {
      // console.log(value);
      this.contador = value;
    });
  }

  ngOnInit(): void {

  }

  multiplicar() {
    this.store.dispatch(actions.multiplicarAction({numero: 3}));
  }

  dividir() {
    this.store.dispatch(actions.dividirAction({divisor: 2}));
  }

  resetNieto( nuevoContador:any ) {

  }

}
