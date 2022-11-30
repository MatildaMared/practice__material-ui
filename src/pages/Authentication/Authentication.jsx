import { Grid } from "@mui/material";
import React from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";

function Authentication() {
	const buttonStyles = {
		fontSize: 20,
		fontWeight: 500,
		"&:hover": {
			backgroundColor: "#000",
		},
	};

	return (
		<Grid item xs={8}>
			Authentication.
			<CommonButton variant="contained" sx={buttonStyles} size="large">
				Text
			</CommonButton>
		</Grid>
	);
}

export default Authentication;
