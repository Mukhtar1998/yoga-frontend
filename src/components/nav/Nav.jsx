import React, { useState } from "react";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Nav() {
	const [showModal, setShowModal] = useState(false);
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsiv-nav");
	};

	const Logout = () => {
		const isValid = localStorage.getItem("token");
		console.log(isValid);
		const handleLogout = () => {
			localStorage.clear();
			setShowModal(!showModal);
			toast("logged out successfully");
		};
		if (isValid === null && undefined ) {
			return setShowModal(true);
		} else if (isValid !== null) {
			return (
				<button className="btn3" onClick={handleLogout}>
					Logout
				</button>
			);
		}
	};

	const handelModel = () => {
		Logout();
	};

	return (
		<header className="nav ">
			<h3>LOGO</h3>
			<nav id="navigarion" ref={navRef}>
				<span>
					<Link className="nav-link" to="/">
						Home
					</Link>
				</span>
				<span>
					<Link className="nav-link" to="/register">
						Register
					</Link>
				</span>
				<span>
					<Link className="nav-link" to="/userprofile">
						User Profile
					</Link>
				</span>
				<span>
					<Link className="nav-link" to="/subscription">
						My Subscription
					</Link>
				</span>
				<span>
					<Link className="nav-link" to="/courses">
						Courses
					</Link>
				</span>
				<span>
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</span>
				<span>
					<Logout
						handleClose={() => {
							handelModel();
						}}
					/>
				</span>
				<button className="nav-btn nav-close-btn">
					<FaTimes onClick={showNavbar} />
				</button>
			</nav>
			<button className="nav-btn">
				<FaBars onClick={showNavbar} />
			</button>
			<ToastContainer />
		</header>
	);
}
export default Nav;
