import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUpdateFollowersCountMutation } from '../redux/auth/operations';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Tweets from './Tweets/Tweets';
import NotFound from './NotFound/NotFound';

const App = () => {
  const { updateFollowersCount } = useUpdateFollowersCountMutation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/tweets"
            element={<Tweets updateFollowersCount={updateFollowersCount} />}
          />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
