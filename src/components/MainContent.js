import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/Home';
import Samples from './screens/Samples';

function MainContent() {
    return (
        <Routes>
            <Route exact path = "/" element={<HomeScreen/>}/>
            <Route path = "/samples" element={<Samples/>}/>
        </Routes>
    );
}

export default MainContent;