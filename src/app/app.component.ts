import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./contador/contador.actions";
import {AppState} from "./app.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number = 0;
  title = 'redux-app1';


  constructor( private store: Store<AppState>) {
    this.store.select('contador').subscribe( value => {
      console.log(value);
      this.contador = value;
    });
  }

  incrementar() {
    this.store.dispatch(actions.incrementarAction());
  }

  decrementar() {
    this.store.dispatch(actions.decrementarAction());
  }
}
