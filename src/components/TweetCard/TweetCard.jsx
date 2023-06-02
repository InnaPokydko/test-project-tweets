import React, { useEffect } from 'react';
import {
  useUpdateFollowStatusMutation,
  useUpdateFollowersCountMutation,
} from 'redux/auth/operations';
import tweet from '../../images/tweet2.png';
import logo from '../../images/logo.png';
import {
  CardContainer,
  CardBox,
  LogoImage,
  TweetImage,
  Line,
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
        <LogoImage src={logo} alt="Logo" width="72" height="22"/>
        <TweetImage src={tweet} alt="Tweet"  width="290" height="140"/>
        <Line></Line>
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
