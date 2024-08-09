import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <Link to="/add">Add Student</Link>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.email} - {student.course}
                        <Link to={`/edit/${student.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
