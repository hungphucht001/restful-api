import StudentManagement from './pages/StudentManagement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<StudentManagement />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
