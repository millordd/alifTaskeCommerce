import React from 'react';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addProduct } from 'store/cart/cart-reducer';

export default function ProductCard(product) {
  const { id, images, price, title, category } = product;
  
  const dispatch = useDispatch();

  const cartProducts = useSelector((store) => store.cart.products);
  const alreadyAdded = cartProducts.some((x) => x.id === id);

  const addProductToCard = () => {
    dispatch(addProduct(product));
    message.success(`${product.title} Has been added to cart`);
  };

  return (
    <div>
      <Card sx={{ maxHeight: '420px', maxWidth: '250px' }}>
        <div style={{ width: '300px', height: '200px', display: 'flex' }}>
          <Link to={`/products/${id}`}>
            <img src={images[0]} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Link>
        </div>
        <CardContent>
          <Typography variant="h6" color="red">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
          <div>Цена: {price}$ </div>
          <Button disabled={alreadyAdded} onClick={addProductToCard}>
            В корзину
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
