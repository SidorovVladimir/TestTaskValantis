import React, { useEffect, useState } from 'react';
import api from '../api/index.js';
import Pagination from '../components/Pagination.jsx';
import './HomePage.css';
import { removeDuplicatesIds, removeDuplicatesItems } from '../utils/removeDuplicates.js';
import getIds from '../utils/getIds.js';
import ProductsList from '../components/ProductsList.jsx';

const pageSize = 50;

const HomePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchIds = async () => {
      try {
        const { data } = await api.post('', getIds());
        const uniqIds = removeDuplicatesIds(data.result);
        setPageCount(Math.ceil(uniqIds.length / pageSize));
      } catch (err) {
        console.log(err);
        fetchIds();
      }
    };
    fetchIds();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.post('', getIds(pageSize * currentPage, pageSize * 2));
        const uniqIds = removeDuplicatesIds(data.result);

        const product = await api.post('', {
          action: 'get_items',
          params: { ids: uniqIds },
        });
        const uniqItems = removeDuplicatesItems(product.data.result);
        setProducts(uniqItems.slice(0, 50));
      } catch (err) {
        console.log(err);
        fetchProducts();
      }
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div className="container">
      <h1>Список товаров</h1>
      <ProductsList products={products} />
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export default HomePage;
