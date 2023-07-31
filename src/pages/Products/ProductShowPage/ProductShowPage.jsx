import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProducts } from '@/hooks/api/useGetProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { addProduct } from '../../../store/cart/cart-reducer';
import { message } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProductShowPage.css';

function ProductShowPage() {
  const { id } = useParams();
  const { data } = useGetProducts();
  const dispatch = useDispatch();

  const addProductToCard = (el) => {
    dispatch(addProduct(el));
    message.success(`${el.title} Has been added to cart`);
  };
  const product = data.products.filter((el) => el.id == id);

  return (
    <div>
      <Link to={'/'}>
        <p className="text-[20px] p-3 pl-3 cursor-pointer"> &lt; Назад</p>
      </Link>
      {product.map((el) => {
        return (
          <div className="w-[90%] mx-auto flex md:flex-col " key={el.id}>
            <div className="w-[50%] md:w-full flex justify-center items-center h-screen">
              <Swiper
                pagination={{
                  type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pt-[40px]"
              >
                <SwiperSlide>
                  {' '}
                  <img src={el.images[0]} alt="" className=" " />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[1]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[2]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[3]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[4]} alt="" />{' '}
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="w-[40%] md:w-full pt-[80px]  ">
              <div>
                <p className="text-[38px] font-[600] text-[#ffdd00]">{el.title}</p>
                <p className="text-[22px] pt-[30px]">{el.description}</p>
                <p className="text-[20px] text-end pt-[30px] font-[700]"> Цена: {el.price}$</p>

                <button
                  onClick={() => addProductToCard(el)}
                  className="bg-[#ffdd00] text-white font-[600] text-[20px] rounded-lg mt-[30px] p-2 w-full"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductShowPage;
