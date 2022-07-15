import { Outlet } from 'react-router-dom';
import './App.css';
import ChatwootWidget from './new/Chatwot';
function App() {
  return (
    <div className="App">
      <ChatwootWidget />
      <Outlet />
    </div>
  );
}

export default App;
