// Other
import { data } from '../directory';

const initialState = {
  sections: data,
};

export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
