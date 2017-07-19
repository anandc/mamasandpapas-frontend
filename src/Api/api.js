import 'whatwg-fetch';
const PATH = 'http://localhost:4000';
const fetchProducts = (searchStr, color) => {
	return fetch(`${PATH}/search/?searchString=${searchStr}&filters[availableColors][]=${color}`, {
      method: "POST",
      body: ''
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      return data;
    });
};
const fetchColors = () => {
	return fetch(`${PATH}/colors/`).then(function(response) {
      return response.json();
    }).then(function(data) {
      return data;
    });
};
export { fetchProducts, fetchColors };
