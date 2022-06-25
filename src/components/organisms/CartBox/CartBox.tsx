import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { CartItem } from '../../molecules/CartItem/CartItem';
import { CartItemsProps } from './CartBox.types';
import * as Styled from './styles';

export const CartBox = ({ items }: CartItemsProps) => {
  console.log(items);
  const {total} = useSelector((state:RootState) => state.cart)

  return (
    <Styled.Wrapper>
      {items.map((item,index) => (
        <CartItem
          key={index}
          cartId={item.cartId}
          color={item.color}
          size={item.size}
          image={item.images[0]}
          title={item.title}
          price={item.price}
          amount={item.amount}
        />
      ))}
      <h2>{total}</h2>
    </Styled.Wrapper>
  );
};
