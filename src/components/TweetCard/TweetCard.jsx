import React, { useEffect } from 'react';
import {
  useUpdateFollowStatusMutation,
  useUpdateFollowersCountMutation,
} from 'redux/auth/operations';
import {
  CardContainer,
  CardBox,
  LogoImage,
  TweetImage,
  AvatarImage,
  Title,
  TweetCount,
  FollowersCount,
  FollowButton,
  FollowButtonText,
} from './TweetCard.styled';

const TweetCard = ({ user }) => {
  const { id, user: name, tweets, followers, avatar, followStatus } = user;
  const [updateFollowStatus] = useUpdateFollowStatusMutation();
  const [updateFollowersCount] = useUpdateFollowersCountMutation();

  const handleFollowClick = async () => {
    try {
      if (followStatus) {
        await updateFollowStatus(id);
        await updateFollowersCount({
          userId: id,
          followersCount: user.followers + 1,
        });
      } else {
        await updateFollowStatus(id);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (followStatus) {
      updateFollowersCount({ userId: id, followersCount: user.followers + 1 });
    }
  }, [followStatus, id, user.followers, updateFollowersCount]);

  return (
    <CardContainer>
      <CardBox>
        <LogoImage src="path/to/logo.png" alt="Logo" />
        <TweetImage src="path/to/tweet.png" alt="Tweet" />
        <AvatarImage src={avatar} alt={name} />
        <Title>{name}</Title>
        <TweetCount>Tweets: {tweets}</TweetCount>
        <FollowersCount>{followers} Followers</FollowersCount>
        <FollowButton onClick={handleFollowClick} followStatus={followStatus}>
          <FollowButtonText>
            {followStatus ? 'Following' : 'Follow'}
          </FollowButtonText>
        </FollowButton>
      </CardBox>
    </CardContainer>
  );
};

export default TweetCard;
