import { useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";
import types from "../types/types";

function useFetchAllProducts() {
  
  const initialState = {
    data: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: types.productsStartLoading });
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: types.productsFinishLoading, payload: data });
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

export default useFetchAllProducts;