import React, { useState, useEffect, useCallback } from 'react';
import { FcHome } from 'react-icons/fc';
import { useGetUsersQuery } from 'redux/auth/operations';
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

const PER_PAGE = 12;

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const { data: users, error, isLoading } = useGetUsersQuery(page);
  const [filteredUsers, setFilteredUsers] = useState([]);

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

  const filterUsers = useCallback((users) => {
    if (filter === 'follow') {
      return users.filter(user => !user.followStatus);
    } else if (filter === 'following') {
      return users.filter(user => user.followStatus);
    }
    return users;
  }, [filter]);

  useEffect(() => {
    if (users) {
      const filtered = filterUsers(users);
      setFilteredUsers(filtered);
    }
  }, [users, filter, filterUsers]);

  if (isLoading && page === 1) {
    return <Loader>Loading...</Loader>;
  }

  if (error && page === 1) {
    return <ErrorMessage>Waiting for new Tweets to be posted...</ErrorMessage>;
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const displayedUsers = filteredUsers.slice(0, page * PER_PAGE);
  const isLoadMoreVisible = displayedUsers.length < filteredUsers.length && displayedUsers.length > 0;

  return (
    <Section>
      <BackLink to="/">
        <FcHome style={{ marginRight: '10px' }} size={30}></FcHome>
        Back to home
      </BackLink>
      <CardContainer>
        <FilterDropdown
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Show All</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </FilterDropdown>
        <TweetsContainer>
          {displayedUsers.map(user => (
            <TweetCard key={user.id} user={user} />
          ))}
        </TweetsContainer>
        {isLoadMoreVisible && (
          <LoadMoreButton onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        )}
      </CardContainer>
    </Section>
  );
};

export default Tweets;








// import React, { useState, useEffect } from 'react';
// import { FcHome } from 'react-icons/fc';
// import { useGetUsersQuery } from 'redux/auth/operations';
// import TweetCard from 'components/TweetCard/TweetCard';
// import Loader from 'components/Loader';
// import {
//   ErrorMessage,
//   LoadMoreButton,
//   BackLink,
//   TweetsContainer,
//   CardContainer,
//   Section,
//   FilterDropdown,
// } from './Tweets.styled';

// const PER_PAGE = 12;

// const Tweets = () => {
//   const [page, setPage] = useState(1);
//   const [filter, setFilter] = useState('all');
//   const { data: users, error, isLoading } = useGetUsersQuery(page);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     const savedFilter = localStorage.getItem('filter');
//     const savedPage = localStorage.getItem('page');
//     if (savedFilter) {
//       setFilter(savedFilter);
//     }
//     if (savedPage) {
//       setPage(parseInt(savedPage));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('filter', filter);
//     localStorage.setItem('page', page.toString());
//   }, [filter, page]);

//   useEffect(() => {
//     const filterUsers = (users) => {
//       if (filter === 'follow') {
//         return users.filter(user => !user.followStatus);
//       } else if (filter === 'following') {
//         return users.filter(user => user.followStatus);
//       }
//       return users;
//     };
  
//     if (users) {
//       const filtered = filterUsers(users);
//       setFilteredUsers(filtered);
//     }
//   }, [users, filter, filterUsers]);

//   if (isLoading && page === 1) {
//     return <Loader>Loading...</Loader>;
//   }

//   if (error && page === 1) {
//     return <ErrorMessage>Waiting for new Tweets to be posted...</ErrorMessage>;
//   }

//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const filterUsers = (users) => {
//     if (filter === 'follow') {
//       return users.filter(user => !user.followStatus);
//     } else if (filter === 'following') {
//       return users.filter(user => user.followStatus);
//     }
//     return users;
//   };

//   const displayedUsers = filteredUsers.slice(0, page * PER_PAGE);
//   const isLoadMoreVisible = displayedUsers.length < filteredUsers.length && displayedUsers.length > 0;

//   return (
//     <Section>
//       <BackLink to="/">
//         <FcHome style={{ marginRight: '10px' }} size={30}></FcHome>
//         Back to home
//       </BackLink>
//       <CardContainer>
//         <FilterDropdown
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="all">Show All</option>
//           <option value="follow">Follow</option>
//           <option value="following">Following</option>
//         </FilterDropdown>
//         <TweetsContainer>
//           {displayedUsers.map(user => (
//             <TweetCard key={user.id} user={user} />
//           ))}
//         </TweetsContainer>
//         {isLoadMoreVisible && (
//           <LoadMoreButton onClick={handleLoadMore}>
//             Load More
//           </LoadMoreButton>
//         )}
//       </CardContainer>
//     </Section>
//   );
// };

// export default Tweets;








