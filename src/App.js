import './App.css';
import Dictionary from "./Dictionary";
import background from "./background.jpg";


export default function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <div className="container">
          <header className="App-header">
            Dictionary
          </header>
          <main>
            <Dictionary defaultKeyword="sunset" />
          </main>
          <footer className="App-footer">
            <small>Coded by Victoria Ruiz</small>
          </footer>
        </div>
      </div>
    </div>
  );
}


