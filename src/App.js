import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', height: '5rem'}}>STAR WARS</h1>
      <MovieList />
    </div>
  );
}

export default App;
