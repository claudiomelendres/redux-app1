import { Action, createReducer, on} from '@ngrx/store';
import {incrementarAction, decrementarAction, multiplicarAction, dividirAction, resetAction} from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementarAction, state => state + 1),
  on(decrementarAction, state => state - 1),
  on(multiplicarAction, (state, { numero }) => state * numero ), //props.numero
  on(dividirAction, (state, { divisor }) => state / divisor ), //props.numero

  on(resetAction, () => 0)
);

export function contadorReducer(state: number | undefined, action: Action) {
  return _contadorReducer(state, action);
}
