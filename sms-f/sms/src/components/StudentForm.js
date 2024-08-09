import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

const StudentForm = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={StudentList} />
                <Route path="/add" component={AddStudent} />
                <Route path="/edit/:id" component={EditStudent} />
            </Switch>
        </Router>
    );
};

export default StudentForm;
