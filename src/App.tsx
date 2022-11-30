import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<Grid container>
			<NavBar />
			<Outlet />
		</Grid>
	);
}

export default App;
