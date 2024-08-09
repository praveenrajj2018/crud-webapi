import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({ name: '', email: '', course: '' });
    // const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5270/api/students/${id}`)
            .then(response => setStudent(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5270/api/students/${id}`, student)
            .then(response => {
                console.log(response.data);
                // history.push('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="course" value={student.course} onChange={handleChange} placeholder="Course" />
            <button type="submit">Edit Student</button>
        </form>
    );
};

export default EditStudent;
