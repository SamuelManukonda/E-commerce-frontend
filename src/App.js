import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ProductsPage from './features/products/ProductsPage';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: (theme) => theme.palette.grey[100],
      }}
    >
      <AppBar position="sticky" color="primary" elevation={3}>
        <Toolbar>
          <StorefrontIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Marketplace
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Discover curated products
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          <Typography variant="h4" component="h1">
            Product Catalogue
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Browse our curated selection of products. Pagination keeps the
            experience fast and smooth as the catalogue grows.
          </Typography>
        </Box>

        <ProductsPage />
      </Container>
    </Box>
  );
}

export default App;
