import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsBox } from '../components/organisms/DetailsBox/DetailsBox';
import { MainTemplate } from '../components/templates/MainTemplate';
import { getSingleProduct } from '../store/features/products/productsSlice';

export const ProductDetails = () => {
  const { id } = useParams<string>();
  const dispatch = useDispatch();
  const product = useSelector(({ products }: any) => products.singleItem[0]);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  if (product) {
    return (
      <MainTemplate>
      <div>
        <DetailsBox product={product} />
      </div>
      </MainTemplate>
    );
  }

  return <p>Loading</p>;
};
