const createUser = (name) => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user/${name}`, {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp);
			console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.catch((error) => {
			//manejo de errores
			console.log(error);
		});
};

const deleteUser = (name) => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user/${name}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp);
			console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.catch((error) => {
			//manejo de errores
			console.log(error);
		});
};

const updateUser = (name, data) => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user/${name}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((resp) => {
			console.log(resp);
			console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.catch((error) => {
			//manejo de errores
			console.log(error);
		});
};

const getUser = () => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp);
			console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.catch((error) => {
			//manejo de errores
			console.log(error);
		});
};
export default {
	createUser,
	deleteUser,
	updateUser,
};
