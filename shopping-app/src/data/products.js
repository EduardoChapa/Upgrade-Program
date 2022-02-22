export function getProducts() {
  fetch('https://fakestoreapi.com/products')
  .then(resp => resp.json())
  .then(data => data);
}
