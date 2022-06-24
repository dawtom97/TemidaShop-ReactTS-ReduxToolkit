import React from 'react'
import { useSelector } from 'react-redux'
import { MainTemplate } from '../components/templates/MainTemplate'
import { RootState } from '../store/store'

export const CartPage = () => {
  const {items} = useSelector((state:RootState) => state.cart);
  console.log(items);
  return (
    <MainTemplate>
        <h2>Cart</h2>
    </MainTemplate>
  )
}

