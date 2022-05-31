import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>




const useStyles = makeStyles((theme) => ({
    appBar: {
	borderBottom:`1px solid ${theme.palette.divider}`,
    },
}));


function Header() {
    const classes = useStyles();
    return (
	<React.Fragment>
	    <CssBaseline />
	    <AppBar
		position = "static"
		color = "white"
		elevation = {0}
		className = {classes.appBar}>

		<Toolbar>
		    <Typography variant="h6" color= "inherit" noWrap>
			BlogmeUp
		    </Typography>
		</Toolbar>
	    </AppBar>
	</React.Fragment>
    );
}
export default Header;
