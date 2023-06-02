import React, { useState, useEffect} from 'react';
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

const PER_PAGE = 12;

const Tweets = () => {
  const [page, setPage] = useState(1);
  const { data: users, error, isLoading, isFetching } = useGetUsersQuery(page);

  useEffect(() => {
    setPage(1);
  }, []);

  if (isLoading && page === 1) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error && page === 1) {
    return <ErrorMessage>Waiting for new Tweets to be posted...</ErrorMessage>;
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const displayedUsers = users ? users.slice(0, page * PER_PAGE) : [];

  return (
    <Section>
      <BackLink to="/">
        <FcHome style={{ marginRight: '10px' }} size={30}></FcHome>
        Back to home
      </BackLink>
      <CardContainer>
        <TweetsContainer>
          {displayedUsers.map(user => (
            <TweetCard key={user.id} user={user} />
          ))}
        </TweetsContainer>
        {!isFetching && displayedUsers.length < users.length && (
          <LoadMoreButton onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        )}
      </CardContainer>
    </Section>
  );
};

export default Tweets;