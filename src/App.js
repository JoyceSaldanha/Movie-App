import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Movie from './Movie';
import Dog from './Dog';

function App() {
  return (
    // <div className="App">
    //   <Movie></Movie>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Movie></Movie>}></Route>
        <Route path="/dogs" element={<Dog></Dog>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

