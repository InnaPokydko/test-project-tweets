import React, { useState, useEffect } from 'react';
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
  const [isFollowing, setIsFollowing] = useState(followStatus);
  const [followerCount, setFollowerCount] = useState(followers);
  const [updateFollowStatus] = useUpdateFollowStatusMutation();
  const [updateFollowersCount] = useUpdateFollowersCountMutation();

  const handleFollowClick = async () => {
    try {
      if (isFollowing) {
        await updateFollowStatus(id);
        await updateFollowersCount({
          userId: id,
          followersCount: followerCount + 1,
        });
        setFollowerCount((prevCount) => prevCount + 1);
      } else {
        await updateFollowStatus(id);
        setFollowerCount((prevCount) => prevCount - 1);
      }
      setIsFollowing((prevFollowing) => !prevFollowing);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (followStatus) {
      updateFollowersCount({ userId: id, followersCount: followerCount + 1 });
    }
  }, [followStatus, id, followerCount, updateFollowersCount]);

  return (
    <CardContainer>
      <CardBox>
        <LogoImage src={logo} alt="Logo" width="72" height="22"/>
        <TweetImage src={tweet} alt="Tweet"  width="290" height="140"/>
        <Line></Line>
        <AvatarImage src={avatar} alt={name} />
        <Title>{name}</Title>
        <TweetCount>Tweets: {tweets}</TweetCount>
        <FollowersCount>{followerCount} Followers</FollowersCount>
        <FollowButton onClick={handleFollowClick} followStatus={isFollowing}>
          <FollowButtonText>
            {isFollowing ? 'Following' : 'Follow'}
          </FollowButtonText>
        </FollowButton>
      </CardBox>
    </CardContainer>
  );
};

export default TweetCard;
