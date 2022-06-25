import React from 'react'
import { useSelector } from 'react-redux'
import { CartBox } from '../components/organisms/CartBox/CartBox'
import { MainTemplate } from '../components/templates/MainTemplate'
import { RootState } from '../store/store'

export const CartPage = () => {
  const {items} = useSelector((state:RootState) => state.cart);
  console.log(items);
  return (
    <MainTemplate>
        <CartBox items={items}/>
    </MainTemplate>
  )
}

