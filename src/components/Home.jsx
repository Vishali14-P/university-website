import collegeBg from "../assets/college.jpg";
import { Link } from "react-router-dom";
function Home() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${collegeBg})` }}
        >
            <div className="hero-content">
                <p>WELCOME TO SRM EASWARI ENGINEERING COLLEGE</p>
                <h1>Learn Today, Lead Tomorrow</h1>
                <p>
                    SRM EASWARI ENGINEERING COLLEGE provides quality education, practical learning,
                    and opportunities to help students build a successful future.
                </p>
                <Link to="/courses" className="explore-button">
                    Explore Courses
                </Link>
            </div>
            <div className="hero-card">
                <div className="college-icon">🎓</div>
                <h2>Education & Innovation</h2>
                <p>
                    Developing knowledge, skills and confidence for tomorrow.
                </p>
            </div>
        </section>
    );
}
export default Home;