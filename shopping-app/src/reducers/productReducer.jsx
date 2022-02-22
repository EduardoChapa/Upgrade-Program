import types from "../types/types";

function productReducer(state, action) {

  switch (action.type) {
    case types.productsStartLoading:
      return {
        data: null,
        loading: true,
        error: null
      };
    
    case types.productsFinishLoading:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case types.productsError:
      return {
        data: null,
        loading: false,
        error: 'An error ocurred'
      }
  
    default:
      return state;
  }
}

export default productReducer;