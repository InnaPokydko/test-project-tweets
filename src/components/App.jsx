import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useUpdateFollowersCountMutation } from '../redux/auth/operations';
import Home from './Home/Home';
import Tweets from './Tweets/Tweets';
import NotFound from './NotFound/NotFound';

export const App = () => {
  const { updateFollowersCount } = useUpdateFollowersCountMutation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tweets"
          element={<Tweets updateFollowersCount={updateFollowersCount} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
