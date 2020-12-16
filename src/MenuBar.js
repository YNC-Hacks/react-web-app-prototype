import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import './Navbar.css';

const useStyles = makeStyles({
	btn: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '1.4rem',
		width: '100%',
		padding: '0'
	},
	menu: {
		'& div': {
			width: '100%',
			textAlign: 'center'
		}
	},
	'@media (min-width: 900px)': {
		menu: {
			'& div': {
				width: 'auto',
				textAlign: 'center',
				margin: '0 auto'
			}
		},
		btn: {
			width: 'auto',
			margin: '0 auto'
		}
	}
});

function MenuBar(props) {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChoose = (e) => {
		props.history.push(e.target.textContent.toLowerCase());
		handleClose();
	};

	return (
		<nav className="Navbar">
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
				className={classes.btn}
			>
				{props.rc.name}
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className={classes.menu}
			>
				<MenuItem onClick={handleChoose}>Cendana</MenuItem>
				<MenuItem onClick={handleChoose}>Elm</MenuItem>
				<MenuItem onClick={handleChoose}>Saga</MenuItem>
			</Menu>
		</nav>
	);
}

export default withRouter(MenuBar);
