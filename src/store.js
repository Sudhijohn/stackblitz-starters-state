import { createStore } from 'redux';

const intialState = {
  color: '#4267B2',
};

const colors = ['#FFF', '#000', '#D34', '#E09', '#4267B2'];

const ColorReducer = (state = intialState, action) => {
  if (action.type === 'CHANGE_COLOR') {
    const newState = { ...state, color: colors[action.payload] };
    return newState;
  }
  return state;
};

const store = createStore(ColorReducer);

export default store;
