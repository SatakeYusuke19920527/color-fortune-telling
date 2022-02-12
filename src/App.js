import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }
  return (
    <div className="app-wrapper">
      <h1>Welcome to USTPage✌️</h1>
      <h2
        onClick={() => movePage("utpage")}
        className="individual-page-utako">Utako's Page</h2>
      <h2
        onClick={() => movePage("swpage")}
        className="individual-page-sawa">Sawa's Page</h2>
      <h2
        onClick={() => movePage("tkpage")}
        className="individual-page-takumi">Takumi's Page</h2>
    </div>
  );
}

export default App;
