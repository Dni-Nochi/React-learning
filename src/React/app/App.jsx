import EtranApp from '../components/EtranApp/EtranApp';
import Sidebar from '../components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <EtranApp />
    </div>
  );
}

export default App;
