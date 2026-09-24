import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Departments from "./components/Departments";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/courses" element={<Courses />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default App;