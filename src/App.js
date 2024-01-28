import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './Views/Login/index.tsx';
import { DETAILS, LISTINGPAGE, LOGIN, ROOT } from './Constants/Routes.tsx';
import ListingPage from './Views/Listing/index.tsx';
import Details from './Views/Details/index.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={ROOT} element={<Login/>} />
      <Route path={LOGIN} element={<Login/>} />
      <Route path={LISTINGPAGE} element={<ListingPage/>} />
      <Route path={DETAILS} element={<Details/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
