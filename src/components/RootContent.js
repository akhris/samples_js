import SideBar from './Sidebar';
import Header from './Header'
import MainContent from './MainContent'

function RootContent() {
    return (
        <div>
            <h1>root content</h1>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
}

export default RootContent;