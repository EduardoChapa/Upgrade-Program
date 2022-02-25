import { useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";
import types from "../types/types";

function useFetchProductsById(id) {
  
  const initialState = {
    data: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: types.productsStartLoading });
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: types.productsFinishLoading, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.productsError });
    });
  }, [id]);

  return [
    state.data,
    state.loading,
    state.error
  ];
}

export default useFetchProductsById;