import { useEffect, useState } from 'react';
import { Button } from '../../atoms/Button';
import { FilterBox } from '../../molecules/FilterBox/FilterBox';
import { Heading } from '../../molecules/Heading/Heading';
import { DetailsProps } from './Details.types';
import * as Styled from './styles';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { ImagesBox } from '../../molecules/ImagesBox/ImagesBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addToLiked, removeFromLiked } from '../../../store/features/products/productsSlice';
import { ProductProps } from '../../../types/Product.types';
import { hideModal, showModal } from '../../../store/features/modal/modalSlice';
import { addToCart } from '../../../store/features/cart/cartSlice';
import { v4 as uuidv4 } from 'uuid';

export const DetailsBox = ({ product }: DetailsProps) => {
  const dispatch = useDispatch();
  const { likedItems } = useSelector((state: RootState) => state.products);
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(product.images[0]);
  const [filterColor, setFilterColor] = useState<string>('');
  const [filterSize, setFilterSize] = useState<string>('');
  const { isOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    setCurrentImage(product.images[0]);
    setFilterColor(product.colors[0]);
    setFilterSize(product.sizes[0]);
    return () => setCurrentImage('');
  }, [product]);

  useEffect(() => {
    const like = likedItems.findIndex((item: ProductProps) => item.id === product.id);
    if (like !== -1) setIsLiked(true);
    return () => setIsLiked(false);
  }, [product, dispatch]);

  const handleImageChange = (index: number) => setCurrentImage(product.images[index]);

  const handleToggleModal = (msg: string) => {
    dispatch(showModal(msg));
    setTimeout(() => dispatch(hideModal()), 2000);
  };

  const handleAddToLiked = (id: string) => {
    const like = likedItems.findIndex((item: ProductProps) => item.id === id);
    if (like === -1) {
      dispatch(addToLiked(product));
      handleToggleModal('Product added to favorites');
      setIsLiked(true);
    } else {
      dispatch(removeFromLiked(id));
      handleToggleModal('Product removed from favorites');
      setIsLiked(false);
    }
  };

  const handleAddToCart = (id: string) => {

    console.log('próbuje dodać do koszyka')

    const inCart = cartItems.findIndex((item) => {
      if (item.id === id && item.size === filterSize && item.color === filterColor) return true;
      return false;
    });

    if (inCart === -1) {
      const addProduct = {
        ...product,
        cartId: uuidv4(),
        amount: 1,
        size: filterSize,
        color: filterColor,
      };
      dispatch(addToCart(addProduct));
      handleToggleModal('Product added to the cart');
    } else {
      handleToggleModal('Product is already in the cart');
    }
  };

  return (
    <Styled.Wrapper>
      <img src={currentImage} />

      <ImagesBox images={product.images} currentImage={currentImage} onClick={handleImageChange} />

      <Styled.InfoBox>
        <Styled.Categories>
          {product.category.map((cat, index) => (
            <span key={index}>{cat}</span>
          ))}
        </Styled.Categories>
        <Heading title={product.title} short={product.short} />
        <Styled.Filters>
          <FilterBox
            onClick={setFilterColor}
            currentValue={filterColor}
            isGraphical
            title='Color'
            options={product.colors}
          />
          <FilterBox
            onClick={setFilterSize}
            currentValue={filterSize}
            title='Size'
            options={product.sizes}
          />
        </Styled.Filters>
        <Styled.Buttons>
          <Button
            disabled={isOpen}
            isSecondary
            isLiked={isLiked}
            onClick={() => handleAddToLiked(product.id)}
          >
            <AiFillHeart />
          </Button>
          <Button disabled={isOpen} onClick={() => handleAddToCart(product.id)}>
            ${product.price} <HiOutlineArrowNarrowRight />{' '}
          </Button>
        </Styled.Buttons>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};
