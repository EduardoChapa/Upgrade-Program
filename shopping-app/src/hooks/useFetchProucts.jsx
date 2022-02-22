import { useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";
import types from "../types/types";

function useFetchProducts(uri) {
  
  const initialState = {
    data: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: types.productsStartLoading });
    fetch(uri)
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: types.productsFinishLoading, payload: data });
      console.log(data);
    })
    .catch(() => {
      dispatch({ type: types.productsError });
    });
  }, []);

  return [
    state.data,
    state.loading,
    state.error
  ];
}

export default useFetchProducts;