import collegeBg from "../assets/college.jpg";
function Home() {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `url(${collegeBg})` }}
        >
            <div className="hero-content">
                <p>WELCOME TO ASTRA INSTITUTE OF TECHNOLOGY</p>
                <h1>Learn Today, Lead Tomorrow</h1>
                <p>
                    ASTRA provides quality education, practical learning,
                    and opportunities to help students build a successful future.
                </p>
                <button
                    onClick={() => {
                        document.getElementById("courses").scrollIntoView();
                    }}
                >
                    Explore Courses
                </button>
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