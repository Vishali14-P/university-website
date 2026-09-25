import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Header() {
    return (
        <header className="header">
            <div className="logo-section">
                <img
                    src={logo}
                    alt="SRM EASWARI ENGINEERING COLLEGE Logo"
                    className="college-logo"
                />
                <h2>SRM EASWARI ENGINEERING COLLEGE</h2>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/departments">Departments</Link>
                <Link to="/courses">Courses</Link>
            </nav>
        </header>
    );
}
export default Header;