import React from 'react';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addProduct } from 'store/cart/cart-reducer';

export default function ProductCard({ img, pricee, title, category, product, path }) {
  const dispatch = useDispatch();

  const addProductToCard = () => {
    dispatch(addProduct(product));
    message.success(`${product.title} Has been added to cart`);
  };

  return (
    <div>
      <Card sx={{ maxHeight: '420px', maxWidth: '250px' }}>
        <div style={{ width: '300px', height: '200px', display: 'flex' }}>
          <Link to={`/products/${path}`}>
            <img src={img} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Link>
        </div>
        <CardContent >
        
          <Typography variant="h6"  color="red">
          {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
          <div>Цена: {pricee}$ </div>
          <Button onClick={addProductToCard}>В корзину</Button>
        </CardActions>
      </Card>
    </div>
  );
}
