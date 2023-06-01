import React, { useEffect } from 'react';
import { useUpdateFollowStatusMutation, useUpdateFollowersCountMutation } from 'redux/auth/operations';

const TweetCard = ({ user }) => {
  const { id, user: name, tweets, followers, avatar, followStatus } = user;
  const [updateFollowStatus] = useUpdateFollowStatusMutation();
  const [updateFollowersCount] = useUpdateFollowersCountMutation();

  const handleFollowClick = async () => {
    try {
      if (followStatus) {
        await updateFollowStatus(id);
        await updateFollowersCount({ userId: id, followersCount: user.followers + 1 });
      } else {
        await updateFollowStatus(id);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Оновлення стану followStatus після виконання мутацій
  useEffect(() => {
    if (followStatus) {
      updateFollowersCount({ userId: id, followersCount: user.followers + 1 });
    }
  }, [followStatus, id, user.followers, updateFollowersCount]);

  return (
    <div>
      <img src={avatar} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>Tweets: {tweets}</p>
      <p>Followers: {followers}</p>
      <button onClick={handleFollowClick} style={{ backgroundColor: followStatus ? 'green' : 'pink' }}>
        {followStatus ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default TweetCard;
