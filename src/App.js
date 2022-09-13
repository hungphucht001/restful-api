import StudentManagement from './pages/StudentManagement/StudentManagement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from './shared/DefaultLayout';
import AddStudent from './pages/AddStudent';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<StudentManagement />} />
                        <Route path='add-student' element={<AddStudent />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
