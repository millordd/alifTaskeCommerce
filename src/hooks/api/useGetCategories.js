import { useQuery } from 'react-query';

import { productsApi } from '../../api/products';

export function useGetCategories() {
  return useQuery('get-categories', productsApi.getCategories);
}
