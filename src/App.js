import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import YogaCourses from "./pages/YogaCourses";
import MySubscription from "./pages/MySubscription";
import UserProfileFront from "./pages/UserProfileFront";
// import { IsLoggedIn } from "./context/userContext.jsx";
function App() {
	return (
		<div className="App">
			{/* <IsLoggedIn.Provider value={IsLoggedIn}> */}
			<GoogleOAuthProvider clientId="635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com">
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/tools" element={<Tools />} />
					<Route exact path="/counter" element={<Counter />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/g-login" element={<GoogleLogin />} />
					<Route exact path="/userprofile" element={<UserProfileFront />} />
					<Route exact path="/subscription" element={<MySubscription />} />
					<Route exact path="/courses" element={<YogaCourses />} />
				</Routes>
			</GoogleOAuthProvider>
			{/* </IsLoggedIn.Provider> */}
		</div>
	);
}

export default App;
