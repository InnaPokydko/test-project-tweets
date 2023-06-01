import React from 'react';
import { useGetUsersQuery } from 'redux/auth/operations';
import TweetCard from 'components/TweetCard/TweetCard';
import { Link } from 'react-router-dom';

const Tweets = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Tweets</h1>
      <div>
        {users.map(user => (
          <TweetCard user={user} />
        ))}
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Tweets;
