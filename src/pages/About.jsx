const About = () => {
  return (
    <div className="container">

      <h1>About Finance Manager</h1>

      <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
        Finance Manager is a modern web application designed to help users
        track their income, monitor expenses, and manage finances efficiently.
      </p>

      <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
        Built using React, this project demonstrates modern frontend
        development concepts including state management, routing, reusable
        components, and responsive UI design.
      </p>

      <h3 style={{ marginTop: "20px" }}>Key Features</h3>

      <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
        <li>Track income and expenses</li>
        <li>Interactive dashboard</li>
        <li>Modern UI design</li>
        <li>Fast and responsive performance</li>
      </ul>

    </div>
  );
};

export default About;
