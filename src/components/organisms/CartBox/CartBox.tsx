import { CartItem } from '../../molecules/CartItem/CartItem';
import { CartItemsProps } from './CartBox.types';
import * as Styled from './styles';

export const CartBox = ({ items }: CartItemsProps) => {
  console.log(items);

  return (
    <Styled.Wrapper>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          color={item.color}
          size={item.size}
          image={item.images[0]}
          title={item.title}
          price={item.price}
          amount={item.amount}
        />
      ))}
      {/* <CartItem image={items.images[0]}/> */}
    </Styled.Wrapper>
  );
};
