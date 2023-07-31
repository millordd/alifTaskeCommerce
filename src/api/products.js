export const productsApi = {
  getProducts: async (category, search) => {
    let res = await fetch(
      category && !search?.length
        ? `https://dummyjson.com/products/category/${category}`
        : `https://dummyjson.com/products/search?q=${search}`,
    );
    return await res.json();
  },

  getCategories: async () => {
    let res = await fetch('https://dummyjson.com/products/categories');
    return await res.json();
  },
};
