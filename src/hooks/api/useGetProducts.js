import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { productsApi } from '../../api/products';

export function useGetProducts() {
  const selectedCategory = useSelector((store) => store.product.selectedCategory);
  const search = useSelector((store) => store.product.search);
  const pagination = useSelector((store) => store.product.pagination);
  
  return useQuery( 
    ['get-products', selectedCategory, search,pagination],
    async () => await productsApi.getProducts(selectedCategory, search,pagination),
  );
}
