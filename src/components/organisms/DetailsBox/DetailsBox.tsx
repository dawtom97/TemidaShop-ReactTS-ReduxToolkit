import { useEffect, useState } from 'react';
import { Button } from '../../atoms/Button';
import { FilterBox } from '../../molecules/FilterBox/FilterBox';
import { Heading } from '../../molecules/Heading/Heading';
import { DetailsProps } from './Details.types';
import * as Styled from './styles';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { ReturnButton } from '../../atoms/ReturnButton';
import { ImagesBox } from '../../molecules/ImagesBox/ImagesBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addToLiked, removeFromLiked } from '../../../store/features/products/productsSlice';

export const DetailsBox = ({ product }: DetailsProps) => {
  const dispatch = useDispatch();
  const { likedItems } = useSelector((state: RootState) => state.products);

  const [isLiked, setIsLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [filterColor, setFilterColor] = useState<string>('');
  const [filterSize, setFilterSize] = useState<string>('');

  useEffect(() => {
    setCurrentImage(product.images[0]);
    setFilterColor(product.colors[0]);
    setFilterSize(product.sizes[0]);

    return () => setCurrentImage(null);
  }, [product]);

  const handleImageChange = (index: string) => setCurrentImage(product.images[index]);

  const handleAddToLiked = (id: string) => {
    const isLiked = likedItems.findIndex((item: any) => item.id === id);
    if (isLiked === -1) {
      dispatch(addToLiked(product));
    } else {
      dispatch(removeFromLiked(id));
    }
  };

  return (
    <Styled.Wrapper>
      <ReturnButton to='/'>
        <IoIosArrowBack />
      </ReturnButton>
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
          <Button isSecondary isLiked={isLiked}>
            <AiFillHeart onClick={() => handleAddToLiked(product.id)} />
          </Button>
          <Button>
            ${product.price} <HiOutlineArrowNarrowRight />{' '}
          </Button>
        </Styled.Buttons>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};
