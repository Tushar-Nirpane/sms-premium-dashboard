import React from 'react';
import { BookOpen, Search, Plus } from 'lucide-react';
import './Views.css';

const CoursesView = () => {
  const courses = [
    { code: 'CS301', title: 'Data Structures & Algorithms', department: 'Computer Science', credits: 4, instructor: 'Dr. Mehta' },
    { code: 'EE205', title: 'Microprocessors', department: 'Electronics', credits: 3, instructor: 'Prof. Sharma' },
    { code: 'ME402', title: 'Thermodynamics', department: 'Mechanical', credits: 4, instructor: 'Dr. Singh' },
    { code: 'CE101', title: 'Engineering Mechanics', department: 'Civil', credits: 3, instructor: 'Prof. Verma' },
    { code: 'IT305', title: 'Database Management Systems', department: 'Information Tech', credits: 4, instructor: 'Dr. Gupta' },
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <BookOpen size={24} className="text-blue" />
          <h2>Course Catalog</h2>
        </div>
        <div className="view-actions">
          <div className="search-bar">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search courses..." />
          </div>
          <button className="btn-primary flex-btn">
            <Plus size={18} />
            Add Course
          </button>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={course.code} className="card course-card hover-3d animate-entrance" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="course-header">
              <span className="course-code">{course.code}</span>
              <span className="course-credits">{course.credits} Credits</span>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <div className="course-details">
              <p><strong>Dept:</strong> {course.department}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesView;
