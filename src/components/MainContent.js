import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/Home';
import Samples from './screens/Samples';
import Settings from './screens/Settings';

function MainContent() {
    return (
        <Routes>
            <Route exact path = "/" element={<HomeScreen/>}/>
            <Route path = "/samples" element={<Samples/>}/>
            <Route path = "/people" element={<Samples/>}/>
            <Route path = "/places" element={<Samples/>}/>
            <Route path = "/operations" element={<Samples/>}/>
            <Route path = "/measurements" element={<Samples/>}/>
            <Route path = "/settings" element={<Settings/>}/>
        </Routes>
    );
}

export default MainContent;