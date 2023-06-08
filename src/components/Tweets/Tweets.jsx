import React, { useState, useEffect, useCallback } from 'react';
import { FcHome } from 'react-icons/fc';
import {
  useGetUsersQuery,
  useUpdateFollowStatusMutation,
} from 'redux/auth/operations';
import TweetCard from 'components/TweetCard/TweetCard';
import Loader from 'components/Loader';
import {
  ErrorMessage,
  LoadMoreButton,
  BackLink,
  TweetsContainer,
  CardContainer,
  Section,
  FilterDropdown,
} from './Tweets.styled';

const PER_PAGE = 4;

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const { data: users, error, isLoading } = useGetUsersQuery(page);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [updateFollowStatus] = useUpdateFollowStatusMutation();

  const filterUsers = useCallback(
    (users) => {
      if (users) {
        if (filter === 'follow') {
          return users.filter((user) => !user.followStatus);
        } else if (filter === 'following') {
          return users.filter((user) => user.followStatus);
        }
        return users;
      }
      return [];
    },
    [filter]
  );

  useEffect(() => {
    const savedFilter = localStorage.getItem('filter');
    const savedPage = localStorage.getItem('page');

    if (savedFilter) {
      setFilter(savedFilter);
    }
    if (savedPage) {
      setPage(parseInt(savedPage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('filter', filter);
    localStorage.setItem('page', page.toString());
  }, [filter, page]);

  useEffect(() => {
    if (users) {
      const filtered = filterUsers(users);
      setDisplayedUsers(filtered.slice(0, page * PER_PAGE));
    }
  }, [users, filter, page, filterUsers]);

  const handleFollowToggle = async (userId, followStatus) => {
    await updateFollowStatus({ userId, followStatus });
    setPage(1); // Reset page to 1 after changing follower
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const filteredUsers = filterUsers(users);
  const isLoadMoreVisible =
    filteredUsers.length > 0 && displayedUsers.length < filteredUsers.length;

  if (isLoading && page === 1) {
    return <Loader>Loading...</Loader>;
  }

  if (error && page === 1) {
    return (
      <ErrorMessage>Waiting for new Tweets to be posted...</ErrorMessage>
    );
  }

  return (
    <Section>
      <BackLink to="/">
        <FcHome style={{ marginRight: '10px' }} size={30} />
        Back to home
      </BackLink>
      <CardContainer>
        <FilterDropdown value={filter} onChange={handleFilterChange}>
          <option value="all">Show All</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </FilterDropdown>
        <TweetsContainer>
          {displayedUsers.map((user) => (
            <TweetCard
              key={user.id}
              user={user}
              onFollowToggle={handleFollowToggle}
            />
          ))}
        </TweetsContainer>
        {isLoadMoreVisible && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
      </CardContainer>
    </Section>
  );
};

export default Tweets;