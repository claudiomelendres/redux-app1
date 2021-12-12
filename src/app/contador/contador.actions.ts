import {createAction, props} from '@ngrx/store';

export const incrementarAction = createAction('[Contador Componente] Incrementar');
export const decrementarAction = createAction('[Contador Componente] Decrementar');

export const multiplicarAction = createAction(
  '[Contador Componente] Multiplicar',
  props<{numero: number}>()
);

export const dividirAction = createAction(
  '[Contador Componente] Dividir',
  props<{divisor: number}>()
);

// export const reset = createAction('[Contador Componente] Resetear');
