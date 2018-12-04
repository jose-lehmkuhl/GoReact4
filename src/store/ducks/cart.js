export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
  SET: 'cart/SET',
};

const INITIAL_STATE = {
  items: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        items: { ...state.items, [action.payload]: state.items[action.payload] + 1 },
      };
    case Types.SET:
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: action.payload.quantity },
      };
    case Types.REMOVE:
      return {
        ...state,
        items: { ...state.items, [action.payload]: 0 },
      };
    default:
      return state;
  }
}

export const Creators = {
  addItem: id => ({
    type: Types.ADD,
    payload: id,
  }),
  removeItem: id => ({
    type: Types.REMOVE,
    payload: id,
  }),
  setItem: (id, quantity) => ({
    type: Types.SET,
    payload: { id, quantity },
  }),
};
