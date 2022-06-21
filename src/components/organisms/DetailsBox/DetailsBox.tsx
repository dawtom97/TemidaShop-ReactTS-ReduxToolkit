import  { useEffect, useState } from 'react';
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

export const DetailsBox = ({ product }: DetailsProps) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const handleImageChange = (index: string) => setCurrentImage(product.images[index]);
  console.log(product);

  useEffect(() => {
    setCurrentImage(product.images[0]);

    return () => setCurrentImage(null);
  }, [product]);

  console.log(currentImage);

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
          <FilterBox isGraphical title='Colors' options={product.colors} />
          <FilterBox title='Size' options={product.sizes} />
        </Styled.Filters>
        <Styled.Buttons>
          <Button isSecondary>
            <AiFillHeart />
          </Button>
          <Button>
            ${product.price} <HiOutlineArrowNarrowRight />{' '}
          </Button>
        </Styled.Buttons>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};
