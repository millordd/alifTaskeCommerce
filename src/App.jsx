import React from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import ProductsIndexPage from 'pages/Products/ProductsIndexPage/ProductsIndexPage';
import ProductShowPage from 'pages/Products/ProductShowPage/ProductShowPage';
import NavBar from 'components/Core/NavBar/NavBar';

export const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<NavBar />}
        children={
          <>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsIndexPage />} />
            <Route path="/products/:id" element={<ProductShowPage />} />
          </>
        }
      />
    </>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
