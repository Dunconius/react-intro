import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

let favouriteMovies = [
  "Aliens",
  "Dune",
  "Shrek",
  "Pokemon",
  "Robocop"
];

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <header className="App-header">
        <h1>Hello World!</h1>
        <h1>Favourtie Movies:</h1>
        <ul>
          {favouriteMovies.map((movie, index) => {
            return <li key={ movie + "-" + index}>{movie}</li>
          })}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
