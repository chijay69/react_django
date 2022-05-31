import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'



const useStyle = makeStyles((theme)=>({
    footer: {
	borderTop: `1px solid ${theme.palette.divider}`,
	marginTop: theme.spacing(8),
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	[theme.breakpoints.up('sm')] : {
	    paddingTop: theme.spacing(6),
	    paddingBottom: theme.spacing(6),
	},
    },
}));

function Copyright(){
    return(
	<Typography variant="body2" color="textSecondary" align="centre">
	    {'Copyright &and'}
	    <Link color="inherit" href="https://material-ui.com">
		your website
	    </Link>{' '}
	    {new Date().getFullYear}
	    {'.'}
	</Typography>
    );
}

const footers = [
    {
	title:"company",
	description: ["Team", "History", "Contact", "Locate"]
    },
    
    {
	title:"Features",
	description: ["cool", "Random", "Feature", "Development", "stuff"]
    },
    
    {
	title:"Resources",
	description: ["cool", "Random", "Feature", "Development", "stuff"]
    },

    {
	title:"Legal",
	description: ["cool", "Random", "Feature", "Development", "stuff"]

    }
]


function Footer() {
    const classes = useStyle();
    <React.Fragment>
	<Container maxwidth="md" component="footer" className={classes.footer}>
	    <Grid container spacing={4} justify="space-evenly">
		{footers.map((footer)=> (
		    <Grid xs={6} sm={3} key={footer.title}>
			<Typography variant="h6" color="textPrimary" gutterBottom>
			    {footer.title}
			</Typography>
			<ul>
			    {footer.description.map((item)=> (
				<li key={item}>
				    <Link href="#" variant="subtitle1" color="textSecondary">
					{item}
				    </Link>
				</li>
			    ))}
			</ul>
		    </Grid>
		))}
	    </Grid>
	    <Box mt={5}>
		<Copyright />
	    </Box>
	</Container>
    </React.Fragment>
}

export default Footer;
