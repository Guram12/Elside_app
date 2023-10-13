import { Routes, Route } from 'react-router-dom';
import { Projects } from '../Projects';
import OngoingPage from './CorrentprojectPage';
import './ProjectPage.css';



export default function ProjectPage() {
    return (
        <div>
            <div className='project_padding'></div>
            <Routes>
                <Route index element={<Projects />} />
                <Route path="ongoing" element={<OngoingPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
}