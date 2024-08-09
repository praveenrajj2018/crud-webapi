import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add" element={<AddStudent />} />
                    <Route path="/edit/:id" element={<EditStudent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StudentList from './components/StudentList';
// import AddStudent from './components/AddStudent';
// import EditStudent from './components/EditStudent';

// const App = () => {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<StudentList />} />
//                     <Route path="/add" element={<AddStudent />} />
//                     <Route path="/edit/:id" element={<EditStudent />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// export default App;
