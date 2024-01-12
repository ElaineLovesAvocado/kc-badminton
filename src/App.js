// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home";
import Ranking from "./pages/ranking";
import Match from "./pages/match";
import SeasonRanking from "./pages/seasonRanking";
import withSplashScreen from "./components/Navbar/withSplashScreen";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/kc-badminton/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					path="/match"
					element={<Match />}
				/>
				<Route
					path="/ranking"
					element={<Ranking />}
				/>
				<Route
					path="/seasonRanking"
					element={<SeasonRanking />}
				/>
			</Routes>
		</Router>
	);
}

export default withSplashScreen(App);
