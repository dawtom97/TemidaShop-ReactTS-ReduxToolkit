import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../store/features/products/productsSlice';

export const ProductDetails = () => {
  const {id} = useParams<string>();
  const dispatch = useDispatch();
  const product = useSelector(({products}:any) => products.singleItem[0]);
  console.log(product)

  useEffect(()=>{
   dispatch(getSingleProduct(id));

  },[])
  

  return (
    <div>
      {product ? (
        <img src={product.images[0]}/>
      ):
      (
        <p>Loading.....</p>
      )
      }
    </div>
  )
}
