import React from 'react';
import { FileText, Download } from 'lucide-react';
import './Views.css';

const ResultsView = () => {
  const results = [
    { semester: 'Semester 4', course: 'CS301 - Data Structures', grade: 'A', credits: 4, status: 'Pass' },
    { semester: 'Semester 4', course: 'EE205 - Microprocessors', grade: 'B+', credits: 3, status: 'Pass' },
    { semester: 'Semester 3', course: 'ME402 - Thermodynamics', grade: 'A', credits: 4, status: 'Pass' },
    { semester: 'Semester 3', course: 'CE101 - Engg Mechanics', grade: 'C', credits: 3, status: 'Pass' },
    { semester: 'Semester 2', course: 'MTH102 - Calculus II', grade: 'F', credits: 4, status: 'Fail' },
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <FileText size={24} className="text-blue" />
          <h2>Academic Results</h2>
        </div>
        <div className="view-actions">
           <button className="btn-primary flex-btn">
            <Download size={18} />
            Download Transcript
          </button>
        </div>
      </div>

      <div className="card table-card full-width hover-3d animate-entrance">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Course</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td className="font-medium text-muted">{res.semester}</td>
                  <td className="text-main font-medium">{res.course}</td>
                  <td>{res.credits}</td>
                  <td className="font-medium" style={{color: res.grade === 'F' ? 'var(--status-absent)' : 'inherit'}}>{res.grade}</td>
                  <td>
                    <span className={`status-badge ${res.status.toLowerCase()}`}>
                      {res.status}
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

export default ResultsView;
