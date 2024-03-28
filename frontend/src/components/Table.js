// frontend/src/components/Table.js

import React from 'react';
import './Table.css'; // Import CSS file for styling

const Table = () => {
  const data = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      office: 'New York',
      startDate: '2023-01-15',
      salary: 85000,
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      office: 'San Francisco',
      startDate: '2022-11-20',
      salary: 95000,
    },
    {
      name: 'Alice Johnson',
      position: 'Data Analyst',
      office: 'Chicago',
      startDate: '2023-02-10',
      salary: 75000,
    },
    {
      name: 'Michael Brown',
      position: 'Marketing Specialist',
      office: 'Los Angeles',
      startDate: '2023-03-05',
      salary: 80000,
    },
    {
      name: 'Emily Davis',
      position: 'HR Manager',
      office: 'Seattle',
      startDate: '2023-04-01',
      salary: 90000,
    },
    {
      name: 'David Wilson',
      position: 'Graphic Designer',
      office: 'Boston',
      startDate: '2023-05-15',
      salary: 70000,
    },
    // Add more dummy data objects as needed
  ];

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.office}</td>
              <td>{new Date(item.startDate).toLocaleDateString()}</td>
              <td>${item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
