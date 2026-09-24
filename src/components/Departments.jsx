import DepartmentCard from "./DepartmentCard";
function Departments() {
    const departments = [
        {
            name: "CSE",
            description: "Computer Science and Engineering"
        },
        {
            name: "AI & DS",
            description: "Artificial Intelligence and Data Science"
        },
        {
            name: "IT",
            description: "Information Technology"
        },
        {
            name: "ECE",
            description: "Electronics and Communication Engineering"
        },
        {
            name: "EEE",
            description: "Electrical and Electronics Engineering"
        },
        {
            name: "MECH",
            description: "Mechanical Engineering"
        },
        {
            name: "CIVIL",
            description: "Civil Engineering"
        },
        {
            name: "CSD",
            description: "Computer Science and Design"
        },
        {
            name: "CSBS",
            description: "Computer Science and Business Systems"
        },
        {
            name: "Robotics",
            description: "Robotics and Automation"
        },
        {
            name: "Biotechnology",
            description: "Biotechnology and Life Sciences"
        },
        {
            name: "AI & ML",
            description: "Artificial Intelligence and Machine Learning"
        }
    ];
    return (
        <section id="departments" className="section">
            <h2>Our Departments</h2>
            <div className="cards">
                {departments.map((department) => (
                    <DepartmentCard
                        name={department.name}
                        description={department.description}
                    />
                ))}
            </div>
        </section>
    );
}
export default Departments;