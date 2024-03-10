/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Pagination from '../components/Pagination.jsx';
import './HomePage.css';
import { removeDuplicatesIds, removeDuplicatesItems } from '../utils/removeDuplicates.js';
import getIds from '../api/getIds.js';
import getItems from '../api/getItems.js';
import getFilter from '../api/getfilter.js';
import ProductsList from '../components/ProductsList.jsx';
import Filter from '../components/Filter.jsx';

const pageSize = 50;

const HomePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: 'noFilter', value: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        if (filter.category === 'noFilter') {
          const allIds = await getIds();
          const uniqAllIds = removeDuplicatesIds(allIds.data.result);
          const ids = await getIds(pageSize * currentPage, pageSize + 10);
          const uniqIds = removeDuplicatesIds(ids.data.result);
          const product = await getItems(uniqIds);
          const uniqItems = removeDuplicatesItems(product.data.result);
          setProducts(uniqItems.slice(0, 50));
          setPageCount(Math.ceil(uniqAllIds.length / pageSize));
          setLoading(false);
          return;
        }

        if (filter.category === 'price') {
          const { data } = await getFilter(filter.category, +(filter.value));
          const uniqIds = removeDuplicatesIds(data.result);
          const product = await getItems(uniqIds);
          const uniqItems = removeDuplicatesItems(product.data.result);
          setProducts(uniqItems.slice(pageSize * currentPage, pageSize * (currentPage + 1)));
          setPageCount(Math.ceil(uniqIds.length / pageSize));
          setLoading(false);
          return;
        }

        const { data } = await getFilter(filter.category, filter.value);
        const uniqIds = removeDuplicatesIds(data.result);
        const product = await getItems(uniqIds);
        const uniqItems = removeDuplicatesItems(product.data.result);
        setProducts(uniqItems.slice(pageSize * currentPage, pageSize * (currentPage + 1)));
        setPageCount(Math.ceil(uniqIds.length / pageSize));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(true);
        fetch();
      }
    };
    fetch();
  }, [currentPage, filter]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div className="container">
      <h1>Каталог товаров</h1>
      <Filter setFilter={setFilter} setCurrentPage={setCurrentPage} />
      <ClipLoader
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!loading ? (
        <>
          <ProductsList products={products} />
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={currentPage}
          />
        </>
      ) : null}
    </div>
  );
};

export default HomePage;
