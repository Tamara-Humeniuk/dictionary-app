import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container>">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/Tamara-Humeniuk/dictionary-app"
            target="_blank"
          >
            Coded by Tamara Humeniuk
          </a>
        </footer>
      </div>
    </div>
  );
}
