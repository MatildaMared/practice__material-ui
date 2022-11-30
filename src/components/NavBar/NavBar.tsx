import React from "react";
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { navBarListItems } from "./constants/navbarListItems";
import { navbarStyles } from "./styles";
import { useNavigate } from "react-router";

function NavBar() {
	const navigate = useNavigate();

	return (
		<Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
			<Toolbar />
			<Divider />
			<List>
				{navBarListItems.map((link, index) => (
					<ListItem
						key={link.id}
						disablePadding
						onClick={() => navigate(`/${link.route}`)}
					>
						<ListItemButton>
							<ListItemIcon sx={navbarStyles.icons}>{link.icon}</ListItemIcon>
							<ListItemText primary={link.label} sx={navbarStyles.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
}

export default NavBar;
