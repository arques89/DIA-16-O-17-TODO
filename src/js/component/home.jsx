import React from "react";
import api from "./api.js";
//include images into your bundle

//create your first component
const Home = () => {
	//api.createUser("pericoste");
	//api.deleteUser("pericoste");
	//api.updateUser("pericoste", [{ label: "otracosa", done: false }]);

	return (
		<div>
			<h1 className="text-center mt-5">Hola Api</h1>
		</div>
	);
};

export default Home;
