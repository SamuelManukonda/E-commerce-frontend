import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Pagination, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '../../components/ProductGrid';
import {
  fetchProducts,
  selectProducts,
  selectProductsError,
  selectProductsStatus,
} from './productsSlice';

const PRODUCTS_PER_PAGE = 20;

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));
  const paginatedProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <ProductGrid products={paginatedProducts} />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
}

export default ProductsPage;

