import React from 'react';
import { useGetUsersQuery } from 'redux/auth/operations';
import TweetCard from 'components/TweetCard/TweetCard';
import { Link } from 'react-router-dom';

const Tweets = () => {
  const { data: users, error, isLoading, hasNextPage, fetchNextPage } = useGetUsersQuery();
  // const [visibleTweets, setVisibleTweets] = useState(3);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Waiting for new Tweets to be posted...</p>;
  }

  return (
    <div>
      <h1>Tweets</h1>
      <div>
      { users && users.map((user) =>  (
          <TweetCard key={user.id} user={user} />
        ))}
      </div>
      {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
      <Link to="/">Back</Link>
    </div>
  );
};

export default Tweets;