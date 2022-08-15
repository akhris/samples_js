import './App.css';
import { HashRouter } from 'react-router-dom';
import RootContent from './components/RootContent';

function App() {
  return (
    <div>
      <h1>app content</h1>
      <HashRouter>
        <RootContent />
      </HashRouter>
    </div>
  );
}

export default App;
