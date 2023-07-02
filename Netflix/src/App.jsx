import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movie from './pages/Movie';
import TvShows from './pages/TvShows';
import MyList from './pages/MyList';
import Error from './pages/Error';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/tvshows" element={<TvShows />} />
          <Route exact path="/mylist" element={<MyList />} />
          <Route exact path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
