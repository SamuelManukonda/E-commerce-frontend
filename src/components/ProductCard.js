import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  Button,
} from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: (theme) => theme.shadows[2],
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[6],
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {product.description}
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>
          <Chip
            size="small"
            label={product.category}
            color="default"
            variant="outlined"
          />
        </Stack>

        {product.specs && (
          <Typography variant="caption" color="text.secondary">
            {product.specs}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

