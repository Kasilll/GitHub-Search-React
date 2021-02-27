import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Alert from './components/Alert';
import AlertState from './Context/alert/AlertState';
import {GithubState} from './Context/github/githubState';
import Profile from './pages/Profile'

function App() {
	return (
		<GithubState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<Alert alert={{ text: 'Test alert' }} />
					<div className="container pt-4">
						<Switch>
							<Route exact path="/about" component={About} />
							<Route exact path="/" component={Home} />
							<Route path="/profile/:name" component={Profile}/>
						</Switch>
					</div>
				</BrowserRouter>
			</AlertState>
		</GithubState>
	);
}

export default App;
