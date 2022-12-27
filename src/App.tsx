import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Forum from './routes/Forum/Forum';
import Home from './routes/Home/Home';
import Profile from './routes/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forum" element={<Forum />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<p>Currently offline module!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
