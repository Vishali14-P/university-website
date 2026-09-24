import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <div className="logo-section">
                <h2>ASTRA University</h2>
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