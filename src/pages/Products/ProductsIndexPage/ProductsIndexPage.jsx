import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Spin } from 'antd';
import Menu from 'antd/es/menu';
import { Pagination } from 'antd';

import ProductCard from 'components/Product/ProductCard';
import { useGetProducts } from 'hooks/api/useGetProducts';
import { useGetCategories } from 'hooks/api/useGetCategories';
import { setSearch, setSelectedCategory, setPagination } from 'store/products/products-reducer';

function ProductsIndexPage() {
  const dispatch = useDispatch();

  const getSelectedCategory = useSelector((store) => store.product.selectedCategory);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useGetProducts();
  const { data: categories } = useGetCategories();

  const searchQuery = debounce((val) => {
    dispatch(setSearch(val));
  }, 1000);

  const changeCategory = useCallback(
    (el) => {
      dispatch(setSelectedCategory(el));
    },
    [dispatch],
  );

  const changeSearch = useCallback(
    (el) => {
      const value = el.target.value;
      setSearchValue(value);
      searchQuery(value);
    },
    [searchQuery],
  );

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spin spinning size="large"></Spin>
      </div>
    );
  }

  return (
    <div className="max-w-[1450px] mx-auto pt-5 pb-[30px] bg-[#fff]">
      <div className="w-[90%] mx-auto ">
        <p></p>
        <Select className="w-[300px]" value={getSelectedCategory} defaultValue="All" onChange={changeCategory}>
          <Menu>All</Menu>
          {categories?.map((e) => {
            return (
              <>
                <Menu value={e}>{e}</Menu>
              </>
            );
          })}
        </Select>
        <input
          onChange={changeSearch}
          type="search"
          className="w-full p-2 border-2 mt-[20px] rounded-[12px]"
          placeholder="Search products..."
          value={searchValue}
        />

        <div className="pt-[10px] flex flex-wrap mt-[20px] justify-center  gap-[30px]">
          {data?.products && Array.isArray(data?.products) ? (
            data?.products?.map((el) => (
              <div key={el.id}>
                <ProductCard
                  product={el}
                  path={el.id}
                  price={el.price}
                  img={el.thumbnail}
                  title={el.title}
                  pricee={el.price}
                  category={el.category}
                />
              </div>
            ))
          ) : (
            <div>No items in the list</div>
          )}
          {/* <div className="w-full flex justify-center">
            {data.total && <Pagination defaultCurrent={1} total={data.total} />}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductsIndexPage;
