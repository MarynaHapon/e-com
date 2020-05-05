// Other
import { data } from '../shop';

const initialState = {
  collections: data,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
