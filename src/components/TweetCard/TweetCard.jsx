import React from 'react';
import { useUpdateFollowStatusMutation, useUpdateFollowersCountMutation } from 'redux/auth/operations';

const TweetCard = ({ user }) => {
  const { id, name, followersCount, followStatus } = user;
  const [updateFollowStatus] = useUpdateFollowStatusMutation();
  const [updateFollowersCount] = useUpdateFollowersCountMutation();

  const handleFollowClick = async () => {
    try {
      if (followStatus) {
        await updateFollowStatus(id);
        await updateFollowersCount(id);
      } else {
        await updateFollowStatus(id);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Followers: {followersCount}</p>
      <button onClick={handleFollowClick} style={{ backgroundColor: followStatus ? 'green' : 'blue' }}>
        {followStatus ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default TweetCard;
