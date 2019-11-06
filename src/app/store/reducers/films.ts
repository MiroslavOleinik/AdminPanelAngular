import { Action } from '@ngrx/store';
import * as filmAction from '../actions/films';

// import { Film } from '../../models';

export interface State {
  number: number,
}

export const initialState: State = {
  number: 0,
};

export function reducer(state = initialState, action: filmAction.Action) {
  switch (action.type) {
    case filmAction.PLUS_ONE: {
      return {
        ...state,
        number: +state.number,
      };
    }
    case filmAction.MINUS_ONE: {
      return {
        ...state,
        number: -state.number,
      };
    }
    default: {
      return {
        ...state,
        number: state.number,
      };
    }
  }
}
