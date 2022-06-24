import { MouseEvent } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeFromLiked } from '../../../store/features/products/productsSlice';
import { Button } from '../../atoms/Button';
import { Paragraph } from '../../atoms/Paragraph';
import { ProductCardProps } from './ProductCard.types';
import * as Styled from './styles';

export const ProductCard = ({
  images,
  title,
  price,
  id,
  category,
  isThumbnail,
}: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleRemoveFromLiked = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    dispatch(removeFromLiked(id));
  };

  return (
    <NavLink to={`/product/${id}`}>
      <Styled.Wrapper isThumbnail={isThumbnail}>
        <Styled.ImageBox isThumbnail={isThumbnail}>
          <img src={images[0]} alt={title} />
        </Styled.ImageBox>

        <div>
          <span>{category.join(', ')}</span>
          <Paragraph>{title}</Paragraph>
          <Paragraph isBold>${price}</Paragraph>
        </div>
        {isThumbnail ? (
          <Button isSecondary onClick={(e) => handleRemoveFromLiked(e, id)}>
            <AiFillHeart />
          </Button>
        ) : null}
      </Styled.Wrapper>
    </NavLink>
  );
};
