import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SearchResult from './SearchResult';
import BookDetails from './BookDetails';


function App() {
  return (
    <div className="App" id="appID">
      

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/bookDetails" element={<BookDetails />} />

      </Routes>


    </div>
  );
}

export default App;
