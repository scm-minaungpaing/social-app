import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Error from './components/error';
import PageRender from './PageRender'
import Home from './pages/home';

function App() {
  return (
    <Router>
      <input type="checkbox" id='theme' />
      <div className="App">
        <div className='main'>
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route exact path="/:page" element={<PageRender/>} />
            <Route exact path="/:page/:id" element={<PageRender/>} />
            {/* <Route path="/*" element={ <Error/>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
