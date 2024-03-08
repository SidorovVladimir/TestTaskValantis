import React, { useEffect, useState } from 'react';
import api from '../api/index.js';
import Pagination from '../components/Pagination.jsx';
import removeDuplicates from '../utils/removeDuplicates.js';

const Home = () => {
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    const fetchIds = async () => {
      try {
        const { data } = await api.post('', {
          action: 'get_ids',
          params: {},
        });
        console.log(data.result);
        setPageCount(data.result.length / 50);
      } catch (err) {
        console.log(err);
        fetchIds();
      }
    };

    fetchIds();
  }, []);

  const handlePageClick = (e) => {
    console.log(e);
  };

  return (
    <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
  );
};

export default Home;
