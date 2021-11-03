import "./styles/App.scss";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import Form from "./components/Form";
import { firebase } from "./firebase/firebase";
// import { currentUser } from "./components/Login";
// import { HomeIcon } from "@material-ui/icons";
// import {HomeIcon} from '@mui/icons-material';

function App() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			return setIsUserSignedIn(true);
		}
		setIsUserSignedIn(false);
	});
	// const retUser = () => {
	// 	return firebase.auth().currentUser;
	// };
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<Homepg />
					</Route>
					<Route path='/login' component={Login} />
					<Route path='/about' exact component={About} />
					<Route path='/form' exact component={Form} />
				</Switch>
			</div>
		</Router>
	);
}

const Homepg = (props) => (
	<div>
		<Typography variant='h3' align='center' style={{ marginTop: "1%" }}>
			Home Page
		</Typography>
		<Typography className='Body-text' align='center' style={{ marginTop: "1%" }}>
			Login to see further details
		</Typography>
		<Typography className='Body-text' align='center' style={{ marginTop: "1%" }}>
			Logged in Username -{" "}
			{firebase.auth().currentUser ? firebase.auth().currentUser.displayName : null}
		</Typography>
		<Typography className='Body-text' align='center' style={{ marginTop: "1%" }}>
			Once the user is logged-in a "FORM" tab will appear in Navbar where details can be modified
		</Typography>
	</div>
);

export default App;
