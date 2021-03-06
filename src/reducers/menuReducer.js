import { TOGGLE_MENU } from '../actions/types';

const INITIAL_STATE = {
  menuOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};
