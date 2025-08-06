import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">🎓 Education</h2>

      <div className="education-card">
        <h3>Bachelor's Degree in Artificial Intelligence and Data Science</h3>
        <p><strong>Institute:</strong> Maharashtra Institute of Technology, Chhatrapati Sambhajinagar</p>
        <p><strong>Duration:</strong> 2021 – 2025 </p>
        <p><strong>CGPA:</strong> 8.96 / 10</p>
        <p className="desc">
          Developed strong foundations in AI, ML, and backend technologies. Built several projects using Python, Django, and FastAPI.
        </p>
      </div>

      <div className="education-card">
        <h3>HSC (12th Grade)</h3>
        <p><strong>School:</strong> Janta English High School, Nashik</p>
        <p><strong>Year:</strong> 2020 – 2021</p>
        <p><strong>Percentage:</strong> 76.83%</p>
      </div>

      <div className="education-card">
        <h3>SSC (10th Grade)</h3>
        <p><strong>School:</strong> Siddhi International Academy, Nashik</p>
        <p><strong>Year:</strong> 2018 – 2019</p>
        <p><strong>Percentage:</strong> 85.40%</p>
      </div>
    </section>
  );
};

export default Education;

