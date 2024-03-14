import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';

function App() {
  return (
    <Router> 
        <Routes>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
    </Router>
  );
}

export default App;