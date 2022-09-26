import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container>">
        <header className="App-header">
          <a href="#" className="btn btn-primary">
            Hello
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Tamara Humeniuk </footer>
      </div>
    </div>
  );
}
