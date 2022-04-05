export const layoutInitialState = {
  isHeaderFixed: false
};
export const layoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return { ...state,
        isHeaderFixed: action.payload
      };

    default:
      {}
  }
};