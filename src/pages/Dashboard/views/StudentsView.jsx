import React from 'react';
import { Users, Search, Filter } from 'lucide-react';
import './Views.css';

const StudentsView = () => {
  const students = [
    { id: 'STU2024001', name: 'MANASVI PATIL', course: 'Computer Science', year: '3rd Year', email: 'manasvi@example.com', status: 'Active' },
    { id: 'STU2024002', name: 'TUSHAR NIRPANE', course: 'Electronics', year: '2nd Year', email: 'tushar.nirpane@engineering.edu', status: 'Active' },
    { id: 'STU2024003', name: 'ANOKHI PATIL', course: 'Mechanical', year: '4th Year', email: 'anokhi@example.com', status: 'Active' },
    { id: 'STU2024004', name: 'PRAHI PATNE', course: 'Civil', year: '1st Year', email: 'prahi@example.com', status: 'Active' },
    { id: 'STU2024005', name: 'MANSI PARMAR', course: 'Computer Science', year: '3rd Year', email: 'mansi@example.com', status: 'Inactive' },
    { id: 'STU2024006', name: 'KETKI PATIL', course: 'Information Tech', year: '2nd Year', email: 'ketki@example.com', status: 'Active' },
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <Users size={24} className="text-blue" />
          <h2>Student Directory</h2>
        </div>
        <div className="view-actions">
          <div className="search-bar">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search students..." />
          </div>
          <button className="btn-secondary">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="card table-card full-width hover-3d animate-entrance">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="font-medium text-muted">{student.id}</td>
                  <td className="font-medium text-main">{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>
                  <td className="text-muted">{student.email}</td>
                  <td>
                    <span className={`status-badge ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsView;
