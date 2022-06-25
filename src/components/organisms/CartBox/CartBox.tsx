import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Button } from '../../atoms/Button';
import { CartItem } from '../../molecules/CartItem/CartItem';
import { Heading } from '../../molecules/Heading/Heading';
import { CartItemsProps } from './CartBox.types';
import * as Styled from './styles';

export const CartBox = ({ items }: CartItemsProps) => {
  const { total } = useSelector((state: RootState) => state.cart);
  if (total <= 0) {
    return (
      <Styled.Wrapper>
        <Heading title='Your cart' />
        <h2>Cart is empty</h2>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Heading title='Your cart' />
      <Styled.ProductsBox>
      {items.map((item) => (
       
          <CartItem
            key={item.cartId}
            cartId={item.cartId}
            color={item.color}
            size={item.size}
            image={item.images[0]}
            title={item.title}
            price={item.price}
            amount={item.amount}
          />
        
       
      ))}
      </Styled.ProductsBox>
      {total > 0 ?  <h2>To pay: <span>${total}</span></h2>: null}
      {total > 0 ? <Button>Start payment</Button> : null}
    </Styled.Wrapper>
  );
};
