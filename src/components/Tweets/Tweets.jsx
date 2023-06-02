import React from 'react';
import { FcHome } from 'react-icons/fc';
import { useGetUsersQuery } from 'redux/auth/operations';
import TweetCard from 'components/TweetCard/TweetCard';
import {
  LoadingMessage,
  ErrorMessage,
  LoadMoreButton,
  BackLink,
  TweetsContainer,
  CardContainer,
  Section,
} from './Tweets.styled';

const Tweets = () => {
  const {
    data: users,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetUsersQuery();

  if (isLoading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Waiting for new Tweets to be posted...</ErrorMessage>;
  }

  return (
    <Section>
      <BackLink to="/">
        <FcHome style={{ marginRight: '10px' }} size={30}></FcHome>
        Back to home
      </BackLink>
      <CardContainer>
            <TweetsContainer>
        {users && users.map(user => <TweetCard key={user.id} user={user} />)}
      </TweetsContainer>
      {hasNextPage && (
        <LoadMoreButton onClick={fetchNextPage}>Load More</LoadMoreButton>
      )}
    </CardContainer>
    </Section>
     );
};

export default Tweets;
