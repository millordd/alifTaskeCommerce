import React, { useEffect, useState } from 'react';
import { RemoveCircleOutlineOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Button, Drawer, InputNumber, Table } from 'antd';
import { removeProduct } from 'store/cart/cart-reducer';

import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.cart.products);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartProducts.map((product) => ({ total: 0, ...product })));
  }, [cartProducts]);

  return (
    <div>
      <Badge count={cartItems.length} onClick={() => setCartDrawerOpen(true)}>
        <ShoppingCartOutlined className="text-[20px] cursor-pointer"></ShoppingCartOutlined>
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        contentWrapperStyle={{ width: 500 }}
        title="Ваш Корзина"
      >
        <Table
          pagination={false}
          columns={[
            {
              title: 'Title',
              dataIndex: 'title',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: 'Quantity',
              dataIndex: 'quantity',
              render: (value, record) => {
                return (
                  <InputNumber
                    min={0}
                    defaultValue={value}
                    onChange={(value) => {
                      setCartItems((pre) =>
                        pre.map((cart) => {
                          if (record.id == cart.id) {
                            cart.total = cart.price * value;
                          }
                          return cart;
                        }),
                      );
                    }}
                  ></InputNumber>
                );
              },
            },

            {
              title: 'Total',
              dataIndex: 'total',
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: 'Remove',
              dataIndex: 'id',
              render: (id, record) => {
                return (
                  <button onClick={() => dispatch(removeProduct(record.id))}>
                    <RemoveCircleOutlineOutlined color="error" className="cur" />
                  </button>
                );
              },
            },
          ]}
          dataSource={cartItems}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            return <span>Total:{total}</span>;
          }}
        />
      </Drawer>
    </div>
  );
}

export default Cart;
