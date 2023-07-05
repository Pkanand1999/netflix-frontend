import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movie from './pages/Movie';
import TvShows from './pages/TvShows';
import MyList from './pages/MyList';
import Error from './pages/Error';
import Payment from './pages/Payment';
import Private from './routes/Private';

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Netflix />} />
        <Route path="/*" element={<Error />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/payment" element={<Payment />} />
        <Route  path="/player" element={<Private><Player /></Private>} />
        <Route  path="/movie" element={<Private><Movie /></Private>} />
        <Route  path="/tvshows" element={<Private><TvShows /></Private>} />
        <Route  path="/mylist" element={<Private><MyList /></Private>} />
      </Routes>

    </>
  )
}

export default App
